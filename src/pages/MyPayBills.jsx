import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../contexts/AuthContext";
import Swal from "sweetalert2";

import jsPDF from "jspdf";
import autoTable from "jspdf-autotable";

const MyPayBills = () => {
    const { user } = useContext(AuthContext);
    const [bills, setBills] = useState([]);
    const [loading, setLoading] = useState(true);
    const [editBill, setEditBill] = useState(null);
    console.log(bills)

    // Fetching user-specific bills
    useEffect(() => {
        if (!user?.email) return;
        fetch(`http://localhost:3000/myBills?email=${user.email}`)
            .then((res) => res.json())
            .then((data) => {
                setBills(data);
                setLoading(false);
            })
            .catch(() => setLoading(false));
    }, [user]);

    const totalBills = bills.length;
    const totalAmount = bills.reduce((sum, bill) => sum + Number(bill.amount || 0), 0);


    const handleDelete = (id) => {
        Swal.fire({
            title: "Are you sure?",
            text: "This bill record will be permanently deleted.",
            icon: "warning",
            showCancelButton: true,
            confirmButtonText: "Yes, delete it!",
            cancelButtonText: "Cancel",
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`http://localhost:3000/myBills/${id}`, { method: "DELETE" })
                    .then((res) => res.json())
                    .then((data) => {
                        if (data.deletedCount > 0) {
                            Swal.fire("Deleted!", "Your bill record has been removed.", "success");
                            setBills(bills.filter((b) => b._id !== id));
                        }
                    });
            }
        });
    };


    const handleUpdate = (e) => {
        e.preventDefault();
        const form = e.target;
        const updated = {
            amount: form.amount.value,
            address: form.address.value,
            phone: form.phone.value,
            date: form.date.value,
        };

        fetch(`http://localhost:3000/myBills/${editBill._id}`, {
            method: "PUT",
            headers: { "content-type": "application/json" },
            body: JSON.stringify(updated),
        })
            .then((res) => res.json())
            .then((data) => {
                if (data.modifiedCount > 0) {
                    Swal.fire("Updated!", "Bill details updated successfully.", "success");
                    setBills((prev) =>
                        prev.map((b) => (b._id === editBill._id ? { ...b, ...updated } : b))
                    );
                    setEditBill(null);
                }
            });
    };
    /// Download report (PDF)
    const handleDownloadReport = () => {
        const doc = new jsPDF();

        // Title
        doc.setFontSize(16);
        doc.text("My Pay Bills Report", 14, 15);

        // Summary
        doc.setFontSize(12);
        doc.text(`Username: ${user?.displayName || "N/A"}`, 14, 25);
        doc.text(`Email: ${user?.email}`, 14, 32);
        doc.text(`Total Bills Paid: ${totalBills}`, 14, 39);
        doc.text(`Total Amount: ৳${totalAmount}`, 14, 46);

        // Table data
        const tableColumn = ["Username", "Email", "Amount", "Address", "Phone", "Date"];
        const tableRows = bills.map((b) => [
            b.username,
            b.email,
            `${b.amount} tk`,
            b.address,
            b.phone,
            b.date,
        ]);

        autoTable(doc, {
            startY: 55,
            head: [tableColumn],
            body: tableRows,
            theme: "grid",
            styles: { fontSize: 10 },
            headStyles: { fillColor: [99, 102, 241] },
        });

        // Save file
        doc.save(`${user?.email}_bill_report.pdf`);
    };




    if (loading)
        return <div className="text-center py-10 text-gray-600">Loading your bills...</div>;

    return (
        <div className="w-11/12 mx-auto mt-8">

            <div className="flex flex-col md:flex-row justify-between items-center mb-6">
                <h3 className="text-2xl font-bold">
                    My Pay Bills:{" "}
                    <span className="text-indigo-600">{totalBills}</span>
                </h3>
                <button
                    onClick={handleDownloadReport}
                    className="btn btn-sm bg-indigo-600 text-white hover:bg-indigo-700"
                >
                    Download Report
                </button>
            </div>

            <div className="mb-4 text-gray-700 font-medium">
                <p>
                    Total Bills Paid: <span className="text-indigo-600">{totalBills}</span>
                </p>
                <p>
                    Total Amount:{" "}
                    <span className="text-indigo-600 font-semibold">৳{totalAmount}</span>
                </p>
            </div>

            <div className="overflow-x-auto border border-gray-200 rounded-xl">
                <table className="table w-full">
                    <thead className="bg-indigo-50 text-gray-700">
                        <tr>
                            <th>#</th>
                            <th>Username</th>
                            <th>Email</th>
                            <th>Amount</th>
                            <th>Address</th>
                            <th>Phone</th>
                            <th>Date</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {bills.map((bill, i) => (
                            <tr key={bill._id} className="hover:bg-gray-50">
                                <td>{i + 1}</td>
                                <td>{bill.username}</td>
                                <td>{bill.email}</td>
                                <td>{bill.amount}tk</td>
                                <td>{bill.address}</td>
                                <td>{bill.phone}</td>
                                <td>{bill.date}</td>
                                <td className="flex gap-2">
                                    <button
                                        onClick={() => setEditBill(bill)}
                                        className="btn btn-xs bg-green-500 text-white hover:bg-green-600"
                                    >
                                        Update
                                    </button>
                                    <button
                                        onClick={() => handleDelete(bill._id)}
                                        className="btn btn-xs bg-red-500 text-white hover:bg-red-600"
                                    >
                                        Delete
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            {/* Update Modal */}
            {editBill && (
                <dialog open className="modal modal-middle">
                    <div className="modal-box">
                        <h3 className="text-lg font-bold mb-4">Update Bill Info</h3>
                        <form onSubmit={handleUpdate} className="space-y-3">
                            <input type="number" name="amount" defaultValue={editBill.amount} className="input input-bordered w-full" required />
                            <input type="text" name="address" defaultValue={editBill.address} className="input input-bordered w-full" required />
                            <input type="text" name="phone" defaultValue={editBill.phone} className="input input-bordered w-full" required />
                            <input type="date" name="date" defaultValue={editBill.date} className="input input-bordered w-full" required />
                            <button className="btn btn-primary w-full mt-3">Save Changes</button>
                        </form>
                        <div className="modal-action">
                            <button onClick={() => setEditBill(null)} className="btn">
                                Close
                            </button>
                        </div>
                    </div>
                </dialog>
            )}
        </div>
    );
};

export default MyPayBills;

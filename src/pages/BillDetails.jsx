import React, { use, useEffect, useRef, useState } from "react";
import { useParams, useNavigate } from "react-router";
import useAxios from "../hook/useAxios";
import { FaBangladeshiTakaSign } from "react-icons/fa6";
import { AuthContext } from "../contexts/AuthContext";
import Swal from "sweetalert2";

const BillDetails = () => {
    const { id } = useParams();
    const axios = useAxios();
    const navigate = useNavigate();
    const [bill, setBill] = useState(null);
    const [loading, setLoading] = useState(true);
    const bidModalRef = useRef(null);
    const { user } = use(AuthContext);





    useEffect(() => {
        axios
            .get(`http://localhost:3000/bills/${id}`)
            .then((res) => {
                setBill(res.data);
                setLoading(false);
            })
            .catch((err) => {
                console.error("Error fetching bill:", err);
                setLoading(false);
            });
    }, [id, axios]);

    if (loading) {
        return (
            <div className="flex justify-center items-center h-screen text-gray-600 text-lg">
                Loading bill details...
            </div>
        );
    }

    if (!bill) {
        return (
            <div className="flex justify-center items-center h-screen text-red-600 text-lg">
                Bill not found.
            </div>
        );
    }

    const { title, category, location, image, amount, description, email, date, _id } =
        bill;

    const billDate = new Date(date);
    const currentDate = new Date();

    const isCurrentMonthBill =
        billDate.getMonth() === currentDate.getMonth() &&
        billDate.getFullYear() === currentDate.getFullYear();
    const handlePayBillModalOpen = () => {
        bidModalRef.current.showModal();
    };

    const handlePayBillSubmit = (e) => {
        e.preventDefault();

        const form = e.target;
        const paidBill = {
            billId: form.billId.value,
            email: form.email.value,
            amount: form.amount.value,
            username: form.name.value,
            address: form.address.value,
            phone: form.phone.value,
            date: form.date.value,
        };

        fetch('http://localhost:3000/myBills', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(paidBill)
        })
            .then(res => res.json())
            .then(data => {
                console.log('after placing bill : ', data);
                if (data.insertedId) {
                    bidModalRef.current.close();
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: "Your bill has been paid",
                        showConfirmButton: false,
                        timer: 1500
                    });

                }
            })
            .catch(err => console.error(err));
    };

    return (
        <div className="max-w-5xl mx-auto mt-10 p-6 bg-white rounded-2xl shadow-lg">

            <button
                onClick={() => navigate(-1)}
                className="text-sm text-indigo-600 hover:underline mb-5 flex items-center gap-1"
            >
                <span className="text-lg">←</span> Back to All Bills
            </button>
            {/* left */}
            <div className="grid md:grid-cols-2 gap-8">

                <div className="bg-gray-50 rounded-2xl p-5 shadow-inner space-y-4">
                    <div className="w-full rounded-xl overflow-hidden">
                        <img
                            src={image}
                            alt={title}
                            className="object-cover w-full h-72 rounded-xl transition-transform duration-300 hover:scale-105"
                        />
                    </div>



                    <div className="flex flex-wrap gap-6 mt-3 text-sm">
                        <p className="flex items-center gap-1">
                            <span className="font-semibold text-gray-800">Amount:</span>
                            <span className="text-indigo-600 font-medium flex items-center gap-1">
                                <FaBangladeshiTakaSign className="text-indigo-600" />
                                {amount}
                            </span>
                        </p>

                        <p>
                            <span className="font-semibold text-gray-800">Date:</span>{" "}
                            <span className="text-indigo-600 font-medium">{date}</span>
                        </p>
                        <br />
                        <p>
                            <span className="font-semibold text-gray-800">Location:</span>{" "}
                            <span className="text-indigo-600 font-medium">{location}</span>
                        </p>
                        <p>
                            <span className="font-semibold text-gray-800">Email:</span>{" "}
                            <span className="text-indigo-600 font-medium">{email}</span>
                        </p>
                    </div>
                </div>

                {/* right */}
                <div className="flex flex-col justify-between space-y-6">
                    <div>
                        <h1 className="text-3xl font-bold text-gray-900 mb-3">{title}
                            <span className="ml-2.5 inline-block px-3 font-normal py-1 text-sm bg-indigo-100 text-indigo-600 rounded-full">
                                {category}
                            </span>
                        </h1>



                        <div>
                            <h2 className="text-lg font-semibold text-gray-900 mb-2">
                                Bill Description
                            </h2>
                            <p className="text-gray-600 text-sm leading-relaxed">{description}</p>
                        </div>
                    </div>

                    <div>
                        <div>
                            <button
                                onClick={handlePayBillModalOpen}
                                disabled={!isCurrentMonthBill}
                                className={`w-full py-2 rounded-lg font-medium transition ${isCurrentMonthBill
                                    ? "btn-primary cursor-pointer"
                                    : "bg-gray-300 text-gray-600 cursor-not-allowed"
                                    }`}
                            >
                                {isCurrentMonthBill ? "Pay Bill Now" : "You can only pay current month bills"}
                            </button>
                        </div>


                        <dialog ref={bidModalRef} className="modal modal-bottom sm:modal-middle">
                            <div className="modal-box">
                                <h3 className="font-bold text-lg mb-4 text-indigo-700">
                                    Pay Your Due Bill
                                </h3>

                                <form onSubmit={handlePayBillSubmit} className="space-y-4">
                                    {/* bill id */}
                                    <div>
                                        <label className="label text-sm font-medium text-gray-700">BillId</label>
                                        <input type="text" name="billId" className="input input-bordered w-full" readOnly defaultValue={_id} />
                                    </div>

                                    {/* email */}
                                    <div>
                                        <label className="label text-sm font-medium text-gray-700">Email</label>
                                        <input type="email" className="input input-bordered w-full" name="email" readOnly defaultValue={user?.email} />
                                    </div>
                                    {/* amount */}
                                    <div>
                                        <label className="label text-sm font-medium text-gray-700">Amount</label>
                                        <input type="number" name="amount" className="input input-bordered w-full" readOnly defaultValue={amount} />
                                    </div>
                                    {/* user name */}

                                    <div>
                                        <label className="label text-sm font-medium text-gray-700">UserName</label>
                                        <input type="text" name="name" className="input input-bordered w-full" placeholder="Enter Your name" required />
                                    </div>
                                    {/* address */}
                                    <div>
                                        <label className="label text-sm font-medium text-gray-700">Address</label>
                                        <input type="text" name="address" className="input input-bordered w-full" placeholder="Enter Address " required />
                                    </div>

                                    {/* phone */}

                                    <div>
                                        <label className="label text-sm font-medium text-gray-700">Phone Number</label>
                                        <input type="number" name="phone" className="input input-bordered w-full" placeholder="Enter phone number" />
                                    </div>
                                    {/* date */}
                                    <div>
                                        <label className="label text-sm font-medium text-gray-700">Date</label>
                                        <input type="date" name="date" className="input input-bordered w-full" required />
                                    </div>

                                    <button type="submit" className="btn w-full btn-primary text-white mt-4">
                                        Pay Your Bill
                                    </button>
                                </form>

                                <div className="modal-action">
                                    <form method="dialog">
                                        <button className="btn">Close</button>
                                    </form>
                                </div>
                            </div>
                        </dialog>


                    </div>
                </div>
            </div>
        </div>
    );
};

export default BillDetails;

import React, { useEffect, useRef, useState } from "react";
import { useParams, useNavigate } from "react-router";
import useAxios from "../hook/useAxios";
import { FaBangladeshiTakaSign } from "react-icons/fa6";

const BillDetails = () => {
    const { id } = useParams();
    const axios = useAxios();
    const navigate = useNavigate();
    const [bill, setBill] = useState(null);
    const [loading, setLoading] = useState(true);
    const bidModalRef = useRef(null);


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

    const { title, category, location, image, amount, description, email, date } =
        bill;

    const handlePayBillModalOpen = () => {
        bidModalRef.current.showModal();
    };

    const handlePayBillSubmit = () => {

    }

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
                        <button
                            onClick={handlePayBillModalOpen}
                            className="btn-primary w-full py-2 rounded-lg">
                            Pay Bill Now
                        </button>

                        <dialog ref={bidModalRef} className="modal modal-bottom sm:modal-middle">
                            <div className="modal-box">
                                <h3 className="font-bold text-lg mb-4 text-indigo-700">
                                    Pay Your Due Bill
                                </h3>

                                <form onSubmit={handlePayBillSubmit} className="space-y-4">
                                    <div>
                                        <label className="label text-sm font-medium text-gray-700">Title</label>
                                        <input type="text" name="title" className="input input-bordered w-full" placeholder="Enter bill title" required />
                                    </div>

                                    <div>
                                        <label className="label text-sm font-medium text-gray-700">Category</label>
                                        <select name="category" className="select select-bordered w-full" required>
                                            <option disabled selected>Select Category</option>
                                            <option value="Electricity">Electricity</option>
                                            <option value="Water">Water</option>
                                            <option value="Gas">Gas</option>
                                            <option value="Internet">Internet</option>
                                        </select>
                                    </div>

                                    <div>
                                        <label className="label text-sm font-medium text-gray-700">Email</label>
                                        <input type="email" className="input input-bordered w-full" name="email" />
                                    </div>

                                    <div>
                                        <label className="label text-sm font-medium text-gray-700">Location</label>
                                        <input type="text" name="location" className="input input-bordered w-full" placeholder="Enter location" required />
                                    </div>

                                    <div>
                                        <label className="label text-sm font-medium text-gray-700">Description</label>
                                        <input type="text" name="description" className="input input-bordered w-full" placeholder="Enter Bill Description" required />
                                    </div>

                                    <div>
                                        <label className="label text-sm font-medium text-gray-700">Amount</label>
                                        <input type="number" name="amount" className="input input-bordered w-full" placeholder="Enter amount" required />
                                    </div>

                                    <div>
                                        <label className="label text-sm font-medium text-gray-700">Image URL</label>
                                        <input type="url" name="image" className="input input-bordered w-full" placeholder="Enter image link" />
                                    </div>

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

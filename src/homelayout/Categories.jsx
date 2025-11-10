import React from "react";
import { FaBolt, FaFaucet, FaWifi, FaFireAlt } from "react-icons/fa";
import { Link } from "react-router";

const Categories = () => {
    return (
        <div className="py-12 bg-base-200">
            <div className="text-center mb-10">
                <h2 className="text-3xl font-bold text-indigo-600">Bill Categories</h2>
                <p className="text-gray-600 mt-2">
                    Manage all your utilities from one convenient hub
                </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 w-11/12 mx-auto">

                <div
                    className="flex flex-col justify-center items-center text-center bg-white shadow-lg rounded-2xl p-6 border hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
                >
                    <FaBolt className="text-yellow-400 text-5xl" />
                    <h3 className="text-xl font-semibold mt-4 text-gray-800">
                        Electricity
                    </h3>
                    <p className="text-sm text-gray-600 mt-2">Track and pay your monthly electricity bills easily</p>
                    <Link to={'/bills'} className="btn- btn-primary mt-2">Pay Bill</Link>
                </div>

                <div
                    className="flex flex-col justify-center items-center text-center bg-white shadow-lg rounded-2xl p-6 border hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
                >
                    <FaFireAlt className="text-orange-500 text-5xl" />
                    <h3 className="text-xl font-semibold mt-4 text-gray-800">
                        Gas
                    </h3>
                    <p className="text-sm text-gray-600 mt-2">Monitor your gas usage and manage your payments securely.</p>
                    <Link to={'/bills'} className="btn- btn-primary mt-2">Pay Bill</Link>

                </div>

                <div
                    className="flex flex-col justify-center items-center text-center bg-white shadow-lg rounded-2xl p-6 border hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
                >
                    <FaFaucet className="text-blue-400 text-5xl" />
                    <h3 className="text-xl font-semibold mt-4 text-gray-800">
                        Water
                    </h3>
                    <p className="text-sm text-gray-600 mt-2">Keep your water bills up to date with one simple click.</p>
                    <Link to={'/bills'} className="btn- btn-primary mt-2">Pay Bill</Link>
                </div>

                <div
                    className="flex flex-col justify-center items-center text-center bg-white shadow-lg rounded-2xl p-6 border hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
                >
                    <FaWifi className="text-green-400 text-5xl" />
                    <h3 className="text-xl font-semibold mt-4 text-gray-800">
                        Internet
                    </h3>
                    <p className="text-sm text-gray-600 mt-2">Stay connected by managing your internet bills in one place.</p>
                    <Link to={'/bills'} className="btn- btn-primary mt-2">Pay Bill</Link>
                </div>

            </div>
        </div>
    );
};

export default Categories;

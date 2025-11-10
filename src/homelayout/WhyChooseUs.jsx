import React from "react";
import { ShieldCheck, Clock, Wallet, Users } from "lucide-react";

const WhyChooseUs = () => {
    

    return (
        <section className="py-16 bg-gray-50 text-center">
            <h2 className="text-4xl font-bold text-gray-800 mb-8">
                Why Choose <span className="text-indigo-600">My Utility Hub</span>?
            </h2>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4 w-11/12 mx-auto">

                <div
                    className="bg-white p-6 rounded-2xl shadow-md hover:shadow-lg transition"
                >
                    <div className="flex justify-center mb-4"><ShieldCheck className="w-10 h-10 text-indigo-600" /></div>
                    <h3 className="text-xl font-semibold mb-2 text-gray-700">
                        Secure & Reliable
                    </h3>
                    <p className="text-gray-500 text-sm">Your personal and billing information is fully protected with end-to-end encryption.</p>
                </div>


                <div
                    className="bg-white p-6 rounded-2xl shadow-md hover:shadow-lg transition"
                >
                    <div className="flex justify-center mb-4"><Clock className="w-10 h-10 text-indigo-600" /></div>
                    <h3 className="text-xl font-semibold mb-2 text-gray-700">
                        Save Time
                    </h3>
                    <p className="text-gray-500 text-sm">Pay and track all your utility bills in one place—no need to visit multiple websites.</p>
                </div>


                <div
                    className="bg-white p-6 rounded-2xl shadow-md hover:shadow-lg transition"
                >
                    <div className="flex justify-center mb-4"><Wallet className="w-10 h-10 text-indigo-600" /></div>
                    <h3 className="text-xl font-semibold mb-2 text-gray-700">
                        Smart Expense Tracking
                    </h3>
                    <p className="text-gray-500 text-sm">Get monthly insights and manage your utility expenses effortlessly.</p>
                </div>


                <div
                    className="bg-white p-6 rounded-2xl shadow-md hover:shadow-lg transition"
                >
                    <div className="flex justify-center mb-4"><Users className="w-10 h-10 text-indigo-600" /></div>
                    <h3 className="text-xl font-semibold mb-2 text-gray-700">
                        Trusted by Users
                    </h3>
                    <p className="text-gray-500 text-sm">Join thousands of satisfied users simplifying their bill management with us.</p>
                </div>



            </div>
        </section>
    );
};

export default WhyChooseUs;

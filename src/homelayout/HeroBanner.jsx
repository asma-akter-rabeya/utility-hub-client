import React from "react";
import bannerBg from "../assets/bannerBG.png";

const HeroBanner = () => {
    return (
        <div className="hero bg-base-200 min-h-screen">
            <div className="hero-content flex-col-reverse md:flex-row-reverse gap-10">

                {/* Text Section */}
                <div className="lg:w-2/5 w-full text-center lg:text-left">
                    <h1 className="text-5xl font-bold mb-4">Simplify Your Bills!</h1>
                    <p className="text-lg mb-6 leading-relaxed">
                        Manage all your utility payments in one place — fast, secure, and hassle-free.
                        With <span className="font-semibold text-primary">My Utility Hub</span>, paying bills becomes effortless.
                    </p>
                    <button className="btn btn-primary px-8 py-3 text-lg">
                        Get Started
                    </button>
                </div>
                {/* Banner Image */}
                <div className="lg:w-3/5 w-full">
                    <img
                        src={bannerBg}
                        alt="Banner"
                        className="w-full rounded-2xl shadow-2xl object-cover"
                    />
                </div>


            </div>
        </div>
    );
};

export default HeroBanner;

import React from 'react';
import { BsTwitterX } from "react-icons/bs";
import { FaInstagramSquare } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { MdOutlineMail } from "react-icons/md";

const Footer = () => {
    return (
        <div>
            <footer className="footer-bg text-gray-100 px-8 py-12 bg-gray-900">
                <div className="flex flex-col lg:flex-row gap-12">

                    {/* About Section */}
                    <div className="lg:w-[25%]">
                        <button className="btn-primary normal-case text-2xl font-bold text-white">
                            My Utility<span className="text-yellow-300">Hub</span>
                        </button>
                        <h3 className="text-white font-semibold mb-3">
                            — Simplify Your Bills, Simplify Your Life
                        </h3>
                        <p className="text-sm leading-relaxed text-gray-200">
                            MyUtilityHub helps you manage all your utility bills — electricity, gas,
                            water, and internet — from one secure platform. Track payments, view usage
                            history, and stay informed about due dates. Say goodbye to missed bills
                            and enjoy seamless utility management at your fingertips.
                        </p>
                    </div>

                    {/* Links Section */}
                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:w-[75%]">
                        <div>
                            <h4 className="text-white font-semibold mb-2">Services</h4>
                            <ul className="space-y-2 text-sm text-gray-200 hover:[&>li]:text-white transition-all duration-200">
                                <li>Electricity Bills</li>
                                <li>Gas Bills</li>
                                <li>Water Bills</li>
                                <li>Internet Bills</li>
                            </ul>
                        </div>

                        <div>
                            <h4 className="text-white font-semibold mb-2">Company</h4>
                            <ul className="space-y-2 text-sm text-gray-200 hover:[&>li]:text-white transition-all duration-200">
                                <li>About MyUtilityHub</li>
                                <li>How It Works</li>
                                <li>Contact Us</li>
                            </ul>
                        </div>

                        <div>
                            <h4 className="text-white font-semibold mb-2">Support</h4>
                            <ul className="space-y-2 text-sm text-gray-200 hover:[&>li]:text-white transition-all duration-200">
                                <li>Help Center</li>
                                <li>FAQs</li>
                                <li>Privacy Policy</li>
                                <li>Terms & Conditions</li>
                            </ul>
                        </div>

                        <div>
                            <h4 className="text-white font-semibold mb-2">Follow Us</h4>
                            <ul className="space-y-2 text-sm text-gray-200">
                                <li className="flex gap-2 items-center hover:text-white transition-all duration-200">
                                    <BsTwitterX />
                                    <a href="">@MyUtilityHub</a>
                                </li>
                                <li className="flex gap-2 items-center hover:text-white transition-all duration-200">
                                    <FaInstagramSquare />
                                    <a href="">@MyUtilityHub.Official</a>
                                </li>
                                <li className="flex gap-2 items-center hover:text-white transition-all duration-200">
                                    <FaYoutube />
                                    <a href="">MyUtilityHub Channel</a>
                                </li>
                                <li className="flex gap-2 items-center hover:text-white transition-all duration-200">
                                    <MdOutlineMail />
                                    <a href="">support@myutilityhub.com</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                {/* Copyright */}
                <div className="text-center text-gray-200 border-t border-white/20 mt-10 pt-4 text-sm">
                    © 2025 MyUtilityHub. All rights reserved. Simplifying utility management for everyone.
                </div>
            </footer>
        </div>
    );
};

export default Footer;

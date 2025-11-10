import React from 'react';
import Navbar from '../components/Navbar';
import { Outlet } from 'react-router';
import Footer from '../components/Footer';
import { Toaster } from 'react-hot-toast';

const PageLayout = () => {
    return (
        <div>
            <div>
                <Navbar />
                {/*  */}
                <div className="py-4  min-h-screen bg-gradient-400">
                    <Outlet />
                </div>
                <Footer />
            </div>

            <Toaster />
        </div>
    );
};

export default PageLayout;
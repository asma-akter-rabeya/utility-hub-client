import React from 'react';
import ErrorPageImg from '../assets/errorPage.jpg';
import { Link } from 'react-router';

const ErrorPage = () => {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-linear-to-br from-indigo-100 to-blue-200 text-center p-5">
            <img
                src={ErrorPageImg}
                alt="404 Page Not Found"
                className="w-full max-w-md rounded-2xl shadow-lg mb-6"
            />
            <h1 className="text-5xl font-bold text-red-700 mb-3">404</h1>
            <p className="text-lg text-gray-700 mb-5">
                Oops! The page you’re looking for doesn’t exist.
            </p>
            <Link
                to="/"
                className="btn-primary px-6 py-2 rounded-full shadow-md transition"
            >
                Go Back Home
            </Link>
        </div>
    );
};

export default ErrorPage;

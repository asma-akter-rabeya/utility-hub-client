import React, { useContext } from 'react';
import { AuthContext } from '../contexts/AuthContext';

const MyProfile = () => {
    const { user, loading } = useContext(AuthContext);

    if (loading) {
        return (
            <div className="text-center py-10 text-gray-600">Loading your profile...</div>);
    }

    return (
        <div className="w-11/12 mx-auto mt-12 flex flex-col items-center text-center transition-all duration-500 ease-in-out">
            <h2 className="text-4xl md:text-5xl font-extrabold bg-linear-to-r from-purple-800 to-cyan-800 bg-clip-text text-transparent mb-8 transform transition duration-700 hover:scale-105">
                Welcome To My Profile
            </h2>

            <div className="card bg-base-100 shadow-2xl border border-gray-200 p-8 rounded-2xl w-full max-w-md hover:shadow-3xl transform hover:-translate-y-2 transition-all duration-500 ease-in-out">
                <div className="flex flex-col items-center space-y-5">
                    <img
                        src={user?.photoURL || 'https://img.icons8.com/?size=100&id=20748&format=png&color=000000'}
                        alt="User"
                        className="w-28 h-28 rounded-full border-4 border-indigo-400 shadow-md object-cover transition-transform duration-500 hover:scale-110"
                    />

                    <div className="transition-opacity duration-500 hover:opacity-90">
                        <h3 className="text-2xl font-bold text-gray-800">
                            {user?.displayName || 'No Name Available'}
                        </h3>
                        <p className="text-gray-600 text-sm mt-1">
                            {user?.email || 'No Email Available'}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MyProfile;

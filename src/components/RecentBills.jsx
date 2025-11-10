import React from 'react';
import { useLoaderData } from 'react-router';
import BillCard from './BillCard';

const RecentBills = () => {
    const recentBills = useLoaderData();
    return (
        <div className='w-11/12 mx-auto my-6'>

            <div className="text-center mb-8">
                <h2 className="text-4xl font-bold text-gray-800">
                    Recent <span className="text-indigo-600">Bills</span>
                </h2>
                <p className="text-gray-500 mt-2 text-sm md:text-base">
                    Stay updated with your latest utility payments and activities
                </p>
                <div className="w-24 h-1 bg-indigo-500 mx-auto mt-3 rounded-full"></div>
            </div>

            <div className=' grid gap-4.5 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4'>
                {
                    recentBills.map(bill => <BillCard key={bill._id} bill={bill}></BillCard>)
                }
            </div>
        </div>
    );
};

export default RecentBills;
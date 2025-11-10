import React from 'react';
import { useLoaderData } from 'react-router';

const RecentBills = () => {
    const recentBills = useLoaderData();
    console.log(recentBills)
    return (
        <div className='w-11/12 mx-auto my-6'>
            
        </div>
    );
};

export default RecentBills;
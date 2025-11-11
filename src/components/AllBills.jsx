import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router';
import AllBillsCard from './AllBillsCard';

const AllBills = () => {
  const initialBills = useLoaderData();

  const [allBills, setAllBills] = useState(initialBills || []);
  const [selectedCategory, setSelectedCategory] = useState("All");


  // Fetch bills based on selected category
  useEffect(() => {
    fetch(`http://localhost:3000/bills?category=${selectedCategory}`)
      .then(res => res.json())
      .then(data => {
        setAllBills(data)
      })

  }, [selectedCategory]);

  return (
    <div className='w-11/12 mx-auto mt-7'>
      <div className='flex flex-col md:flex-row justify-between items-center mb-6'>
        <h2 className="text-3xl font-bold text-gray-800 mb-3 md:mb-0">
          All <span className="text-indigo-600">Bills</span>
        </h2>
        {/* Category Dropdown */}
        <select
          className="select select-bordered w-52 text-gray-700"
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
        >
          <option value="All">All Categories</option>
          <option value="Electricity">Electricity</option>
          <option value="Water">Water</option>
          <option value="Gas">Gas</option>
          <option value="Internet">Internet</option>
        </select>
      </div>

      <div className=' grid gap-5 sm:grid-cols-21 md:grid-cols-2 lg:grid-cols-3'>
        {
          allBills.map(bill => <AllBillsCard bill={bill} key={bill._id} ></AllBillsCard>)
        }

      </div>
    </div>
  );
};
export default AllBills;
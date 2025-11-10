import React, { useEffect, useState } from "react";
import AllBillsCard from "./AllBillsCard";

const AllBills = () => {
  const [bills, setBills] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [loading, setLoading] = useState(true);

  // Fetch bills from backend
  const fetchBills = async (category) => {
    setLoading(true);
    try {
      const url =
        category && category !== "All"
          ? `http://localhost:3000/bills?category=${category}`
          : `http://localhost:3000/bills`;
      const res = await fetch(url);
      const data = await res.json();
      setBills(data);
    } catch (error) {
      console.error("Error fetching bills:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchBills(selectedCategory);
  }, [selectedCategory]);

  return (
    <div className="w-11/12 mx-auto mt-10">
      {/* Header + Filter */}
      <div className="flex flex-col md:flex-row justify-between items-center mb-6">
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
          <option value="Rent">Rent</option>
        </select>
      </div>

      {/* Loading State */}
      {loading ? (
        <div className="text-center text-gray-500 py-10 text-lg animate-pulse">
          Loading bills...
        </div>
      ) : bills.length > 0 ? (
        <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {bills.map((bill) => (
            <AllBillsCard bill={bill} key={bill._id} />
          ))}
        </div>
      ) : (
        <p className="text-center text-gray-500 mt-10">
          No bills found for this category.
        </p>
      )}
    </div>
  );
};

export default AllBills;

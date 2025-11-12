import React, { useEffect, useRef, useState, useContext } from 'react';
import { useLoaderData } from 'react-router';
import AllBillsCard from './AllBillsCard';
import { AuthContext } from '../contexts/AuthContext';
import Swal from 'sweetalert2';

const AllBills = () => {
  const initialBills = useLoaderData();
  const bidModalRef = useRef(null);
  const { user } = useContext(AuthContext);

  const [allBills, setAllBills] = useState(initialBills || []);
  const [selectedCategory, setSelectedCategory] = useState("All");

  const { loading } = useContext(AuthContext);


  // Fetch bills based on selected category
  useEffect(() => {
    fetch(`https://utility-bill-server-one.vercel.app/bills?category=${selectedCategory}`)
      .then(res => res.json())
      .then(data => setAllBills(data))
      .catch(err => console.error("Error fetching bills:", err));
  }, [selectedCategory]);

  const handleAddBillModalOpen = () => {
    bidModalRef.current.showModal();
  };

  const handleBillSubmit = (e) => {
    e.preventDefault();

    const form = e.target;
    const newBill = {
      title: form.title.value,
      category: form.category.value,
      email: form.email.value,
      location: form.location.value,
      description: form.description.value,
      image: form.image.value,
      date: form.date.value,
      amount: form.amount.value
    };

    fetch('https://utility-bill-server-one.vercel.app/bills', {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(newBill)
    })
      .then(res => res.json())
      .then(data => {
        console.log('after placing bill : ', data);
        if (data.insertedId) {
          bidModalRef.current.close();
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Your bill has been placed",
            showConfirmButton: false,
            timer: 1500
          });

        }
      })
      .catch(err => console.error(err));
  };
  
  if (loading)
    return <div className="text-center py-10 text-gray-600">Loading  All Bills...</div>;


  return (
    <div className="w-11/12 mx-auto mt-7">
      <div className="flex flex-col md:flex-row justify-between items-center mb-6">
        <h2 className="text-3xl font-bold text-gray-800 mb-3 md:mb-0">
          All <span className="text-indigo-600">Bills</span> <span className='text-sm'>({initialBills.length})</span>
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

      {/* Bill cards */}
      <div className="grid gap-5 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {allBills.map((bill) => (
          <AllBillsCard bill={bill} key={bill._id}></AllBillsCard>
        ))}
      </div>

      {/* Add new bill button */}
      <div className="mt-6 text-center">
        <button
          onClick={handleAddBillModalOpen}
          className="btn bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-3 px-6 rounded-lg"
        >
          Add a New Bill
        </button>
      </div>

      {/* Modal */}
      <dialog ref={bidModalRef} className="modal modal-bottom sm:modal-middle">
        <div className="modal-box">
          <h3 className="font-bold text-lg mb-4 text-indigo-700">
            Add Your Due Bill
          </h3>

          <form onSubmit={handleBillSubmit} className="space-y-4">
            <div>
              <label className="label text-sm font-medium text-gray-700">Title</label>
              <input type="text" name="title" className="input input-bordered w-full" placeholder="Enter bill title" required />
            </div>

            <div>
              <label className="label text-sm font-medium text-gray-700">Category</label>
              <select name="category" className="select select-bordered w-full" required>
                <option disabled selected>Select Category</option>
                <option value="Electricity">Electricity</option>
                <option value="Water">Water</option>
                <option value="Gas">Gas</option>
                <option value="Internet">Internet</option>
              </select>
            </div>

            <div>
              <label className="label text-sm font-medium text-gray-700">Email</label>
              <input type="email" className="input input-bordered w-full" name="email" readOnly defaultValue={user?.email} />
            </div>

            <div>
              <label className="label text-sm font-medium text-gray-700">Location</label>
              <input type="text" name="location" className="input input-bordered w-full" placeholder="Enter location" required />
            </div>

            <div>
              <label className="label text-sm font-medium text-gray-700">Description</label>
              <input type="text" name="description" className="input input-bordered w-full" placeholder="Enter Bill Description" required />
            </div>

            <div>
              <label className="label text-sm font-medium text-gray-700">Amount</label>
              <input type="number" name="amount" className="input input-bordered w-full" placeholder="Enter amount" required />
            </div>

            <div>
              <label className="label text-sm font-medium text-gray-700">Image URL</label>
              <input type="url" name="image" className="input input-bordered w-full" placeholder="Enter image link" />
            </div>

            <div>
              <label className="label text-sm font-medium text-gray-700">Date</label>
              <input type="date" name="date" className="input input-bordered w-full" required />
            </div>

            <button type="submit" className="btn w-full btn-primary text-white mt-4">
              Add Your Bill
            </button>
          </form>

          <div className="modal-action">
            <form method="dialog">
              <button className="btn">Close</button>
            </form>
          </div>
        </div>
      </dialog>
    </div>
  );
};

export default AllBills;

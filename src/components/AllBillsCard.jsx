import { MapPin, Tag } from 'lucide-react';
import React from 'react';
import { Link } from 'react-router';

const AllBillsCard = ({ bill }) => {
    const { title, category, location, image, amount, _id } = bill;

    return (
        <div className="bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden flex flex-col">
            
            <img
                src={image}
                alt="bill"
                className="w-full h-48 object-cover hover:scale-105 transition-transform duration-500"
            />

            <div className="p-4 flex-1 flex flex-col justify-between">
                <div>
                    <h3 className="text-lg font-semibold text-gray-800 mb-2 hover:text-indigo-600 transition-colors">
                        {title}
                    </h3>

                    <div className="flex items-center text-gray-600 text-sm mb-1">
                        <Tag className="w-4 h-4 mr-2 text-indigo-500" />
                        <span>{category}</span>
                    </div>

                    <div className="flex items-center text-gray-600 text-sm mb-1">
                        <MapPin className="w-4 h-4 mr-2 text-indigo-500" />
                        <span>{location}</span>
                    </div>

                    <div className="flex items-center text-gray-800 text-sm font-medium mt-2">
                        💰 Amount: <span className="ml-1 text-indigo-600">{amount}</span>
                    </div>
                </div>

                <Link
                    to={`/page/bills/${_id}`}
                    className="mt-4 inline-block text-center btn-primary text-white py-2 px-4 rounded-lg  transition-colors"
                >
                    See Details
                </Link>
            </div>
        </div>
    );
};

export default AllBillsCard;

import React from "react";
import { MapPin, CalendarDays, Tag } from "lucide-react";
import { Link } from "react-router";

const BillCard = ({ bill }) => {
    const { title, category, location, date ,_id} = bill;

    return (
        <div className="bg-white shadow-md hover:shadow-lg transition rounded-2xl p-5 flex flex-col justify-between">
            <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">{title}</h3>

                <div className="flex items-center text-gray-500 text-sm mb-2">
                    <Tag className="w-4 h-4 mr-2 text-indigo-500" />
                    <span>{category}</span>
                </div>

                <div className="flex items-center text-gray-500 text-sm mb-2">
                    <MapPin className="w-4 h-4 mr-2 text-indigo-500" />
                    <span>{location}</span>
                </div>

                <div className="flex items-center text-gray-500 text-sm">
                    <CalendarDays className="w-4 h-4 mr-2 text-indigo-500" />
                    <span>{date}</span>
                </div>
            </div>

            <Link to={`/page/bills/${_id}`}
                className="mt-4 btn-primary text-center font-medium py-2 px-4 rounded-lg transition">
                See Details
            </Link>
        </div>
    );
};

export default BillCard;

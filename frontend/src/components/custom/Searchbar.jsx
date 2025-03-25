import React from "react";
import { Input } from "@/components/ui/input";

const Searchbar = () => {
  return (
    <div className="px-4 md:px-7 mb-10">
      <div className="flex flex-col md:flex-row items-cente sm:gap-11 gap-4">
        {/* Search Input */}
        <div className="w-full md:flex-1">
          <Input
            type="text"
            placeholder="Search for Banquet Halls By Name And Locations..."
            className="w-full h-12 px-2 border border-gray-300 dark:border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-200 "
          />
        </div>
        {/* Dropdowns for Price and Location */}
        <div className="w-full md:w-auto flex gap-4">
          <select className="w-full md:w-auto border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-200 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500 transition">
            <option value="">Select Price</option>
            <option value="low">Budget ($)</option>
            <option value="mid">Standard ($$)</option>
            <option value="high">Luxury ($$$)</option>
          </select>
          <select className="w-full md:w-auto border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-200 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500 transition">
            <option value="">Select Location</option>
            <option value="newyork">New York</option>
            <option value="losangeles">Los Angeles</option>
            <option value="chicago">Chicago</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default Searchbar;

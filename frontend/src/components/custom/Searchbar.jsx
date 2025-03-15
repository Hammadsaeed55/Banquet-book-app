import React, { useState } from "react";
import { Search } from "lucide-react";

const BanquetSearchBar = () => {
  const [query, setQuery] = useState("");

  const handleInputChange = (e) => {
    setQuery(e.target.value);
  };

  const handleSearch = () => {
    // Implement your search logic here
    console.log("Searching for:", query);
  };

  return (
    <div className="w-full lg:w-4/4 mx-auto px-4 py-1 mb-10">
      <div className="relative">
        <input
          type="text"
          value={query}
          onChange={handleInputChange}
          placeholder="Search for Banquet Halls by Name and Location"
          className="w-full py-3 pl-5 pr-16 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all bg-white dark:bg-gray-800 dark:border-gray-700 dark:placeholder-gray-400 text-gray-800 dark:text-gray-200"
        />
        <button
          onClick={handleSearch}
          className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-blue-500 hover:bg-blue-600 text-white p-2 rounded-full transition-colors"
        >
          <Search size={20} />
        </button>
      </div>
    </div>
  );
};

export default BanquetSearchBar;

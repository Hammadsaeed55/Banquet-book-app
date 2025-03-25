import React from 'react';

const CardItem = ({name, des, loc}) => {
  return (
    <div className="bg-white dark:bg-gray-800 shadow-md rounded-lg overflow-hidden 
                    transition-all duration-300 transform hover:scale-105 hover:shadow-2xl
                    w-[90%] sm:w-[45%] md:w-[30%] lg:w-[22%] h-[360px] flex flex-col 
                    border border-gray-200 dark:border-gray-700 hover:border-blue-500">
      
      {/* Image */}
      <div className="h-[160px] w-full">
        <img 
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqUryY9p-ed2h06SXXeHJlR1quSKJFLUCzSA&s" 
          alt="Banquet Hall"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Content */}
      <div className="p-4 flex flex-col flex-grow justify-between">
        
        {/* Name & Location */}
        <div>
          <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-200">{name}</h3>
          <h4 className="text-xs text-gray-600 dark:text-gray-400 mt-1">📍 {loc}</h4>
        </div>

        {/* Description */}
        <p className="text-gray-700 dark:text-gray-300 text-xs mt-1 leading-snug">
          {des}
        </p>

        {/* Rating & Price */}
        <div className="flex items-center justify-between mt-3">
          {/* Rating */}
          <div className="flex items-center space-x-1">
            <span className="text-yellow-500">⭐</span>
            <span className="text-yellow-500">⭐</span>
            <span className="text-yellow-500">⭐</span>
            <span className="text-yellow-500">⭐</span>
            <span className="text-gray-400">⭐</span>
            {/* <span className="text-xs text-gray-600 dark:text-gray-400 ml-1">(120 reviews)</span> */}
          </div>

          {/* Price */}
          <button className="px-4 py-1 bg-yellow-600 text-white text-xs rounded-md hover:bg-green-600 transition">Visit <span></span></button>
        </div>

        {/* Buttons */}
        <div className="flex items-center justify-between mt-4">
          <button className="px-4 py-1 bg-green-500 text-white text-xs rounded-md hover:bg-green-600 transition">Add</button>
          <button className="px-4 py-1 bg-blue-500 text-white text-xs rounded-md hover:bg-blue-600 transition">Book</button>
        </div>

      </div>
    </div>
  );
}

export default CardItem;

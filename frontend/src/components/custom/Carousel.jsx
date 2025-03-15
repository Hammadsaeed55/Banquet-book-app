import React, { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const images = [
  "https://media.istockphoto.com/id/507183320/photo/interior-wedding-stage.jpg?s=612x612&w=0&k=20&c=dGT7LzHEqPfzZGrsjzgVyEqFK0YxEMUo1lZmFfTkGdc=",
  "https://media.istockphoto.com/id/89444544/photo/table-setting-in-wedding-banquet.jpg?s=612x612&w=0&k=20&c=RQJlTLiwhOi1mNS1e6dB0FIBdhbj41Of9BTQdPvtUAA=",
  "https://media.istockphoto.com/id/450055739/photo/celebratory-tables-in-the-banquet-hall.jpg?s=612x612&w=0&k=20&c=YN1vp2A-xvpClfybYf3bKL4wuGwiioPI9fHJPaf_7Kc=",
  "https://media.istockphoto.com/id/183342882/photo/banquet.jpg?s=612x612&w=0&k=20&c=uSmBOIeKuGKXKbCUuaZkDI2hS2k1_dyQReZ9Po4Bm-Q=",
  "https://media.istockphoto.com/id/95279457/photo/luxury-traditional-chinese-banqueting-hall-interior.jpg?s=612x612&w=0&k=20&c=BePoOCZQVmpgm4iIpId1awqaWSS8QPaMfnzEY0CyMi8=",
  "https://media.istockphoto.com/id/1699840267/photo/indian-wedding-stage-indian-wedding-decoration-indian-beautiful-marriage-decoration-with.jpg?s=612x612&w=0&k=20&c=FKy4np1LsQZnsGppjJRX4zqPKkvYRmLe-9HBQBAwPiM=",
  "https://media.istockphoto.com/id/178737888/photo/ballroom-western-restaurant.jpg?s=612x612&w=0&k=20&c=kA5PhQ3Frm7Q9judVhK_LewGLn1bxYP0S26OJVd-JWI=",
  "https://media.istockphoto.com/id/187356546/photo/elegance-wedding-decoration.jpg?s=612x612&w=0&k=20&c=eu6F_mjK2qlqOUsNeNmS9c4kCdbl2XhctfeZORrVSnA=",
  "https://media.istockphoto.com/id/1130110601/photo/wedding-hall-or-other-function-facility-set-for-fine-dining-round-table.jpg?s=612x612&w=0&k=20&c=DSIczYeoevGRg8Ic5HWAOFYa2AMDIqXj-n7DWxzcv-Q=",
  "https://media.istockphoto.com/id/460893207/photo/banquet-hall.jpg?s=612x612&w=0&k=20&c=goNjXFsXjzfIbXod7u6wE56fg-eZMUNrOQn0mJ3QSLs=",
];

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

 
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 4000);
    return () => clearInterval(interval);
  }, [currentIndex]);

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="relative w-full mx-auto mt-24 mb-6 px-6">
      {/* Carousel Image */}
      <div className="relative overflow-hidden rounded-xl shadow-lg">
        <img
          src={images[currentIndex]}
          alt="Banquet Hall"
          className="w-full h-[200px] sm:h-[300px] md:h-[400px] object-cover transition-all duration-500"
        />
      </div>

      {/* Left Navigation Button */}
      <button
        onClick={prevSlide}
        className="mx-5 absolute top-1/2 left-4 transform -translate-y-1/2 p-2 bg-gray-800 text-white rounded-full hover:bg-gray-700 transition"
      >
        <ChevronLeft size={24} />
      </button>

      {/* Right Navigation Button */}
      <button
        onClick={nextSlide}
        className="mx-6 absolute top-1/2 right-4 transform -translate-y-1/2 p-2 bg-gray-800 text-white rounded-full hover:bg-gray-700 transition"
      >
        <ChevronRight size={24} />
      </button>

      
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {images.map((_, index) => (
          <button
            key={index}
            className={`w-3 h-3 rounded-full transition-all ${
              index === currentIndex ? "bg-blue-600" : "bg-gray-400"
            }`}
            onClick={() => setCurrentIndex(index)}
          ></button>
        ))}
      </div>
    </div>
  );
};

export default Carousel;

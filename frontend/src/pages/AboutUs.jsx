import React from "react";

const AboutUs = () => {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <div
        className="relative h-96 bg-cover bg-center"
        style={{
          backgroundImage:
            'url("https://source.unsplash.com/random/?office,team")',
        }}
      >
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative z-10 flex flex-col items-center justify-center h-full px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-white text-center">
            About Us
          </h1>
          <p className="mt-4 text-lg md:text-xl text-white max-w-xl text-center">
            We are dedicated to providing the best banquet halls for your special occasions.
          </p>
        </div>
      </div>

      {/* Content Section */}
      <div className="max-w-5xl mx-auto py-12 px-4">
        {/* Our Story */}
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-gray-800">Our Story</h2>
          <p className="mt-4 text-gray-600 leading-relaxed">
            Founded in [Year], our company has grown from a small local provider into a trusted name in the banquet hall booking industry. Our journey began with a passion for creating memorable experiences and a commitment to excellence.
          </p>
        </div>
        {/* Our Mission */}
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-gray-800">Our Mission</h2>
          <p className="mt-4 text-gray-600 leading-relaxed">
            Our mission is to connect people with the perfect venues for their events, ensuring every celebration is unforgettable. We strive to provide unparalleled service and a seamless booking experience for all our clients.
          </p>
        </div>
        {/* Our Values */}
        <div>
          <h2 className="text-3xl font-bold text-gray-800">Our Values</h2>
          <ul className="mt-4 list-disc list-inside text-gray-600">
            <li>Excellence in service</li>
            <li>Commitment to quality</li>
            <li>Innovation and creativity</li>
            <li>Integrity and transparency</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;

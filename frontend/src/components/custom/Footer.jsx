import React, { useState, useEffect } from "react";
import { Facebook, Twitter, Instagram, Mail, Sun, Moon, Phone, MapPin } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");

  useEffect(() => {
    document.documentElement.classList.remove("light", "dark");
    document.documentElement.classList.add(theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <footer className=" w-full bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-gray-200 py-10 mt-auto">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-8">

     
        <div>
          <h2 className="text-2xl font-bold text-blue-500">Banquet Finder</h2>
          <p className="mt-3 text-gray-600 dark:text-gray-400">
            Find and book the perfect banquet hall for your special occasions.
          </p>
         
          <div className="mt-4 space-y-2 text-gray-600 dark:text-gray-400">
            <div className="flex items-center space-x-2">
              <Phone size={18} />
              <span>+1 234 567 890</span>
            </div>
            <div className="flex items-center space-x-2">
              <Mail size={18} />
              <span>contact@banquetfinder.com</span>
            </div>
            <div className="flex items-center space-x-2">
              <MapPin size={18} />
              <span>New York, USA</span>
            </div>
          </div>
        </div>

       
        <div>
          <h3 className="text-lg font-semibold">Quick Links</h3>
          <ul className="mt-3 space-y-2 text-gray-600 dark:text-gray-400">
            <Link to="/"><li><a href="#" className="hover:text-blue-500">Home</a></li></Link>
            <Link to="/AboutUs"><li><a href="#" className="hover:text-blue-500">About Us</a></li></Link>
            <Link to="/ContactFormPage"><li><a href="#" className="hover:text-blue-500">Contact</a></li></Link>
            <Link to="/PrivacyPolicy"> <li><a href="#" className="hover:text-blue-500">Privacy Policy</a></li></Link>
            <Link to="/TermsOfServices"><li><a href="#" className="hover:text-blue-500">Terms of Service</a></li></Link>
          </ul>
        </div>

      
        <div>
          <h3 className="text-lg font-semibold">Our Services</h3>
          <ul className="mt-3 space-y-2 text-gray-600 dark:text-gray-400">
            <li><a href="#" className="hover:text-blue-500">Banquet Hall Booking</a></li>
            <li><a href="#" className="hover:text-blue-500">Event Planning</a></li>
            <li><a href="#" className="hover:text-blue-500">Catering Services</a></li>
            <li><a href="#" className="hover:text-blue-500">Decorations</a></li>
            <li><a href="#" className="hover:text-blue-500">Photography & Videography</a></li>
            <li><a href="#" className="hover:text-blue-500">Music & Entertainment</a></li>
          </ul>
        </div>

       
        <div>
          <h3 className="text-lg font-semibold">Subscribe to Our Newsletter</h3>
          <div className="mt-3 flex">
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full px-3 py-2 text-gray-800 dark:text-gray-200 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-l-md focus:outline-none"
            />
            <button className="px-4 py-2 bg-blue-500 text-white rounded-r-md hover:bg-blue-600 transition">
              Subscribe
            </button>
          </div>

        
          <div className="mt-6">
            <h3 className="text-lg font-semibold">Follow Us</h3>
            <div className="flex space-x-4 mt-3 text-gray-600 dark:text-gray-400">
              <a href="#" className="hover:text-blue-500"><Facebook size={24} /></a>
              <a href="#" className="hover:text-blue-500"><Twitter size={24} /></a>
              <a href="#" className="hover:text-blue-500"><Instagram size={24} /></a>
              <a href="#" className="hover:text-blue-500"><Mail size={24} /></a>
            </div>
          </div>

         
          <div className="mt-6">
            <button
              onClick={toggleTheme}
              className="flex items-center space-x-2 px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-lg text-gray-800 dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-gray-800 transition"
            >
              {theme === "light" ? <Sun size={20} /> : <Moon size={20} />}
              <span>{theme === "light" ? "Light Mode" : "Dark Mode"}</span>
            </button>
          </div>
        </div>
      </div>

    
      <div className="mt-10 text-center text-gray-500 text-sm border-t border-gray-300 dark:border-gray-700 pt-5">
        © {new Date().getFullYear()} Banquet Finder. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;

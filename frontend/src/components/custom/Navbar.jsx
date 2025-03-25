import { useState } from "react";
import { Menu, X, ShoppingCart } from "lucide-react"; 
import { ModeToggle } from "./Mode-toggle";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-white dark:bg-gray-900 shadow-md py-4 px-6 transition-all">
      <div className="flex justify-between items-center max-w-7xl mx-auto">
        
        {/* Logo */}
       <Link to="/"> <div className="text-2xl font-extrabold text-gray-800 dark:text-white tracking-wide">
          <span className="text-blue-600">Banquet</span> Finder
        </div></Link>
         
         {/* add to cart */}
        <Link to="/AddToCart" className="relative">
        <ShoppingCart size={30} className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-all" />
        <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold px-1.5 py-0.5 rounded-full">
              1 
            </span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-6 items-center text-lg font-medium">
          <Link to="/" className="relative text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-all">
            Home
          </Link>
          <Link to="/AboutUs" className="relative text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-all">
            About Us
          </Link>
          <Link to="/ContactFormPage" className="relative text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-all">
            Contact
          </Link>
          <Link to="/PrivacyPolicy" className="relative text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-all">
            Privacy Policy
          </Link>
          <Link to="/TermsOfServices" className="relative text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-all">
            Terms of Service
          </Link>

          {/* Cart Icon */}
          {/* <Link  className="relative">
            <ShoppingCart size={24} className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-all" />
            <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold px-1.5 py-0.5 rounded-full">
              1 
            </span>
          </Link> */}

          {/* Buttons */}
         <Link to="/Login">
         <button className="px-4 py-2 text-blue-600 dark:text-white border border-blue-600 dark:border-white rounded-lg hover:bg-blue-50 dark:hover:bg-gray-700 transition">
            Login
          </button>
         </Link>
          {/* <button className="px-4 py-2 text-white bg-blue-600 dark:bg-gray-800 rounded-lg hover:bg-blue-700 dark:hover:bg-gray-600 transition">
            Sign Up
          </button> */}

          <ModeToggle />
        </div>

        {/* Mobile Menu Button */}
        <button className="md:hidden p-2 rounded-md text-gray-700 dark:text-white" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden flex flex-col items-center mt-4 space-y-4 text-lg font-medium text-gray-700 dark:text-gray-300 text-center">
          <Link to="/" className="hover:text-blue-600 dark:hover:text-blue-400 transition-all">Home</Link>
          <Link to="/AboutUs" className="hover:text-blue-600 dark:hover:text-blue-400 transition-all">About Us</Link>
          <Link to="/ContactFormPage" className="hover:text-blue-600 dark:hover:text-blue-400 transition-all">Contact</Link>
          <Link to="/PrivacyPolicy" className="hover:text-blue-600 dark:hover:text-blue-400 transition-all">Privacy Policy</Link>
          <Link to="/TermsOfServices" className="hover:text-blue-600 dark:hover:text-blue-400 transition-all">Terms of Service</Link>

          {/* Cart Icon in Mobile Menu */}
          {/* <Link to="/cart" className="relative">
            <ShoppingCart size={26} className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-all" />
            <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold px-1.5 py-0.5 rounded-full">
              3 
            </span>
          </Link> */}

          <button className="w-full px-4 py-2 text-blue-600 dark:text-white border border-blue-600 dark:border-white rounded-lg hover:bg-blue-50 dark:hover:bg-gray-700 transition">
            Login
          </button>
          <button className="w-full px-4 py-2 text-white bg-blue-600 dark:bg-gray-800 rounded-lg hover:bg-blue-700 dark:hover:bg-gray-600 transition">
            Sign Up
          </button>

          <ModeToggle />
        </div>
      )}
    </nav>
  );
};

export default Navbar;

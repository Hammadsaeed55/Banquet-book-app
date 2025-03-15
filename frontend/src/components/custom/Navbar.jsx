import { useState } from "react";
import { Menu, X } from "lucide-react";
import { ModeToggle } from "./Mode-toggle";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-white dark:bg-gray-900 shadow-md py-4 px-6 transition-all">
      <div className="flex justify-between items-center max-w-7xl mx-auto">
        
        {/* Logo */}
        <div className="text-2xl font-extrabold text-gray-800 dark:text-white tracking-wide">
          <span className="text-blue-600">Banquet</span> Finder
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-6 items-center text-lg font-medium">
          <Link to="/" href="#" className="relative text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-all">
            Home
            <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-blue-600 dark:bg-blue-400 transition-all group-hover:w-full"></span>
          </Link>
          <Link to="/AboutUs" href="#" className="relative text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-all">
            About Us
          </Link>
          <Link to="/ContactFormPage" href="#" className="relative text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-all">
            Contact
          </Link>
          <Link to="/PrivacyPolicy" href="#" className="relative text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-all">
            Privacy Policy
          </Link>
          <Link to="/TermsOfServices" href="#" className="relative text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-all">
            Terms of Service
          </Link>

          {/* Buttons & Mode Toggle */}
          <button className="px-4 py-2 text-blue-600 dark:text-white border border-blue-600 dark:border-white rounded-lg hover:bg-blue-50 dark:hover:bg-gray-700 transition">
            Login
          </button>
          <button className="px-4 py-2 text-white bg-blue-600 dark:bg-gray-800 rounded-lg hover:bg-blue-700 dark:hover:bg-gray-600 transition">
            Sign Up
          </button>
          <ModeToggle />
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2 rounded-md text-gray-700 dark:text-white"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden flex flex-col items-center mt-4 space-y-4 text-lg font-medium text-gray-700 dark:text-gray-300 text-center">
          <Link to="/" href="#" className="hover:text-blue-600 dark:hover:text-blue-400 transition-all">
            Home
          </Link>
          <Link to="/AboutUs" href="#" className="hover:text-blue-600 dark:hover:text-blue-400 transition-all">
            About Us
          </Link>
          <Link to="/ContactFormPage" href="#" className="hover:text-blue-600 dark:hover:text-blue-400 transition-all">
            Contact
          </Link>
          <Link to="/PrivacyPolicy" href="#" className="hover:text-blue-600 dark:hover:text-blue-400 transition-all">
            Privacy Policy
          </Link>
          <Link to="/TermsOfServices" href="#" className="hover:text-blue-600 dark:hover:text-blue-400 transition-all">
            Terms of Service
          </Link>

          <button className="w-full px-4 py-2 text-blue-600 dark:text-white border border-blue-600 dark:border-white rounded-lg hover:bg-blue-50  dark:hover:bg-gray-700 transition">
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

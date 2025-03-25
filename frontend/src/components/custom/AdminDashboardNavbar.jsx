import { useState } from "react";
import { Menu, X, User, LogOut, PlusCircle, Settings } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

export default function AdminNavbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [profileOpen, setProfileOpen] = useState(false);

  return (
    <nav className="bg-white dark:bg-gray-900 shadow-md px-6 py-4 fixed top-0 w-full z-50">
      <div className="flex justify-between items-center max-w-7xl mx-auto">

        {/* Left: Logo & Mobile Menu Button */}
        <div className="flex items-center space-x-4">
          <button className="md:hidden text-gray-700 dark:text-white" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
          <h1 className="text-2xl font-extrabold text-gray-800 dark:text-white">
            Banquet <span className="text-blue-600">Finder</span>
          </h1>
        </div>

        {/* Center: Desktop Menu */}
        <div className="hidden md:flex space-x-6 text-lg font-medium">
          <Link to="/admin/dashboard" className="text-gray-700 dark:text-gray-300 hover:text-blue-600 transition">Dashboard</Link>
          <Link to="/admin/banquets" className="text-gray-700 dark:text-gray-300 hover:text-blue-600 transition">Banquets</Link>
          <Link to="/admin/orders" className="text-gray-700 dark:text-gray-300 hover:text-blue-600 transition">Orders</Link>
          <Link to="/admin/users" className="text-gray-700 dark:text-gray-300 hover:text-blue-600 transition">Users</Link>
        </div>

        {/* Right: Buttons & Profile */}
        <div className="flex items-center space-x-4">
          <Button asChild className="hidden md:flex">
            <Link to="/admin/dashboard/createbanquet">
              <PlusCircle className="mr-2" size={20} /> Create Banquet
            </Link>
          </Button>

          {/* Profile Dropdown */}
          <div className="relative">
            <button
              className="flex items-center space-x-2 text-gray-700 dark:text-white hover:text-blue-600 transition"
              onClick={() => setProfileOpen(!profileOpen)}
            >
              <User size={24} />
            </button>
            {profileOpen && (
              <div className="absolute right-0 mt-3 w-48 bg-white dark:bg-gray-800 rounded-lg shadow-lg">
                <Link to="/admin/profile" className="flex items-center space-x-2 px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700 transition">
                  <Settings size={18} />
                  <span>Profile</span>
                </Link>
                <button className="w-full flex items-center space-x-2 px-4 py-2 text-red-600 hover:bg-gray-100 dark:hover:bg-gray-700 transition">
                  <LogOut size={18} />
                  <span>Logout</span>
                </button>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden flex flex-col items-center mt-4 space-y-4 text-lg font-medium text-gray-700 dark:text-gray-300">
          <Link to="/admin/dashboard" className="hover:text-blue-600 transition">Dashboard</Link>
          <Link to="/admin/banquets" className="hover:text-blue-600 transition">Banquets</Link>
          <Link to="/admin/orders" className="hover:text-blue-600 transition">Orders</Link>
          <Link to="/admin/users" className="hover:text-blue-600 transition">Users</Link>
          <Button asChild className="w-full">
            <Link to="/admin/create-banquet">
              <PlusCircle className="mr-2" size={20} /> Create Banquet
            </Link>
          </Button>
        </div>
      )}
    </nav>
  );
}

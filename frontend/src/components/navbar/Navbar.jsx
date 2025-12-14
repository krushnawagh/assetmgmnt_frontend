import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Bell, Search, User } from 'lucide-react';

const Navbar = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = (e) => {
    e.preventDefault();
    console.log('Searching for:', searchQuery);
    // TODO: Implement search functionality
  };

  return (
    <nav className="bg-gray-800 text-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 gap-8">
          {/* Logo/Brand */}
          <div className="flex items-center flex-shrink-0">
            <Link to="/admin/dashboard" className="text-2xl font-bold text-green-400">
              Asset Manager
            </Link>
          </div>

          {/* Search Bar - Center */}
          <div className="flex-1 max-w-md">
            <form onSubmit={handleSearch} className="relative">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search assets, users, IDs..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full px-4 py-2 pl-10 pr-4 bg-gray-700 text-white placeholder-gray-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:bg-gray-600 transition"
                />
                <Search size={18} className="absolute left-3 top-2.5 text-gray-400" />
              </div>
            </form>
          </div>

          {/* Right Side Items */}
          <div className="flex items-center space-x-6">
            {/* Notification Bell */}
            <button className="relative p-2 text-gray-300 hover:text-white hover:bg-gray-700 rounded-lg transition">
              <Bell size={22} />
              <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
            </button>

            {/* User Avatar/Profile */}
            <div className="flex items-center space-x-3 pl-6 border-l border-gray-700">
              <div>
                <p className="text-sm font-medium text-white">Admin User</p>
                <p className="text-xs text-gray-400">Administrator</p>
              </div>
              <button className="p-2 bg-gray-700 hover:bg-gray-600 text-gray-300 hover:text-white rounded-full transition">
                <User size={20} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

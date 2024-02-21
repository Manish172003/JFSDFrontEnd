// App.js

import React, { useState } from "react";

const ProfileDropdown = () => {
    const [isDropdownOpen, setDropdownOpen] = useState(false);

    const toggleDropdown = () => {
      setDropdownOpen(!isDropdownOpen);
    };

    return (
      <div className="relative inline-block text-left">
        <div>
          <button
            onClick={toggleDropdown}
            className="flex items-center text-white focus:outline-none"
          >
            <img
              src="path-to-your-profile-picture.jpg" // Replace with the path to your profile picture
              alt="Profile"
              className="w-8 h-8 rounded-full mr-2"
            />
            <span className="hidden md:inline-block">Your Name</span>
            <svg
              className="w-4 h-4 ml-1 fill-current text-white"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
            >
              <path d="M10 12l-8 8H1l9-9 9 9h-1l-8-8z" />
            </svg>
          </button>
        </div>

        {isDropdownOpen && (
          <div className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
            <div className="py-1">
              <a
                href="#"
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
              >
                My Profile
              </a>
              <a
                href="#"
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
              >
                My Orders
              </a>
              <a
                href="#"
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
              >
                Forgot Password
              </a>
            </div>
          </div>
        )}
      </div>
    );

};

export default ProfileDropdown;

import React, { useState } from "react";
import { useAuth } from "../security/AuthContext";

const AdminLeftMenu = ({ isOpen, toggleMenu }) => {
  const authcontext = useAuth();
  const role = authcontext.role1;
  return (
    <div
      className={`fixed h-full w-48 bg-gray-800 text-white transition-transform transform ${
        isOpen ? "translate-x-0" : "-translate-x-full"
      }`}
    >
      <div className="p-4 bg-gray-900">Your Profile</div>
      <ul className="list-none p-0 m-0">
        <li className="hover:bg-gray-700 p-4 cursor-pointer">Dashboard</li>
        <li className="hover:bg-gray-700 p-4 cursor-pointer">Profile</li>
        <li className="hover:bg-gray-700 p-4 cursor-pointer">
          Approve Restaurant
        </li>
        <li className="hover:bg-gray-700 p-4 cursor-pointer">
          View Pending Restaurants
        </li>
        <li className="hover:bg-gray-700 p-4 cursor-pointer">
          Restaurant Plaza
        </li>
        <button
          onClick={() => {
            authcontext.logout();
          }}
          className="hover:bg-gray-700 p-4 cursor-pointer"
        >
          Logout
        </button>
      </ul>
    </div>
  );
};

export default AdminLeftMenu;

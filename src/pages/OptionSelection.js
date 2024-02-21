import React from "react";
import { Link } from "react-router-dom";

const OptionSelection = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md w-full sm:max-w-md">
        <h1 className="text-2xl font-bold mb-6 text-center">
          Choose an Option
        </h1>

        <div className="flex flex-col space-y-4">
          <Link
            to="/signup/restaurant"
            className="bg-blue-500 text-white py-3 rounded-lg text-center hover:bg-blue-600 transition duration-300"
          >
            Partner with us
          </Link>

          <Link
            to="/signup/customer"
            className="bg-green-500 text-white py-3 rounded-lg text-center hover:bg-green-600 transition duration-300"
          >
            Order Something
          </Link>
        </div>
      </div>
    </div>
  );
};

export default OptionSelection;

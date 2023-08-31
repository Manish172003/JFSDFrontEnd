import React, { useState } from "react";
import { Link } from "react-router-dom";

const Login = ({ handleLogin }) => {
  const handleChange = () => {
    handleLogin();
  };
  return (
    <div className="bg-[#1c3155]">
      <div className="bg-[#1c3155] h-[90vh] flex items-center justify-evenly mx-4">
        <div class="w-full max-w-xs bg-[#1c3155]">
          <form class="px-8 pt-6 pb-8 mb-4 bg-[#1c3155] rounded-lg shadow-2xl">
            <div class="mb-4">
              <h3 className="text-white font-serif font-bold mb-4">
                Customer Login
              </h3>
              <label
                class="block text-white text-sm font-bold mb-2"
                for="username"
              >
                Username
              </label>
              <input
                class="shadow appearance-none border rounded w-full py-2 px-3  leading-tight focus:outline-none focus:shadow-outline"
                id="username"
                type="text"
                placeholder="Username"
              />
            </div>
            <div class="mb-6">
              <label
                class="block text-white text-sm font-bold mb-2"
                for="password"
              >
                Password
              </label>
              <input
                class="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-white-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                id="password"
                type="password"
                placeholder="******************"
              />
              <p class="text-red-500 text-xs italic">
                Please choose a password.
              </p>
            </div>
            <div
              class="flex items-center justify-between"
              // onClick={handleChange}
            >
              <Link to ="/cus/home"
                class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                type="button"
              >
                Sign In
              </Link>
              <a
                class="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800"
                href="#"
              >
                Forgot Password?
              </a>
            </div>
          </form>
        </div>
        <div class="w-full max-w-xs bg-[#1c3155]">
          <form class="px-8 pt-6 pb-8 mb-4 bg-[#1c3155] rounded-lg shadow-2xl">
            <div class="mb-4">
              <h3 className="text-white font-serif font-bold mb-4">
                Restaurant Login
              </h3>
              <label
                class="block text-white text-sm font-bold mb-2"
                for="username"
              >
                Username
              </label>
              <input
                class="shadow appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
                id="username"
                type="text"
                placeholder="Username"
              />
            </div>
            <div class="mb-6">
              <label
                class="block text-white text-sm font-bold mb-2"
                for="password"
              >
                Password
              </label>
              <input
                class="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-white-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                id="password"
                type="password"
                placeholder="******************"
              />
              <p class="text-red-500 text-xs italic">
                Please choose a password.
              </p>
            </div>
            <div class="flex items-center justify-between">
              <Link
                to="/resthome"
                class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                type="button"
                //  onClick={handleChange}
              >
                Sign In
              </Link>
              <a
                class="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800"
                href="#"
              >
                Forgot Password?
              </a>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;

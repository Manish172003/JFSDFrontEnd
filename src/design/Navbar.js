import React from "react";
import logo from "../images/logo.png";
import { Link } from "react-router-dom";
import { useState } from "react";
import Login from "../pages/Login";
import AuthProvider from "../AuthProvider";
export default function Navbar() {
  const [lgnbtn, setLgnBtn] = useState("Login");

  const handleLogin = () => {
    if (lgnbtn === "Login") {
      setLgnBtn("Logout");
    } else {
      setLgnBtn("Login");
    }
  };

  return (
    <>
      <div>
        <nav class="bg-[#1c3155] border-[#1c3155] dark:bg-[#1c3155]  shadow-lg">
          <div class="max-w-screen-xl flex flex-wrap items-center justify-evenly mx-auto p-4">
            <a href="#" class="flex items-center">
              <img src={logo} class="h-10 mr-6 px-12" alt="Flowbite Logo" />
            </a>
            <button
              data-collapse-toggle="navbar-default"
              type="button"
              class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
              aria-controls="navbar-default"
              aria-expanded="false"
            >
              <span class="sr-only">Open main menu</span>
              <svg
                class="w-5 h-5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 17 14"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M1 1h15M1 7h15M1 13h15"
                />
              </svg>
            </button>
            <div
              className="hidden w-full md:block md:w-auto"
              id="navbar-default"
            >
              <ul class="font-medium flex flex-col p-4 md:p-0 mt-4 border rounded-lg bg-[#1c3155] md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-[#1c3155]  dark:bg-[#1c3155] md:dark:bg-gray-900 dark:border-gray-700">
                <li>
                  <Link
                    to="/"
                    href="#"
                    class="block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:text--700 md:p-0 dark:text-white md:dark:text-blue-500"
                    aria-current="page"
                  >
                    Home
                  </Link>
                </li>

                <li>
                  <Link
                    to="/viewres"
                    class="block py-2 pl-3 pr-4 text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                  >
                    Restaurants
                  </Link>
                </li>

                <li>
                  <Link
                    to="/login"
                    href="#"
                    class="block py-2 pl-3 pr-4 text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                  >
                    {lgnbtn}
                  </Link>
                </li>
                <Link
                  to="/signup"
                  href="#"
                  class="block py-2 pl-3 pr-4 text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                >
                  Signup
                </Link>

                <li></li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
      {/* <Login handleLogin = {() => handleLogin() }/> */}
    </>
  );
}

// handleLogin = {() => handleLogin() }

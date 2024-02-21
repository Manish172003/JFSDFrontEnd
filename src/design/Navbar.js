import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import { useAuth } from "../security/AuthContext";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const authcontext = useAuth();

  return (
    <div className="bg-[#1d1f20]">
      <div className="md:flex items-center justify-between py-4 md:px-10 px-4">
        <div className="flex justify-between">
          <div className="font-serif text-2 xl cursor-pointer flex items-center  gap-1">
            <Link to="/">
              <span className="text-white md:ml-5 ml-14">CurrencyXpert</span>
            </Link>
          </div>
          <div
            onClick={() => setOpen(!open)}
            className="md:hidden cursor-pointer text-white"
          >
            {open ? (
              <FontAwesomeIcon icon={faTimes} size="2x" />
            ) : (
              <FontAwesomeIcon icon={faBars} size="2x" />
            )}
          </div>
        </div>

        <div>
          <ul
            className={`${
              open ? "block" : "hidden"
            } md:flex md:items-center md:pb-0 pb-4`}
          >
            {/* <li>
              <Link
                to="/"
                className="block px-4 py-2 text-white rounded hover:text-blue-700"
                aria-current="page"
              >
                Home
              </Link>
            </li> */}
            {/* {authcontext.isAuthenticated &&
              authcontext.role1 === "RESTAURANT" && (
                <li>
                  <Link
                    to="/resthome"
                    className="block px-4 py-2 text-white rounded hover:text-blue-700"
                    aria-current="page"
                  >
                    Rest Home
                  </Link>
                </li>
              )} */}
            {!authcontext.isAuthenticated && (
              <li>
                <Link
                  to="/login"
                  className="block px-4 py-2 text-white rounded hover:text-blue-700"
                >
                  Login
                </Link>
              </li>
            )}
            {!authcontext.isAuthenticated && (
              <li>
                <Link
                  to="/signup"
                  className="block px-4 py-2 text-white rounded hover:text-blue-700"
                >
                  Signup
                </Link>
              </li>
            )}
          </ul>
        </div>

      </div>
    </div>
  );
};

export default Navbar;

import React from "react";

import { Link } from "react-router-dom";
const RestaurantHome = () => {
  return (
    <>
      <div className="w-2/12 h-[90vh] bg-[#1c3155]">
        <div className="flex">
          <ul className="p-5 my-3">
            <Link
              to="/rest/addfood"
              class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline my-4"
              type="button"
            >
              Add Food
            </Link>

            <Link
              to="/rest/deletefood"
              class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline my-4"
              type="button"
            >
              Delete Food
            </Link>

            <Link
              to="/rest/updatefood"
              class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline my-4"
              type="button"
            >
              Update Food
            </Link>

            <Link
              to="/rest/orders"
              class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline my-4"
              type="button"
            >
              Orders
            </Link>
          </ul>
        </div>
      </div>
    </>
  );
};

export default RestaurantHome;

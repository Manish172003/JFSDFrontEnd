import React from "react";
import scooter from "../images/sc2.png";
import { Link } from "react-router-dom";
const Home = () => {
  return (
    <div className="bg-[#1c3155]">
      <div className="md:mx-16 mx-6">
        <div className="lg:grid lg:grid-cols-2 lg:h-[90vh]  items-center justify-items-center justify-between home flex  mt-5 lg:mt-0 gap-4 lg:gap-0">
          <div class="flex flex-col gap-4 md:gap-8 items-center lg:items-start md:ms-7">
            <p class="text-white md:text-6xl font-medium text-center lg:text-left w-[80%]">
              Feeding your cravings, anytime, anywhere.
            </p>
            <a class="border-yellow-300">
              <Link
                to="/viewres"
                class="hover:shadow-xl transition-all p-2 px-4 bg-white rounded w-[fit-content] text-sm md:text-base font-bold border-yellow-300"
              >
                Explore Restaurants.
              </Link>
            </a>
          </div>
          <div class="flex lg:justify-end items-center justify-center">
            <img src={scooter} class="lg:w-[85%] w-[90%]" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;

import React from "react";
import scooter from "../images/scooter.png";

const Home = () => {
  return (
    <div className="bg-[#1c3155]">
      <div className="md:mx-16 mx-6">
        <div className="lg:grid lg:grid-cols-2 lg:h-[90vh]  items-center justify-items-center justify-between home flex  mt-5 lg:mt-0 gap-4 lg:gap-0">
          <div class="flex flex-col gap-4 md:gap-8 items-center lg:items-start md:ms-7">
            <p class="text-white text-4xl md:text-7xl font-bold text-center lg:text-left ">
              Satisfy your cravings.
            </p>
            <p class="text-white md:text-3xl font-medium text-center lg:text-left w-[80%]">
              Discover the best food and drinks near you - Order Online!
            </p>
            <a class="border-yellow-300" href="/restaurants">
              <button class="hover:shadow-xl transition-all p-2 px-4 bg-white rounded w-[fit-content] text-sm md:text-base font-bold border-yellow-300">
                Explore your nearby Restaurants.
              </button>
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

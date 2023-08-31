
import React, { useEffect, useState } from "react";
import axios from "axios";
const ViewRestaurants = () =>{
    
     const[res,Setres] = useState([])
      
     const loadRes = async() =>{
        const result = await axios("http://localhost:2020/res/getactive")
        Setres(result.data)
     }
     useEffect( () => {
        loadRes();
     })
  
      return (
        <div className=" h-[90vh] bg-[#1c3155] p-6">
          <div class=" flex items-center justify-center bg-[#1c3155]">
            <div class="container max-w-screen-lg mx-auto ">
              <div
                class="p-4 text-sm text-gray-800 rounded-lg bg-gray-50 dark:bg-gray-800 dark:text-gray-300"
                role="alert"
              >
                <div>
                  {res.map((restaurant) => (
                    <div className="py-2">
                      <div className="px-4 pt-1">
                        <h3 className="font-bold text-lg">
                          {restaurant?.name}
                        </h3>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      );

}

export default ViewRestaurants;
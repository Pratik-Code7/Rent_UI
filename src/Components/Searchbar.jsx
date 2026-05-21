import React, { useState } from "react";
import "./Searchbar.css";
const Searchbar = () => {
  const [active, setActive] = useState(1);
  return (
    <div className="searchbar w-full  bg-white  rounded-2xl px-5 py-3 flex flex-col gap-2 ">
      <div className="top flex justify-between items-center ">
        <div className="left  flex justify-between items-center  h-10 gap-3 font-bold  ">
          <button
            onClick={() => setActive(1)}
            className={
              active === 1 ? "bg-black text-white" : "bg-white text-gray-700"
            }
          >
            Buy
          </button>
          <button
            onClick={() => setActive(2)}
            className={
              active === 2 ? "bg-black text-white" : "bg-white text-gray-700"
            }
          >
            Rent
          </button>
          <button
            onClick={() => setActive(3)}
            className={
              active === 3 ? "bg-black text-white" : "bg-white text-gray-700"
            }
          >
            Sell
          </button>
        </div>
        {/* <div className="bg-blue-500  ">
          <i class="ri-star-line"></i>
          <p>4.5 Review()</p>
        </div> */}
        <div className="right"></div>
      </div>
      <div className="search flex items-center gap-3 pb-2">
        <div>
          <p>Location</p>
          <select name="" id="">
            <option value="a" selected disabled>
              Select Location
            </option>
          </select>
        </div>
        <div>
          <p>Property Type</p>
          <select name="" id="">
            <option value="a" selected disabled>
              Individual
            </option>
          </select>
        </div>
        <div>
          <p>Price</p>
          <select name="" id="">
            <option value="a" selected disabled>
              $10000 - $50000
            </option>
          </select>
        </div>
        <div>
          <button className="bg-black text-white px-4 py-1.5 rounded-[50px]  mt-5">
            Search
          </button>
        </div>
      </div>
    </div>
  );
};

export default Searchbar;

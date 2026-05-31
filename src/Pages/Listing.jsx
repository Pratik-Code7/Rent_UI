import React, { useState } from "react";
import Navbar from "../Components/Navbar";
import Favorites from "../Components/Favorites";
import Fav_Comp from "../Components/Fav_Comp";
const Listing = () => {
  const [active, setactive] = useState(0);
  const dashList = [
    "My Properties",
    "Favorites",
    "Notifications",
    "Profile Settings",
  ];
  return (
    <div className="h-screen  w-full bg-gray-100 overflow-hidden">
      <Navbar />
      <div className="Dash-Box flex  items-center h-full justify-center  ">
        <div className=" bg-white h-full w-1/4  flex flex-col gap-3 py-5 px-8 overflow-y-auto text-sm">
          <div className="List-txt  ">
            <h1 className=" ">
              <i className="ri-filter-line"></i> Filter Properties
            </h1>
          </div>
          <div className="">
            {/* Heading */}

            {/* Filter Form */}
            <form className="flex flex-col gap-5">
              {/* Search */}
              <div className="flex flex-col gap-2">
                <label>Location</label>
                <input
                  type="text"
                  placeholder="Search Location..."
                  className="border border-gray-300 rounded-xl px-4 py-1.5 outline-none focus:border-black"
                />
              </div>

              {/* Property Type */}
              <div className="flex flex-col gap-2 text-sm">
                <label>Property Type</label>
                <select className="border border-gray-300  px-4 py-2 rounded-lg outline-none text-sm focus:border-black ">
                  <option>All</option>
                  <option>Apartment</option>
                  <option>Villa</option>
                  <option>House</option>
                  <option>Office</option>
                </select>
              </div>

              {/* Price Range */}
              <div className="flex flex-col gap-3">
                <div className="flex justify-between">
                  <label>Price Range</label>
                  <span className="text-sm text-gray-500">$500 - $5000</span>
                </div>

                <input
                  type="range"
                  min="500"
                  max="5000"
                  className="w-full cursor-pointer accent-black"
                />
              </div>

              {/* Bedrooms */}
              <div className="flex flex-col gap-2">
                <label>Bedrooms</label>
                <select className="border border-gray-300 rounded-lg px-4 py-2 outline-none focus:border-black">
                  <option>Any</option>
                  <option>1 Bedroom</option>
                  <option>2 Bedrooms</option>
                  <option>3 Bedrooms</option>
                  <option>4+ Bedrooms</option>
                </select>
              </div>

              {/* Bathrooms */}
              <div className="flex flex-col gap-2">
                <label>Bathrooms</label>
                <select className="border border-gray-300 rounded-lg px-4 py-2 outline-none focus:border-black">
                  <option>Any</option>
                  <option>1 Bathroom</option>
                  <option>2 Bathrooms</option>
                  <option>3+ Bathrooms</option>
                </select>
              </div>

              {/* Amenities */}
              <div className="flex flex-col gap-3">
                <label>Facilities</label>

                <div className="flex items-center gap-2">
                  <input type="checkbox" />
                  <span>Parking</span>
                </div>

                <div className="flex items-center gap-2">
                  <input type="checkbox" />
                  <span>Swimming Pool</span>
                </div>

                <div className="flex items-center gap-2">
                  <input type="checkbox" />
                  <span>Gym</span>
                </div>

                <div className="flex items-center gap-2">
                  <input type="checkbox" />
                  <span>WiFi</span>
                </div>
              </div>

              {/* Buttons */}
              <div className="flex gap-3 mt-2">
                <button
                  type="submit"
                  className="bg-black text-white py-3  rounded-xl w-full hover:opacity-90"
                >
                  Apply Filters
                </button>

                <button
                  type="reset"
                  className="border border-gray-300 py-3 rounded-xl w-full hover:bg-gray-100"
                >
                  Reset
                </button>
              </div>
            </form>
          </div>
        </div>

        <Fav_Comp />
      </div>
    </div>
  );
};

export default Listing;

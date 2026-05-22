import React, { useState } from "react";
import logo from "../assets/logo.png";
import { Link } from "react-router-dom";
const Navbar = () => {
  const [login, setlogin] = useState(false);
  return (
    <div className=" sticky top-0 z-50 flex flex-col sm:flex-row w-full  items-center justify-between bg-white md:h-16 px-5 gap-5  ">
      <div className="flex  gap-6 items-center  ">
        <div className="h-16 w-30">
          <a href="/" className="text-l sm:text-xl">
            <img
              src={logo}
              alt="Logo"
              className="bg-transparent h-full w-full "
            />
          </a>
        </div>
        <a href="/">Listing</a>
        <Link to="/dashboard">Dashboard</Link>
      </div>
      <div className="flex gap-4 items-center  ">
        <div className="bg-white flex rounded-full py-1.5 px-5 border-2 border-gray-200 ">
          <i className="ri-search-line mx-2"></i>
          <input
            type="text"
            placeholder="Search areas..."
            className="outline-0"
          />
        </div>
        <div className="bg-black py-2 rounded text-white px-5 cursor-pointer">
          Post Property
        </div>
        {login ? (
          <div className="icon bg-black rounded-full p-3 h-10 w-10 flex items-center justify-center">
            <i className="ri-user-line text-white"></i>
          </div>
        ) : (
          <div
            className="bg-black py-2 px-5 rounded text-white cursor-pointer"
            onClick={() => {
              setlogin(true);
            }}
          >
            Login
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;

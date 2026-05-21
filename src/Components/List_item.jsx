import React from "react";
import hero from "../assets/hero.png";
const List_item = ({ image, text }) => {
  return (
    <div className="bg-gray-600 h-95 w-105 rounded-2xl overflow-hidden shadow-2xl ">
      <div className="image h-[70%] w-full ">
        <img
          src={image}
          alt="Property"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="list-text bg-white w-full h-[30%] p-4 text-[1.15rem] gap-1 flex flex-col justify-between  ">
        {text}
        <div className="flex items-center gap-2  text-gray-700 ">
          <i className="ri-map-pin-2-fill"></i>
          <p className=" text-sm">Lorem ipsum dolor sit amet</p>
        </div>
        <div className="flex items-center gap-1 text-xs font-medium text-gray-600">
          <div className="flex justify-center items-center bg-gray-200 h-7 rounded-[10px] py-1 px-3">
            1 Room
          </div>
          <div className="flex justify-center items-center bg-gray-200 h-7 rounded-[10px] py-1 px-3">
            2 Bath
          </div>
          <div className="flex justify-center items-center bg-gray-200 h-7 rounded-[10px] py-1 px-3">
            1200 sqft
          </div>
        </div>
      </div>
    </div>
  );
};

export default List_item;

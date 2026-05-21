import React from "react";

const InfoBox = () => {
  return (
    <div className=" h-70 w-90 flex flex-col justify-center items-center gap-3 rounded-2xl  p-5">
      <div className="info-circle bg-white h-15 w-15 rounded-full flex justify-center items-center text-black text-2xl">
        <i className="ri-verified-badge-line"></i>
      </div>
      <h1 className="text-2xl font-bold">Verified listing</h1>
      <p className="text-center text-xs">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. <br />
        Quos, istense voluptate. Doloribus, quisquam. Voluptas, voluptate.
        Doloribus,
      </p>
    </div>
  );
};

export default InfoBox;

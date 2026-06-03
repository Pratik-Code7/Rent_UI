import React from "react";

const Messages = () => {
  return (
    <div className="dash-right overflow-y-auto h-full  w-full flex flex-col p-4 md:p-8 gap-5  ">
      <h1 className="text-2xl font-bold ">Notifications</h1>
      {/* msg box */}
      <div className="msg w-full bg-white shadow py-4 flex items-center  px-6 shrink-0 rounded-xl gap-5">
        <div className="nCircle h-14 w-14 bg-gray-200 rounded-full shrink-0 flex justify-center items-center text-2xl">
          <i className="ri-notification-2-line"></i>
        </div>
        <div className="N-info">
          <h1 className="text-sm md:text-lg font-semibold">
            Viewed by 2 people
          </h1>
          <p className=" text-xs md:text-sm">Lorem ipsum dolor sit amet</p>
        </div>
        {/*whitespace-nowrap= It prevents text from wrapping to the next line. */}
        <div className="N-time text-xs text-gray-700 ml-auto  whitespace-nowrap">
          <h1>2 hours ago</h1>
        </div>
      </div>
    </div>
  );
};

export default Messages;

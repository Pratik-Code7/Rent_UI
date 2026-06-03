import { useState } from "react";
import Navbar from "../Components/Navbar";
import Property from "../Components/Property";
import Favorites from "../Components/Favorites";
import Messages from "../Components/Messages";
import Profile from "../Components/Profile";

const DashBoard = () => {
  const [active, setactive] = useState(0);

  const dashList = [
    "My Properties",
    "Favorites",
    "Notifications",
    "Profile Settings",
  ];

  return (
    <div className="h-screen w-full bg-gray-100 overflow-hidden">
      <Navbar />

      <div className="flex flex-col md:flex-row">
        {/* Sidebar */}
        <div className="w-full md:h-screen md:w-72 bg-white p-5 shadow-md">
          <div className="flex  md:flex-col gap-2 overflow-x-auto ">
            {dashList.map((elem, idx) => (
              <div
                key={idx}
                onClick={() => setactive(idx)}
                className={` p-3 rounded cursor-pointer whitespace-nowrap ${
                  active === idx ? "bg-black text-white" : "hover:bg-gray-100"
                }`}
              >
                {elem}
              </div>
            ))}
          </div>
        </div>

        {/* Content */}
        <div className="flex-1 h-screen p-4 md:p-6 ">
          {active === 0 && <Property />}
          {active === 1 && <Favorites />}
          {active === 2 && <Messages />}
          {active === 3 && <Profile />}
        </div>
      </div>
    </div>
  );
};

export default DashBoard;

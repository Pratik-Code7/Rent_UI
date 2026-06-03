import React from "react";

const Profile = () => {
  return (
    <>
      {" "}
      <div className="px-4 py-2 md:px-6 md:py-4 ">
        <h1 className="text-2xl md:text-3xl font-bold">My Properties</h1>
        <p className="text-gray-500">
          Manage your active properties and track their performance.
        </p>
      </div>
      <div className="w-full  flex flex-col lg:flex-row gap-6 p-4 md:p-6">
        {/* LEFT SIDE */}
        <div className="bg-white w-full lg:w-1/3 rounded-xl border border-gray-300 shadow p-5 flex flex-col gap-5">
          {/* Top Section */}
          <div className="flex flex-col items-center justify-center text-center gap-3">
            <div className="h-20 w-20 bg-gray-200 rounded-full"></div>

            <div>
              <h1 className="text-xl font-semibold">Pratik Shakya</h1>
              <p className="text-gray-500 text-sm">xxx@gmail.com</p>
            </div>
          </div>

          {/* Info Section */}
          <div className="flex flex-col gap-3">
            <div className="flex items-center gap-3 border border-gray-400 rounded-xl p-3">
              <i className="ri-time-line text-xl"></i>
              <div>
                <h1 className="font-medium">Member Since</h1>
                <p className="text-sm text-gray-500">May 12, 2023</p>
              </div>
            </div>

            <div className="flex items-center gap-3 border border-gray-400 rounded-xl p-3">
              <i className="ri-map-pin-line text-xl"></i>
              <div>
                <h1 className="font-medium">Location</h1>
                <p className="text-sm text-gray-500">Kathmandu, Nepal</p>
              </div>
            </div>

            <div className="flex items-center gap-3 border border-gray-400 rounded-xl p-3">
              <i className="ri-phone-line text-xl"></i>
              <div>
                <h1 className="font-medium">Phone</h1>
                <p className="text-sm text-gray-500">+977 XXXXXXXX</p>
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="bg-white w-full lg:w-2/3 rounded-xl border border-gray-300 shadow p-6 md:p-8 flex flex-col gap-5">
          {/* Header */}
          <div>
            <h1 className="text-lg font-bold">Profile Settings</h1>
            <p className="text-sm text-gray-600">
              Manage your account information and preferences.
            </p>
          </div>

          {/* FORM */}
          <form className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div className="flex flex-col gap-1">
              <label>Full Name</label>
              <input
                className="p-2 rounded-lg border border-gray-300"
                type="text"
              />
            </div>

            <div className="flex flex-col gap-1">
              <label>Email</label>
              <input
                className="p-2 rounded-lg border border-gray-300"
                type="text"
              />
            </div>

            <div className="flex flex-col gap-1">
              <label>Phone Number</label>
              <input
                className="p-2 rounded-lg border border-gray-300"
                type="text"
              />
            </div>

            <div className="flex flex-col gap-1">
              <label>Location</label>
              <input
                className="p-2 rounded-lg border border-gray-300"
                type="text"
              />
            </div>

            <div className="flex flex-col gap-1 md:col-span-2">
              <label>Bio</label>
              <textarea className="p-2 rounded-lg border border-gray-300 h-24"></textarea>
            </div>

            <div className="md:col-span-2 flex justify-end">
              <button className="bg-black text-white px-4 py-2 rounded-lg">
                Save Changes
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Profile;

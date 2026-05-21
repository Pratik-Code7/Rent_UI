import React, { useState } from "react";
import "./Auth.css";
import google from "../assets/google.png";

const Auth = () => {
  const [ShowPassword, setShowPassword] = useState(false);
  return (
    <div className=" flex justify-center items-center h-screen w-screen bg-white p-5">
      <div className="container bg-white rounded-2xl  flex flex-col  h-auto w-100 p-6  md:w-96">
        <div className="textbox flex justify-center items-center flex-col mt-3  gap-1">
          <h1 className="font-bold text-2xl">Welcome Back</h1>
          <p className="text-l text-gray-600">Login to Continue</p>
        </div>
        <div className=" flex flex-col gap-2 p-5 ">
          <label htmlFor="email">Email</label>
          <input type="text" id="email" placeholder="Email" />
          <label htmlFor="password">Password</label>
          <div className="relative w-full">
            <input
              type={ShowPassword ? "text" : "password"}
              id="password"
              placeholder="Password"
              className="w-full"
            />
            <button
              className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500"
              onClick={() => setShowPassword(!ShowPassword)}
            >
              {ShowPassword ? (
                <i className="ri-eye-fill"></i>
              ) : (
                <i className="ri-eye-off-fill"></i>
              )}
            </button>
          </div>
          {/* <div className="bg-green-50 flex justify-center items-center"> */}
          <button
            type="submit"
            className="bg-black text-white p-2.5 rounded-xl w-full mt-2"
          >
            Login
          </button>
          <div className=" flex justify-center items-center mt-1 mb-1 gap-4">
            <div className="line"></div>
            <div>OR</div>
            <div className="line"></div>
          </div>
          <button
            type="submit"
            className="gbtn rounded-xl p-2.5 flex justify-center items-center gap-2 w-full"
          >
            <img src={google} alt="Google Logo" className="w-6  " />
            <h1>Continue with Google</h1>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Auth;

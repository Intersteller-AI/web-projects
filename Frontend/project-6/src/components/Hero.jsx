import React from "react";
import { Navbar, Profile, Statistics } from "../components";

const Hero = () => {
  return (
    <div className="w-full h-[100vh] sm:rounded-tl-[50px] bg-[#f1f2f6] sm:py-4 sm:px-5 px-2 py-2 drop-shadow-lg overflow-y-scroll hide-scrollbar">
      <Navbar />
      <div className="sm:hidden flex w-full px-4 mt-4 mb-1">
          <h1 className="text-[20px] font-semibold block sm:hidden">
            Dashboard
          </h1>
        </div>
      <div className="w-full flex md:flex-row ss:flex-col-reverse flex-col justify-between">
        <Statistics />
        <Profile />
      </div>
    </div>
  );
};

export default Hero;

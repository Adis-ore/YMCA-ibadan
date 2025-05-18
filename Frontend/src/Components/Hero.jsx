import React from "react";
import { assets } from "../assets/assets";
import wall from "../assets/wall.jpg";
import wallpaper from "../assets/wallpaper.png";

const Hero = () => {
  return (
    <div
      className=" h-120 sm:h-150   bg-cover bg-center flex items-center justify-center text-white"
      style={{ backgroundImage: `url(${wall})` }}
    >
      <div className=" p-10  text-center ">
        <p className="text-7xl font-extrabold tracking-wide">YMCA</p>
        <hr className="h-1.5 bg-red-600 w-full mx-auto my-6 rounded" />
        <p className="text-lg tracking-wide">
          Service to God, service to humanity
        </p>
      </div>
    </div>
  );
};

export default Hero;

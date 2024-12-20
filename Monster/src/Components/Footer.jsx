import React from "react";
import { LuFacebook } from "react-icons/lu";
import { FiTwitter } from "react-icons/fi";
import { ImGooglePlus } from "react-icons/im";
import { BsInstagram } from "react-icons/bs";

const Footer = () => {
  return (
    <>
      <div className="bg-slate-900 h-44 flex flex-col justify-between pt-3">
        <div className="flex justify-around text-white  ">
          <span className="text-lg hover:text-blue-600 duration-300 cursor-pointer">
            UI DESIGN
          </span>
          <span>|</span>
          <span className="text-lg hover:text-blue-600 duration-300 cursor-pointer">
            Windows/Mac OS Apps
          </span>
          <span>|</span>
          <span className="text-lg hover:text-blue-600 duration-300 cursor-pointer">
            Android/iOS Apps
          </span>
          <span>|</span>
          <span className="text-lg hover:text-blue-600 duration-300 cursor-pointer">
            Cloud Solutions
          </span>
          <span>|</span>
          <span className="text-lg hover:text-blue-600 duration-300 cursor-pointer">
            Customer Support
          </span>
        </div>
        <div className="w-full h-0.5 bg-slate-500 flex justify-centre items-center  "></div>
        <div className="h-16 flex items-center justify-between">
          <div>
            <p className="flex text-slate-500 items-center text-center">
              © 2024 RatherApp
            </p>
          </div>
          <div className="flex justify-center items-center text-slate-500 gap-3">
            <LuFacebook />
            <FiTwitter />
            <ImGooglePlus />
            <BsInstagram />
          </div>
          <div>
            <p className="flex justify-end items-end text-slate-500">
              All rights reserved. Design by TemplateMonster
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;

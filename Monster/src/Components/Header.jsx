import React from "react";
import { IoShareSocialOutline } from "react-icons/io5";

const Header = () => {
  return (
    <>
      <div className="flex justify-between items-center px-6 py-4 m-0 fixed bg-slate-100 w-full z-20 ">
        <div className="">
          <h1 className="text-2xl">RatherApp</h1>
        </div>
        <div>
          <nav>
            <ul className="flex justify-between items-center gap-12 text-xl ">
              <li className="cursor-pointer ">Home</li>
              <li className="cursor-pointer ">Services</li>
              <li className="cursor-pointer ">Projects</li>
              <li className="cursor-pointer ">Team</li>
              <li className="cursor-pointer">News</li>
              <li className="cursor-pointer">Contacts</li>
              <li className="text-3xl cursor-pointer">
                <IoShareSocialOutline />
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </>
  );
};

export default Header;

import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  return (
    <div className="fixed z-10 w-full">
      <div className="max-w-[1300px] mx-auto py-0 px-5 md:px-10 bg-transparent ">
        <div className="flex items-center w-full py-4 justify-between">
        
        <div className="flex gap-20 ">
        <div className="w-[300px] min-[900px]:w-[500px] ml-32 px-3 border-2 flex items-center">
            <FontAwesomeIcon
              className="text-gray-400"
              icon={faMagnifyingGlass}
            />
            <input
              className="flex bg-transparent text-xm rounded-md py-3 w-full h-12 outline-none"
              placeholder="What do you want to watch?"
            />
          </div>
          <div className="px-20 flex gap-6 items-center">
            <a className="pt-2 text-white">Sign in</a>
            <div className="cursor-pointer flex items-center justify-center bg-rose-700 w-10 h-10 rounded-full">
              <FontAwesomeIcon className="text-base text-white" icon={faBars} />
            </div>
          </div>
        </div>
          

        </div>
      </div>
    </div>
  );
};

export default Navbar;
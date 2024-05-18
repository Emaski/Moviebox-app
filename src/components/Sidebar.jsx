import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faClapperboard,
  faHome,
  faTvAlt,
} from "@fortawesome/free-solid-svg-icons";

const Sidebar = () => {
  return (
    <div className="fixed max-[1200px]:hidden overflow-auto h-full hide-scrollbar rounded-tr-[45px] rounded-br-[45px] w-[226px] border">
    <div className="ml-2 py-9">
      <a className="flex gap-2">
        <img
          className="w-9 h-9"
          src="https://raw.githubusercontent.com/OgaDavid/HNGx-Movie-Box/fa911fe4129bf4004f093b008ba6f80ae10b0c13/public/images/logo.svg"
          alt="MovieBox Logo"
        />
        <span className="font-bold text-2xl">MovieBox</span>
      </a>
    </div>

    <div className="">
      <ul className="mt-10 flex flex-col">
        <Link
          to="/"
          className="cursor-pointer hover:bg-rose-200 transition-colors duration-100 ease-in py-5 text-xl mb-4"
        >
          <FontAwesomeIcon className="px-5" icon={faHome}/> Home
        </Link>
        <Link
          to="/movies"
          className="cursor-pointer hover:bg-rose-200 transition-colors duration-100 ease-in py-5 text-xl mb-4"
        >
          <FontAwesomeIcon className="px-5" icon={faClapperboard} /> Movies
        </Link>
        <Link
          to="/tvshows"
          className="cursor-pointer hover:bg-rose-200 transition-colors duration-100 ease-in py-5 text-xl mb-4"
        >
          <FontAwesomeIcon className="px-5" icon={faTvAlt}/> Tv shows
        </Link>
      </ul>
    </div>
  </div>
  );
};

export default Sidebar;

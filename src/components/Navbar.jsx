// Navbar.jsx
import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    // Cleanup function to remove the event listener when component unmounts
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className={`fixed z-10 w-full ${scrolled ? 'backdrop-blur-sm' : ''}`}>
      <div className="max-w-[1300px] mx-auto py-0 px-5 md:px-10">
        <div className="flex items-center w-full py-4 justify-between">
          <div className="flex w-full items-center gap-5 md:gap-20">
            <div className="text-white flex  w-[200px] min-[900px]:w-[500px] min-[550px]:w-[500px] items-center ml-4 md:ml-32 px-3 border-2">
              <FontAwesomeIcon
                className="text-gray-400"
                icon={faMagnifyingGlass}
              />
              <input
                className="flex px-2 bg-transparent text-sm rounded-md py-3 w-full h-12 outline-none"
                placeholder="What do you want to watch?"
              />
            </div>
            <div className="flex items-center gap-4 md:gap-6">
              <a className="text-white cursor-pointer">Sign in</a>
              <div className="cursor-pointer flex items-center justify-center bg-rose-700 w-8 h-8 md:w-10 md:h-10 rounded-full">
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

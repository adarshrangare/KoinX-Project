import React, { useState } from "react";
import ContentWrapper from "../ContentWrapper/ContentWrapper";
import { IoMenu, IoCloseOutline } from "react-icons/io5";

import { NavLink } from "react-router-dom";
import logo from "../../Assets/KoinX Logo.png";
const Navbar = () => {
  const [navOpen, setNavOpen] = useState(false);

  return (
    <header className="h-16 md:h-20 shadow-default w-full border-b border-mainBorder bg-white overflow-x-hidden">
      <ContentWrapper>
        <div className="  w-full h-16 md:h-20 flex  justify-between px-4">
          <div className="logo self-center">
            <img src={logo} alt="KoinX Logo" />
          </div>

          <IoMenu
            onClick={() => setNavOpen(true)}
            className={`text-3xl cursor-pointer text-gray-700 md:hidden 
              self-center
              ${navOpen ? "hidden" : ""}
              `}
          />

          <nav
            className={`fixed top-0 right-0  max-sm:w-[60vw] 
            
            bg-white md:relative md:top-auto md:right-auto md:self-center   z-10 rounded-l-lg shadow-default max-sm:border max-sm:border-mainBorder ${
              navOpen ? "translate-x-0" : "translate-x-[200%]"
            } md:translate-x-0 transition-all duration-500`}
          >
            <ul className=" relative flex flex-col md:flex-row items-center md:gap-10 gap-6 max-sm:py-8 text-textNav font-semibold max-sm:items-start max-sm:pl-6 ">
              <IoCloseOutline
                onClick={() => setNavOpen(!navOpen)}
                className="text-3xl text-gray-700 cursor-pointer md:hidden absolute top-6 right-8"
              />
              <li className="hover:text-textBlue transition-all cursor-pointer">
                Crypto Taxes
              </li>
              <li className="hover:text-textBlue transition-all cursor-pointer">
                Free Tools
              </li>
              <li className="hover:text-textBlue transition-all cursor-pointer">
                Resource Center
              </li>
              <li>
                <button
                  className=" p-2 w-[136px] h-10 
                md:mx-4
                bg-gradient-to-r from-bgBlueLeft to-bgBlueRight text-white rounded-lg focus:outline-none outline-none active:scale-95 transition-all "
                >
                  Get Started
                </button>
              </li>
            </ul>
          </nav>
        </div>
      </ContentWrapper>
    </header>
  );
};

export default Navbar;

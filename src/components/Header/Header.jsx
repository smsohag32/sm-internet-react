import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import wifi from "./Ani/wifi.json";
import Lottie from "lottie-react";
import { Bars3BottomRightIcon, XMarkIcon } from "@heroicons/react/24/solid";
const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <header className=" static md:flex md:justify-between cs-container px-3 md:px-5 z-50 items-center h-20">
      <div className="flex justify-between items-center">
        <Link className="flex items-center gap-1" to="/">
          <Lottie className="w-20" animationData={wifi} loop={true}></Lottie>
          <span className=" uppercase primary-text text-2xl font-extrabold">
            Sm<span className="">Internet</span>
          </span>
        </Link>
        <div className="md:hidden">
          <span onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? (
              <XMarkIcon className="h-8 w-8 mr-5 text-blue-500" />
            ) : (
              <Bars3BottomRightIcon className="h-8 w-8 mr-5 text-blue-500" />
            )}
          </span>
        </div>
      </div>
      <nav
        className={`flex flex-col md:flex-row gap-5 primary-color md:bg-transparent md:static absolute p-8 h-screen md:h-auto left-0 right-0 ${
          isOpen
            ? "top-20 duration-500"
            : "hidden md:flex transform duration-500"
        }`}
      >
        <NavLink
          className={`hover:text-red-400 ${({ isActive }) =>
            isActive && "primary-text"}`}
          to="/"
        >
          Home
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            isActive ? "primary-text" : "hover:primary-text"
          }
          to="/packages"
        >
          Packages
        </NavLink>
        <NavLink
          className={({ isActive }) => isActive && "primary-text"}
          to="/services"
        >
          Services
        </NavLink>
        <NavLink
          className={({ isActive }) => isActive && "primary-text"}
          to="/blogs"
        >
          Blogs
        </NavLink>
        <NavLink
          className={({ isActive }) => isActive && "primary-text"}
          to="/contact"
        >
          Contact us
        </NavLink>
      </nav>
    </header>
  );
};

export default Header;

import React from "react";
import { Link, NavLink } from "react-router-dom";
import wifi from "./Ani/wifi.json";
import Lottie from "lottie-react";
const Header = () => {
  return (
    <header className="flex justify-between cs-container px-3 md:px-5 items-center h-20 text-white">
      <Link className="flex items-center gap-1" to="/">
        <Lottie className="w-20" animationData={wifi} loop={true}></Lottie>
        <span className=" uppercase primary-text text-2xl font-extrabold">
          Sm<span className="text-white">Internet</span>
        </span>
      </Link>
      <nav className="flex gap-5">
        <NavLink
          className={({ isActive }) => isActive && "primary-text"}
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

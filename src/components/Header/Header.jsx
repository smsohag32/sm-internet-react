import React from "react";
import { Link, NavLink } from "react-router-dom";
import wifi from "./Ani/wifi.json";
import Lottie from "lottie-react";
const Header = () => {
  return (
    <header className="flex justify-between cs-container px-3 md:px-5 items-center h-20">
      <Link className="flex items-center gap-1" to="/">
        <Lottie className="w-20" animationData={wifi} loop={true}></Lottie>
        <span className="italic uppercase text-red-400">sm internet</span>
      </Link>
      <nav className="flex gap-5">
        <NavLink className="" to="/">
          Home
        </NavLink>
        <NavLink to="/packages">Packages</NavLink>
        <NavLink to="/services">Services</NavLink>
        <NavLink to="/blogs">Blogs</NavLink>
        <NavLink to="/contact">Contact us</NavLink>
      </nav>
    </header>
  );
};

export default Header;

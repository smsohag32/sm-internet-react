import React from "react";
import { Link, NavLink } from "react-router-dom";
import { WifiIcon } from "@heroicons/react/24/solid";

const Header = () => {
  return (
    <header className="flex justify-between cs-container px-3 md:px-5 items-center h-20">
      <Link className="flex gap-1" to="/">
        <WifiIcon className="h-6 w-6 text-red-500" />
        <span className="italic uppercase">sm internet</span>
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

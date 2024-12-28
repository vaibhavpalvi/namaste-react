import React from "react";
import { LOGO_URL } from "./utils/constants";
import { Link } from "react-router-dom";

export default NavBar = () => {
  return (
    <div className="flex justify-between bg-pink-200">
      <div className="w-20">
        <img src={LOGO_URL} alt="logo" />
      </div>
      <ul className="flex items-center">
        <li className="px-10">
          <Link to="/">Home</Link>
        </li>
        <li className="px-10">
          <Link to="/about-us">About Us</Link>
        </li>
        <li className="px-10">
          <Link to="/contact-us">Contact</Link>
        </li>
        <li className="px-10">
          <Link to="/home">Cart</Link>
        </li>
      </ul>
    </div>
  );
};

import React, { useContext, useState } from "react";
import { LOGO_URL } from "./utils/constants";
import { Link } from "react-router-dom";
import UserContext from "./utils/UserContext";
import { useSelector } from "react-redux";

export default NavBar = () => {
  const contextData = useContext(UserContext);

  const cartItems = useSelector((store) => store.cart.items);
  const [isLogin, seIsLogin] = useState(true);

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
          <Link to="/cart">Cart - ({cartItems.length} items)</Link>
        </li>
        <li className="px-10">{contextData?.userName}</li>
        <li className="px-10">
          <button
            onClick={() => {
              seIsLogin(!isLogin);
            }}
          >
            {isLogin ? "Login" : "Logout"}
          </button>
        </li>
      </ul>
    </div>
  );
};

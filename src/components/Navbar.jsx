import React from "react";
import { LOGO_URL } from "./utils/constants";

export default NavBar = () => {
  return (
    <div className="nav-bar">
      <div className="logo">
        <img src={LOGO_URL} alt="logo" />
      </div>
      <div className="list-container">
        <div className="list">
          <button className="list-items">Home</button>
          <button className="list-items">About Us</button>
          <button className="list-items">Contact</button>
          <button className="list-items">Cart</button>
        </div>
      </div>
    </div>
  );
};

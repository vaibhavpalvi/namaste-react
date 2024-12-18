import React from "react";
import { FOOTER_URL } from "./utils/constants";

export default Footer = () => {
  return (
    <div className="footer-container">
      <div className="footer">
        <div className="logo-trademark">
          <div className="footer-logo">
            <span className="footer-span">
              <img
                className="footer-img"
                alt="footer.img"
                src={FOOTER_URL}
              ></img>
            </span>
          </div>
          <div className="trademark-logo">@ 2024 Swiggy Limited</div>
        </div>
        <div className="company">
          <ul className="footer-list">
            <li className="footer-list-heading">
              <h3>Company</h3>
            </li>
            <li className="footer-list-items">About Us</li>
            <li className="footer-list-items">Careers</li>
            <li className="footer-list-items">Team</li>
          </ul>
        </div>
        <div className="contact-us">
          <ul className="footer-list">
            <li className="footer-list-heading">
              <h3>Contact Us</h3>
            </li>
            <li className="footer-list-items">Help & Support</li>
            <li className="footer-list-items">Partner with Us</li>
            <li className="footer-list-items">Ride with Us</li>
          </ul>
        </div>
        <div className="contact-us">
          <ul className="footer-list">
            <li className="footer-list-heading">
              <h3>Available In</h3>
            </li>
            <li className="footer-list-items">Banglore</li>
            <li className="footer-list-items">Gurgon</li>
            <li className="footer-list-items">Hydrabad</li>
            <li className="footer-list-items">Delhi</li>
            <li className="footer-list-items">Mumbai</li>
            <li className="footer-list-items">Pune</li>
          </ul>
        </div>
        <div className="contact-us">
          <ul className="footer-list">
            <li className="footer-list-heading">
              <h3>Legal</h3>
            </li>
            <li className="footer-list-items">Terms & Conditions</li>
            <li className="footer-list-items">Cookie Policy</li>
            <li className="footer-list-items">Investor Relations</li>
          </ul>
        </div>
        <div className="contact-us">
          <ul className="footer-list">
            <li className="footer-list-heading">
              <h3>Life at Swiggy</h3>
            </li>
            <li className="footer-list-items">Explore with Swiggy</li>
            <li className="footer-list-items">Swiggy News</li>
            <li className="footer-list-items">Snackables</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

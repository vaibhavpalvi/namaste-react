import React from "react";
import { FOOTER_URL } from "./utils/constants";

export default Footer = () => {
  return (
    <div className="mt-12 bg-gray-400">
      <div className="flex flex-wrap justify-around">
        <div>
          <div>
            <span>
              <img
                className="w-[100px] h-[100px] object-cover mt-4"
                alt="footer.img"
                src={FOOTER_URL}
              ></img>
            </span>
          </div>
          <div>@ 2024 Swiggy Limited</div>
        </div>
        <div>
          <ul>
            <li className="p-4">
              <h3 className="font-bold">Company</h3>
            </li>
            <li className="p-4">About Us</li>
            <li className="p-4">Careers</li>
            <li className="p-4">Team</li>
          </ul>
        </div>
        <div>
          <ul>
            <li className="p-4">
              <h3 className="font-bold">Contact Us</h3>
            </li>
            <li className="p-4">Help & Support</li>
            <li className="p-4">Partner with Us</li>
            <li className="p-4">Ride with Us</li>
          </ul>
        </div>
        <div>
          <ul>
            <li className="p-4">
              <h3 className="font-bold">Available In</h3>
            </li>
            <li className="p-4">Banglore</li>
            <li className="p-4">Gurgon</li>
            <li className="p-4">Hydrabad</li>
            <li className="p-4">Delhi</li>
            <li className="p-4">Mumbai</li>
            <li className="p-4">Pune</li>
          </ul>
        </div>
        <div>
          <ul>
            <li className="p-4">
              <h3 className="font-bold">Legal</h3>
            </li>
            <li className="p-4">Terms & Conditions</li>
            <li className="p-4">Cookie Policy</li>
            <li className="p-4">Investor Relations</li>
          </ul>
        </div>
        <div>
          <ul>
            <li className="p-4">
              <h3 className="font-bold">Life at Swiggy</h3>
            </li>
            <li className="p-4">Explore with Swiggy</li>
            <li className="p-4">Swiggy News</li>
            <li className="p-4">Snackables</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

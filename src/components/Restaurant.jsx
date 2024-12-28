import React from "react";
import { CLOUDINARY_IMAGE_BASE_URL } from "./utils/constants";

export default Restaurant = (props) => {
  return (
    <div className="p-5 w-[300px] text-center cursor-pointer">
      <img
        alt="card"
        className="w-full h-[200px] object-cover"
        src={`${CLOUDINARY_IMAGE_BASE_URL}${props.image}`}
      />
      <h4 className="font-bold">Name : {props.name}</h4>
      <h4>Cuisines : {props.cuisines}</h4>
      <h4>Ratings : {props.rating}</h4>
      <h4>Cost : {props.cost}</h4>
    </div>
  );
};

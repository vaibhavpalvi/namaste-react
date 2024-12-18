import React from "react";
import { CLOUDINARY_IMAGE_BASE_URL } from "./utils/constants";

export default Restaurant = (props) => {
  return (
    <div className="cards">
      <img
        alt="card"
        className="cards-img"
        src={`${CLOUDINARY_IMAGE_BASE_URL}${props.image}`}
      />
      <h4>Name : {props.name}</h4>
      <h4>Cuisines : {props.cuisines}</h4>
      <h4>Ratings : {props.rating}</h4>
      <h4>Cost : {props.cost}</h4>
    </div>
  );
};

import React from "react";
import { CLOUDINARY_IMAGE_BASE_URL } from "./utils/constants";

export default Restaurant = (props) => {
  const { cloudinaryImageId, name, cuisines, avgRatingString, costForTwo } =
    props.resData.info;
  return (
    <div className="p-5 w-[300px] text-center cursor-pointer bg-gray-300 rounded-md" data-testid="resCard">
      <img
        alt="card"
        className="w-full h-[200px] object-cover rounded-lg"
        src={`${CLOUDINARY_IMAGE_BASE_URL}${cloudinaryImageId}`}
      />
      <h4 className="font-bold">Name : {name}</h4>
      <h4>Cuisines : {cuisines}</h4>
      <h4>Ratings : {avgRatingString}</h4>
      <h4>Cost : {costForTwo}</h4>
    </div>
  );
};

export const restaurantWithPromotedLabel = (Restaurant) => {
  return (props) => {
    const { header, subHeader } =
      props?.resData?.info?.aggregatedDiscountInfoV3;

    return (
      <div>
        <label className="absolute bg-black text-white rounded-md p-2">
          {header + " " + subHeader}
        </label>
        <Restaurant {...props} />
      </div>
    );
  };
};

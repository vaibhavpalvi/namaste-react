import React from "react";
import { useParams } from "react-router-dom";
import Skimmer from "./Skimmer";
import useMenuData from "./utils/useMenuData";

export default RestaurantMenu = () => {
  const { resId } = useParams();

  const { menuData, recommendedMenuItems, isLoading } = useMenuData(resId);

  if (
    isLoading ||
    menuData === null ||
    menuData === undefined ||
    recommendedMenuItems === null ||
    recommendedMenuItems === undefined
  ) {
    return <Skimmer />;
  }

  return (
    <div>
      <h4>{menuData?.info?.name}</h4>
      <p>
        {menuData?.info?.avgRatingString} {"\u2605"} (
        {menuData?.info?.totalRatings}) - {menuData?.info?.costForTwoMessage}
      </p>
      <h4>Recommended Items</h4>
      {recommendedMenuItems?.map((items) => {
        return (
          <ul key={items?.card?.info?.id}>
            <li>{items?.card?.info?.name}</li>
            <li>{items?.card?.info?.price / 100} .rs</li>
          </ul>
        );
      })}
    </div>
  );
};

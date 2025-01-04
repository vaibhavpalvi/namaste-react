import React, { useState } from "react";
import { useParams } from "react-router-dom";
import Skimmer from "./Skimmer";
import useMenuData from "./utils/useMenuData";
import RestaurantCategory from "./RestaurantCategory";

export default RestaurantMenu = () => {
  const { resId } = useParams();

  const [itemIndex, setItemIndex] = useState(null);

  const { menuData, itemCategoryCards, isLoading } = useMenuData(resId);

  const handleItemIndex = (index)=>{
    if(index === itemIndex){
      setItemIndex(null);
    }else{
      setItemIndex(index);
    }
  }

  if (
    isLoading ||
    menuData === null ||
    menuData === undefined ||
    itemCategoryCards === null ||
    itemCategoryCards === undefined
  ) {
    return <Skimmer />;
  }

  return (
    <div className="text-center">
      <h1 className="font-bold my-6 text-2xl">{menuData?.info?.name}</h1>
      <p>
        {menuData?.info?.cuisines.join(", ")} -
        {menuData?.info?.costForTwoMessage}
      </p>
      {itemCategoryCards.map((category, index) => (
        <RestaurantCategory
          key={category?.card?.card?.title}
          data={category?.card?.card}
          isVisible={index === itemIndex ? true : false}
          setItemIndex={() => handleItemIndex(index)}
          index={index}
        />
      ))}
    </div>
  );
};

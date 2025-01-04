import React from "react";
import ItemList from "./ItemList";

const RestaurantCategory = ({ data, isVisible, setItemIndex, index }) => {
  const handleIsVisible = () => {
    setItemIndex(index);
  };

  return (
    <div className="mb-10">
      <div className="w-6/12 mx-auto my-4 bg-gray-100 shadow-lg p-4 cursor-pointer">
        <div className="flex justify-between" onClick={handleIsVisible}>
          <span className="font-bold text-lg">
            {data?.title} ({data?.itemCards?.length})
          </span>
          <span>↓</span>
        </div>
        {isVisible && <ItemList items={data?.itemCards} />}
      </div>
    </div>
  );
};

export default RestaurantCategory;

import React from "react";
import { CLOUDINARY_IMAGE_BASE_URL } from "./utils/constants";
import { useDispatch } from "react-redux";
import { addItems } from "./store/cartSlice";

const ItemList = ({ items }) => {
  const dispatch = useDispatch();

  const handleAddItems = (item) => {
    console.log("add items called");
    dispatch(addItems(item));
  };

  return (
    <div>
      {items.map((item) => (
        <div
          key={item?.card?.info?.id}
          className="p-2 m-2 border-gray-200 border-b-2 text-left flex"
          data-testid="itemData"
        >
          <div className="w-9/12">
            <div className="py-2">
              <span>{item?.card?.info?.name}</span>
              <span>
                - ₹
                {item?.card?.info?.price
                  ? item?.card?.info?.price / 100
                  : item?.card?.info?.defaultPrice / 100}
              </span>
            </div>
            <span className="text-xs">{item?.card?.info?.description}</span>
          </div>
          <div className="w-3/12 flex">
            <img
              src={CLOUDINARY_IMAGE_BASE_URL + item?.card?.info?.imageId}
              alt="item"
              className="w-40"
            />
            <button
              className="p-2 bg-black text-white"
              onClick={() => handleAddItems(item)}
              data-testid="addItemBtn"
            >
              Add +
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ItemList;

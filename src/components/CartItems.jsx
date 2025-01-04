import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { CLOUDINARY_IMAGE_BASE_URL } from "./utils/constants";
import { clearCart, removeItems } from "./store/cartSlice";

const CartItems = () => {
  const items = useSelector((store) => store.cart.items);

  const dispatch = useDispatch();

  const handelRemoveItems = (item, index) => {
    console.log("remove items called");
    dispatch(removeItems([item, index]));
  };

  const handleClearCart = () => {
    console.log("called clear called");
    dispatch(clearCart());
  };

  return items.length === 0 ? (
    <div className="text-center m-10 font-bold text-2xl" data-testid="clearCartMessage">
      Cart is empty, add some items in cart
    </div>
  ) : (
    <div>
      <h1 className="text-center mt-10 mb-5 text-2xl font-bold">Cart</h1>
      <div className="flex justify-center">
        <button
          className="p-2 bg-red-400 rounded-lg mb-5 text-xl"
          onClick={handleClearCart}
        >
          Clear cart
        </button>
      </div>

      {items.map((item, index) => (
        <div
          key={index}
          className="p-2 border-gray-200 border-b-2 text-left flex w-6/12 m-auto"
          data-testid="cartItem"
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
              onClick={() => handelRemoveItems(item, index)}
              data-testid="removeItemBtn"
            >
              Remove -
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CartItems;

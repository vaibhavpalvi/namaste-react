import React, { act } from "react";
import "@testing-library/jest-dom";
import MOCK_DATA from "../mocks/resMenuMockData.json";
import { fireEvent, render, screen } from "@testing-library/react";
import RestaurantMenu from "../RestaurantMenu";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import appStore from "../store/appStore";
import Navbar from "../Navbar";
import { clearCart } from "../store/cartSlice";
import CartItems from "../CartItems";

global.fetch = jest.fn(() => {
  return Promise.resolve({
    json: () => {
      return Promise.resolve(MOCK_DATA);
    },
  });
});

beforeEach(() => {
  appStore.dispatch(clearCart());
});

it("should render restaurant menu data", async () => {
  await act(async () => {
    render(
      <BrowserRouter>
        <Provider store={appStore}>
          <RestaurantMenu />
        </Provider>
      </BrowserRouter>
    );
  });

  const accordionHeader = screen.getByText("Fried Rice (7)");

  fireEvent.click(accordionHeader);

  expect(screen.getAllByTestId("itemData").length).toBe(7);
});

it("should add the item in the cart", async () => {
  await act(async () => {
    render(
      <BrowserRouter>
        <Provider store={appStore}>
          <Navbar />
          <RestaurantMenu />
        </Provider>
      </BrowserRouter>
    );
  });

  const accordionHeader = screen.getByText("Fried Rice (7)");

  fireEvent.click(accordionHeader);

  expect(screen.getAllByTestId("itemData").length).toBe(7);

  const itemInCartBeforeAdd = screen.getByText("Cart - (0 items)");

  expect(itemInCartBeforeAdd).toBeInTheDocument();

  const addItemBtn = screen.getAllByTestId("addItemBtn");

  expect(addItemBtn.length).toBe(7);

  fireEvent.click(addItemBtn[0]);

  const itemInCartAfterAdd = screen.getByText("Cart - (1 items)");

  expect(itemInCartAfterAdd).toBeInTheDocument();
});

it("should remove the item in the cart", async () => {
  await act(async () => {
    render(
      <BrowserRouter>
        <Provider store={appStore}>
          <Navbar />
          <RestaurantMenu />
          <CartItems />
        </Provider>
      </BrowserRouter>
    );
  });

  const accordionHeader = screen.getByText("Fried Rice (7)");

  fireEvent.click(accordionHeader);

  expect(screen.getAllByTestId("itemData").length).toBe(7);

  const itemInCartBeforeAdd = screen.getByText("Cart - (0 items)");

  expect(itemInCartBeforeAdd).toBeInTheDocument();

  const addItemBtn = screen.getAllByTestId("addItemBtn");

  expect(addItemBtn.length).toBe(7);

  fireEvent.click(addItemBtn[0]);

  const itemInCartAfterAdd = screen.getByText("Cart - (1 items)");

  expect(itemInCartAfterAdd).toBeInTheDocument();

  const cartItemsBeforeRemoving = screen.getAllByTestId("cartItem");

  expect(cartItemsBeforeRemoving.length).toBe(1);

  const removeItemBtn = screen.getAllByTestId("removeItemBtn");

  expect(removeItemBtn.length).toBe(cartItemsBeforeRemoving.length);

  fireEvent.click(removeItemBtn[0]);

  const itemCartAfterRemovingItem = screen.getByText("Cart - (0 items)");

  expect(itemCartAfterRemovingItem).toBeInTheDocument();
});

it("should clear the cart", async () => {
  await act(async () => {
    render(
      <BrowserRouter>
        <Provider store={appStore}>
          <Navbar />
          <RestaurantMenu />
          <CartItems />
        </Provider>
      </BrowserRouter>
    );
  });

  const accordionHeader = screen.getByText("Fried Rice (7)");

  fireEvent.click(accordionHeader);

  expect(screen.getAllByTestId("itemData").length).toBe(7);

  const itemInCartBeforeAdd = screen.getByText("Cart - (0 items)");

  expect(itemInCartBeforeAdd).toBeInTheDocument();

  const addItemBtn = screen.getAllByTestId("addItemBtn");

  expect(addItemBtn.length).toBe(7);

  addItemBtn.forEach((addBt) => fireEvent.click(addBt));

  const itemInCartAfterAdd = screen.getByText("Cart - (7 items)");

  expect(itemInCartAfterAdd).toBeInTheDocument();

  const clearCartBtn = screen.getByRole("button", { name: "Clear cart" });

  expect(clearCartBtn).toBeInTheDocument();

  fireEvent.click(clearCartBtn);

  const itemInCartAfterClearCart = screen.getByText("Cart - (0 items)");

  expect(itemInCartAfterClearCart).toBeInTheDocument();

  const clearCartMessage = screen.getByText(
    "Cart is empty, add some items in cart"
  );

  expect(clearCartMessage).toBeInTheDocument();
});

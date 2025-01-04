import { fireEvent, render, screen } from "@testing-library/react";
import Navbar from "../Navbar";
import React from "react";
import { Provider } from "react-redux";
import appStore from "../.././components/store/appStore";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";

it("Should render header component with Login button", () => {
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Navbar />
      </Provider>
    </BrowserRouter>
  );

  const loginButton = screen.getByRole("button", { name: "Login" });

  expect(loginButton).toBeInTheDocument();
});

it("Should change Login button to Logout on click", () => {
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Navbar />
      </Provider>
    </BrowserRouter>
  );

  const loginButton = screen.getByRole("button", { name: "Login" });

  fireEvent.click(loginButton);

  const logoutButton = screen.getByRole("button", { name: "Logout" });

  expect(logoutButton).toBeInTheDocument();
});

it("Should contain 0 cart item initially", () => {
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Navbar />
      </Provider>
    </BrowserRouter>
  );

  const cartItems = screen.getByText("Cart - (0 items)");

  expect(cartItems).toBeInTheDocument();
});

it("Should contain 6 navbar items", () => {
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Navbar />
      </Provider>
    </BrowserRouter>
  );

  const navbarItems = screen.getAllByRole("listitem");

  expect(navbarItems.length).toBe(6);
});

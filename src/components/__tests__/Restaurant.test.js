import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import Restaurant, { restaurantWithPromotedLabel } from "../Restaurant";
import MOCK_DATA from "../mocks/resMockData.json";
import React from "react";

it("should render the Restaurant with data", () => {
  render(<Restaurant resData={MOCK_DATA} />);

  const name = screen.getByRole("heading", { name: "Name : Pizza Hut" });

  expect(name).toBeInTheDocument();
});

it("should render the Restaurant with promoted label data", () => {
  const RestaurantWithPromotedLabel = restaurantWithPromotedLabel(Restaurant);
  render(<RestaurantWithPromotedLabel resData={MOCK_DATA} />);

  const label = screen.getByText("₹300 OFF ABOVE ₹1699");

  expect(label).toBeInTheDocument();
});

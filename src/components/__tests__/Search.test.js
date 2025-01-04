import { fireEvent, render, screen } from "@testing-library/react";
import Body from "../Body";
import React, { act } from "react";
import { BrowserRouter } from "react-router-dom";
import MOCK_DATA from "../mocks/mockResListData.json";
import Footer from "../Footer";
import "@testing-library/jest-dom";

global.fetch = jest.fn(() => {
  return Promise.resolve({
    json: () => {
      return Promise.resolve(MOCK_DATA);
    },
  });
});

it("should render body and return res card with search button", async () => {
  await act(async () =>
    render(
      <BrowserRouter>
        <Body />
      </BrowserRouter>
    )
  );

  const searchBtn = screen.getByTestId("searchBtn");

  expect(searchBtn).toBeInTheDocument();
});

it("should render body and return res card with search button with search text", async () => {
  await act(async () =>
    render(
      <BrowserRouter>
        <Body />
        <Footer />
      </BrowserRouter>
    )
  );

  const resDataBeforeSearch = screen.getAllByTestId("resCard");

  expect(resDataBeforeSearch.length).toBe(8);

  const searchInput = screen.getByTestId("searchInputText");

  fireEvent.change(searchInput, { target: { value: "pizza" } });

  const searchBtn = screen.getByTestId("searchBtn");

  fireEvent.click(searchBtn);

  const resDataAfterSearch = screen.getAllByTestId("resCard");

  expect(resDataAfterSearch.length).toBe(1);
});

it("should return top rated restaurants on click of top rated restaurant button", async () => {
  await act(async () =>
    render(
      <BrowserRouter>
        <Body />
      </BrowserRouter>
    )
  );

  const resDataBeforeFilter = screen.getAllByTestId("resCard");

  expect(resDataBeforeFilter.length).toBe(8);

  const topRatedResBtn = screen.getByTestId("topRatedRestaurantBtn");

  expect(topRatedResBtn).toBeInTheDocument();

  fireEvent.click(topRatedResBtn);

  const resDataAfterFilter = screen.getAllByTestId("resCard");

  expect(resDataAfterFilter.length).toBe(6);
});

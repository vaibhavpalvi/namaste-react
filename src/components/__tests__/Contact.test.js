import "@testing-library/jest-dom";
import { createEvent, fireEvent, render, screen } from "@testing-library/react";
import { Contact } from "../Contact";
import React from "react";

describe("test cases for Contact component", () => {
  it("should load heading in contact component", () => {
    render(<Contact />);

    const heading = screen.getByRole("heading");

    expect(heading).toBeInTheDocument();
  });

  it("should load button in contact component", () => {
    render(<Contact />);

    const button = screen.getByRole("button");

    expect(button).toBeInTheDocument();
  });

  it("should load input box in contact component", () => {
    render(<Contact />);

    const inputBox = screen.getAllByRole("textbox");

    expect(inputBox.length).toBe(2);
  });

  it("should prevent default when calling submit button", () => {
    render(<Contact />);

    const submitBtn = screen.getByRole("button", { name: "Submit" });

    const mockEvent = createEvent.click(submitBtn);
    fireEvent(submitBtn, mockEvent);

    expect(mockEvent.defaultPrevented).toBeTruthy();
  });
});

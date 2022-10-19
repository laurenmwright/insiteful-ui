import React, {useState} from "react";
import { render, screen } from "@testing-library/react";
import { DateRange } from "../components";
import userEvent from "@testing-library/user-event";


test('correctly renders label', () => {
    const hello = jest.fn();
    render(<DateRange startLabel = {"Please choose a start date:"} endLabel = {"Please choose an end date:"} startDate = {"2020-10-10"} endDate = {"2020-10-30"} setStartDate = {hello} setEndDate = {hello}></DateRange>);
    const dateRangeElement = screen.getByText("Please choose a start date:")
    expect(dateRangeElement).toBeInTheDocument();
});


test("correctly renders both date pickers", () => { 
  const hello = jest.fn();
  render(<DateRange startLabel = {"Please choose a start date:"} endLabel = {"Please choose an end date:"} startDate = "2020-10-10" endDate = "2020-10-30" setStartDate = {hello} setEndDate = {hello}></DateRange>);
  const DateRangeElement = screen.getByTestId("start-date");
  const DateRangeElement2 = screen.getByTestId("end-date");
  expect(DateRangeElement).toHaveValue("2020-10-10");
  expect(DateRangeElement2).toHaveValue("2020-10-30"); 
});


test("allows you to set values for both date pickers", () => {
  const hello = jest.fn();
  const {getByTestId} = render(<DateRange startLabel = {"Please choose a start date:"} endLabel = {"Please choose an end date:"} startDate = {"2020-10-10"} endDate = {"2020-10-30"} setStartDate = {hello} setEndDate = {hello}></DateRange>);
  const DateRangeElement = getByTestId("start-date");
  const DateRangeElement2 = getByTestId("end-date");
  userEvent.type(DateRangeElement, "10"); 
  userEvent.type(DateRangeElement2, "12"); 
  expect(hello).toHaveBeenCalled;
  expect(hello).toHaveBeenCalled;
});

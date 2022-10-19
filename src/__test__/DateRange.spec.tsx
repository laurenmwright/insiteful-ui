import React, {useState} from "react";
import { render, screen } from "@testing-library/react";
import { DateRange } from "../components";
import userEvent from "@testing-library/user-event";


const [startDate, setStartDate] = useState("2020-10-10");
const [endDate, setEndDate] = useState("2020-10-30");


test('correctly renders label', () => {
    render(<DateRange startLabel = {"Please choose a start date:"} endLabel = {"Please choose an end date:"} startDate = {startDate} endDate = {endDate} setStartDate = {setStartDate} setEndDate = {setEndDate}></DateRange>);
    const dateRangeElement = screen.getByLabelText("Please choose a start date:")
    expect(dateRangeElement).toBeInTheDocument();
});

test("correctly renders both date pickers", () => {
  render(<DateRange startLabel = {"Please choose a start date:"} endLabel = {"Please choose an end date:"} startDate = {startDate} endDate = {endDate} setStartDate = {setStartDate} setEndDate = {setEndDate}></DateRange>);
  const DateRangeElement = screen.getByTestId("start-date");
  const DateRangeElement2 = screen.getByTestId("end-date");
  expect(DateRangeElement).toHaveValue("2020-10-10");
  expect(DateRangeElement2).toHaveValue("2020-10-30");
});

test("allows you to set values for both date pickers", () => {
  const {getByTestId} = render(<DateRange startLabel = {"Please choose a start date:"} endLabel = {"Please choose an end date:"} startDate = {startDate} endDate = {endDate} setStartDate = {setStartDate} setEndDate = {setEndDate}></DateRange>);
  const DateRangeElement = getByTestId("start-date");
  const DateRangeElement2 = getByTestId("end-date");
  userEvent.type(DateRangeElement, "10"); 
  userEvent.type(DateRangeElement2, "12"); 
  expect(setStartDate).toHaveBeenCalled;
  expect(setEndDate).toHaveBeenCalled;
});

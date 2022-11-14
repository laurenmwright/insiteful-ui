import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import { DateTimePicker } from "../components";
import userEvent from "@testing-library/user-event";

test("renders date time picker", () => {
  const hello = jest.fn();
  render(<DateTimePicker onChange={hello} dateTimeValue="1999-01-30 08:23PM"></DateTimePicker>);
  const DateRangeElement = screen.getByTestId("date-time-picker");
  expect(DateRangeElement).toHaveValue("1999-01-30 8:23PM");
});

test("correctly renders styles", () => {
  const hello = jest.fn();
  const { getByTestId } = render(<DateTimePicker onChange={hello} />);
  const DateRangeElement = getByTestId("date-time-picker");
  expect(DateRangeElement).toHaveStyle({ width: "15rem;" });
}); 

test("on change gets called", async () => {
  const hello = jest.fn();
  const { getByTestId } = render(<DateTimePicker onChange={hello} />);
  const DateTimeElement = getByTestId("date-time-picker");
  await fireEvent.change(DateTimeElement, { target: { value: "2020-05-12" } });
  expect(hello).toHaveBeenCalled();
});

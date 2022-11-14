import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import { DateTimePicker } from "../components";
import userEvent from "@testing-library/user-event";


test("correctly renders styles", () => {
  const hello = jest.fn();
  const { getByTestId } = render(<DateTimePicker onChange={hello} />);
  const DateRangeElement = getByTestId("date-time-picker");
  expect(DateRangeElement).toHaveStyle({ width: "15rem;" });
}); 

test("renders date time picker", () => {
  const hello = jest.fn();
  render(
    <DateTimePicker
      onChange={hello}
      dateTimeValue="2016-01-04T10:34:23.000"
    ></DateTimePicker>
  );
  const DateRangeElement = screen.getByTestId("date-time-picker");
  expect(DateRangeElement).toHaveValue("2016-01-04T10:34:23.000");
});

test("on change gets called", async () => {
  const hello = jest.fn();
  const { getByTestId } = render(<DateTimePicker onChange={hello} />);
  const DateTimeElement = getByTestId("date-time-picker");
  await fireEvent.change(DateTimeElement, {
    target: { value: "2016-01-04T10:34:23.000" },
  });
  expect(hello).toHaveBeenCalled();
});

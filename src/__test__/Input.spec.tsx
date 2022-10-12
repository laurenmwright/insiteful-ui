import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Input } from  "../components";


test("correctly renders input", () => {
  const hello = jest.fn();
  const {getByTestId} = render(<Input type="number" onChange={hello} />);
  expect(getByTestId("input-box")).toBeInTheDocument();
});

test("on change gets called", () => {
  const hello = jest.fn();
  render(<Input type="text" onChange={hello} />);
  const input = screen.getByTestId("input-box");
  userEvent.type(input, "Test Text");
  expect(hello).toHaveBeenCalled;
});

test("number input allows numbers and has correct type", () => {
  const hello = jest.fn();
  render(<Input type="number" onChange={hello} />);
  const input = screen.getByTestId("input-box");
  userEvent.type(input, "text");
  expect(hello).toHaveBeenCalledTimes(0);
  expect(input).toHaveAttribute('type', 'number');
  
});

test("Number input type only allows numbers", () => {
  const hello = jest.fn();
  render(<Input type="number" onChange={hello} />);
  const input = screen.getByTestId("input-box");
  userEvent.type(input, "text");
  expect(hello).toHaveBeenCalledTimes(0);
});

test("test password input numbers", async () => {
  const hello = jest.fn();
  render(<Input type="password" onChange={hello} />);
  const inputElement = screen.getByTestId("input-box");
  expect(inputElement).toHaveAttribute('type', 'password');
});


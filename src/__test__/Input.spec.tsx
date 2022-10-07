import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Input } from  "../components";

//Input Component Tests
//-------------------------------------------------------------

test("correctly renders label", () => {
  const hello = jest.fn();
  render(<Input type="number" onChange={hello} label="label" />);
  const input = screen.getByText(/label/i);
  expect(input).toBeInTheDocument();
});

test("on change gets called", () => {
  const hello = jest.fn();
  render(<Input type="text" onChange={hello} label="label" />);
  const input = screen.getByText(/label/i);
  userEvent.type(input, "Test Text");
  expect(hello).toHaveBeenCalled;
});

test("only allow numbers", () => {
  const hello = jest.fn();
  render(<Input type="number" onChange={hello} label="label" />);
  const input = screen.getByText(/label/i);
  userEvent.type(input, "text");
  expect(hello).toHaveBeenCalledTimes(0);
});

//-------------------------------------------------------------

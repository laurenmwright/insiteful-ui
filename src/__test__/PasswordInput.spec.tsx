import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { PasswordInput } from  "../components";


test("correctly renders PasswordInput", () => {
  const hello = jest.fn();
  const {getByTestId} = render(<PasswordInput onChange={hello} />);
  expect(getByTestId("password-input-box")).toBeInTheDocument();
});

test("correctly renders styling", () => {
  const hello = jest.fn();
  const {getByTestId} = render(<PasswordInput onChange={hello} />);
  expect(getByTestId("password-input-box")).toHaveClass("shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline");
});

test("on change gets called", async () => {
  const hello = jest.fn();
  const {getByTestId} = render(<PasswordInput onChange={hello} />);
  const passwordInput = getByTestId("password-input-box");
  await userEvent.type(passwordInput, "Test Text");
  expect(hello).toHaveBeenCalled();
});

test("accepts a value", async () => {
  const hello = jest.fn();
  const {getByTestId} = render(<PasswordInput onChange={hello} value = "This is a default value"/>);
  const passwordInput = getByTestId("password-input-box");
  expect(passwordInput).toHaveValue("This is a default value");
});

test("accepts a placeholder", async () => {
    const hello = jest.fn();
    render(<PasswordInput onChange={hello} placeholder = "This is a default placeholder"/>);
    const passwordInput = screen.getByPlaceholderText("This is a default placeholder");
    expect(passwordInput).toBeInTheDocument();
});

test("accepts a value", async () => {
    const hello = jest.fn();
    const {getByTestId} = render(<PasswordInput onChange={hello} value = "This is a default value"/>);
    const hideButton = getByTestId("hide-icon");
    expect(getByTestId("eye-off")).toBeInTheDocument();
    fireEvent.click(hideButton);
    expect(getByTestId("eye")).toBeInTheDocument();
  });


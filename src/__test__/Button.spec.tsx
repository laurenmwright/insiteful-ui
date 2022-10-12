import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import { Button } from "../components";

/**
 * Button Component Tests
 * To Do:
 * 1. Test simple
 * 2. Test disabled
 */

test('renders button with correct text', () => {
  render(<Button primary>My Button</Button>);
  const buttonElement = screen.getByText(/My Button/i);
  expect(buttonElement).toBeInTheDocument();
});

test('renders regular button with override color', () => {
  render(<Button primary overrideColor = "#ff0000" >My Button</Button>);
  const buttonElement = screen.getByText(/My Button/i);
  expect(buttonElement).toHaveStyle({backgroundColor:"#ff0000"});
});

test('renders outline button with override color', () => {
  render(<Button outline overrideColor = "red" >My Button</Button>);
  const buttonElement = screen.getByText(/My Button/i);
  expect(buttonElement).toHaveStyle({border: "2px solid red"});
});

test('renders button with simple prop', () => {
  render(<Button simple overrideColor = "#ff0000" >My Button</Button>);
  const buttonElement = screen.getByText(/My Button/i);
  expect(buttonElement).toHaveStyle({color:"#ff0000"});
});

test('renders button with working onclick function', () => {
  const hello = jest.fn();
  const { getByText } = render(
    <Button onClick={hello}> My Button</Button>
  );
  fireEvent.click(getByText(/My Button/i));
  expect(hello).toHaveBeenCalled();
});

test('testing the disabled prop', () => {
  const {getByTestId} = render(<Button disabled type={"button"} />);
  const buttonElement = getByTestId("Button");
  expect(buttonElement).toBeDisabled();
});






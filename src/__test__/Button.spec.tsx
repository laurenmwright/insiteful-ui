import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import Button from '../lib/components/Button/Button';
//import { Subheading, Link } from "../lib/components/Typography/Typography";

test('renders button with correct text', () => {
  render(<Button>My Button</Button>);
  const buttonElement = screen.getByText(/My Button/i);
  expect(buttonElement).toBeInTheDocument();
});

// add test for color 
test('renders button with correct color', () => {
  render(<Button overrideColor = "#ff0000" >My Button</Button>);
  const buttonElement = screen.getByText(/My Button/i);
  expect(buttonElement).toHaveStyle({backgroundColor:"#ff0000"});
});


test('renders button with correct onclick function', () => {
  const hello = jest.fn();
  const { getByText } = render(
    <Button onClick={hello}> My Button</Button>
  );
  fireEvent.click(getByText(/My Button/i));
  expect(hello).toHaveBeenCalled();
});

import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import {Heading1, Caption1, Caption2} from '../lib/components/Typography/Typography';

// Heading1
// test for children(text)
test('renders button with correct text', () => {
  render(<Heading1>Heading1</Heading1>);
  const buttonElement = screen.getByText(/Heading1/i);
  expect(buttonElement).toBeInTheDocument();
});

//Heading1
// test for override-color 
// test('renders button with correct color', () => {
//   render(<Button overrideColor = "#ff0000" >My Button</Button>);
//   const buttonElement = screen.getByText(/My Button/i);
//   expect(buttonElement).toHaveStyle({backgroundColor:"#ff0000"});
// });

//Heading1
// test for override-font
// test('renders button with correct font', () => {
//   const hello = jest.fn();
//   const { getByText } = render(
//     <Button onClick={hello}> My Button</Button>
//   );
//   fireEvent.click(getByText(/My Button/i));
//   expect(hello).toHaveBeenCalled();
// });

//Caption1
//test for children(text)
test("renders caption with correct text", () => {
  render(<Caption1>Caption1</Caption1>);
  const captionElement = screen.getByText(/Caption1/i);
  expect(captionElement).toBeInTheDocument();
});

//Caption1
// test for override-color 
test('renders caption with correct color', () => {
  render(<Caption1 overrideColor = "red" >Caption1</Caption1>);
  const captionElement = screen.getByText(/Caption1/i);
  expect(captionElement).toHaveStyle({color:"red"});
});

//Caption1
// test for override-font
test("renders caption with correct color", () => {
  render(<Caption1 overrideFont="Arial">Caption1</Caption1>);
  const captionElement = screen.getByText(/Caption1/i);
  expect(captionElement).toHaveStyle({ fontFamily: "Arial" });
});

//Caption2
//test for children(text)
test("renders caption with correct text", () => {
  render(<Caption2>Caption2</Caption2>);
  const caption2Element = screen.getByText(/Caption2/i);
  expect(caption2Element).toBeInTheDocument();
});

//Caption2
// test for override-color 
test('renders caption with correct color', () => {
  render(<Caption2 overrideColor = "red" >Caption2</Caption2>);
  const caption2Element = screen.getByText(/Caption2/i);
  expect(caption2Element).toHaveStyle({color:"red"});
});

//Caption2
// test for override-font
test("renders caption with correct color", () => {
  render(<Caption2 overrideFont="Arial">Caption2</Caption2>);
  const caption2Element = screen.getByText(/Caption2/i);
  expect(caption2Element).toHaveStyle({ fontFamily: "Arial" });
});



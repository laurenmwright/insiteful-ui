import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import {Heading1} from '../lib/components/Typography/Typography';

//Heading1
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

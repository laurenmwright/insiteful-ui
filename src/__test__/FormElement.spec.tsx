import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import { Button } from "../lib";
import { FormElement } from '../lib/components/FormElement/FormElement';

test('renders button with correct text', () => {
    render(<FormElement><Button>My Button</Button></FormElement>);
    render(<FormElement>My Form</FormElement>);
    const buttonElement = screen.getByText(/My Button/i);
    const formElement = screen.getByText(/My Form/i)
    expect(buttonElement).toBeInTheDocument();
    expect(formElement).toBeInTheDocument();
  });

//   //Renders Lable with Correct Text
// test ('render lable with correct Text', () => {
//     render(<FormElement>My Form</FormElement>);
//     const formElement = screen.getByText(/My Form/i)
//     expect(formElement).toBeInTheDocument();
// });

  //Child Component
  test('renders button with working onclick function', () => {
    const hello = jest.fn();
    const { getByText } = render(
      <FormElement> <Button onClick={hello}>My Form</Button> </FormElement>
    );
    fireEvent.click(getByText(/My Form/i));
    expect(hello).toHaveBeenCalled();
  });
import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import { Button } from "../lib";
import { FormElement } from '../lib/components/FormElement/FormElement';

test('renders button with correct text', () => {
    render(<FormElement><Button>My Button</Button></FormElement>);
    const buttonElement = screen.getByText(/My Button/i);
    expect(buttonElement).toBeInTheDocument();
  });

  //Renders Lable with Correct Text
test ('render lable with correct Text', () => {
    render(<FormElement>My Form</FormElement>);
    const formElement = screen.getByText(/My Form/i)
    expect(formElement).toBeInTheDocument();
});

  //Child Component
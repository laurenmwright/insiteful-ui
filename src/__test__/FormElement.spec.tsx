import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import { Button } from "../components";
import { FormElement } from "../components";

test('renders button inside of a form element', () => {
  const {getByTestId} = render(<FormElement label="Label"><Button>My Button</Button></FormElement>);
  const formElement = getByTestId("form-element");
  const labelElement = screen.getByText(/Label/i);
  const buttonElement = screen.getByText(/My Button/i);
  expect(formElement).toBeInTheDocument();
  expect(labelElement).toBeInTheDocument();
  expect(buttonElement).toBeInTheDocument();
});

test('renders button inside form element with override color', () => {
  render(<FormElement><Button primary overrideColor = "#ff0000" >My Button</Button></FormElement>);
  const buttonElement = screen.getByText(/My Button/i);
  expect(buttonElement).toHaveStyle({backgroundColor:"#ff0000"});
});

test('renders button inside form element with working onclick function', () => {
  const hello = jest.fn();
  const { getByText } = render(
    <FormElement><Button onClick={hello}>My Form</Button> </FormElement>
  );
  fireEvent.click(getByText(/My Form/i));
  expect(hello).toHaveBeenCalled();
});
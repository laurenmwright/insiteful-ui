import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import { ConfirmationBox } from "../components";

test('renders popover button text', () => {
    const {getByTestId} = render(<ConfirmationBox popButton= "Open Confirmation Box" panelText='Are you sure??'></ConfirmationBox>);
    const dropdownElement = getByTestId("popbutton");
    expect(dropdownElement).toHaveTextContent("Open Confirmation Box");
  });

  test('renders popover when clicked', () => {
    const {getByTestId} = render(<ConfirmationBox popButton= "Open Confirmation Box" panelText= "Are you sure you want to proceed?"></ConfirmationBox>);
    const dropdownElement = getByTestId("popbutton");
    // fails when fireEvent click is removed proving that the panel is rendering properly when clicked. 
    fireEvent.click(dropdownElement);
    const panelTextElement = getByTestId("div")
    expect(panelTextElement).toHaveTextContent("Are you sure you want to proceed?");
  });
  test('calls onConfirm', () => {
    const hello = jest.fn();
    const {getByTestId} = render(<ConfirmationBox popButton= "Open Confirmation Box" panelText= "Are you sure you want to proceed?" onConfirm={hello}></ConfirmationBox>);
    const dropdownElement = getByTestId("popbutton");
    fireEvent.click(dropdownElement);
    const yesButtonElement = screen.getByText(/Continue/i);
    fireEvent.click(yesButtonElement);
    expect(hello).toHaveBeenCalled();
  });
  test('calls onCancel', () => {
    const hello = jest.fn();
    const {getByTestId} = render(<ConfirmationBox popButton= "Open Confirmation Box" panelText= "Are you sure you want to proceed?" onCancel={hello}></ConfirmationBox>);
    const dropdownElement = getByTestId("popbutton");
    fireEvent.click(dropdownElement);
    const noButtonElement = screen.getByText(/Cancel/i);
    fireEvent.click(noButtonElement);
    expect(hello).toHaveBeenCalled();
  });
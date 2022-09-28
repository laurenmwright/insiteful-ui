import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import { ConfirmationBox } from "../components";

test('renders popover button text', () => {
    const hello = jest.fn();
    const {getByTestId} = render(<ConfirmationBox popButton= "Click Me" assetId= "string" onRemove={hello}></ConfirmationBox>);
    const dropdownElement = getByTestId("popbutton");
    expect(dropdownElement).toHaveTextContent("Click Me");
  });

  test('renders popover when clicked', () => {
    const hello = jest.fn();
    const {getByTestId} = render(<ConfirmationBox popButton= "Click Me" panelText= "Are you sure you want to proceed?" assetId= "string" onRemove={hello}></ConfirmationBox>);
    const dropdownElement = getByTestId("popbutton");
    // fails when fireEvent click is removed proving that the panel is rendering properly when clicked. 
    fireEvent.click(dropdownElement);
    const panelTextElement = getByTestId("div")
    expect(panelTextElement).toHaveTextContent("Are you sure you want to proceed?");
  });
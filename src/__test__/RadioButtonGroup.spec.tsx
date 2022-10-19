import React, {useState} from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import { RadioButtonGroup } from "../components";


test('renders radio button group with correct label text', () => {
    const hello = jest.fn();

    render(<RadioButtonGroup onChange={hello} isSelected={''} data={[{id: "Test 1", value: "Test 1"}]} label={'Label'}></RadioButtonGroup>);

    const radioButtonElement = screen.getByLabelText("Label")

    expect(radioButtonElement).toBeInTheDocument();
});

test('renders radio button group with correct options', () => {
    const hello = jest.fn();

    const radioData = [
        {id: "Test 1", value: "Test 1"},
        {id: "Test 2", value: "Test 2"},
        {id: "Test 3", value: "Test 3"}
    ]; 

    render(<RadioButtonGroup onChange={hello} isSelected={''} data={radioData} label={'Label'}></RadioButtonGroup>);

    const radioButtonElement = screen.getByText("Test 3")

    expect(radioButtonElement).toBeInTheDocument();
});

test('renders radio button group with working onchange function', () => {
    const hello = jest.fn();

    const radioData = [
        {id: "Test 1", value: "Test 1"},
        {id: "Test 2", value: "Test 2"},
        {id: "Test 3", value: "Test 3"}
    ];

    const { getByText } = render(
      <RadioButtonGroup onChange={hello} isSelected={''} data={radioData} label={'Label'}></RadioButtonGroup>
    );

    fireEvent.click(getByText(/Test 3/i));

    expect(hello).toHaveBeenCalled();
});

test('renders radio button group with correct selected option', () => {
    const hello = jest.fn();

    const radioData = [
        {id: "Test 1", value: "Test 1"},
        {id: "Test 2", value: "Test 2"},
        {id: "Test 3", value: "Test 3"}
    ];

    const { getByTestId } = render(
      <RadioButtonGroup onChange={hello} isSelected={"Test 1"} data={radioData} label={'Label'}></RadioButtonGroup>
    );
    
    const circle = getByTestId("Test 1");
    
    expect(circle).toBeInTheDocument();
});
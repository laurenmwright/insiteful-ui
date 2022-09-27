import React from 'react';
import { render, screen } from '@testing-library/react';
import { Accordion } from "../lib";

//Accordion Component Tests
//-------------------------------------------------------------

test('renders accordion with correct data', () => {
    const hello = jest.fn();

    const accordionData = [
        {id: "Test 1", value: "Value 1"},
        {id: "Test 2", value: "Value 2"},
        {id: "Test 3", value: "Value 3"}
    ]; 

    render(<Accordion data={accordionData}></Accordion>);

    const accordionElement = screen.getByText("Test 3")

    expect(accordionElement).toBeInTheDocument();
});
//--------------------------------------------------------------
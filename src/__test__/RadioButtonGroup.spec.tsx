import React, {useState} from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import { RadioButtonGroup } from "../lib";

//Button Component Tests
//-------------------------------------------------------------
test('renders radio button group with correct label text', () => {
    const hello = jest.fn();

    render(<RadioButtonGroup onChange={hello} isSelected={''} data={[{id: "Test 1", value: "Test 1"}]} label={'Label'} defaultColor={''} overrideColor={''}></RadioButtonGroup>);

    const radioButtonElement = screen.getByLabelText("Label")

    expect(radioButtonElement).toBeInTheDocument();
});

test('renders radio button group with override color', () => {

});

test('renders radio button group with working onclick function', () => {

});
//-------------------------------------------------------------

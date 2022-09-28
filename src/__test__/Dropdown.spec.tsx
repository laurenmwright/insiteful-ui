import React from 'react';
import { fireEvent, render, screen} from '@testing-library/react';
import { Dropdown } from '../lib/';

const dropdownOpts = ["opt1", "opt2", "opt3"];

//Dropdown Component Tests
//-------------------------------------------------------------
test('renders dropdown correctly', () => {
    const {getByTestId} = render(<Dropdown label={"Label"} options = {dropdownOpts} selected = {"string"} setSelected = {() => {}} />);
    const dropdownElement = getByTestId("div");
    expect(dropdownElement).toContainElement(getByTestId("label"));
    expect(dropdownElement).toContainElement(getByTestId("listbox"));
    expect(dropdownElement).toContainElement(getByTestId("buttonAndOptions"));
});

test('dropdown opens and displays options correctly', () => {
    const {getByTestId} = render(<Dropdown label={"Label"} options = {dropdownOpts} selected = {"string"} setSelected = {() => {}} />);
    const buttonElement = getByTestId("button");
    fireEvent.click(buttonElement);
    const optionElement = getByTestId("1");
    fireEvent.click(optionElement);
    expect(optionElement).toHaveClass("relative cursor-default select-none py-2 pl-10 pr-4")
});

test('selecting an option works', () => {
    const hello = jest.fn();
    const {getByTestId} = render(<Dropdown label={"Label"} options = {dropdownOpts} selected = {"example"} setSelected = {hello} />);
    const listbox = getByTestId("listbox");
    const buttonElement = getByTestId("button");
    fireEvent.click(buttonElement);
    const optionElement = getByTestId("1");
    fireEvent.click(optionElement);
    expect(hello).toHaveBeenCalled();
});
//-------------------------------------------------------------
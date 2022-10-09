import * as React from 'react';
import { fireEvent, render, screen} from '@testing-library/react';
import { Dropdown } from '../components';

const dropdownOpts = [
    { value: 'opt1', label: 'opt1' },
    { value: 'opt2', label: 'opt2' },
    { value: 'opt3', label: 'opt3' },
  ];


//Dropdown Component Tests
//-------------------------------------------------------------
test('renders dropdown correctly', () => {
    const {getByTestId} = render(<Dropdown label={"Label"} options = {dropdownOpts} selected = {"string"} onChange = {() => {}} />);
    const dropdownElement = getByTestId("div");
    expect(dropdownElement).toContainElement(getByTestId("label"));
    expect(dropdownElement).toContainElement(getByTestId("listbox"));
    expect(dropdownElement).toContainElement(getByTestId("buttonAndOptions"));
});

test('dropdown opens and displays options correctly', () => {
    const {getByTestId} = render(<Dropdown label={"Label"} options = {dropdownOpts} selected = {"string"} onChange = {() => {}} />);
    const buttonElement = getByTestId("button");
    fireEvent.click(buttonElement);
    const optionElement = getByTestId("1");
    fireEvent.click(optionElement);
    expect(optionElement).toHaveClass("relative cursor-default select-none py-2 pl-10 pr-4")
});

test('selecting an option works', () => {
    const hello = jest.fn();
    const {getByTestId} = render(<Dropdown label={"Label"} options = {dropdownOpts} selected = {"example"} onChange = {hello} />);
    const buttonElement = getByTestId("button");
    fireEvent.click(buttonElement);
    const optionElement = getByTestId("1");
    fireEvent.click(optionElement);
    expect(hello).toHaveBeenCalled();
});

//TODO: see if what is getting selecting is changing in state!
test('changing state when selecting an option', () => {
    const setStateMock = jest.fn();
    const useStateMock: any = (useState: any) => [useState, setStateMock];
    jest.spyOn(React, 'useState').mockImplementation(useStateMock);

    const {getByTestId} = render(<Dropdown label={"Label"} options = {dropdownOpts} selected = {"selected"} onChange = {setStateMock} />);
    const buttonElement = getByTestId("button");
    fireEvent.click(buttonElement);
    const optionElement = getByTestId("1");
    fireEvent.click(optionElement);

    expect(setStateMock).toHaveBeenCalled();
});
//-------------------------------------------------------------
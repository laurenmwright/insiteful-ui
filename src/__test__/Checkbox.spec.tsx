import * as React from 'react'
import { act, fireEvent, render, screen } from '@testing-library/react';
import { Checkbox } from "../components";

test('renders checkbox correctly', () => {
    const {getByTestId} = render(<Checkbox label={"Checkbox"} checked = {true} setChecked = {() => {}} />);
    const checkboxElement = getByTestId("checkbox");
    expect(checkboxElement).toContainElement(getByTestId("input"));
    expect(checkboxElement).toContainElement(getByTestId("span"));
});

test('testing the disabled prop', () => {
  const {getByTestId} = render(<Checkbox disabled label={"Checkbox"} checked = {true} setChecked = {() => {}} />);
  const checkboxElement = getByTestId("input");

  expect(checkboxElement).toBeDisabled();
});

//TODO: See if it is possible to actually test a state change!
test('checking/unchecking the checkbox correctly changes state', () => {
  const setStateMock = jest.fn();
  const useStateMock: any = (useState: any) => [useState, setStateMock];
  jest.spyOn(React, 'useState').mockImplementation(useStateMock);

  const {getByTestId} = render(<Checkbox label={"Checkbox"} checked = {useStateMock(true)} setChecked = {setStateMock} />);
  const checkboxElement = getByTestId("input");
  fireEvent.click(checkboxElement);

  expect(setStateMock).toHaveBeenCalled();
});
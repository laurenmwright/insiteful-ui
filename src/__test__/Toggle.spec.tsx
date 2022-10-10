import * as React from 'react';
import { fireEvent, render} from '@testing-library/react';
import {Toggle} from '../components';

test('renders toggle correctly', () => {
    const {getByTestId} = render(<Toggle label={"Label"} enabled={true} setEnabled={() => {}}/>);
    const toggleElement = getByTestId("div");
    expect(toggleElement).toContainElement(getByTestId("label"));
    expect(toggleElement).toContainElement(getByTestId("switch"));
    expect(toggleElement).toContainElement(getByTestId("circle"));
});

test('renders toggle with correct disabled color', () => {
    const {getByTestId} = render(<Toggle label="Label" EnabledColor="bg-blue-500" DisabledColor = "bg-gray-300" enabled={false} setEnabled={() => {}}/>);
    const toggleElement = getByTestId("switch");
    expect(toggleElement).toHaveClass('bg-gray-300');
});

test('enable changes toggle color', () => {
    const {getByTestId} = render(<Toggle label="Label" EnabledColor="bg-blue-500" DisabledColor = "bg-gray-300" enabled={true} setEnabled={() => {}}/>);
    const toggleElement = getByTestId("switch");
    fireEvent.click(toggleElement);
    expect(toggleElement).toHaveClass('bg-blue-500');
});

test('renders toggle with disabled/secondary color', () => {
    const {getByTestId} = render(<Toggle label="Label" enabled={false} setEnabled={() => {}}/>);
    const toggleElement = getByTestId("switch");
    expect(toggleElement).toHaveClass('bg-secondary');
});

test('enable changes toggle to primary color', () => {
    const {getByTestId} = render(<Toggle label="Label" enabled={true} setEnabled={() => {}}/>);
    const toggleElement = getByTestId("switch");
    fireEvent.click(toggleElement);
    expect(toggleElement).toHaveClass('bg-primary');
});

//TODO: see if what is getting selecting is changing in state!
test('changing state when selecting an option', () => {
    const setStateMock = jest.fn();
    const useStateMock: any = (useState: any) => [useState, setStateMock];
    jest.spyOn(React, 'useState').mockImplementation(useStateMock);

    const {getByTestId} = render(<Toggle label={"Label"} enabled = {true} setEnabled = {setStateMock} />);
    const toggleElement = getByTestId("switch");
    fireEvent.click(toggleElement);

    expect(setStateMock).toHaveBeenCalled();
});

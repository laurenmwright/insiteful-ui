import * as React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import {Toggle} from '../components';

test('renders toggle correctly', () => {
    const {getByTestId} = render(<Toggle label={"Label"} enabled={true} onChange={() => {}}/>);
    const toggleElement = getByTestId("div");
    expect(toggleElement).toContainElement(screen.getByText(/Label/i));
    expect(toggleElement).toContainElement(getByTestId("switch"));
    expect(toggleElement).toContainElement(getByTestId("circle"));
});

test('renders toggle with correct disabled color', () => {
    const {getByTestId} = render(<Toggle label="Label" enabled={false} onChange={() => {}}/>);
    const toggleElement = getByTestId("switch");
    expect(toggleElement).toHaveClass('bg-lightGray');
});

test('enable changes toggle color', () => {
    const {getByTestId} = render(<Toggle label="Label" enabled={true} onChange={() => {}}/>);
    const toggleElement = getByTestId("switch");
    fireEvent.click(toggleElement);
    expect(toggleElement).toHaveClass('bg-actionBlue');
});

//TODO: see if what is getting selecting is changing in state!
test('changing state when selecting an option', () => {
    const setStateMock = jest.fn();
    const useStateMock: any = (useState: any) => [useState, setStateMock];
    jest.spyOn(React, 'useState').mockImplementation(useStateMock);

    const {getByTestId} = render(<Toggle label={"Label"} enabled = {true} onChange = {setStateMock} />);
    const toggleElement = getByTestId("switch");
    fireEvent.click(toggleElement);

    expect(setStateMock).toHaveBeenCalled();
});

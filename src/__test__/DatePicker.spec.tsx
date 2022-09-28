import React from 'react';
import { fireEvent, getByDisplayValue, getByRole, getByTestId, render, screen} from '@testing-library/react';
import { DatePicker } from '../components';

const myTest = () => {
    console.log("test");
  }
test('renders DRP', () => {
    render(<DatePicker onChange={myTest} rangeValue="1999-01-30"></DatePicker>);
    const DateRangeElement = screen.getByTestId("DRP");
    expect(DateRangeElement).toHaveValue("1999-01-30");
});
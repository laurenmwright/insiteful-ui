import React from 'react';
import { fireEvent, getByDisplayValue, getByRole, getByTestId, render, screen} from '@testing-library/react';
import { DatePicker } from '../components';
import userEvent from "@testing-library/user-event";

const myTest = () => {
    console.log("test");
  }

  test('renders DRP', () => {
    const {getByTestId} = render(<DatePicker onChange={myTest}></DatePicker>);
    const DateRangeElement = getByTestId("DRP");
    expect(DateRangeElement).toContainElement(getByTestId("DRP"));
});

test("on change gets called", () => {
  const hello = jest.fn();
  const {getByTestId} = render(<DatePicker onChange={hello}/>);
  const DateRangeElement = getByTestId("DRP");
  //expect(DateRangeElement).toContainElement(getByTestId("DRP"));
  userEvent.type(DateRangeElement, "test"); 
  expect(hello).toHaveBeenCalled;
});
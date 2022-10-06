import React from 'react';
import { render, screen} from '@testing-library/react';
import { DatePicker } from '../components';
import userEvent from "@testing-library/user-event";

test('renders DRP', () => {
  const hello = jest.fn();
  render(<DatePicker onChange={hello} dateValue="1999-01-30"></DatePicker>);
  const DateRangeElement = screen.getByTestId("DRP");
  expect(DateRangeElement).toHaveValue("1999-01-30");
});

test("on change gets called", () => {
  const hello = jest.fn();
  const {getByTestId} = render(<DatePicker onChange={hello}/>);
  const DateRangeElement = getByTestId("DRP");
  userEvent.type(DateRangeElement, "test"); 
  expect(hello).toHaveBeenCalled;
});
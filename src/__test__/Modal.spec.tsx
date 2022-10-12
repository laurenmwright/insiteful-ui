import React from 'react';
import { fireEvent, render, screen} from '@testing-library/react';
import { Modal } from '../components';

test('renders modal correctly', () => {
  const hello = jest.fn();
  const {getByTestId} = render(<Modal isOpen={true} onClose={hello} title="Title" size='medium'/>);
  const ModalElement = getByTestId("dialog");
  expect(ModalElement).toContainElement(getByTestId("dialog"));
  expect(ModalElement).toContainElement(getByTestId("panel"));
  expect(ModalElement).toContainElement(getByTestId("title"));
  fireEvent.click(getByTestId("icon"))
  expect(hello).toHaveBeenCalled();
});

import React from 'react';
import { fireEvent, render, screen} from '@testing-library/react';
import { Modal } from '../components';

//Modal Component Tests
//-------------------------------------------------------------
test('renders modal correctly', () => {
  const closeModal = jest.fn();
  const {getByTestId} = render(<Modal isOpen={true} closeFunction={closeModal} onClose={jest.fn()} title="Title" />);
  const ModalElement = getByTestId("dialog");
  expect(ModalElement).toContainElement(getByTestId("dialog"));
  expect(ModalElement).toContainElement(getByTestId("panel"));
  expect(ModalElement).toContainElement(getByTestId("title"));
  fireEvent.click(getByTestId("icon"))
  expect(closeModal).toHaveBeenCalled();
});
//-------------------------------------------------------------
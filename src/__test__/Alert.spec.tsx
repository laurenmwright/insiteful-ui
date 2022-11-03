import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import { Alert} from "../components";

test('renders alert message correctly', () => {
    render(<Alert message='message' notification={true}/>);
    const alertElement = screen.getByText("message");
    expect(alertElement).toHaveTextContent("message");
});

test('renders notification correctly', () => {
    const {getByTestId} = render(<Alert message='message' notification={true}/>);
    const notificationElement = getByTestId("notification");
    expect(notificationElement).toBeInTheDocument();
});

test('renders success correctly', () => {
    const {getByTestId} = render(<Alert message='message'success={true}/>);
    const successElement = getByTestId("success");
    expect(successElement).toBeInTheDocument();
});

test('renders error correctly', () => {
    const {getByTestId} = render(<Alert message='message'error={true}/>);
    const errorElement = getByTestId("error");
    expect(errorElement).toBeInTheDocument();
});




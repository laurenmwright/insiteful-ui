import React from 'react';
import { fireEvent, getByPlaceholderText, getByText, render, screen} from '@testing-library/react';
import { TextArea } from '../components';

test('Correctly renders label', () => {
    const {getByText} = render(<TextArea label={"Label Text"} />);
    const TextAreaElement = getByText("Label Text");
    expect(TextAreaElement).toHaveTextContent("Label Text");
});
test('Correctly renders placeholderValue', () => {
    render(<TextArea placeholderValue={"Placeholder Text"} />);
    const TextAreaElement = screen.getByPlaceholderText("Placeholder Text");
    expect(TextAreaElement).toBeInTheDocument();
});
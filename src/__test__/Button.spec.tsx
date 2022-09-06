import React from 'react';
import { render, screen } from '@testing-library/react';
import Button from '../lib/components/Button/Button';

test('renders button with correct text', () => {
  render(<Button>My Button</Button>);
  const buttonElement = screen.getByText(/My Button/i);
  expect(buttonElement).toBeInTheDocument();
});

// add test for color 

// add test for click function


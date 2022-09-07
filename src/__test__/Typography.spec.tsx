import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import {Heading1, Heading2, Title} from '../lib/components/Typography/Typography';

//Heading1
// test for children(text)
test('renders heading with correct text', () => {
  render(<Heading1>Heading1</Heading1>);
  const heading1Element = screen.getByText(/Heading1/i);
  expect(heading1Element).toBeInTheDocument();
});
// Heading1
// test for override-color 
test('renders button with correct color', () => {
  render(<Heading1 overrideColor = "blue" >Heading1</Heading1>);
  const heading1Element = screen.getByText(/Heading1/i);
  expect(heading1Element).toHaveStyle({color:"blue"});
});
//Heading1
// test for override-font
test('renders button with correct font', () => {
  render(<Heading1 overrideFont = 'Arial' >Heading1</Heading1>);
  const heading1Element = screen.getByText(/Heading1/i);
  expect(heading1Element).toHaveStyle({fontFamily: 'Arial'});
});

//Heading2
// test for children(text)
test('renders heading with correct text', () => {
  render(<Heading2>Heading2</Heading2>);
  const heading2Element = screen.getByText(/Heading2/i);
  expect(heading2Element).toBeInTheDocument();
});
// Heading2
// test for override-color 
test('renders button with correct color', () => {
  render(<Heading2 overrideColor = "blue" >Heading2</Heading2>);
  const heading2Element = screen.getByText(/Heading2/i);
  expect(heading2Element).toHaveStyle({color:"blue"});
});
// //Heading2
// // test for override-font
test('renders button with correct font', () => {
  render(<Heading2 overrideFont = 'Arial' >Heading2</Heading2>);
  const heading2Element = screen.getByText(/Heading2/i);
  expect(heading2Element).toHaveStyle({fontFamily: 'Arial'});
});

// //Title
// // test for children(text)
test('renders title with correct text', () => {
  render(<Title>Title</Title>);
  const titleElement = screen.getByText(/Title/i);
  expect(titleElement).toBeInTheDocument();
});
// // Title
// // test for override-color 
test('renders button with correct color', () => {
  render(<Title overrideColor = "blue" >Title</Title>);
  const titleElement = screen.getByText(/Title/i);
  expect(titleElement).toHaveStyle({color:"blue"});
});
// //Title
// // test for override-font
test('renders button with correct font', () => {
  render(<Title overrideFont = 'Arial' >Title</Title>);
  const titleElement = screen.getByText(/Title/i);
  expect(titleElement).toHaveStyle({fontFamily: 'Arial'});
});
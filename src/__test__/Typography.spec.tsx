import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import {Heading1, Heading2, Title, Subheading, Link, Button, Placeholder, Caption1, Caption2, Menu } from '../lib/components/Typography/Typography';

// Heading1
// test for children(text)
test("renders heading with correct text", () => {
  render(<Heading1>Heading1</Heading1>);
  const heading1Element = screen.getByText(/Heading1/i);
  expect(heading1Element).toBeInTheDocument();
});

// Heading1
// test for override-color
test("renders button with correct color", () => {
  render(<Heading1 overrideColor="blue">Heading1</Heading1>);
  const heading1Element = screen.getByText(/Heading1/i);
  expect(heading1Element).toHaveStyle({ color: "blue" });
});
//Heading1
// test for override-font
test("renders button with correct font", () => {
  render(<Heading1 overrideFont="Arial">Heading1</Heading1>);
  const heading1Element = screen.getByText(/Heading1/i);
  expect(heading1Element).toHaveStyle({ fontFamily: "Arial" });
});

//Heading2
// test for children(text)
test("renders heading with correct text", () => {
  render(<Heading2>Heading2</Heading2>);
  const heading2Element = screen.getByText(/Heading2/i);
  expect(heading2Element).toBeInTheDocument();
});
// Heading2
// test for override-color
test("renders button with correct color", () => {
  render(<Heading2 overrideColor="blue">Heading2</Heading2>);
  const heading2Element = screen.getByText(/Heading2/i);
  expect(heading2Element).toHaveStyle({ color: "blue" });
});
// //Heading2
// // test for override-font
test("renders button with correct font", () => {
  render(<Heading2 overrideFont="Arial">Heading2</Heading2>);
  const heading2Element = screen.getByText(/Heading2/i);
  expect(heading2Element).toHaveStyle({ fontFamily: "Arial" });
});

// //Title
// // test for children(text)
test("renders title with correct text", () => {
  render(<Title>Title</Title>);
  const titleElement = screen.getByText(/Title/i);
  expect(titleElement).toBeInTheDocument();
});
// // Title
// // test for override-color
test("renders button with correct color", () => {
  render(<Title overrideColor="blue">Title</Title>);
  const titleElement = screen.getByText(/Title/i);
  expect(titleElement).toHaveStyle({ color: "blue" });
});
// //Title
// // test for override-font
test("renders button with correct font", () => {
  render(<Title overrideFont="Arial">Title</Title>);
  const titleElement = screen.getByText(/Title/i);
});

//Caption1
//test for children(text)
test("renders caption with correct text", () => {
  render(<Caption1>Caption1</Caption1>);
  const captionElement = screen.getByText(/Caption1/i);
  expect(captionElement).toBeInTheDocument();
});

//Caption1
// test for override-color
test("renders caption with correct color", () => {
  render(<Caption1 overrideColor="red">Caption1</Caption1>);
  const captionElement = screen.getByText(/Caption1/i);
  expect(captionElement).toHaveStyle({ color: "red" });
});

//Caption1
// test for override-font
test("renders caption with correct color", () => {
  render(<Caption1 overrideFont="Arial">Caption1</Caption1>);
  const captionElement = screen.getByText(/Caption1/i);
  expect(captionElement).toHaveStyle({ fontFamily: "Arial" });
});

//Caption2
//test for children(text)
test("renders caption with correct text", () => {
  render(<Caption2>Caption2</Caption2>);
  const caption2Element = screen.getByText(/Caption2/i);
  expect(caption2Element).toBeInTheDocument();
});

//Caption2
// test for override-color
test("renders caption with correct color", () => {
  render(<Caption2 overrideColor="red">Caption2</Caption2>);
  const caption2Element = screen.getByText(/Caption2/i);
  expect(caption2Element).toHaveStyle({ color: "red" });
});

//Caption2
// test for override-font
test("renders caption with correct color", () => {
  render(<Caption2 overrideFont="Arial">Caption2</Caption2>);
  const caption2Element = screen.getByText(/Caption2/i);
  expect(caption2Element).toHaveStyle({ fontFamily: "Arial" });
});

//Menu
//test for children(text)
test("renders caption with correct text", () => {
  render(<Menu>Menu</Menu>);
  const menuElement = screen.getByText(/Menu/i);
  expect(menuElement).toBeInTheDocument();
});

//Menu
// test for override-color
test("renders caption with correct color", () => {
  render(<Menu overrideColor="red">Menu</Menu>);
  const menuElement = screen.getByText(/Menu/i);
  expect(menuElement).toHaveStyle({ color: "red" });
});

//Menu
// test for override-font
test("renders caption with correct color", () => {
  render(<Menu overrideFont="Arial">Menu</Menu>);
  const menuElement = screen.getByText(/Menu/i);
  expect(menuElement).toHaveStyle({ fontFamily: "Arial" });
});
=======
  expect(titleElement).toHaveStyle({fontFamily: 'Arial'});
});

// Placeholder
// test for children(text)
test('renders title with correct text', () => {
  render(<Placeholder>Placeholder</Placeholder>);
  const placeholderElement = screen.getByText(/Placeholder/i);
  expect(placeholderElement).toBeInTheDocument();
});
// Placeholder
// test for override-color 
test('renders button with correct color', () => {
  render(<Placeholder overrideColor = "blue" >Placeholder</Placeholder>);
  const placeholderElement = screen.getByText(/Placeholder/i);
  expect(placeholderElement).toHaveStyle({color:"blue"});
});
// Placeholder
// test for override-font
test('renders button with correct font', () => {
  render(<Placeholder overrideFont = 'Arial' >Placeholder</Placeholder>);
  const placeholderElement = screen.getByText(/Placeholder/i);
  expect(placeholderElement).toHaveStyle({fontFamily: 'Arial'});
});
//Subheading
//Test for children text
test('renders subheading with correct text', () => {
  render(<Subheading>My subheading</Subheading>);
  const subheadingElement = screen.getByText(/My subheading/i);
  expect(subheadingElement).toBeInTheDocument();
});

//Test for override-color
test('renders subheading with correct color', () => {
  render(<Subheading overrideColor = "purple" >My subheading</Subheading>);
  const subheadingElement = screen.getByText(/My subheading/i);
  expect(subheadingElement).toHaveStyle({color:"purple"});
});

//Test for override-font
test('renders subheading with correct font', () => {
  render(<Subheading overrideFont = "Arial" >My subheading</Subheading>);
  const subheadingElement = screen.getByText(/My subheading/i);
  expect(subheadingElement).toHaveStyle({fontFamily: 'Arial'});
});


//Link Unit Tests
//Test for children text
test('renders link with correct text', () => {
  render(<Link>My link</Link>);
  const linkElement = screen.getByText(/My link/i);
  expect(linkElement).toBeInTheDocument();
});

//Test for override-color
test('renders link with correct color', () => {
  render(<Link overrideColor = "purple" >My link</Link>);
  const linkElement = screen.getByText(/My link/i);
  expect(linkElement).toHaveStyle({color:"purple"});
});

//Test for override-font
test('renders link with correct font', () => {
  render(<Link overrideFont = "Arial" >My link</Link>);
  const linkElement = screen.getByText(/My link/i);
  expect(linkElement).toHaveStyle({fontFamily: 'Arial'});
});

//button Typography Unit Tests
//Test for children text
test('renders button with correct text', () => {
  render(<Button>My button</Button>);
  const buttonElement = screen.getByText(/My button/i);
  expect(buttonElement).toBeInTheDocument();
});

//Test for override-color
test('renders button with correct color', () => {
  render(<Button overrideColor = "purple" >My button</Button>);
  const buttonElement = screen.getByText(/My button/i);
  expect(buttonElement).toHaveStyle({color:"purple"});
});

//Test for override-font
test('renders button with correct font', () => {
  render(<Button overrideFont = "Arial" >My button</Button>);
  const buttonElement = screen.getByText(/My button/i);
  expect(buttonElement).toHaveStyle({fontFamily: 'Arial'});
});
import React from 'react';
import { render, screen } from '@testing-library/react';
import {Heading1, Heading2, Title, Subheading, Link, ButtonTypography, Placeholder, Caption1, Caption2, Menu } from "../lib";

//Heading1
//-------------------------------------------------------------
test("renders Heading1 with correct text", () => {
  render(<Heading1>Heading1</Heading1>);
  const heading1Element = screen.getByText(/Heading1/i);
  expect(heading1Element).toBeInTheDocument();
});

test("renders Heading1 with override color", () => {
  render(<Heading1 overrideColor="blue">Heading1</Heading1>);
  const heading1Element = screen.getByText(/Heading1/i);
  expect(heading1Element).toHaveStyle({ color: "blue" });
});

test("renders Heading1 with override font", () => {
  render(<Heading1 overrideFont="Arial">Heading1</Heading1>);
  const heading1Element = screen.getByText(/Heading1/i);
  expect(heading1Element).toHaveStyle({ fontFamily: "Arial" });
});
//-------------------------------------------------------------

//Heading2
//-------------------------------------------------------------
test("renders Heading2 with correct text", () => {
  render(<Heading2>Heading2</Heading2>);
  const heading2Element = screen.getByText(/Heading2/i);
  expect(heading2Element).toBeInTheDocument();
});

test("renders Heading2 with override color", () => {
  render(<Heading2 overrideColor="blue">Heading2</Heading2>);
  const heading2Element = screen.getByText(/Heading2/i);
  expect(heading2Element).toHaveStyle({ color: "blue" });
});

test("renders Heading2 with override font", () => {
  render(<Heading2 overrideFont="Arial">Heading2</Heading2>);
  const heading2Element = screen.getByText(/Heading2/i);
  expect(heading2Element).toHaveStyle({ fontFamily: "Arial" });
});
//-------------------------------------------------------------

//Title
//-------------------------------------------------------------
test("renders Title with correct text", () => {
  render(<Title>Title</Title>);
  const titleElement = screen.getByText(/Title/i);
  expect(titleElement).toBeInTheDocument();
});

test("renders Title with override color", () => {
  render(<Title overrideColor="blue">Title</Title>);
  const titleElement = screen.getByText(/Title/i);
  expect(titleElement).toHaveStyle({ color: "blue" });
});

test("renders Title with override font", () => {
  render(<Title overrideFont="Arial">Title</Title>);
  const titleElement = screen.getByText(/Title/i);
});
//-------------------------------------------------------------

//Caption1
//-------------------------------------------------------------
test("renders caption with correct text", () => {
  render(<Caption1>Caption1</Caption1>);
  const captionElement = screen.getByText(/Caption1/i);
  expect(captionElement).toBeInTheDocument();
});

test("renders caption with override color", () => {
  render(<Caption1 overrideColor="red">Caption1</Caption1>);
  const captionElement = screen.getByText(/Caption1/i);
  expect(captionElement).toHaveStyle({ color: "red" });
});

test("renders caption with override font", () => {
  render(<Caption1 overrideFont="Arial">Caption1</Caption1>);
  const captionElement = screen.getByText(/Caption1/i);
  expect(captionElement).toHaveStyle({ fontFamily: "Arial" });
});
//-------------------------------------------------------------

//Caption2
//-------------------------------------------------------------
test("renders caption with correct text", () => {
  render(<Caption2>Caption2</Caption2>);
  const caption2Element = screen.getByText(/Caption2/i);
  expect(caption2Element).toBeInTheDocument();
});

test("renders caption with override color", () => {
  render(<Caption2 overrideColor="red">Caption2</Caption2>);
  const caption2Element = screen.getByText(/Caption2/i);
  expect(caption2Element).toHaveStyle({ color: "red" });
});

test("renders caption with override font", () => {
  render(<Caption2 overrideFont="Arial">Caption2</Caption2>);
  const caption2Element = screen.getByText(/Caption2/i);
  expect(caption2Element).toHaveStyle({ fontFamily: "Arial" });
});
//-------------------------------------------------------------

//Menu
//-------------------------------------------------------------
test("renders caption with correct text", () => {
  render(<Menu>Menu</Menu>);
  const menuElement = screen.getByText(/Menu/i);
  expect(menuElement).toBeInTheDocument();
});

test("renders caption with override color", () => {
  render(<Menu overrideColor="red">Menu</Menu>);
  const menuElement = screen.getByText(/Menu/i);
  expect(menuElement).toHaveStyle({ color: "red" });
});

test("renders caption with override font", () => {
  render(<Menu overrideFont="Arial">Menu</Menu>);
  const menuElement = screen.getByText(/Menu/i);
  expect(menuElement).toHaveStyle({ fontFamily: "Arial" });
});
//-------------------------------------------------------------

// Placeholder
//-------------------------------------------------------------
test('renders title with correct text', () => {
  render(<Placeholder>Placeholder</Placeholder>);
  const placeholderElement = screen.getByText(/Placeholder/i);
  expect(placeholderElement).toBeInTheDocument();
});

test('renders button with override color', () => {
  render(<Placeholder overrideColor = "blue" >Placeholder</Placeholder>);
  const placeholderElement = screen.getByText(/Placeholder/i);
  expect(placeholderElement).toHaveStyle({ color:"blue" });
});

test('renders button with override font', () => {
  render(<Placeholder overrideFont = 'Arial' >Placeholder</Placeholder>);
  const placeholderElement = screen.getByText(/Placeholder/i);
  expect(placeholderElement).toHaveStyle({ fontFamily: 'Arial' });
});
//-------------------------------------------------------------

//Subheading
//-------------------------------------------------------------
test('renders subheading with correct text', () => {
  render(<Subheading>My subheading</Subheading>);
  const subheadingElement = screen.getByText(/My subheading/i);
  expect(subheadingElement).toBeInTheDocument();
});

test('renders subheading with override color', () => {
  render(<Subheading overrideColor = "purple" >My subheading</Subheading>);
  const subheadingElement = screen.getByText(/My subheading/i);
  expect(subheadingElement).toHaveStyle({ color: "purple" });
});

test('renders subheading with override font', () => {
  render(<Subheading overrideFont = "Arial" >My subheading</Subheading>);
  const subheadingElement = screen.getByText(/My subheading/i);
  expect(subheadingElement).toHaveStyle({ fontFamily: 'Arial' });
});
//-------------------------------------------------------------

//Link
//-------------------------------------------------------------
test('renders link with correct text', () => {
  render(<Link>My link</Link>);
  const linkElement = screen.getByText(/My link/i);
  expect(linkElement).toBeInTheDocument();
});

test('renders link with override color', () => {
  render(<Link overrideColor = "purple" >My link</Link>);
  const linkElement = screen.getByText(/My link/i);
  expect(linkElement).toHaveStyle({ color: "purple" });
});

test('renders link with override font', () => {
  render(<Link overrideFont = "Arial" >My link</Link>);
  const linkElement = screen.getByText(/My link/i);
  expect(linkElement).toHaveStyle({ fontFamily: 'Arial' });
});
//-------------------------------------------------------------

//Button Typography
//-------------------------------------------------------------
test('renders button with correct text', () => {
  render(<ButtonTypography>My button</ButtonTypography>);
  const buttonElement = screen.getByText(/My button/i);
  expect(buttonElement).toBeInTheDocument();
});

test('renders button with override color', () => {
  render(<ButtonTypography overrideColor = "purple" >My button</ButtonTypography>);
  const buttonElement = screen.getByText(/My button/i);
  expect(buttonElement).toHaveStyle({ color: "purple" });
});

test('renders button with override font', () => {
  render(<ButtonTypography overrideFont = "Arial" >My button</ButtonTypography>);
  const buttonElement = screen.getByText(/My button/i);
  expect(buttonElement).toHaveStyle({ fontFamily: 'Arial' });
});
//-------------------------------------------------------------
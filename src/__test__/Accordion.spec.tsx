import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import { Accordion, Button, Title } from "../components";

const myTest = () => {
  console.log("my test value");
};

//Accordion Component Tests
//-------------------------------------------------------------

test('renders accordion ids correctly', () => {
    const hello = jest.fn();

    const accordionData = [
        {id: "Test 1", value: "Value 1"},
        {id: "Test 2", value: "Value 2"},
        {id: "Test 3", value: "Value 3"}
    ]; 

    render(<Accordion data={accordionData}></Accordion>);

    const accordionElement = screen.getByText("Test 3")

    expect(accordionElement).toBeInTheDocument();
});


test("if accordion expands & renders values correctly", () => {

  const accordionData = [
    { id: "Test 1", value: "Value 1" },
    { id: "Test 2", value: "Value 2" },
    { id: "Test 3", value: "Value 3" },
  ];

  render(<Accordion data={accordionData}></Accordion>);
  const title1 = screen.getByText("Test 1");
  fireEvent.click(title1);

  const accordionElement = screen.getByText("Value 1");

  expect(accordionElement).toBeInTheDocument();
}); 


test("value accepts any child", () => {
  const hello = jest.fn();

  const accordionData = [
    { id: "Test 1", value: 23 },
    { id: "Test 2", value: <Button onClick={myTest} primary>HI</Button> },
    { id: "Test 3", value: <Title>Title</Title>},
  ];

  render(<Accordion data={accordionData}></Accordion>);
  const title1 = screen.getByText("Test 1");
  const title2 = screen.getByText("Test 2");
  const title3 = screen.getByText("Test 3");
  
  fireEvent.click(title1);
  fireEvent.click(title2);
  fireEvent.click(title3);

  const accordionElement = screen.getByText(23);
  const accordionElement2 = screen.getByText(/HI/i);
  const accordionElement3 = screen.getByText(/Title/i);

  expect(accordionElement).toBeInTheDocument();
  expect(accordionElement2).toBeInTheDocument();
  expect(accordionElement3).toBeInTheDocument();
});

//--------------------------------------------------------------
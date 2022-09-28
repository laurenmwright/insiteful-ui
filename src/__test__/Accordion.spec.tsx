import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import { Accordion, Button, Title } from "../components";

const accordionData = [
  {title: "Title 1", content: "Value 1"},
  {title: "Title 2", content: "Value 2"},
  {title: "Title 3", content: "Value 3"}
];

const myTest = () => {
  console.log("my test value");
};

//Accordion Component Tests
//-------------------------------------------------------------

test('renders accordion ids correctly', () => {
  render(<Accordion data={accordionData}></Accordion>);

  const accordionElement = screen.getByText("Title 3")

  expect(accordionElement).toBeInTheDocument();
});


test("if accordion expands & renders values correctly", () => {
  render(<Accordion data={accordionData}></Accordion>);
  const title1 = screen.getByText("Title 1");
  fireEvent.click(title1);

  const accordionElement = screen.getByText("Value 1");

  expect(accordionElement).toBeInTheDocument();
}); 


test("value accepts any child", () => {
  const hello = jest.fn();

  const newAccordionData = [
    { title: "Title 1", content: 23 },
    { title: "Title 2", content: <Button onClick={myTest} primary>Button</Button> },
    { title: "Title 3", content: <Title>Title</Title>},
  ];

  render(<Accordion data={newAccordionData}></Accordion>);
  const title1 = screen.getByText("Title 1");
  const title2 = screen.getByText("Title 2");
  const title3 = screen.getByText("Title 3");
  
  fireEvent.click(title1);
  fireEvent.click(title2);
  fireEvent.click(title3);

  const accordionElement = screen.getByText(23);
  const accordionElement2 = screen.getByText(/Button/i);
  const accordionElement3 = screen.getByText(/Title 3/i);

  expect(accordionElement).toBeInTheDocument();
  expect(accordionElement2).toBeInTheDocument();
  expect(accordionElement3).toBeInTheDocument();
});

//--------------------------------------------------------------
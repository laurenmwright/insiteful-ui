import * as React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import { Menu, Title } from "../components";

const menuData = [
  { label: "Edit", link: "..." },
  { label: "Duplicate", link: "..." },
  { label: "Archive", link: "..." },
  { label: "Move", link: "..." },
  { label: "Delete", link: "..." },
];

// Menu Component Tests
//-------------------------------------------------------------
test("renders menu button text correctly", () => {
  render(<Menu title = "Options" data={menuData}/>);
  const menuElement = screen.getByText("Options");
  expect(menuElement).toBeInTheDocument();
});


test("if menu opens & renders menu items correctly", () => {
  render(<Menu title="Options" data={menuData} />);
  const options = screen.getByText("Options");
  fireEvent.click(options);
  const menuElement = screen.getByText("Duplicate");
  expect(menuElement).toBeInTheDocument();
}); 


test("if menu button background is action blue", () => {
  render(<Menu title="Options" data={menuData}></Menu>);
  const options = screen.getByText("Options");
  expect(options).toHaveClass('bg-actionBlue');
});

test("test position left and right with an anchor", () => {
  // const {getByTestId} = render(<Menu title="Options" data={menuData}></Menu>);
  // const options = getByTestId("div");
  // expect(options).toHaveClass('text-right z-50');

  const {getByTestId} = render(<Menu title="Examples" anchor = "Title" data={menuData} positionLeft></Menu>);
  const examples = getByTestId("div");
  const menuButton = screen.getByText("Title");
  expect(examples).toHaveClass('text-left z-50');
  expect(menuButton).toHaveClass("focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75")
}); 
//-------------------------------------------------------------


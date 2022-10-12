import * as React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import { MenuComponent } from "../components";

const menuData = [
  { label: "Edit", link: "..." },
  { label: "Duplicate", link: "..." },
  { label: "Archive", link: "..." },
  { label: "Move", link: "..." },
  { label: "Delete", link: "..." },
];

//Dropdown Menu Component Tests
//-------------------------------------------------------------
test("renders dropdown menu button correctly", () => {
  render(<MenuComponent data={menuData}/>);
  const menuElement = screen.getByText("Options");
  expect(menuElement).toBeInTheDocument();
});


test("if dropdown menu opens & renders menu items correctly", () => {
  render(<MenuComponent data={menuData}/>);
  const options = screen.getByText("Options");
  fireEvent.click(options);
  const menuElement = screen.getByText("Duplicate");
  expect(menuElement).toBeInTheDocument();
}); 


test("if menu button background is action blue", () => {
  render(<MenuComponent data={menuData}></MenuComponent>);
  const options = screen.getByText("Options");
  expect(options).toHaveClass('bg-actionBlue');
}); 
//-------------------------------------------------------------


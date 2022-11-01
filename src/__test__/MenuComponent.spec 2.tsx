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

// Menu Component Tests
//-------------------------------------------------------------
test("renders menu button text correctly", () => {
  render(<MenuComponent buttonText = "Options" data={menuData}/>);
  const menuElement = screen.getByText("Options");
  expect(menuElement).toBeInTheDocument();
});


test("if menu opens & renders menu items correctly", () => {
  render(<MenuComponent buttonText="Options" data={menuData} />);
  const options = screen.getByText("Options");
  fireEvent.click(options);
  const menuElement = screen.getByText("Duplicate");
  expect(menuElement).toBeInTheDocument();
}); 


test("if menu button background is action blue", () => {
  render(<MenuComponent buttonText="Options" data={menuData}></MenuComponent>);
  const options = screen.getByText("Options");
  expect(options).toHaveClass('bg-actionBlue');
}); 
//-------------------------------------------------------------

import * as React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import { DropdownMenu } from "../components";

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
  render(<DropdownMenu data={menuData}/>);
  const menuElement = screen.getByText("Options");
  expect(menuElement).toBeInTheDocument();
});


test("if dropdown menu opens & renders menu items correctly", () => {
  render(<DropdownMenu data={menuData}/>);
  const select = screen.getByText("Options");
  fireEvent.click(select);
  const menuElement = screen.getByText("Duplicate");
  expect(menuElement).toBeInTheDocument();
}); 


// test('if hover color is indeed light gray', () => {
//   render(<DropdownMenu data = {menuData}/>);
//   const menuElement = screen.getByText(/My Item/i);
//   expect(menuElement).toHaveStyle("bg-lightGray");
// });
//-------------------------------------------------------------


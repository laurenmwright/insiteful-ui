import React from "react";
import { Meta } from "@storybook/react";
import { Menu } from "../components";

export default {
  title: "Stories/Components/Menu",
  component: Menu,
  argTypes: {},
} as Meta;

const menuData = [
  { label: "Edit", link: "..." },
  { label: "Duplicate", link: "..." },
  { label: "Archive", link: "..." },
  { label: "Move", link: "..." },
  { label: "Delete", link: "..." },
];

export const Default = (args) => (
  <div style={{ width: args.width + "%" }}>
    <Menu title={args.title} positionLeft={args.positionLeft} data={menuData} />
  </div>
);

Default.args = {
  title: "Options",
  positionLeft: false
};
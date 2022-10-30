import React from "react";
import { Meta } from "@storybook/react";
import { MenuComponent } from "../components";

export default {
  title: "Stories/Components/MenuComponent",
  component: MenuComponent,
  argTypes: {},
} as Meta;

export const Default = (args) => (
  <div style={{ width: args.width + "%" }}>
    <MenuComponent buttonText = "Options" data={args.data} />
  </div>
);

Default.args = {
  data: [
    { label: "Edit", link: "..." },
    { label: "Duplicate", link: "..." },
    { label: "Archive", link: "..." },
    { label: "Move", link: "..." },
    { label: "Delete", link: "..." },
  ],
};
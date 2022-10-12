import React from "react";
import { Meta } from "@storybook/react";
import { MenuComponent } from "../components";

export default {
  title: "Stories/Components/MenuComponent",
  component: MenuComponent,
  argTypes: {
    width: {
      control: { type: "number", max: 100, min: 10, step: 1 },
    },
  },
} as Meta;

export const Default = (args) => (
  <div style={{ width: args.width + "%" }}>
    <MenuComponent data={args.data} />
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
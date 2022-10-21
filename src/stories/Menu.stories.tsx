import React from "react";
import { Meta } from "@storybook/react";
import { Menu, Paper, Label } from "../components";
import { MoreVertical } from "react-feather";

export default {
  title: "Stories/Components/Menu",
  component: Menu,
  argTypes: {},
} as Meta;

const menuData = [
  { label: "View", link: "..." },
  { label: "Edit", link: "..." },
  { label: "Submit", link: "..." },
  { label: "Canel", link: "..." },
];

export const Default = (args) => (
  <div style={{ width: args.width + "%" }}>
    <Menu title={args.title} positionLeft={args.positionLeft} data={menuData} />
  </div>
);

Default.args = {
  title: "Options",
  positionLeft: false,
};

export const CustomAnchor = (args) => (
  <div style={{ width: args.width + "%" }}>
    <Paper>
      <span className="flex justify-between">
        <Label className="text-center"><strong>Draft Rule Proposal 10-X-.02 </strong> - Pending Admin Approval</Label>
        <Menu
          
          anchor={
              <MoreVertical size={24} color="var(--color-mediumGray)" />
          }
          data={menuData}
        />
      </span>
    </Paper>
  </div>
);

CustomAnchor.args = {
  title: "Options",
  positionLeft: false,
};

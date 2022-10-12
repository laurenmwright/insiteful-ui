import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { DropdownMenu } from "../components";
import { useArgs } from "@storybook/client-api";

export default {
  title: "Stories/Components/DropdownMenu",
  component: DropdownMenu,
  argTypes: {
    selected: {
      control: "select",
      options: [
        { label: "Edit", link: "..." },
        { label: "Duplicate", link: "..." },
        { label: "Archive", link: "..." },
        { label: "Move", link: "..." },
        { label: "Delete", link: "..." },
      ],
    },
  },
  args: {
    selected: "Options",
    data: [
      { label: "Edit", link: "..." },
      { label: "Duplicate", link: "..." },
      { label: "Archive", link: "..." },
      { label: "Move", link: "..." },
      { label: "Delete", link: "..." },
    ],
  },
} as ComponentMeta<typeof DropdownMenu>;
const Template: ComponentStory<typeof DropdownMenu> = (args) => (
  <DropdownMenu {...args} />
);
export const Controlled = (args) => {
  const [_, setArgs] = useArgs();
  const onChange = (e, checked) => {
    setArgs({ ...args, checked });
    args.onChange(e, checked);
  };
  return <Template {...args} onChange={onChange} />;
};
Controlled.argTypes = {
  onChange: { action: "clicked", table: { disable: true } },
};
Controlled.args = {
  checked: true,
};
export const Uncontrolled = Template.bind({});

import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Dropdown } from '../components';
import { useArgs } from "@storybook/client-api";

// export default {
//   title: 'Stories/Components/Dropdown',
//   component: Dropdown,
//   argTypes: {
//   }
// } as ComponentMeta<typeof Dropdown>;

// const Template: ComponentStory<typeof Dropdown> = (args) => <Dropdown {...args} />;

// export const Primary = Template.bind({});

// Primary.args = {
//   label : "Label",
//   selected: "Value",
//   options: ['opt1', 'opt2', 'opt3'],
//   // setSelected not working due to state
//   //this file is not renaming when we push/pull it 
// };

export default {
  title: "Stories/Components/Dropdown",
  component: Dropdown,
  argTypes: {
    selected: {
      control: "select",
      options: ['opt1', 'opt2', 'opt3']
    },
  },
  args: {
    selected: "options",
    label: "Interesting Option",
    options: ['opt1', 'opt2', 'opt3']
  },
} as ComponentMeta<typeof Dropdown>;
const Template: ComponentStory<typeof Dropdown> = (args) => <Dropdown {...args} />;
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
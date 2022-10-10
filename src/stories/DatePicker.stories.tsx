import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { action } from "@storybook/addon-actions";
import { DatePicker } from '../components';
import { string } from 'prop-types';
import { useArgs } from "@storybook/client-api";


export default {
  title: "Stories/Components/DatePicker",
  component: DatePicker,
  argTypes: {
    dateValue: {
      control: "text"
    },
  },
  args: {
    dateValue: "2020-10-10"
  },

} as ComponentMeta<typeof DatePicker>;
const Template: ComponentStory<typeof DatePicker> = (args) => <DatePicker {...args} />;
export const Controlled = (args) => {
  const [_, setArgs] = useArgs();
  const onChange = (e, dateValue) => {
    setArgs({ ...args, dateValue });
    args.onChange(e, dateValue);
  };
  return <Template {...args} onChange={onChange} />;
};

Controlled.argTypes = {
  onChange: { action: "clicked", table: { disable: true } },
};

Controlled.args = {
  dateValue: "",
};

export const Uncontrolled = Template.bind({});
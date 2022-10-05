import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { action } from "@storybook/addon-actions";
import { DatePicker } from '../components';
import { string } from 'prop-types';

export default {
  title: 'Stories/Components/DatePicker',
  component: DatePicker,
  argTypes: {
    onChange: { action: 'changed' }
  },
} as ComponentMeta<typeof DatePicker>;

const Template: ComponentStory<typeof DatePicker> = (args) => <DatePicker {...args} />;

export const Primary = Template.bind({});

Primary.args = {
  value: string,
  onChange: action("Date is changed!")
};
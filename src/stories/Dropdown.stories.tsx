import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Dropdown } from '../components';

export default {
  title: 'Stories/Components/Dropdown',
  component: Dropdown,
  argTypes: {
  }
} as ComponentMeta<typeof Dropdown>;

const Template: ComponentStory<typeof Dropdown> = (args) => <Dropdown {...args} />;

export const Primary = Template.bind({});

Primary.args = {
  label : "Label",
  selected: "selectedValue",
  options: ['opt1', 'opt2', 'opt3'],
  // setSelected not working due to state
  //this file is not renaming when we push/pull it 
};
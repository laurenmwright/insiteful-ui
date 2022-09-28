import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Accordion } from "../components";

export default {
  title: 'Stories/Accordion',
  component: Accordion
} as ComponentMeta<typeof Accordion>;

const Template: ComponentStory<typeof Accordion> = (args) => <Accordion {...args} />;

export const Primary = Template.bind({});

Primary.args = {
  primary: true,
  data: [{id: "Test 1", value: "Value 1"}, {id: "Test 2", value: "Value 2"}, {id: "Test 3", value: "Value 3"}],
};
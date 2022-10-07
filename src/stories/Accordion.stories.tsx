import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Accordion } from "../components";

export default {
  title: 'Stories/Components/Accordion',
  component: Accordion
} as ComponentMeta<typeof Accordion>;

const Template: ComponentStory<typeof Accordion> = (args) => <Accordion {...args} />;

export const Primary = Template.bind({});

Primary.args = {
  primary: true,
  data: [{title: "Title 1", content: "Value 1"}, {title: "Title 2", content: "Value 2"}, {title: "Title 3", content: "Value 3"}],
};
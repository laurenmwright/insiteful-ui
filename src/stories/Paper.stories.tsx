import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Paper } from '../components/Paper/Paper';


export default {
  title: 'Stories/Components/Paper',
  component: Paper,
  argTypes: {}
} as ComponentMeta<typeof Paper>;

const Template: ComponentStory<typeof Paper> = (args) => <Paper {...args} />;

export const PaperTemplate = Template.bind({});

PaperTemplate.args = {
  children: "A child!",
};


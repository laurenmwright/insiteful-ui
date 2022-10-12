import React, { Children } from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Button, FormElement, Paper } from '../components';


export default {
  title: 'Stories/Components/Paper',
  component: Paper,
  argTypes: {}
} as ComponentMeta<typeof Paper>;

export const Default = (args) => {
  return <Paper>
    <div><Button primary>Button 1</Button></div>

    <div>A child!</div>

    <div><FormElement>Form Element</FormElement></div>

    <div><Button secondary>Button 2</Button></div>
  </Paper>
}

const Template: ComponentStory<typeof Paper> = (args) => <Paper {...args} />;

// export const Default = Template.bind({});

Default.args = {
  children: "A child!",
};




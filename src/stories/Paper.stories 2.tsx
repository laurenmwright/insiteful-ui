import React, { Children } from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Button, FormElement, Paper, Input } from '../components';


export default {
  title: 'Stories/Components/Paper',
  component: Paper,
  argTypes: {
    width: {
      control: { type: 'number', max: 100, min: 30, step: 1 },
    },
  }
} as ComponentMeta<typeof Paper>;

export const Default = (args) => {
  return (
    <div style={{width: args.width + "%"}}>
      <Paper>
        <FormElement label = "FormElement">
          <Input type = "text" onChange = {() => {}}></Input>
        </FormElement>
        <Button primary>Button 1</Button>

        <div>A child!</div>

        <Button secondary>Button 2</Button>
      </Paper>
    </div>
  )
}




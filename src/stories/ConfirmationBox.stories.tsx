import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ConfirmationBox } from "../components";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Stories/Components/ConfirmationBox',
  component: ConfirmationBox,
  parameters: {
    layout: 'centered',
  },
} as ComponentMeta<typeof ConfirmationBox>;

const Template: ComponentStory<typeof ConfirmationBox> = (args) => <ConfirmationBox {...args} />;

const myConfirm = () => {
    console.log("USER CONFIRMED");
  }
const myCancel = () => {
    console.log("USER CANCELLED");
  }
export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
    popButton: "Click me",
    panelText: "You sure?????",
    onConfirm: myConfirm,
    onCancel: myCancel,
};
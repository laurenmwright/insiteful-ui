import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Modal } from '../lib/components/Modal/modal';

export default {
  title: 'Stories/Modal',
  component: Modal,
  argTypes: {}
} as ComponentMeta<typeof Modal>;

const Template: ComponentStory<typeof Modal> = (args) => <Modal {...args} />;

export const Primary = Template.bind({});

const myTest = () => {
    console.log("test");
  }

Primary.args = {
  children: "Modal",
  isOpen: false,
  closeFunction: myTest(),  
};
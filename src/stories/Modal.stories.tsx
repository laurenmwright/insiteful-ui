import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Modal } from '../components';
import { action } from '@storybook/addon-actions';

export default {
  title: 'Stories/Components/Modal',
  component: Modal,
  argTypes: {
    onClose: {action: ""}
  }
} as ComponentMeta<typeof Modal>;

const Template: ComponentStory<typeof Modal> = (args) => <Modal {...args} />;

export const Primary = Template.bind({});

const myTest = () => {
  console.log("Feather-Icon was clicked!");
}

Primary.args = {
  title: "Title",
  children: "Modal Children",
  isOpen: true,
  onClose: action("Feather-Icon was clicked!")
};
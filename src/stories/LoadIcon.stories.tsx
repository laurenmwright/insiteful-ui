import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Load } from "../components";
import { Loader } from 'react-feather';

export default {
  title: 'Stories/Components/LoadIcon',
  component: Load,
  argTypes: {
    
  },
} as ComponentMeta<typeof Load>;

const Template: ComponentStory<typeof Loader> = (args) => <Loader {...args} />;

// export const Primary = Template.bind({});

export const Primary = (args) => {
    return (
      <div>
        <Load />
      </div>
    );
  };

Primary.args = {
  center: true
  
};
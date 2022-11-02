import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Load } from "../components";
import { Loader } from 'react-feather';
import { bool, string } from 'prop-types';

export default {
  title: 'Stories/Components/LoadIcon',
  component: Load,
  argTypes: {
    overrideColor: {action: 'Color Changed'},
    center: {action: 'Icon Centered'}
  },
} as ComponentMeta<typeof Load>;

const Template: ComponentStory<typeof Loader> = (args) => <Loader {...args} />;

// export const Primary = Template.bind({});

export const Primary = (args) => {
    return (
      <div>
        <Load center={args.center} overrideColor={args.overrideColor}/>
      </div>
    );
  };

Primary.args = {
  center: true,
  overrideColor: 'red'
};
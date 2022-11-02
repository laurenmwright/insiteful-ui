import React from 'react';
import { ComponentMeta } from '@storybook/react';
import { Load } from "../components";

export default {
  title: 'Stories/Components/LoadIcon',
  component: Load,
  argTypes: {
    center: { control: { type: 'boolean' } },
    overrideColor: { control: "text" },
  },
} as ComponentMeta<typeof Load>;


export const Primary = (args) => {
    return (
      <Load {...args}/>
    );
  };

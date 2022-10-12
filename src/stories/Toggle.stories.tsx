import React, {useState} from 'react';
import { ComponentStory, Meta } from '@storybook/react';
import { Toggle } from '../components';
import { useArgs } from "@storybook/client-api";

export default {
  title: "Stories/Components/Toggle",
  component: Toggle,
  argTypes: {
    enabled: {
      control: "select",
      options: [true, false]
    },
    onChange: { table: { disable: true } },

  }
} as Meta;
export const Default = ({ onChange, ...args}) => {
  const [{ enabled }, updateArgs] = useArgs();
  const handleChange = () => updateArgs({ enabled: !enabled });

  return <Toggle onChange={() => updateArgs({ enabled: !enabled })} enabled={args.enabled} label={args.label} />

};

Default.args = {
  enabled: false,
  label: "Enable Notifications "
}

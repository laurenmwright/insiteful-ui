import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Tabs } from "../components";

export default {
  title: "Stories/Components/Tabs",
  component: Tabs
} as ComponentMeta<typeof Tabs>;

const Template: ComponentStory<typeof Tabs> = (args) => <Tabs {...args} />;

export const Primary = Template.bind({});

Primary.args = {
  data: [
    { title: "Recent", content: "Does drinking coffee make you smarter?",},
    { title: "Popular", content: "Is tech making coffee better or worse?"},
    { title: "Trending", content: "10 answers to your questions about coffee"},
  ],
};

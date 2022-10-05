import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import {TabComponent } from "../components";

export default {
  title: "Stories/Components/TabComponent",
  component: TabComponent
} as ComponentMeta<typeof TabComponent>;

const Template: ComponentStory<typeof TabComponent> = (args) => <TabComponent {...args} />;

export const Primary = Template.bind({});

Primary.args = {
  primary: true,
  data: [
    { title: "Recent", content: "Does drinking coffee make you smarter?",},
    { title: "Popular", content: "Is tech making coffee better or worse?"},
    { title: "Trending", content: "10 answers to your questions about coffee"},
  ],
};

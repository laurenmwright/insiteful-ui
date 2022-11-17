import React from "react"
import { ComponentStory, ComponentMeta } from "@storybook/react"
import { Heading2 } from "../components"

export default {
	title: "Stories/Typography/Heading2",
	component: Heading2
} as ComponentMeta<typeof Heading2>

const Template: ComponentStory<typeof Heading2> = (args) => <Heading2 {...args} />

export const Heading2Typography = Template.bind({})

Heading2Typography.args = {
	children: "Heading2"
}

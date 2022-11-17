import React from "react"
import { ComponentStory, ComponentMeta } from "@storybook/react"
import { Placeholder } from "../components"

export default {
	title: "Stories/Typography/Placeholder",
	component: Placeholder
} as ComponentMeta<typeof Placeholder>

const Template: ComponentStory<typeof Placeholder> = (args) => <Placeholder {...args} />

export const PlaceholderTemplate = Template.bind({})

PlaceholderTemplate.args = {
	children: "Placeholder Text"
}

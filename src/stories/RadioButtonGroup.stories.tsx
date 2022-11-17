import React from "react"
import { ComponentStory, ComponentMeta } from "@storybook/react"
import { action } from "@storybook/addon-actions"
import { RadioButtonGroup } from "../components"

export default {
	title: "Stories/Components/RadioButtonGroup",
	component: RadioButtonGroup,
	argTypes: {
		onChanged: { action: "changed" }
	}
} as ComponentMeta<typeof RadioButtonGroup>

const Template: ComponentStory<typeof RadioButtonGroup> = (args) => (
	<RadioButtonGroup {...args} />
)

export const Default = Template.bind({})

Default.args = {
	label: "Select an option:",
	options: [
		{ key: "Test 1", text: "Test 1" },
		{ key: "Test 2", text: "Test 2" },
		{ key: "Test 3", text: "Test 3" }
	],
	onChange: action("RadioButtonGroup is changed!")
}

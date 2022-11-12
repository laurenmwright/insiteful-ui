import React from "react"
import { ComponentStory, ComponentMeta } from "@storybook/react"
import { ConfirmationBox } from "../components"
import { action } from "@storybook/addon-actions"

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
	title: "Stories/Components/ConfirmationBox",
	component: ConfirmationBox,
	subcomponents: { ConfirmationBox },
	parameters: {
		layout: "centered"
	},
	argTypes: {
		onCancel: { action: "clicked" },
		onConfirm: { action: "clicked" }
	}
} as ComponentMeta<typeof ConfirmationBox>

const Template: ComponentStory<typeof ConfirmationBox> = (args) => (
	<ConfirmationBox {...args} />
)

export const Primary = Template.bind({})
Primary.args = {
	popButton: "Click me",
	panelText: "Would you like to proceed?",
	onConfirm: action("user confirmed!"),
	onCancel: action("user canceled!")
}

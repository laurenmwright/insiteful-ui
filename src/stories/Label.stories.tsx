import React from "react"
import { ComponentStory, ComponentMeta } from "@storybook/react"
import { Label } from "../components"

export default {
	title: "Stories/Typography/Label",
	component: Label
} as ComponentMeta<typeof Label>

const Template: ComponentStory<typeof Label> = (args) => <Label {...args} />

export const LabelTemplate = Template.bind({})

LabelTemplate.args = {
	children: "Label"
}

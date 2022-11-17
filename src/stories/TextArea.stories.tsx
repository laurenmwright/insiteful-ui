import React from "react"
import { ComponentStory, ComponentMeta } from "@storybook/react"
import { TextArea } from "../components"

export default {
	title: "Stories/Components/TextArea",
	component: TextArea,
	argTypes: {}
} as ComponentMeta<typeof TextArea>

const Template: ComponentStory<typeof TextArea> = (args) => <TextArea {...args} />

export const Primary = Template.bind({})

Primary.args = {
	label: "",
	placeholderValue: ""
}

import React from "react"
import { ComponentStory, ComponentMeta } from "@storybook/react"
import { Caption2 } from "../components"

export default {
	title: "Stories/Typography/Caption2",
	component: Caption2
} as ComponentMeta<typeof Caption2>

const Template: ComponentStory<typeof Caption2> = (args) => <Caption2 {...args} />

export const Caption2Template = Template.bind({})

Caption2Template.args = {
	children: "Caption2 Typography"
}

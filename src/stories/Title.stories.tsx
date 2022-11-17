import React from "react"
import { ComponentStory, ComponentMeta } from "@storybook/react"
import { Title } from "../components"

export default {
	title: "Stories/Typography/Title",
	component: Title
} as ComponentMeta<typeof Title>

const Template: ComponentStory<typeof Title> = (args) => <Title {...args} />

export const TitleTemplate = Template.bind({})

TitleTemplate.args = {
	children: "Title Typography"
}

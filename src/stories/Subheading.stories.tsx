import React from "react"
import { ComponentStory, ComponentMeta } from "@storybook/react"
import { Subheading } from "../components"

export default {
	title: "Stories/Typography/Subheading",
	component: Subheading
} as ComponentMeta<typeof Subheading>

const Template: ComponentStory<typeof Subheading> = (args) => <Subheading {...args} />

export const SubheadingTypography = Template.bind({})

SubheadingTypography.args = {
	children: "Subheading"
}

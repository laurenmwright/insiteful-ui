import React from "react"
import { ComponentStory, ComponentMeta } from "@storybook/react"
import { Link } from "../components"

export default {
	title: "Stories/Typography/Link",
	component: Link
} as ComponentMeta<typeof Link>

const Template: ComponentStory<typeof Link> = (args) => <Link {...args} />

export const LinkTemplate = Template.bind({})

LinkTemplate.args = {
	children: "Link Typography"
}

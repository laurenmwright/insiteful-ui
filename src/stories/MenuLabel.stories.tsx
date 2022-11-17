import React from "react"
import { ComponentStory, ComponentMeta } from "@storybook/react"
import { MenuLabel } from "../components"

export default {
	title: "Stories/Typography/MenuLabel",
	component: MenuLabel,
	argTypes: {}
} as ComponentMeta<typeof MenuLabel>

const Template: ComponentStory<typeof MenuLabel> = (args) => <MenuLabel {...args} />

export const MenuTemplate = Template.bind({})

MenuTemplate.args = {
	children: "Menu Label Typography"
}

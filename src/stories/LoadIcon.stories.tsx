import React from "react"
import { ComponentMeta } from "@storybook/react"
import { Loader } from "../components"

export default {
	title: "Stories/Components/Loader",
	component: Loader,
	argTypes: {
		center: { control: { type: "boolean" } },
		overrideColor: { control: "text" }
	}
} as ComponentMeta<typeof Loader>

export const Primary = (args) => {
	return <Loader {...args} />
}

import React from "react"
import { Meta } from "@storybook/react"
import { Toggle } from "../components"
import { useArgs } from "@storybook/client-api"

export default {
	title: "Stories/Components/Toggle",
	component: Toggle,
	argTypes: {
		enabled: {
			control: "select",
			options: [true, false]
		},
		onChange: { table: { disable: true } },
		disabled: { control: { type: "boolean" } }
	}
} as Meta
export const Default = ({ onChange, ...args }) => {
	const [{ enabled }, updateArgs] = useArgs()

	return (
		<Toggle
			disabled={args.disabled}
			onChange={() => updateArgs({ enabled: !enabled })}
			value={args.enabled}
			label={args.label}
		/>
	)
}

Default.args = {
	enabled: false,
	label: "Enable Notifications "
}

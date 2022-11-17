import React, { useState } from "react"
import { Meta } from "@storybook/react"
import { Checkbox } from "../components"

export default {
	title: "Stories/Components/Checkbox",
	component: Checkbox,
	argTypes: {
		checked: { table: { disable: true } },
		setChecked: { table: { disable: true } },
		disabled: { control: { type: "boolean" } }
	}
} as Meta

export const Default = (args) => {
	const [value, setValue] = useState<boolean>(true)

	return (
		<Checkbox
			disabled={args.disabled}
			checked={value}
			setChecked={setValue}
			label={args.label}
		/>
	)
}

Default.args = {
	label: "Checkbox"
}

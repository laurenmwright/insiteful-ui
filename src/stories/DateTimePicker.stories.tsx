import React, { useState } from "react"
import { Meta } from "@storybook/react"
import { DateTimePicker } from "../components"

export default {
	title: "Stories/Components/DateTimePicker",
	component: DateTimePicker,
	argTypes: {
		onChange: { table: { disable: true } },
		value: { table: { disable: true } }
	}
} as Meta

export const Default = (args) => {
	const [value, setValue] = useState<string | string>()
	const onChange = (v) => {
		setValue(v)
	}

	return (
		<div>
			<DateTimePicker label={args.label} value={value} onChange={onChange} />
		</div>
	)
}

Default.args = {
	label: "Please choose a date:"
}

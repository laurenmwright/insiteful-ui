import React from "react"
import { Meta } from "@storybook/react"
import { action } from "@storybook/addon-actions"
import { Input } from "../components"
import { FormElement } from "../components"

export default {
	title: "Stories/Components/Input",
	component: Input,
	argTypes: {
		width: {
			control: { type: "number", max: 100, min: 10, step: 1 }
		},
		label: { control: "text" },
		placeholder: { control: "text" },
		onChange: { action: "changed", table: { disable: true } },
		value: { table: { disable: true } },
		type: { table: { disable: true } }
	}
} as Meta

export const Default = ({ label, width, args }) => (
	<div style={{ width: width + "%" }}>
		<FormElement label={label}>
			<Input {...args} type="text" onChange={action("Input is changed!")} />
		</FormElement>
	</div>
)

Default.args = {
	label: "Type value here:",
	placeholder: "Input text..."
}

export const Number = ({ label, width, args }) => (
	<div style={{ width: width + "%" }}>
		<FormElement label={label}>
			<Input {...args} type="number" onChange={action("Input is changed!")} />
		</FormElement>
	</div>
)

Number.args = {
	label: "Input number here: ",
	placeholder: "Type number..."
}

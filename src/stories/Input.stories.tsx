import React from "react"
import { Meta } from "@storybook/react"
import { action } from "@storybook/addon-actions"

import { Input, FormElement } from "../components"

export default {
	title: "Stories/Components/Input",
	component: Input,
	argTypes: {
		placeholder: { control: "text" },
		onChange: { action: "changed", table: { disable: true } },
		value: { table: { disable: true } },
		type: { table: { disable: true } },
		className: { table: { disable: true } }
	}
} as Meta

export const Text = (args) => (
	<FormElement label="Text input:" className="p-4 max-w-xs">
		<Input {...args} onChange={action("Input is changed!")} />
	</FormElement>
)

Text.args = {
	placeholder: "Input text..."
}

export const Number = (args) => (
	<FormElement label="Number input:" className="p-4 max-w-xs">
		<Input {...args} type="number" onChange={action("Input is changed!")} />
	</FormElement>
)

Number.args = {
	placeholder: "Input number..."
}

export const Password = (args) => (
	<FormElement label="Password input:" className="p-4 max-w-xs">
		<Input {...args} type="password" onChange={action("Input is changed!")} />
	</FormElement>
)

Password.args = {
	placeholder: "Input password..."
}

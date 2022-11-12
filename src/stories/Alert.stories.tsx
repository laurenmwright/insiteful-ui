import React from "react"
import { Meta } from "@storybook/react"
import { Alert } from "../components"

export default {
	title: "Stories/Components/Alert",
	component: Alert,
	argTypes: {
		variant: {
			options: ["error", "success", "notification"],
			control: { type: "radio" }
		},
		notification: { table: { disable: true } },
		error: { table: { disable: true } },
		success: { table: { disable: true } }
	}
} as Meta

export const Default = (args) => {
	if (args.variant === "error") {
		return <Alert error message={args.message} />
	} else if (args.variant === "success") {
		return <Alert success message={args.message} />
	} else {
		return <Alert notification message={args.message} />
	}
}

Default.args = {
	message: "Important information for the user",
	variant: "error"
}

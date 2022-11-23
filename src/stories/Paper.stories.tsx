import React from "react"
import { ComponentMeta } from "@storybook/react"
import { Button, FormElement, Paper, Input, Title } from "../components"

export default {
	title: "Stories/Components/Paper",
	component: Paper,
	argTypes: {
		width: {
			control: { type: "number", max: 100, min: 30, step: 1 }
		}
	}
} as ComponentMeta<typeof Paper>

export const Default = (args) => {
	return (
		<div style={{ width: args.width + "%" }}>
			<Paper>
				<Title className="text-gray-darker pb-3">Create new user</Title>
				<FormElement label="Name">
					<Input type="text" onChange={() => {}} />
				</FormElement>
				<FormElement label="Username">
					<Input type="text" onChange={() => {}} />
				</FormElement>
				<FormElement label="Email">
					<Input type="text" onChange={() => {}} />
				</FormElement>
				<Button primary>Submit</Button>
			</Paper>
		</div>
	)
}

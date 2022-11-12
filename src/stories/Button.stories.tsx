import React from "react"
import { Meta } from "@storybook/react"
import { action } from "@storybook/addon-actions"
import { Button } from "../components"

export default {
	title: "Stories/Components/Button",
	component: Button,
	subcomponents: { Button },
	argTypes: {
		variant: {
			options: ["primary", "secondary"],
			control: { type: "radio" }
		},
		outline: { control: "boolean" },
		simple: { control: "boolean" },
		darkFont: { control: "boolean" },
		disabled: { control: "boolean" },
		link: { control: "text" },

		onClick: { action: "clicked", table: { disable: true } },
		primary: { table: { disable: true } },
		secondary: { table: { disable: true } },
		editor: { table: { disable: true } },
		type: { table: { disable: true } }
	}
} as Meta

export const Default = ({ variant, outline, ...args }) => {
	if (variant === "primary") {
		console.log(args)
		return <Button primary outline={outline} {...args} />
	} else {
		return <Button secondary outline={outline} {...args} />
	}
}

Default.args = {
	variant: "primary",
	outline: false,
	darkFont: false,
	children: "Click Me!",
	disabled: false,
	link: "",
	onClick: action("Button is clicked!")
}

export const WithIcon = ({ variant, outline, ...args }) => {
	if (variant === "primary") {
		console.log(args)
		return <Button primary outline={outline} {...args} />
	} else {
		return <Button secondary outline={outline} {...args} />
	}
}

WithIcon.args = {
	variant: "primary",
	outline: false,
	darkFont: false,
	disabled: false,
	link: "",
	children: (
		<div style={{ display: "flex", gap: 10 }}>
			<div>🔍</div>
			<div>Search</div>
		</div>
	),
	onClick: action("Button is clicked!")
}

export const SimpleButton = ({ variant, outline, ...args }) => {
	return <Button simple {...args} />
}

SimpleButton.args = {
	simple: true,
	outline: false,
	darkFont: false,
	disabled: false,
	children: "Cancel",
	onClick: action("Button is clicked!")
}

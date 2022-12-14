import React from "react"
import { Meta } from "@storybook/react"
import { ProgressBar } from "../components"

export default {
	title: "Stories/Components/ProgressBar",
	component: ProgressBar,
	argTypes: {}
} as Meta

export const Default = (args) => (
	<div style={{ width: args.width + "%" }}>
		<ProgressBar
			percentage={args.percentage}
			numerator={args.numerator}
			denominator={args.denominator}
		/>
	</div>
)

Default.args = {
	numerator: 2,
	denominator: 5
}

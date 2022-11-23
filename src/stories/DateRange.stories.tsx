import React, { useState } from "react"
import { Meta } from "@storybook/react"
import { DateRange } from "../components"

export default {
	title: "Stories/Components/DateRange",
	component: DateRange,
	argTypes: {
		startDate: { table: { disable: true } },
		endDate: { table: { disable: true } },
		setStartDate: { table: { disable: true } },
		setEndDate: { table: { disable: true } }
	}
} as Meta

export const Default = (args) => {
	const [startDate, setStartDate] = useState("2020-10-10")
	const [endDate, setEndDate] = useState("2020-10-30")

	return (
		<div>
			<DateRange
				startLabel={args.startLabel}
				endLabel={args.endLabel}
				start={startDate}
				end={endDate}
				setStart={setStartDate}
				setEnd={setEndDate}
			/>{" "}
		</div>
	)
}

Default.args = {
	startLabel: "Please Select a Platform:",
	endLabel: "Please Select a Platform:"
}

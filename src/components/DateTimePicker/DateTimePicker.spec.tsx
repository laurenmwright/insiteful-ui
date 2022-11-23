import React from "react"
import { fireEvent, render, screen } from "@testing-library/react"

import { DateTimePicker } from "./DateTimePicker"

test("renders date time picker", () => {
	render(<DateTimePicker value="2016-01-04T10:34:23.000" />)

	const DateRangeElement = screen.getByTestId("date-time-picker")

	expect(DateRangeElement).toHaveValue("2016-01-04T10:34:23.000")
})

test("on change gets called", async () => {
	const hello = jest.fn()

	render(<DateTimePicker onChange={hello} />)

	const DateTimeElement = screen.getByTestId("date-time-picker")

	await fireEvent.change(DateTimeElement, {
		target: { value: "2016-01-04T10:34:23.000" }
	})

	expect(hello).toHaveBeenCalled()
})

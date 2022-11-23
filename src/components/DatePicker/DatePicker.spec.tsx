import React from "react"
import { fireEvent, render, screen } from "@testing-library/react"
import { DatePicker } from "./DatePicker"

test("renders date picker", () => {
	const hello = jest.fn()

	render(<DatePicker value="1999-01-30" onChange={hello} />)

	const DateRangeElement = screen.getByTestId("date-picker")

	expect(DateRangeElement).toHaveValue("1999-01-30")
})

test("correctly renders styles", () => {
	const hello = jest.fn()

	render(<DatePicker value="" onChange={hello} />)

	const DateRangeElement = screen.getByTestId("date-picker")

	expect(DateRangeElement).toHaveStyle({ width: "15rem;" })
})

test("on change gets called", async () => {
	const hello = jest.fn()

	render(<DatePicker value="" onChange={hello} />)

	const DateRangeElement = screen.getByTestId("date-picker")

	await fireEvent.change(DateRangeElement, { target: { value: "2020-05-12" } })

	expect(hello).toHaveBeenCalled()
})

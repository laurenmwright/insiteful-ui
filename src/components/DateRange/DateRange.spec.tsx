import React from "react"
import { fireEvent, render, screen } from "@testing-library/react"
import { DateRange } from "./DateRange"

test("correctly renders label", () => {
	const hello = jest.fn()

	render(
		<DateRange
			startLabel={"Please choose a start date:"}
			endLabel={"Please choose an end date:"}
			start={"2020-10-10"}
			end={"2020-10-30"}
			setStart={hello}
			setEnd={hello}
		/>
	)

	const dateRangeElement = screen.getByText("Please choose a start date:")

	expect(dateRangeElement).toBeInTheDocument()
})

test("correctly renders both date pickers", () => {
	const hello = jest.fn()

	render(
		<DateRange
			startLabel={"Please choose a start date:"}
			start={"2020-10-10"}
			setStart={hello}
			endLabel={"Please choose an end date:"}
			end={"2020-10-30"}
			setEnd={hello}
		/>
	)

	const DatePickerElements = [
		screen.getByTestId("start-date"),
		screen.getByTestId("end-date")
	]

	expect(DatePickerElements[0]).toHaveValue("2020-10-10")
	expect(DatePickerElements[1]).toHaveValue("2020-10-30")
})

test("allows you to set values for both date pickers", async () => {
	const hello1 = jest.fn()
	const hello2 = jest.fn()

	render(
		<DateRange
			startLabel="Please choose a start date:"
			start="2020-10-10"
			setStart={hello1}
			endLabel="Please choose an end date:"
			end="2020-10-30"
			setEnd={hello2}
		/>
	)

	const DateRangeElement = screen.getByTestId("start-date")
	const DateRangeElement2 = screen.getByTestId("end-date")

	await fireEvent.change(DateRangeElement, { target: { value: "2020-05-10" } })
	await fireEvent.change(DateRangeElement2, { target: { value: "2020-05-30" } })

	expect(hello1).toHaveBeenCalled()
	expect(hello2).toHaveBeenCalled()
})

import React from "react"
import { fireEvent, render, screen } from "@testing-library/react"
import { ConfirmationBox } from "./ConfirmationBox"

test("renders popover button text", () => {
	render(<ConfirmationBox button="Open Confirmation Box">Are you sure??</ConfirmationBox>)

	const dropdownElement = screen.getByTestId("popbutton")

	expect(dropdownElement).toHaveTextContent("Open Confirmation Box")
})

test("renders popover when clicked", () => {
	render(
		<ConfirmationBox button="Open Confirmation Box">
			Are you sure you want to proceed?
		</ConfirmationBox>
	)

	const dropdownElement = screen.getByTestId("popbutton")

	// fails when fireEvent click is removed proving that the panel is rendering properly when clicked.
	fireEvent.click(dropdownElement)

	const panelTextElement = screen.getByTestId("div")

	expect(panelTextElement).toHaveTextContent("Are you sure you want to proceed?")
})
test("calls onConfirm", () => {
	const hello = jest.fn()

	render(
		<ConfirmationBox button="Open Confirmation Box" onConfirm={hello}>
			Are you sure you want to proceed?
		</ConfirmationBox>
	)

	const dropdownElement = screen.getByTestId("popbutton")

	fireEvent.click(dropdownElement)

	const yesButtonElement = screen.getByText(/Continue/i)

	fireEvent.click(yesButtonElement)

	expect(hello).toHaveBeenCalled()
})
test("calls onCancel", () => {
	const hello = jest.fn()

	render(
		<ConfirmationBox button="Open Confirmation Box" onCancel={hello}>
			Are you sure you want to proceed?
		</ConfirmationBox>
	)

	const dropdownElement = screen.getByTestId("popbutton")

	fireEvent.click(dropdownElement)

	const noButtonElement = screen.getByText(/Cancel/i)

	fireEvent.click(noButtonElement)

	expect(hello).toHaveBeenCalled()
})

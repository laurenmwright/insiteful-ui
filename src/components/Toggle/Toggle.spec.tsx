import * as React from "react"
import { fireEvent, render, screen } from "@testing-library/react"
import { Toggle } from "./Toggle"

test("renders toggle correctly", () => {
	render(<Toggle label={"Label"} value={true} onChange={() => {}} />)

	const toggleElement = screen.getByTestId("div")

	expect(toggleElement).toContainElement(screen.getByText(/Label/i))
	expect(toggleElement).toContainElement(screen.getByTestId("switch"))
	expect(toggleElement).toContainElement(screen.getByTestId("circle"))
})

test("renders toggle with correct disabled color", () => {
	render(<Toggle label="Label" value={false} onChange={() => {}} />)

	const toggleElement = screen.getByTestId("switch")

	expect(toggleElement).toHaveClass("bg-lightGray")
})

test("enable changes toggle color", () => {
	render(<Toggle label="Label" value={true} onChange={() => {}} />)

	const toggleElement = screen.getByTestId("switch")

	fireEvent.click(toggleElement)

	expect(toggleElement).toHaveClass("bg-actionBlue")
})

//TODO: see if what is getting selecting is changing in state!
test("changing state when selecting an option", () => {
	const setStateMock = jest.fn()
	const useStateMock: any = (value) => [value, setStateMock]

	jest.spyOn(React, "useState").mockImplementation(useStateMock)

	render(<Toggle label={"Label"} value={true} onChange={setStateMock} />)

	const toggleElement = screen.getByTestId("switch")

	fireEvent.click(toggleElement)

	expect(setStateMock).toHaveBeenCalled()
})

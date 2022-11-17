import * as React from "react"
import { fireEvent, render, screen } from "@testing-library/react"
import { Dropdown } from "./Dropdown"

const dropdownOpts = [
	{ value: "opt1" },
	{ value: "opt2", label: "Option 2" },
	{ value: "opt3", label: "Option 3" }
]

test("renders dropdown correctly", () => {
	render(
		<Dropdown
			label={"Label"}
			options={dropdownOpts}
			selected={"string"}
			onChange={() => {}}
		/>
	)

	const dropdownElement = screen.getByTestId("div")

	expect(dropdownElement).toContainElement(screen.getByTestId("form-element"))
	expect(dropdownElement).toContainElement(screen.getByTestId("listbox"))
	expect(dropdownElement).toContainElement(screen.getByTestId("buttonAndOptions"))
})

test("dropdown opens and displays options correctly", () => {
	render(
		<Dropdown
			label={"Label"}
			options={dropdownOpts}
			selected={"string"}
			onChange={() => {}}
		/>
	)

	const buttonElement = screen.getByTestId("button")

	fireEvent.click(buttonElement)

	const optionElement = screen.getByTestId("1")

	expect(optionElement).toHaveClass("relative cursor-default select-none py-2 pl-10 pr-4")
})

test("testing that select... renders when no selected option is passed", () => {
	const hello = jest.fn()

	render(
		<Dropdown label={"Label"} options={dropdownOpts} selected={null} onChange={hello} />
	)

	const buttonTextElement = screen.getByTestId("button-text")

	expect(buttonTextElement).toHaveTextContent("Select...")
})

test("testing that an option label renders correctly", () => {
	const hello = jest.fn()

	render(
		<Dropdown label={"Label"} options={dropdownOpts} selected={null} onChange={hello} />
	)

	const buttonElement = screen.getByTestId("button")

	fireEvent.click(buttonElement)

	const optionElement = screen.getByTestId("0")

	expect(optionElement).toHaveTextContent("opt1")
})

test("passing a selected option works", () => {
	const hello = jest.fn()

	render(
		<Dropdown label={"Label"} options={dropdownOpts} selected={"opt1"} onChange={hello} />
	)

	const buttonElement = screen.getByTestId("button")

	fireEvent.click(buttonElement)

	const check = screen.getByTestId("check")

	expect(check).toBeInTheDocument()
})

//TODO: see if what is getting selecting is changing in state!
test("changing state when selecting an option", () => {
	const setStateMock = jest.fn()
	const useStateMock: any = (useState: any) => [useState, setStateMock]

	jest.spyOn(React, "useState").mockImplementation(useStateMock)

	render(
		<Dropdown
			label={"Label"}
			options={dropdownOpts}
			selected={"selected"}
			onChange={setStateMock}
		/>
	)

	const buttonElement = screen.getByTestId("button")

	fireEvent.click(buttonElement)

	const optionElement = screen.getByTestId("1")

	fireEvent.click(optionElement)

	expect(setStateMock).toHaveBeenCalled()
})

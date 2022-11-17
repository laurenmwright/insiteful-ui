import * as React from "react"
import { fireEvent, render, screen } from "@testing-library/react"
import { Checkbox } from "./Checkbox"

test("renders checkbox correctly", () => {
	render(<Checkbox label={"Checkbox"} checked={true} setChecked={() => {}} />)

	const checkboxElement = screen.getByTestId("checkbox")

	expect(checkboxElement).toContainElement(screen.getByTestId("input"))
	expect(checkboxElement).toContainElement(screen.getByTestId("span"))
})

test("testing the disabled prop", () => {
	render(<Checkbox disabled label={"Checkbox"} checked={true} setChecked={() => {}} />)

	const checkboxElement = screen.getByTestId("input")

	expect(checkboxElement).toBeDisabled()
})

//TODO: See if it is possible to actually test a state change!
test("checking/unchecking the checkbox correctly changes state", () => {
	const setStateMock = jest.fn()
	const useStateMock: any = (useState: any) => [useState, setStateMock]

	jest.spyOn(React, "useState").mockImplementation(useStateMock)

	render(
		<Checkbox label={"Checkbox"} checked={useStateMock(true)} setChecked={setStateMock} />
	)

	const checkboxElement = screen.getByTestId("input")

	fireEvent.click(checkboxElement)

	expect(setStateMock).toHaveBeenCalled()
})

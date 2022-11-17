import React from "react"
import { fireEvent, render, screen } from "@testing-library/react"
import { RadioButtonGroup } from "./RadioButtonGroup"

test("renders radio button group with correct label text", () => {
	const hello = jest.fn()

	render(
		<RadioButtonGroup
			onChange={hello}
			isSelected={""}
			options={[{ key: "Test 1", text: "Test 1" }]}
			label={"Label"}
		/>
	)

	const radioButtonElement = screen.getByLabelText("Label")

	expect(radioButtonElement).toBeInTheDocument()
})

test("renders radio button group with correct options", () => {
	const hello = jest.fn()

	const radioData = [
		{ key: "Test 1", text: "Test 1" },
		{ key: "Test 2", text: "Test 2" },
		{ key: "Test 3", text: "Test 3" }
	]

	render(
		<RadioButtonGroup
			onChange={hello}
			isSelected={""}
			options={radioData}
			label={"Label"}
		/>
	)

	const radioButtonElement = screen.getByText("Test 3")

	expect(radioButtonElement).toBeInTheDocument()
})

test("renders radio button group with working onchange function", () => {
	const hello = jest.fn()

	const radioData = [
		{ key: "Test 1", text: "Test 1" },
		{ key: "Test 2", text: "Test 2" },
		{ key: "Test 3", text: "Test 3" }
	]

	render(
		<RadioButtonGroup
			onChange={hello}
			isSelected={""}
			options={radioData}
			label={"Label"}
		/>
	)

	fireEvent.click(screen.getByText(/Test 3/i))

	expect(hello).toHaveBeenCalled()
})

test("renders radio button group with correct selected option", () => {
	const hello = jest.fn()

	const radioData = [
		{ key: "Test 1", text: "Test 1" },
		{ key: "Test 2", text: "Test 2" },
		{ key: "Test 3", text: "Test 3" }
	]

	render(
		<RadioButtonGroup
			onChange={hello}
			isSelected={"Test 1"}
			options={radioData}
			label={"Label"}
		/>
	)

	const circle = screen.getByTestId("Test 1")

	expect(circle).toBeInTheDocument()
})

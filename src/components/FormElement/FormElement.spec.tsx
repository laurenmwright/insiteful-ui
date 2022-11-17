import React from "react"
import { fireEvent, render, screen } from "@testing-library/react"
import { Button } from "../Button"
import { FormElement } from "./FormElement"

test("renders button inside of a form element", () => {
	render(
		<FormElement label="Label">
			<Button>My Button</Button>
		</FormElement>
	)

	const formElement = screen.getByTestId("form-element")
	const labelElement = screen.getByText(/Label/i)
	const buttonElement = screen.getByText(/My Button/i)

	expect(formElement).toBeInTheDocument()
	expect(labelElement).toBeInTheDocument()
	expect(buttonElement).toBeInTheDocument()
})

test("renders button inside form element with override color", () => {
	render(
		<FormElement>
			<Button primary className="text-[red]">
				My Button
			</Button>
		</FormElement>
	)

	const buttonElement = screen.getByText(/My Button/i)

	expect(buttonElement).toHaveClass("text-[red]")
})

test("renders button inside form element with working onclick function", () => {
	const hello = jest.fn()

	render(
		<FormElement>
			<Button onClick={hello}>My Form</Button>{" "}
		</FormElement>
	)

	fireEvent.click(screen.getByText(/My Form/i))

	expect(hello).toHaveBeenCalled()
})

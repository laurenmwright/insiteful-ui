import React from "react"
import { fireEvent, render, screen } from "@testing-library/react"
import { Button } from "./Button"

/**
 * Button Component Tests
 * To Do:
 * 1. Test simple
 * 2. Test disabled
 */

test("renders button with correct text", () => {
	render(<Button primary>My Button</Button>)

	const buttonElement = screen.getByText(/My Button/i)

	expect(buttonElement).toBeInTheDocument()
})

test("renders regular button with override color", () => {
	render(
		<Button primary className="bg-[red]">
			My Button
		</Button>
	)

	const buttonElement = screen.getByText(/My Button/i)

	expect(buttonElement).toHaveClass("bg-[red]")
})

test("renders outline button with override color", () => {
	render(
		<Button outline className="border-[red]">
			My Button
		</Button>
	)

	const buttonElement = screen.getByText(/My Button/i)

	expect(buttonElement).toHaveClass("border-[red]")
})

test("renders button with simple prop", () => {
	render(
		<Button simple className="text-[red]">
			My Button
		</Button>
	)

	const buttonElement = screen.getByText(/My Button/i)

	expect(buttonElement).toHaveClass("text-[red]")
})

test("renders button with working onclick function", () => {
	const hello = jest.fn()

	render(<Button onClick={hello}> My Button</Button>)

	fireEvent.click(screen.getByText(/My Button/i))

	expect(hello).toHaveBeenCalled()
})

test("testing the disabled prop", () => {
	render(<Button disabled type={"button"} />)

	const buttonElement = screen.getByTestId("Button")

	expect(buttonElement).toBeDisabled()
})

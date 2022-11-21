import React from "react"
import { fireEvent, render, screen } from "@testing-library/react"
import { BrowserRouter } from "react-router-dom"

import { Button } from "./Button"

/**
 * Button Component Tests
 * To Do:
 * 1. Test simple
 * 2. Test disabled
 */

test("renders button with correct text", () => {
	render(<Button>My Button</Button>)

	const button = screen.getByTestId("button")

	expect(button).toHaveTextContent("My Button")
})

test("adds additional classes to button", () => {
	render(<Button className="bg-[red]">My Button</Button>)

	const button = screen.getByTestId("button")

	expect(button).toHaveClass("bg-[red]")
})

test("adds onClick to button", () => {
	const hello = jest.fn()

	render(<Button onClick={hello}> My Button</Button>)

	fireEvent.click(screen.getByTestId("button"))

	expect(hello).toHaveBeenCalled()
})

test("renders disabled button", () => {
	render(<Button disabled />)

	const buttonElement = screen.getByTestId("button")

	expect(buttonElement).toBeDisabled()
})

test("renders an anchor if `to` is passed", () => {
	render(
		<BrowserRouter>
			<Button to="/" />
		</BrowserRouter>
	)

	const buttonElement = screen.getByTestId("button")

	expect(buttonElement).toBeInstanceOf(HTMLAnchorElement)
})

test("renders a disabled button if `to` is passed with disabled", () => {
	render(<Button to="/" disabled />)

	const buttonElement = screen.getByTestId("button")

	expect(buttonElement).toBeInstanceOf(HTMLButtonElement)
})

test("renders an anchor if `href` is passed", () => {
	render(<Button href="https://google.com" />)

	const buttonElement = screen.getByTestId("button")

	expect(buttonElement).toBeInstanceOf(HTMLAnchorElement)
})

test("renders a disabled button if `href` is passed with disabled", () => {
	render(<Button href="https://google.com" disabled />)

	const buttonElement = screen.getByTestId("button")

	expect(buttonElement).toBeInstanceOf(HTMLButtonElement)
})

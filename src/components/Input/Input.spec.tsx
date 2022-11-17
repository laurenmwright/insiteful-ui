import React from "react"
import { render, screen } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import { Input } from "./Input"

test("correctly renders input", () => {
	const hello = jest.fn()

	render(<Input type="number" onChange={hello} />)

	expect(screen.getByTestId("input-box")).toBeInTheDocument()
})

test("correctly renders styling", () => {
	const hello = jest.fn()

	render(<Input type="number" onChange={hello} />)

	expect(screen.getByTestId("input-box")).toHaveClass(
		"shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
	)
})

test("on change gets called", async () => {
	const hello = jest.fn()

	render(<Input type="text" onChange={hello} />)

	const input = screen.getByTestId("input-box")

	await userEvent.type(input, "Test Text")

	expect(hello).toHaveBeenCalled()
})

test("number input allows numbers and has correct type", () => {
	const hello = jest.fn()

	render(<Input type="number" onChange={hello} />)

	const input = screen.getByTestId("input-box")

	userEvent.type(input, "text")

	expect(hello).toHaveBeenCalledTimes(0)
	expect(input).toHaveAttribute("type", "number")
})

test("Number input type only allows numbers", () => {
	const hello = jest.fn()

	render(<Input type="number" onChange={hello} />)

	const input = screen.getByTestId("input-box")

	userEvent.type(input, "text")

	expect(hello).toHaveBeenCalledTimes(0)
})

test("password input numbers", async () => {
	const hello = jest.fn()

	render(<Input type="password" onChange={hello} />)

	const inputElement = screen.getByTestId("input-box")

	expect(inputElement).toHaveAttribute("type", "password")
})

test("accepts a value", async () => {
	const hello = jest.fn()

	render(<Input type="text" onChange={hello} value="This is a default value" />)

	const inputElement = screen.getByTestId("input-box")

	expect(inputElement).toHaveValue("This is a default value")
})

import React from "react"
import { fireEvent, render, screen } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import { Input } from "./Input"

test("renders input", () => {
	const hello = jest.fn()

	render(<Input onChange={hello} />)

	expect(screen.getByTestId("input-box")).toBeInTheDocument()
})

test("passes value to input", async () => {
	render(<Input type="text" value="This is a default value" />)

	const inputElement = screen.getByTestId("input-box")

	expect(inputElement).toHaveValue("This is a default value")
})

test("onChange gets called", async () => {
	const hello = jest.fn()

	render(<Input type="text" onChange={hello} />)

	const input = screen.getByTestId("input-box")

	await userEvent.type(input, "Test Text")

	expect(hello).toHaveBeenCalled()
})

test("number input has correct type", () => {
	render(<Input type="number" />)

	const input = screen.getByTestId("input-box")

	expect(input).toHaveAttribute("type", "number")
})

describe("password input", () => {
	test("renders in dom", () => {
		render(<Input type="password" />)

		const input = screen.getByTestId("input-box")

		expect(input).toBeInTheDocument()
	})

	test("accepts a placeholder", async () => {
		render(<Input type="password" placeholder="This is a default placeholder" />)

		const input = screen.getByTestId("input-box")

		expect(input).toHaveAttribute("placeholder", "This is a default placeholder")
	})

	test("defaults to password hidden", async () => {
		render(<Input type="password" value="This is a default value" />)

		const input = screen.getByTestId("input-box")

		expect(input).toHaveAttribute("type", "password")
	})

	test("button toggles visibility of password", async () => {
		render(<Input type="password" value="This is a default value" />)

		const input = screen.getByTestId("input-box")
		const hideButton = screen.getByTestId("hide-icon")

		fireEvent.click(hideButton)

		expect(input).toHaveAttribute("type", "text")
	})
})

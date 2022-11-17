import React from "react"
import { fireEvent, render, screen } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import { PasswordInput } from "./PasswordInput"

test("correctly renders PasswordInput", () => {
	const hello = jest.fn()
	render(<PasswordInput onChange={hello} />)

	expect(screen.getByTestId("password-input-box")).toBeInTheDocument()
})

test("correctly renders styling", () => {
	const hello = jest.fn()

	render(<PasswordInput onChange={hello} />)

	expect(screen.getByTestId("password-input-box")).toHaveClass(
		"shadow-none ring-0 border-0 outline-none w-full"
	)
})

test("on change gets called", async () => {
	const hello = jest.fn()

	render(<PasswordInput onChange={hello} />)

	const passwordInput = screen.getByTestId("password-input-box")

	await userEvent.type(passwordInput, "Test Text")

	expect(hello).toHaveBeenCalled()
})

test("accepts a value", async () => {
	const hello = jest.fn()

	render(<PasswordInput onChange={hello} value="This is a default value" />)

	const passwordInput = screen.getByTestId("password-input-box")

	expect(passwordInput).toHaveValue("This is a default value")
})

test("accepts a placeholder", async () => {
	const hello = jest.fn()

	render(<PasswordInput onChange={hello} placeholder="This is a default placeholder" />)

	const passwordInput = screen.getByPlaceholderText("This is a default placeholder")

	expect(passwordInput).toBeInTheDocument()
})

test("testing hide password icon", async () => {
	const hello = jest.fn()

	render(<PasswordInput onChange={hello} value="This is a default value" />)

	const hideButton = screen.getByTestId("hide-icon")

	expect(screen.getByTestId("eye")).toBeInTheDocument()

	fireEvent.click(hideButton)

	expect(screen.getByTestId("eye-off")).toBeInTheDocument()
})

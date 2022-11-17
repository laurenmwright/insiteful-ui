import React from "react"
import { render, screen } from "@testing-library/react"
import { Alert } from "./Alert"

test("renders alert message correctly", () => {
	render(<Alert message="message" notification={true} />)

	const alertElement = screen.getByText("message")

	expect(alertElement).toHaveTextContent("message")
})

test("renders notification correctly", () => {
	render(<Alert message="message" notification={true} />)

	const notificationElement = screen.getByTestId("notification")

	expect(notificationElement).toBeInTheDocument()
})

test("renders success correctly", () => {
	render(<Alert message="message" success={true} />)

	const successElement = screen.getByTestId("success")

	expect(successElement).toBeInTheDocument()
})

test("renders error correctly", () => {
	render(<Alert message="message" error={true} />)

	const errorElement = screen.getByTestId("error")

	expect(errorElement).toBeInTheDocument()
})

import React from "react"
import { render, screen } from "@testing-library/react"
import { TextArea } from "./TextArea"

test("Correctly renders label", () => {
	render(<TextArea label={"Label Text"} />)

	const TextAreaElement = screen.getByText("Label Text")

	expect(TextAreaElement).toHaveTextContent("Label Text")
})

test("Correctly renders placeholderValue", () => {
	render(<TextArea placeholder="Placeholder Text" />)

	const TextAreaElement = screen.getByPlaceholderText("Placeholder Text")

	expect(TextAreaElement).toBeInTheDocument()
})

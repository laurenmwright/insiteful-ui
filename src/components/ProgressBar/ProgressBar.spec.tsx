import React from "react"
import { render, screen } from "@testing-library/react"
import { ProgressBar } from "./ProgressBar"

test("renders percentage correctly", () => {
	render(<ProgressBar percentage={44}></ProgressBar>)

	const progressBarElement = screen.getByTestId("progress-bar")

	expect(progressBarElement).toHaveValue(44 / 100)
})

test("if progress bar background is action blue", () => {
	render(<ProgressBar numerator={2} denominator={5}></ProgressBar>)

	const progressBarElement = screen.getByTestId("progress-bar")

	expect(progressBarElement).toHaveStyle({ backgroundColor: "#actionBlue" })
})

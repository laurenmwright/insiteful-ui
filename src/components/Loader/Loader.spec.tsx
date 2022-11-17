import * as React from "react"

import { render, screen } from "@testing-library/react"

import { Loader } from "./Loader"

test("renders icon correctly", () => {
	render(<Loader />)

	const LoadElement = screen.getByTestId("Feather-Icon-Loader")

	expect(LoadElement).toContainElement(screen.getByTestId("Feather-Icon-Loader"))
})

test("Correctly applies the centered styling prop", () => {
	render(<Loader center />)

	const LoadElement = screen.getByTestId("Div-Style")

	expect(LoadElement).toHaveClass("absolute top-1/2 left-1/2")
})

test("Correctly applies override color to loading icon", () => {
	render(<Loader color="red" />)

	const LoadElement = screen.getByTestId("Feather-Icon-Loader")

	expect(LoadElement).toHaveStyle({ color: "red;" })
})

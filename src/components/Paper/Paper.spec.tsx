import React from "react"
import { render, screen } from "@testing-library/react"
import { Paper } from "./Paper"
import { Button } from "../Button"
import { Heading1 } from "../Typography"

test("correctly renders paper with a white background", () => {
	render(<Paper children="It's got the juice!" />)

	const PaperElement = screen.getByTestId("Paper-Div")

	expect(PaperElement).toHaveStyle({ backgroundColor: "#white" })
})

test("accepts all types of children", () => {
	render(
		<Paper>
			<Button primary>Button 1</Button>

			<Heading1>It's got the Juice!</Heading1>

			<Button secondary>Button 2</Button>
		</Paper>
	)

	const PaperElement = screen.getByTestId("Paper-Div")
	const PaperChild1 = screen.getByText("Button 1")
	const PaperChild2 = screen.getByText("Button 2")
	const PaperChild3 = screen.getByText("It's got the Juice!")

	expect(PaperElement).toContainElement(PaperChild1)
	expect(PaperElement).toContainElement(PaperChild2)
	expect(PaperElement).toContainElement(PaperChild3)
})

import React from "react"
import { render, screen } from "@testing-library/react"
import {
	Heading1,
	Heading2,
	Title,
	Subheading,
	Link,
	ButtonTypography,
	Placeholder,
	Caption1,
	Caption2,
	MenuLabel
} from "./Typography"

test("renders Heading1 with correct text", () => {
	render(<Heading1>Heading1</Heading1>)

	const heading1Element = screen.getByText(/Heading1/i)

	expect(heading1Element).toBeInTheDocument()
})

test("renders Heading1 with additional classes", () => {
	render(<Heading1 className="text-lg">Heading1</Heading1>)
	const heading1Element = screen.getByText(/Heading1/i)
	expect(heading1Element).toHaveClass("text-lg")
})

test("renders Heading2 with correct text", () => {
	render(<Heading2 className="text-red-500">Heading2</Heading2>)
	const heading2Element = screen.getByText(/Heading2/i)
	expect(heading2Element).toBeInTheDocument()
})

test("renders Heading2 with additional classes", () => {
	render(<Heading2 className="text-lg">Heading2</Heading2>)
	const heading2Element = screen.getByText(/Heading2/i)
	expect(heading2Element).toHaveClass("text-lg")
})
//-------------------------------------------------------------

//Title
//-------------------------------------------------------------
test("renders Title with correct text", () => {
	render(<Title>Title</Title>)
	const titleElement = screen.getByText(/Title/i)
	expect(titleElement).toBeInTheDocument()
})

test("renders Title with additional classes", () => {
	render(<Title className="text-lg">Title</Title>)
	const titleElement = screen.getByText(/Title/i)
	expect(titleElement).toHaveClass("text-lg")
})

test("renders caption with correct text", () => {
	const table = document.createElement("table")

	render(<Caption1>Caption1</Caption1>, {
		container: document.body.appendChild(table)
	})

	const captionElement = screen.getByText(/Caption1/i)

	expect(captionElement).toBeInTheDocument()
})

test("renders caption with additional classes", () => {
	const table = document.createElement("table")

	render(<Caption1 className="text-lg">Caption1</Caption1>, {
		container: document.body.appendChild(table)
	})

	const captionElement = screen.getByText(/Caption1/i)
	expect(captionElement).toHaveClass("text-lg")
})

test("renders caption 2 with correct text", () => {
	const table = document.createElement("table")

	render(<Caption2>Caption2</Caption2>, {
		container: document.body.appendChild(table)
	})

	const caption2Element = screen.getByText(/Caption2/i)
	expect(caption2Element).toBeInTheDocument()
})

test("renders caption 2 with additional classes", () => {
	const table = document.createElement("table")

	render(<Caption2 className="text-lg">Caption2</Caption2>, {
		container: document.body.appendChild(table)
	})

	const captionElement = screen.getByText(/Caption2/i)
	expect(captionElement).toHaveClass("text-lg")
})

test("renders Menu with correct text", () => {
	render(<MenuLabel>Menu</MenuLabel>)
	const menuElement = screen.getByText(/Menu/i)
	expect(menuElement).toBeInTheDocument()
})

test("renders Menu with additional classes", () => {
	render(<MenuLabel className="text-lg">Menu</MenuLabel>)
	const menuElement = screen.getByText(/Menu/i)
	expect(menuElement).toHaveClass("text-lg")
})

test("renders Placeholder with correct text", () => {
	render(<Placeholder>Placeholder</Placeholder>)
	const placeholderElement = screen.getByText(/Placeholder/i)
	expect(placeholderElement).toBeInTheDocument()
})

test("renders Placeholder with additional classes", () => {
	render(<Placeholder className="text-lg">Placeholder</Placeholder>)
	const placeholderElement = screen.getByText(/Placeholder/i)
	expect(placeholderElement).toHaveClass("text-lg")
})

test("renders subheading with correct text", () => {
	render(<Subheading>My subheading</Subheading>)
	const subheadingElement = screen.getByText(/My subheading/i)
	expect(subheadingElement).toBeInTheDocument()
})

test("renders subheading with additional classes", () => {
	render(<Subheading className="text-lg">Subheading</Subheading>)
	const subheadingElement = screen.getByText(/Subheading/i)
	expect(subheadingElement).toHaveClass("text-lg")
})

test("renders link with correct text", () => {
	render(<Link>My link</Link>)
	const linkElement = screen.getByText(/My link/i)
	expect(linkElement).toBeInTheDocument()
})

test("renders link with additional classes", () => {
	render(<Link className="text-lg">Link</Link>)
	const linkElement = screen.getByText(/Link/i)
	expect(linkElement).toHaveClass("text-lg")
})

test("renders button typography with correct text", () => {
	render(<ButtonTypography>My button</ButtonTypography>)
	const buttonElement = screen.getByText(/My button/i)
	expect(buttonElement).toBeInTheDocument()
})

test("renders button typography with additional classes", () => {
	render(<ButtonTypography className="text-lg">My button</ButtonTypography>)
	const buttonElement = screen.getByText(/My button/i)
	expect(buttonElement).toHaveClass("text-lg")
})

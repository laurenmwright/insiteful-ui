import React from "react"
import { fireEvent, render, screen } from "@testing-library/react"
import { Modal } from "./Modal"

test("renders modal correctly", () => {
	const hello = jest.fn()

	render(
		<Modal isOpen={true} onClose={hello} title="Title" size="large">
			Hello, this is a modal
		</Modal>
	)

	const ModalElement = screen.getByTestId("dialog")

	expect(ModalElement).toContainElement(screen.getByTestId("dialog"))
	expect(ModalElement).toContainElement(screen.getByTestId("panel"))
	expect(ModalElement).toContainElement(screen.getByTestId("title"))

	fireEvent.click(screen.getByTestId("icon"))

	expect(hello).toHaveBeenCalled()
	expect(screen.getByTestId("title")).toHaveStyle({ width: "50%;" })
})

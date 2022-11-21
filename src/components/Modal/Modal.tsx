import { Dialog } from "@headlessui/react"
import { ClassNameValue } from "tailwind-merge/dist/lib/tw-join"
import { twMerge, twJoin } from "tailwind-merge"
import { X } from "react-feather"
import React from "react"

import { isClassNameValue } from "../helpers/helpers"

import { Title } from "../Typography"

export type ModalProps = {
	/** If a class name value is passed directly, it will apply to the dialog. */
	className?:
		| ClassNameValue
		| {
				dialog?: ClassNameValue
				panel?: ClassNameValue
		  }
	isOpen: boolean
	onClose: () => void
	title?: React.ReactNode
	children?: React.ReactNode
	size?: "small" | "medium" | "large"
}

export const Modal: React.FC<ModalProps> = ({
	className,
	isOpen,
	onClose,
	title,
	children,
	size = "medium"
}) => {
	if (isClassNameValue(className)) {
		className = {
			dialog: className
		}
	}

	return isOpen ? (
		<Dialog
			data-testid="dialog"
			as="div"
			open={isOpen}
			onClose={onClose}
			className={twMerge(
				"absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 p-2.5 bg-white break-words border-2 border-white rounded-[0.625rem] shadow-[0px_0px_10px_0px_grey]",
				size === "small" ? "w-1/4" : size === "medium" ? "w-1/2" : "w-3/4",
				className.dialog
			)}
		>
			<Dialog.Panel data-testid="panel" className={twJoin(className.panel)}>
				<button data-testid="icon" onClick={onClose} className="float-right align-top">
					<X className="text-gray-light" size={18} />
				</button>
				{title && (
					<Dialog.Title
						data-testid="title"
						className="break-words min-h-[2rem] border border-gray-lightest pb-4 mb-4 items-center justify-center text-center"
					>
						<Title className="text-gray-darker">{title}</Title>
					</Dialog.Title>
				)}
				{children}
			</Dialog.Panel>
		</Dialog>
	) : null
}

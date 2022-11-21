import { Popover, Transition } from "@headlessui/react"
import React, { Fragment } from "react"
import { AlertTriangle } from "react-feather"
import { ClassNameValue } from "tailwind-merge/dist/lib/tw-join"
import { twMerge, twJoin } from "tailwind-merge"

import { isClassNameValue } from "../helpers/helpers"

import { Button } from "../Button"

export type ConfirmPopoverProps = {
	/** If a class name value is passed directly, it will apply to the button. */
	className?:
		| ClassNameValue
		| {
				button?: ClassNameValue
				panel?: ClassNameValue
		  }
	onCancel?: () => void
	onConfirm?: () => void
	button?: React.ReactNode
	children?: React.ReactNode
}

export const ConfirmationBox: React.FC<ConfirmPopoverProps> = ({
	className,
	onCancel,
	onConfirm,
	button,
	children
}) => {
	if (isClassNameValue(className)) {
		className = {
			button: className
		}
	}

	return (
		<Popover>
			<Popover.Button data-testid="popbutton" className={twJoin(className.button)}>
				{button}
			</Popover.Button>
			<Transition
				as={Fragment}
				enter="transition ease-out duration-200"
				enterFrom="opacity-0 translate-y-1"
				enterTo="opacity-100 translate-y-0"
				leave="transition ease-in duration-150"
				leaveFrom="opacity-100 translate-y-0"
				leaveTo="opacity-0 translate-y-1"
			>
				<Popover.Panel
					data-testid="panel"
					className={twMerge(
						"absolute z-1000 px-4 mt-3  transform -translate-x-96 -translate-y-24 sm:px-0 lg:max-w-3xl",
						className.panel
					)}
				>
					<div className="w-80 shadow-lg rounded-md border-solid border-2">
						<div className="flex pt-2 px-2">
							<AlertTriangle
								className="w-1/6 relative mt-3 text-error-medium"
								size={24}
							/>
							<div
								data-testid="div"
								className="w-5/6 relative bg-white p-3 text-gray-800"
							>
								{children}
							</div>
						</div>
						<div className="flex justify-end space-x-2 bg-gray-lightest p-2 bg-error-red">
							<Button
								simple
								className="text-gray-light"
								onClick={onCancel}
								data-testid="no"
							>
								Cancel
							</Button>
							<Button primary data-testid="yes" onClick={onConfirm}>
								Continue
							</Button>
						</div>
					</div>
				</Popover.Panel>
			</Transition>
		</Popover>
	)
}

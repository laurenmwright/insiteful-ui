import React from "react"
import { Switch } from "@headlessui/react"
import { ClassNameValue } from "tailwind-merge/dist/lib/tw-join"
import { twMerge, twJoin } from "tailwind-merge"

import { Label } from "../Typography"

export type ToggleProps = {
	className?: {
		wrapper?: ClassNameValue
		label?: ClassNameValue
		input?: ClassNameValue
	}

	label?: string

	value?: boolean
	onChange?: (e: any) => void

	disabled?: boolean
}

export const Toggle: React.FC<ToggleProps> = ({
	className,
	label,
	value,
	disabled,
	onChange
}) => {
	return (
		<div
			data-testid="div"
			className={twMerge("flex gap-6 items-center", className?.wrapper)}
		>
			{label && (
				<Label data-testid="label" className={twJoin(className?.label)}>
					{label}
				</Label>
			)}
			<Switch
				data-testid="switch"
				disabled={disabled}
				checked={value}
				onChange={onChange}
				//TODO: Custom color is not working
				className={twMerge(
					"relative inline-flex h-[27px] w-[63px] shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus-visible:ring-1 focus-visible:ring-white focus-visible:ring-opacity-75",
					value ? "bg-action-blue" : "bg-gray-lightest",
					className?.input
				)}
			>
				<span className="sr-only">Use setting</span>
				<span
					data-testid="circle"
					aria-hidden="true"
					className={twJoin(
						"pointer-events-none inline-block h-[23px] w-[23px] transform rounded-full bg-white shadow-lg ring-0 transition duration-200 ease-in-out",
						value ? "translate-x-9" : "translate-x-0"
					)}
				/>
			</Switch>
		</div>
	)
}

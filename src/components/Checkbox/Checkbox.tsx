import React, { useCallback } from "react"
import { ClassNameValue } from "tailwind-merge/dist/lib/tw-join"
import { twMerge, twJoin } from "tailwind-merge"

import { isClassNameValue } from "../helpers/helpers"

export type CheckboxProps = {
	/** If a class name value is passed directly, it will apply to the wrapper. */
	className?:
		| ClassNameValue
		| {
				wrapper?: ClassNameValue
				input?: ClassNameValue
				label?: ClassNameValue
		  }
	disabled?: boolean
	label?: string
	checked: boolean
	setChecked: (setter: (currentValue: boolean) => boolean) => void
}

export const Checkbox: React.FC<CheckboxProps> = ({
	className,
	label,
	checked,
	setChecked,
	disabled
}) => {
	if (isClassNameValue(className)) {
		className = { wrapper: className }
	}

	const toggleChecked = useCallback(() => {
		setChecked((c) => !c)
	}, [setChecked])

	return (
		<label data-testid="checkbox" className={twJoin(className.wrapper)}>
			<input
				type="Checkbox"
				className={twMerge(
					"accent-action-blue h-5 w-5 align-middle mr-[0.9375rem]",
					className.input
				)}
				checked={checked}
				onChange={toggleChecked}
				disabled={disabled}
				data-testid="input"
			/>
			<span
				data-testid="span"
				className={twMerge("text-gray-darker align-middle", className.label)}
			>
				{label}
			</span>
		</label>
	)
}

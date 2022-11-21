import React from "react"
import { twMerge, twJoin } from "tailwind-merge"
import { ClassNameValue } from "tailwind-merge/dist/lib/tw-join"

import { isClassNameValue } from "../helpers/helpers"

export type FormElementProps = {
	/** If a class name value is passed directly, it will apply to the wrapper. */
	className?:
		| ClassNameValue
		| {
				wrapper?: ClassNameValue
				label?: ClassNameValue
		  }
	label?: string
	children?: React.ReactNode
}

export const FormElement: React.FC<FormElementProps> = ({
	className,
	label,
	children
}) => {
	if (isClassNameValue(className)) {
		className = {
			wrapper: className
		}
	}

	return label ? (
		<label data-testid="form-element" className={twJoin(className.wrapper)}>
			<span className={twMerge("block text-sm text-gray-darker mb-1.5", className.label)}>
				{label}
			</span>
			{children}
		</label>
	) : (
		<div data-testid="form-element" className={twJoin(className.wrapper)}>
			{children}
		</div>
	)
}

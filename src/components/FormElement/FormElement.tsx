import React from "react"
import { ClassNameValue } from "tailwind-merge/dist/lib/tw-join"
import { twMerge } from "tailwind-merge"

import { Label } from "../Typography"

export type FormElementProps = {
	className?: {
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
	return (
		<div
			data-testid="form-element"
			className={twMerge("flex mb-6 flex-col w-full", className?.wrapper)}
		>
			{label && <Label className={twMerge("pb-2.5", className?.label)}>{label}</Label>}
			{children}
		</div>
	)
}

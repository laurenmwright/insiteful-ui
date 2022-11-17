import React, { useCallback } from "react"
import { Label } from "../Typography"
import { ClassNameValue } from "tailwind-merge/dist/lib/tw-join"
import { twMerge, twJoin } from "tailwind-merge"

export type TextAreaProps = {
	className?: {
		wrapper?: ClassNameValue
		label?: ClassNameValue
		input?: ClassNameValue
	}

	label?: string
	placeholder?: string

	value?: string
	onChange?: (newValue: string) => void
}

export const TextArea: React.FC<TextAreaProps> = ({
	className,
	label,
	placeholder,
	value,
	onChange
}) => {
	const forwardValue = useCallback(
		(e: React.ChangeEvent<HTMLTextAreaElement>) => {
			onChange?.(e.currentTarget.value)
		},
		[onChange]
	)

	return (
		<div className={twJoin(className?.wrapper)}>
			<Label data-testid="TextArea-Label" className={className?.label}>
				{label}
			</Label>
			<textarea
				data-testid="TextArea-Native"
				className={twMerge(
					"w-1/4 relative resize mt-[0.3125rem] p-2.5 mg-white break-words border border-grey rounded-[0.625rem] focus:outline-none",
					className?.input
				)}
				name="Text Area Test"
				id="TextArea"
				value={value}
				onChange={forwardValue}
				placeholder={placeholder}
			/>
		</div>
	)
}

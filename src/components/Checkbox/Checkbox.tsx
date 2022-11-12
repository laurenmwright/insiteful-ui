import React, { useCallback } from "react"
import { ClassNameValue } from "tailwind-merge/dist/lib/tw-join"
import { twMerge, twJoin } from "tailwind-merge"

export type CheckboxProps = {
	className?: {
		container?: ClassNameValue
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
	const toggleChecked = useCallback(() => {
		setChecked((c) => !c)
	}, [setChecked])

	return (
		<div data-testid="checkbox" className={twJoin(className?.container)}>
			<input
				type="Checkbox"
				className={twMerge(
					"accent-[var(--color-actionBlue)] h-5 w-5 align-middle mr-[0.9375rem]",
					className?.input
				)}
				checked={checked}
				onChange={toggleChecked}
				disabled={disabled}
				data-testid="input"
			/>
			<span
				data-testid="span"
				className={twMerge("text-[var(--color-darkGray)] align-middle", className?.label)}
			>
				{label}
			</span>
		</div>
	)
}

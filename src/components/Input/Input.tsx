import React, { useCallback } from "react"
import { ClassNameValue } from "tailwind-merge/dist/lib/tw-join"
import { twMerge } from "tailwind-merge"

export type InputProps = {
	placeholder?: string | undefined
	value?: string | undefined
	onChange?: ((newValue: string) => void) | undefined
	className?: ClassNameValue
	type: "text" | "number" | "password"
}

export const Input: React.FC<InputProps> = ({
	placeholder,
	type,
	onChange,
	value,
	className
}) => {
	const forwardValue = useCallback(
		(e: React.ChangeEvent<HTMLInputElement>) => {
			onChange?.(e.target.value)
		},
		[onChange]
	)

	return (
		<input
			value={value}
			type={type}
			className={twMerge(
				"shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline",
				className
			)}
			onChange={forwardValue}
			placeholder={placeholder!}
			data-testid="input-box"
		/>
	)
}

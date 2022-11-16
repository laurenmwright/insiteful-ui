import React, { useCallback, useState } from "react"
import { Eye, EyeOff } from "react-feather"
import { ClassNameValue } from "tailwind-merge/dist/lib/tw-join"
import { twMerge } from "tailwind-merge"

export type PasswordInputProps = {
	className?: {
		container?: ClassNameValue
		input?: ClassNameValue
		button?: ClassNameValue
	}
	placeholder?: string
	value?: string
	onChange: (newValue: string) => void
}

export const PasswordInput: React.FC<PasswordInputProps> = ({
	className,
	placeholder,
	onChange,
	value
}) => {
	const [showPassword, setShowPassword] = useState(false)

	const forwardValue = useCallback(
		(e: React.ChangeEvent<HTMLInputElement>) => onChange(e.target.value),
		[onChange]
	)
	const toggleShowPassword = useCallback(() => setShowPassword((s) => !s), [])

	return (
		<div
			className={twMerge(
				"flex shadow appearance-none border rounded w-full py-1.5 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline",
				className?.container
			)}
		>
			<input
				value={value}
				type={showPassword ? "text" : "password"}
				className={twMerge(
					"shadow-none ring-0 border-0 outline-none w-full",
					className?.input
				)}
				onChange={forwardValue}
				placeholder={placeholder!}
				data-testid="password-input-box"
			/>
			<button
				data-testid="hide-icon"
				className={twMerge("w-1/22 pl-1", className?.button)}
				onClick={toggleShowPassword}
				type="button"
			>
				{showPassword ? (
					<EyeOff data-testid="eye-off" className="text-gray-light" size={24} />
				) : (
					<Eye data-testid="eye" className="text-gray-light" size={24} />
				)}
			</button>
		</div>
	)
}

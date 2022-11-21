import React, { useEffect, useState } from "react"
import { ClassNameValue } from "tailwind-merge/dist/lib/tw-join"
import { twMerge } from "tailwind-merge"
import { Union } from "@ericbf/helpers"
import { Eye, EyeOff } from "react-feather"

import { isClassNameValue } from "../helpers"

export type InputProps = {
	value?: string | undefined
	onChange?: ((newValue: string) => void) | undefined
} & Union<
	[
		{
			type?: "text" | "number" | "email"
			className?: ClassNameValue
			placeholder?: string | undefined
		},
		{
			type: "password"
			/** If a class name value is passed directly, it will apply to the input. */
			className?:
				| ClassNameValue
				| {
						wrapper?: ClassNameValue
						input?: ClassNameValue
						button?: ClassNameValue
				  }
			placeholder?:
				| string
				| {
						whenVisible?: string
						whenHidden?: string
				  }
				| undefined
		}
	]
>

export const Input: React.FC<InputProps> = ({
	placeholder,
	type = "text",
	value,
	onChange,
	className
}) => {
	if (isClassNameValue(className)) {
		className = {
			input: className
		}
	}

	const [showPassword, setShowPassword] = useState(false)

	if (typeof placeholder === "object") {
		placeholder = showPassword ? placeholder.whenVisible : placeholder.whenHidden
	}

	const inputEl = (
		<input
			value={onChange && value}
			defaultValue={onChange ? undefined : value}
			type={type === "password" && showPassword ? "text" : type}
			className={twMerge(
				"shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline",
				type === "password" && "pr-10",
				className.input
			)}
			onChange={(e) => onChange?.(e.target.value)}
			placeholder={placeholder}
			data-testid="input-box"
		/>
	)

	return type === "password" ? (
		<div className={twMerge("relative", className.wrapper)}>
			{inputEl}
			<button
				data-testid="hide-icon"
				className={twMerge(
					"absolute right-0 top-1/2 -translate-y-1/2 p-1.5",
					className.button
				)}
				onClick={() => setShowPassword((s) => !s)}
				type="button"
			>
				{showPassword ? (
					<EyeOff data-testid="eye-off" className="text-gray-light" size={24} />
				) : (
					<Eye data-testid="eye" className="text-gray-light" size={24} />
				)}
			</button>
		</div>
	) : (
		inputEl
	)
}

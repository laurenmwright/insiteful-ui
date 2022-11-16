import React from "react"
import { ClassNameValue } from "tailwind-merge/dist/lib/tw-join"
import { twMerge } from "tailwind-merge"

export type ButtonProps = {
	className?: ClassNameValue
	children?: React.ReactNode
	disabled?: boolean
	primary?: boolean
	secondary?: boolean
	outline?: boolean
	darkFont?: boolean
	simple?: boolean
	editor?: boolean
	onClick?: () => void
	type?: "button" | "submit" | "reset"
}

export const Button: React.FC<ButtonProps> = ({
	className,
	children,
	disabled,
	primary,
	secondary,
	simple,
	darkFont,
	editor,
	outline,
	onClick,
	type
}) => {
	return (
		<button
			data-testid="Button"
			type={type ? type : "button"}
			onClick={onClick!}
			disabled={disabled}
			className={twMerge(
				"font-semibold rounded-[0.3125rem] py-[0.4375rem] px-[0.625rem] hover:opacity-50 focus:outline-none focus-visible:shadow-sm disabled:opacity-[0.65] disabled:cursor-not-allowed",
				primary &&
					(outline
						? "border-2 border-action-blue text-action-blue bg-transparent font-bold"
						: "text-white bg-action-blue"),
				secondary &&
					(outline
						? "border-2 border-secondary text-secondary bg-transparent"
						: "text-white bg-secondary"),
				editor && "text-black bg-editor-light-purple border-2 border-editor-dark-purple",
				darkFont && "!text-gray-darker",
				simple && "![background:none] border-none text-gray-light",
				className
			)}
		>
			{children}
		</button>
	)
}

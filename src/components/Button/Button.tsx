import React from "react"
import { ClassNameValue } from "tailwind-merge/dist/lib/tw-join"
import { twMerge } from "tailwind-merge"
import { Union } from "@ericbf/helpers"
import { Link } from "react-router-dom"

export type ButtonProps = {
	className?: ClassNameValue
	children?: React.ReactNode
	disabled?: boolean
	darkFont?: boolean
	onClick?: () => void
} & Union<
	[
		{
			primary?: true
			outline?: boolean
		},
		{
			secondary: true
			outline?: boolean
		},
		{
			simple: true
		},
		{
			editor: true
		}
	]
> &
	Union<
		[
			{
				/** The type of button element when not using an anchor. */
				type?: "button" | "submit" | "reset"
			},
			{
				/** Use this for local navigation. Will render an anchor. */
				to?: string
			},
			{
				/** Use this for external navigation. Will render an anchor. */
				href?: string
				newTab?: boolean
			}
		]
	>

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
	type = "button",
	newTab,
	href,
	to
}) => {
	if (!secondary && !editor && !simple) {
		primary = true
	}

	return !disabled && to ? (
		<Link
			data-testid="button"
			to={to}
			onClick={onClick}
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
				simple && "![background:none] border-none text-gray-light",
				editor && "text-black bg-editor-light-purple border-2 border-editor-dark-purple",

				darkFont && "!text-gray-darker",
				className
			)}
		>
			{children}
		</Link>
	) : !disabled && href ? (
		<a
			data-testid="button"
			href={href}
			target={newTab ? "_blank" : undefined}
			rel="noreferrer"
			onClick={onClick}
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
				simple && "![background:none] border-none text-gray-light",
				editor && "text-black bg-editor-light-purple border-2 border-editor-dark-purple",

				darkFont && "!text-gray-darker",
				className
			)}
		>
			{children}
		</a>
	) : (
		<button
			data-testid="button"
			type={type}
			disabled={disabled}
			onClick={onClick}
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
				simple && "![background:none] border-none text-gray-light",
				editor && "text-black bg-editor-light-purple border-2 border-editor-dark-purple",

				darkFont && "!text-gray-darker",
				className
			)}
		>
			{children}
		</button>
	)
}

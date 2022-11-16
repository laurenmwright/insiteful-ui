import React from "react"
import { ClassNameValue } from "tailwind-merge/dist/lib/tw-join"
import { twMerge } from "tailwind-merge"

export type TypographyProps = {
	children?: React.ReactNode
	className?: ClassNameValue
}

export const Heading1: React.FC<TypographyProps> = ({ children, className }) => {
	return (
		<h1 className={twMerge("font-mono text-[2rem] text-gray-darker", className)}>
			{children}
		</h1>
	)
}

export const Heading2: React.FC<TypographyProps> = ({ children, className }) => {
	return (
		<h2
			className={twMerge("font-['Roboto'] text-[1.125rem] leading-[1.17222]", className)}
		>
			{children}
		</h2>
	)
}

export const Title: React.FC<TypographyProps> = ({ children, className }) => {
	return (
		<p
			className={twMerge(
				"font-['Lucida_Sans','Lucida_Sans_Regular','Lucida_Grande','Lucida_Sans_Unicode',Geneva,Verdana,sans-serif] text-[1.5rem] [font-weight:bolder] leading-[1.17083334] text-gray-medium",
				className
			)}
		>
			{children}
		</p>
	)
}

export const Caption1: React.FC<TypographyProps> = ({ children, className }) => {
	return (
		<caption
			className={twMerge(
				"font-[system-ui,-apple-system,BlinkMacSystem,'Segoe_UI',,Roboto,Oxygen,Ubuntu,Cantarell,'Open_Sans','Helvetica_Neue',sans-serif] text-[0.875rem] leading-[1.17142] text-gray-darker",
				className
			)}
		>
			{children}
		</caption>
	)
}

export const Caption2: React.FC<TypographyProps> = ({ children, className }) => {
	return (
		<caption
			className={twMerge(
				"font-[system-ui,-apple-system,BlinkMacSystem,'Segoe_UI',Roboto,Oxygen,Ubuntu,Cantarell,'Open_Sans','Helvetica_Neue',sans-serif] text-[0.9375rem] leading-[1.173333] text-gray-medium",
				className
			)}
		>
			{children}
		</caption>
	)
}

export const MenuLabel: React.FC<TypographyProps> = ({ children, className }) => {
	return (
		<p
			className={twMerge(
				"font-[system-ui,-apple-system,BlinkMacSystem,'Segoe_UI',Roboto,Oxygen,Ubuntu,Cantarell,'Open_Sans','Helvetica_Neue',sans-serif] text-[1.5rem] leading-[1.1708333] [font-weight:bolder] text-gray-darker",
				className
			)}
		>
			{children}
		</p>
	)
}

export const Placeholder: React.FC<TypographyProps> = ({ children, className }) => {
	return (
		<p
			className={twMerge(
				"font-['Roboto'] text-[0.875rem] leading-[1.17142857] text-gray-lighter",
				className
			)}
		>
			{children}
		</p>
	)
}

export const Subheading: React.FC<TypographyProps> = ({ children, className }) => {
	return (
		<h3
			className={twMerge(
				"font-['Lucida_Sans','Lucida_Sans_Regular','Lucida_Grande','Lucida_Sans_Unicode',Geneva,Verdana,sans-serif] text-[1.0625rem] [font-weight:bolder] leading-[1.2823529] text-gray-dark",
				className
			)}
		>
			{children}
		</h3>
	)
}

export const Link: React.FC<TypographyProps & { link?: string }> = ({
	children,
	className,
	link
}) => {
	return (
		<a
			href={link}
			className={twMerge(
				"font-['Lucida_Sans','Lucida_Sans_Regular','Lucida_Grande','Lucida_Sans_Unicode',Geneva,Verdana,sans-serif] text-[1.125rem] leading-[1.1666667] text-gray-darkest",
				className
			)}
		>
			{children}
		</a>
	)
}

export const ButtonTypography: React.FC<TypographyProps> = ({ children, className }) => {
	return (
		<p
			className={twMerge(
				"font-['Lucida_Sans','Lucida_Sans_Regular','Lucida_Grande','Lucida_Sans_Unicode',Geneva,Verdana,sans-serif] text-[1.125rem] leading-[1.1666667] text-black",
				className
			)}
		>
			{children}
		</p>
	)
}

export const Label: React.FC<TypographyProps> = ({ children, className }) => {
	return (
		<label className={twMerge("block text-[1rem] text-gray-darker", className)}>
			{children}
		</label>
	)
}

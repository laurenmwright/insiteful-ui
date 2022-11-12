import React from "react"
import { ClassNameValue } from "tailwind-merge/dist/lib/tw-join"
import { twMerge } from "tailwind-merge"

export type TypographyProps = {
	children?: React.ReactNode
	className?: ClassNameValue
}

export const Heading1: React.FC<TypographyProps> = ({ children, className }) => {
	return (
		<h1
			className={twMerge(
				"[font-family:var(--common-font)] text-[2rem] text-[var(--color-darkGray)]",
				className
			)}
		>
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
				"font-['Lucida_Sans','Lucida_Sans_Regular','Lucida_Grande','Lucida_Sans_Unicode',Geneva,Verdana,sans-serif] text-[1.5rem] [font-weight:bolder] leading-[1.17083334] text-[#666]",
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
				"font-[system-ui,-apple-system,BlinkMacSystem,'Segoe_UI',,Roboto,Oxygen,Ubuntu,Cantarell,'Open_Sans','Helvetica_Neue',sans-serif] text-[0.875rem] leading-[1.17142] text-[var(--color-darkGray)]",
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
				"font-[system-ui,-apple-system,BlinkMacSystem,'Segoe_UI',Roboto,Oxygen,Ubuntu,Cantarell,'Open_Sans','Helvetica_Neue',sans-serif] text-[0.9375rem] leading-[1.173333] text-[#666]",
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
				"font-[system-ui,-apple-system,BlinkMacSystem,'Segoe_UI',Roboto,Oxygen,Ubuntu,Cantarell,'Open_Sans','Helvetica_Neue',sans-serif] text-[1.5rem] leading-[1.1708333] [font-weight:bolder] text-[var(--color-darkGray)]",
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
				"font-['Roboto'] text-[0.875rem] leading-[1.17142857] text-[#959595]",
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
				"font-['Lucida_Sans','Lucida_Sans_Regular','Lucida_Grande','Lucida_Sans_Unicode',Geneva,Verdana,sans-serif] text-[1.0625rem] [font-weight:bolder] leading-[1.2823529] text-[#333]",
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
				"font-['Lucida_Sans','Lucida_Sans_Regular','Lucida_Grande','Lucida_Sans_Unicode',Geneva,Verdana,sans-serif] text-[1.125rem] leading-[1.1666667] text-[#182d36]",
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
				"font-['Lucida_Sans','Lucida_Sans_Regular','Lucida_Grande','Lucida_Sans_Unicode',Geneva,Verdana,sans-serif] text-[1.125rem] leading-[1.1666667] text-[#000]",
				className
			)}
		>
			{children}
		</p>
	)
}

export const Label: React.FC<TypographyProps> = ({ children, className }) => {
	return (
		<label
			className={twMerge("block text-[1rem] text-[var(--color-darkGray)]", className)}
		>
			{children}
		</label>
	)
}

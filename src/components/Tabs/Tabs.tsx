import { Tab } from "@headlessui/react"
import { ClassNameValue } from "tailwind-merge/dist/lib/tw-join"
import { twMerge } from "tailwind-merge"
import React from "react"

export type TabsProps = {
	className?: {
		wrapper?: ClassNameValue
		listWrapper?: ClassNameValue
		panelWrapper?: ClassNameValue
	}
	tabs: {
		title: string
		content: React.ReactNode
		className?: {
			title?: ClassNameValue
			content?: ClassNameValue
		}
	}[]
}

export const Tabs: React.FC<TabsProps> = ({ className, tabs }) => {
	return (
		<div className={twMerge("w-full px-2 py-16 sm:px-0", className?.wrapper)}>
			<Tab.Group>
				<Tab.List className={twMerge("flex", className?.listWrapper)}>
					{tabs.map(({ title, className }, index) => (
						<Tab
							key={index}
							className={({ selected }) =>
								twMerge(
									"w-full py-2.5 text-md leading-5 focus-visible:outline-none",
									selected
										? "text-action-blue font-bold shadow-b-md border-b-4 border-action-blue	"
										: "text-gray-light font-medium hover:bg-white/[0.12] hover:text-action-blue/60 hover:border-b-2 hover:border-action-blue/60 border-b-2 border-stone-500",
									className?.title
								)
							}
						>
							{title}
						</Tab>
					))}
				</Tab.List>
				<Tab.Panels className={twMerge("mt-2", className?.panelWrapper)}>
					{tabs.map(({ content, className }, index) => (
						<Tab.Panel
							key={index}
							className={twMerge("rounded-xl p-3", className?.content)}
						>
							{content}
						</Tab.Panel>
					))}
				</Tab.Panels>
			</Tab.Group>
		</div>
	)
}

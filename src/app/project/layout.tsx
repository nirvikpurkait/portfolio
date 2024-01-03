import { cls } from "@/utils/tailwind/cls";
import React from "react";

export default function ProjectLayout({
	children,
	project_card_modal,
}: {
	project_card_modal: React.ReactNode;
	children: React.ReactNode;
}) {
	return (
		<div className="@container w-full">
			<div className={cls(`px-8 mt-10 pb-12 @lg:px-16 @2xl:px-24`)}>
				{children}
				{project_card_modal}
			</div>
		</div>
	);
}

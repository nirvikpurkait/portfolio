import { cls } from "@/utils/tailwind/cls";
import React from "react";

export default function ProjectLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<div className="@container w-full">
			<div className={cls(`px-8 mt-10 pb-12 @lg:px-16 @2xl:px-24`)}>
				{children}
			</div>
		</div>
	);
}

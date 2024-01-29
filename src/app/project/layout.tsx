import { cn } from "@/lib/utils";
import React from "react";

export default function ProjectLayout({
	children,
	card,
}: {
	children: React.ReactNode;
	card: React.ReactNode;
}) {
	return (
		<div className="@container w-full">
			<div className={cn(`px-8 mt-10 pb-12 @lg:px-16 @2xl:px-24`)}>
				{children}
				{card}
			</div>
		</div>
	);
}

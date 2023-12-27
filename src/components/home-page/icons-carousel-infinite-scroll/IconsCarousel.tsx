"use client";

import React, { useEffect, useRef } from "react";
import { cls } from "@/utils/tailwind/cls";
import style from "./IconsCarousel.module.scss";

export default function IconsCarousel({
	children,
}: {
	children: React.ReactNode;
}) {
	const scrollerRef = useRef<HTMLUListElement>(null);

	useEffect(() => {
		const scrollerContent = Array.from(scrollerRef.current?.children!);

		scrollerContent.forEach((item) => {
			const duplicatedItem = item.cloneNode(true);

			if (duplicatedItem instanceof HTMLLIElement) {
				duplicatedItem.setAttribute("aria-hidden", "true");
			}
			scrollerRef.current?.append(duplicatedItem);
		});
		scrollerRef.current?.parentNode instanceof HTMLDivElement &&
			scrollerRef.current.parentNode.setAttribute("data-animate", "true");
	});

	return (
		<div
			className={cls(
				`max-w-xs sm:max-w-md md:max-w-lg lg:max-w-xl m-auto mt-8`,
				style.scroller
			)}
		>
			<div
				className={cls(
					`text-center pb-6 underline decoration-purple-500 decoration-4 underline-offset-[12px] text-2xl px-3 `
				)}
			>
				Experience in
			</div>
			<ul className={cls(``)} ref={scrollerRef}>
				{children}
			</ul>
		</div>
	);
}

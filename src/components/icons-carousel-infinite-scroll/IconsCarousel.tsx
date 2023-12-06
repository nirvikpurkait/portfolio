"use client";

import React, { useEffect, useRef } from "react";
import { cls } from "@/utils/tailwind/cls";
import style from "./IconsCarousel.module.scss";

type IconsCarouselProps = {
	icons: {
		link: string;
		special?: boolean;
		key: string;
	}[];
};

export default function IconsCarousel(props: IconsCarouselProps) {
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
				`max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg m-auto mt-8`,
				style.scroller
			)}
		>
			<ul className={cls(``)} ref={scrollerRef}>
				{props.icons?.map((icon) => {
					const style: React.CSSProperties = {
						borderRadius: "50%",
						background: "white",
					};
					return (
						<li key={icon.key}>
							{
								<img
									src={icon.link}
									alt="icon"
									style={icon.special ? style : {}}
								/>
							}
						</li>
					);
				})}
			</ul>
		</div>
	);
}

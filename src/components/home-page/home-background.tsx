import React from "react";
import blob from "@/assets/blob.svg";
import Image from "next/image";
import style from "./hero-section/hero-section.module.scss";
import { cn } from "@/lib/utils";

export default function HeroBackground() {
	return (
		<div
			aria-hidden
			data-content="background-image"
			className={cn(`top-0 left-0 w-full h-full absolute -z-10`)}
		>
			<Image
				src={blob}
				alt=""
				width={10000}
				height={10000}
				className={cn(
					`absolute top-[35rem] left-[45rem] -translate-x-2/4 -translate-y-2/4 opacity-40 dark:opacity-20`,
					style.rotate
				)}
			/>
		</div>
	);
}

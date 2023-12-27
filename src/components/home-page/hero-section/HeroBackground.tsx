import React from "react";
import circle_blue from "@/assets/gradient-circle-blue.svg";
import circle_purple from "@/assets/gradient-circle-purple.svg";
import blob from "@/assets/blob.svg";
import Image from "next/image";
import { cls } from "@/utils/tailwind/cls";
import style from "./hero-section.module.scss";

export default function HeroBackground() {
	return (
		<div
			aria-hidden
			data-content="background-image"
			className={cls(`top-0 left-0 w-full h-full absolute -z-10`)}
		>
			<Image
				src={circle_blue}
				alt=""
				width={500}
				height={500}
				className={cls(
					`absolute top-0 left-full -translate-x-2/4 -translate-y-2/4`
				)}
			/>
			<Image
				src={circle_blue}
				alt=""
				width={500}
				height={500}
				className={cls(
					`absolute top-[15rem] left-[10rem] -translate-x-2/4 -translate-y-2/4 dark:opacity-30`
				)}
			/>
			<Image
				src={circle_purple}
				alt=""
				width={500}
				height={500}
				className={cls(
					`absolute top-[35rem] left-[45rem] -translate-x-2/4 -translate-y-2/4 dark:opacity-30`
				)}
			/>
			<Image
				src={blob}
				alt=""
				width={10000}
				height={10000}
				className={cls(
					`absolute top-[35rem] left-[45rem] -translate-x-2/4 -translate-y-2/4 opacity-40 dark:opacity-20`,
					style.rotate
				)}
			/>
		</div>
	);
}

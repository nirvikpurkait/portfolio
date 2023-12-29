import { cls } from "@/utils/tailwind/cls";
import Image from "next/image";
import React from "react";

export default function ContactPageBackground() {
	return (
		<div
			aria-hidden
			data-content="background-image"
			className={cls(
				`top-0 left-0 w-full h-full absolute overflow-x-clip -z-10`
			)}
		>
			<Image
				src={`https://res.cloudinary.com/dpohasqoa/image/upload/v1703221354/portfolio/contact-form-bg-lg.png`}
				alt="image"
				width={1000}
				height={1000}
				className={cls(
					`absolute w-[200rem] top-2/4 left-2/4 -translate-x-2/4 -translate-y-2/4 right-0 bottom-0 -z-10 dark:opacity-20 hidden md:block`
				)}
			/>
			<Image
				src={`https://res.cloudinary.com/dpohasqoa/image/upload/v1703221356/portfolio/contact-form-bg-sm.png`}
				alt="image"
				width={1000}
				height={1000}
				className={cls(
					`absolute w-[200rem] top-2/4 left-2/4 -translate-x-2/4 -translate-y-2/4 right-0 bottom-0 -z-10 dark:opacity-20 block md:hidden`
				)}
			/>
		</div>
	);
}

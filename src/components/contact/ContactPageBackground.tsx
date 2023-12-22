import { cls } from "@/utils/tailwind/cls";
import Image, { ImageProps } from "next/image";
import React from "react";

export type ContactPageBackgroundProps = Omit<
	ImageProps,
	"src" | "alt" | "width" | "height"
>;

export default function ContactPageBackground(
	props: ContactPageBackgroundProps
) {
	return (
		<>
			<Image
				src={`https://res.cloudinary.com/dpohasqoa/image/upload/v1703221354/portfolio/acke4hy8tipzyirz4hjv.png`}
				alt="image"
				width={1000}
				height={1000}
				className={cls(
					`absolute w-[200rem] top-2/4 left-2/4 -translate-x-2/4 -translate-y-2/4 right-0 bottom-0 -z-10 dark:opacity-50 hidden md:block`,
					props.className
				)}
			/>
			<Image
				src={`https://res.cloudinary.com/dpohasqoa/image/upload/v1703221356/portfolio/noz74rlauargcqksruwn.png`}
				alt="image"
				width={1000}
				height={1000}
				className={cls(
					`absolute w-[200rem] top-2/4 left-2/4 -translate-x-2/4 -translate-y-2/4 right-0 bottom-0 -z-10 dark:opacity-50 block md:hidden`,
					props.className
				)}
			/>
		</>
	);
}

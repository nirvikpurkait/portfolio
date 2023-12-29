import { cls } from "@/utils/tailwind/cls";
import Image from "next/image";
import React from "react";
import notFound from "@/assets/404.svg";
import BackButton from "./BackButton";

export default function NotFound() {
	return (
		<div className={cls(`py-20`)}>
			<Image
				src={notFound}
				alt="404-icon"
				width={100}
				height={100}
				className={cls(`w-80 md:w-96 m-auto`)}
			/>
			<BackButton />
		</div>
	);
}

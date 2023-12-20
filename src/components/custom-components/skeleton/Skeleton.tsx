import { cls } from "@/utils/tailwind/cls";
import React from "react";
import style from "./Skeleton.module.scss";

export default function Skeleton(props: { className?: string }) {
	return (
		<div
			className={cls(
				`w-28 h-10 bg-black/5 dark:bg-white/60  rounded-full relative after:bg-white/80 dark:after:bg-white/90`,
				props.className,
				style.skeleton
			)}
		></div>
	);
}

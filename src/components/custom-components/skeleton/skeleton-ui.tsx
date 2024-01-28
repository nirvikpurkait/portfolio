import React from "react";
import style from "./skeleton.module.scss";
import { cn } from "@/lib/utils";

export default function Skeleton(props: { className?: string }) {
	return (
		<div
			className={cn(
				`w-28 h-10 bg-black/5 dark:bg-white/60 rounded-sm relative after:bg-white/80 dark:after:bg-white/90`,
				props.className,
				style.skeleton
			)}
		></div>
	);
}

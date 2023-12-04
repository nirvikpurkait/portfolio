"use client";

import { cls } from "@/utils/tailwind/cls";
import Link from "next/link";
import { usePathname } from "next/navigation";

type LiProps = {
	className?: string;
	icon: React.ReactNode;
	text: string;
};
export function Li(props: LiProps) {
	const pathname = usePathname();
	const href =
		props.text.toLowerCase() === "home"
			? "/"
			: `/${props.text.toLowerCase()}`;

	return (
		<li
			className={cls(props.className, {
				"bg-secondary": href.split("/")[1] === pathname.split("/")[1],
			})}
		>
			<Link href={href} className={cls(`block w-8`)}>
				{props.icon}
				<span
					className={cls(
						`absolute top-2/4 left-full -translate-y-2/4 text-2xl hidden sm:inline sm:pl-1`
					)}
				>
					{props.text}
				</span>
			</Link>
		</li>
	);
}

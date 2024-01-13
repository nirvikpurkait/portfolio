import React from "react";
import SocialIcons from "./social/SocialIcons";
import { cls } from "@/utils/tailwind/cls";
import Rating from "./rating/Rating";
import style from "./Footer.module.scss";
import TechStack from "./tech-stack-used/TechStack";
import { ModeToggle } from "./theme-button/ThemeButton";

export default function Footer() {
	return (
		<div className={cls(`bg-footer px-6 py-8`, style.footer)}>
			<div className={cls(`flex gap-4 flex-col`)}>
				<Rating />
				<SocialIcons />
			</div>
			<TechStack />
			<ModeToggle />
		</div>
	);
}

export function FooterHeading(props: React.ComponentProps<"h3">) {
	return (
		<h3
			className={cls(
				`text-xl font-semibold pb-2 font-rajdhani underline underline-offset-6`,
				props.className
			)}
		>
			{props.children}
		</h3>
	);
}

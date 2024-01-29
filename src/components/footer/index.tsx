import React from "react";
import SocialIcons from "./social/social-icons";
import Rating from "./rating/rating";
import style from "./footer.module.scss";
import TechStack from "./tech-stack-used/tech-stack";
import Theme from "./theme/theme";
import { cn } from "@/lib/utils";

export default function Footer() {
	return (
		<div className={cn(`bg-footer px-6 py-8`, style.footer)}>
			<div className={cn(`flex gap-4 flex-col`)}>
				<Rating />
				<SocialIcons />
			</div>
			<TechStack />

			<Theme />
		</div>
	);
}

export function FooterHeading(props: React.ComponentProps<"h3">) {
	return (
		<h3
			className={cn(
				`text-xl font-semibold pb-2 font-rajdhani underline underline-offset-6`,
				props.className
			)}
		>
			{props.children}
		</h3>
	);
}

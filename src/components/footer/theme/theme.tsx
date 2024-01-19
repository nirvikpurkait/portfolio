import React from "react";
import { FooterHeading } from "../Footer";
import { ThemeSwitchButton } from "./theme-button";
import { Moon, Sun } from "lucide-react";
import { cls } from "@/utils/tailwind/cls";

export default function Theme() {
	return (
		<div>
			<FooterHeading>Theme</FooterHeading>
			<span className={cls(`flex gap-4`)}>
				<Sun className={cls(`text-yellow-500`)} />
				<ThemeSwitchButton />
				<Moon />
			</span>
		</div>
	);
}

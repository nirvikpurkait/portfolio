/* eslint-disable @next/next/no-img-element */

import { cls } from "@/utils/tailwind/cls";
import React from "react";
import style from "./Nav.module.scss";
import { Li } from "./NavLi";
import ThemeButton from "./ThemeButton";

export default function NavUl() {
	return (
		<nav
			className={cls(
				`fixed w-screen h-14 left-0 bottom-0 bg-red-500 sm:w-14 sm:h-screen bg-accent after:bg-accent text-white z-[999999]`,
				style.nav
			)}
		>
			<ul
				className={cls(
					`flex gap-4 group-ul justify-between items-center sm:flex-col sm:justify-start w-full h-full px-4 py-0 sm:py-4 sm:px-0`
				)}
			>
				<Li
					className={cls(
						`bg-accent w-auto sm:w-full px-3 py-2 h-full sm:h-auto relative`
					)}
					icon={
						<img
							src="https://img.icons8.com/dusk/64/home--v1.png"
							alt="home-icon"
						/>
					}
					text={`Home`}
				></Li>

				<Li
					className={cls(
						`bg-accent w-auto sm:w-full px-3 py-2 h-full sm:h-auto relative`
					)}
					icon={
						<img
							src="https://img.icons8.com/avantgarde/100/about.png"
							alt="about-icon"
						/>
					}
					text={`About`}
				></Li>

				<Li
					className={cls(
						`bg-accent w-auto sm:w-full px-3 py-2 h-full sm:h-auto relative`
					)}
					icon={
						<img
							src="https://img.icons8.com/arcade/100/briefcase-settings.png"
							alt="project-icon"
						/>
					}
					text={`Project`}
				></Li>

				<Li
					className={cls(
						`bg-accent w-auto sm:w-full px-3 py-2 h-full sm:h-auto relative`
					)}
					icon={
						<img
							src="https://img.icons8.com/color/100/contact-card.png"
							alt="contact-icon"
						/>
					}
					text={`Contact`}
				></Li>

				<li
					className={cls(
						`mt-auto bg-accent w-auto sm:w-full px-3 py-2 h-full sm:h-auto relative`
					)}
				>
					<ThemeButton />
				</li>
			</ul>
		</nav>
	);
}

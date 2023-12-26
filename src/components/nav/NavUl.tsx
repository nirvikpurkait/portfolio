"use client";

import { cls } from "@/utils/tailwind/cls";
import React from "react";
import style from "./Nav.module.scss";
import Image from "next/image";
import { usePathname } from "next/navigation";
import Link from "next/link";

export default function NavUl() {
	const pathname = usePathname();
	const firstUrlSegment = pathname.split("/")[1];

	return (
		<nav
			className={cls(
				`fixed w-screen h-14 left-0 bottom-0 bg-red-500 sm:w-14 sm:h-screen bg-accent text-white z-[999999] font-rajdhani font-semibold`,
				style.nav
			)}
		>
			<div
				className={cls(
					`flex gap-4 group-ul justify-between items-center sm:flex-col sm:justify-start w-full h-full px-4 py-0 sm:py-4 sm:px-0`,
					style.navIcon
				)}
			>
				<Link href={`/`}>
					<button
						className={cls(
							`relative flex items-center justify-center`
						)}
					>
						<Image
							src={`icons/nav/home.svg`}
							alt="home-icon"
							width={100}
							height={100}
							className={cls(
								`bg-accent w-auto sm:w-full px-3 py-1 sm:py-2 h-full sm:h-auto relative`,
								{ "bg-white": firstUrlSegment === "" }
							)}
						/>
						<span
							className={cls(
								`absolute top-0 right-0 text-3xl w-40 text-left pb-2 pt-1 hidden sm:inline-block`,
								{ "bg-purple-500": firstUrlSegment === "" }
							)}
						>
							Home
						</span>
					</button>
				</Link>

				<Link href={`/about`}>
					<button
						className={cls(
							`relative flex items-center justify-center`
						)}
					>
						<Image
							src={`icons/nav/about.svg`}
							alt="about-icon"
							width={100}
							height={100}
							className={cls(
								`bg-accent w-auto sm:w-full px-3 py-1 sm:py-2 h-full sm:h-auto relative`,
								{ "bg-white": firstUrlSegment === "about" }
							)}
						/>
						<span
							className={cls(
								`absolute top-0 right-0 text-3xl w-40 text-left pb-2 pt-1 hidden sm:inline-block`,
								{ "bg-purple-500": firstUrlSegment === "about" }
							)}
						>
							About
						</span>
					</button>
				</Link>

				<Link href={`/project`}>
					<button
						className={cls(
							`relative flex items-center justify-center`
						)}
					>
						<Image
							src={`icons/nav/experience.svg`}
							alt="experience-icon"
							width={100}
							height={100}
							className={cls(
								`bg-accent w-auto sm:w-full px-3 py-1 sm:py-2 h-full sm:h-auto relative`,
								{ "bg-white": firstUrlSegment === "project" }
							)}
						/>
						<span
							className={cls(
								`absolute top-0 right-0 text-3xl w-40 text-left pb-2 pt-1 hidden sm:inline-block`,
								{
									"bg-purple-500":
										firstUrlSegment === "project",
								}
							)}
						>
							Project
						</span>
					</button>
				</Link>

				<Link href={`/contact`}>
					<button
						className={cls(
							`relative flex items-center justify-center`
						)}
					>
						<Image
							src={`icons/nav/contact.svg`}
							alt="contact-icon"
							width={100}
							height={100}
							className={cls(
								`bg-accent w-auto sm:w-full px-3 py-1 sm:py-2 h-full sm:h-auto relative`,
								{ "bg-white": firstUrlSegment === "contact" }
							)}
						/>
						<span
							className={cls(
								`absolute top-0 right-0 text-3xl w-40 text-left pb-2 pt-1 hidden sm:inline-block`,
								{
									"bg-purple-500":
										firstUrlSegment === "contact",
								}
							)}
						>
							Contact
						</span>
					</button>
				</Link>
			</div>
			<div
				className={cls(
					`w-40 bg-accent absolute top-0 left-full h-full -z-10`,
					style.textSpace
				)}
			></div>
		</nav>
	);
}

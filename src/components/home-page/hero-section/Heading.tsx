/* eslint-disable @next/next/no-img-element */

import { cls } from "@/utils/tailwind/cls";
import React from "react";
import { DownloadResumeButton, LetsConnect } from "../../custom-components";
import Image from "next/image";
import HeroImage from "./HeroImage";

export default function Heading() {
	return (
		<div
			className={cls(
				`flex flex-col gap-4 justify-center items-center text-center pt-8 px-8`
			)}
		>
			<HeroImage />

			<h1>
				<span
					className={cls(
						`text-gray-500 dark:text-gray-400 text-3xl sm:text-4xl font-amaranth`
					)}
				>
					Hi!,&#x1F44B; I&apos;m
				</span>{" "}
				<span
					className={cls(
						`text-accent text-4xl sm:text-5xl font-amaranth`
					)}
				>
					Nirvik Purkait
				</span>
			</h1>
			<h2
				className={cls(
					`text-2xl sm:text-3xl font-bold bg-gradient-to-br from-purple-700 to-[#f67e6a] bg-clip-text text-transparent`
				)}
			>
				Full-stack developer
			</h2>

			<h3 className={cls(`text-lg max-w-lg sm:text-xl`)}>
				I am a full-stack developer, based in India. My main interest
				lies on back-end development. Currently, I&apos;m living in West
				Bengal, India.
			</h3>
			<div
				className={cls(
					`flex flex-wrap gap-x-6 gap-y-2 justify-center items-center pt-4`
				)}
			>
				<DownloadResumeButton />
				<LetsConnect />
			</div>
		</div>
	);
}

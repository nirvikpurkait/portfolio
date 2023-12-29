import { cls } from "@/utils/tailwind/cls";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FooterHeading } from "../Footer";

export type SocialIconsProps = React.ComponentProps<"div">;

export default function SocialIcons() {
	return (
		<div>
			<FooterHeading>Follow me</FooterHeading>
			<div className={cls(`flex gap-2 w-max`)}>
				<Link
					href={`https://facebook.com/nirvikpurkait`}
					target="_blank"
					className={cls(
						`max-w-[20px] sm:max-w-[25px] md:max-w-[30px] lg:max-w-[35px] inline-block`
					)}
				>
					<Image
						src={`/icons/connect/facebook.svg`}
						alt="facebook-icon"
						width={100}
						height={100}
					/>
				</Link>

				<Link
					href={`https://github.com/nirvikpurkait`}
					target="_blank"
					className={cls(
						`max-w-[20px] sm:max-w-[25px] md:max-w-[30px] lg:max-w-[35px] inline-block`
					)}
				>
					<Image
						src={`/icons/connect/github.svg`}
						alt="github-icon"
						width={100}
						height={100}
					/>
				</Link>

				<Link
					href={`https://www.linkedin.com/in/nirvikpurkait/`}
					target="_blank"
					className={cls(
						`max-w-[20px] sm:max-w-[25px] md:max-w-[30px] lg:max-w-[35px] inline-block`
					)}
				>
					<Image
						src={`/icons/connect/linkedin.svg`}
						alt="linked-in-icon"
						width={100}
						height={100}
					/>
				</Link>

				<Link
					href={`https://wa.me/+918145149700`}
					target="_blank"
					className={cls(
						`max-w-[20px] sm:max-w-[25px] md:max-w-[30px] lg:max-w-[35px] inline-block`
					)}
				>
					<Image
						src={`/icons/connect/whatsapp.svg`}
						alt="whats-app-icon"
						width={100}
						height={100}
					/>
				</Link>
			</div>
		</div>
	);
}

import { cls } from "@/utils/tailwind/cls";
import Image from "next/image";
import React from "react";

export default function Info() {
	return (
		<div
			className={cls(
				`max-w-xs flex flex-col items-start gap-4 font-amaranth tracking-wide pt-8`
			)}
		>
			<div className={cls(`flex justify-center items-start`)}>
				<a
					className={cls(`inline-block w-12 pt-1`)}
					href="https://wa.me/+918145149700"
				>
					<Image
						src={`/icons/connect/whatsapp.svg`}
						alt="whatsapp-icon"
						width={100}
						height={100}
						className={cls(`w-auto sm:w-full h-full sm:h-auto`)}
					/>
				</a>
				<span className={cls(`pl-4`)}>
					<h4 className={cls(`text-2xl`)}>Whats App</h4>
					<p>+91-81451 49700</p>
				</span>
			</div>

			<div className={cls(`flex justify-center items-start max-w-sm`)}>
				<a
					className={cls(`inline-block w-12 pt-1`)}
					href="mailto:nirvikpurkait@gmail.com"
				>
					<Image
						src={`/icons/connect/gmail.svg`}
						alt="message-icon"
						width={100}
						height={100}
						className={cls(`w-auto sm:w-full h-full sm:h-auto`)}
					/>
				</a>
				<span className={cls(`pl-4`)}>
					<h4 className={cls(`text-2xl`)}>E-mail</h4>
					<p>nirvikpurkait@gmail.com</p>
				</span>
			</div>

			<div className={cls(`flex justify-center items-start max-w-sm`)}>
				<span className={cls(`inline-block w-12 pt-1`)}>
					<Image
						src={`/icons/connect/location.svg`}
						alt="location-icon"
						width={100}
						height={100}
						className={cls(`w-auto sm:w-full h-full sm:h-auto`)}
					/>
				</span>
				<span className={cls(`pl-4`)}>
					<h4 className={cls(`text-2xl`)}>Address</h4>
					<p>
						South 24 PGS, 743 368, <br /> West Bengal, India
					</p>
				</span>
			</div>
		</div>
	);
}

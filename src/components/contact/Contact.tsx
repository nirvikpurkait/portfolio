import ContactForm from "@/components/contact/form/ContactForm";
import ContactPageBackground from "@/components/contact/ContactPageBackground";
import Intro from "@/components/contact/intro/Intro";
import { cls } from "@/utils/tailwind/cls";
import React from "react";
import Info from "./info/Info";

export default function Contact() {
	return (
		<div className={cls(`@container`)}>
			<div
				className={cls(
					`flex gap-4 gap-y-12 flex-col px-8 @2xl:flex-row mt-10 pb-12 @lg:px-16 @2xl:px-24`
				)}
			>
				<div
					className={cls(
						`basis-full flex flex-col justify-center items-start`
					)}
				>
					<Intro />
					<Info />
				</div>
				<div
					className={cls(
						`basis-full flex justify-center items-center`
					)}
				>
					<ContactForm />
				</div>
				<ContactPageBackground />
			</div>
		</div>
	);
}

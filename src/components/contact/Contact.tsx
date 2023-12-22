import ContactForm from "@/components/contact/form/ContactForm";
import ContactPageBackground from "@/components/contact/ContactPageBackground";
import Intro from "@/components/contact/intro/Intro";
import { cls } from "@/utils/tailwind/cls";
import React from "react";

export default function Contact() {
	return (
		<div className={cls(`@container`)}>
			<div
				className={cls(`flex gap-4 flex-col px-8 @2xl:flex-row mt-10`)}
			>
				<div
					className={cls(
						`basis-full flex justify-center items-start`
					)}
				>
					<Intro />
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

import ContactForm from "@/components/contact/form/contact-form";
import ContactPageBackground from "@/components/contact/contact-page-background";
import Intro from "@/components/contact/intro/contact-intro";
import React from "react";
import Info from "./info/public-info";
import { cn } from "@/lib/utils";

export default function Contact() {
	return (
		<div className={cn(`@container`)}>
			<div
				className={cn(
					`flex gap-4 gap-y-12 flex-col px-8 @2xl:flex-row mt-10 pb-12 @lg:px-16 @2xl:px-24`
				)}
			>
				<div
					className={cn(
						`basis-full flex flex-col justify-center items-start`
					)}
				>
					<Intro />
					<Info />
				</div>
				<div
					className={cn(
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

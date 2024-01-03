"use client";

import React from "react";
import { Modal } from "@/components/custom-components";
import { cls } from "@/utils/tailwind/cls";
import { useRouter } from "next/navigation";

export default function ProjectCardModalView({
	children,
}: {
	children: React.ReactNode;
}) {
	const router = useRouter();

	return (
		<Modal
			className={cls(
				`__modal__ w-full max-w-[25rem] @container bg-gray-300 dark:bg-gray-900`
			)}
			closeOnInteractionOutside
			onModalClose={() => router.back()}
		>
			{children}
		</Modal>
	);
}

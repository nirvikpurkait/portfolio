import React from "react";
import ModalImage from "./ModalImage";
import { cls } from "@/utils/tailwind/cls";
import Link from "next/link";
import { prisma } from "@/database/prisma";

type ModalContentProps = {
	id: string;
};

export default async function ModalContent(props: ModalContentProps) {
	try {
		const modalContent = await prisma.projectDetails.findFirst({
			where: {
				id: props.id,
			},
		});
		if (!modalContent) throw new Error();

		return (
			<>
				<ModalImage
					heading={modalContent.heading}
					imageURL={modalContent.thumbnailImageUrl}
					imageDescription={
						modalContent.imageDescription ??
						`an image about ${modalContent.heading}`
					}
				/>
				<h4
					className={cls(
						`text-lg @[350px]:text-xl text-black dark:text-white my-4`
					)}
				>
					{modalContent.heading}
				</h4>
				<div className={cls(`flex gap-2 mb-4 flex-wrap`)}>
					<ViewLink href={modalContent.liveLink}>View live</ViewLink>
					<ViewLink href={modalContent.sourceLink}>
						View source
					</ViewLink>
				</div>
			</>
		);
	} catch (error) {
		return <div>The project you are looking for does not exists</div>;
	}
}

function ViewLink({
	href,
	children,
}: {
	href: string;
	children: React.ReactNode;
}) {
	return (
		<Link
			href={href}
			className={cls(
				`border-solid border-accent border-2 relative after:absolute after:top-0 after:right-full after:w-full after:h-full after:bg-accent after:translate-x-[10px] px-3 py-1.5 hover:after:translate-x-full after:transition-all after:z-[-1] hover:text-white text-accent dark:text-white after:scale-110 hover:after:scale-110 overflow-clip w-max`
			)}
		>
			{children}
		</Link>
	);
}

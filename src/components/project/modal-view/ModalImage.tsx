import { cls } from "@/utils/tailwind/cls";
import Image from "next/image";
import React from "react";

type ModalImageProps = {
	imageURL: string;
	imageDescription?: string;
	heading: string;
};

export default function ModalImage(props: ModalImageProps) {
	return (
		<div
			className={cls(
				`w-full aspect-video relative overflow-hidden bg-red-500`
			)}
		>
			<Image
				fill
				src={props.imageURL}
				alt={props.imageDescription ?? `an image for ${props.heading}`}
			/>
		</div>
	);
}

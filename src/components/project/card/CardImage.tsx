import { cls } from "@/utils/tailwind/cls";
import Image from "next/image";
import React from "react";

type CardImageProps = {
	thumbnailImageUrl: string;
	imageDescription?: string;
	heading: string;
};

export default function CardImage(props: CardImageProps) {
	const { heading, imageDescription, thumbnailImageUrl } = props;

	return (
		<div className={cls(`w-full aspect-video relative overflow-hidden`)}>
			<Image
				fill
				src={thumbnailImageUrl}
				alt={imageDescription ?? `an image for ${heading}`}
			/>
		</div>
	);
}

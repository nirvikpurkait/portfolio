/* eslint-disable @next/next/no-img-element */

import { cls } from "@/utils/tailwind/cls";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { faUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import CardImage from "./CardImage";

export type CardProps = {
	thumbnailImageUrl: string;
	heading: string;
	liveLink: string;
	sourceLink: string;
	description?: string;
	id: string;
	imageDescription?: string;
};

export default function Card(props: CardProps) {
	let {
		heading,
		sourceLink,
		thumbnailImageUrl,
		liveLink,
		description,
		id,
		imageDescription,
	} = props;

	return (
		<Link
			href={`/project/${id}`}
			className={cls(
				`block w-full max-w-xs h rounded-md @container shadow-md shadow-black/20 dark:shadow-white/10 px-3 py-2 bg-gray-100 dark:bg-gray-900`
			)}
		>
			<CardImage
				heading={heading}
				thumbnailImageUrl={thumbnailImageUrl}
				imageDescription={imageDescription}
			/>

			<h3 className={cls(`text-lg @[280px]:text-xl`)}>{heading}</h3>
		</Link>
	);
}

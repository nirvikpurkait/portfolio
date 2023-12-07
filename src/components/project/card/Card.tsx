import { cls } from "@/utils/tailwind/cls";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { faUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";

export type CardProps = {
	thumbnailUrl: string;
	heading: string;
	liveLink: string;
	sourceLink: string;
};

export default function Card(props: CardProps) {
	let { heading, sourceLink, thumbnailUrl, liveLink } = props;

	// __________________________________________
	thumbnailUrl =
		"https://images.pexels.com/photos/19341525/pexels-photo-19341525/free-photo-of-man-standing-with-bicycle.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load";
	heading = "Lorem ipsum dolor sit amet, consectetur adipisicing elit.";

	liveLink = "https://www.google.com";
	sourceLink = "https://www.google.com";

	// __________________________________________

	return (
		<div
			className={cls(
				`max-w-[20rem] m-auto min-w-[10rem] w-full bg-gray-200 dark:bg-gray-800 rounded-md overflow-hidden cursor-pointer @container`
			)}
		>
			<Link href={liveLink}>
				<img
					src={thumbnailUrl}
					className={cls(`object-cover aspect-video w-full`)}
				/>
			</Link>
			<Link href={sourceLink} target="_blank">
				<h3
					className={cls(
						`mx-4 my-3 text-sm uppercase relative pr-3 @[240px]:text-base @[300px]:text-lg`
					)}
				>
					{heading}
					<FontAwesomeIcon
						icon={faUpRightFromSquare}
						className={cls(`absolute top-0 right-0 w-3 pt-1`)}
					/>
				</h3>
			</Link>
		</div>
	);
}

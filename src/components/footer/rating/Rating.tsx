import { cls } from "@/utils/tailwind/cls";
import React from "react";
import RatingForm from "./RatingForm";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { FooterHeading } from "../Footer";

export type RatingProps = React.ComponentProps<"div">;

export default function Rating(props: RatingProps) {
	return (
		<div className={cls(``, props.className)}>
			<FooterHeading>Liked this project?</FooterHeading>
			<RatingForm starAsLabel={<FontAwesomeIcon icon={faStar} />} />
		</div>
	);
}

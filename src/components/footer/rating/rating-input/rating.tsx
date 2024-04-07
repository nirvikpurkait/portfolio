import React from "react";
import RatingForm from "./rating-form";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { FooterHeading } from "../..";
import { cn } from "@/lib/shadcn-ui/utils";

export type RatingProps = React.ComponentProps<"div">;

export default function Rating(props: RatingProps) {
  return (
    <div className={cn(``, props.className)}>
      <FooterHeading>Liked this project?</FooterHeading>
      <div className={cn(`mb-2 font-rajdhani`)}>
        Can you provide some rating?
      </div>
      {/* radio-buttons are used for input field, 
					and stars are used for labels */}
      <RatingForm starAsLabel={<FontAwesomeIcon icon={faStar} />} />
    </div>
  );
}

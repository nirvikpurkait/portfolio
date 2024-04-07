import React from "react";
import RatingAmountBar from "./rating-amount-bar";
import UsersRating from "./users-rating";
import { cn } from "@/lib/shadcn-ui/utils";
import { FooterHeading } from "@/components/footer";

export default function RatingOutput(props: React.ComponentProps<"div">) {
  return (
    <div {...props}>
      <FooterHeading>Rating</FooterHeading>
      <div className={cn(`space-y-3`)}>
        <UsersRating />
        <RatingAmountBar />
      </div>
    </div>
  );
}

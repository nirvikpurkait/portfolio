import { cn } from "@/lib/shadcn-ui/utils";
import React from "react";
import { starArray } from "./star-array";
import Star from "./star";
import { ratingDetails } from "@/utils/rating-details";

export default async function UsersRating() {
  let { averageRating } = await ratingDetails();

  if (isNaN(averageRating)) averageRating = 0;

  const ratingArray = starArray(averageRating, 5);

  return (
    <div className={cn(`flex flex-wrap items-center justify-between`)}>
      <div className={cn(`flex gap-1`)}>
        {ratingArray.map((eachRatingArray, index) => {
          return (
            <Star
              colorArray={eachRatingArray}
              fillId={`fill-id-${index}`}
              key={index}
            />
          );
        })}
      </div>
      <span className={cn(`text-2xl`)}>{averageRating}</span>
    </div>
  );
}

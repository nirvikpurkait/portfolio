import { cn } from "@/lib/shadcn-ui/utils";
import { ratingDetails } from "@/utils/rating-details";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

export default async function RatingAmountBar() {
  const { eachRatingDetails, totalCount } = await ratingDetails();

  return (
    <div className={cn(`space-y-2`)}>
      {eachRatingDetails.map((eachRating) => {
        return (
          <div className={cn(`space-y-1`)} key={eachRating.rating}>
            <div className={cn(`flex items-center justify-between`)}>
              <div className={cn(`flex items-center gap-1`)}>
                <span className={cn(`text-lg`)}>{eachRating.rating}</span>
                <span>
                  <FontAwesomeIcon
                    className={cn(`w-5 text-yellow-500`)}
                    icon={faStar}
                  />
                </span>
              </div>
              <div>{eachRating.count}</div>
            </div>
            <Bar count={eachRating.count} outOf={totalCount} />
          </div>
        );
      })}
    </div>
  );
}

function Bar({ count, outOf }: { count: number; outOf: number }) {
  const amount = 100 - (count / outOf) * 100;
  return (
    <>
      <div
        className={cn(
          `relative h-3 w-full overflow-clip rounded-full bg-black/20 dark:bg-white/40`
        )}
      >
        <div
          style={{ transform: `translateX(-${amount}%)` }}
          className={cn(
            `absolute left-0 top-0 h-full w-full -translate-x-full rounded-full bg-yellow-500`
          )}
        ></div>
      </div>
    </>
  );
}

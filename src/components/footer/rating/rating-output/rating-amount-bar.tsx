import { cn } from "@/lib/shadcn-ui/utils";
import { ratingDetails } from "@/utils/rating-details";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

export default async function RatingAmountBar() {
  const { eachRatingDetails, totalCount } = await ratingDetails();

  type EachRatingDetails = typeof eachRatingDetails;

  /**
   * reverse the array so that we can map the array
   * as an increasing order
   */
  eachRatingDetails.reverse();

  // pick the first element of the array to compare
  let currentIndex = 0;

  /**
   * compare the rating details elements for each of the `key`,
   * if the element matches return the count as it is, if not
   * return the count as "0"
   *
   * at last reverse the array again, so that it shows the
   * details as decreasing order
   */
  const formatedEachRatingDetails: EachRatingDetails = Array.from(
    Array(5).keys()
  )
    .map((key) => {
      if (eachRatingDetails[currentIndex]?.rating === key + 1) {
        const thisIndex = currentIndex;
        currentIndex++;
        return {
          rating: key + 1,
          count: eachRatingDetails[thisIndex].count,
        };
      } else {
        return {
          rating: key + 1,
          count: 0,
        };
      }
    })
    .reverse();

  return (
    <div className={cn(`space-y-2`)}>
      {formatedEachRatingDetails.map((eachRating) => {
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

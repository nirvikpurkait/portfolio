import { cachedRatingDetails } from "@/cache/cached-rating";

/**
 * A function to separate rating information to use them later,
 * ___
 * `totalCount` - provides count of total how many rating history is recorded.
 * ___
 *
 * `eachRatingDetails` - provides information about each type of rating,
 * it gives an array of Object containing, information about what type of
 * rating it is with `rating` key, and how many of that type is recorded
 * with `count` key.
 * - The array is in decreasing order for `rating` key.
 * ___
 * `averageRating` - It provides information about the average rating of the
 * recorded rating.
 */

export const ratingDetails = async function () {
  const details = await cachedRatingDetails();

  // toatl no of history recorded
  // Array reduce method is used to sum up the no
  const totalCount = details.reduce((accumulator, currentvalue) => {
    return accumulator + currentvalue._count;
  }, 0);

  // format the data as desired type
  const eachRatingDetails = details.map((detail) => {
    return {
      rating: detail.rating,
      count: detail._count,
    };
  });

  const totalRatingAmount = details.reduce((accumulator, currentvalue) => {
    return accumulator + currentvalue._count * currentvalue.rating;
  }, 0);

  const averageRating = Number((totalRatingAmount / totalCount).toFixed(1));

  return { totalCount, eachRatingDetails, averageRating };
};

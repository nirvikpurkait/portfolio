import { cachedRatingDetails } from "@/cache/cached-rating";

export const ratingDetails = async function () {
  const details = await cachedRatingDetails();

  const totalCount = details.reduce((accumulator, currentvalue) => {
    return accumulator + currentvalue._count;
  }, 0);

  const eachRatingDetails = details.map((detail) => {
    return {
      rating: detail.rating,
      count: detail._count,
    };
  });

  // console.log(eachRatingDetails);

  const totalRatingAmount = details.reduce((accumulator, currentvalue) => {
    return accumulator + currentvalue._count * currentvalue.rating;
  }, 0);

  const averageRating = Number((totalRatingAmount / totalCount).toFixed(1));

  return { totalCount, eachRatingDetails, averageRating };
};

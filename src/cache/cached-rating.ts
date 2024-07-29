import { getRatingDetails } from "@/app/api/rating/rating.server-action";
import { unstable_cache as cache } from "next/cache";

// assigning string in `const` so that it reduces typo
export const revalidateRatingDetails = "revalidate-rating-details";

// function to cache the rating details
export const cachedRatingDetails = cache(getRatingDetails, ["rating-details"], {
  tags: [revalidateRatingDetails],
});

// type of cached educaion data
export type TCachedRatingDetails = typeof cachedRatingDetails;

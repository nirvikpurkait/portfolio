import { getRatingDetails } from "@/app/api/rating/rating.server-action";
import { unstable_cache as cache } from "next/cache";

export const cachedRatingDetails = cache(
  getRatingDetails,
  ["rating-details"],
  { tags: ["revalidate-rating-details"] }
);

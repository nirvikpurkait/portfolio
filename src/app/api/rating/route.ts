import { NextRequest, NextResponse } from "next/server";
import { addRatingDetails } from "./rating.server-action";
import { RatingSchema } from "@/components/footer/rating/rating-input/rating-form.utils";

export async function GET(req: NextRequest) {
  const res = await addRatingDetails(req as unknown as RatingSchema);

  if (res?.status === "fail")
    return new NextResponse(JSON.stringify(res), { status: 404 });
  else if (res?.status === "success")
    return new NextResponse(JSON.stringify(res), { status: 200 });
}

import { NextRequest, NextResponse } from "next/server";
import { ratingSchema } from "@/components/footer/rating/RatingForm.utils";
import { ZodError } from "zod";
import { prisma } from "@/database/prisma";
import { validateEmail } from "@/utils";

export async function POST(req: NextRequest) {
	try {
		const reqBody = await req.json();

		const data = ratingSchema.parse(reqBody);

		// check if email is valid type or not
		await validateEmail(data.email);

		// save the rating in database (create or update)
		const newData = await prisma.rating.upsert({
			create: {
				email: data.email,
				rating: data.rating,
			},
			update: {
				rating: data.rating,
				updatedAt: new Date().toISOString(),
			},
			where: {
				email: data.email,
			},
		});

		// send response
		const resData = {
			status: `success`,
			data: newData,
		};
		return new NextResponse(JSON.stringify(resData), {
			status: 200,
			headers: {
				"content-type": "application/json",
			},
		});
		/**
		 *
		 *
		 *
		 */
	} catch (error: any) {
		console.error(error.message);

		// if req body is not JSON data
		if (error instanceof SyntaxError) {
			return new NextResponse(
				JSON.stringify({
					status: `failed`,
					message: `Please provide req body with email and rating value`,
				}),
				{
					status: 406,
					headers: {
						"content-type": "application/json",
					},
				}
			);
		}

		// if req body doesn't contain required type of data
		if (error instanceof ZodError) {
			return new NextResponse(
				JSON.stringify({
					status: `failed`,
					message: `Please provide valid type of data`,
				}),
				{
					status: 406,
					headers: {
						"content-type": "application/json",
					},
				}
			);
		}

		// if the email is not a valid email id
		if (error.cause === "email-validation-failed") {
			return new NextResponse(
				JSON.stringify({
					status: `failed`,
					message: error.message,
				}),
				{
					status: 406,
					headers: {
						"content-type": "application/json",
					},
				}
			);
		}
	}
}

import { contactFormSchema } from "@/components/contact/form/contact-form.utils";
import { prisma } from "@/database/prisma";
import { validateEmail } from "@/utils/email";
import { NextRequest, NextResponse } from "next/server";
import { ZodError } from "zod";

type SuccessRes = {
	status: "success";
	data: any;
	info?: any;
};

type ErrorRes = {
	status: "failed";
	message: string;
	info?: any;
};

type ResObj = SuccessRes | ErrorRes;

export async function POST(req: NextRequest) {
	try {
		const reqBody = await req.json();

		const data = contactFormSchema.parse(reqBody);

		await validateEmail(data.email);

		const newMessage = await prisma.contactMessage.create({
			data: {
				email: data.email,
				message: data.message,
				name: data.name,
			},
		});

		const resMsg: ResObj = {
			status: "success",
			data: newMessage,
		};

		return new NextResponse(JSON.stringify(resMsg), {
			status: 200,
			headers: {
				"content-type": "application/json",
			},
		});

		/**
		 *
		 *
		 *
		 *
		 */
	} catch (error: any) {
		console.error(error.message);

		// if json body is not sent
		if (error instanceof SyntaxError) {
			const resMsg: ResObj = {
				status: "failed",
				message: "Please send JSON data",
			};

			return new NextResponse(JSON.stringify(resMsg), {
				status: 406,
				headers: {
					"content-type": "application/json",
				},
			});
		}

		// if req body does not contain required data
		if (error instanceof ZodError) {
			const resMsg: ResObj = {
				status: "failed",
				message: `Please send valid type JSON data`,
			};

			return new NextResponse(JSON.stringify(resMsg), {
				status: 406,
				headers: {
					"content-type": "application/json",
				},
			});
		}

		if (error.cause === "email-validation-failed") {
			const resMsg: ResObj = {
				status: "failed",
				message: error.message,
			};

			return new NextResponse(JSON.stringify(resMsg), {
				headers: {
					"content-type": "application/json",
				},
				status: 406,
			});
		}
	}
}

import { prisma } from "@/database/prisma";
import { PrismaClientKnownRequestError } from "@prisma/client/runtime/library";
import { NextRequest, NextResponse } from "next/server";
import { ZodError, z } from "zod";

export async function GET() {
	const headers = new Headers();

	headers.append("Content-Type", "application/json");

	const toolsTechnologies = await prisma.toolsTechnologies.findMany();

	return new NextResponse(JSON.stringify(toolsTechnologies), { headers });
}

export async function POST(req: NextRequest) {
	const reqBodySchema = z
		.object({
			skill: z.string(),
			special: z.boolean(),
			id: z.string().optional(),
		})
		.or(
			z.array(
				z.object({
					skill: z.string(),
					special: z.boolean(),
					id: z.string().optional(),
				})
			)
		);

	try {
		const reqBody = await req.json();

		const data = reqBodySchema.parse(reqBody);

		let createdData;

		if (Array.isArray(data)) {
			createdData = await prisma.toolsTechnologies.createMany({ data });
		} else {
			createdData = await prisma.toolsTechnologies.create({ data });
		}

		const resMessage = {
			message: `Data created successfully`,
			data: createdData,
		};

		return new NextResponse(JSON.stringify(resMessage), {
			status: 200,
		});
	} catch (error: any) {
		if (error instanceof ZodError) {
			console.error(error.message);
		}

		return new NextResponse(`Invalid type of data passed`, {
			status: 400,
		});
	}
}

export async function PUT(req: NextRequest) {
	const reqBodySchema = z.object({
		skill: z.string().optional(),
		special: z.boolean().optional(),
	});

	try {
		const reqBody = await req.json();
		const reqHeaders = req.headers;

		const data = reqBodySchema.parse(reqBody);
		const id = reqHeaders.get("id");

		if (!id) throw new Error(`Please provide id`, { cause: "id" });

		const updatedData = await prisma.toolsTechnologies.update({
			where: { id: id },
			data: data,
		});

		const resMessage = {
			message: `Data succesfully updated`,
			data: updatedData,
		};

		return new NextResponse(JSON.stringify(resMessage), { status: 200 });
	} catch (error: any) {
		if (error instanceof ZodError) {
			console.error(error.message);
		}

		if (error.cause === "id") {
			console.error(error.message);
			return new NextResponse(error.message, {
				status: 406,
			});
		}

		if (error instanceof PrismaClientKnownRequestError) {
			console.error(error.message);
			return new NextResponse(`Please provide valid id`, {
				status: 406,
			});
		}

		return new NextResponse(`Invalid type of data passed`, {
			status: 406,
		});
	}
}

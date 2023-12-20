import { prisma } from "@/database/prisma";
import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";

export async function GET(req: NextRequest) {
	const headers = new Headers();

	headers.append("Content-Type", "application/json");

	const educationDetailsList = await prisma.education.findMany();

	return new NextResponse(JSON.stringify(educationDetailsList), { headers });
}

export async function POST(req: NextRequest) {
	const reqBodySchema = z.object({
		id: z.string().optional(),
		course: z.string(),
		institute: z.string(),
		yearOfPassing: z.number().min(2000).max(2099),
		percentage: z.number().min(0).max(100).optional(),
		GPA: z.number().min(0).max(10).optional(),
		special: z.boolean().optional().default(false),
		data: z.string().optional(),
	});

	const reqBody = await req.json();
	const data = reqBodySchema.parse(reqBody);

	const newData = await prisma.education.create({ data });

	return new NextResponse(JSON.stringify(newData));
}

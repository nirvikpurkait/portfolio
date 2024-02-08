import { renderToBuffer } from "@react-pdf/renderer";
import { NextRequest, NextResponse } from "next/server";

// import { MyResumePdf } from "./Resume.react-pdf";
import { generatePdfFrom } from "./Resume.react-pdf";
import { unstable_noStore as noStore } from "next/cache";

export async function GET(req: NextRequest) {
	const headers = new Headers();
	headers.append(
		"Content-Disposition",
		'attachment; filename="Nirvik-Purkait-Resume.pdf"'
	);
	headers.append("Content-Type", "application/pdf");

	const pdf = await generatePdfFrom();

	const buffer = await renderToBuffer(pdf());

	return new NextResponse(buffer, { headers });
}

export const dynamic = "force-dynamic";

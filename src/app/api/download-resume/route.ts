import { renderToBuffer } from "@react-pdf/renderer";
import { NextResponse } from "next/server";

// import { MyResumePdf } from "./Resume.react-pdf";
import { MyPDFDocument } from "./Resume.react-pdf";

export async function GET() {
	const headers = new Headers();
	headers.append(
		"Content-Disposition",
		'attachment; filename="Nirvik Purkait Resume.pdf"'
	);
	headers.append("Content-Type", "application/pdf");

	const buffer = await renderToBuffer(MyPDFDocument());

	return new NextResponse(buffer, { headers });
}

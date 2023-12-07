import fs from "node:fs/promises";
import path from "node:path";

export async function GET() {
	const filepath = path.join(
		__dirname,
		"../../../../../src/database/static/curriculum-vitae.pdf"
	);
	const buffer = await fs.readFile(filepath);

	const headers = new Headers();
	headers.append(
		"Content-Disposition",
		'attachment; filename="Nirvik Purkait Resume.pdf"'
	);
	headers.append("Content-Type", "application/pdf");

	return new Response(buffer, {
		headers,
	});
}

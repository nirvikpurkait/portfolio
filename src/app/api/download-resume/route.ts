import { renderToBuffer } from "@react-pdf/renderer";
import { NextRequest, NextResponse } from "next/server";

import { generatePdf } from "./Resume.react-pdf";

export async function GET(req: NextRequest) {
  const headers = new Headers();
  try {
    const pdf = await generatePdf();
    const buffer = await renderToBuffer(pdf());

    headers.append(
      "Content-Disposition",
      'attachment; filename="Nirvik-Purkait-Resume.pdf"'
    );
    headers.append("Content-Type", "application/pdf");
    return new NextResponse(buffer, { headers, status: 200 });
  } catch (error) {
    return new NextResponse("Error while generating pdf", { status: 500 });
  }
}

export const dynamic = "force-dynamic";

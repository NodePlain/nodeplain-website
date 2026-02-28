import { NextRequest, NextResponse } from "next/server";
import { readFileSync } from "fs";
import { join } from "path";

// The access key — set via Vercel env var, or falls back to a default.
// To change: go to Vercel Dashboard → Settings → Environment Variables → add CLIENT_PORTAL_KEY
const VALID_KEY = process.env.CLIENT_PORTAL_KEY || "SC-2026-BRANDBOOK";

/** POST — validate key (returns JSON) */
export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { key } = body;

    if (!key || key !== VALID_KEY) {
      return NextResponse.json({ error: "Invalid key" }, { status: 401 });
    }

    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}

/** GET — serve the raw HTML (so iOS Safari respects viewport meta inside the iframe) */
export async function GET(req: NextRequest) {
  try {
    const key = req.nextUrl.searchParams.get("key");

    if (!key || key !== VALID_KEY) {
      return new NextResponse("Unauthorized", { status: 401 });
    }

    const htmlPath = join(process.cwd(), "src", "data", "strategic-cyber-brand-guidelines.html");
    const html = readFileSync(htmlPath, "utf-8");

    return new NextResponse(html, {
      headers: {
        "Content-Type": "text/html; charset=utf-8",
        "X-Frame-Options": "SAMEORIGIN",
        "Cache-Control": "no-store",
      },
    });
  } catch {
    return new NextResponse("Server error", { status: 500 });
  }
}

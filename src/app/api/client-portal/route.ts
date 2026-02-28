import { NextRequest, NextResponse } from "next/server";
import { readFileSync } from "fs";
import { join } from "path";

// The access key — set via Vercel env var, or falls back to a default.
// To change: go to Vercel Dashboard → Settings → Environment Variables → add CLIENT_PORTAL_KEY
const VALID_KEY = process.env.CLIENT_PORTAL_KEY || "SC-2026-BRAND";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { key } = body;

    if (!key || key !== VALID_KEY) {
      return NextResponse.json({ error: "Invalid key" }, { status: 401 });
    }

    // Read the HTML file from the data directory
    const htmlPath = join(process.cwd(), "src", "data", "strategic-cyber-brand-guidelines.html");
    const html = readFileSync(htmlPath, "utf-8");

    return NextResponse.json({ html });
  } catch {
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}

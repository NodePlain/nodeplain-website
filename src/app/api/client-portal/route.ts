import { NextRequest, NextResponse } from "next/server";
import { readFileSync } from "fs";
import { join } from "path";

// Portal entries — each access key maps to a content source.
// "type: file"  → serves a local HTML file via iframe
// "type: url"   → redirects iframe to an external deployed URL
const PORTAL_ENTRIES: Record<
  string,
  | { type: "file"; path: string }
  | { type: "url"; url: string }
> = {
  // Brand guidelines (existing)
  "SC-2026-BRANDBOOK": {
    type: "file",
    path: "src/data/strategic-cyber-brand-guidelines.html",
  },
  // Web Design v1 — Path variation
  "SC-2026-webv1": {
    type: "url",
    url: process.env.PORTAL_URL_WEBV1 || "https://sc-path.vercel.app",
  },
  // Web Design v2 — Scappa variation
  "SC-2026-webv2": {
    type: "url",
    url: process.env.PORTAL_URL_WEBV2 || "https://sc-scappa.vercel.app",
  },
};

function lookupEntry(key: string) {
  return PORTAL_ENTRIES[key] ?? null;
}

/** POST — validate key (returns JSON with content type info) */
export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { key } = body;

    if (!key) {
      return NextResponse.json({ error: "Invalid key" }, { status: 401 });
    }

    const entry = lookupEntry(key.trim());
    if (!entry) {
      return NextResponse.json({ error: "Invalid key" }, { status: 401 });
    }

    if (entry.type === "url") {
      return NextResponse.json({ ok: true, type: "url", url: entry.url });
    }

    return NextResponse.json({ ok: true, type: "file" });
  } catch {
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}

/** GET — serve local HTML file (for "file" type entries only) */
export async function GET(req: NextRequest) {
  try {
    const key = req.nextUrl.searchParams.get("key");

    if (!key) {
      return new NextResponse("Unauthorized", { status: 401 });
    }

    const entry = lookupEntry(key);
    if (!entry || entry.type !== "file") {
      return new NextResponse("Unauthorized", { status: 401 });
    }

    const htmlPath = join(process.cwd(), entry.path);
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

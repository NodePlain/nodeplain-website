"use client";

import { useState, useRef } from "react";

export default function ClientPortalPage() {
  const [key, setKey] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "error" | "success">("idle");
  const [htmlContent, setHtmlContent] = useState<string | null>(null);
  const iframeRef = useRef<HTMLIFrameElement>(null);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!key.trim()) return;

    setStatus("loading");

    try {
      const res = await fetch("/api/client-portal", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ key: key.trim() }),
      });

      if (res.ok) {
        const data = await res.json();
        setHtmlContent(data.html);
        setStatus("success");
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  // Once authenticated, render the HTML in a sandboxed iframe (full-screen overlay)
  if (status === "success" && htmlContent) {
    return (
      <div className="fixed inset-0 z-[9999] bg-cream">
        <iframe
          ref={iframeRef}
          srcDoc={htmlContent}
          title="Client Deliverable"
          className="w-full h-full border-0"
          sandbox="allow-same-origin allow-scripts allow-popups"
        />
      </div>
    );
  }

  // Key entry screen (full-screen overlay to cover navbar/footer)
  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-cream px-4">
      <div className="w-full max-w-md">
        {/* Logo */}
        <div className="text-center mb-10">
          <h1 className="font-body text-[1.1rem] font-extrabold tracking-[-0.04em]">
            <span className="text-ink">Node</span>
            <span className="text-amber">Plain</span>
          </h1>
          <p className="text-stone text-sm mt-1">Client Portal</p>
        </div>

        {/* Key Entry Card */}
        <div className="bg-white/55 backdrop-blur-xl border border-white/60 rounded-[14px] shadow-[0_1px_3px_rgba(42,38,32,0.04),0_8px_24px_rgba(42,38,32,0.06)] p-8">
          <h2 className="font-headline text-xl text-ink mb-1">
            Access your deliverable
          </h2>
          <p className="text-warm-body text-sm mb-6">
            Enter the access key provided in your email.
          </p>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label
                htmlFor="access-key"
                className="block text-xs font-medium text-stone mb-1.5 uppercase tracking-wider"
              >
                Access Key
              </label>
              <input
                id="access-key"
                type="text"
                value={key}
                onChange={(e) => {
                  setKey(e.target.value);
                  if (status === "error") setStatus("idle");
                }}
                placeholder="e.g. PCL-2024-AUTOMATION"
                autoFocus
                autoComplete="off"
                className="w-full px-4 py-3 rounded-[9px] border border-stone/20 bg-cream/50 text-ink text-sm placeholder:text-stone/50 focus:outline-none focus:ring-2 focus:ring-amber/40 focus:border-amber/50 transition-all"
              />
            </div>

            {status === "error" && (
              <p className="text-sm text-red-600/80">
                That key doesn&apos;t match. Double-check the key in your email and try again.
              </p>
            )}

            <button
              type="submit"
              disabled={status === "loading" || !key.trim()}
              className="w-full py-3 px-4 rounded-[9px] bg-ink text-cream text-sm font-semibold hover:bg-ink/90 focus:outline-none focus:ring-2 focus:ring-amber/40 disabled:opacity-50 disabled:cursor-not-allowed transition-all"
            >
              {status === "loading" ? "Verifying..." : "View Deliverable"}
            </button>
          </form>
        </div>

        <p className="text-center text-stone/60 text-xs mt-6">
          Questions? Reach out to your NodePlain contact.
        </p>
      </div>
    </div>
  );
}

import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { AnimatedBackground } from "@/components/ui/animated-background";

// Self-hosted fonts — eliminates Google Fonts DNS/TLS latency (~200-400ms saved)

// Headlines: Warm, editorial, trustworthy
const newsreader = localFont({
  src: [
    { path: "../../public/fonts/newsreader-latin-normal.woff2", weight: "400", style: "normal" },
    { path: "../../public/fonts/newsreader-latin-italic.woff2", weight: "400", style: "italic" },
  ],
  variable: "--font-headline",
  display: "swap",
  adjustFontFallback: "Times New Roman",
  preload: true,
});

// Body, UI, AND bold stat numbers — Outfit variable font covers all weights 400-700
// Replaces both Outfit + Plus Jakarta Sans (one less font family to download)
const outfit = localFont({
  src: "../../public/fonts/outfit-latin.woff2",
  variable: "--font-body",
  display: "swap",
  weight: "400 700",
  adjustFontFallback: "Arial",
  preload: true,
});

export const metadata: Metadata = {
  title: "NodePlain — The 50-Patient Pipeline for Allied Health",
  description: "Done-for-you patient acquisition, speed-to-lead automation, and recruitment. AHPRA-compliant marketing for Physio, Chiro, and Osteo clinics.",
  metadataBase: new URL('https://nodeplain.com'),
  openGraph: {
    type: 'website',
    locale: 'en_AU',
    siteName: 'NodePlain',
  },
};

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head />
      <body
        className={`${newsreader.variable} ${outfit.variable} antialiased bg-cream text-ink font-body selection:bg-amber/20`}
      >
        <div className="flex flex-col min-h-screen relative overflow-x-hidden">
          <AnimatedBackground />
          <Navbar />
          <main className="flex-1 pt-20">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}

import type { Metadata } from "next";
import { Newsreader, Plus_Jakarta_Sans, Outfit, Space_Mono } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { AnimatedBackground } from "@/components/ui/animated-background";

// Headlines: Warm, editorial, trustworthy
const newsreader = Newsreader({
  subsets: ["latin"],
  variable: "--font-headline",
  display: "swap",
  style: ["normal", "italic"],
  preload: true,
  adjustFontFallback: true,
});

// Bold Data/Stat Numbers: Punchy
const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-headline-bold",
  display: "swap",
  weight: ["600", "700"], // Reduced from 4 to 2 weights
  preload: true,
  adjustFontFallback: true,
});

// Body & UI: Navigation, buttons, paragraphs
const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
  weight: ["400", "500", "600"], // Reduced from 5 to 3 weights
  preload: true,
  adjustFontFallback: true,
});

// Tags & Labels: Technical precision
const spaceMono = Space_Mono({
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
  preload: false, // Don't preload less critical font
  adjustFontFallback: true,
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
      <head>
        {/* Preconnect to Google Fonts for faster font loading */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        {/* DNS prefetch for any external resources */}
        <link rel="dns-prefetch" href="https://fonts.googleapis.com" />
      </head>
      <body
        className={`${newsreader.variable} ${plusJakartaSans.variable} ${outfit.variable} ${spaceMono.variable} antialiased bg-cream text-ink font-body selection:bg-amber/20`}
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

import type { Metadata } from "next";
import { Space_Grotesk, Outfit, JetBrains_Mono } from "next/font/google";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { ScrollToTop } from "@/components/layout/ScrollToTop";
import { StructuredData } from "@/components/seo/StructuredData";
import "./globals.css";

const BASE_URL = "https://echocyber.io";

/**
 * FONTS
 *
 * Next.js downloads these at build time and self-hosts them.
 * The `variable` prop creates a CSS variable we reference in globals.css.
 *
 * This is like adding <link href="fonts.googleapis.com/..."> in Blade,
 * but with zero layout shift and no external requests.
 */

// Display font: headings, hero text, bold statements
const spaceGrotesk = Space_Grotesk({
  variable: "--font-display",
  subsets: ["latin"],
  display: "swap", // Show fallback font immediately, swap when loaded
});

// Body font: paragraphs, UI text
const outfit = Outfit({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",
});

// Mono font: code blocks, technical content
const jetbrainsMono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  display: "swap",
});

/**
 * METADATA
 *
 * This replaces <title> and <meta> tags in your Blade layout.
 * Next.js automatically adds these to the <head>.
 */
export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: "Echo Cyber Solutions",
    template: "%s | Echo Cyber Solutions",
  },
  description:
    "Fractional CTO & CISO services for growing companies. Strategic technology leadership without the full-time cost.",
  keywords: [
    "fractional CTO",
    "fractional CISO",
    "technology consulting",
    "cybersecurity",
    "technology leadership",
    "security leadership",
  ],
  authors: [{ name: "Michael Faas", url: "https://www.linkedin.com/in/mfaas/" }],
  creator: "Michael Faas",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: BASE_URL,
    siteName: "Echo Cyber Solutions",
    title: "Echo Cyber Solutions",
    description:
      "Fractional CTO & CISO services for growing companies. Strategic technology leadership without the full-time cost.",
    images: [
      {
        url: "/img/logo-hex-full.png",
        width: 1200,
        height: 630,
        alt: "Echo Cyber Solutions",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Echo Cyber Solutions",
    description:
      "Fractional CTO & CISO services for growing companies. Strategic technology leadership without the full-time cost.",
    images: ["/img/logo-hex-full.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    // Add verification codes when available
    // google: "verification-code",
  },
};

/**
 * ROOT LAYOUT
 *
 * This wraps every page in your app - like @extends('layouts.main') in Blade.
 * The {children} prop is where page content gets injected.
 */
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <head>
        <StructuredData />
      </head>
      <body
        className={`
          ${spaceGrotesk.variable}
          ${outfit.variable}
          ${jetbrainsMono.variable}
          antialiased
        `}
      >
        {/* Hex grid background - fixed behind everything */}
        <div className="fixed inset-0 bg-hex-grid opacity-20 pointer-events-none" />

        {/* Page structure */}
        <div className="relative flex min-h-screen flex-col">
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
        </div>

        {/* Back to top button */}
        <ScrollToTop />
      </body>
    </html>
  );
}

/**
 * HERO SECTION
 *
 * Original text from the Jigsaw site.
 * Uses HeroCircuit (hexagon cluster) from icons.tsx
 */

import Link from "next/link";
import { HeroCircuit } from "@/components/ui/icons";

export function HeroSection() {
  return (
    <section className="relative min-h-[90vh] flex items-center">
      {/* Bottom-right gradient accent */}
      <div className="absolute bottom-0 -right-20 w-80 h-80 bg-gradient-to-tl from-crimson-800/20 to-transparent transform skew-x-12 blur-2xl" />

      {/* Hero circuit decoration - positioned right, hidden on mobile */}
      <div className="absolute -right-20 top-1/2 -translate-y-1/2 w-3/4 h-[120%] pointer-events-none hidden lg:block">
        <HeroCircuit className="w-full h-full opacity-30" />
      </div>

      {/* Content */}
      <div className="relative mx-auto max-w-7xl px-6 lg:px-8 py-24 lg:py-32">
        <div className="max-w-3xl lg:max-w-xl">
          {/* Eyebrow */}
          <div className="flex items-center gap-3 mb-8">
            <div className="w-8 h-1 bg-crimson-600 rounded-full" />
            <span className="text-xs font-mono text-crimson-500 uppercase tracking-wider">
              Fractional Executive Services
            </span>
          </div>

          {/* Headline */}
          <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl font-bold text-white leading-[1.1] tracking-tight mb-6">
            Strategic tech leadership,{" "}
            <span className="text-crimson-500">when you need it.</span>
          </h1>

          {/* Subheadline */}
          <p className="text-xl lg:text-2xl text-echo-300 leading-relaxed mb-10 max-w-2xl">
            Technology strategy. Security leadership. Architecture decisions.
            Vendor evaluation. The CTO and CISO work your business needs—without
            the full-time overhead. And unlike most consultants, I won&apos;t
            pretend your challenges have simple answers when they don&apos;t.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 bg-crimson-700 hover:bg-crimson-600 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 hover:shadow-glow-lg group"
            >
              <span>Let&apos;s Talk</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 transition-transform group-hover:translate-x-1"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </Link>
            <Link
              href="/services"
              className="inline-flex items-center justify-center gap-2 bg-transparent border border-echo-600 hover:border-echo-500 text-echo-200 hover:text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300"
            >
              Learn More
            </Link>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6 text-echo-500"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 14l-7 7m0 0l-7-7m7 7V3"
          />
        </svg>
      </div>
    </section>
  );
}

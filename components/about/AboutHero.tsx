/**
 * ABOUT HERO SECTION
 *
 * Two-column layout: intro text on left, photo on right.
 */

import Link from "next/link";
import Image from "next/image";

export function AboutHero() {
  return (
    <section className="relative py-24 lg:py-32">
      {/* Subtle gradient accent */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-crimson-900/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-1 bg-crimson-600 rounded-full" />
              <span className="text-xs font-mono text-crimson-500 uppercase tracking-wider">
                About
              </span>
            </div>
            <h1 className="font-display text-4xl sm:text-5xl font-bold text-white mb-6">
              Technology leadership that speaks your language.
            </h1>
            <p className="text-xl text-echo-300 leading-relaxed mb-8">
              I&apos;m Michael Faas, and I help growing businesses navigate the
              complex world of technology and security. My mission: translating
              technical complexity into clear, actionable strategy.
            </p>
            <div className="flex items-center gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 bg-crimson-700 hover:bg-crimson-600 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 hover:shadow-glow"
              >
                Let&apos;s Talk
              </Link>
              <a
                href="https://www.linkedin.com/in/mfaas/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-echo-300 hover:text-white transition-colors"
              >
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
                <span>LinkedIn</span>
              </a>
            </div>
          </div>

          {/* Photo */}
          <div className="relative">
            <div className="absolute -inset-4 bg-gradient-to-br from-crimson-900/20 to-transparent rounded-2xl blur-2xl" />
            <Image
              src="/img/Michael_Faas.jpg"
              alt="Michael Faas - Fractional CTO & CISO"
              width={600}
              height={800}
              className="relative rounded-2xl shadow-2xl w-full max-w-md mx-auto lg:max-w-none"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

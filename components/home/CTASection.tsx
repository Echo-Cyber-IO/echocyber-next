/**
 * CTA SECTION
 *
 * Final call-to-action with gradient background.
 * Text from original Jigsaw site.
 */

import Link from "next/link";

export function CTASection() {
  return (
    <section className="py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="relative bg-gradient-to-br from-crimson-900/40 to-crimson-950/40 border border-crimson-800/30 rounded-2xl p-12 lg:p-16 overflow-hidden">
          {/* Background decoration - angular shapes */}
          <div className="absolute -top-12 -right-12 w-48 h-48 bg-crimson-800/20 transform rotate-45 blur-xl" />
          <div className="absolute -bottom-8 -left-8 w-32 h-32 bg-crimson-900/30 transform -rotate-12 blur-xl" />

          <div className="relative max-w-2xl">
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-white mb-6">
              Ready to level up your technology strategy?
            </h2>
            <p className="text-lg text-echo-300 mb-8">
              Let&apos;s have a conversation about where you are today and where
              you want to go. No pressure, no sales pitch - just a
              straightforward discussion about how I might be able to help.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 bg-white hover:bg-echo-100 text-echo-950 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 group"
            >
              <span>Get in Touch</span>
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
          </div>
        </div>
      </div>
    </section>
  );
}

/**
 * ABOUT CTA SECTION
 *
 * Centered call-to-action: "Let's talk about your challenges."
 */

import Link from "next/link";

export function AboutCTA() {
  return (
    <section className="py-24 lg:py-32 bg-echo-900/50">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-white mb-6">
            Let&apos;s talk about your challenges.
          </h2>
          <p className="text-lg text-echo-300 mb-8">
            Whether you&apos;re facing a specific technology decision or need
            ongoing strategic guidance, I&apos;m happy to have a conversation
            about how I might help.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center gap-2 bg-crimson-700 hover:bg-crimson-600 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 hover:shadow-glow-lg group"
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
    </section>
  );
}

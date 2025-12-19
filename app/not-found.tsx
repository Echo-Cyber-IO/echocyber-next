/**
 * 404 PAGE
 *
 * Custom not found page matching site design.
 */

import Link from "next/link";

export default function NotFound() {
  return (
    <section className="relative py-32 lg:py-48">
      {/* Gradient accent */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-crimson-900/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div className="max-w-2xl mx-auto text-center">
          {/* 404 number */}
          <div className="text-8xl sm:text-9xl font-display font-bold text-crimson-500/20 mb-4">
            404
          </div>

          {/* Heading */}
          <h1 className="font-display text-3xl sm:text-4xl font-bold text-white mb-4">
            Page not found
          </h1>

          {/* Description */}
          <p className="text-lg text-echo-300 mb-8">
            The page you&apos;re looking for doesn&apos;t exist or has been
            moved. Let&apos;s get you back on track.
          </p>

          {/* Actions */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/"
              className="inline-flex items-center gap-2 bg-crimson-700 hover:bg-crimson-600 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 hover:shadow-glow"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
              </svg>
              Back to Home
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 text-echo-300 hover:text-white transition-colors"
            >
              <span>Contact Support</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
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

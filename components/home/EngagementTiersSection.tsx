/**
 * ENGAGEMENT TIERS SECTION
 *
 * Preview of Tune, Signal, Echo tiers.
 * Text from original Jigsaw site - centered section with double bars.
 */

import Link from "next/link";

export function EngagementTiersSection() {
  return (
    <section className="py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section header - centered with double bars */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-8 h-1 bg-crimson-600 rounded-full" />
            <span className="text-xs font-mono text-crimson-500 uppercase tracking-wider">
              Engagement Options
            </span>
            <div className="w-8 h-1 bg-crimson-600 rounded-full" />
          </div>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-white mb-4">
            Ways to engage
          </h2>
          <p className="text-lg text-echo-300 max-w-2xl mx-auto">
            Three tiers designed to meet you where you are.
          </p>
        </div>

        {/* Tier cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-10">
          {/* Tune */}
          <div className="group bg-echo-800/30 border border-echo-700 hover:border-crimson-900 rounded-xl p-8 text-center transition-all duration-300 hover:bg-echo-800/50">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-crimson-950/40 group-hover:bg-crimson-950/60 rounded-2xl mb-5 transition-colors">
              <svg
                className="h-8 w-8 text-crimson-500"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <circle cx="12" cy="12" r="8" />
                <circle cx="12" cy="12" r="2.5" fill="currentColor" stroke="none" />
                <line x1="12" y1="9.5" x2="12" y2="4" />
              </svg>
            </div>
            <h3 className="font-display text-2xl font-bold text-white mb-2">
              Tune
            </h3>
            <p className="text-crimson-500 text-sm font-semibold uppercase tracking-wide mb-3">
              Strategy session
            </p>
            <p className="text-echo-400 text-sm leading-relaxed">
              Tune in, calibrate, assess. A focused session to diagnose where
              you are.
            </p>
          </div>

          {/* Signal (featured) */}
          <div className="group bg-echo-800/40 border-2 border-crimson-900 rounded-xl p-8 text-center transition-all duration-300 hover:bg-echo-800/60 hover:border-crimson-800">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-crimson-950/60 group-hover:bg-crimson-950/80 rounded-2xl mb-5 transition-colors">
              <svg
                className="h-8 w-8 text-crimson-500"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M9.348 14.652a3.75 3.75 0 0 1 0-5.304m5.304 0a3.75 3.75 0 0 1 0 5.304m-7.425 2.121a6.75 6.75 0 0 1 0-9.546m9.546 0a6.75 6.75 0 0 1 0 9.546M5.106 18.894c-3.808-3.807-3.808-9.98 0-13.788m13.788 0c3.808 3.807 3.808 9.98 0 13.788M12 12h.008v.008H12V12Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
              </svg>
            </div>
            <h3 className="font-display text-2xl font-bold text-white mb-2">
              Signal
            </h3>
            <p className="text-crimson-500 text-sm font-semibold uppercase tracking-wide mb-3">
              Fractional engagement
            </p>
            <p className="text-echo-400 text-sm leading-relaxed">
              Clear signal through the noise. Embedded leadership, 10 hours per
              week.
            </p>
          </div>

          {/* Echo */}
          <div className="group bg-echo-800/30 border border-echo-700 hover:border-crimson-900 rounded-xl p-8 text-center transition-all duration-300 hover:bg-echo-800/50">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-crimson-950/40 group-hover:bg-crimson-950/60 rounded-2xl mb-5 transition-colors">
              <svg
                className="h-8 w-8 text-crimson-500"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M2 12h4l2-5 4 10 2-5h8" />
              </svg>
            </div>
            <h3 className="font-display text-2xl font-bold text-white mb-2">
              Echo
            </h3>
            <p className="text-crimson-500 text-sm font-semibold uppercase tracking-wide mb-3">
              Ongoing advisory
            </p>
            <p className="text-echo-400 text-sm leading-relaxed">
              The feedback loop. Strategic guidance that continues long-term.
            </p>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <Link
            href="/services"
            className="text-crimson-500 hover:text-crimson-400 font-medium inline-flex items-center gap-2 transition-colors"
          >
            See full engagement details
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4"
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

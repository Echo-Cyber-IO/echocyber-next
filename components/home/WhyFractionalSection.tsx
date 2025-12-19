/**
 * WHY FRACTIONAL SECTION
 *
 * Original layout: 2 columns - text left, stats grid right.
 * Text from original Jigsaw site.
 */

import Link from "next/link";

export function WhyFractionalSection() {
  return (
    <section className="py-24 lg:py-32 bg-echo-900/50">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left column - text */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-1 bg-crimson-600 rounded-full" />
              <span className="text-xs font-mono text-crimson-500 uppercase tracking-wider">
                The Model
              </span>
            </div>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-white mb-6">
              Why fractional?
            </h2>
            <p className="text-lg text-echo-300 mb-8">
              Think of it like having a CFO on retainer. You get the strategic
              thinking and executive experience of a CTO or CISO - without the
              $300K+ salary, benefits, and hiring headaches.
            </p>
            <p className="text-lg text-echo-300 mb-8">
              A fractional executive works with your business 10-20 hours per
              week, joining leadership meetings, guiding your team, and owning
              the decisions that matter. Same accountability as a full-time
              hire. Fraction of the cost.
            </p>
            <div className="flex items-center gap-4">
              <Link
                href="/about"
                className="text-crimson-500 hover:text-crimson-400 font-medium inline-flex items-center gap-2 transition-colors"
              >
                Learn more about my approach
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

          {/* Right column - stats grid */}
          <div className="grid grid-cols-2 gap-6">
            <div className="bg-echo-800/30 border border-echo-700 rounded-xl p-6">
              <div className="text-4xl font-display font-bold text-crimson-500 mb-2">
                $150K+
              </div>
              <p className="text-echo-400 text-sm">
                Average annual savings vs. full-time exec
              </p>
            </div>
            <div className="bg-echo-800/30 border border-echo-700 rounded-xl p-6">
              <div className="text-4xl font-display font-bold text-crimson-500 mb-2">
                10-20
              </div>
              <p className="text-echo-400 text-sm">
                Hours per week, tailored to your needs
              </p>
            </div>
            <div className="bg-echo-800/30 border border-echo-700 rounded-xl p-6">
              <div className="text-4xl font-display font-bold text-crimson-500 mb-2">
                20+
              </div>
              <p className="text-echo-400 text-sm">
                Years enterprise technology experience
              </p>
            </div>
            <div className="bg-echo-800/30 border border-echo-700 rounded-xl p-6">
              <div className="text-4xl font-display font-bold text-crimson-500 mb-2">
                1 day
              </div>
              <p className="text-echo-400 text-sm">
                Typical response for urgent matters
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/**
 * WHAT I DO SECTION
 *
 * Two cards: Fractional CTO and Fractional CISO
 * Text from original Jigsaw site
 */

import Link from "next/link";

export function WhatIDoSection() {
  return (
    <section className="py-24 lg:py-32 bg-echo-900/50">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section header - left aligned */}
        <div className="max-w-2xl mb-16">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-8 h-1 bg-crimson-600 rounded-full" />
            <span className="text-xs font-mono text-crimson-500 uppercase tracking-wider">
              What I Do
            </span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-white mb-6">
            Strategic technology leadership that speaks your language.
          </h2>
          <p className="text-lg text-echo-300 mb-4">
            Technology roadmaps. Architecture decisions. Security programs.
            Vendor negotiations. Team building. Compliance. These aren&apos;t
            complicated puzzles with right answers—they&apos;re complex
            decisions that depend on your specific context, constraints, and
            goals.
          </p>
          <p className="text-lg text-echo-300">
            I serve as your fractional CTO and CISO, bringing executive-level
            judgment to the decisions that matter. But more importantly, I
            translate the complexity into strategy your whole leadership team
            can understand and act on.
          </p>
        </div>

        {/* Service cards */}
        <div className="grid md:grid-cols-2 gap-8">
          {/* CTO Card */}
          <div className="group relative bg-echo-800/30 border border-echo-700 rounded-xl p-8 lg:p-10 hover:border-crimson-700/50 transition-all duration-500 hover:bg-echo-800/50 overflow-hidden">
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-crimson-900/20 transform rotate-45 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

            <div className="relative">
              {/* Icon */}
              <div className="inline-flex items-center justify-center w-14 h-14 bg-crimson-900/30 rounded-xl mb-6">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-7 w-7 text-crimson-500"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
              </div>

              <h3 className="font-display text-2xl font-bold text-white mb-4">
                Fractional CTO
              </h3>
              <p className="text-echo-300 mb-6">
                Technology strategy for complex environments. I help you build
                roadmaps, make architecture decisions, evaluate vendors, and
                develop teams—while recognizing that these aren&apos;t puzzle
                problems with clean solutions. They&apos;re judgment calls that
                need clear thinking and honest trade-offs.
              </p>

              <ul className="space-y-3 text-echo-400">
                <li className="flex items-start gap-3">
                  <svg
                    className="h-5 w-5 text-crimson-500 mt-0.5 shrink-0"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span>Technology roadmap & strategy</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg
                    className="h-5 w-5 text-crimson-500 mt-0.5 shrink-0"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span>Architecture & technical decisions</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg
                    className="h-5 w-5 text-crimson-500 mt-0.5 shrink-0"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span>Vendor evaluation & management</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg
                    className="h-5 w-5 text-crimson-500 mt-0.5 shrink-0"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span>Team mentorship & hiring</span>
                </li>
              </ul>
            </div>
          </div>

          {/* CISO Card */}
          <div className="group relative bg-echo-800/30 border border-echo-700 rounded-xl p-8 lg:p-10 hover:border-crimson-700/50 transition-all duration-500 hover:bg-echo-800/50 overflow-hidden">
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-crimson-900/20 transform rotate-45 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

            <div className="relative">
              {/* Icon */}
              <div className="inline-flex items-center justify-center w-14 h-14 bg-crimson-900/30 rounded-xl mb-6">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-7 w-7 text-crimson-500"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                  />
                </svg>
              </div>

              <h3 className="font-display text-2xl font-bold text-white mb-4">
                Fractional CISO
              </h3>
              <p className="text-echo-300 mb-6">
                Security leadership without the fear-mongering. I build
                programs, assess risk, guide compliance, and plan for
                incidents—focused on what actually matters for your business,
                not what vendors are selling this quarter.
              </p>

              <ul className="space-y-3 text-echo-400">
                <li className="flex items-start gap-3">
                  <svg
                    className="h-5 w-5 text-crimson-500 mt-0.5 shrink-0"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span>Security program development</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg
                    className="h-5 w-5 text-crimson-500 mt-0.5 shrink-0"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span>Risk assessment & management</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg
                    className="h-5 w-5 text-crimson-500 mt-0.5 shrink-0"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span>Compliance guidance (SOC 2, etc.)</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg
                    className="h-5 w-5 text-crimson-500 mt-0.5 shrink-0"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span>Incident response planning</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

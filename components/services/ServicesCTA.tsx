/**
 * SERVICES CTA SECTION
 *
 * "Not sure what you need?" call to action.
 */

import Link from "next/link";

export function ServicesCTA() {
  return (
    <section className="py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="relative bg-gradient-to-br from-crimson-900/40 to-crimson-950/40 border border-crimson-800/30 rounded-3xl p-12 lg:p-16 overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-crimson-800/20 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-crimson-900/20 rounded-full blur-3xl" />

          <div className="relative max-w-2xl">
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-white mb-6">
              Not sure what you need?
            </h2>
            <p className="text-lg text-echo-300 mb-8">
              That&apos;s okay. Most conversations start with &quot;we&apos;re
              not exactly sure what we need.&quot; Let&apos;s talk through your
              situation and figure out together if there&apos;s a fit.
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

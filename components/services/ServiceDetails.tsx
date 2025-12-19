/**
 * SERVICE DETAILS SECTION
 *
 * Two-column layouts for Fractional CTO and CISO services.
 * Each has description on left, "What's included" box on right.
 */

import Link from "next/link";

export function ServiceDetails() {
  return (
    <section className="py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Fractional CTO */}
        <div className="grid lg:grid-cols-2 gap-16 items-start mb-24">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-1 bg-crimson-600 rounded-full" />
              <span className="text-xs font-mono text-crimson-500 uppercase tracking-wider">
                Technology Leadership
              </span>
            </div>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-white mb-6">
              Fractional CTO
            </h2>
            <p className="text-lg text-echo-300 mb-8">
              Strategic technology leadership to align your tech investments
              with business goals. I help you navigate complex decisions, build
              the right team, and translate technical trade-offs into language
              your whole leadership team can act on.
            </p>
            <Link
              href="/contact"
              className="text-crimson-500 hover:text-crimson-400 font-medium inline-flex items-center gap-2 transition-colors"
            >
              Discuss your technology needs
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

          <div className="bg-echo-800/30 border border-echo-700 rounded-xl p-8">
            <h3 className="font-display text-lg font-bold text-white mb-6">
              What&apos;s included
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-4">
                <svg
                  className="h-5 w-5 text-crimson-500 mt-0.5 shrink-0"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 6.75V15m6-6v8.25m.503 3.498l4.875-2.437c.381-.19.622-.58.622-1.006V4.82c0-.836-.88-1.38-1.628-1.006l-3.869 1.934c-.317.159-.69.159-1.006 0L9.503 3.252a1.125 1.125 0 00-1.006 0L3.622 5.689C3.24 5.88 3 6.27 3 6.695V19.18c0 .836.88 1.38 1.628 1.006l3.869-1.934c.317-.159.69-.159 1.006 0l4.994 2.497c.317.158.69.158 1.006 0z"
                  />
                </svg>
                <div>
                  <span className="text-white font-medium">
                    Technology strategy & roadmap
                  </span>
                  <p className="text-echo-400 text-sm mt-1">
                    Align technology investments with business objectives
                  </p>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <svg
                  className="h-5 w-5 text-crimson-500 mt-0.5 shrink-0"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21 7.5l-9-5.25L3 7.5m18 0l-9 5.25m9-5.25v9l-9 5.25M3 7.5l9 5.25M3 7.5v9l9 5.25m0-9v9"
                  />
                </svg>
                <div>
                  <span className="text-white font-medium">
                    Architecture decisions
                  </span>
                  <p className="text-echo-400 text-sm mt-1">
                    Make informed choices about platforms, tools, and design
                  </p>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <svg
                  className="h-5 w-5 text-crimson-500 mt-0.5 shrink-0"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 3v17.25m0 0c-1.472 0-2.882.265-4.185.75M12 20.25c1.472 0 2.882.265 4.185.75M18.75 4.97A48.416 48.416 0 0012 4.5c-2.291 0-4.545.16-6.75.47m13.5 0c1.01.143 2.01.317 3 .52m-3-.52l2.62 10.726c.122.499-.106 1.028-.589 1.202a5.988 5.988 0 01-2.031.352 5.988 5.988 0 01-2.031-.352c-.483-.174-.711-.703-.59-1.202L18.75 4.971zm-16.5.52c.99-.203 1.99-.377 3-.52m0 0l2.62 10.726c.122.499-.106 1.028-.589 1.202a5.989 5.989 0 01-2.031.352 5.989 5.989 0 01-2.031-.352c-.483-.174-.711-.703-.59-1.202L5.25 4.971z"
                  />
                </svg>
                <div>
                  <span className="text-white font-medium">
                    Vendor evaluation
                  </span>
                  <p className="text-echo-400 text-sm mt-1">
                    Cut through sales pitches and find the right partners
                  </p>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <svg
                  className="h-5 w-5 text-crimson-500 mt-0.5 shrink-0"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z"
                  />
                </svg>
                <div>
                  <span className="text-white font-medium">Team leadership</span>
                  <p className="text-echo-400 text-sm mt-1">
                    Mentorship, hiring guidance, and process improvement
                  </p>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <svg
                  className="h-5 w-5 text-crimson-500 mt-0.5 shrink-0"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3.75 3v11.25A2.25 2.25 0 006 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0118 16.5h-2.25m-7.5 0h7.5m-7.5 0l-1 3m8.5-3l1 3m0 0l.5 1.5m-.5-1.5h-9.5m0 0l-.5 1.5m.75-9l3-3 2.148 2.148A12.061 12.061 0 0116.5 7.605"
                  />
                </svg>
                <div>
                  <span className="text-white font-medium">
                    Board & investor communications
                  </span>
                  <p className="text-echo-400 text-sm mt-1">
                    Translate technical progress for stakeholders
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Fractional CISO */}
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-1 bg-crimson-600 rounded-full" />
              <span className="text-xs font-mono text-crimson-500 uppercase tracking-wider">
                Security Leadership
              </span>
            </div>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-white mb-6">
              Fractional CISO
            </h2>
            <p className="text-lg text-echo-300 mb-8">
              Security leadership that protects your business without the
              fear-mongering. Practical, risk-based guidance focused on what
              actually matters for your business - not what vendors are selling
              this quarter.
            </p>
            <Link
              href="/contact"
              className="text-crimson-500 hover:text-crimson-400 font-medium inline-flex items-center gap-2 transition-colors"
            >
              Discuss your security needs
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

          <div className="bg-echo-800/30 border border-echo-700 rounded-xl p-8">
            <h3 className="font-display text-lg font-bold text-white mb-6">
              What&apos;s included
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-4">
                <svg
                  className="h-5 w-5 text-crimson-500 mt-0.5 shrink-0"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z"
                  />
                </svg>
                <div>
                  <span className="text-white font-medium">
                    Security program development
                  </span>
                  <p className="text-echo-400 text-sm mt-1">
                    Build or mature your security capabilities systematically
                  </p>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <svg
                  className="h-5 w-5 text-crimson-500 mt-0.5 shrink-0"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z"
                  />
                </svg>
                <div>
                  <span className="text-white font-medium">Risk assessment</span>
                  <p className="text-echo-400 text-sm mt-1">
                    Identify and prioritize your actual security risks
                  </p>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <svg
                  className="h-5 w-5 text-crimson-500 mt-0.5 shrink-0"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M11.35 3.836c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m8.9-4.414c.376.023.75.05 1.124.08 1.131.094 1.976 1.057 1.976 2.192V16.5A2.25 2.25 0 0118 18.75h-2.25m-7.5-10.5H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V18.75m-7.5-10.5h6.375c.621 0 1.125.504 1.125 1.125v9.375m-8.25-3l1.5 1.5 3-3.75"
                  />
                </svg>
                <div>
                  <span className="text-white font-medium">
                    Compliance guidance
                  </span>
                  <p className="text-echo-400 text-sm mt-1">
                    Navigate SOC 2, ISO 27001, HIPAA, and other frameworks
                  </p>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <svg
                  className="h-5 w-5 text-crimson-500 mt-0.5 shrink-0"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0M3.124 7.5A8.969 8.969 0 015.292 3m13.416 0a8.969 8.969 0 012.168 4.5"
                  />
                </svg>
                <div>
                  <span className="text-white font-medium">
                    Incident response
                  </span>
                  <p className="text-echo-400 text-sm mt-1">
                    Preparation, planning, and support when things go wrong
                  </p>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <svg
                  className="h-5 w-5 text-crimson-500 mt-0.5 shrink-0"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5"
                  />
                </svg>
                <div>
                  <span className="text-white font-medium">
                    Security awareness
                  </span>
                  <p className="text-echo-400 text-sm mt-1">
                    Train your team without boring them to death
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

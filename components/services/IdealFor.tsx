/**
 * IDEAL FOR SECTION
 *
 * Four cards showing who fractional services are best for.
 */

export function IdealFor() {
  const audiences = [
    {
      title: "Growing startups",
      description:
        "Series A-B companies that need strategic guidance but aren't ready for a full-time exec.",
    },
    {
      title: "SMBs scaling up",
      description:
        "Established businesses hitting technology or security complexity they haven't faced before.",
    },
    {
      title: "Compliance-bound",
      description:
        "Organizations facing SOC 2, HIPAA, or other compliance requirements for the first time.",
    },
    {
      title: "In transition",
      description:
        "Companies between technical leaders who need coverage and strategic continuity.",
    },
  ];

  return (
    <section className="py-24 lg:py-32 bg-echo-900/50">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="max-w-2xl mb-16">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-8 h-1 bg-crimson-600 rounded-full" />
            <span className="text-xs font-mono text-crimson-500 uppercase tracking-wider">
              Best Fit
            </span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-white mb-6">
            Ideal for
          </h2>
          <p className="text-lg text-echo-300">
            Fractional executive services work best for companies at certain
            stages and situations.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {audiences.map((audience) => (
            <div
              key={audience.title}
              className="bg-echo-800/30 border border-echo-700 rounded-xl p-6"
            >
              <h3 className="font-display text-lg font-bold text-white mb-2">
                {audience.title}
              </h3>
              <p className="text-echo-400 text-sm">{audience.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

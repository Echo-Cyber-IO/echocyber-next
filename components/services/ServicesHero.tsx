/**
 * SERVICES HERO SECTION
 *
 * Page header with headline, description, and quick stats.
 */

export function ServicesHero() {
  return (
    <section className="relative py-24 lg:py-32">
      {/* Subtle gradient accent */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-crimson-900/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div className="max-w-3xl">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-8 h-1 bg-crimson-600 rounded-full" />
            <span className="text-xs font-mono text-crimson-500 uppercase tracking-wider">
              Services
            </span>
          </div>
          <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
            Executive leadership, flexibly delivered.
          </h1>
          <p className="text-xl text-echo-300 leading-relaxed mb-12">
            Whether you need a strategic technology partner, security
            leadership, or both - I provide fractional executive services that
            scale with your business needs and budget. No jargon, no
            fear-mongering, no pretending complex problems have simple answers.
          </p>

          {/* Quick stats */}
          <div className="flex flex-wrap gap-8 text-sm">
            <div className="flex items-center gap-2">
              <span className="text-2xl font-display font-bold text-crimson-500">
                20+
              </span>
              <span className="text-echo-400">Years Experience</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-2xl font-display font-bold text-crimson-500">
                50+
              </span>
              <span className="text-echo-400">Projects Delivered</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-2xl font-display font-bold text-crimson-500">
                Fortune 500
              </span>
              <span className="text-echo-400">to Startups</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

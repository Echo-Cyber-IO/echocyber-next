/**
 * BACKGROUND SECTION
 *
 * "20+ years in the trenches" - professional background story.
 */

export function Background() {
  return (
    <section className="py-24 lg:py-32 bg-echo-900/50">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-8 h-1 bg-crimson-600 rounded-full" />
            <span className="text-xs font-mono text-crimson-500 uppercase tracking-wider">
              Background
            </span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-white mb-8">
            20+ years in the trenches
          </h2>

          <div className="space-y-6">
            <p className="text-echo-300 text-lg leading-relaxed">
              With over 20 years in enterprise technology and security,
              I&apos;ve worn many hats: software engineer, security analyst,
              team lead, and technology executive. I&apos;ve built systems that
              scale, led teams through complex projects, and helped
              organizations navigate everything from cloud migrations to
              security incidents.
            </p>

            <p className="text-echo-300 text-lg leading-relaxed">
              But what I&apos;ve found most valuable isn&apos;t the technical
              knowledge itself - it&apos;s the ability to bridge the gap between
              technology teams and business leadership. Too often, critical
              technology decisions get lost in translation, and that&apos;s
              where things go wrong.
            </p>

            <p className="text-echo-300 text-lg leading-relaxed">
              That&apos;s why I started Echo Cyber. I saw too many growing
              businesses struggle with the same challenge: they needed strategic
              technology and security guidance, but couldn&apos;t justify (or
              find) a full-time executive. The fractional model solves that
              problem.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

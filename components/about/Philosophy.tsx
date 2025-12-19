/**
 * PHILOSOPHY SECTION
 *
 * "Why most technology initiatives fail" - complex vs complicated.
 */

export function Philosophy() {
  return (
    <section className="py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-8 h-1 bg-crimson-600 rounded-full" />
            <span className="text-xs font-mono text-crimson-500 uppercase tracking-wider">
              Philosophy
            </span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-white mb-8">
            Why most technology initiatives fail
          </h2>

          <div className="space-y-6">
            <p className="text-echo-300 text-lg leading-relaxed">
              Most leaders think they have a complicated technology problem.
              They actually have a complex one. And that confusion is expensive.
            </p>

            <p className="text-echo-300 text-lg leading-relaxed">
              <strong className="text-white">Complicated</strong> is a jet
              engine. Thousands of parts, incredibly intricate, but
              fundamentally predictable. You can disassemble it, understand
              every component, troubleshoot when it breaks. More expertise
              equals more control.
            </p>

            <p className="text-echo-300 text-lg leading-relaxed">
              <strong className="text-white">Complex</strong> is an ecosystem.
              The parts don&apos;t just connect—they interact, adapt, and create
              behaviors that can&apos;t be predicted by studying the pieces.
              Remove one thing and maybe nothing happens. Or maybe everything
              collapses. You won&apos;t know until it happens.
            </p>

            <p className="text-echo-300 text-lg leading-relaxed">
              Here&apos;s the danger:{" "}
              <strong className="text-white">
                they look identical from the outside.
              </strong>
            </p>

            <p className="text-echo-300 text-lg leading-relaxed">
              That &quot;straightforward&quot; system modernization? Complex.
              The &quot;simple&quot; integration project? Complex. The reorg
              that was supposed to fix everything? Definitely complex.
            </p>

            <p className="text-echo-300 text-lg leading-relaxed">
              Leadership sees a complicated problem and deploys a complicated
              solution—new software, reorganization, updated processes. But
              they&apos;ve got a complex problem. The system absorbs the change,
              routes around it, and returns to equilibrium. Or worse, the
              intervention triggers something unexpected.
            </p>

            <blockquote className="border-l-4 border-crimson-500 pl-6 my-8 py-2">
              <p className="text-xl lg:text-2xl leading-relaxed text-white italic">
                &quot;The problem isn&apos;t that you&apos;re not smart enough.
                It&apos;s that you&apos;re using complicated-system thinking on
                a complex-system problem. Different game. Different rules.&quot;
              </p>
            </blockquote>

            <p className="text-echo-300 text-lg leading-relaxed">
              I help leaders recognize which game they&apos;re actually
              playing—and navigate it with clear thinking instead of false
              certainty.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

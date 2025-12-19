/**
 * APPROACH SECTION
 *
 * Three guiding principles cards.
 */

export function Approach() {
  const principles = [
    {
      number: "01",
      title: "Complex vs. Complicated",
      description:
        "A system migration isn't a puzzle with one right answer. A security program isn't a checklist. These are complex challenges—interdependent, context-dependent, full of trade-offs. I help you navigate them as they actually are, not as vendors wish they were.",
    },
    {
      number: "02",
      title: "Translation, not jargon",
      description:
        "Architecture decisions, risk assessments, vendor evaluations—none of it matters if your leadership team can't understand and act on it. I translate geek into human so the people making decisions actually know what they're deciding.",
    },
    {
      number: "03",
      title: "Signal over noise",
      description:
        "Every vendor has a 'critical' solution. Every framework has 'essential' controls. I filter the noise and focus on what actually moves the needle for your business—whether that's a technology roadmap, a security investment, or a hiring decision.",
    },
  ];

  return (
    <section className="py-24 lg:py-32 bg-echo-900/50">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="max-w-2xl mb-16">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-8 h-1 bg-crimson-600 rounded-full" />
            <span className="text-xs font-mono text-crimson-500 uppercase tracking-wider">
              My Approach
            </span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-white mb-6">
            Three guiding principles
          </h2>
          <p className="text-lg text-echo-300">
            These shape how I work with every client.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {principles.map((principle) => (
            <div
              key={principle.number}
              className="bg-echo-800/30 border border-echo-700 rounded-xl p-8"
            >
              <div className="text-5xl font-display font-bold text-crimson-500/30 mb-4">
                {principle.number}
              </div>
              <h3 className="font-display text-xl font-bold text-white mb-4">
                {principle.title}
              </h3>
              <p className="text-echo-400">{principle.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

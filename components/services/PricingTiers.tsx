/**
 * PRICING TIERS COMPONENT
 *
 * Three tier cards: Tune, Signal, Echo
 * Matches original pricing-tiers.blade.php exactly.
 */

import Link from "next/link";
import { Eyebrow } from "@/components/ui/Eyebrow";

// Checkmark icon used in feature lists
function CheckIcon() {
  return (
    <svg
      className="h-6 w-5 flex-none text-crimson-500"
      viewBox="0 0 20 20"
      fill="currentColor"
    >
      <path
        fillRule="evenodd"
        d="M16.704 4.153a.75.75 0 0 1 .143 1.052l-8 10.5a.75.75 0 0 1-1.127.075l-4.5-4.5a.75.75 0 0 1 1.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 0 1 1.05-.143Z"
        clipRule="evenodd"
      />
    </svg>
  );
}

export function PricingTiers() {
  return (
    <section className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Header */}
        <div className="mx-auto max-w-4xl text-center">
          <Eyebrow centered>Engagement Options</Eyebrow>
          <p className="text-5xl font-semibold tracking-tight text-balance text-white sm:text-6xl">
            Ways to engage
          </p>
        </div>
        <p className="mx-auto mt-6 max-w-2xl text-center text-lg font-medium text-pretty text-echo-400 sm:text-xl/8">
          Three tiers designed to meet you where you are. Start with clarity,
          scale to full engagement, then maintain momentum with ongoing
          advisory.
        </p>

        {/* Tier Cards */}
        <div className="isolate mx-auto mt-10 grid max-w-md grid-cols-1 gap-8 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {/* Tune Card */}
          <div className="group/card rounded-3xl bg-echo-800/30 border border-echo-700 p-8 xl:p-10 transition-all duration-300 hover:bg-echo-800/50 hover:border-crimson-900 hover:-translate-y-1">
            <div className="flex items-center gap-4">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-crimson-950/40 group-hover/card:bg-crimson-950/60 rounded-2xl transition-colors">
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
                  <circle
                    cx="12"
                    cy="12"
                    r="2.5"
                    fill="currentColor"
                    stroke="none"
                  />
                  <line x1="12" y1="9.5" x2="12" y2="4" />
                </svg>
              </div>
              <h3 className="text-3xl font-semibold text-white uppercase tracking-wider">
                Tune
              </h3>
            </div>
            <p className="mt-4 text-sm/6 text-echo-300">
              Tune in, calibrate, assess. A focused strategy session to diagnose
              where you are.
            </p>
            <p className="mt-6 flex items-baseline gap-x-1">
              <span className="text-4xl font-semibold tracking-tight text-white">
                $7,500
              </span>
              <span className="text-sm/6 font-semibold text-echo-400">
                one-time
              </span>
            </p>
            <Link
              href="/contact"
              className="mt-6 block rounded-md bg-crimson-500 px-3 py-2 text-center text-sm/6 font-semibold text-white shadow-sm hover:bg-crimson-400 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-crimson-500 transition-colors"
            >
              Let&apos;s Talk
            </Link>
            <ul role="list" className="mt-8 space-y-3 text-sm/6 text-echo-300 xl:mt-10">
              <li className="flex gap-x-3">
                <CheckIcon />
                4-hour strategy session
              </li>
              <li className="flex gap-x-3">
                <CheckIcon />
                1-2 week prep via email
              </li>
              <li className="flex gap-x-3">
                <CheckIcon />
                Punch list + blindspot analysis
              </li>
              <li className="flex gap-x-3">
                <CheckIcon />
                1-6 month campaign roadmap
              </li>
            </ul>
          </div>

          {/* Signal Card (Featured) */}
          <div className="group/card rounded-3xl bg-echo-800/40 border-2 border-crimson-900 p-8 xl:p-10 transition-all duration-300 hover:bg-echo-800/60 hover:border-crimson-700 hover:-translate-y-1">
            <div className="flex items-center gap-4">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-crimson-950/60 group-hover/card:bg-crimson-950/80 rounded-2xl transition-colors">
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
              <h3 className="text-3xl font-semibold text-white uppercase tracking-wider">
                Signal
              </h3>
            </div>
            <p className="mt-4 text-sm/6 text-echo-300">
              Clear signal through the noise. Embedded fractional leadership for
              your team.
            </p>
            <p className="mt-6 flex items-baseline gap-x-1">
              <span className="text-4xl font-semibold tracking-tight text-white">
                $10k
              </span>
              <span className="text-sm/6 font-semibold text-echo-400">
                /month
              </span>
            </p>
            <Link
              href="/contact"
              className="mt-6 block rounded-md bg-crimson-500 px-3 py-2 text-center text-sm/6 font-semibold text-white shadow-sm hover:bg-crimson-400 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-crimson-500 transition-colors"
            >
              Let&apos;s Talk
            </Link>
            <ul role="list" className="mt-8 space-y-3 text-sm/6 text-echo-300 xl:mt-10">
              <li className="flex gap-x-3">
                <CheckIcon />
                10 hours/week engagement
              </li>
              <li className="flex gap-x-3">
                <CheckIcon />
                Systems Map at 30 days
              </li>
              <li className="flex gap-x-3">
                <CheckIcon />
                Weekly sprint planning & review
              </li>
              <li className="flex gap-x-3">
                <CheckIcon />
                Vendor & team management
              </li>
              <li className="flex gap-x-3">
                <CheckIcon />
                Direct Slack/email access
              </li>
              <li className="flex gap-x-3">
                <CheckIcon />
                3-month minimum
              </li>
            </ul>
          </div>

          {/* Echo Card */}
          <div className="group/card rounded-3xl bg-echo-800/30 border border-echo-700 p-8 xl:p-10 transition-all duration-300 hover:bg-echo-800/50 hover:border-crimson-900 hover:-translate-y-1">
            <div className="flex items-center gap-4">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-crimson-950/40 group-hover/card:bg-crimson-950/60 rounded-2xl transition-colors">
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
              <h3 className="text-3xl font-semibold text-white uppercase tracking-wider">
                Echo
              </h3>
            </div>
            <p className="mt-4 text-sm/6 text-echo-300">
              The feedback loop. Ongoing advisory after a Tune or Signal
              engagement.
            </p>
            <p className="mt-6 flex items-baseline gap-x-1">
              <span className="text-4xl font-semibold tracking-tight text-white">
                $3k
              </span>
              <span className="text-sm/6 font-semibold text-echo-400">
                /month
              </span>
            </p>
            {/* Disabled button with tooltip */}
            <div className="relative mt-6 group/tooltip">
              <span className="block rounded-md bg-white/5 px-3 py-2 text-center text-sm/6 font-semibold text-echo-400 ring-1 ring-inset ring-white/10 cursor-not-allowed">
                Requires Prior Engagement
              </span>
              <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-3 py-2 bg-echo-900 text-white text-xs rounded-lg opacity-0 group-hover/tooltip:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
                Complete a Tune or Signal engagement first
              </div>
            </div>
            <ul role="list" className="mt-8 space-y-3 text-sm/6 text-echo-300 xl:mt-10">
              <li className="flex gap-x-3">
                <CheckIcon />
                Monthly strategy sessions
              </li>
              <li className="flex gap-x-3">
                <CheckIcon />
                Bi-monthly sprint planning
              </li>
              <li className="flex gap-x-3">
                <CheckIcon />
                Unlimited email support
              </li>
              <li className="flex gap-x-3">
                <CheckIcon />
                Access to SOPs & playbooks
              </li>
              <li className="flex gap-x-3">
                <CheckIcon />
                Priority scheduling
              </li>
              <li className="flex gap-x-3">
                <CheckIcon />
                6-month commitment
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

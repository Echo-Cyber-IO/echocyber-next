/**
 * TRUSTED BY SECTION
 *
 * Client logos: Bose, Strongrock Engineering, Carnival Cruise Lines
 * Matches original: Strongrock has logo + text label
 */

import Image from "next/image";

export function TrustedBySection() {
  return (
    <section className="py-12 border-y border-echo-800/50">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex flex-col items-center gap-8">
          <span className="text-echo-500 text-sm font-medium uppercase tracking-wider">
            Trusted by teams at
          </span>
          <div className="flex flex-wrap items-center justify-center gap-8 sm:gap-12">
            {/* Bose */}
            <div className="flex items-center">
              <Image
                src="/img/clients/bose.png"
                alt="Bose"
                width={160}
                height={80}
                className="h-20 w-auto"
              />
            </div>

            {/* Strongrock - logo + text */}
            <div className="flex items-center gap-3">
              <Image
                src="/img/clients/sr-logo.png"
                alt="Strongrock"
                width={64}
                height={32}
                className="h-8 w-auto"
              />
              <span className="text-echo-300 font-display text-lg font-semibold">
                Strongrock Engineering
              </span>
            </div>

            {/* Carnival */}
            <div className="flex items-center">
              <Image
                src="/img/clients/carnival.png"
                alt="Carnival Cruise Lines"
                width={140}
                height={28}
                className="h-7 w-auto"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

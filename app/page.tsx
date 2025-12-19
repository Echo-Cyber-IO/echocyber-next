/**
 * HOME PAGE
 *
 * Composes the home page from modular sections.
 * Just like Blade: @include('_partials.hero') becomes <HeroSection />
 */

import { HeroSection } from "@/components/home/HeroSection";
import { TrustedBySection } from "@/components/home/TrustedBySection";
import { WhatIDoSection } from "@/components/home/WhatIDoSection";
import { EngagementTiersSection } from "@/components/home/EngagementTiersSection";
import { WhyFractionalSection } from "@/components/home/WhyFractionalSection";
import { CTASection } from "@/components/home/CTASection";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <TrustedBySection />
      <WhatIDoSection />
      <EngagementTiersSection />
      <WhyFractionalSection />
      <CTASection />
    </>
  );
}

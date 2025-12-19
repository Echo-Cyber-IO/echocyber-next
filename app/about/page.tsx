/**
 * ABOUT PAGE
 *
 * Route: /about
 * Composes the about page from modular sections.
 */

import { Metadata } from "next";
import { AboutHero } from "@/components/about/AboutHero";
import { Background } from "@/components/about/Background";
import { Philosophy } from "@/components/about/Philosophy";
import { Approach } from "@/components/about/Approach";
import { AboutCTA } from "@/components/about/AboutCTA";

export const metadata: Metadata = {
  title: "About | Echo Cyber Solutions",
  description:
    "Meet Michael Faas - Fractional CTO and CISO helping growing businesses build strategic technology and security capabilities.",
};

export default function AboutPage() {
  return (
    <>
      <AboutHero />
      <Background />
      <Philosophy />
      <Approach />
      <AboutCTA />
    </>
  );
}

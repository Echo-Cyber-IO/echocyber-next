/**
 * SERVICES PAGE
 *
 * Route: /services
 * Composes the services page from modular sections.
 */

import { Metadata } from "next";
import { ServicesHero } from "@/components/services/ServicesHero";
import { PricingTiers } from "@/components/services/PricingTiers";
import { ServiceDetails } from "@/components/services/ServiceDetails";
import { IdealFor } from "@/components/services/IdealFor";
import { ServicesCTA } from "@/components/services/ServicesCTA";

export const metadata: Metadata = {
  title: "Services | Echo Cyber Solutions",
  description:
    "Fractional CTO and CISO services for growing businesses. Strategic technology and security leadership scaled to your needs.",
};

export default function ServicesPage() {
  return (
    <>
      <ServicesHero />
      <PricingTiers />
      <ServiceDetails />
      <IdealFor />
      <ServicesCTA />
    </>
  );
}

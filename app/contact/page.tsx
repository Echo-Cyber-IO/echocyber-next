/**
 * CONTACT PAGE
 *
 * Route: /contact
 * Two-column layout: info on left, form on right.
 */

import { Metadata } from "next";
import { ContactInfo } from "@/components/contact/ContactInfo";
import { ContactForm } from "@/components/contact/ContactForm";

export const metadata: Metadata = {
  title: "Contact | Echo Cyber Solutions",
  description:
    "Get in touch to discuss your technology and security leadership needs. Let's have a conversation about how I can help.",
};

export default function ContactPage() {
  return (
    <section className="relative py-24 lg:py-32">
      {/* Subtle gradient accents */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-crimson-900/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-crimson-900/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16">
          <ContactInfo />
          <ContactForm />
        </div>
      </div>
    </section>
  );
}

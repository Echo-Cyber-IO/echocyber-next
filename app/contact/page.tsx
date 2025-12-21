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
      {/* Gradient accents */}
      <div className="absolute -top-4 -right-4 w-96 h-96 bg-gradient-to-bl from-crimson-900/30 to-transparent blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 -left-4 w-80 h-64 bg-gradient-to-tr from-crimson-800/20 to-transparent blur-3xl pointer-events-none" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16">
          <ContactInfo />
          <ContactForm />
        </div>
      </div>
    </section>
  );
}

"use client";

/**
 * CONTACT FORM
 *
 * Client component with form state and submission to LeadConnector webhook.
 */

import { useState } from "react";

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  company: string;
  phone: string;
  message: string;
}

export function ContactForm() {
  const [formData, setFormData] = useState<FormData>({
    firstName: "",
    lastName: "",
    email: "",
    company: "",
    phone: "",
    message: "",
  });
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    setError(false);

    try {
      const response = await fetch(
        "https://services.leadconnectorhq.com/hooks/LTsOV0bzU0aByRBneCoy/webhook-trigger/cac4af7b-574e-4b21-82a4-1754bb95e4c3",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            first_name: formData.firstName,
            last_name: formData.lastName,
            email: formData.email,
            company_name: formData.company,
            phone: formData.phone,
            message: formData.message,
            source: "echocyber.io",
          }),
        }
      );

      if (response.ok) {
        setSubmitted(true);
      } else {
        setError(true);
      }
    } catch {
      setError(true);
    }

    setSubmitting(false);
  };

  // Success state
  if (submitted) {
    return (
      <div className="bg-echo-900/50 border border-echo-700 rounded-2xl p-6 lg:p-8">
        <div className="text-center py-12">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-green-500/20 mb-6">
            <svg
              className="w-8 h-8 text-green-400"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5 13l4 4L19 7"
              />
            </svg>
          </div>
          <h3 className="font-display text-2xl font-bold text-white mb-2">
            Message sent!
          </h3>
          <p className="text-echo-400">
            I&apos;ll get back to you within 24 hours.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-echo-900/50 border border-echo-700 rounded-2xl p-6 lg:p-8">
      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Name Row */}
        <div className="grid sm:grid-cols-2 gap-6">
          <div>
            <label
              htmlFor="firstName"
              className="block text-sm font-medium text-echo-300 mb-2"
            >
              First Name *
            </label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 bg-echo-800/50 border border-echo-600 rounded-lg text-white placeholder-echo-500 focus:outline-none focus:ring-2 focus:ring-crimson-500 focus:border-transparent transition-all"
              placeholder="First name"
            />
          </div>
          <div>
            <label
              htmlFor="lastName"
              className="block text-sm font-medium text-echo-300 mb-2"
            >
              Last Name *
            </label>
            <input
              type="text"
              id="lastName"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 bg-echo-800/50 border border-echo-600 rounded-lg text-white placeholder-echo-500 focus:outline-none focus:ring-2 focus:ring-crimson-500 focus:border-transparent transition-all"
              placeholder="Last name"
            />
          </div>
        </div>

        {/* Email */}
        <div>
          <label
            htmlFor="email"
            className="block text-sm font-medium text-echo-300 mb-2"
          >
            Email *
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 bg-echo-800/50 border border-echo-600 rounded-lg text-white placeholder-echo-500 focus:outline-none focus:ring-2 focus:ring-crimson-500 focus:border-transparent transition-all"
            placeholder="you@company.com"
          />
        </div>

        {/* Company & Phone Row */}
        <div className="grid sm:grid-cols-2 gap-6">
          <div>
            <label
              htmlFor="company"
              className="block text-sm font-medium text-echo-300 mb-2"
            >
              Company
            </label>
            <input
              type="text"
              id="company"
              name="company"
              value={formData.company}
              onChange={handleChange}
              className="w-full px-4 py-3 bg-echo-800/50 border border-echo-600 rounded-lg text-white placeholder-echo-500 focus:outline-none focus:ring-2 focus:ring-crimson-500 focus:border-transparent transition-all"
              placeholder="Your company"
            />
          </div>
          <div>
            <label
              htmlFor="phone"
              className="block text-sm font-medium text-echo-300 mb-2"
            >
              Phone
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="w-full px-4 py-3 bg-echo-800/50 border border-echo-600 rounded-lg text-white placeholder-echo-500 focus:outline-none focus:ring-2 focus:ring-crimson-500 focus:border-transparent transition-all"
              placeholder="(555) 123-4567"
            />
          </div>
        </div>

        {/* Message */}
        <div>
          <label
            htmlFor="message"
            className="block text-sm font-medium text-echo-300 mb-2"
          >
            How can I help? *
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            rows={5}
            className="w-full px-4 py-3 bg-echo-800/50 border border-echo-600 rounded-lg text-white placeholder-echo-500 focus:outline-none focus:ring-2 focus:ring-crimson-500 focus:border-transparent transition-all resize-none"
            placeholder="Tell me about your situation, challenges, or questions..."
          />
        </div>

        {/* Error Message */}
        {error && (
          <div className="bg-red-500/10 border border-red-500/30 rounded-lg p-4">
            <p className="text-red-400 text-sm">
              Something went wrong. Please try again or email me directly at{" "}
              <a href="mailto:info@echocyber.com" className="underline">
                info@echocyber.com
              </a>
            </p>
          </div>
        )}

        {/* Submit Button */}
        <button
          type="submit"
          disabled={submitting}
          className="w-full px-6 py-4 bg-crimson-600 hover:bg-crimson-500 disabled:bg-crimson-800 disabled:cursor-not-allowed text-white font-semibold rounded-lg transition-colors flex items-center justify-center gap-2"
        >
          {submitting ? (
            <>
              <svg
                className="animate-spin h-5 w-5"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <circle
                  className="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="4"
                />
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                />
              </svg>
              Sending...
            </>
          ) : (
            "Send Message"
          )}
        </button>

        <p className="text-echo-500 text-sm text-center">
          I&apos;ll respond within 24 hours on business days.
        </p>
      </form>
    </div>
  );
}

"use client"; // This component uses browser APIs (useState, usePathname)

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
// Using styled Link instead of Catalyst Button for crimson branding

/**
 * HEADER COMPONENT
 *
 * Blade equivalent: source/_partials/nav.blade.php
 *
 * Key differences from Blade/Alpine:
 * - "use client" at top = this component runs in browser (not just server)
 * - useState replaces x-data
 * - usePathname replaces $page->isActive()
 * - Link component replaces <a> for client-side navigation
 * - Image component replaces <img> for optimization
 */

const navigation = [
  { name: "About", href: "/about" },
  { name: "Services", href: "/services" },
  { name: "Contact", href: "/contact" },
];

export function Header() {
  // React state - like Alpine's x-data="{ mobileMenuOpen: false, scrolled: false }"
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Get current path - like $page->isActive() in Blade
  const pathname = usePathname();

  // Scroll listener - like x-init in Alpine
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);

    // Cleanup - important in React to prevent memory leaks
    return () => window.removeEventListener("scroll", handleScroll);
  }, []); // Empty array = run once on mount

  // Helper to check if link is active
  const isActive = (href: string) => pathname === href;

  return (
    <>
      <header
        className={`
          fixed top-0 left-0 right-0 z-50 transition-all duration-300
          ${scrolled || mobileMenuOpen ? "bg-echo-950 backdrop-blur-md shadow-lg" : "bg-transparent"}
        `}
      >
        <nav className="mx-auto max-w-7xl px-6 lg:px-8" aria-label="Main navigation">
          <div className="flex h-20 items-center justify-between">
            {/* Logo */}
            <div className="shrink-0">
              <Link href="/" className="flex items-center gap-3 group">
                <Image
                  src="/img/logo-hex.png"
                  alt="Echo Cyber"
                  width={48}
                  height={48}
                  className="h-12 w-auto"
                />
                <span className="font-display text-2xl font-bold text-white group-hover:text-crimson-500 transition-colors hidden sm:inline">
                  Michael Faas
                </span>
              </Link>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex lg:items-center lg:gap-x-10">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`
                    font-medium transition-colors relative
                    after:absolute after:bottom-0 after:left-0 after:h-0.5 after:bg-crimson-500
                    after:transition-all after:duration-300
                    ${
                      isActive(item.href)
                        ? "text-crimson-500 after:w-full"
                        : "text-echo-200 hover:text-crimson-500 after:w-0 hover:after:w-full"
                    }
                  `}
                >
                  {item.name}
                </Link>
              ))}
            </div>

            {/* CTA Button (Desktop) */}
            <div className="hidden lg:block">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 bg-crimson-700 hover:bg-crimson-600 px-6 py-2.5 rounded-lg font-semibold text-white transition-all duration-300 hover:shadow-glow"
              >
                Let&apos;s Talk
                <ArrowRightIcon className="h-4 w-4" />
              </Link>
            </div>

            {/* Mobile menu button */}
            <div className="lg:hidden">
              <button
                type="button"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="text-echo-200 hover:text-white p-2 -mr-2"
                aria-expanded={mobileMenuOpen}
              >
                <span className="sr-only">Open menu</span>
                {mobileMenuOpen ? (
                  <XMarkIcon className="h-6 w-6" />
                ) : (
                  <Bars3Icon className="h-6 w-6" />
                )}
              </button>
            </div>
          </div>

          {/* Mobile menu */}
          {mobileMenuOpen && (
            <div className="lg:hidden py-4 border-t border-echo-800 animate-fade-in bg-echo-950">
              <div className="flex flex-col gap-4">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    onClick={() => setMobileMenuOpen(false)} // Close menu on click
                    className={`
                      font-medium transition-colors py-2
                      ${isActive(item.href) ? "text-crimson-500" : "text-echo-200 hover:text-crimson-500"}
                    `}
                  >
                    {item.name}
                  </Link>
                ))}
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 bg-crimson-700 hover:bg-crimson-600 px-6 py-3 rounded-lg font-semibold text-white transition-all duration-300 mt-2"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Let&apos;s Talk
                  <ArrowRightIcon className="h-4 w-4" />
                </Link>
              </div>
            </div>
          )}
        </nav>
      </header>

      {/* Spacer to prevent content from being hidden under fixed nav */}
      <div className="h-20" />
    </>
  );
}

// Simple icon components (we'll use Heroicons later, but inline for now)
function Bars3Icon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
    </svg>
  );
}

function XMarkIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
    </svg>
  );
}

function ArrowRightIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 20 20" fill="currentColor">
      <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
    </svg>
  );
}

# CLAUDE.md

This file provides guidance to Claude Code when working with the Echo Cyber Solutions Next.js website.

## Project Overview

Echo Cyber Solutions website built with Next.js 15, React 19, and Tailwind CSS v4. Migrated from Jigsaw/Blade static site to modern React stack with Catalyst UI components.

## Development Commands

```bash
# Install dependencies
npm install

# Development server with hot reload
npm run dev

# Production build
npm run build

# Start production server locally
npm start

# Lint code
npm run lint
```

## Project Architecture

### Directory Structure
```
app/                        # Next.js App Router pages
├── layout.tsx              # Root layout (Header, Footer, ScrollToTop)
├── page.tsx                # Home page (/)
├── globals.css             # Tailwind v4 theme (@theme block)
├── about/page.tsx          # About page
├── contact/page.tsx        # Contact page with form
├── services/page.tsx       # Services page with pricing
├── not-found.tsx           # Custom 404 page
├── error.tsx               # Error boundary
├── sitemap.ts              # Dynamic sitemap generation
└── robots.ts               # Dynamic robots.txt

components/
├── layout/                 # Site-wide layout components
│   ├── Header.tsx          # Navigation with mobile menu
│   ├── Footer.tsx          # Site footer
│   └── ScrollToTop.tsx     # Back-to-top button
├── home/                   # Home page sections
│   ├── HeroSection.tsx
│   ├── TrustedBySection.tsx
│   ├── WhatIDoSection.tsx
│   ├── EngagementTiersSection.tsx
│   ├── WhyFractionalSection.tsx
│   └── CTASection.tsx
├── about/                  # About page sections
│   ├── AboutHero.tsx
│   ├── Background.tsx
│   ├── Philosophy.tsx
│   ├── Approach.tsx
│   └── AboutCTA.tsx
├── services/               # Services page sections
│   ├── ServicesHero.tsx
│   ├── PricingTiers.tsx
│   ├── ServiceDetails.tsx
│   ├── IdealFor.tsx
│   └── ServicesCTA.tsx
├── contact/                # Contact page sections
│   ├── ContactInfo.tsx
│   └── ContactForm.tsx     # Client component with form state
├── ui/                     # Reusable UI components
│   ├── Eyebrow.tsx         # Section eyebrow with crimson bar
│   └── icons.tsx           # Custom SVG icons (TuneIcon, SignalIcon, etc.)
├── seo/
│   └── StructuredData.tsx  # JSON-LD Schema.org markup
└── catalyst/               # Catalyst UI kit components (27 components)
    ├── button.tsx          # Note: No crimson color, use styled Links
    ├── input.tsx, textarea.tsx, select.tsx
    └── ... (dialog, dropdown, table, etc.)

public/img/                 # Static images
├── logo-hex.png, logo-hex-full.png
├── Michael_Faas.jpg
└── clients/                # Client logos (bose.png, sr-logo.png, carnival.png)
```

### Technology Stack
- **Framework**: Next.js 15 with App Router
- **React**: React 19
- **Styling**: Tailwind CSS v4 with custom theme
- **UI Components**: Catalyst UI kit (Headless UI based)
- **Animations**: Framer Motion (via `motion` package)
- **Icons**: Heroicons + custom SVGs
- **Fonts**: Space Grotesk (display), Outfit (body), JetBrains Mono (code)
- **Deployment**: Netlify with automatic deploys

## Design Conventions

### Colors (defined in globals.css @theme block)

| Color | Hex | Usage |
|-------|-----|-------|
| crimson-500 | #CC3333 | Text accents |
| crimson-700 | #990000 | Button backgrounds |
| crimson-900 | #660000 | Borders, dark accents |
| echo-950 | #0A0A0B | Page background |
| echo-300 | #B8B8C2 | Body text |

### Component Patterns
- **Eyebrows**: Use `<Eyebrow>` component with `centered` prop for double-bar variant
- **Card radius**: `rounded-xl` (consistent), `rounded-3xl` for CTA sections
- **CTA language**: "Let's Talk" (primary), "Get in Touch" (secondary)
- **Buttons**: Use styled `<Link>` components, NOT Catalyst Button (lacks crimson)

### Page Structure
Pages are thin composition files importing section components:
```tsx
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
```

## Service Tier Structure

| Tier | Type | Price | Description |
|------|------|-------|-------------|
| **Tune** | Strategy Session | $7,500 one-time | Assessment and roadmap |
| **Signal** | Fractional | $10k/month | 10 hrs/week, 3-month min |
| **Echo** | Advisory | $3k/month | Ongoing guidance (requires prior engagement) |

## Key Implementation Notes

### Client vs Server Components
- `"use client"` directive required for: useState, useEffect, onClick handlers
- Server components (default): Static content, no browser APIs
- Client components in this project: Header, ContactForm, ScrollToTop

### Contact Form
- Submits to LeadConnector webhook (same as original site)
- Endpoint: `https://services.leadconnectorhq.com/hooks/...`
- Fields: firstName, lastName, email, company, phone, message

### SEO
- Metadata in layout.tsx with OpenGraph and Twitter cards
- Structured data (JSON-LD) in StructuredData.tsx
- Dynamic sitemap.ts and robots.ts

### Known Issues
1. **Catalyst Button** - Doesn't support crimson color, use styled Links with `bg-crimson-700` instead

## Deployment

Hosted on Netlify with automatic deploys from GitHub.

```bash
# Build command (in netlify.toml)
npm run build

# Publish directory
.next
```

### Environment
- Node.js 20 (specified in netlify.toml)
- No environment variables required (form uses external webhook)

## Migration Status

Migrated from Jigsaw/Blade (echocyber.io) to Next.js.

**Complete:**
- Home, Services, About, Contact pages
- SEO (sitemap, robots, structured data)
- 404 and error pages
- Netlify deployment

**Remaining (in backlog):**
- ECH-28: Schedule page (Calendly embed)
- ECH-29: Services/Assessments subpage
- ECH-30/31: Blog with MDX
- ECH-32: Newsletter signup component

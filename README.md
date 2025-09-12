# Solas Marketing Website

A modern, responsive marketing website for Solas - a real-time compliance assistant for regulated industries.

## About Solas

Solas is a real-time compliance assistant for compliance and marketing teams in regulated industries. It flags potential regulatory breaches in content before publication, helping teams move fast without risking fines or brand damage.

## Features

- **Real-time Compliance Checking**: AI-powered analysis of marketing content
- **Audit Trail**: Complete documentation for regulatory compliance
- **Time Savings**: Clear, actionable suggestions for content fixes
- **Risk Reduction**: Consistent compliance checks to avoid violations

## Tech Stack

- **Framework**: Next.js 15 with App Router
- **Styling**: Tailwind CSS with custom design system
- **Language**: TypeScript
- **Fonts**: Geist Sans & Geist Mono
- **Deployment**: Optimized for Vercel

## Getting Started

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser

## Project Structure

```
src/
├── app/                 # Next.js App Router
│   ├── globals.css     # Global styles and design tokens
│   ├── layout.tsx      # Root layout with metadata
│   ├── page.tsx        # Homepage
│   ├── robots.ts       # SEO robots.txt
│   └── sitemap.ts      # SEO sitemap
└── components/         # React components
    ├── Header.tsx      # Navigation header
    ├── Footer.tsx      # Site footer
    ├── Hero.tsx        # Hero section
    ├── Benefits.tsx    # Benefits section
    ├── HowItWorks.tsx  # How it works section
    ├── AuditTrail.tsx  # Audit trail section
    └── CTA.tsx         # Call-to-action section
```

## Design System

The website uses a custom color palette built around Solas brand colors:

- **Primary**: Teal (#0f766e) - Trust and professionalism
- **Secondary**: Blue (#1e40af) - Reliability
- **Accent**: Emerald (#059669) - Success and growth
- **Neutrals**: Slate grays for text and backgrounds

## SEO Features

- Comprehensive metadata and Open Graph tags
- Automatic sitemap generation
- Robots.txt configuration
- Semantic HTML structure
- Accessibility best practices

## Deployment

The site is optimized for deployment on Vercel:

```bash
npm run build
```

## License

© 2024 Solas. All rights reserved.

# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a Next.js 13.5.1 static landing page for Airco Installatie Echt-Susteren, an air conditioning installation business serving the Limburg region in the Netherlands. The site is designed for lead generation and SEO optimization.

## Key Business Context

- **Business**: Air conditioning installation, maintenance, and repair services
- **Service Area**: Echt-Susteren and greater Limburg region (Sittard, Geleen, Roermond, Heerlen, Maastricht, etc.)
- **Language**: Dutch (nl_NL)
- **Domain**: aircoinstallatie-echt-susteren.nl
- **Important**: This is NOT the StayCool Airco main website - it's a separate regional domain
- **Business Hours**: Mon-Thu 9:00-17:00, Fri 9:00-16:00, Sat-Sun closed
- **No 24/7 Service**: Do not mention or imply 24/7 availability
- **Pricing**: Maintenance from €11/month, single service €149

## Development Commands

```bash
# Development
npm run dev        # Start development server on http://localhost:3000

# Production
npm run build      # Build static site (outputs to /out directory)
npm run start      # Serve production build locally

# Code Quality
npm run lint       # Run ESLint checks
```

## Architecture and Key Components

### Core Configuration
- **next.config.js**: Configured for static export (`output: 'export'`)
- **netlify.toml**: Deployment configuration with security headers and build settings
- **tailwind.config.ts**: Custom colors (orange-500/600/700, blue-600/700/800/900) and Inter font

### Component Structure
- **Single Page Application** with section-based components:
  - `HeroOptimized`: Hero section with typewriter effect and trust badges
  - `ServicesOptimized`: 3-column service grid with video capability
  - `WhyUs`: Value propositions
  - `BrandLogos`: Supported brands (Daikin, LG, Samsung, etc.)
  - `ProductShowcase`: Air conditioning unit displays
  - `ServiceAreas`: Coverage map for Limburg cities
  - `FAQ`: Frequently asked questions with schema markup
  - `ContactForm`: EmailJS integrated form with Zod validation

### SEO Implementation
- **Schema.tsx**: LocalBusiness, AggregateRating (4.7/5, 163 reviews), FAQ, and SpecialAnnouncement schemas
- **sitemap.ts**: Automatic sitemap generation
- **layout.tsx**: Comprehensive meta tags, Open Graph, and Google site verification
- **_headers**: Security and caching headers for static assets

### Form Handling
All forms use:
- React Hook Form with Zod validation
- EmailJS for email delivery
- Toast notifications for user feedback

## Environment Variables

Required in `.env.local` for local development and in Netlify environment variables for production:

```
NEXT_PUBLIC_EMAILJS_SERVICE_ID=service_1rruujp
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=template_rkcpzhg
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=sjJ8kK6U9wFjY0zX9
```

## Deployment

Site deploys automatically to Netlify on git push to main branch:
- Static files served from `/out` directory
- Node 18 environment
- Build command: `npm run build`

## Important Design Patterns

1. **Styling**: Use Tailwind utility classes, avoid inline styles
2. **Components**: All interactive components need 'use client' directive
3. **Images**: Use Next.js Image component where possible, Unsplash for stock photos
4. **Animations**: Framer Motion for smooth transitions
5. **Icons**: Lucide React for consistent iconography
6. **Forms**: Always validate with Zod schemas
7. **SEO**: Update Schema.tsx when adding new content types

## UI Component Library

Uses shadcn/ui components from `/components/ui/`. These are pre-built, accessible components that follow the design system.

## Testing and Type Safety

- TypeScript strict mode enabled
- No dedicated test framework configured
- Rely on TypeScript for type safety and ESLint for code quality

## Google Search Console

Site verification tag is included in layout.tsx. Monitor Search Console for:
- Sitemap indexing status
- Core Web Vitals
- Search performance and CTR
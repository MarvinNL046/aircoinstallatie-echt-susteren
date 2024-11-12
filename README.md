# Modern Landing Page Boilerplate

A high-performance, SEO-optimized landing page boilerplate built with Next.js 13, Tailwind CSS, and shadcn/ui.

## Features

- ⚡️ Next.js 13 with App Router
- 🎨 Tailwind CSS for styling
- 🧱 shadcn/ui components
- 🎭 Framer Motion animations
- 📧 EmailJS integration
- 📱 Fully responsive design
- 🔍 SEO optimized with Schema.org
- ♿️ WCAG 2.1 accessible
- 🚀 Core Web Vitals optimized

## Quick Start

1. Clone this repository
2. Update `app/layout.tsx` with your metadata
3. Customize components in `/components`
4. Update EmailJS credentials in `ContactForm.tsx`
5. Modify Schema.org data in `Schema.tsx`

## Customization

### Key Files to Modify

- `app/layout.tsx` - SEO metadata, title, description
- `components/Hero.tsx` - Main hero section
- `components/Benefits.tsx` - Benefits/features section
- `components/Features.tsx` - Detailed features
- `components/ContactForm.tsx` - Contact form with EmailJS
- `components/Schema.tsx` - SEO structured data

### Environment Variables

Create a `.env.local` file with:

```env
EMAILJS_SERVICE_ID=your_service_id
EMAILJS_TEMPLATE_ID=your_template_id
EMAILJS_PUBLIC_KEY=your_public_key
```

## Development

```bash
npm run dev     # Start development server
npm run build   # Build for production
npm run start   # Start production server
```

## Deployment

This project is optimized for deployment on Netlify, Vercel, or any static hosting.

## License

MIT License - Feel free to use this boilerplate for any project!
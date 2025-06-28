import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { Toaster } from '@/components/ui/toaster';
import ScrollToTop from '@/components/ScrollToTop';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Airco Echt-Susteren | Nr.1 🏆 Vanaf €11/mnd | Direct Offerte',
  description: '⭐ 4.7/5 (163 reviews) Airco specialist Echt-Susteren & Limburg ✅ Binnen 24u reactie ✅ Alle merken ✅ Tot 40% energiebesparing. Bel nu: 046 202 1430',
  keywords: [
    'airco echt-susteren',
    'airco limburg',
    'airco service limburg',
    'airco installatie limburg',
    'airco sittard',
    'airco geleen',
    'airco roermond',
    'airco heerlen',
    'airco maastricht',
    'airco specialist limburg',
    'airco installateur limburg',
    'airco onderhoud limburg',
    'daikin airco limburg',
    'mitsubishi airco limburg',
    'airco kopen en laten installeren limburg',
    'airco bedrijf limburg',
    'airco montage limburg',
    'airco service sittard',
    'airco service geleen',
    'airco kerkrade',
    'airco brunssum',
    'airco landgraaf',
    'airco voerendaal',
    'airco hoensbroek',
    'airco parkstad',
    'airco zuid limburg'
  ],
  openGraph: {
    title: 'Airco Installatie Echt-Susteren | Airco Specialist Limburg',
    description: 'Professionele airco installatie in Echt-Susteren en heel Limburg. Alle topmerken, scherpe prijzen, onderhoud vanaf €11/maand.',
    type: 'website',
    locale: 'nl_NL',
    url: 'https://aircoinstallatie-echt-susteren.nl',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1631545806609-35d4ae440431?auto=format&fit=crop&q=80',
        width: 1200,
        height: 630,
        alt: 'Airco Installatie Echt-Susteren'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Airco Echt-Susteren | Specialist in heel Limburg',
    description: 'Professionele airco installatie, service en onderhoud. Bel 046 202 1430 voor gratis offerte.',
    images: ['https://images.unsplash.com/photo-1631545806609-35d4ae440431?auto=format&fit=crop&q=80']
  },
  alternates: {
    canonical: 'https://aircoinstallatie-echt-susteren.nl'
  },
  metadataBase: new URL('https://aircoinstallatie-echt-susteren.nl')
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="nl" suppressHydrationWarning>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#1d4ed8" />
        <meta name="google-site-verification" content="WUj-HZ4NIBy7LEYbbwoeqBhte7YF0mx4GFtl4YuohkI" />
        <link rel="canonical" href="https://aircoinstallatie-echt-susteren.nl" />
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className={inter.className} suppressHydrationWarning>
        {children}
        <ScrollToTop />
        <Toaster />
      </body>
    </html>
  );
}
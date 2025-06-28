'use client';

import { ChevronRight, Home } from 'lucide-react';

export default function Breadcrumb() {
  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: 'https://aircoinstallatie-echt-susteren.nl'
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'Airco Services',
        item: 'https://aircoinstallatie-echt-susteren.nl/#services'
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: 'Contact',
        item: 'https://aircoinstallatie-echt-susteren.nl/#contact'
      }
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <nav className="bg-gray-50 py-3 border-b border-gray-200">
        <div className="container mx-auto px-4">
          <ol className="flex items-center space-x-2 text-sm">
            <li>
              <button
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                className="flex items-center text-gray-600 hover:text-orange-500 transition-colors"
              >
                <Home className="w-4 h-4 mr-1" />
                Home
              </button>
            </li>
            <ChevronRight className="w-4 h-4 text-gray-400" />
            <li>
              <button
                onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
                className="text-gray-600 hover:text-orange-500 transition-colors"
              >
                Airco Services
              </button>
            </li>
            <ChevronRight className="w-4 h-4 text-gray-400" />
            <li>
              <span className="text-gray-900 font-semibold">
                Echt-Susteren & Limburg
              </span>
            </li>
          </ol>
        </div>
      </nav>
    </>
  );
}
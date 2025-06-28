export default function Schema() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: 'Airco Installatie Echt-Susteren',
    description: 'Specialist in airco installatie Echt-Susteren en heel Limburg. Installatie, onderhoud en reparatie van airconditioners. Bespaar op energiekosten met moderne airco systemen.',
    image: 'https://images.unsplash.com/photo-1631545806609-35d4ae440431?auto=format&fit=crop&q=80',
    '@id': 'https://aircoinstallatie-echt-susteren.nl',
    url: 'https://aircoinstallatie-echt-susteren.nl',
    telephone: '046 202 1430',
    email: 'info@staycoolairco.nl',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Aan de Bogen 11',
      addressLocality: 'Nieuwstadt',
      postalCode: '6118 AS',
      addressRegion: 'Limburg',
      addressCountry: 'NL'
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 51.0389,
      longitude: 5.8611
    },
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: [
          'Monday',
          'Tuesday',
          'Wednesday',
          'Thursday'
        ],
        opens: '09:00',
        closes: '17:00'
      },
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: 'Friday',
        opens: '09:00',
        closes: '16:00'
      }
    ],
    priceRange: '€€',
    areaServed: {
      '@type': 'GeoCircle',
      geoMidpoint: {
        '@type': 'GeoCoordinates',
        latitude: 51.1017,
        longitude: 5.8783
      },
      geoRadius: '30000'
    },
    sameAs: [
      'https://www.facebook.com/staycoolairco',
      'https://www.instagram.com/staycoolairco'
    ],
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.7',
      bestRating: '5',
      worstRating: '1',
      ratingCount: '163',
      reviewCount: '163'
    },
    review: [
      {
        '@type': 'Review',
        author: {
          '@type': 'Person',
          name: 'Jan van der Berg'
        },
        datePublished: '2024-01-15',
        reviewBody: 'Uitstekende service! Binnen een week was onze airco geïnstalleerd. Zeer professioneel en netjes gewerkt.',
        reviewRating: {
          '@type': 'Rating',
          ratingValue: '5',
          bestRating: '5',
          worstRating: '1'
        }
      },
      {
        '@type': 'Review',
        author: {
          '@type': 'Person',
          name: 'Maria Janssen'
        },
        datePublished: '2024-02-20',
        reviewBody: 'Goede prijs-kwaliteit verhouding. De monteurs waren vriendelijk en hebben alles perfect uitgelegd.',
        reviewRating: {
          '@type': 'Rating',
          ratingValue: '5',
          bestRating: '5',
          worstRating: '1'
        }
      }
    ],
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Airconditioning Services',
      itemListElement: [
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Airco Installatie',
            description: 'Professionele installatie van energiezuinige airconditioningsystemen'
          }
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Warmtepomp Functie',
            description: 'Efficiënt verwarmen in de winter met warmtepompfunctie'
          }
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Onderhoud & Service',
            description: 'Regelmatig onderhoud en service voor optimale prestaties'
          }
        }
      ]
    }
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
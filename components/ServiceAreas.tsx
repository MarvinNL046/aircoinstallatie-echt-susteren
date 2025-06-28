'use client';

import { motion } from 'framer-motion';
import { MapPin } from 'lucide-react';

const serviceAreas = [
  { 
    region: 'Parkstad',
    cities: ['Airco Heerlen', 'Airco Kerkrade', 'Airco Landgraaf', 'Airco Brunssum', 'Airco Hoensbroek'],
  },
  {
    region: 'Westelijke Mijnstreek',
    cities: ['Airco Sittard', 'Airco Geleen', 'Airco Echt-Susteren', 'Airco Service Sittard', 'Airco Service Geleen'],
  },
  {
    region: 'Midden-Limburg',
    cities: ['Airco Roermond', 'Airco Service Limburg', 'Airco Installatie Limburg'],
  },
  {
    region: 'Zuid-Limburg',
    cities: ['Airco Maastricht', 'Airco Voerendaal', 'Airco Zuid Limburg', 'Airco Service Voerendaal'],
  },
];

export default function ServiceAreas() {
  return (
    <section id="service-areas" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Airco Service in <span className="text-orange-500">Heel Limburg</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Als airco bedrijf Limburg zijn wij actief in alle grote steden. Of u nu zoekt naar airco installateur Limburg 
            of airco onderhoud Limburg, wij staan voor u klaar!
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {serviceAreas.map((area, index) => (
            <motion.div
              key={area.region}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-gray-50 rounded-xl p-6"
            >
              <div className="flex items-center space-x-2 mb-4">
                <MapPin className="w-5 h-5 text-orange-500" />
                <h3 className="text-xl font-bold text-gray-900">{area.region}</h3>
              </div>
              <ul className="space-y-2">
                {area.cities.map((city) => (
                  <li key={city} className="text-gray-600 hover:text-orange-500 transition-colors cursor-pointer">
                    {city}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-12 bg-blue-50 rounded-2xl p-8 text-center"
        >
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Airco Limburg Aanbieding
          </h3>
          <p className="text-lg text-gray-600 mb-6">
            Profiteer nu van onze scherpe tarieven! Airco montage Limburg met onderhoud vanaf slechts €11 per maand. 
            Of kies voor een losse onderhoudsbeurt voor €149.
          </p>
          <p className="text-sm text-gray-500">
            * Geen 24/7 storingsdienst. Bereikbaar tijdens kantooruren.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
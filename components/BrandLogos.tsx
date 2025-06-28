'use client';

import { motion } from 'framer-motion';

const brands = [
  { name: 'Daikin', description: 'Comfora, Emura, Stylish, Perfera, Ururu Sarara' },
  { name: 'LG', description: 'ArtCool, DualCool Premium' },
  { name: 'Samsung', description: 'WindFree series, Luzon' },
  { name: 'Mitsubishi', description: 'Heavy Industries' },
  { name: 'Toshiba', description: 'Haori, Daiseikai, Kazumi, Seiya' },
  { name: 'Tosot', description: 'Pular, Clivia, Cosmo' },
];

export default function BrandLogos() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            <span className="text-orange-500">Daikin Airco Limburg</span> & Andere Topmerken
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Specialist in Mitsubishi airco Limburg, Daikin, LG en Samsung. Airco kopen en laten installeren 
            in heel Limburg met garantie tot 10 jaar.
          </p>
        </motion.div>

        {/* Brands Grid */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8"
        >
          {brands.map((brand, index) => (
            <motion.div
              key={brand.name}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group"
            >
              <div className="bg-white rounded-xl p-6 shadow-sm hover:shadow-lg transition-all duration-300 h-full flex flex-col items-center justify-center text-center">
                <h3 className="text-xl font-bold text-gray-800 mb-2 group-hover:text-orange-500 transition-colors">
                  {brand.name}
                </h3>
                <p className="text-xs text-gray-500 line-clamp-2">
                  {brand.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Additional Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-12 text-center"
        >
          <p className="text-gray-600 mb-2">
            Ook leverbaar: <span className="font-semibold">Mobiele airco's</span> van LG en Tosot
          </p>
          <p className="text-gray-600">
            <span className="font-semibold">Airco covers</span> verkrijgbaar in wit en antraciet
          </p>
        </motion.div>
      </div>
    </section>
  );
}
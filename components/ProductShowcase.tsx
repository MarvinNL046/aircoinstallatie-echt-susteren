'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ChevronRight } from 'lucide-react';
import { useState } from 'react';

const products = [
  {
    brand: 'Daikin',
    series: [
      { 
        name: 'Comfora', 
        image: '/images/products/daikin-comfora-right.webp',
        description: 'Betaalbare kwaliteit met uitstekende prestaties'
      },
      { 
        name: 'Emura', 
        image: '/images/products/daikin-emura-wit.webp',
        description: 'Stijlvol design in wit, zilver of zwart'
      },
      { 
        name: 'Stylish', 
        image: '/images/products/daikin-stylish-wit.webp',
        description: 'Ultradun en modern design'
      },
      { 
        name: 'Perfera', 
        image: '/images/products/daikin-perfera-wit.webp',
        description: 'Topklasse comfort en energie-efficiëntie'
      },
    ],
  },
  {
    brand: 'LG',
    series: [
      { 
        name: 'ArtCool', 
        image: '/images/products/rac-eu-lg-artcool-black.webp',
        description: 'Kunstzinnig design met spiegel afwerking'
      },
      { 
        name: 'DualCool Premium', 
        image: '/images/products/LG-dualcool-indoor-premium.webp',
        description: 'Premium koeling met dual inverter technologie'
      },
    ],
  },
  {
    brand: 'Toshiba',
    series: [
      { 
        name: 'Haori', 
        image: '/images/products/Haori-zwart-vooraanzicht_3_11zon.webp',
        description: 'Japans design in meerdere kleuren'
      },
      { 
        name: 'Daiseikai', 
        image: '/images/products/Daiseikai 10-Wit-vooraanzicht_4_11zon.webp',
        description: 'Hoogste energie-efficiëntie klasse'
      },
      { 
        name: 'Seiya', 
        image: '/images/products/Seiya-plus-wit-vooraanzicht_12_11zon.webp',
        description: 'Uitstekende prijs-kwaliteit verhouding'
      },
    ],
  },
  {
    brand: 'Tosot',
    series: [
      { 
        name: 'Pular', 
        image: '/images/products/568-Pular-indoor-vooraanzicht.webp',
        description: 'Betrouwbaar en betaalbaar'
      },
      { 
        name: 'Clivia', 
        image: '/images/products/724-clivia-wit-vooraanzicht.webp',
        description: 'Modern design in wit of zwart'
      },
      { 
        name: 'Cosmo', 
        image: '/images/products/787-cosmo-indoor-vooraanzicht.webp',
        description: 'Compacte vormgeving'
      },
    ],
  },
];

export default function ProductShowcase() {
  const [selectedBrand, setSelectedBrand] = useState('Daikin');

  const selectedProducts = products.find(p => p.brand === selectedBrand);

  return (
    <section id="products" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Airco Kopen en Laten Installeren <span className="text-orange-500">Mitsubishi</span> & Meer
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Ontdek ons assortiment topmerken. Van Daikin airco Limburg tot Mitsubishi airco Limburg, 
            wij installeren alle A-merken met garantie.
          </p>
        </motion.div>

        {/* Brand Selector */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {products.map((product) => (
            <Button
              key={product.brand}
              variant={selectedBrand === product.brand ? 'default' : 'outline'}
              onClick={() => setSelectedBrand(product.brand)}
              className={selectedBrand === product.brand ? 'bg-orange-500 hover:bg-orange-600' : ''}
            >
              {product.brand}
            </Button>
          ))}
        </div>

        {/* Products Grid */}
        <motion.div
          key={selectedBrand}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
          className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8"
        >
          {selectedProducts?.series.map((product, index) => (
            <motion.div
              key={product.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="h-full hover:shadow-xl transition-shadow duration-300 overflow-hidden group">
                <div className="aspect-square relative bg-gray-50">
                  <Image
                    src={product.image}
                    alt={`${selectedBrand} ${product.name} airco installatie Echt-Susteren - ${product.description}`}
                    fill
                    className="object-contain p-4 group-hover:scale-110 transition-transform duration-300"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                    loading="lazy"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {selectedBrand} {product.name}
                  </h3>
                  <p className="text-gray-600 mb-4">
                    {product.description}
                  </p>
                  <Button
                    variant="outline"
                    className="w-full group border-orange-500 text-orange-600 hover:bg-orange-500 hover:text-white"
                    onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                  >
                    Vraag Offerte Aan
                    <ChevronRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </div>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* Additional Products */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-16 bg-gray-50 rounded-2xl p-8"
        >
          <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
            Ook Leverbaar
          </h3>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h4 className="font-semibold text-gray-900 mb-3">Mobiele Airco's</h4>
              <p className="text-gray-600">
                LG en Tosot mobiele airconditioners voor flexibele koeling. 
                Ideaal voor huurwoningen of tijdelijke oplossingen.
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-gray-900 mb-3">Airco Covers</h4>
              <p className="text-gray-600">
                Bescherm uw buitenunit met onze weerbestendige airco covers. 
                Verkrijgbaar in wit en antraciet voor een nette afwerking.
              </p>
            </div>
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mt-12"
        >
          <p className="text-lg text-gray-600 mb-6">
            Wilt u meer weten over onze producten of direct een offerte ontvangen?
          </p>
          <Button
            size="lg"
            className="bg-orange-500 hover:bg-orange-600 text-white"
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Vraag Nu Een Offerte Aan
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
'use client';

import { motion } from 'framer-motion';
import { Wrench, Shield, Settings, Play, CheckCircle } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { useState } from 'react';

const services = [
  {
    icon: Settings,
    title: 'Airco Installatie',
    description: 'Professionele installatie van alle merken airconditioners',
    features: [
      'Gratis inmeting en advies',
      'Binnen 1 week geïnstalleerd',
      'Inclusief garantie',
      'Alle topmerken',
    ],
    keywords: ['airco installatie echt-susteren', 'airco echt', 'airco susteren', 'airco plaatsen echt-susteren'],
  },
  {
    icon: Shield,
    title: 'Airco Onderhoud',
    description: 'Regelmatig onderhoud voor optimale prestaties',
    features: [
      'Vanaf €11 per maand',
      'Jaarlijkse controle',
      'Verlengde garantie',
      'Energiebesparing',
    ],
    keywords: ['airco onderhoud echt-susteren', 'airco service echt', 'aircoservice susteren'],
  },
  {
    icon: Wrench,
    title: 'Airco Reparatie',
    description: 'Snelle reparatie bij storingen',
    features: [
      'Diagnose binnen 24 uur',
      'Alle merken',
      'Transparante prijzen',
      'Garantie op reparatie',
    ],
    keywords: ['airco reparatie', 'airco storing', 'airco service'],
  },
];

export default function ServicesOptimized() {
  const [showVideo, setShowVideo] = useState(false);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Airco Services in <span className="text-orange-500">Echt-Susteren</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Specialist in airco installatie Echt-Susteren en omgeving. Van Sittard tot Roermond, 
            wij zijn uw betrouwbare partner voor alle airco diensten in Limburg.
          </p>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-3 gap-8 mb-16"
        >
          {services.map((service, index) => (
            <motion.div key={index} variants={itemVariants}>
              <Card className="h-full hover:shadow-2xl transition-shadow duration-300 overflow-hidden group">
                <div className="p-8">
                  <div className="w-16 h-16 bg-blue-100 rounded-xl flex items-center justify-center mb-6 group-hover:bg-blue-600 transition-colors duration-300">
                    <service.icon className="w-8 h-8 text-blue-600 group-hover:text-white transition-colors duration-300" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 mb-6">
                    {service.description}
                  </p>
                  <ul className="space-y-3 mb-8">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start space-x-3">
                        <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button
                    className="w-full bg-orange-500 hover:bg-orange-600 text-white"
                    onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                  >
                    Meer Informatie
                  </Button>
                </div>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* Video Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-white rounded-3xl p-8 shadow-xl"
        >
          <div className="text-center mb-8">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              Zie Hoe Wij Te Werk Gaan
            </h3>
            <p className="text-lg text-gray-600">
              Bekijk onze professionele werkwijze in deze korte video
            </p>
          </div>

          <div className="relative aspect-video rounded-2xl overflow-hidden bg-gray-100">
            {!showVideo ? (
              <div 
                className="absolute inset-0 flex items-center justify-center cursor-pointer group"
                onClick={() => setShowVideo(true)}
              >
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                <div className="relative z-10 text-center">
                  <div className="w-20 h-20 bg-orange-500 rounded-full flex items-center justify-center mb-4 mx-auto group-hover:scale-110 transition-transform duration-300">
                    <Play className="w-10 h-10 text-white ml-1" />
                  </div>
                  <p className="text-white text-lg font-semibold">Bekijk Video</p>
                </div>
                <img
                  src="https://images.unsplash.com/photo-1621905252507-b35492cc74b4?auto=format&fit=crop&q=80"
                  alt="Airco installatie preview"
                  className="absolute inset-0 w-full h-full object-cover"
                />
              </div>
            ) : (
              <iframe
                width="100%"
                height="100%"
                src="https://www.youtube.com/embed/9m-jkGgfLog?autoplay=1"
                title="StayCool Airco Service Video"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="absolute inset-0"
              />
            )}
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mt-16"
        >
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Klaar om te besparen op uw energiekosten?
          </h3>
          <p className="text-lg text-gray-600 mb-8">
            Vraag vandaag nog een vrijblijvende offerte aan en ontdek wat wij voor u kunnen betekenen. 
            Bekijk ook onze <button onClick={() => document.getElementById('products')?.scrollIntoView({ behavior: 'smooth' })} className="text-orange-500 hover:underline font-semibold">airco producten</button> of 
            lees de <button onClick={() => document.getElementById('faq')?.scrollIntoView({ behavior: 'smooth' })} className="text-orange-500 hover:underline font-semibold ml-1">veelgestelde vragen</button>.
          </p>
          <Button
            size="lg"
            className="bg-orange-500 hover:bg-orange-600 text-white"
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Gratis Offerte Aanvragen
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
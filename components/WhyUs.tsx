'use client';

import { motion } from 'framer-motion';
import { Award, Clock, Users, ShieldCheck, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const features = [
  {
    icon: Award,
    title: 'Gratis Offerte',
    description: 'Vrijblijvend advies en een transparante prijsopgave zonder verborgen kosten.',
    highlight: 'Altijd vrijblijvend',
  },
  {
    icon: Users,
    title: 'Gecertificeerde Monteurs',
    description: 'Al onze monteurs zijn F-gassen gecertificeerd en hebben jarenlange ervaring.',
    highlight: 'Topkwaliteit gegarandeerd',
  },
  {
    icon: Clock,
    title: 'Snelle Service',
    description: 'Binnen 24 uur reactie op uw aanvraag. Installatie vaak binnen een week mogelijk.',
    highlight: 'Geen lange wachttijden',
  },
  {
    icon: ShieldCheck,
    title: 'Uitgebreide Garantie',
    description: 'Tot 10 jaar garantie op uw airco bij onderhoud. Uw investering is beschermd.',
    highlight: '100% zekerheid',
  },
];

export default function WhyUs() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
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
    <section id="why-us" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Uw <span className="text-orange-500">Airco Specialist Limburg</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Als airco installateur in Echt-Susteren bedienen wij heel Zuid-Limburg. Van airco Sittard tot 
            airco Roermond, van airco Geleen tot airco Maastricht - altijd dichtbij!
          </p>
        </motion.div>

        {/* Features Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16"
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="relative group"
            >
              <div className="bg-gray-50 rounded-2xl p-8 h-full hover:bg-blue-50 transition-all duration-300 hover:shadow-xl">
                {/* Icon */}
                <div className="w-16 h-16 bg-blue-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <feature.icon className="w-8 h-8 text-white" />
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600 mb-4">
                  {feature.description}
                </p>
                
                {/* Highlight */}
                <div className="absolute top-4 right-4">
                  <span className="bg-orange-100 text-orange-600 text-xs font-semibold px-3 py-1 rounded-full">
                    {feature.highlight}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Statistics Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-gradient-to-r from-blue-900 to-blue-800 rounded-3xl p-12 text-white"
        >
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <h4 className="text-4xl font-bold mb-2">500+</h4>
              <p className="text-blue-100">Tevreden Klanten</p>
            </div>
            <div>
              <h4 className="text-4xl font-bold mb-2">10+</h4>
              <p className="text-blue-100">Jaar Ervaring</p>
            </div>
            <div>
              <h4 className="text-4xl font-bold mb-2">24u</h4>
              <p className="text-blue-100">Reactietijd</p>
            </div>
            <div>
              <h4 className="text-4xl font-bold mb-2">4.7/5</h4>
              <p className="text-blue-100">Google Reviews</p>
            </div>
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
            Overtuigd van onze kwaliteit?
          </h3>
          <p className="text-lg text-gray-600 mb-8">
            Vraag vandaag nog een vrijblijvende offerte aan en ervaar het verschil
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-orange-500 hover:bg-orange-600 text-white group"
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Direct Offerte Aanvragen
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-gray-300 text-gray-700 hover:bg-gray-50"
              onClick={() => window.open('tel:0462021430', '_self')}
            >
              Bel Direct: 046 202 1430
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
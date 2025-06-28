'use client';

import { motion } from 'framer-motion';
import { Phone, ArrowRight, Zap, Euro } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface CTABannerProps {
  variant?: 'primary' | 'secondary';
}

export default function CTABanner({ variant = 'primary' }: CTABannerProps) {
  const isPrimary = variant === 'primary';

  const content = isPrimary
    ? {
        title: 'Bespaar Direct Op Uw Energiekosten!',
        subtitle: 'Moderne airco\'s verbruiken tot 40% minder energie dan traditionele verwarming',
        cta: 'Bereken Uw Besparing',
        highlight: 'Onderhoud vanaf €11/maand',
        icon: Euro,
      }
    : {
        title: 'Klaar Voor De Zomer?',
        subtitle: 'Installatie vaak al binnen 1 week mogelijk. Vraag nu een offerte aan!',
        cta: 'Direct Offerte Aanvragen',
        highlight: 'Gratis inmeting',
        icon: Zap,
      };

  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className={`py-16 ${isPrimary ? 'bg-gradient-to-r from-blue-900 to-blue-800' : 'bg-gradient-to-r from-orange-500 to-orange-600'}`}
    >
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
          {/* Content */}
          <div className="flex-1 text-center lg:text-left">
            <div className="flex items-center justify-center lg:justify-start mb-4">
              <div className="bg-white/20 backdrop-blur-sm rounded-full px-4 py-2 inline-flex items-center space-x-2">
                <content.icon className="w-5 h-5 text-white" />
                <span className="text-white font-semibold">{content.highlight}</span>
              </div>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">
              {content.title}
            </h2>
            <p className="text-lg text-white/90 mb-6 lg:mb-0">
              {content.subtitle}
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4">
            <Button
              size="lg"
              className={`${
                isPrimary
                  ? 'bg-orange-500 hover:bg-orange-600'
                  : 'bg-white hover:bg-gray-100 text-orange-600'
              } group`}
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              {content.cta}
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-gray-900"
              onClick={() => window.open('tel:0462021430', '_self')}
            >
              <Phone className="w-5 h-5 mr-2" />
              046 202 1430
            </Button>
          </div>
        </div>

        {/* Trust Elements */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-8 pt-8 border-t border-white/20"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
            <div className="text-white">
              <p className="text-2xl font-bold">500+</p>
              <p className="text-sm text-white/80">Tevreden klanten</p>
            </div>
            <div className="text-white">
              <p className="text-2xl font-bold">24u</p>
              <p className="text-sm text-white/80">Reactietijd</p>
            </div>
            <div className="text-white">
              <p className="text-2xl font-bold">10j</p>
              <p className="text-sm text-white/80">Garantie mogelijk</p>
            </div>
            <div className="text-white">
              <p className="text-2xl font-bold">4.7★</p>
              <p className="text-sm text-white/80">Google score</p>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
}
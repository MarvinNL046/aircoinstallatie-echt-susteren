'use client';

import { Phone, Mail, MapPin, Clock, Star, MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function Footer() {
  const openingstijden = [
    { dag: 'Maandag', tijd: '09:00 - 17:00' },
    { dag: 'Dinsdag', tijd: '09:00 - 17:00' },
    { dag: 'Woensdag', tijd: '09:00 - 17:00' },
    { dag: 'Donderdag', tijd: '09:00 - 17:00' },
    { dag: 'Vrijdag', tijd: '09:00 - 16:00' },
    { dag: 'Zaterdag', tijd: 'Gesloten' },
    { dag: 'Zondag', tijd: 'Gesloten' },
  ];

  const serviceGebieden = [
    'Sittard', 'Geleen', 'Heerlen', 'Brunssum', 'Landgraaf',
    'Kerkrade', 'Voerendaal', 'Hoensbroek', 'Roermond', 'Maastricht'
  ];

  return (
    <footer className="bg-gray-900 text-white">
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-2xl font-bold mb-4">
              Airco <span className="text-orange-500">Echt-Susteren</span>
            </h3>
            <p className="text-gray-300 mb-4">
              Uw specialist voor airco installatie in Echt-Susteren en heel Limburg. Professioneel, betrouwbaar en scherp geprijsd.
            </p>
            <div className="flex items-center space-x-2 mb-4">
              <div className="flex text-yellow-400">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-current" />
                ))}
              </div>
              <span className="text-gray-300">4.7/5 (163 reviews)</span>
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact</h4>
            <div className="space-y-3">
              <a href="tel:0462021430" className="flex items-center space-x-3 hover:text-orange-500 transition-colors">
                <Phone className="w-5 h-5" />
                <span>046 202 1430</span>
              </a>
              <a href="https://wa.me/31636481054" className="flex items-center space-x-3 hover:text-orange-500 transition-colors">
                <MessageCircle className="w-5 h-5" />
                <span>06 3648 1054 (WhatsApp)</span>
              </a>
              <a href="mailto:info@staycoolairco.nl" className="flex items-center space-x-3 hover:text-orange-500 transition-colors">
                <Mail className="w-5 h-5" />
                <span>info@staycoolairco.nl</span>
              </a>
              <div className="flex items-start space-x-3 text-gray-300">
                <MapPin className="w-5 h-5 mt-1 flex-shrink-0" />
                <div>
                  <p>Aan de Bogen 11</p>
                  <p>6118 AS Nieuwstadt</p>
                  <p className="text-sm text-gray-400 mt-1">(Geen bezoekadres)</p>
                </div>
              </div>
            </div>
          </div>

          {/* Openingstijden */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Openingstijden</h4>
            <div className="space-y-2">
              {openingstijden.map((item) => (
                <div key={item.dag} className="flex justify-between text-sm">
                  <span className="text-gray-300">{item.dag}</span>
                  <span className={item.tijd === 'Gesloten' ? 'text-gray-500' : 'text-white'}>
                    {item.tijd}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Service Gebieden */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Service Gebieden</h4>
            <div className="grid grid-cols-2 gap-2">
              {serviceGebieden.map((gebied) => (
                <span key={gebied} className="text-sm text-gray-300 hover:text-orange-500 transition-colors cursor-pointer">
                  {gebied}
                </span>
              ))}
            </div>
            <p className="text-sm text-gray-400 mt-4">
              En heel Zuid-Limburg!
            </p>
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-12 pt-8 border-t border-gray-800">
          <div className="bg-gradient-to-r from-blue-900 to-blue-800 rounded-2xl p-8 text-center">
            <h3 className="text-2xl font-bold mb-4">
              Bespaar nu op uw energiekosten!
            </h3>
            <p className="text-lg mb-6 text-blue-100">
              Onderhoud vanaf slechts €11 per maand. Vraag direct een gratis offerte aan!
            </p>
            <Button
              size="lg"
              className="bg-orange-500 hover:bg-orange-600 text-white"
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Gratis Offerte Aanvragen
            </Button>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="bg-gray-950 py-6">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-sm text-gray-400">
              © {new Date().getFullYear()} Airco Installatie Echt-Susteren. Alle rechten voorbehouden.
            </p>
            <div className="flex space-x-6 text-sm">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                Privacybeleid
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                Algemene Voorwaarden
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                Cookie Instellingen
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
'use client';

import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { useState } from 'react';

const faqs = [
  {
    question: 'Hoeveel kost een airco installatie in Echt-Susteren?',
    answer: 'De kosten voor airco installatie in Echt-Susteren variëren afhankelijk van het type airco, het vermogen en de complexiteit van de installatie. Voor een nauwkeurige prijs bieden wij altijd een gratis offerte aan. Bel 046 202 1430 voor direct advies.'
  },
  {
    question: 'Hoe lang duurt het installeren van een airco?',
    answer: 'Een standaard airco installatie duurt gemiddeld 4-6 uur. Bij meerdere units of complexe situaties kan dit langer duren. Wij kunnen vaak binnen 1 week na opdracht installeren.'
  },
  {
    question: 'Wat kost airco onderhoud per jaar?',
    answer: 'Airco onderhoud begint al vanaf €11 per maand bij een onderhoudscontract. Een losse onderhoudsbeurt kost €149. Regelmatig onderhoud verlengt de levensduur en houdt uw energieverbruik laag.'
  },
  {
    question: 'Welke airco merken installeren jullie?',
    answer: 'Wij installeren alle A-merken zoals Daikin, Mitsubishi, LG, Samsung, Toshiba en Tosot. Als specialist kunnen wij u adviseren welk merk het beste bij uw situatie past.'
  },
  {
    question: 'Kan een airco ook verwarmen?',
    answer: 'Ja, moderne airco\'s hebben een warmtepompfunctie en kunnen zeer efficiënt verwarmen. Dit is vaak goedkoper dan traditionele verwarming, zeker in combinatie met zonnepanelen.'
  },
  {
    question: 'Hoeveel bespaart een airco op energiekosten?',
    answer: 'Een moderne airco kan tot 40% besparen op verwarmingskosten vergeleken met gas. In combinatie met zonnepanelen kunt u zelfs klimaatneutraal verwarmen en koelen.'
  },
  {
    question: 'Hebben jullie een 24/7 storingsdienst?',
    answer: 'Wij zijn bereikbaar tijdens kantooruren (ma-do 9:00-17:00, vr 9:00-16:00). Bij spoed streven we ernaar binnen 24 uur ter plaatse te zijn.'
  },
  {
    question: 'In welke plaatsen zijn jullie actief?',
    answer: 'Vanuit Echt-Susteren bedienen wij heel Limburg, inclusief Sittard, Geleen, Roermond, Heerlen, Maastricht, Brunssum, Kerkrade en alle omliggende plaatsen.'
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  // Schema markup for FAQ
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map(faq => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer
      }
    }))
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <section id="faq" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Veelgestelde Vragen over <span className="text-orange-500">Airco Installatie</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Alles wat u wilt weten over airco installatie, onderhoud en kosten in Echt-Susteren en Limburg
            </p>
          </motion.div>

          <div className="max-w-3xl mx-auto">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="mb-4"
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full bg-gray-50 hover:bg-gray-100 rounded-xl p-6 text-left transition-all duration-200"
                >
                  <div className="flex justify-between items-center">
                    <h3 className="text-lg font-semibold text-gray-900 pr-4">
                      {faq.question}
                    </h3>
                    <ChevronDown 
                      className={`w-5 h-5 text-gray-500 transition-transform duration-200 flex-shrink-0 ${
                        openIndex === index ? 'rotate-180' : ''
                      }`}
                    />
                  </div>
                  {openIndex === index && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                      className="mt-4 text-gray-600"
                    >
                      {faq.answer}
                    </motion.div>
                  )}
                </button>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mt-12"
          >
            <p className="text-lg text-gray-600 mb-6">
              Heeft u andere vragen? Wij helpen u graag!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="px-8 py-3 bg-orange-500 hover:bg-orange-600 text-white rounded-lg font-semibold transition-colors duration-200"
              >
                Stel Een Vraag
              </button>
              <a
                href="tel:0462021430"
                className="px-8 py-3 bg-white border-2 border-gray-300 hover:bg-gray-50 text-gray-800 rounded-lg font-semibold transition-colors duration-200"
              >
                Bel Direct: 046 202 1430
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
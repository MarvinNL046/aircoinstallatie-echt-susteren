'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Clock, Star, Shield, ThermometerSun } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import emailjs from '@emailjs/browser';
import { useToast } from '@/components/ui/use-toast';

const formSchema = z.object({
  name: z.string().min(2, 'Naam is verplicht'),
  phone: z.string().min(10, 'Ongeldig telefoonnummer'),
  postcode: z.string().min(6, 'Ongeldig postcode'),
  message: z.string().optional(),
});

type FormValues = z.infer<typeof formSchema>;

const rotatingTexts = [
  'Bespaar tot 40% op energiekosten',
  'Verwarmen én koelen in één systeem',
  'Ideaal met zonnepanelen',
  'Fluisterstil en energiezuinig',
  'Installatie binnen 1 week mogelijk',
  'Onderhoud vanaf €11 per maand',
];

export default function HeroOptimized() {
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormValues>({
    resolver: zodResolver(formSchema),
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTextIndex((prev) => (prev + 1) % rotatingTexts.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const onSubmit = async (data: FormValues) => {
    setIsSubmitting(true);
    
    try {
      const result = await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        {
          from_name: data.name,
          phone: data.phone,
          postcode: data.postcode,
          message: data.message || 'Geen bericht',
          to_name: 'Airco Installatie Echt-Susteren',
        },
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
      );

      if (result.status === 200) {
        toast({
          title: "Aanvraag verzonden!",
          description: "Binnen 24 uur ontvangt u een reactie van ons.",
        });
        reset();
      }
    } catch (error) {
      toast({
        title: "Er is iets misgegaan",
        description: "Probeer het later opnieuw of bel ons direct.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900 z-0" />
      
      {/* Animated Background Pattern */}
      <div className="absolute inset-0 z-10 opacity-20">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 1px)`,
          backgroundSize: '40px 40px',
        }} />
      </div>

      <div className="container mx-auto px-4 relative z-20 pt-24">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* Urgency Ribbon */}
            <div className="inline-flex items-center space-x-2 bg-orange-500 text-white px-4 py-2 rounded-full mb-6">
              <Clock className="w-4 h-4" />
              <span className="font-semibold">Binnen 24u reactie</span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              Airco Installatie{' '}
              <span className="text-orange-500">Echt-Susteren</span>
            </h1>

            {/* Typewriter Effect */}
            <div className="h-20 mb-8">
              <AnimatePresence mode="wait">
                <motion.p
                  key={currentTextIndex}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.5 }}
                  className="text-xl md:text-2xl text-blue-100"
                >
                  {rotatingTexts[currentTextIndex]}
                </motion.p>
              </AnimatePresence>
            </div>

            {/* Trust Badges */}
            <div className="flex flex-wrap items-center gap-6 mb-8">
              <div className="flex items-center space-x-2">
                <div className="flex text-yellow-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-current" />
                  ))}
                </div>
                <span className="text-white font-semibold">4.7/5</span>
                <span className="text-gray-300">(163 reviews)</span>
              </div>
              <div className="flex items-center space-x-2 text-white">
                <Shield className="w-5 h-5 text-green-400" />
                <span>Gecertificeerd</span>
              </div>
              <div className="flex items-center space-x-2 text-white">
                <ThermometerSun className="w-5 h-5 text-blue-400" />
                <span>Alle merken</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                className="bg-orange-500 hover:bg-orange-600 text-white group"
                onClick={() => document.getElementById('contact-form')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Direct Offerte Aanvragen
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="bg-white/10 border-2 border-white text-white hover:bg-white hover:text-gray-900 backdrop-blur-sm"
                onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Bekijk Onze Services
              </Button>
            </div>
          </motion.div>

          {/* Right Column - Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 shadow-2xl border border-white/20">
              <h3 className="text-2xl font-bold text-white mb-2">
                Vraag Direct Een Offerte Aan
              </h3>
              <p className="text-blue-100 mb-6">
                Vul het formulier in en ontvang binnen 24 uur een vrijblijvende offerte
              </p>

              <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                <div>
                  <Input
                    placeholder="Uw naam"
                    className="bg-white/20 border-white/30 text-white placeholder:text-gray-300"
                    {...register('name')}
                    disabled={isSubmitting}
                  />
                  {errors.name && (
                    <p className="text-red-400 text-sm mt-1">{errors.name.message}</p>
                  )}
                </div>

                <div>
                  <Input
                    type="tel"
                    placeholder="Telefoonnummer"
                    className="bg-white/20 border-white/30 text-white placeholder:text-gray-300"
                    {...register('phone')}
                    disabled={isSubmitting}
                  />
                  {errors.phone && (
                    <p className="text-red-400 text-sm mt-1">{errors.phone.message}</p>
                  )}
                </div>

                <div>
                  <Input
                    placeholder="Postcode"
                    className="bg-white/20 border-white/30 text-white placeholder:text-gray-300"
                    {...register('postcode')}
                    disabled={isSubmitting}
                  />
                  {errors.postcode && (
                    <p className="text-red-400 text-sm mt-1">{errors.postcode.message}</p>
                  )}
                </div>

                <div>
                  <Textarea
                    placeholder="Aanvullende informatie (optioneel)"
                    className="bg-white/20 border-white/30 text-white placeholder:text-gray-300"
                    rows={3}
                    {...register('message')}
                    disabled={isSubmitting}
                  />
                </div>

                <Button
                  type="submit"
                  size="lg"
                  className="w-full bg-orange-500 hover:bg-orange-600 text-white"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? 'Verzenden...' : 'Gratis Offerte Aanvragen'}
                </Button>

                <p className="text-xs text-gray-300 text-center">
                  Door het verzenden gaat u akkoord met onze privacy voorwaarden.
                  Wij nemen binnen 24 uur contact met u op.
                </p>
              </form>
            </div>
          </motion.div>
        </div>

        {/* Quick Navigation */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2 }}
          className="flex flex-wrap justify-center gap-4 mt-12"
        >
          <button
            onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
            className="px-4 py-2 bg-white/10 backdrop-blur-sm border border-white/30 text-white rounded-lg hover:bg-white/20 transition-all duration-200"
          >
            Onze Services
          </button>
          <button
            onClick={() => document.getElementById('products')?.scrollIntoView({ behavior: 'smooth' })}
            className="px-4 py-2 bg-white/10 backdrop-blur-sm border border-white/30 text-white rounded-lg hover:bg-white/20 transition-all duration-200"
          >
            Bekijk Producten
          </button>
          <button
            onClick={() => document.getElementById('service-areas')?.scrollIntoView({ behavior: 'smooth' })}
            className="px-4 py-2 bg-white/10 backdrop-blur-sm border border-white/30 text-white rounded-lg hover:bg-white/20 transition-all duration-200"
          >
            Service Gebieden
          </button>
          <button
            onClick={() => document.getElementById('faq')?.scrollIntoView({ behavior: 'smooth' })}
            className="px-4 py-2 bg-white/10 backdrop-blur-sm border border-white/30 text-white rounded-lg hover:bg-white/20 transition-all duration-200"
          >
            Veelgestelde Vragen
          </button>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
            className="text-white cursor-pointer"
            onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 14l-7 7m0 0l-7-7m7 7V3"
              />
            </svg>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
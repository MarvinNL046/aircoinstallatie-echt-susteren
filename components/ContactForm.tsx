'use client';

import { useState } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { sendEmail } from '@/utils/email';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/components/ui/use-toast';
import { Send, Phone, Mail, MapPin } from 'lucide-react';
import { motion } from 'framer-motion';

const formSchema = z.object({
  name: z.string().min(2, 'Naam is verplicht'),
  email: z.string().email('Ongeldig e-mailadres'),
  phone: z.string().min(10, 'Ongeldig telefoonnummer'),
  postcode: z.string().min(6, 'Ongeldig postcode'),
  service: z.string().min(1, 'Selecteer een service'),
  message: z.string().optional(),
});

type FormValues = z.infer<typeof formSchema>;

export default function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      email: '',
      phone: '',
      postcode: '',
      service: '',
      message: '',
    },
  });

  const onSubmit: SubmitHandler<FormValues> = async (data) => {
    setIsSubmitting(true);
    
    try {
      await sendEmail({
        name: data.name,
        email: data.email,
        phone: data.phone,
        postcode: data.postcode,
        service: data.service,
        message: data.message,
      });

      toast({
        title: "Aanvraag verzonden!",
        description: "We nemen binnen 24 uur contact met u op.",
      });
      
      reset();
    } catch (error) {
      console.error('Contact form error:', error);
      toast({
        title: "Er is iets misgegaan",
        description: "Probeer het later opnieuw of neem telefonisch contact op.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="grid lg:grid-cols-2 gap-12"
    >
      {/* Contact Info */}
      <div className="space-y-8">
        <div>
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Direct Contact
          </h3>
          <p className="text-gray-600 mb-8">
            Heeft u vragen of wilt u meer informatie? Neem gerust contact met ons op. 
            We staan klaar om u te helpen met al uw airco vragen.
          </p>
        </div>

        <div className="space-y-6">
          <a
            href="tel:0462021430"
            className="flex items-start space-x-4 group hover:translate-x-2 transition-transform duration-200"
          >
            <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center group-hover:bg-orange-500 transition-colors duration-200">
              <Phone className="w-6 h-6 text-orange-600 group-hover:text-white" />
            </div>
            <div>
              <h4 className="font-semibold text-gray-900">Telefoon</h4>
              <p className="text-gray-600">046 202 1430</p>
              <p className="text-sm text-gray-500">Ma-Vr: 09:00-17:00</p>
            </div>
          </a>

          <a
            href="mailto:info@staycoolairco.nl"
            className="flex items-start space-x-4 group hover:translate-x-2 transition-transform duration-200"
          >
            <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center group-hover:bg-blue-600 transition-colors duration-200">
              <Mail className="w-6 h-6 text-blue-600 group-hover:text-white" />
            </div>
            <div>
              <h4 className="font-semibold text-gray-900">E-mail</h4>
              <p className="text-gray-600">info@staycoolairco.nl</p>
              <p className="text-sm text-gray-500">24/7 bereikbaar</p>
            </div>
          </a>

          <div className="flex items-start space-x-4">
            <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
              <MapPin className="w-6 h-6 text-green-600" />
            </div>
            <div>
              <h4 className="font-semibold text-gray-900">Service Gebied</h4>
              <p className="text-gray-600">Heel Zuid-Limburg</p>
              <p className="text-sm text-gray-500">Sittard, Geleen, Heerlen en omstreken</p>
            </div>
          </div>
        </div>

        <div className="bg-blue-50 rounded-2xl p-6">
          <h4 className="font-semibold text-gray-900 mb-2">Spoed?</h4>
          <p className="text-gray-600 mb-4">
            Bij spoedeisende situaties kunt u ons direct bellen. 
            We streven ernaar om binnen 24 uur ter plaatse te zijn.
          </p>
          <Button
            variant="outline"
            className="border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white"
            onClick={() => window.open('tel:0462021430', '_self')}
          >
            <Phone className="w-4 h-4 mr-2" />
            Direct Bellen
          </Button>
        </div>
      </div>

      {/* Contact Form */}
      <div className="bg-white rounded-2xl shadow-xl p-8">
        <h3 className="text-2xl font-bold text-gray-900 mb-6">
          Vraag Een Gratis Offerte Aan
        </h3>
        
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
          <div>
            <Input
              placeholder="Uw naam"
              {...register('name')}
              className={`input-field ${errors.name ? 'border-red-500' : ''}`}
              disabled={isSubmitting}
            />
            {errors.name && (
              <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>
            )}
          </div>

          <div className="grid md:grid-cols-2 gap-5">
            <div>
              <Input
                type="email"
                placeholder="E-mailadres"
                {...register('email')}
                className={`input-field ${errors.email ? 'border-red-500' : ''}`}
                disabled={isSubmitting}
              />
              {errors.email && (
                <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
              )}
            </div>

            <div>
              <Input
                type="tel"
                placeholder="Telefoonnummer"
                {...register('phone')}
                className={`input-field ${errors.phone ? 'border-red-500' : ''}`}
                disabled={isSubmitting}
              />
              {errors.phone && (
                <p className="text-red-500 text-sm mt-1">{errors.phone.message}</p>
              )}
            </div>
          </div>

          <div>
            <Input
              placeholder="Postcode"
              {...register('postcode')}
              className={`input-field ${errors.postcode ? 'border-red-500' : ''}`}
              disabled={isSubmitting}
            />
            {errors.postcode && (
              <p className="text-red-500 text-sm mt-1">{errors.postcode.message}</p>
            )}
          </div>

          <div>
            <select
              {...register('service')}
              className={`w-full input-field ${errors.service ? 'border-red-500' : ''}`}
              disabled={isSubmitting}
            >
              <option value="">Selecteer een service</option>
              <option value="installatie">Airco Installatie</option>
              <option value="onderhoud">Airco Onderhoud</option>
              <option value="reparatie">Airco Reparatie</option>
              <option value="advies">Vrijblijvend Advies</option>
            </select>
            {errors.service && (
              <p className="text-red-500 text-sm mt-1">{errors.service.message}</p>
            )}
          </div>

          <div>
            <Textarea
              placeholder="Aanvullende informatie (optioneel)"
              {...register('message')}
              className="input-field"
              rows={4}
              disabled={isSubmitting}
            />
          </div>

          <Button
            type="submit"
            size="lg"
            className="w-full bg-orange-500 hover:bg-orange-600 text-white group"
            disabled={isSubmitting}
          >
            {isSubmitting ? (
              'Verzenden...'
            ) : (
              <>
                Gratis Offerte Aanvragen
                <Send className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </>
            )}
          </Button>

          <p className="text-xs text-gray-500 text-center">
            Door het verzenden gaat u akkoord met onze privacy voorwaarden. 
            Wij nemen binnen 24 uur contact met u op.
          </p>
        </form>
      </div>
    </motion.div>
  );
}

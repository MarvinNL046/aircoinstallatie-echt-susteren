import ContactForm from '@/components/ContactForm';
import HeroOptimized from '@/components/HeroOptimized';
import ServicesOptimized from '@/components/ServicesOptimized';
import WhyUs from '@/components/WhyUs';
import BrandLogos from '@/components/BrandLogos';
import ProductShowcase from '@/components/ProductShowcase';
import CTABanner from '@/components/CTABanner';
import Testimonials from '@/components/Testimonials';
import ServiceAreas from '@/components/ServiceAreas';
import FAQ from '@/components/FAQ';
import Schema from '@/components/Schema';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Breadcrumb from '@/components/Breadcrumb';

export default function Home() {
  return (
    <>
      <Schema />
      <Navbar />
      <main className="min-h-screen">
        <HeroOptimized />
        <Breadcrumb />
        <ServicesOptimized />
        <CTABanner variant="primary" />
        <WhyUs />
        <BrandLogos />
        <ProductShowcase />
        <ServiceAreas />
        <Testimonials />
        <FAQ />
        <CTABanner variant="secondary" />
        
        <section id="contact" className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
                Vraag Nu Een <span className="text-orange-500">Gratis Offerte</span> Aan
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-4">
                Vul het formulier in of neem direct contact op. We reageren binnen 24 uur!
              </p>
              <div className="flex items-center justify-center space-x-4 text-sm">
                <span className="text-green-600 font-semibold">✅ Gratis inmeting</span>
                <span className="text-green-600 font-semibold">✅ Scherpe prijzen</span>
                <span className="text-green-600 font-semibold">✅ Alle merken</span>
              </div>
            </div>
            <ContactForm />
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
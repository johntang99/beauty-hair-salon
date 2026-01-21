import { services, beautyServices, hairServices } from '@/lib/services';
import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { Clock, DollarSign, ArrowRight, Sparkles, Check } from 'lucide-react';
import IconBadge from '@/components/ui/IconBadge';
import Chip from '@/components/ui/Chip';

export const metadata: Metadata = {
  title: 'Services | The Beauty Cares',
  description: 'Luxury beauty and hair services including haircuts, color, facials, makeup, lash extensions, and more. Expert stylists and premium products.',
};

// Unsplash photos for each service
const servicePhotos: { [key: string]: string } = {
  // Hair Services
  'haircuts-styling': 'https://images.unsplash.com/photo-1562322140-8baeececf3df?w=800&q=80',
  'hair-coloring': 'https://images.unsplash.com/photo-1522337660859-02fbefca4702?w=800&q=80',
  'highlights-balayage': 'https://images.unsplash.com/photo-1560066984-138dadb4c035?w=800&q=80',
  'hair-treatments': 'https://images.unsplash.com/photo-1519699047748-de8e457a634e?w=800&q=80',
  'special-event-styling': 'https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?w=800&q=80',
  'hair-extensions': 'https://images.unsplash.com/photo-1515377905703-c4788e51af15?w=800&q=80',
  'blowout-styling': 'https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?w=800&q=80',
  'mens-grooming': 'https://images.unsplash.com/photo-1503951914875-452162b0f3f1?w=800&q=80',
  
  // Beauty Services
  'facials-skincare': 'https://images.unsplash.com/photo-1516975080664-ed2fc6a32937?w=800&q=80',
  'makeup-application': 'https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?w=800&q=80',
  'microblading': 'https://images.unsplash.com/photo-1457972729786-0411a3b2b626?w=800&q=80',
  'lash-extensions': 'https://images.unsplash.com/photo-1519699047748-de8e457a634e?w=800&q=80',
  'waxing-hair-removal': 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=800&q=80',
  'skin-treatments': 'https://images.unsplash.com/photo-1552693673-1bf958298935?w=800&q=80',
  'bridal-packages': 'https://images.unsplash.com/photo-1519415510236-718bdfcd89c8?w=800&q=80',
};

export default function ServicesPage() {
  return (
    <main>
      {/* Hero Section */}
      <section className="relative py-20 px-4 bg-gradient-to-br from-[var(--backdrop-primary)] via-[var(--backdrop-secondary)] to-[var(--backdrop-primary)]">
        <div className="container mx-auto max-w-6xl text-center">
          <span className="inline-block px-4 py-2 bg-[var(--primary-100)] text-[var(--primary)] rounded-full text-small font-semibold mb-6">
            OUR SERVICES
          </span>
          <h1 className="text-display mb-6">
            Luxury Beauty & Hair Services
          </h1>
          <p className="text-subheading text-gray-600 max-w-3xl mx-auto leading-relaxed">
            From stunning hair transformations to rejuvenating skincare treatments, our expert team provides personalized services using premium products and the latest techniques.
          </p>
        </div>
      </section>

      {/* Quick Navigation */}
      <section className="sticky top-0 z-40 bg-white border-b border-gray-200 shadow-sm">
        <div className="container mx-auto max-w-6xl px-4">
          <div className="flex gap-4 overflow-x-auto py-4 scrollbar-hide">
            <a
              href="#hair-services"
              className="px-6 py-2 bg-[var(--primary-50)] text-[var(--primary)] rounded-full font-semibold text-small whitespace-nowrap hover:bg-[var(--primary-100)] transition-all"
            >
              💇 Hair Services
            </a>
            <a
              href="#beauty-services"
              className="px-6 py-2 bg-[var(--secondary-50)] text-[var(--secondary)] rounded-full font-semibold text-small whitespace-nowrap hover:bg-[var(--secondary-100)] transition-all"
            >
              ✨ Beauty Services
            </a>
            <a
              href="#pricing"
              className="px-6 py-2 bg-gray-100 text-gray-700 rounded-full font-semibold text-small whitespace-nowrap hover:bg-gray-200 transition-all"
            >
              💰 Pricing
            </a>
            <a
              href="#book"
              className="px-6 py-2 bg-[var(--primary)] text-white rounded-full font-semibold text-small whitespace-nowrap hover:bg-[var(--primary-dark)] transition-all"
            >
              📅 Book Now
            </a>
          </div>
        </div>
      </section>

      {/* Hair Services Section */}
      <section id="hair-services" className="py-20 px-4 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <div className="text-display mb-4">💇</div>
            <h2 className="text-heading mb-4">Hair Services</h2>
            <p className="text-subheading text-gray-600 max-w-3xl mx-auto">
              Expert hair care from precision cuts to stunning color transformations
            </p>
          </div>

          <div className="space-y-8">
            {hairServices.map((service) => (
              <div
                key={service.id}
                id={service.slug}
                className="bg-white rounded-3xl overflow-hidden border-2 border-gray-200 hover:border-[var(--primary)] transition-all shadow-lg hover:shadow-2xl"
              >
                <div className="grid md:grid-cols-[400px_1fr] gap-0">
                  {/* Service Photo - Left Side */}
                  <div className="relative aspect-[4/3] md:aspect-auto md:h-full min-h-[300px]">
                    <Image
                      src={servicePhotos[service.slug] || 'https://images.unsplash.com/photo-1560066984-138dadb4c035?w=800&q=80'}
                      alt={service.name}
                      fill
                      className="object-cover"
                      sizes="400px"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent md:bg-gradient-to-r md:from-black/40"></div>
                    
                    {/* Overlay badge */}
                    <div className="absolute bottom-4 left-4">
                      <div className="flex items-center gap-3 bg-white/95 backdrop-blur rounded-2xl px-4 py-3 shadow-lg">
                        <IconBadge iconName={service.icon} size={24} />
                        <div>
                          <p className="font-bold text-gray-900 text-body">{service.name}</p>
                          <p className="text-small text-[var(--primary)] font-semibold">{service.tagline}</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Content - Right Side */}
                  <div className="p-8">
                    <div className="mb-6">
                      <h3 className="text-subheading md:text-heading font-bold text-gray-900 mb-3">
                        {service.name}
                      </h3>
                      <p className="text-gray-700 leading-relaxed">
                        {service.description}
                      </p>
                    </div>

                    {/* Quick Info */}
                    <div className="grid sm:grid-cols-2 gap-4 mb-6">
                      <div className="flex items-center gap-3 p-4 bg-gray-50 rounded-xl">
                        <Clock className="w-5 h-5 text-[var(--primary)]" />
                        <div>
                          <p className="text-small text-gray-600">Duration</p>
                          <p className="font-bold text-gray-900">{service.duration}</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-3 p-4 bg-gradient-to-br from-[var(--primary-50)] to-[var(--secondary-50)] rounded-xl">
                        <DollarSign className="w-5 h-5 text-[var(--primary)]" />
                        <div>
                          <p className="text-small text-gray-600">Pricing</p>
                          <p className="font-bold text-[var(--primary)]">
                            {service.price.to 
                              ? `$${service.price.from} - $${service.price.to}`
                              : `From $${service.price.from}`
                            }
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Benefits */}
                    <div className="mb-6">
                      <p className="font-semibold text-gray-900 mb-3">Key Benefits:</p>
                      <div className="grid sm:grid-cols-2 gap-2">
                        {service.benefits.slice(0, 4).map((benefit, idx) => (
                          <div key={idx} className="flex items-start gap-2">
                            <Check className="w-4 h-4 text-[var(--primary)] mt-0.5 shrink-0" />
                            <span className="text-small text-gray-600">{benefit}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Process Steps (Collapsible) */}
                    <details className="group mb-6">
                      <summary className="cursor-pointer text-[var(--primary)] font-semibold flex items-center gap-2 hover:text-[var(--primary-dark)]">
                        <span>View Detailed Process ({service.processSteps.length} steps)</span>
                        <ArrowRight className="w-4 h-4 group-open:rotate-90 transition-transform" />
                      </summary>
                      <div className="mt-4 space-y-3 pl-4 border-l-2 border-[var(--primary-100)]">
                        {service.processSteps.map((step) => (
                          <div key={step.step} className="flex gap-3">
                            <div className="w-8 h-8 rounded-full bg-[var(--primary)] text-white flex items-center justify-center text-small font-bold shrink-0">
                              {step.step}
                            </div>
                            <div className="flex-1">
                              <h4 className="font-semibold text-gray-900">{step.title}</h4>
                              <p className="text-small text-gray-600">{step.description}</p>
                              <p className="text-small text-[var(--primary)] font-semibold mt-1">
                                {step.duration}
                              </p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </details>

                    {/* CTAs */}
                    <div className="flex gap-3">
                      <Link
                        href="/book"
                        className="flex-1 text-center bg-[var(--primary)] text-white px-6 py-3 rounded-xl hover:bg-[var(--primary-dark)] font-semibold transition-all shadow-md hover:shadow-lg"
                      >
                        Book This Service
                      </Link>
                      <Link
                        href="/contact"
                        className="px-6 py-3 border-2 border-[var(--primary)] text-[var(--primary)] rounded-xl hover:bg-[var(--primary-50)] font-semibold transition-all"
                      >
                        Ask Questions
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Beauty Services Section */}
      <section id="beauty-services" className="py-20 px-4 bg-gray-50">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <div className="text-display mb-4">✨</div>
            <h2 className="text-heading mb-4">Beauty Services</h2>
            <p className="text-subheading text-gray-600 max-w-3xl mx-auto">
              Rejuvenating skincare, flawless makeup, and specialty beauty treatments
            </p>
          </div>

          <div className="space-y-8">
            {beautyServices.map((service) => (
              <div
                key={service.id}
                id={service.slug}
                className="bg-white rounded-3xl overflow-hidden border-2 border-gray-200 hover:border-[var(--secondary)] transition-all shadow-lg hover:shadow-2xl"
              >
                <div className="grid md:grid-cols-[400px_1fr] gap-0">
                  {/* Service Photo - Left Side */}
                  <div className="relative aspect-[4/3] md:aspect-auto md:h-full min-h-[300px]">
                    <Image
                      src={servicePhotos[service.slug] || 'https://images.unsplash.com/photo-1516975080664-ed2fc6a32937?w=800&q=80'}
                      alt={service.name}
                      fill
                      className="object-cover"
                      sizes="400px"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent md:bg-gradient-to-r md:from-black/40"></div>
                    
                    {/* Overlay badge */}
                    <div className="absolute bottom-4 left-4">
                      <div className="flex items-center gap-3 bg-white/95 backdrop-blur rounded-2xl px-4 py-3 shadow-lg">
                        <IconBadge iconName={service.icon} size={24} />
                        <div>
                          <p className="font-bold text-gray-900 text-body">{service.name}</p>
                          <p className="text-small text-[var(--secondary)] font-semibold">{service.tagline}</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Content - Right Side */}
                  <div className="p-8">
                    <div className="mb-6">
                      <h3 className="text-subheading md:text-heading font-bold text-gray-900 mb-3">
                        {service.name}
                      </h3>
                      <p className="text-gray-700 leading-relaxed">
                        {service.description}
                      </p>
                    </div>

                    {/* Quick Info */}
                    <div className="grid sm:grid-cols-2 gap-4 mb-6">
                      <div className="flex items-center gap-3 p-4 bg-gray-50 rounded-xl">
                        <Clock className="w-5 h-5 text-[var(--secondary)]" />
                        <div>
                          <p className="text-small text-gray-600">Duration</p>
                          <p className="font-bold text-gray-900">{service.duration}</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-3 p-4 bg-gradient-to-br from-[var(--secondary-50)] to-[var(--primary-50)] rounded-xl">
                        <DollarSign className="w-5 h-5 text-[var(--secondary)]" />
                        <div>
                          <p className="text-small text-gray-600">Pricing</p>
                          <p className="font-bold text-[var(--secondary)]">
                            {service.price.to 
                              ? `$${service.price.from} - $${service.price.to}`
                              : `From $${service.price.from}`
                            }
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Benefits */}
                    <div className="mb-6">
                      <p className="font-semibold text-gray-900 mb-3">Key Benefits:</p>
                      <div className="grid sm:grid-cols-2 gap-2">
                        {service.benefits.slice(0, 4).map((benefit, idx) => (
                          <div key={idx} className="flex items-start gap-2">
                            <Sparkles className="w-4 h-4 text-[var(--secondary)] mt-0.5 shrink-0" />
                            <span className="text-small text-gray-600">{benefit}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Process Steps (Collapsible) */}
                    <details className="group mb-6">
                      <summary className="cursor-pointer text-[var(--secondary)] font-semibold flex items-center gap-2 hover:text-[var(--secondary-dark)]">
                        <span>View Detailed Process ({service.processSteps.length} steps)</span>
                        <ArrowRight className="w-4 h-4 group-open:rotate-90 transition-transform" />
                      </summary>
                      <div className="mt-4 space-y-3 pl-4 border-l-2 border-[var(--secondary-100)]">
                        {service.processSteps.map((step) => (
                          <div key={step.step} className="flex gap-3">
                            <div className="w-8 h-8 rounded-full bg-[var(--secondary)] text-white flex items-center justify-center text-small font-bold shrink-0">
                              {step.step}
                            </div>
                            <div className="flex-1">
                              <h4 className="font-semibold text-gray-900">{step.title}</h4>
                              <p className="text-small text-gray-600">{step.description}</p>
                              <p className="text-small text-[var(--secondary)] font-semibold mt-1">
                                {step.duration}
                              </p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </details>

                    {/* CTAs */}
                    <div className="flex gap-3">
                      <Link
                        href="/book"
                        className="flex-1 text-center bg-[var(--secondary)] text-white px-6 py-3 rounded-xl hover:bg-[var(--secondary-dark)] font-semibold transition-all shadow-md hover:shadow-lg"
                      >
                        Book This Service
                      </Link>
                      <Link
                        href="/contact"
                        className="px-6 py-3 border-2 border-[var(--secondary)] text-[var(--secondary)] rounded-xl hover:bg-[var(--secondary-50)] font-semibold transition-all"
                      >
                        Ask Questions
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quick Pricing Overview */}
      <section id="pricing" className="py-20 px-4 bg-white">
        <div className="container mx-auto max-w-5xl text-center">
          <h2 className="text-heading mb-4">Transparent Pricing</h2>
          <p className="text-subheading text-gray-600 mb-10">
            All services include consultation and premium products
          </p>
          <Link
            href="/pricing"
            className="inline-flex items-center gap-2 bg-[var(--primary)] text-white px-8 py-4 rounded-full hover:bg-[var(--primary-dark)] font-semibold text-subheading transition-all shadow-lg"
          >
            View Complete Pricing Guide
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>

      {/* CTA Section */}
      <section id="book" className="py-16 px-4 bg-gradient-to-br from-[var(--primary)] to-[var(--primary-dark)]">
        <div className="container mx-auto max-w-4xl text-center text-white">
          <h2 className="text-heading mb-4">
            Ready for Your Transformation?
          </h2>
          <p className="text-subheading mb-10 leading-relaxed max-w-3xl mx-auto text-white/95">
            Book your appointment today and experience the luxury service our clients rave about. Our expert team is ready to help you look and feel your best.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/book"
              className="bg-white text-[var(--primary)] px-8 py-4 rounded-full hover:bg-gray-50 font-semibold text-subheading transition-all shadow-lg hover:shadow-xl"
            >
              Book Your Appointment
            </Link>
            <a
              href="tel:+15551234567"
              className="border-2 border-white text-white px-8 py-4 rounded-full hover:bg-white/10 font-semibold text-subheading transition-all"
            >
              Call: (555) 123-4567
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}

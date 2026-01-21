import type { Metadata } from 'next';
import { services, beautyServices, hairServices } from '@/lib/services';
import Link from 'next/link';
import { Check, ArrowRight, Star, Sparkles } from 'lucide-react';
import Chip from '@/components/ui/Chip';

export const metadata: Metadata = {
  title: 'Pricing | The Beauty Cares',
  description: 'Transparent pricing for luxury beauty and hair services. View our complete price list for haircuts, color, facials, makeup, and more.',
};

export default function PricingPage() {
  // Sample packages
  const packages = [
    {
      id: '1',
      name: 'Bride-to-Be Package',
      price: 599,
      savings: 150,
      popular: true,
      description: 'Everything you need for your perfect wedding day',
      includes: [
        'Bridal hair & makeup trial',
        'Wedding day hair styling',
        'Wedding day makeup application',
        'Touch-up kit to go',
        'Pre-wedding skin prep facial',
      ],
    },
    {
      id: '2',
      name: 'Monthly Glow Package',
      price: 249,
      savings: 80,
      description: 'Regular maintenance for gorgeous hair and skin',
      includes: [
        '1 haircut & style',
        '1 customized facial',
        '20% off all products',
        '15% off additional services',
        'Priority booking',
      ],
    },
    {
      id: '3',
      name: 'Girls Night Out',
      price: 799,
      savings: 200,
      description: 'Perfect for group celebrations',
      includes: [
        'Services for 4 people',
        'Champagne & refreshments',
        'Hair & makeup for all',
        'Group photos',
        'Complimentary gift bags',
      ],
    },
  ];

  return (
    <main>
      {/* Hero Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-[var(--backdrop-primary)] via-[var(--backdrop-secondary)] to-[var(--backdrop-primary)]">
        <div className="container mx-auto max-w-4xl text-center">
          <span className="inline-block px-4 py-2 bg-[var(--primary-100)] text-[var(--primary)] rounded-full text-small font-semibold mb-6">
            TRANSPARENT PRICING
          </span>
          <h1 className="text-display mb-6">
            Quality You Can Afford
          </h1>
          <p className="text-subheading text-gray-600 leading-relaxed max-w-3xl mx-auto">
            We believe in transparent pricing with no hidden fees. All services include consultation, premium products, and expert care from our certified professionals.
          </p>
        </div>
      </section>

      {/* Quick Links */}
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
              href="#packages"
              className="px-6 py-2 bg-amber-50 text-amber-700 rounded-full font-semibold text-small whitespace-nowrap hover:bg-amber-100 transition-all"
            >
              📦 Packages
            </a>
          </div>
        </div>
      </section>

      {/* Hair Services Pricing */}
      <section id="hair-services" className="py-20 px-4 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <div className="text-display mb-4">💇</div>
            <h2 className="text-heading mb-4">Hair Services</h2>
            <p className="text-subheading text-gray-600">
              Expert hair care from precision cuts to stunning color
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {hairServices.map((service) => (
              <div
                key={service.id}
                className="bg-gradient-to-br from-[var(--backdrop-primary)] to-white border-2 border-gray-200 rounded-xl p-6 hover:border-[var(--primary)] hover:shadow-lg transition-all"
              >
                <h3 className="text-subheading font-bold mb-2">{service.name}</h3>
                <div className="text-heading font-bold text-[var(--primary)] mb-3">
                  {service.price.to 
                    ? `$${service.price.from} - $${service.price.to}`
                    : `From $${service.price.from}`
                  }
                </div>
                <p className="text-small text-gray-600 mb-4">{service.duration}</p>
                {service.price.note && (
                  <p className="text-small text-gray-600 italic mb-4">{service.price.note}</p>
                )}
                <p className="text-gray-700 mb-4 line-clamp-2">{service.tagline}</p>
                <Link
                  href={`/services#${service.slug}`}
                  className="text-[var(--primary)] hover:text-[var(--primary-dark)] font-semibold text-small inline-flex items-center gap-1"
                >
                  View Details <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Beauty Services Pricing */}
      <section id="beauty-services" className="py-20 px-4 bg-gray-50">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <div className="text-display mb-4">✨</div>
            <h2 className="text-heading mb-4">Beauty Services</h2>
            <p className="text-subheading text-gray-600">
              Rejuvenating skincare, flawless makeup, and specialty treatments
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {beautyServices.map((service) => (
              <div
                key={service.id}
                className="bg-gradient-to-br from-[var(--backdrop-secondary)] to-white border-2 border-gray-200 rounded-xl p-6 hover:border-[var(--secondary)] hover:shadow-lg transition-all"
              >
                <h3 className="text-subheading font-bold mb-2">{service.name}</h3>
                <div className="text-heading font-bold text-[var(--secondary)] mb-3">
                  {service.price.to 
                    ? `$${service.price.from} - $${service.price.to}`
                    : `From $${service.price.from}`
                  }
                </div>
                <p className="text-small text-gray-600 mb-4">{service.duration}</p>
                {service.price.note && (
                  <p className="text-small text-gray-600 italic mb-4">{service.price.note}</p>
                )}
                <p className="text-gray-700 mb-4 line-clamp-2">{service.tagline}</p>
                <Link
                  href={`/services#${service.slug}`}
                  className="text-[var(--secondary)] hover:text-[var(--secondary-dark)] font-semibold text-small inline-flex items-center gap-1"
                >
                  View Details <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Package Deals */}
      <section id="packages" className="py-20 px-4 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <span className="inline-block px-4 py-2 bg-amber-100 text-amber-700 rounded-full text-small font-semibold mb-4">
              SAVE WITH PACKAGES
            </span>
            <h2 className="text-heading mb-4">Exclusive Packages</h2>
            <p className="text-subheading text-gray-600 max-w-3xl mx-auto">
              Combine services and save! Our packages are designed for your convenience and budget
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {packages.map((pkg) => (
              <div
                key={pkg.id}
                className={`relative bg-gradient-to-br from-white to-gray-50 rounded-2xl p-8 border-2 transition-all ${
                  pkg.popular 
                    ? 'border-[var(--primary)] shadow-xl scale-105' 
                    : 'border-gray-200 hover:border-[var(--primary)] hover:shadow-lg'
                }`}
              >
                {pkg.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                    <Chip variant="primary" size="sm">
                      <Star className="w-3 h-3 inline mr-1" fill="currentColor" />
                      MOST POPULAR
                    </Chip>
                  </div>
                )}
                
                <h3 className="text-subheading font-bold text-gray-900 mb-2">{pkg.name}</h3>
                <p className="text-small text-gray-600 mb-4">{pkg.description}</p>
                
                <div className="mb-4">
                  <span className="text-display font-bold text-[var(--primary)]">${pkg.price}</span>
                  <span className="text-small text-gray-600 ml-2 line-through">${pkg.price + pkg.savings}</span>
                </div>
                
                <div className="inline-block px-3 py-1 bg-green-100 text-green-700 rounded-full text-small font-semibold mb-6">
                  Save ${pkg.savings}
                </div>
                
                <div className="space-y-3 mb-6">
                  <p className="font-semibold text-gray-900 text-small">Includes:</p>
                  {pkg.includes.map((item, idx) => (
                    <div key={idx} className="flex items-start gap-2">
                      <Check className="w-5 h-5 text-[var(--primary)] shrink-0 mt-0.5" />
                      <span className="text-small text-gray-700">{item}</span>
                    </div>
                  ))}
                </div>
                
                <Link
                  href="/book"
                  className={`block w-full text-center py-3 rounded-lg font-semibold transition-all ${
                    pkg.popular
                      ? 'bg-[var(--primary)] text-white hover:bg-[var(--primary-dark)] shadow-md'
                      : 'border-2 border-[var(--primary)] text-[var(--primary)] hover:bg-[var(--primary-50)]'
                  }`}
                >
                  Book This Package
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Info */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="container mx-auto max-w-5xl">
          <div className="bg-white border-2 border-gray-200 rounded-2xl p-8 md:p-12">
            <h2 className="text-heading text-center mb-8">What's Included</h2>
            
            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <div>
                <h3 className="text-subheading font-bold text-gray-900 mb-4">Every Service Includes:</h3>
                <div className="space-y-3">
                  {[
                    'Complimentary consultation',
                    'Premium professional products',
                    'Refreshments (coffee, tea, wine)',
                    'Free WiFi and comfortable seating',
                    'Expert certified professionals',
                    'Aftercare instructions',
                  ].map((item, idx) => (
                    <div key={idx} className="flex items-start gap-2">
                      <Sparkles className="w-5 h-5 text-[var(--primary)] shrink-0 mt-0.5" />
                      <span className="text-gray-700">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
              
              <div>
                <h3 className="text-subheading font-bold text-gray-900 mb-4">Good to Know:</h3>
                <div className="space-y-4 text-gray-700">
                  <p>
                    <strong>Cancellation Policy:</strong> Please provide 24 hours notice for cancellations or rescheduling to avoid a cancellation fee.
                  </p>
                  <p>
                    <strong>Late Arrivals:</strong> We hold appointments for up to 15 minutes. After that, we may need to reschedule or shorten your service.
                  </p>
                  <p>
                    <strong>Payment:</strong> We accept cash, credit cards, and digital payments. Gratuity is appreciated but never required.
                  </p>
                  <p>
                    <strong>Gift Cards:</strong> Available in any amount - the perfect gift for someone special!
                  </p>
                </div>
              </div>
            </div>
            
            <div className="pt-8 border-t border-gray-200 text-center">
              <p className="text-gray-600 mb-4">
                Have questions about pricing or services? We're happy to help!
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 text-[var(--primary)] hover:text-[var(--primary-dark)] font-semibold"
              >
                Contact Us <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-gradient-to-br from-[var(--primary)] to-[var(--primary-dark)]">
        <div className="container mx-auto max-w-4xl text-center text-white">
          <h2 className="text-heading mb-4">
            Ready to Book Your Appointment?
          </h2>
          <p className="text-subheading mb-10 leading-relaxed max-w-3xl mx-auto text-white/95">
            Choose the service or package that's right for you and book online today. We're excited to welcome you to The Beauty Cares!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/book"
              className="bg-white text-[var(--primary)] px-8 py-4 rounded-lg hover:bg-gray-50 font-semibold text-subheading transition-all shadow-lg"
            >
              Book Now
            </Link>
            <Link
              href="/services"
              className="border-2 border-white text-white px-8 py-4 rounded-lg hover:bg-white/10 font-semibold text-subheading transition-all"
            >
              Explore Services
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}

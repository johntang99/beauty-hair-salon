import type { Metadata } from 'next';
import Image from 'next/image';
import { beautyTransformations, getFeaturedTransformations, getAllCategories } from '@/lib/case-studies';
import Link from 'next/link';
import { ArrowRight, Clock, User, Sparkles, Check } from 'lucide-react';
import Chip from '@/components/ui/Chip';

export const metadata: Metadata = {
  title: 'Transformations | The Beauty Cares',
  description: 'Real client transformations and before/after results from The Beauty Cares. See the stunning work of our expert stylists and estheticians.',
};

export default function CaseStudiesPage() {
  const categories = getAllCategories();

  // Unsplash photos for transformations - before/after style
  const transformationPhotos: { [key: string]: string } = {
    'complete-bridal-transformation': 'https://images.unsplash.com/photo-1519415510236-718bdfcd89c8?w=1000&q=80',
    'gray-coverage-color-refresh': 'https://images.unsplash.com/photo-1562322140-8baeececf3df?w=1000&q=80',
    'damaged-hair-revival': 'https://images.unsplash.com/photo-1522337660859-02fbefca4702?w=1000&q=80',
    'dark-to-platinum-blonde': 'https://images.unsplash.com/photo-1515377905703-c4788e51af15?w=1000&q=80',
    'acne-skin-transformation': 'https://images.unsplash.com/photo-1516975080664-ed2fc6a32937?w=1000&q=80',
    'short-to-long-extensions': 'https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?w=1000&q=80',
    'anti-aging-facial-series': 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=1000&q=80',
    'special-event-makeover': 'https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?w=1000&q=80',
  };

  return (
    <main>
      {/* Hero Section */}
      <section className="relative py-20 px-4 bg-gradient-to-br from-[var(--backdrop-primary)] via-[var(--backdrop-secondary)] to-[var(--backdrop-primary)]">
        <div className="container mx-auto max-w-4xl text-center">
          <span className="inline-block px-4 py-2 bg-[var(--primary-100)] text-[var(--primary)] rounded-full text-small font-semibold mb-6">
            TRANSFORMATIONS
          </span>
          <h1 className="text-display mb-6">
            Real Clients, Real Results
          </h1>
          <p className="text-subheading text-gray-600 leading-relaxed max-w-3xl mx-auto">
            See the stunning transformations our expert team has created. Every client has a unique story, and we're honored to be part of their beauty journey.
          </p>
        </div>
      </section>

      {/* Category Filter */}
      <section className="sticky top-0 z-40 bg-white border-b border-gray-200 shadow-sm">
        <div className="container mx-auto max-w-6xl px-4">
          <div className="flex gap-4 overflow-x-auto py-4 scrollbar-hide">
            <a
              href="#all"
              className="px-6 py-2 bg-[var(--primary)] text-white rounded-full font-semibold text-small whitespace-nowrap hover:bg-[var(--primary-dark)] transition-all"
            >
              All Transformations
            </a>
            {categories.map((category) => (
              <a
                key={category}
                href={`#${category}`}
                className="px-6 py-2 bg-gray-100 text-gray-700 rounded-full font-semibold text-small whitespace-nowrap hover:bg-gray-200 transition-all capitalize"
              >
                {category.replace('-', ' ')}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Transformation Stories */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto max-w-6xl">
          {beautyTransformations.length > 0 ? (
            <div className="space-y-16">
              {beautyTransformations.map((transformation, index) => (
                <div
                  key={transformation.id}
                  id={transformation.slug}
                  className="bg-gradient-to-br from-[var(--backdrop-primary)] to-white rounded-2xl overflow-hidden border-2 border-gray-200 hover:border-[var(--primary)] hover:shadow-xl transition-all"
                >
                  <div className="grid md:grid-cols-2 gap-0">
                    {/* Before/After Image */}
                    <div className="aspect-[4/3] md:aspect-auto relative overflow-hidden">
                      <Image
                        src={transformationPhotos[transformation.slug] || 'https://images.unsplash.com/photo-1560066984-138dadb4c035?w=1000&q=80'}
                        alt={transformation.title}
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, 50vw"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                      
                      {/* Before/After Label */}
                      <div className="absolute bottom-4 left-4 right-4 flex justify-between">
                        <div className="bg-white/90 backdrop-blur px-3 py-1 rounded-full text-small font-bold text-gray-900">
                          TRANSFORMATION
                        </div>
                      </div>
                      
                      <div className="absolute top-4 left-4">
                        <Chip variant="primary" size="sm">
                          {transformation.category.toUpperCase()}
                        </Chip>
                      </div>
                      {transformation.featured && (
                        <div className="absolute top-4 right-4">
                          <Chip variant="secondary" size="sm">
                            ⭐ FEATURED
                          </Chip>
                        </div>
                      )}
                    </div>

                    {/* Content */}
                    <div className="p-8">
                      <h2 className="text-subheading md:text-heading font-bold text-gray-900 mb-4">
                        {transformation.title}
                      </h2>

                      {/* Meta Info */}
                      <div className="flex flex-wrap gap-4 mb-6 text-small text-gray-600">
                        {transformation.clientAge && (
                          <div className="flex items-center gap-2">
                            <User className="w-4 h-4" />
                            <span>Age {transformation.clientAge}</span>
                          </div>
                        )}
                        <div className="flex items-center gap-2">
                          <Clock className="w-4 h-4" />
                          <span>{transformation.duration}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Sparkles className="w-4 h-4" />
                          <span>{transformation.stylist}</span>
                        </div>
                      </div>

                      {/* Overview */}
                      <p className="text-gray-700 leading-relaxed mb-6">
                        {transformation.overview}
                      </p>

                      {/* Client Concerns */}
                      {transformation.concerns.length > 0 && (
                        <div className="mb-6">
                          <h3 className="font-semibold text-gray-900 mb-3">Client Concerns:</h3>
                          <ul className="space-y-2">
                            {transformation.concerns.map((concern, idx) => (
                              <li key={idx} className="flex items-start gap-2 text-small text-gray-600">
                                <span className="text-[var(--primary)] mt-0.5">•</span>
                                {concern}
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}

                      {/* Services Used */}
                      <div className="mb-6">
                        <h3 className="font-semibold text-gray-900 mb-3">Services Used:</h3>
                        <div className="flex flex-wrap gap-2">
                          {transformation.servicesUsed.map((service, idx) => (
                            <span
                              key={idx}
                              className="px-3 py-1 bg-[var(--primary-50)] text-[var(--primary)] rounded-full text-small font-medium"
                            >
                              {service}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Products Used */}
                      {transformation.productsUsed.length > 0 && (
                        <div className="mb-6">
                          <h3 className="font-semibold text-gray-900 mb-3">Products Used:</h3>
                          <div className="flex flex-wrap gap-2">
                            {transformation.productsUsed.map((product, idx) => (
                              <span
                                key={idx}
                                className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-small"
                              >
                                {product}
                              </span>
                            ))}
                          </div>
                        </div>
                      )}

                      {/* Outcome */}
                      <div className="mb-6 p-4 bg-white rounded-lg border-2 border-[var(--primary-100)]">
                        <h3 className="font-semibold text-[var(--primary)] mb-2">The Result:</h3>
                        <p className="text-gray-700 leading-relaxed">
                          {transformation.outcome}
                        </p>
                      </div>

                      {/* Testimonial */}
                      {transformation.testimonial && (
                        <div className="p-4 bg-gradient-to-br from-[var(--backdrop-primary)] to-[var(--backdrop-secondary)] rounded-lg border border-gray-200">
                          <p className="text-gray-700 italic leading-relaxed">
                            &ldquo;{transformation.testimonial}&rdquo;
                          </p>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-16 bg-gray-50 border-2 border-gray-200 rounded-xl">
              <div className="text-8xl mb-6">✨</div>
              <h3 className="text-subheading font-bold text-gray-900 mb-4">Transformations Coming Soon</h3>
              <p className="text-gray-600 text-body max-w-2xl mx-auto">
                We're currently compiling our best transformation stories. Check back soon!
              </p>
            </div>
          )}
        </div>
      </section>

      {/* How Our Process Works */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-heading font-bold text-gray-900 mb-4">Our Transformation Process</h2>
            <p className="text-subheading text-gray-600 max-w-3xl mx-auto">
              Every transformation begins with understanding your unique needs and goals
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                step: '1',
                title: 'Consultation',
                description:
                  'We begin with a thorough consultation to understand your goals, assess your current hair or skin condition, and discuss the best approach for your transformation.',
                icon: '💬',
              },
              {
                step: '2',
                title: 'Customized Plan',
                description:
                  'Based on your consultation, we create a personalized treatment plan, selecting the right services, products, and techniques to achieve your desired results.',
                icon: '📋',
              },
              {
                step: '3',
                title: 'Expert Execution',
                description:
                  'Our certified professionals execute your transformation with precision, care, and attention to detail, ensuring beautiful results and a comfortable experience.',
                icon: '✨',
              },
            ].map((item) => (
              <div
                key={item.step}
                className="bg-white rounded-xl p-8 border-2 border-gray-200 hover:border-[var(--primary)] transition-all text-center"
              >
                <div className="text-display mb-4">{item.icon}</div>
                <div className="w-12 h-12 rounded-full bg-[var(--primary)] text-white flex items-center justify-center font-bold text-subheading mx-auto mb-4">
                  {item.step}
                </div>
                <h3 className="text-subheading font-bold text-gray-900 mb-3">{item.title}</h3>
                <p className="text-gray-700 leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-gradient-to-br from-[var(--primary)] to-[var(--primary-dark)]">
        <div className="container mx-auto max-w-4xl text-center text-white">
          <h2 className="text-heading mb-4">
            Ready for Your Transformation?
          </h2>
          <p className="text-subheading mb-10 leading-relaxed max-w-3xl mx-auto text-white/95">
            Let our expert team help you achieve the look you've been dreaming of. Book a consultation today and start your transformation journey.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/book"
              className="bg-white text-[var(--primary)] px-8 py-4 rounded-lg hover:bg-gray-50 font-semibold text-subheading transition-all shadow-lg"
            >
              Book Your Consultation
            </Link>
            <Link
              href="/services"
              className="border-2 border-white text-white px-8 py-4 rounded-lg hover:bg-white/10 font-semibold text-subheading transition-all"
            >
              View Our Services
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}

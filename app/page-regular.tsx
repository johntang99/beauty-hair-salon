import Link from 'next/link';
import { Star, ArrowRight, Award, Users, Sparkles, TrendingUp, Play, Clock, Heart } from 'lucide-react';
import { siteConfig } from '@/lib/site';
import { services, getFeaturedServices } from '@/lib/services';
import { testimonials } from '@/lib/testimonials';
import { teamMembers, getFeaturedTeamMembers } from '@/lib/team';
import { products, getFeaturedProducts } from '@/lib/products';
import { beautyTransformations, getFeaturedTransformations } from '@/lib/case-studies';
import { galleryImages, getFeaturedImages } from '@/lib/gallery';
import IconBadge from '@/components/ui/IconBadge';
import Icon from '@/components/ui/Icon';
import Chip from '@/components/ui/Chip';

export default function Home() {
  // Get featured content
  const featuredServices = getFeaturedServices();
  const featuredTestimonials = testimonials.slice(0, 3);
  const featuredTeam = getFeaturedTeamMembers();
  const featuredProducts = getFeaturedProducts().slice(0, 3);
  const featuredTransformations = getFeaturedTransformations().slice(0, 3);
  const featuredGalleryImages = getFeaturedImages().slice(0, 4);

  return (
    <main>
      {/* Hero Section - Beauty Salon */}
      <section 
        className="relative py-16 md:py-24 px-4 overflow-hidden" 
        style={{ background: 'linear-gradient(to bottom right, var(--backdrop-primary), var(--backdrop-secondary), var(--backdrop-primary))' }}
      >
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-72 h-72 rounded-full mix-blend-multiply filter blur-xl animate-blob" style={{ backgroundColor: 'var(--primary)' }}></div>
          <div className="absolute top-40 right-10 w-72 h-72 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-2000" style={{ backgroundColor: 'var(--secondary)' }}></div>
          <div className="absolute bottom-20 left-1/2 w-72 h-72 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-4000" style={{ backgroundColor: 'var(--primary-light)' }}></div>
        </div>
        <div className="container mx-auto max-w-7xl relative">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Column - Text Content */}
            <div className="text-center lg:text-left">
              <div className="inline-block mb-6">
                <span className="bg-[var(--primary-100)] text-[var(--primary)] px-4 py-2 rounded-full text-small font-semibold">
                  ✨ Luxury Beauty & Hair Services
                </span>
              </div>
              <h1 className="text-display text-gray-900 mb-6 leading-tight">
                {siteConfig.brand.name}
              </h1>
              <p className="text-subheading md:text-heading text-[var(--primary)] mb-4 font-semibold">
                {siteConfig.brand.tagline}
              </p>
              <p className="text-subheading text-gray-600 mb-10">
                {siteConfig.brand.description}
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Link
                  href={siteConfig.cta.primary.href}
                  className="bg-[var(--cta-primary-bg)] hover:bg-[var(--cta-primary-hover)] text-[var(--cta-primary-text)] px-8 py-4 rounded-lg font-semibold text-subheading transition-all hover:shadow-lg flex items-center justify-center gap-2"
                >
                  {siteConfig.cta.primary.text}
                  <ArrowRight className="w-5 h-5" />
                </Link>
                <a
                  href={siteConfig.cta.secondary.href}
                  className="border-2 border-[var(--cta-secondary-border)] text-[var(--cta-secondary-text)] bg-[var(--cta-secondary-bg)] hover:bg-[var(--cta-secondary-hover-bg)] px-8 py-4 rounded-lg font-semibold text-subheading transition-all flex items-center justify-center gap-2"
                >
                  {siteConfig.cta.secondary.text}
                </a>
              </div>
              <div className="mt-12 flex flex-wrap justify-center lg:justify-start gap-6 text-small text-gray-600">
                {siteConfig.settings.specialties.slice(0, 3).map((specialty, i) => (
                  <span key={i} className="flex items-center gap-2">
                    <Sparkles className="w-4 h-4 text-[var(--primary)]" />
                    {specialty}
                  </span>
                ))}
              </div>
            </div>

            {/* Right Column - Hero Image */}
            <div className="relative lg:h-[600px] h-[400px]">
              <div className="absolute inset-0 bg-gradient-to-br from-[var(--backdrop-primary)] to-[var(--backdrop-secondary)] rounded-3xl overflow-hidden shadow-2xl">
                {/* Decorative Image Placeholder - Replace with actual image */}
                <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-pink-600/10 to-purple-600/10 relative">
                  {/* Decorative Elements */}
                  <div className="absolute top-10 left-10 w-24 h-24 bg-[var(--primary)]/20 rounded-full"></div>
                  <div className="absolute bottom-10 right-10 w-32 h-32 bg-[var(--secondary)]/20 rounded-full"></div>
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center">
                    <div className="text-8xl mb-4">💇‍♀️</div>
                    <p className="text-gray-600 font-medium">Luxury Beauty Services</p>
                    <p className="text-gray-500 text-small">Hair • Beauty • Wellness</p>
                  </div>
                </div>
              </div>
              {/* Decorative accent */}
              <div className="absolute -bottom-6 -right-6 w-48 h-48 rounded-3xl opacity-10 -z-10" style={{ backgroundColor: 'var(--primary)' }}></div>
              <div className="absolute -top-6 -left-6 w-48 h-48 rounded-3xl opacity-10 -z-10" style={{ backgroundColor: 'var(--secondary)' }}></div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust & Stats Bar */}
      <section className="py-12 px-4" style={{ background: 'linear-gradient(to right, var(--stats-bg-start), var(--stats-bg-end))' }}>
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { icon: 'award', value: '15+', label: 'Years Experience' },
              { icon: 'users', value: '5000+', label: 'Happy Clients' },
              { icon: 'star', value: '4.9', label: 'Average Rating' },
              { icon: 'sparkles', value: '15+', label: 'Expert Stylists' },
            ].map((stat, idx) => (
              <div key={idx} className="text-center">
                <div className="flex justify-center mb-3">
                  <div className="w-12 h-12 rounded-lg bg-white/20 flex items-center justify-center">
                    <Icon name={stat.icon} size={24} className="text-white" />
                  </div>
                </div>
                <div className="text-heading text-white mb-2">{stat.value}</div>
                <div className="text-small md:text-body text-white/90 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust Badges */}
      <section className="py-8 px-4 bg-white border-b border-gray-200">
        <div className="container mx-auto max-w-6xl">
          <div className="flex flex-wrap justify-center items-center gap-8 text-small text-gray-600">
            <div className="flex items-center gap-2">
              <Award className="w-5 h-5 text-[var(--primary)]" />
              <span className="font-semibold">Licensed & Certified</span>
            </div>
            <div className="flex items-center gap-2">
              <Sparkles className="w-5 h-5 text-[var(--primary)]" />
              <span className="font-semibold">Premium Products</span>
            </div>
            <div className="flex items-center gap-2">
              <Users className="w-5 h-5 text-[var(--primary)]" />
              <span className="font-semibold">Accepting New Clients</span>
            </div>
            <div className="flex items-center gap-2">
              <TrendingUp className="w-5 h-5 text-[var(--primary)]" />
              <span className="font-semibold">5-Star Rated Salon</span>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials - Social Proof */}
      <section className="py-20 px-4 bg-gradient-to-b from-white to-gray-50">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <span className="inline-block px-4 py-2 bg-[var(--primary-100)] text-[var(--primary)] rounded-full text-small font-semibold mb-4">
              CLIENT LOVE
            </span>
            <h2 className="text-heading mb-4">Real Transformations, Real Results</h2>
            <p className="text-subheading text-gray-600">Hear from our clients about their beauty experiences</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {featuredTestimonials.map((testimonial) => (
              <div
                key={testimonial.id}
                className="bg-white rounded-xl p-8 border-2 border-gray-200 hover:border-[var(--primary)] hover:shadow-xl transition-all"
              >
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <Star key={i} className="w-5 h-5" style={{ fill: 'var(--secondary)', color: 'var(--secondary)' }} />
                  ))}
                </div>
                <p className="text-gray-700 italic mb-6 leading-relaxed text-subheading">&ldquo;{testimonial.text}&rdquo;</p>
                <div className="border-t border-gray-200 pt-4">
                  <p className="font-semibold text-gray-900">{testimonial.name}</p>
                  <p className="text-small text-[var(--primary)]">{testimonial.service}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <p className="text-gray-600 mb-4">⭐⭐⭐⭐⭐ Rated 4.9/5 from {testimonials.length}+ reviews</p>
          </div>
        </div>
      </section>

      {/* Featured Services */}
      <section className="py-20 px-4 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <span className="inline-block px-4 py-2 bg-[var(--primary-100)] text-[var(--primary)] rounded-full text-small font-semibold mb-4">
              OUR SERVICES
            </span>
            <h2 className="text-heading mb-4">Luxury Beauty & Hair Services</h2>
            <p className="text-subheading text-gray-600">Expert care for your complete transformation</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredServices.map((service) => (
              <div
                key={service.id}
                className="bg-gradient-to-br from-[var(--backdrop-primary)] to-[var(--backdrop-secondary)] rounded-xl p-8 border-2 border-gray-200 hover:border-[var(--primary)] hover:shadow-xl transition-all group"
              >
                <div className="flex gap-4 items-start mb-4">
                  <IconBadge iconName={service.icon} size={24} className="shrink-0" />
                  <div className="flex-1">
                    <h3 className="text-subheading font-bold text-gray-900 mb-1 group-hover:text-[var(--primary)] transition-colors">
                      {service.name}
                    </h3>
                    <p className="text-small text-[var(--primary)] font-semibold">{service.tagline}</p>
                  </div>
                </div>
                <p className="text-gray-700 mb-4 leading-relaxed line-clamp-3">{service.description}</p>
                <div className="flex items-center justify-between text-small">
                  <span className="text-gray-600">
                    <Clock className="w-4 h-4 inline mr-1" />
                    {service.duration}
                  </span>
                  <span className="font-bold text-[var(--primary)]">
                    From ${service.price.from}
                  </span>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-10">
            <Link
              href="/services"
              className="inline-flex items-center gap-2 bg-[var(--primary)] text-white px-8 py-4 rounded-lg hover:bg-[var(--primary-dark)] font-semibold text-subheading transition-all shadow-lg"
            >
              View All Services
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Before/After Transformations */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <span className="inline-block px-4 py-2 bg-[var(--primary-100)] text-[var(--primary)] rounded-full text-small font-semibold mb-4">
              TRANSFORMATIONS
            </span>
            <h2 className="text-heading mb-4">See the Difference</h2>
            <p className="text-subheading text-gray-600">Real client transformations by our expert team</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {featuredTransformations.map((transformation) => (
              <div
                key={transformation.id}
                className="bg-white rounded-xl overflow-hidden border-2 border-gray-200 hover:border-[var(--primary)] hover:shadow-xl transition-all"
              >
                {/* Image placeholder */}
                <div className="aspect-[4/3] bg-gradient-to-br from-[var(--backdrop-primary)] to-[var(--backdrop-secondary)] relative">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center p-6">
                      <div className="text-display mb-2 opacity-30">✨</div>
                      <p className="text-small text-gray-600">{transformation.title}</p>
                    </div>
                  </div>
                  <div className="absolute top-3 left-3">
                    <Chip variant="primary" size="sm">{transformation.category.toUpperCase()}</Chip>
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-subheading font-bold text-gray-900 mb-2">
                    {transformation.title}
                  </h3>
                  <p className="text-small text-gray-600 mb-3 line-clamp-2">
                    {transformation.overview}
                  </p>
                  <div className="flex items-center justify-between text-small">
                    <span className="text-[var(--primary)] font-semibold">
                      {transformation.duration}
                    </span>
                    <Link 
                      href={`/case-studies/${transformation.slug}`}
                      className="text-[var(--primary)] hover:text-[var(--primary-dark)] font-semibold"
                    >
                      View Details →
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-10">
            <Link
              href="/case-studies"
              className="inline-flex items-center gap-2 text-[var(--primary)] hover:text-[var(--primary-dark)] font-semibold text-subheading"
            >
              View All Transformations <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Meet Our Team - Preview */}
      <section className="py-20 px-4 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <span className="inline-block px-4 py-2 bg-[var(--primary-100)] text-[var(--primary)] rounded-full text-small font-semibold mb-4">
              OUR EXPERTS
            </span>
            <h2 className="text-heading mb-4">Meet Our Talented Team</h2>
            <p className="text-subheading text-gray-600">Certified professionals dedicated to your beauty</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredTeam.map((member) => (
              <div
                key={member.id}
                className="bg-gradient-to-br from-[var(--backdrop-primary)] to-[var(--backdrop-secondary)] rounded-xl p-8 border-2 border-gray-200 hover:border-[var(--primary)] hover:shadow-xl transition-all text-center"
              >
                {/* Avatar placeholder */}
                <div className="w-32 h-32 mx-auto mb-4 rounded-full bg-gradient-to-br from-pink-300 to-purple-300 flex items-center justify-center text-4xl">
                  👤
                </div>
                <h3 className="text-subheading font-bold text-gray-900 mb-1">{member.name}</h3>
                <p className="text-small text-[var(--primary)] font-semibold mb-3">{member.title}</p>
                <p className="text-small text-gray-600 mb-4 line-clamp-2">{member.bio}</p>
                <div className="flex flex-wrap gap-2 justify-center mb-4">
                  {member.specialties.slice(0, 2).map((specialty, idx) => (
                    <span key={idx} className="px-2 py-1 bg-white rounded text-small text-gray-700">
                      {specialty}
                    </span>
                  ))}
                </div>
                <p className="text-small text-gray-500">{member.yearsExperience} years experience</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-10">
            <Link
              href="/team"
              className="inline-flex items-center gap-2 bg-[var(--primary)] text-white px-8 py-4 rounded-lg hover:bg-[var(--primary-dark)] font-semibold text-subheading transition-all shadow-lg"
            >
              Meet the Full Team
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <span className="inline-block px-4 py-2 bg-[var(--primary-100)] text-[var(--primary)] rounded-full text-small font-semibold mb-4">
              SHOP OUR PRODUCTS
            </span>
            <h2 className="text-heading mb-4">Premium Beauty Products</h2>
            <p className="text-subheading text-gray-600">Take the salon experience home</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {featuredProducts.map((product) => (
              <div
                key={product.id}
                className="bg-white rounded-xl overflow-hidden border-2 border-gray-200 hover:border-[var(--primary)] hover:shadow-xl transition-all"
              >
                <div className="aspect-square bg-gradient-to-br from-[var(--backdrop-primary)] to-[var(--backdrop-secondary)] relative">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-8xl opacity-30">💄</div>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-2">
                    <Chip variant="secondary" size="sm">{product.category}</Chip>
                    <div className="flex gap-1">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <Star 
                          key={i} 
                          className="w-3 h-3" 
                          style={{ 
                            fill: i < Math.floor(product.rating) ? 'var(--secondary)' : 'transparent',
                            color: 'var(--secondary)'
                          }} 
                        />
                      ))}
                      <span className="text-small text-gray-600">({product.reviewCount})</span>
                    </div>
                  </div>
                  <h3 className="text-body font-bold text-gray-900 mb-2 line-clamp-2">
                    {product.name}
                  </h3>
                  <p className="text-small text-gray-600 mb-4 line-clamp-2">
                    {product.description}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-subheading font-bold text-[var(--primary)]">
                      ${product.price}
                    </span>
                    <Link
                      href={`/products/${product.slug}`}
                      className="text-[var(--primary)] hover:text-[var(--primary-dark)] font-semibold text-small"
                    >
                      Learn More →
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-10">
            <Link
              href="/products"
              className="inline-flex items-center gap-2 text-[var(--primary)] hover:text-[var(--primary-dark)] font-semibold text-subheading"
            >
              Shop All Products <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 px-4 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <span className="inline-block px-4 py-2 bg-[var(--primary-100)] text-[var(--primary)] rounded-full text-small font-semibold mb-4">
              WHY CHOOSE US
            </span>
            <h2 className="text-heading mb-4">The Beauty Cares Difference</h2>
            <p className="text-subheading text-gray-600">What makes us New York's premier beauty destination</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: 'award',
                emoji: '🏆',
                title: 'Award-Winning Team',
                description: 'Our certified stylists and estheticians bring years of experience and ongoing education in the latest techniques and trends.',
              },
              {
                icon: 'heart',
                emoji: '💝',
                title: 'Personalized Service',
                description: 'Every client receives a customized consultation and treatment plan tailored to their unique needs and goals.',
              },
              {
                icon: 'sparkles',
                emoji: '✨',
                title: 'Premium Products',
                description: 'We use only the highest quality professional products that deliver results while maintaining hair and skin health.',
              },
            ].map((item) => (
              <div
                key={item.title}
                className="bg-gradient-to-br from-[var(--backdrop-primary)] to-[var(--backdrop-secondary)] rounded-xl p-8 border-2 border-gray-200 hover:border-[var(--primary)] hover:shadow-xl transition-all text-center"
              >
                <div className="text-display mb-4">{item.emoji}</div>
                <div className="flex justify-center mb-4">
                  <IconBadge iconName={item.icon} size={24} />
                </div>
                <h3 className="text-subheading font-bold text-gray-900 mb-3">{item.title}</h3>
                <p className="text-gray-700 leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-[var(--primary)] to-[var(--primary-dark)]">
        <div className="container mx-auto max-w-5xl text-center">
          <h2 className="text-heading mb-6 text-white">
            Ready to Transform Your Look?
          </h2>
          <p className="!text-white/95 text-subheading mb-8 leading-relaxed max-w-3xl mx-auto">
            Book your appointment today and experience the luxury and expertise that our clients rave about. Your beauty transformation starts here.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/book"
              className="bg-white text-[var(--primary)] px-10 py-5 rounded-lg hover:bg-gray-50 font-bold text-subheading transition-all shadow-2xl hover:shadow-3xl"
            >
              Book Your Appointment
            </Link>
            <a
              href={siteConfig.contact.phone.href}
              className="border-2 border-white text-white px-10 py-5 rounded-lg hover:bg-white/10 font-bold text-subheading transition-all"
            >
              Call: {siteConfig.contact.phone.display}
            </a>
          </div>
          <p className="!text-white/80 mt-8 text-small">
            📍 {siteConfig.contact.address.street}, {siteConfig.contact.address.city}, {siteConfig.contact.address.state} • ✉️ {siteConfig.contact.email.display}
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-6 text-white/90">
            {siteConfig.settings.amenities.slice(0, 4).map((amenity, i) => (
              <span key={i} className="flex items-center gap-2 text-small">
                <Sparkles className="w-4 h-4" />
                {amenity}
              </span>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}

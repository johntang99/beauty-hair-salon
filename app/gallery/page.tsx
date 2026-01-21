import type { Metadata } from 'next';
import { galleryImages, getAllCategories } from '@/lib/gallery';
import GalleryHero from '@/components/gallery/GalleryHero';
import GalleryGrid from '@/components/gallery/GalleryGrid';
import { Sparkles, MapPin, Heart, Award } from 'lucide-react';
import { siteConfig } from '@/lib/site';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Gallery | The Beauty Cares',
  description: 'Browse our gallery of stunning hair transformations, beauty work, salon interior, and more from The Beauty Cares in New York.',
};

export default function GalleryPage() {
  const categories = getAllCategories();

  return (
    <main>
      {/* Hero Section */}
      <GalleryHero />

      {/* Gallery Grid */}
      <section className="py-16 px-4 bg-gradient-to-b from-white to-gray-50">
        <div className="container mx-auto max-w-7xl">
          {galleryImages.length > 0 ? (
            <>
              <div className="text-center mb-8">
                <p className="text-small text-gray-600">
                  Showing <span className="font-semibold text-gray-900">{galleryImages.length}</span> photos of our work and beautiful salon
                </p>
              </div>
              <GalleryGrid images={galleryImages} categories={categories} />
            </>
          ) : (
            <div className="text-center py-16 bg-white border-2 border-gray-200 rounded-xl">
              <div className="text-8xl mb-6">📸</div>
              <h3 className="text-subheading font-bold text-gray-900 mb-4">Gallery Photos Coming Soon!</h3>
              <p className="text-gray-600 text-subheading max-w-2xl mx-auto">
                We're currently updating our gallery with stunning transformations, salon photos, and our team's beautiful work. Check back soon or follow us on Instagram for daily updates!
              </p>
              <div className="mt-8">
                <a
                  href="https://instagram.com/thebeautycares"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white px-6 py-3 rounded-lg hover:from-purple-600 hover:to-pink-600 font-semibold transition-all"
                >
                  📸 Follow Us on Instagram
                </a>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* What You'll See in Our Gallery */}
      <section className="py-20 px-4 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <span className="inline-block px-4 py-2 bg-[var(--primary-100)] text-[var(--primary)] rounded-full text-small font-semibold mb-4">
              OUR PORTFOLIO
            </span>
            <h2 className="text-heading font-bold text-gray-900 mb-4">A Showcase of Our Work</h2>
            <p className="text-subheading text-gray-600 max-w-3xl mx-auto">
              From stunning hair transformations to flawless makeup, our gallery showcases the artistry and expertise of our talented team
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: '💇',
                title: 'Hair Transformations',
                description: 'Before & after photos of our stunning hair color, cuts, and styling work',
                count: '50+',
              },
              {
                icon: '💄',
                title: 'Makeup & Beauty',
                description: 'Bridal makeup, special events, and everyday beauty looks',
                count: '30+',
              },
              {
                icon: '✨',
                title: 'Salon Interior',
                description: 'Tour our luxurious, modern salon space designed for your comfort',
                count: '20+',
              },
              {
                icon: '👰',
                title: 'Bridal Gallery',
                description: 'Our beautiful brides and their perfect wedding day looks',
                count: '40+',
              },
            ].map((item) => (
              <div
                key={item.title}
                className="bg-gradient-to-br from-[var(--backdrop-primary)] to-[var(--backdrop-secondary)] rounded-xl p-6 border-2 border-gray-200 hover:border-[var(--primary)] hover:shadow-lg transition-all text-center"
              >
                <div className="text-display mb-3">{item.icon}</div>
                <div className="text-subheading font-bold text-[var(--primary)] mb-2">{item.count}</div>
                <h3 className="text-body font-bold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-small text-gray-600 leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Visit Our Salon */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-heading font-bold text-gray-900 mb-4">Experience The Beauty Cares</h2>
            <p className="text-subheading text-gray-600 max-w-3xl mx-auto">
              What makes our salon a special place
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Sparkles,
                title: 'Luxury Atmosphere',
                description: 'Our modern, stylish salon is designed to provide a relaxing, upscale experience from the moment you walk in.',
              },
              {
                icon: Award,
                title: 'Expert Team',
                description: 'Our certified stylists and estheticians bring years of experience and stay current with the latest techniques and trends.',
              },
              {
                icon: Heart,
                title: 'Personalized Service',
                description: 'Every client receives individual attention and customized treatments tailored to their unique needs and goals.',
              },
            ].map((item) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.title}
                  className="bg-white rounded-xl p-8 border-2 border-gray-200 hover:border-[var(--primary)] hover:shadow-lg transition-all"
                >
                  <div className="flex justify-center mb-4">
                    <div className="w-14 h-14 rounded-xl bg-[var(--primary-50)] flex items-center justify-center">
                      <Icon className="w-7 h-7 text-[var(--primary)]" />
                    </div>
                  </div>
                  <h3 className="text-subheading font-bold text-gray-900 mb-3 text-center">{item.title}</h3>
                  <p className="text-gray-700 leading-relaxed text-center">{item.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Visit Information */}
      <section className="py-20 px-4 bg-white">
        <div className="container mx-auto max-w-5xl">
          <div className="text-center mb-12">
            <h2 className="text-heading font-bold text-gray-900 mb-4">Visit Us</h2>
            <p className="text-subheading text-gray-600">
              We'd love to welcome you to The Beauty Cares
            </p>
          </div>

          <div className="bg-gradient-to-br from-[var(--backdrop-primary)] to-[var(--backdrop-secondary)] border-2 border-gray-200 rounded-2xl p-8 md:p-12">
            <div className="grid md:grid-cols-2 gap-12 mb-8">
              {/* Location */}
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-lg bg-[var(--primary)] flex items-center justify-center">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-subheading font-bold text-gray-900">Location</h3>
                </div>
                <p className="text-gray-700 mb-2 text-subheading">{siteConfig.contact.address.street}</p>
                <p className="text-gray-700 mb-4 text-subheading">
                  {siteConfig.contact.address.city}, {siteConfig.contact.address.state} {siteConfig.contact.address.zip}
                </p>
                <div className="space-y-2">
                  <a
                    href={siteConfig.contact.phone.href}
                    className="block text-[var(--primary)] hover:text-[var(--primary-dark)] font-semibold"
                  >
                    📞 {siteConfig.contact.phone.display}
                  </a>
                  <a
                    href={`https://maps.google.com/?q=${encodeURIComponent(siteConfig.contact.address.full)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block text-[var(--primary)] hover:text-[var(--primary-dark)] font-semibold"
                  >
                    🗺️ Get Directions
                  </a>
                </div>
              </div>

              {/* Salon Hours */}
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-lg bg-[var(--primary)] flex items-center justify-center">
                    <span className="text-subheading">🕐</span>
                  </div>
                  <h3 className="text-subheading font-bold text-gray-900">Salon Hours</h3>
                </div>
                <div className="space-y-3">
                  {siteConfig.contact.hoursFormatted.map((hour, idx) => (
                    <div key={idx} className="flex justify-between items-center text-gray-700 py-2 border-b border-gray-200 last:border-0">
                      <span className="font-medium">{hour.days}</span>
                      <span className="text-[var(--primary)] font-semibold">{hour.hours}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Amenities */}
            <div className="pt-8 border-t border-gray-200">
              <h3 className="text-subheading font-bold text-gray-900 mb-4">Salon Amenities</h3>
              <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
                {siteConfig.settings.amenities.map((amenity, idx) => (
                  <div key={idx} className="flex items-center gap-3 p-3 bg-white rounded-lg border border-gray-200">
                    <div className="w-6 h-6 rounded-full bg-[var(--primary)] flex items-center justify-center shrink-0">
                      <span className="text-white text-small">✓</span>
                    </div>
                    <span className="text-small text-gray-700">{amenity}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Social Media */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="container mx-auto max-w-4xl text-center">
          <span className="inline-block px-4 py-2 bg-[var(--primary-100)] text-[var(--primary)] rounded-full text-small font-semibold mb-6">
            FOLLOW US
          </span>
          <h2 className="text-heading font-bold text-gray-900 mb-4">See More on Instagram</h2>
          <p className="text-subheading text-gray-600 mb-8 max-w-2xl mx-auto">
            Follow us for daily inspiration, before & afters, styling tips, and exclusive behind-the-scenes content
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://instagram.com/thebeautycares"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white px-8 py-4 rounded-lg hover:from-purple-600 hover:to-pink-600 font-semibold text-subheading transition-all shadow-lg"
            >
              📸 Follow on Instagram
            </a>
            <a
              href="https://facebook.com/thebeautycares"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-blue-600 text-white px-8 py-4 rounded-lg hover:bg-blue-700 font-semibold text-subheading transition-all shadow-lg"
            >
              👍 Like on Facebook
            </a>
          </div>
          <p className="text-small text-gray-600 mt-6">
            Tag us in your posts with <span className="font-semibold text-[var(--primary)]">#TheBeautyCares</span> for a chance to be featured!
          </p>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-gradient-to-br from-[var(--primary)] to-[var(--primary-dark)]">
        <div className="container mx-auto max-w-4xl text-center text-white">
          <h2 className="text-heading mb-4">
            Ready to Create Your Own Transformation?
          </h2>
          <p className="text-subheading mb-10 leading-relaxed max-w-3xl mx-auto text-white/95">
            Book your appointment and let our expert team help you achieve the beautiful look you've been dreaming of. Your transformation story starts here.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/book"
              className="bg-white text-[var(--primary)] px-8 py-4 rounded-lg hover:bg-gray-50 font-semibold text-subheading transition-all shadow-lg"
            >
              Book Your Appointment
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

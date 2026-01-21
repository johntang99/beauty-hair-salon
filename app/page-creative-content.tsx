'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Star, ArrowRight, Sparkles, Scissors, Palette } from 'lucide-react';
import { siteConfig } from '@/lib/site';
import { getFeaturedServices } from '@/lib/services';
import { testimonials } from '@/lib/testimonials';
import { getFeaturedTeamMembers } from '@/lib/team';
import { getFeaturedProducts } from '@/lib/products';
import { getFeaturedTransformations } from '@/lib/case-studies';
import Icon from '@/components/ui/Icon';
import Chip from '@/components/ui/Chip';

export default function HomeCreative() {
  const featuredServices = getFeaturedServices();
  const featuredTestimonials = testimonials.slice(0, 3);
  const featuredTeam = getFeaturedTeamMembers();
  const featuredProducts = getFeaturedProducts().slice(0, 3);
  const featuredTransformations = getFeaturedTransformations().slice(0, 3);

  // Unsplash photos for overlapping circles - Hair salon themed
  const heroImages = [
    'https://images.unsplash.com/photo-1560066984-138dadb4c035?w=600&q=80', // Salon interior
    'https://images.unsplash.com/photo-1522337660859-02fbefca4702?w=600&q=80', // Hair styling
    'https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?w=600&q=80', // Makeup application
    'https://images.unsplash.com/photo-1562322140-8baeececf3df?w=600&q=80', // Hair washing
    'https://images.unsplash.com/photo-1519699047748-de8e457a634e?w=600&q=80', // Hair color/treatment
  ];

  // Default positions
  const defaultHeroPositions = [
    { id: 'hero-1', top: '50%', left: '50%', rotation: -5 },
    { id: 'hero-2', top: '8%', left: '8%', rotation: 8 },
    { id: 'hero-3', top: '20%', left: '70%', rotation: -12 },
    { id: 'hero-4', top: '60%', left: '15%', rotation: 15 },
    { id: 'hero-5', top: '65%', left: '75%', rotation: -8 },
  ];

  const defaultTeamPositions = [
    { top: '10%', left: '10%', rotation: -8 },
    { top: '15%', left: '45%', rotation: 5 },
    { top: '10%', left: '75%', rotation: -12 },
    { top: '55%', left: '20%', rotation: 10 },
    { top: '50%', left: '60%', rotation: -6 },
  ];

  // State for positions (will be updated from localStorage)
  const [heroPositions, setHeroPositions] = useState(defaultHeroPositions);
  const [teamPositions, setTeamPositions] = useState(defaultTeamPositions);

  // Load saved positions from localStorage
  useEffect(() => {
    const savedPositions = localStorage.getItem('beauty-cares-layout');
    if (savedPositions) {
      try {
        const positions = JSON.parse(savedPositions);
        if (positions.hero) {
          setHeroPositions(positions.hero);
        }
        if (positions.team) {
          setTeamPositions(positions.team.map((p: any, idx: number) => ({
            top: p.top || defaultTeamPositions[idx].top,
            left: p.left || defaultTeamPositions[idx].left,
            rotation: p.rotation !== undefined ? p.rotation : defaultTeamPositions[idx].rotation,
          })));
        }
      } catch (e) {
        console.error('Failed to load saved positions', e);
      }
    }
  }, []);

  return (
    <>
      {/* Creative Hero with Overlapping Circles - Moonstone Style */}
      <section className="relative min-h-[90vh] px-4 py-20 overflow-hidden bg-gradient-to-br from-gray-900 via-purple-900 to-pink-900">
        {/* Decorative floating shapes */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-10 w-96 h-96 bg-pink-500/20 rounded-full blur-3xl animate-blob"></div>
          <div className="absolute top-40 right-20 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-blob animation-delay-2000"></div>
          <div className="absolute bottom-20 left-1/3 w-96 h-96 bg-pink-400/20 rounded-full blur-3xl animate-blob animation-delay-4000"></div>
        </div>

        <div className="container mx-auto max-w-7xl relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left - Text Content */}
            <div className="text-white text-center lg:text-left">
              <div className="inline-block mb-6">
                <span className="bg-white/20 backdrop-blur text-white px-4 py-2 rounded-full text-small font-semibold border border-white/30">
                  ✨ Where Beauty Meets Art
                </span>
              </div>
              <h1 className="text-display md:text-[4rem] lg:text-[5rem] leading-tight mb-6">
                {siteConfig.brand.name}
              </h1>
              <p className="text-subheading md:text-heading text-pink-100 mb-8 leading-relaxed">
                Luxury beauty and hair services in the heart of New York
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-12">
                <Link
                  href="/book"
                  className="bg-white text-[var(--primary)] px-10 py-5 rounded-full font-bold text-subheading transition-all hover:shadow-2xl hover:scale-105"
                >
                  Book Your Appointment
                </Link>
                <a
                  href={siteConfig.contact.phone.href}
                  className="border-2 border-white text-white px-10 py-5 rounded-full font-bold text-subheading transition-all hover:bg-white/10"
                >
                  Call Now
                </a>
              </div>
              <div className="flex flex-wrap justify-center lg:justify-start gap-6 text-small text-pink-100">
                {siteConfig.settings.specialties.slice(0, 3).map((specialty, i) => (
                  <span key={i} className="flex items-center gap-2">
                    <Sparkles className="w-4 h-4" />
                    {specialty}
                  </span>
                ))}
              </div>
            </div>

            {/* Right - Overlapping Circles with Real Unsplash Photos (Using Saved Positions) */}
            <div className="relative h-[500px] lg:h-[600px]">
              {heroImages.map((src, idx) => {
                const pos = heroPositions[idx];
                const sizes = ['w-64 h-64', 'w-48 h-48', 'w-56 h-56', 'w-52 h-52', 'w-40 h-40'];
                const zIndexes = [20, 10, 15, 15, 10];
                const alts = ['Luxury salon interior', 'Hair styling', 'Makeup application', 'Hair washing', 'Hair coloring'];
                
                return (
                  <div 
                    key={idx}
                    className={`absolute ${sizes[idx]} rounded-full overflow-hidden border-4 border-white shadow-2xl hover:scale-110 transition-transform`}
                    style={{ 
                      top: pos?.top || '50%',
                      left: pos?.left || '50%',
                      transform: `translate(-50%, -50%) rotate(${pos?.rotation || 0}deg)`,
                      zIndex: zIndexes[idx],
                    }}
                  >
                    <div className="relative w-full h-full" style={{ transform: 'rotate(0deg)' }}>
                      <Image
                        src={src}
                        alt={alts[idx]}
                        fill
                        className="object-cover"
                        sizes="256px"
                      />
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Curved bottom divider */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 120" className="w-full h-20" preserveAspectRatio="none">
            <path
              d="M0,64 C320,0 640,128 960,64 C1280,0 1440,64 1440,64 L1440,120 L0,120 Z"
              fill="white"
            />
          </svg>
        </div>
      </section>

      {/* Floating Stats Bar - Overlaps hero */}
      <section className="relative -mt-16 px-4 z-30">
        <div className="container mx-auto max-w-5xl">
          <div className="bg-white rounded-3xl shadow-2xl border-2 border-gray-100 p-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {[
                { icon: 'award', value: '15+', label: 'Years Experience' },
                { icon: 'users', value: '5000+', label: 'Happy Clients' },
                { icon: 'star', value: '4.9', label: 'Average Rating' },
                { icon: 'sparkles', value: '15+', label: 'Expert Stylists' },
              ].map((stat, idx) => (
                <div key={idx} className="text-center">
                  <div className="flex justify-center mb-3">
                    <div 
                      className="w-12 h-12 rounded-xl flex items-center justify-center"
                      style={{ background: 'linear-gradient(135deg, var(--primary), var(--secondary))' }}
                    >
                      <Icon name={stat.icon} size={24} className="text-white" />
                    </div>
                  </div>
                  <div className="text-heading font-bold text-[var(--primary)] mb-1">{stat.value}</div>
                  <div className="text-small text-gray-600 font-medium">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials - Staggered Layout */}
      <section className="py-24 px-4 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-2 bg-[var(--primary-100)] text-[var(--primary)] rounded-full text-small font-semibold mb-4">
              ⭐ CLIENT LOVE
            </span>
            <h2 className="text-heading mb-4">What Our Clients Say</h2>
            <p className="text-subheading text-gray-600">Real transformations, real happiness</p>
          </div>

          {/* Staggered testimonial cards */}
          <div className="grid md:grid-cols-3 gap-8">
            {featuredTestimonials.map((testimonial, idx) => (
              <div
                key={testimonial.id}
                className={`${idx === 1 ? 'md:mt-12' : ''} ${idx === 2 ? 'md:mt-24' : ''}`}
              >
                <div className="bg-gradient-to-br from-[var(--backdrop-primary)] to-[var(--backdrop-secondary)] rounded-3xl p-8 border-2 border-[var(--primary-100)] hover:border-[var(--primary)] hover:shadow-2xl transition-all transform hover:-translate-y-2">
                  <div className="flex gap-1 mb-4">
                    {Array.from({ length: testimonial.rating }).map((_, i) => (
                      <Star key={i} className="w-5 h-5" style={{ fill: 'var(--secondary)', color: 'var(--secondary)' }} />
                    ))}
                  </div>
                  <p className="text-gray-700 italic mb-6 leading-relaxed">
                    &ldquo;{testimonial.text}&rdquo;
                  </p>
                  <div className="border-t-2 border-white pt-4">
                    <p className="font-bold text-gray-900">{testimonial.name}</p>
                    <p className="text-small text-[var(--primary)] font-semibold">{testimonial.service}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Asymmetric Services Grid - Creative Layout with Photos */}
      <section className="py-24 px-4 bg-gray-50 relative">
        {/* Decorative shapes */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-pink-200 to-purple-200 rounded-full opacity-20 blur-3xl"></div>
        
        <div className="container mx-auto max-w-7xl relative">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-2 bg-[var(--primary-100)] text-[var(--primary)] rounded-full text-small font-semibold mb-4">
              ✨ OUR SERVICES
            </span>
            <h2 className="text-heading mb-4">Luxury Services</h2>
            <p className="text-subheading text-gray-600">Expert care for your complete transformation</p>
          </div>

          {/* Asymmetric grid - large featured + smaller cards */}
          <div className="grid grid-cols-12 gap-6">
            {/* Large featured service - spans 7 columns, 2 rows */}
            <div className="col-span-12 lg:col-span-7 lg:row-span-2">
              <div 
                className="h-full min-h-[400px] rounded-3xl overflow-hidden relative group"
              >
                <Image
                  src="https://images.unsplash.com/photo-1560066984-138dadb4c035?w=1200&q=80"
                  alt="Hair coloring service"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 60vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
                <div className="absolute inset-0 p-12 flex flex-col justify-end text-white">
                  <div className="w-16 h-16 rounded-2xl bg-white/20 backdrop-blur flex items-center justify-center mb-6">
                    <Scissors className="w-8 h-8" />
                  </div>
                  <h3 className="text-subheading md:text-heading font-bold mb-3">
                    Hair Coloring & Balayage
                  </h3>
                  <p className="text-body opacity-95 mb-6 max-w-lg">
                    Stunning dimensional color through expert hand-painting techniques. From natural sun-kissed highlights to dramatic transformations.
                  </p>
                  <div className="flex items-center gap-6 text-small mb-6">
                    <span>From $150</span>
                    <span>3-4 hours</span>
                  </div>
                  <Link
                    href="/services#highlights-balayage"
                    className="inline-flex items-center gap-2 bg-white text-[var(--primary)] px-6 py-3 rounded-full font-bold hover:shadow-xl transition-all w-fit"
                  >
                    Learn More <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </div>

            {/* Two smaller cards on the right - top */}
            <div className="col-span-12 lg:col-span-5">
              <div className="bg-white rounded-3xl overflow-hidden border-2 border-gray-200 hover:border-[var(--primary)] hover:shadow-xl transition-all h-full">
                <div className="aspect-video relative">
                  <Image
                    src="https://images.unsplash.com/photo-1516975080664-ed2fc6a32937?w=800&q=80"
                    alt="Facial treatment"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 40vw"
                  />
                </div>
                <div className="p-6">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-pink-100 to-purple-100 flex items-center justify-center mb-4">
                    <Sparkles className="w-7 h-7 text-[var(--primary)]" />
                  </div>
                  <h3 className="text-subheading font-bold text-gray-900 mb-3">Facials & Skincare</h3>
                  <p className="text-gray-700 mb-4">Customized treatments for radiant, healthy skin</p>
                  <div className="flex items-center justify-between text-small">
                    <span className="text-gray-600">From $85</span>
                    <Link href="/services#facials-skincare" className="text-[var(--primary)] font-semibold hover:text-[var(--primary-dark)]">
                      View →
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom right */}
            <div className="col-span-12 lg:col-span-5">
              <div className="rounded-3xl overflow-hidden border-2 border-[var(--secondary-100)] hover:border-[var(--secondary)] hover:shadow-xl transition-all h-full">
                <div className="aspect-video relative">
                  <Image
                    src="https://images.unsplash.com/photo-1519415510236-718bdfcd89c8?w=800&q=80"
                    alt="Bridal makeup"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 40vw"
                  />
                </div>
                <div className="p-6 bg-gradient-to-br from-[var(--secondary-50)] to-[var(--primary-50)]">
                  <div className="w-14 h-14 rounded-2xl bg-white flex items-center justify-center mb-4">
                    <Palette className="w-7 h-7 text-[var(--secondary)]" />
                  </div>
                  <h3 className="text-subheading font-bold text-gray-900 mb-3">Bridal Packages</h3>
                  <p className="text-gray-700 mb-4">Your perfect wedding day, beautifully crafted</p>
                  <div className="flex items-center justify-between text-small">
                    <span className="text-gray-600">From $599</span>
                    <Link href="/services#bridal-packages" className="text-[var(--secondary)] font-semibold hover:text-[var(--secondary-dark)]">
                      View →
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom row - irregular widths */}
            <div className="col-span-6 lg:col-span-5">
              <div className="bg-white rounded-3xl overflow-hidden border-2 border-gray-200 hover:border-[var(--primary)] hover:shadow-xl transition-all">
                <div className="aspect-[4/3] relative">
                  <Image
                    src="https://images.unsplash.com/photo-1519699047748-de8e457a634e?w=600&q=80"
                    alt="Lash extensions"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 50vw, 30vw"
                  />
                </div>
                <div className="p-4">
                  <h4 className="text-body font-bold text-gray-900 mb-2">Lash Extensions</h4>
                  <p className="text-small text-gray-600 mb-3">Gorgeous, full lashes</p>
                  <span className="text-[var(--primary)] font-bold">From $150</span>
                </div>
              </div>
            </div>
            <div className="col-span-6 lg:col-span-7">
              <div className="bg-white rounded-3xl overflow-hidden border-2 border-gray-200 hover:border-[var(--primary)] hover:shadow-xl transition-all">
                <div className="aspect-[16/9] relative">
                  <Image
                    src="https://images.unsplash.com/photo-1522337660859-02fbefca4702?w=800&q=80"
                    alt="Hair treatment"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 50vw, 40vw"
                  />
                </div>
                <div className="p-4">
                  <h4 className="text-body font-bold text-gray-900 mb-2">Hair Treatments & Keratin</h4>
                  <p className="text-small text-gray-600 mb-3">Restore, strengthen, and shine</p>
                  <span className="text-[var(--primary)] font-bold">From $75</span>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center mt-12">
            <Link
              href="/services"
              className="inline-flex items-center gap-2 bg-[var(--primary)] text-white px-10 py-4 rounded-full hover:bg-[var(--primary-dark)] font-bold text-subheading transition-all shadow-xl hover:shadow-2xl"
            >
              Explore All Services
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Before/After Transformations - Large Visual with Photos */}
      <section className="py-24 px-4 bg-gradient-to-br from-white via-pink-50 to-purple-50">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-2 bg-gradient-to-r from-pink-500 to-purple-500 text-white rounded-full text-small font-semibold mb-4">
              ✨ TRANSFORMATIONS
            </span>
            <h2 className="text-heading mb-4">Stunning Results</h2>
            <p className="text-subheading text-gray-600">See the magic our team creates</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                image: 'https://images.unsplash.com/photo-1562322140-8baeececf3df?w=600&q=80',
                title: 'Hair Color Transformation',
                category: 'HAIR',
              },
              {
                image: 'https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?w=600&q=80',
                title: 'Bridal Makeup',
                category: 'BRIDAL',
              },
              {
                image: 'https://images.unsplash.com/photo-1515377905703-c4788e51af15?w=600&q=80',
                title: 'Hair Extensions',
                category: 'HAIR',
              },
            ].map((item, idx) => (
              <div
                key={idx}
                className={`${idx === 1 ? 'md:-mt-8' : ''} ${idx === 2 ? 'md:mt-8' : ''}`}
              >
                <div className="bg-white rounded-3xl overflow-hidden border-2 border-gray-200 hover:border-[var(--primary)] hover:shadow-2xl transition-all group">
                  <div className="aspect-[3/4] relative">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                      sizes="(max-width: 768px) 100vw, 33vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                    <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                      <Chip variant="primary" size="sm" className="mb-3">
                        {item.category}
                      </Chip>
                      <h3 className="text-body font-bold">{item.title}</h3>
                    </div>
                  </div>
                  <div className="p-6">
                    <p className="text-small text-gray-600 line-clamp-2 mb-3">
                      See the stunning transformation created by our expert stylists
                    </p>
                    <Link 
                      href="/case-studies"
                      className="text-[var(--primary)] hover:text-[var(--primary-dark)] font-semibold text-small inline-flex items-center gap-1"
                    >
                      View Story <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Meet the Team - Floating Circles with Photos */}
      <section className="py-24 px-4 bg-white relative overflow-hidden">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-2 bg-[var(--primary-100)] text-[var(--primary)] rounded-full text-small font-semibold mb-4">
              👥 OUR EXPERTS
            </span>
            <h2 className="text-heading mb-4">Meet Our Artists</h2>
            <p className="text-subheading text-gray-600">Passionate professionals dedicated to your beauty</p>
          </div>

          {/* Irregular positioned team circles with real photos (Using Saved Positions) */}
          <div className="relative h-[600px] mb-12">
            {featuredTeam.map((member, idx) => {
              const sizes = ['w-48 h-48', 'w-56 h-56', 'w-44 h-44', 'w-52 h-52', 'w-48 h-48'];
              const pos = teamPositions[idx];

              const teamPhotos = [
                'https://images.unsplash.com/photo-1580618672591-eb180b1a973f?w=400&q=80',
                'https://images.unsplash.com/photo-1594744803329-e58b31de8bf5?w=400&q=80',
                'https://images.unsplash.com/photo-1562322140-8baeececf3df?w=400&q=80',
                'https://images.unsplash.com/photo-1595475884562-073c520e75e1?w=400&q=80',
                'https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?w=400&q=80',
              ];

              return (
                <div
                  key={member.id}
                  className="absolute group cursor-pointer"
                  style={{
                    top: pos?.top || '10%',
                    left: pos?.left || '10%',
                    transform: `rotate(${pos?.rotation || 0}deg)`,
                  }}
                >
                  <div className={`${sizes[idx]} rounded-full overflow-hidden border-4 border-white shadow-2xl hover:scale-110 transition-transform relative`}>
                    <Image
                      src={teamPhotos[idx]}
                      alt={member.name}
                      fill
                      className="object-cover"
                      sizes="224px"
                    />
                  </div>
                  <div 
                    className="absolute top-full left-1/2 -translate-x-1/2 mt-4 bg-white/95 backdrop-blur rounded-2xl p-4 shadow-xl opacity-0 group-hover:opacity-100 transition-all whitespace-nowrap"
                    style={{ transform: 'translateX(-50%) rotate(0deg)' }}
                  >
                    <h4 className="font-bold text-gray-900">{member.name}</h4>
                    <p className="text-small text-[var(--primary)]">{member.title}</p>
                    <p className="text-small text-gray-600 mt-1">{member.yearsExperience} years</p>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="text-center">
            <Link
              href="/team"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-[var(--primary)] to-[var(--secondary)] text-white px-10 py-4 rounded-full font-bold text-subheading transition-all shadow-xl hover:shadow-2xl hover:scale-105"
            >
              Meet the Full Team
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Products - Diagonal Cards with Photos */}
      <section className="py-24 px-4 bg-gradient-to-br from-gray-50 to-white relative">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-2 bg-[var(--secondary-100)] text-[var(--secondary)] rounded-full text-small font-semibold mb-4">
              💄 SHOP
            </span>
            <h2 className="text-heading mb-4">Premium Products</h2>
            <p className="text-subheading text-gray-600">Take the salon experience home</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                image: 'https://images.unsplash.com/photo-1556228578-0d85b1a4d571?w=600&q=80',
                name: 'Luxury Face Serum',
                category: 'skincare',
                price: 89,
              },
              {
                image: 'https://images.unsplash.com/photo-1571875257727-256c39da42af?w=600&q=80',
                name: 'Hair Care Set',
                category: 'haircare',
                price: 45,
              },
              {
                image: 'https://images.unsplash.com/photo-1512496015851-a90fb38ba796?w=600&q=80',
                name: 'Makeup Brush Set',
                category: 'makeup',
                price: 75,
              },
            ].map((product, idx) => (
              <div
                key={idx}
                className="transform hover:scale-105 transition-all"
                style={{ 
                  transform: `rotate(${idx === 0 ? '-2deg' : idx === 1 ? '2deg' : '-1deg'})`,
                }}
              >
                <div 
                  className="bg-white rounded-3xl overflow-hidden border-2 border-gray-200 hover:border-[var(--primary)] hover:shadow-2xl transition-all"
                  style={{ transform: 'rotate(0deg)' }}
                >
                  <div className="aspect-square relative">
                    <Image
                      src={product.image}
                      alt={product.name}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 33vw"
                    />
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-2 mb-2">
                      <Chip variant="secondary" size="sm">{product.category}</Chip>
                      <div className="flex gap-0.5">
                        {Array.from({ length: 5 }).map((_, i) => (
                          <Star 
                            key={i} 
                            className="w-3 h-3" 
                            style={{ 
                              fill: 'var(--secondary)',
                              color: 'var(--secondary)'
                            }} 
                          />
                        ))}
                      </div>
                    </div>
                    <h3 className="text-body font-bold text-gray-900 mb-2">
                      {product.name}
                    </h3>
                    <p className="text-small text-gray-600 mb-4">
                      Professional salon quality products
                    </p>
                    <div className="flex items-center justify-between">
                      <span className="text-subheading font-bold text-[var(--primary)]">
                        ${product.price}
                      </span>
                      <Link
                        href="/products"
                        className="text-[var(--primary)] hover:text-[var(--primary-dark)] font-semibold text-small"
                      >
                        Shop →
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              href="/products"
              className="inline-flex items-center gap-2 text-[var(--primary)] hover:text-[var(--primary-dark)] font-semibold text-subheading"
            >
              Shop All Products <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us - Creative Layout with Shapes */}
      <section className="py-24 px-4 bg-gray-50 relative overflow-hidden">
        {/* Decorative circles */}
        <div className="absolute top-20 left-0 w-72 h-72 bg-[var(--primary)] opacity-10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-0 w-96 h-96 bg-[var(--secondary)] opacity-10 rounded-full blur-3xl"></div>
        
        <div className="container mx-auto max-w-6xl relative">
          <div className="text-center mb-16">
            <h2 className="text-heading mb-4">Why Choose Us</h2>
            <p className="text-subheading text-gray-600">The Beauty Cares difference</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: '🏆',
                title: 'Award-Winning Team',
                description: 'Certified experts with years of experience and ongoing education',
              },
              {
                icon: '💝',
                title: 'Personalized Service',
                description: 'Custom consultations and treatments tailored to your unique needs',
              },
              {
                icon: '✨',
                title: 'Premium Products',
                description: 'Only the highest quality professional products for your hair and skin',
              },
            ].map((item, idx) => (
              <div
                key={idx}
                className="relative"
              >
                <div className="bg-white rounded-3xl p-10 border-2 border-gray-200 hover:border-[var(--primary)] hover:shadow-2xl transition-all text-center transform hover:-translate-y-2">
                  <div className="text-display mb-6">{item.icon}</div>
                  <h3 className="text-subheading font-bold text-gray-900 mb-4">{item.title}</h3>
                  <p className="text-gray-700 leading-relaxed">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA - Creative with Gradient */}
      <section className="relative py-32 px-4 overflow-hidden">
        <div 
          className="absolute inset-0"
          style={{ background: 'linear-gradient(135deg, var(--primary), var(--secondary))' }}
        >
          {/* Animated shapes */}
          <div className="absolute top-20 left-20 w-64 h-64 bg-white/10 rounded-full blur-3xl animate-blob"></div>
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-white/10 rounded-full blur-3xl animate-blob animation-delay-2000"></div>
        </div>

        <div className="container mx-auto max-w-5xl text-center relative z-10">
          <h2 className="text-display text-white mb-8">
            Your Transformation Awaits
          </h2>
          <p className="text-subheading text-white/95 mb-12 leading-relaxed max-w-3xl mx-auto">
            Experience the luxury service our clients rave about. Book your appointment today and discover why we're New York's premier beauty destination.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link
              href="/book"
              className="bg-white text-[var(--primary)] px-12 py-6 rounded-full hover:bg-gray-50 font-bold text-subheading transition-all shadow-2xl hover:shadow-3xl hover:scale-105"
            >
              Book Your Appointment
            </Link>
            <a
              href={siteConfig.contact.phone.href}
              className="border-3 border-white text-white px-12 py-6 rounded-full hover:bg-white/10 font-bold text-subheading transition-all backdrop-blur"
            >
              Call: {siteConfig.contact.phone.display}
            </a>
          </div>
          <div className="mt-12 flex flex-wrap justify-center gap-8 text-white/90">
            {siteConfig.settings.amenities.slice(0, 4).map((amenity, i) => (
              <span key={i} className="flex items-center gap-2 text-small">
                <Sparkles className="w-4 h-4" />
                {amenity}
              </span>
            ))}
          </div>
        </div>

        {/* Curved top divider */}
        <div className="absolute top-0 left-0 right-0">
          <svg viewBox="0 0 1440 120" className="w-full h-20" preserveAspectRatio="none">
            <path
              d="M0,64 C320,128 640,0 960,64 C1280,128 1440,64 1440,64 L1440,0 L0,0 Z"
              fill="white"
            />
          </svg>
        </div>
      </section>

      {/* Add animations */}
      <style jsx>{`
        @keyframes blob {
          0%, 100% { transform: translate(0, 0) scale(1); }
          33% { transform: translate(30px, -50px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
        }
        .animate-blob {
          animation: blob 7s infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
        }
      `}</style>
    </>
  );
}

'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Star, ArrowRight, Sparkles, Scissors, Palette, Edit3, Save, Copy, Eye } from 'lucide-react';
import { siteConfig } from '@/lib/site';
import { getFeaturedServices } from '@/lib/services';
import { testimonials } from '@/lib/testimonials';
import { getFeaturedTeamMembers } from '@/lib/team';
import { getFeaturedProducts } from '@/lib/products';
import { getFeaturedTransformations } from '@/lib/case-studies';
import Icon from '@/components/ui/Icon';
import Chip from '@/components/ui/Chip';
import DraggableCircle from '@/components/creative/DraggableCircle';

export default function HomeCreativeEditable() {
  const [isEditMode, setIsEditMode] = useState(false);
  const featuredServices = getFeaturedServices();
  const featuredTestimonials = testimonials.slice(0, 3);
  const featuredTeam = getFeaturedTeamMembers();
  const featuredProducts = getFeaturedProducts().slice(0, 3);
  const featuredTransformations = getFeaturedTransformations().slice(0, 3);

  // Unsplash photos for overlapping circles
  const [heroCircles, setHeroCircles] = useState([
    { id: 'hero-1', src: 'https://images.unsplash.com/photo-1560066984-138dadb4c035?w=600&q=80', alt: 'Salon interior', top: '50%', left: '50%', rotation: -5, size: 'w-64 h-64', zIndex: 20 },
    { id: 'hero-2', src: 'https://images.unsplash.com/photo-1522337660859-02fbefca4702?w=600&q=80', alt: 'Hair styling', top: '8%', left: '8%', rotation: 8, size: 'w-48 h-48', zIndex: 10 },
    { id: 'hero-3', src: 'https://images.unsplash.com/photo-1595475884562-073c520e75e1?w=600&q=80', alt: 'Makeup', top: '20%', left: '70%', rotation: -12, size: 'w-56 h-56', zIndex: 15 },
    { id: 'hero-4', src: 'https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?w=600&q=80', alt: 'Hair washing', top: '60%', left: '15%', rotation: 15, size: 'w-52 h-52', zIndex: 15 },
    { id: 'hero-5', src: 'https://images.unsplash.com/photo-1562322140-8baeececf3df?w=600&q=80', alt: 'Hair color', top: '65%', left: '75%', rotation: -8, size: 'w-40 h-40', zIndex: 10 },
  ]);

  const teamPhotos = [
    'https://images.unsplash.com/photo-1580618672591-eb180b1a973f?w=400&q=80',
    'https://images.unsplash.com/photo-1594744803329-e58b31de8bf5?w=400&q=80',
    'https://images.unsplash.com/photo-1562322140-8baeececf3df?w=400&q=80',
    'https://images.unsplash.com/photo-1595475884562-073c520e75e1?w=400&q=80',
    'https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?w=400&q=80',
  ];

  const [teamCircles, setTeamCircles] = useState(
    featuredTeam.map((member, idx) => {
      const positions = [
        { top: '10%', left: '10%', size: 'w-48 h-48', rotation: -8 },
        { top: '15%', left: '45%', size: 'w-56 h-56', rotation: 5 },
        { top: '10%', left: '75%', size: 'w-44 h-44', rotation: -12 },
        { top: '55%', left: '20%', size: 'w-52 h-52', rotation: 10 },
        { top: '50%', left: '60%', size: 'w-48 h-48', rotation: -6 },
      ];
      const pos = positions[idx] || positions[0];
      return {
        id: `team-${member.id}`,
        src: teamPhotos[idx],
        alt: member.name,
        name: member.name,
        title: member.title,
        years: member.yearsExperience,
        ...pos,
      };
    })
  );

  // Load saved positions from localStorage on mount
  useEffect(() => {
    const savedPositions = localStorage.getItem('beauty-cares-layout');
    if (savedPositions) {
      try {
        const positions = JSON.parse(savedPositions);
        if (positions.hero) {
          setHeroCircles(prev => 
            prev.map(circle => {
              const saved = positions.hero.find((p: any) => p.id === circle.id);
              return saved ? { ...circle, ...saved } : circle;
            })
          );
        }
        if (positions.team) {
          setTeamCircles(prev => 
            prev.map(circle => {
              const saved = positions.team.find((p: any) => p.id === circle.id);
              return saved ? { ...circle, ...saved } : circle;
            })
          );
        }
      } catch (e) {
        console.error('Failed to load saved positions', e);
      }
    }
  }, []);

  // Auto-save to localStorage whenever positions change
  useEffect(() => {
    const positions = {
      hero: heroCircles.map(c => ({ id: c.id, top: c.top, left: c.left, rotation: c.rotation })),
      team: teamCircles.map(c => ({ id: c.id, top: c.top, left: c.left, rotation: c.rotation })),
    };
    localStorage.setItem('beauty-cares-layout', JSON.stringify(positions));
  }, [heroCircles, teamCircles]);

  const handleHeroPositionChange = (id: string, top: string, left: string, rotation: number) => {
    setHeroCircles(prev => 
      prev.map(circle => 
        circle.id === id ? { ...circle, top, left, rotation } : circle
      )
    );
  };

  const handleTeamPositionChange = (id: string, top: string, left: string, rotation: number) => {
    setTeamCircles(prev => 
      prev.map(circle => 
        circle.id === id ? { ...circle, top, left, rotation } : circle
      )
    );
  };

  const exportPositions = () => {
    const positions = {
      hero: heroCircles.map(c => ({ id: c.id, top: c.top, left: c.left, rotation: c.rotation })),
      team: teamCircles.map(c => ({ id: c.id, top: c.top, left: c.left, rotation: c.rotation })),
    };
    
    const code = JSON.stringify(positions, null, 2);
    navigator.clipboard.writeText(code);
    alert('✅ Positions copied to clipboard AND auto-saved!\n\nYour layout is already saved and will persist when you refresh.\n\nThe clipboard has the JSON if you want to use it in code.');
  };

  const resetToDefault = () => {
    if (confirm('Reset to default positions? This will clear your custom layout.')) {
      localStorage.removeItem('beauty-cares-layout');
      window.location.reload();
    }
  };

  return (
    <>
      {/* Edit Mode Toggle - Top Bar */}
      {isEditMode && (
        <div className="fixed top-20 left-0 right-0 z-50 bg-gray-900 text-white py-4 px-4 shadow-2xl border-b-4 border-pink-500">
          <div className="container mx-auto max-w-6xl flex items-center justify-between">
            <div className="flex items-center gap-4">
              <Edit3 className="w-5 h-5 text-pink-400" />
              <div>
                <p className="font-bold">Edit Mode Active</p>
                <p className="text-small text-gray-300">Drag circles to reposition • Click rotate buttons</p>
              </div>
            </div>
            <div className="flex gap-3">
              <button
                onClick={resetToDefault}
                className="flex items-center gap-2 bg-gray-700 px-4 py-2 rounded-lg hover:bg-gray-800 font-semibold text-small transition-all"
              >
                Reset
              </button>
              <button
                onClick={exportPositions}
                className="flex items-center gap-2 bg-purple-600 px-4 py-2 rounded-lg hover:bg-purple-700 font-semibold text-small transition-all"
              >
                <Copy className="w-4 h-4" />
                Copy Positions
              </button>
              <button
                onClick={() => setIsEditMode(false)}
                className="flex items-center gap-2 bg-pink-600 px-4 py-2 rounded-lg hover:bg-pink-700 font-semibold text-small transition-all"
              >
                <Eye className="w-4 h-4" />
                Preview Mode
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Edit Mode Toggle Button (when not in edit mode) */}
      {!isEditMode && (
        <button
          onClick={() => setIsEditMode(true)}
          className="fixed top-24 right-8 z-50 flex items-center gap-2 bg-gray-900 text-white px-4 py-3 rounded-xl shadow-2xl hover:bg-gray-800 transition-all"
        >
          <Edit3 className="w-4 h-4" />
          <span className="text-small font-semibold">Edit Layout</span>
        </button>
      )}

      {/* Creative Hero with Draggable Overlapping Circles */}
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

            {/* Right - Draggable Overlapping Circles */}
            <div className="relative h-[500px] lg:h-[600px] draggable-container">
              {isEditMode && (
                <div className="absolute -top-8 left-0 bg-pink-600 text-white px-4 py-2 rounded-lg text-small font-semibold">
                  Hero Circles - Drag to reposition
                </div>
              )}
              
              {heroCircles.map((circle) => (
                <DraggableCircle
                  key={circle.id}
                  id={circle.id}
                  src={circle.src}
                  alt={circle.alt}
                  initialTop={circle.top}
                  initialLeft={circle.left}
                  initialRotation={circle.rotation}
                  size={circle.size}
                  zIndex={circle.zIndex}
                  isEditMode={isEditMode}
                  onPositionChange={handleHeroPositionChange}
                />
              ))}
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

      {/* Asymmetric Services Grid with Photos - Continued... */}
      <section className="py-24 px-4 bg-gray-50 relative">
        <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-pink-200 to-purple-200 rounded-full opacity-20 blur-3xl"></div>
        
        <div className="container mx-auto max-w-7xl relative">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-2 bg-[var(--primary-100)] text-[var(--primary)] rounded-full text-small font-semibold mb-4">
              ✨ OUR SERVICES
            </span>
            <h2 className="text-heading mb-4">Luxury Services</h2>
            <p className="text-subheading text-gray-600">Expert care for your complete transformation</p>
          </div>

          <div className="grid grid-cols-12 gap-6">
            <div className="col-span-12 lg:col-span-7 lg:row-span-2">
              <div className="h-full min-h-[400px] rounded-3xl overflow-hidden relative group">
                <Image
                  src="https://images.unsplash.com/photo-1560066984-138dadb4c035?w=1200&q=80"
                  alt="Hair coloring service"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 60vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
                <div className="absolute inset-0 p-12 flex flex-col justify-end text-white">
                  <h3 className="text-subheading md:text-heading font-bold mb-3">
                    Hair Coloring & Balayage
                  </h3>
                  <p className="text-body opacity-95 mb-6 max-w-lg">
                    Stunning dimensional color through expert hand-painting techniques.
                  </p>
                  <Link
                    href="/services#highlights-balayage"
                    className="inline-flex items-center gap-2 bg-white text-[var(--primary)] px-6 py-3 rounded-full font-bold hover:shadow-xl transition-all w-fit"
                  >
                    Learn More <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </div>

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
                  <h3 className="text-subheading font-bold text-gray-900 mb-3">Facials & Skincare</h3>
                  <p className="text-gray-700 mb-4">Customized treatments for radiant skin</p>
                </div>
              </div>
            </div>

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
                  <h3 className="text-subheading font-bold text-gray-900 mb-3">Bridal Packages</h3>
                  <p className="text-gray-700 mb-4">Your perfect wedding day</p>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center mt-12">
            <Link
              href="/services"
              className="inline-flex items-center gap-2 bg-[var(--primary)] text-white px-10 py-4 rounded-full hover:bg-[var(--primary-dark)] font-bold text-subheading transition-all shadow-xl"
            >
              Explore All Services
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Meet the Team - Draggable Floating Circles */}
      <section className="py-24 px-4 bg-white relative overflow-hidden">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-2 bg-[var(--primary-100)] text-[var(--primary)] rounded-full text-small font-semibold mb-4">
              👥 OUR EXPERTS
            </span>
            <h2 className="text-heading mb-4">Meet Our Artists</h2>
            <p className="text-subheading text-gray-600">Passionate professionals dedicated to your beauty</p>
          </div>

          <div className="relative h-[600px] mb-12 draggable-container">
            {isEditMode && (
              <div className="absolute -top-8 left-0 bg-pink-600 text-white px-4 py-2 rounded-lg text-small font-semibold">
                Team Circles - Drag to reposition
              </div>
            )}
            
            {teamCircles.map((circle) => (
              <DraggableCircle
                key={circle.id}
                id={circle.id}
                src={circle.src}
                alt={circle.alt}
                initialTop={circle.top}
                initialLeft={circle.left}
                initialRotation={circle.rotation}
                size={circle.size}
                isEditMode={isEditMode}
                onPositionChange={handleTeamPositionChange}
              >
                {/* Hover Tooltip */}
                <div 
                  className="absolute top-full left-1/2 -translate-x-1/2 mt-4 bg-white/95 backdrop-blur rounded-2xl p-4 shadow-xl opacity-0 group-hover:opacity-100 transition-all whitespace-nowrap"
                  style={{ transform: 'translateX(-50%) rotate(0deg)' }}
                >
                  <h4 className="font-bold text-gray-900">{circle.name}</h4>
                  <p className="text-small text-[var(--primary)]">{circle.title}</p>
                  <p className="text-small text-gray-600 mt-1">{circle.years} years</p>
                </div>
              </DraggableCircle>
            ))}
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

      {/* Remaining sections... shortened for brevity */}
      <section className="py-32 px-4 bg-gradient-to-br from-[var(--primary)] to-[var(--secondary)]">
        <div className="container mx-auto max-w-5xl text-center text-white">
          <h2 className="text-display mb-8">Your Transformation Awaits</h2>
          <Link
            href="/book"
            className="inline-block bg-white text-[var(--primary)] px-12 py-6 rounded-full font-bold text-subheading hover:scale-105 transition-all"
          >
            Book Your Appointment
          </Link>
        </div>
      </section>

      {/* Animations */}
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

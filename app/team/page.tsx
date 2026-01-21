import type { Metadata } from 'next';
import Image from 'next/image';
import { teamMembers, getSeniorStaff, getStylists, getBeautySpecialists } from '@/lib/team';
import Link from 'next/link';
import { Award, Star, Instagram, Calendar, Check } from 'lucide-react';
import Chip from '@/components/ui/Chip';

export const metadata: Metadata = {
  title: 'Our Team | The Beauty Cares',
  description: 'Meet our talented team of stylists, colorists, estheticians, and beauty professionals at The Beauty Cares in New York.',
};

export default function TeamPage() {
  const seniorStaff = getSeniorStaff();
  const stylists = getStylists();
  const beautySpecialists = getBeautySpecialists();

  // Unsplash photos for team members - professional beauty industry portraits
  const teamPhotos = [
    'https://images.unsplash.com/photo-1580618672591-eb180b1a973f?w=600&q=80', // Sophia
    'https://images.unsplash.com/photo-1594744803329-e58b31de8bf5?w=600&q=80', // Emma
    'https://images.unsplash.com/photo-1562322140-8baeececf3df?w=600&q=80', // Olivia
    'https://images.unsplash.com/photo-1595475884562-073c520e75e1?w=600&q=80', // Isabella
    'https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?w=600&q=80', // Mia
    'https://images.unsplash.com/photo-1534614971-6be99a7a3ffd?w=600&q=80', // Ava
    'https://images.unsplash.com/photo-1524502397800-2eeaad7c3fe5?w=600&q=80', // Charlotte
    'https://images.unsplash.com/photo-1502823403499-6ccfcf4fb453?w=600&q=80', // Amelia
    'https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?w=600&q=80', // Harper
    'https://images.unsplash.com/photo-1531123897727-8f129e1688ce?w=600&q=80', // Evelyn
    'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=600&q=80', // Abigail
    'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=600&q=80', // Emily
  ];

  return (
    <main>
      {/* Hero Section */}
      <section className="relative py-20 px-4 bg-gradient-to-br from-[var(--backdrop-primary)] via-[var(--backdrop-secondary)] to-[var(--backdrop-primary)]">
        <div className="container mx-auto max-w-4xl text-center">
          <span className="inline-block px-4 py-2 bg-[var(--primary-100)] text-[var(--primary)] rounded-full text-small font-semibold mb-6">
            MEET THE TEAM
          </span>
          <h1 className="text-display mb-6">
            Our Talented Professionals
          </h1>
          <p className="text-subheading text-gray-600 leading-relaxed max-w-3xl mx-auto">
            Behind every beautiful transformation is a dedicated professional. Meet our team of certified stylists, colorists, estheticians, and beauty experts who bring years of experience and passion to every service.
          </p>
        </div>
      </section>

      {/* Team Stats */}
      <section className="py-12 px-4 bg-white border-b border-gray-200">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { value: '12', label: 'Team Members', icon: '👥' },
              { value: '120+', label: 'Years Combined Experience', icon: '⭐' },
              { value: '50+', label: 'Certifications', icon: '🏆' },
              { value: '4.9', label: 'Average Rating', icon: '💖' },
            ].map((stat, idx) => (
              <div key={idx} className="text-center">
                <div className="text-display mb-2">{stat.icon}</div>
                <div className="text-heading font-bold text-[var(--primary)] mb-1">{stat.value}</div>
                <div className="text-small text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Senior Staff / Leadership */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <span className="inline-block px-4 py-2 bg-[var(--primary-100)] text-[var(--primary)] rounded-full text-small font-semibold mb-4">
              LEADERSHIP
            </span>
            <h2 className="text-heading mb-4">Meet Our Senior Team</h2>
            <p className="text-subheading text-gray-600 max-w-3xl mx-auto">
              Industry leaders with decades of combined experience
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {seniorStaff.map((member, idx) => (
              <div
                key={member.id}
                className="bg-white rounded-2xl overflow-hidden border-2 border-gray-200 hover:border-[var(--primary)] hover:shadow-xl transition-all group"
              >
                {/* Photo */}
                <div className="aspect-[3/4] relative overflow-hidden">
                  <Image
                    src={teamPhotos[idx] || teamPhotos[0]}
                    alt={member.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>
                  {member.featured && (
                    <div className="absolute top-4 right-4">
                      <Chip variant="primary" size="sm">
                        <Star className="w-3 h-3 inline mr-1" fill="currentColor" />
                        FEATURED
                      </Chip>
                    </div>
                  )}
                </div>

                {/* Info */}
                <div className="p-6">
                  <h3 className="text-subheading font-bold text-gray-900 mb-1">{member.name}</h3>
                  <p className="text-body text-[var(--primary)] font-semibold mb-3">{member.title}</p>
                  
                  <p className="text-small text-gray-600 mb-4 line-clamp-3 leading-relaxed">
                    {member.bio}
                  </p>

                  {/* Specialties */}
                  <div className="mb-4">
                    <p className="text-small font-semibold text-gray-900 mb-2">Specialties:</p>
                    <div className="flex flex-wrap gap-2">
                      {member.specialties.slice(0, 3).map((specialty, idx) => (
                        <span
                          key={idx}
                          className="px-2 py-1 bg-[var(--primary-50)] text-[var(--primary)] rounded text-small"
                        >
                          {specialty}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Experience */}
                  <div className="flex items-center gap-4 mb-4 text-small text-gray-600">
                    <div className="flex items-center gap-1">
                      <Award className="w-4 h-4 text-[var(--primary)]" />
                      <span>{member.yearsExperience} years</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Star className="w-4 h-4 text-[var(--secondary)]" />
                      <span>{member.certifications.length} certs</span>
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="flex gap-2">
                    <Link
                      href="/book"
                      className="flex-1 text-center bg-[var(--primary)] text-white px-4 py-2 rounded-lg hover:bg-[var(--primary-dark)] font-semibold text-small transition-all"
                    >
                      <Calendar className="w-4 h-4 inline mr-1" />
                      Book
                    </Link>
                    {member.instagram && (
                      <a
                        href={`https://instagram.com/${member.instagram}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-4 py-2 border-2 border-[var(--primary)] text-[var(--primary)] rounded-lg hover:bg-[var(--primary-50)] transition-all"
                      >
                        <Instagram className="w-4 h-4" />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* All Team Members - Grid Layout */}
      <section className="py-20 px-4 bg-white">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-12">
            <h2 className="text-heading mb-4">Our Full Team</h2>
            <p className="text-subheading text-gray-600 max-w-3xl mx-auto">
              Every member of our team is certified, experienced, and passionate about beauty
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {teamMembers.map((member, idx) => (
              <div
                key={member.id}
                className="bg-white rounded-2xl overflow-hidden border-2 border-gray-200 hover:border-[var(--primary)] hover:shadow-lg transition-all text-center group"
              >
                {/* Avatar */}
                <div className="w-full aspect-square relative overflow-hidden">
                  <Image
                    src={teamPhotos[idx] || teamPhotos[0]}
                    alt={member.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent"></div>
                </div>
                
                <div className="p-6">

                {/* Name & Title */}
                <h3 className="text-body font-bold text-gray-900 mb-1">{member.name}</h3>
                <p className="text-small text-[var(--primary)] font-semibold mb-3">{member.title}</p>

                {/* Experience */}
                <div className="flex items-center justify-center gap-2 mb-4 text-small text-gray-600">
                  <Award className="w-4 h-4 text-[var(--primary)]" />
                  <span>{member.yearsExperience} years experience</span>
                </div>

                {/* Top Specialties */}
                <div className="mb-4">
                  <div className="flex flex-wrap gap-1 justify-center">
                    {member.specialties.slice(0, 2).map((specialty, idx) => (
                      <span
                        key={idx}
                        className="px-2 py-1 bg-white text-gray-700 rounded text-small"
                      >
                        {specialty}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Book Button */}
                <Link
                  href="/book"
                  className="block w-full text-center bg-[var(--primary)] text-white px-4 py-2 rounded-lg hover:bg-[var(--primary-dark)] font-semibold text-small transition-all"
                >
                  Book with {member.name.split(' ')[0]}
                </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Our Team is Special */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-heading mb-4">Why Our Team is Different</h2>
            <p className="text-subheading text-gray-600 max-w-3xl mx-auto">
              What sets our professionals apart
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: '🎓',
                title: 'Continuously Learning',
                description: 'Our team attends regular training to stay current with the latest techniques and trends.',
              },
              {
                icon: '🏆',
                title: 'Certified Experts',
                description: 'Every team member holds professional certifications and licenses in their specialties.',
              },
              {
                icon: '💝',
                title: 'Client-Focused',
                description: 'We listen to your needs and provide personalized recommendations for your unique goals.',
              },
              {
                icon: '✨',
                title: 'Passionate Artists',
                description: 'Beauty is our passion. We love what we do and it shows in every service.',
              },
            ].map((item, idx) => (
              <div
                key={idx}
                className="bg-white rounded-xl p-6 border-2 border-gray-200 hover:border-[var(--primary)] hover:shadow-lg transition-all text-center"
              >
                <div className="text-display mb-3">{item.icon}</div>
                <h3 className="text-body font-bold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-small text-gray-600 leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Join Our Team CTA */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto max-w-5xl">
          <div className="bg-gradient-to-br from-[var(--backdrop-primary)] to-[var(--backdrop-secondary)] rounded-2xl p-8 md:p-12 border-2 border-gray-200 text-center">
            <div className="text-display mb-4">💼</div>
            <h2 className="text-heading mb-4">Join Our Team</h2>
            <p className="text-subheading text-gray-600 mb-6 max-w-2xl mx-auto">
              Are you a talented stylist, colorist, or esthetician looking to join a supportive, creative environment? We'd love to hear from you!
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-[var(--primary)] text-white px-8 py-4 rounded-lg hover:bg-[var(--primary-dark)] font-semibold text-subheading transition-all shadow-lg"
            >
              View Career Opportunities
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-gradient-to-br from-[var(--primary)] to-[var(--primary-dark)]">
        <div className="container mx-auto max-w-4xl text-center text-white">
          <h2 className="text-heading mb-4">
            Ready to Meet Your New Stylist?
          </h2>
          <p className="text-subheading mb-10 leading-relaxed max-w-3xl mx-auto text-white/95">
            Book an appointment with one of our talented professionals today. Not sure who to choose? We'll match you with the perfect stylist for your needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/book"
              className="bg-white text-[var(--primary)] px-8 py-4 rounded-lg hover:bg-gray-50 font-semibold text-subheading transition-all shadow-lg"
            >
              Book Your Appointment
            </Link>
            <Link
              href="/contact"
              className="border-2 border-white text-white px-8 py-4 rounded-lg hover:bg-white/10 font-semibold text-subheading transition-all"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}

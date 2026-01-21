import type { Metadata } from 'next';
import { aboutContent } from '@/lib/about';
import { teamMembers } from '@/lib/team';
import Link from 'next/link';
import { Award, Heart, Star, Sparkles, Check, ArrowRight } from 'lucide-react';
import IconBadge from '@/components/ui/IconBadge';
import Icon from '@/components/ui/Icon';

export const metadata: Metadata = {
  title: 'About | The Beauty Cares',
  description: 'Learn about The Beauty Cares, our founder Sophia Martinez, and our commitment to luxury beauty services in New York.',
};

export default function AboutPage() {
  return (
    <main>
      {/* Hero Section */}
      <section className="relative py-20 px-4 bg-gradient-to-br from-[var(--backdrop-primary)] via-[var(--backdrop-secondary)] to-[var(--backdrop-primary)]">
        <div className="container mx-auto max-w-4xl text-center">
          <span className="inline-block px-4 py-2 bg-[var(--primary-100)] text-[var(--primary)] rounded-full text-small font-semibold mb-6">
            OUR STORY
          </span>
          <h1 className="text-display mb-6">
            {aboutContent.hero.title}
          </h1>
          <p className="text-subheading text-[var(--primary)] font-semibold mb-4">
            {aboutContent.hero.subtitle}
          </p>
          <p className="text-body text-gray-600 leading-relaxed">
            {aboutContent.hero.description}
          </p>
        </div>
      </section>

      {/* Statistics Bar */}
      <section className="py-12 px-4" style={{ background: 'linear-gradient(to right, var(--stats-bg-start), var(--stats-bg-end))' }}>
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {aboutContent.statistics.map((stat) => (
              <div key={stat.id} className="text-center">
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

      {/* Philosophy Section */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto max-w-4xl">
          <div className="bg-gradient-to-br from-[var(--backdrop-primary)] to-[var(--backdrop-secondary)] rounded-2xl p-8 md:p-12 border-2 border-gray-200 text-center">
            <h2 className="text-heading text-gray-900 mb-4">
              {aboutContent.philosophy.title}
            </h2>
            <p className="text-subheading text-gray-700 leading-relaxed">
              {aboutContent.philosophy.content}
            </p>
          </div>
        </div>
      </section>

      {/* Meet the Founder Section */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-[300px_1fr] gap-12 items-start">
            {/* Founder Photo */}
            <div className="mx-auto md:mx-0">
              <div className="w-64 h-64 md:w-72 md:h-72 rounded-2xl bg-gradient-to-br from-pink-300 to-purple-300 flex items-center justify-center text-8xl">
                👩‍💼
              </div>
            </div>

            {/* Founder Info */}
            <div>
              <span className="inline-block px-4 py-2 bg-[var(--primary-100)] text-[var(--primary)] rounded-full text-small font-semibold mb-4">
                MEET OUR FOUNDER
              </span>
              <h2 className="text-heading mb-2">{aboutContent.founder.name}</h2>
              <p className="text-subheading text-[var(--primary)] font-semibold mb-6">
                {aboutContent.founder.title}
              </p>

              {aboutContent.founder.bio.map((paragraph, idx) => (
                <p key={idx} className="text-gray-700 leading-relaxed mb-4">
                  {paragraph}
                </p>
              ))}

              {/* Specialties */}
              <div className="mt-8 mb-8">
                <h3 className="text-subheading font-bold text-gray-900 mb-4">Specialties</h3>
                <div className="grid sm:grid-cols-2 gap-3">
                  {aboutContent.founder.specialties.map((specialty, idx) => (
                    <div key={idx} className="flex items-center gap-2">
                      <Check className="w-5 h-5 text-[var(--primary)] shrink-0" />
                      <span className="text-gray-700">{specialty}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Credentials */}
              <div className="mb-8">
                <h3 className="text-subheading font-bold text-gray-900 mb-4">Certifications & Awards</h3>
                <div className="space-y-2">
                  {aboutContent.founder.credentials.map((cred) => (
                    <div key={cred.id} className="flex items-start gap-3 bg-white p-3 rounded-lg border border-gray-200">
                      <Award className="w-5 h-5 text-[var(--primary)] shrink-0 mt-0.5" />
                      <div className="flex-1">
                        <p className="font-semibold text-gray-900">{cred.title}</p>
                        <p className="text-small text-gray-600">
                          {cred.organization} {cred.year && `• ${cred.year}`}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Education */}
              <div>
                <h3 className="text-subheading font-bold text-gray-900 mb-4">Education & Training</h3>
                <div className="space-y-2">
                  {aboutContent.founder.education.map((edu, idx) => (
                    <div key={idx} className="flex items-start gap-3 bg-white p-3 rounded-lg border border-gray-200">
                      <Sparkles className="w-5 h-5 text-[var(--secondary)] shrink-0 mt-0.5" />
                      <div className="flex-1">
                        <p className="font-semibold text-gray-900">{edu.degree}</p>
                        <p className="text-small text-gray-600">
                          {edu.school} • {edu.year}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-20 px-4 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <span className="inline-block px-4 py-2 bg-[var(--primary-100)] text-[var(--primary)] rounded-full text-small font-semibold mb-4">
              OUR VALUES
            </span>
            <h2 className="text-heading mb-4">What We Stand For</h2>
            <p className="text-subheading text-gray-600 max-w-3xl mx-auto">
              The principles that guide everything we do at The Beauty Cares
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {aboutContent.values.map((value) => (
              <div
                key={value.id}
                className="bg-gradient-to-br from-[var(--backdrop-primary)] to-[var(--backdrop-secondary)] rounded-xl p-8 border-2 border-gray-200 hover:border-[var(--primary)] hover:shadow-xl transition-all"
              >
                <div className="flex justify-center mb-4">
                  <IconBadge iconName={value.icon} size={32} />
                </div>
                <h3 className="text-subheading font-bold text-gray-900 mb-3 text-center">
                  {value.title}
                </h3>
                <p className="text-gray-700 leading-relaxed text-center">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <span className="inline-block px-4 py-2 bg-[var(--primary-100)] text-[var(--primary)] rounded-full text-small font-semibold mb-4">
              THE DIFFERENCE
            </span>
            <h2 className="text-heading mb-4">{aboutContent.whyChooseUs.title}</h2>
            <p className="text-subheading text-gray-600 max-w-3xl mx-auto">
              What makes us New York's premier beauty destination
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {aboutContent.whyChooseUs.benefits.map((benefit, idx) => (
              <div
                key={idx}
                className="bg-white rounded-xl p-6 border-2 border-gray-200 hover:border-[var(--primary)] hover:shadow-lg transition-all"
              >
                <div className="flex gap-4">
                  <div className="shrink-0">
                    <IconBadge iconName={benefit.icon} size={24} />
                  </div>
                  <div>
                    <h3 className="text-body font-bold text-gray-900 mb-2">
                      {benefit.title}
                    </h3>
                    <p className="text-small text-gray-600 leading-relaxed">
                      {benefit.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Salon */}
      <section className="py-20 px-4 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <span className="inline-block px-4 py-2 bg-[var(--primary-100)] text-[var(--primary)] rounded-full text-small font-semibold mb-4">
              VISIT US
            </span>
            <h2 className="text-heading mb-4">{aboutContent.salon.title}</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Description */}
            <div>
              {aboutContent.salon.description.map((paragraph, idx) => (
                <p key={idx} className="text-gray-700 leading-relaxed mb-4">
                  {paragraph}
                </p>
              ))}
            </div>

            {/* Features */}
            <div>
              <h3 className="text-subheading font-bold text-gray-900 mb-4">Salon Features</h3>
              <div className="space-y-2">
                {aboutContent.salon.features.map((feature, idx) => (
                  <div key={idx} className="flex items-start gap-2">
                    <Check className="w-5 h-5 text-[var(--primary)] shrink-0 mt-0.5" />
                    <span className="text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Gallery Link */}
          <div className="text-center mt-12">
            <Link
              href="/gallery"
              className="inline-flex items-center gap-2 bg-[var(--primary)] text-white px-8 py-4 rounded-lg hover:bg-[var(--primary-dark)] font-semibold text-subheading transition-all shadow-lg"
            >
              Tour Our Salon
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Meet the Team Preview */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <span className="inline-block px-4 py-2 bg-[var(--primary-100)] text-[var(--primary)] rounded-full text-small font-semibold mb-4">
              OUR TEAM
            </span>
            <h2 className="text-heading mb-4">Talented Professionals</h2>
            <p className="text-subheading text-gray-600 max-w-3xl mx-auto">
              Meet the expert stylists and estheticians who will care for you
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            {teamMembers.slice(0, 4).map((member) => (
              <div
                key={member.id}
                className="bg-white rounded-xl p-6 border-2 border-gray-200 hover:border-[var(--primary)] hover:shadow-xl transition-all text-center"
              >
                <div className="w-24 h-24 mx-auto mb-4 rounded-full bg-gradient-to-br from-pink-300 to-purple-300 flex items-center justify-center text-3xl">
                  👤
                </div>
                <h3 className="text-body font-bold text-gray-900 mb-1">{member.name}</h3>
                <p className="text-small text-[var(--primary)] font-semibold mb-2">{member.title}</p>
                <p className="text-small text-gray-600">{member.yearsExperience} years</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-10">
            <Link
              href="/team"
              className="inline-flex items-center gap-2 text-[var(--primary)] hover:text-[var(--primary-dark)] font-semibold text-subheading"
            >
              Meet the Full Team <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-gradient-to-br from-[var(--primary)] to-[var(--primary-dark)]">
        <div className="container mx-auto max-w-4xl text-center text-white">
          <h2 className="text-heading mb-4">
            Experience The Beauty Cares Difference
          </h2>
          <p className="text-subheading mb-10 leading-relaxed max-w-3xl mx-auto text-white/95">
            Join thousands of satisfied clients who trust us for their beauty needs. Book your appointment today and discover why we're New York's favorite salon.
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

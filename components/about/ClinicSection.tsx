import type { AboutContent } from '@/lib/about';
import { CheckCircle2, MapPin, Clock } from 'lucide-react';
import { siteConfig } from '@/lib/site';

interface ClinicSectionProps {
  clinic: AboutContent['salon'];
}

export default function ClinicSection({ clinic }: ClinicSectionProps) {
  return (
    <section className="py-20 px-4 bg-gray-50">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-heading font-bold text-gray-900 mb-8 text-center">{clinic.title}</h2>

        {/* Description */}
        <div className="max-w-3xl mx-auto mb-12">
          {clinic.description.map((paragraph, idx) => (
            <p key={idx} className="text-subheading text-gray-700 leading-relaxed mb-4">
              {paragraph}
            </p>
          ))}
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Features List */}
          <div className="bg-white border-2 border-gray-200 rounded-xl p-8">
            <h3 className="text-subheading font-bold text-gray-900 mb-6">Clinic Features</h3>
            <ul className="space-y-3">
              {clinic.features.map((feature, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[var(--brand)] shrink-0 mt-0.5" />
                  <span className="text-gray-700">{feature}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Location & Hours */}
          <div className="space-y-6">
            {/* Location Card */}
            <div className="bg-gradient-to-br from-[var(--backdrop-primary)] to-[var(--backdrop-secondary)] border-2 border-gray-200 rounded-xl p-8">
              <div className="flex items-start gap-3 mb-4">
                <MapPin className="w-6 h-6 text-[var(--brand)] shrink-0" />
                <h3 className="text-subheading font-bold text-gray-900">Location</h3>
              </div>
              <p className="text-gray-700 mb-2">{siteConfig.contact.address.street}</p>
              <p className="text-gray-700 mb-4">
                {siteConfig.contact.address.city}, {siteConfig.contact.address.state} {siteConfig.contact.address.zip}
              </p>
              <a
                href={`https://maps.google.com/?q=${encodeURIComponent(siteConfig.contact.address.full)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block text-[var(--brand)] hover:text-[var(--brand-2)] font-semibold text-small"
              >
                Get Directions →
              </a>
            </div>

            {/* Hours Card */}
            <div className="bg-white border-2 border-gray-200 rounded-xl p-8">
              <div className="flex items-start gap-3 mb-4">
                <Clock className="w-6 h-6 text-[var(--brand)] shrink-0" />
                <h3 className="text-subheading font-bold text-gray-900">Office Hours</h3>
              </div>
              <div className="space-y-2">
                {siteConfig.contact.hoursFormatted.map((hour, idx) => (
                  <div key={idx} className="flex justify-between text-gray-700">
                    <span className="font-medium">{hour.days}</span>
                    <span>{hour.hours}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

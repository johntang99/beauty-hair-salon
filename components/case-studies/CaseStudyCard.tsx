import type { CaseStudy } from '@/lib/case-studies';
import Chip from '@/components/ui/Chip';
import { User, Clock, Sparkles, Star } from 'lucide-react';

interface CaseStudyCardProps {
  study: CaseStudy;
  index: number;
}

export default function CaseStudyCard({ study, index }: CaseStudyCardProps) {
  return (
    <article className="bg-white rounded-2xl border-2 border-gray-200 overflow-hidden hover:border-[var(--brand)] hover:shadow-2xl transition-all duration-300">
      {/* Header */}
      <div className="bg-gradient-to-br from-[var(--backdrop-primary)] to-[var(--backdrop-secondary)] p-6 border-b-2 border-gray-200">
        <div className="flex items-start justify-between mb-3">
          <Chip variant="primary" size="md">
            Transformation #{index + 1}
          </Chip>
          <Chip variant="secondary" size="sm">
            {study.category?.toUpperCase()}
          </Chip>
        </div>
        <h2 className="text-subheading md:text-heading font-bold text-gray-900 mb-2">{study.title}</h2>
      </div>

      {/* Before/After Images */}
      {(study.hasBeforeImage || study.hasAfterImage) && (
        <div className="grid grid-cols-2 gap-0 border-b-2 border-gray-200">
          {study.hasBeforeImage && (
            <div className="relative h-[250px] bg-gray-100 border-r border-gray-200">
              <div className="absolute top-3 left-3 z-10">
                <span className="px-3 py-1 bg-gray-600 text-white text-small font-bold rounded-full">
                  BEFORE
                </span>
              </div>
              <div className="w-full h-full flex items-center justify-center">
                <div className="text-center">
                  <div className="text-display mb-2 opacity-30">📷</div>
                  <p className="text-small text-gray-500">Before transformation</p>
                </div>
              </div>
            </div>
          )}
          {study.hasAfterImage && (
            <div className={`relative h-[250px] bg-gradient-to-br from-pink-50 to-purple-50 ${!study.hasBeforeImage ? 'col-span-2' : ''}`}>
              <div className="absolute top-3 left-3 z-10">
                <span className="px-3 py-1 bg-[var(--primary)] text-white text-small font-bold rounded-full">
                  AFTER
                </span>
              </div>
              <div className="w-full h-full flex items-center justify-center">
                <div className="text-center">
                  <div className="text-display mb-2 opacity-30">✨</div>
                  <p className="text-small text-gray-500">After transformation</p>
                </div>
              </div>
            </div>
          )}
        </div>
      )}

      {/* Content */}
      <div className="p-8">
        {/* Client Info */}
        <div className="flex flex-wrap gap-4 mb-6 text-small">
          {study.clientAge && (
            <div className="flex items-center gap-2">
              <User className="w-4 h-4 text-gray-500" />
              <span className="text-gray-600">
                Age {study.clientAge}
              </span>
            </div>
          )}
          <div className="flex items-center gap-2">
            <Clock className="w-4 h-4 text-gray-500" />
            <span className="text-gray-600">{study.duration}</span>
          </div>
          {study.stylist && (
            <div className="flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-[var(--primary)]" />
              <span className="text-gray-600">Stylist: {study.stylist}</span>
            </div>
          )}
        </div>

        {/* Overview */}
        <div className="mb-6">
          <h3 className="text-subheading font-bold text-gray-900 mb-3">Overview</h3>
          <p className="text-gray-700 leading-relaxed">{study.overview}</p>
        </div>

        {/* Client Concerns */}
        {study.concerns && study.concerns.length > 0 && (
          <div className="mb-6">
            <h3 className="text-subheading font-bold text-gray-900 mb-3">Client Concerns</h3>
            <div className="flex flex-wrap gap-2">
              {study.concerns.map((concern, idx) => (
                <Chip key={idx} variant="default" size="sm">
                  {concern}
                </Chip>
              ))}
            </div>
          </div>
        )}

        {/* Services & Products */}
        <div className="grid md:grid-cols-2 gap-8 mb-6">
          {/* Services Used */}
          {study.servicesUsed && study.servicesUsed.length > 0 && (
            <div>
              <h3 className="text-subheading font-bold text-gray-900 mb-3 flex items-center gap-2">
                <div className="w-6 h-6 rounded bg-[var(--primary-50)] flex items-center justify-center">
                  <Sparkles className="w-4 h-4 text-[var(--primary)]" />
                </div>
                Services Used
              </h3>
              <div className="space-y-2">
                {study.servicesUsed.map((service, i) => (
                  <div key={i} className="text-small text-gray-700 flex items-center gap-2">
                    <span className="text-[var(--primary)]">•</span>
                    {service}
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Products Used */}
          {study.productsUsed && study.productsUsed.length > 0 && (
            <div>
              <h3 className="text-subheading font-bold text-gray-900 mb-3 flex items-center gap-2">
                <div className="w-6 h-6 rounded bg-[var(--secondary-50)] flex items-center justify-center">
                  <Star className="w-4 h-4 text-[var(--secondary)]" />
                </div>
                Products Used
              </h3>
              <div className="space-y-2">
                {study.productsUsed.map((product, i) => (
                  <div key={i} className="text-small text-gray-700 flex items-center gap-2">
                    <span className="text-[var(--secondary)]">•</span>
                    {product}
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Outcome */}
        <div className="bg-gradient-to-br from-[var(--backdrop-primary)] to-[var(--backdrop-secondary)] border-2 border-[var(--primary-100)] p-6 rounded-xl mb-6">
          <h3 className="text-subheading font-bold text-[var(--primary)] mb-3">The Result</h3>
          <p className="text-gray-700 leading-relaxed">{study.outcome}</p>
        </div>

        {/* Client Testimonial */}
        {study.testimonial && (
          <div className="bg-white border-2 border-gray-200 p-6 rounded-xl">
            <div className="flex gap-1 mb-3">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="w-4 h-4" style={{ fill: 'var(--secondary)', color: 'var(--secondary)' }} />
              ))}
            </div>
            <p className="text-gray-700 italic leading-relaxed">
              &ldquo;{study.testimonial}&rdquo;
            </p>
          </div>
        )}
      </div>
    </article>
  );
}

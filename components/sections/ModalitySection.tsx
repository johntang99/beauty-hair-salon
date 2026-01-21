import type { Modality } from '@/lib/modalities';
import IconBadge from '@/components/ui/IconBadge';
import Accordion from './Accordion';
import InfoCard from './InfoCard';
import { CheckCircle2, Clock, Activity, Link as LinkIcon } from 'lucide-react';

interface ModalitySectionProps {
  modality: Modality;
}

export default function ModalitySection({ modality }: ModalitySectionProps) {
  // Convert whatToExpect to array if it's a string
  const whatToExpectArray = Array.isArray(modality.whatToExpect)
    ? modality.whatToExpect
    : [modality.whatToExpect];

  return (
    <section id={modality.id} className="scroll-mt-32 py-16 px-4">
      <div className="container mx-auto max-w-7xl">
        <div className="grid lg:grid-cols-3 gap-12">
          {/* Left Column - Main Content */}
          <div className="lg:col-span-2">
            {/* Title Row with Icon Badge */}
            <div className="flex gap-6 items-start mb-6">
              <IconBadge iconName={modality.icon} size={28} className="shrink-0" />
              <div className="flex-1 min-w-0">
                <h2 className="text-heading font-bold text-gray-900 mb-2">{modality.name}</h2>
                <p className="text-subheading text-[var(--brand)] font-medium">{modality.tagline}</p>
              </div>
            </div>

            {/* Summary */}
            <div className="max-w-prose mb-8">
              <p className="text-subheading text-[color-mix(in_srgb,var(--text)_75%,transparent)] leading-relaxed">
                {modality.description}
              </p>
            </div>

            {/* Accordions */}
            <div className="space-y-4">
              {/* Benefits Accordion */}
              <Accordion title="Benefits" defaultOpen={true}>
                <ul className="grid sm:grid-cols-2 gap-3">
                  {modality.benefits.map((benefit, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-[var(--brand)] shrink-0 mt-0.5" />
                      <span className="text-small text-gray-700 leading-relaxed">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </Accordion>

              {/* What to Expect Accordion */}
              <Accordion title="What to Expect">
                <div className="space-y-3">
                  {whatToExpectArray.map((item, idx) => (
                    <p key={idx} className="text-small text-gray-700 leading-relaxed">
                      {item}
                    </p>
                  ))}
                </div>
              </Accordion>

              {/* Duration & Frequency Accordion */}
              <Accordion title="Duration & Frequency">
                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <Clock className="w-4 h-4 text-[var(--brand)]" />
                      <span className="font-semibold text-small text-gray-900">Duration</span>
                    </div>
                    <p className="text-small text-gray-700">{modality.duration}</p>
                  </div>
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <Activity className="w-4 h-4 text-[var(--brand)]" />
                      <span className="font-semibold text-small text-gray-900">Frequency</span>
                    </div>
                    <p className="text-small text-gray-700">{modality.frequency}</p>
                  </div>
                </div>
              </Accordion>
            </div>
          </div>

          {/* Right Column - Sidebar */}
          <div className="lg:col-span-1 space-y-6">
            {/* Common Reasons Card */}
            <InfoCard title="Common Reasons People Come In">
              <div className="flex flex-wrap gap-2">
                {modality.conditions.map((condition, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1.5 bg-white text-gray-700 text-smallall font-medium rounded-full border border-gray-200 hover:border-[var(--brand)] hover:text-[var(--brand)] transition-colors"
                  >
                    {condition}
                  </span>
                ))}
              </div>
            </InfoCard>

            {/* Quick Facts Card */}
            <InfoCard title="Quick Facts">
              <div className="space-y-4">
                <div>
                  <p className="text-smallall font-semibold text-gray-600 mb-1">TYPICAL SESSION TIME</p>
                  <p className="text-small font-medium text-gray-900">{modality.quickFacts.sessionTime}</p>
                </div>
                <div>
                  <p className="text-smallall font-semibold text-gray-600 mb-1">SENSATION LEVEL</p>
                  <p className="text-small font-medium text-gray-900">{modality.quickFacts.sensation}</p>
                </div>
                {modality.quickFacts.bestPairedWith && modality.quickFacts.bestPairedWith.length > 0 && (
                  <div>
                    <p className="text-smallall font-semibold text-gray-600 mb-2">BEST PAIRED WITH</p>
                    <div className="flex flex-wrap gap-2">
                      {modality.quickFacts.bestPairedWith.map((item, idx) => (
                        <span
                          key={idx}
                          className="inline-flex items-center gap-1 px-2 py-1 bg-white text-[var(--brand)] text-smallall font-medium rounded border border-[var(--brand)]"
                        >
                          <LinkIcon className="w-3 h-3" />
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </InfoCard>
          </div>
        </div>

        {/* Divider */}
        <div className="mt-16 border-t border-gray-200"></div>
      </div>
    </section>
  );
}

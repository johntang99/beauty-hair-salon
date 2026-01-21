import type { Condition } from '@/lib/conditions';
import Modal from '@/components/ui/Modal';
import IconBadge from '@/components/ui/IconBadge';
import Chip from '@/components/ui/Chip';
import { CheckCircle2, Sparkles, Phone, Calendar } from 'lucide-react';
import Link from 'next/link';

interface ConditionModalProps {
  condition: Condition | null;
  isOpen: boolean;
  onClose: () => void;
}

export default function ConditionModal({ condition, isOpen, onClose }: ConditionModalProps) {
  if (!condition) return null;

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <div className="grid lg:grid-cols-3 gap-0">
        {/* Main Content - Left 2/3 */}
        <div className="lg:col-span-2 p-8 lg:border-r border-gray-200">
          {/* Header */}
          <div className="flex gap-6 items-start mb-6">
            <IconBadge iconName={condition.icon} size={32} />
            <div className="flex-1">
              <h2 className="text-heading font-bold text-gray-900 mb-2">{condition.name}</h2>
              <Chip variant="secondary" size="md">{condition.category}</Chip>
            </div>
          </div>

          {/* Full Description */}
          <div className="mb-8">
            <h3 className="text-subheading font-bold text-gray-900 mb-3">Overview</h3>
            <p className="text-gray-700 leading-relaxed">{condition.description}</p>
          </div>

          {/* Common Symptoms */}
          <div className="mb-8">
            <h3 className="text-subheading font-bold text-gray-900 mb-3 flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-[var(--brand)]" />
              Common Symptoms
            </h3>
            <div className="grid sm:grid-cols-2 gap-3">
              {condition.symptoms.map((symptom, idx) => (
                <div key={idx} className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[var(--brand)] mt-2 shrink-0"></span>
                  <span className="text-small text-gray-700">{symptom}</span>
                </div>
              ))}
            </div>
          </div>

          {/* TCM Perspective */}
          <div className="mb-8 bg-gradient-to-br from-[var(--backdrop-primary)] to-[var(--backdrop-secondary)] rounded-xl p-6 border border-green-200">
            <h3 className="text-subheading font-bold text-gray-900 mb-3 flex items-center gap-2">
              <Sparkles className="w-5 h-5 text-[var(--brand)]" />
              Traditional Chinese Medicine Perspective
            </h3>
            <p className="text-small text-gray-700 leading-relaxed">{condition.tcmPerspective}</p>
          </div>

          {/* Recommended Treatments */}
          <div className="mb-6">
            <h3 className="text-subheading font-bold text-gray-900 mb-3">Recommended Treatments</h3>
            <div className="flex flex-wrap gap-2">
              {condition.treatments.map((treatment, idx) => (
                <Chip key={idx} variant="primary" size="md">
                  {treatment}
                </Chip>
              ))}
            </div>
          </div>

          {/* Disclaimer */}
          <div className="mt-8 pt-6 border-t border-gray-200">
            <p className="text-smallall text-gray-500 leading-relaxed">
              <strong>Disclaimer:</strong> This information is for educational purposes only and is not intended to diagnose, treat, cure, or prevent any disease. 
              Please consult with a qualified healthcare practitioner for personalized medical advice.
            </p>
          </div>
        </div>

        {/* Sidebar - Right 1/3 */}
        <div className="lg:col-span-1 bg-gradient-to-br from-gray-50 to-white p-8">
          {/* Quick Facts */}
          <div className="mb-6">
            <h3 className="text-small font-bold text-gray-900 mb-4">QUICK FACTS</h3>
            <div className="space-y-3 text-small">
              <div>
                <p className="text-smallall font-semibold text-gray-500 mb-1">CATEGORY</p>
                <p className="text-gray-900">{condition.category}</p>
              </div>
              <div>
                <p className="text-smallall font-semibold text-gray-500 mb-1">COMMON SYMPTOMS</p>
                <p className="text-gray-900">{condition.symptoms.length} identified</p>
              </div>
              <div>
                <p className="text-smallall font-semibold text-gray-500 mb-1">TREATMENT OPTIONS</p>
                <p className="text-gray-900">{condition.treatments.length} modalities</p>
              </div>
            </div>
          </div>

          {/* CTA Card */}
          <div className="bg-gradient-to-br from-green-600 to-green-700 rounded-xl p-6 text-white mb-6">
            <h3 className="text-subheading font-bold mb-3">Ready to Start Healing?</h3>
            <p className="text-small opacity-90 mb-4 leading-relaxed">
              Schedule a consultation to discuss how Traditional Chinese Medicine can help with {condition.name.toLowerCase()}.
            </p>
            <div className="space-y-2">
              <Link
                href="/contact"
                className="flex items-center justify-center gap-2 w-full bg-white text-[var(--primary)] px-4 py-3 rounded-lg hover:bg-gray-50 font-semibold text-small transition-all"
                onClick={onClose}
              >
                <Calendar className="w-4 h-4" />
                Book Appointment
              </Link>
              <a
                href="tel:845-381-1106"
                className="flex items-center justify-center gap-2 w-full border-2 border-white text-white px-4 py-3 rounded-lg hover:bg-white/10 font-semibold text-small transition-all"
              >
                <Phone className="w-4 h-4" />
                Call: 845-381-1106
              </a>
            </div>
          </div>

          {/* Related Info */}
          <div className="bg-white rounded-lg border border-gray-200 p-4">
            <p className="text-smallall text-gray-600 leading-relaxed">
              💡 <strong>Did you know?</strong> Traditional Chinese Medicine has been successfully treating conditions like {condition.name.toLowerCase()} for thousands of years through a holistic, whole-person approach.
            </p>
          </div>
        </div>
      </div>
    </Modal>
  );
}

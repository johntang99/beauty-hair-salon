'use client';

import { useState } from 'react';
import type { Condition } from '@/lib/conditions';
import IconBadge from '@/components/ui/IconBadge';
import Chip from '@/components/ui/Chip';
import { ArrowRight } from 'lucide-react';

interface ConditionCardProps {
  condition: Condition;
  onLearnMore: () => void;
}

export default function ConditionCard({ condition, onLearnMore }: ConditionCardProps) {
  const [showAllSymptoms, setShowAllSymptoms] = useState(false);
  const [showAllTreatments, setShowAllTreatments] = useState(false);

  const maxVisible = 4;
  const visibleSymptoms = showAllSymptoms ? condition.symptoms : condition.symptoms.slice(0, maxVisible);
  const remainingSymptoms = condition.symptoms.length - maxVisible;
  
  const visibleTreatments = showAllTreatments ? condition.treatments : condition.treatments.slice(0, maxVisible);
  const remainingTreatments = condition.treatments.length - maxVisible;

  // Category color mapping
  const getCategoryColor = (category: string) => {
    const colors: { [key: string]: string } = {
      'Pain Management': 'border-red-400',
      'Mental-Emotional Health': 'border-purple-400',
      'Sleep Disorders': 'border-indigo-400',
      'Digestive Health': 'border-amber-400',
      'Reproductive Health': 'border-pink-400',
      'Immune & Respiratory': 'border-blue-400',
      'Energy & Vitality': 'border-yellow-400',
      'Dermatology': 'border-green-400',
      'Neurological': 'border-teal-400',
    };
    return colors[category] || 'border-gray-400';
  };

  return (
    <div
      className={`bg-white rounded-xl border-2 border-l-4 ${getCategoryColor(condition.category)} shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden group h-full flex flex-col`}
    >
      <div className="p-6 flex-1 flex flex-col">
        {/* Header with Icon */}
        <div className="flex gap-4 items-start mb-4">
          <IconBadge iconName={condition.icon} size={22} className="shrink-0" />
          <div className="flex-1 min-w-0">
            <h3 className="text-subheading font-bold text-gray-900 mb-1 group-hover:text-[var(--brand)] transition-colors">
              {condition.name}
            </h3>
            <Chip variant="secondary" size="sm">{condition.category}</Chip>
          </div>
        </div>

        {/* Summary */}
        <p className="text-small text-gray-600 mb-4 line-clamp-2 leading-relaxed">
          {condition.description}
        </p>

        {/* Common Symptoms */}
        <div className="mb-4">
          <p className="text-smallall font-semibold text-gray-500 mb-2">COMMON SYMPTOMS</p>
          <div className="flex flex-wrap gap-2">
            {visibleSymptoms.map((symptom, idx) => (
              <Chip key={idx} variant="default" size="sm">
                {symptom}
              </Chip>
            ))}
            {!showAllSymptoms && remainingSymptoms > 0 && (
              <button
                onClick={() => setShowAllSymptoms(true)}
                className="inline-flex items-center justify-center px-2.5 py-1 text-smallall font-medium rounded-full bg-gray-200 text-gray-700 hover:bg-gray-300 transition-colors"
              >
                +{remainingSymptoms}
              </button>
            )}
          </div>
        </div>

        {/* Recommended Treatments */}
        <div className="mb-4 flex-1">
          <p className="text-smallall font-semibold text-gray-500 mb-2">RECOMMENDED TREATMENTS</p>
          <div className="flex flex-wrap gap-2">
            {visibleTreatments.map((treatment, idx) => (
              <Chip key={idx} variant="primary" size="sm">
                {treatment}
              </Chip>
            ))}
            {!showAllTreatments && remainingTreatments > 0 && (
              <button
                onClick={() => setShowAllTreatments(true)}
                className="inline-flex items-center justify-center px-2.5 py-1 text-smallall font-medium rounded-full bg-[var(--brand)]/20 text-[var(--brand)] hover:bg-[var(--brand)]/30 transition-colors"
              >
                +{remainingTreatments}
              </button>
            )}
          </div>
        </div>

        {/* Learn More Button */}
        <button
          onClick={onLearnMore}
          className="w-full mt-auto flex items-center justify-center gap-2 px-4 py-2.5 bg-gray-100 text-gray-900 rounded-lg hover:bg-[var(--brand)] hover:text-white font-medium text-small transition-all group-hover:bg-[var(--brand)] group-hover:text-white"
        >
          Learn More
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
}

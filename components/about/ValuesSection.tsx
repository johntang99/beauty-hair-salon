import type { Value } from '@/lib/about';
import Icon from '@/components/ui/Icon';

interface ValuesSectionProps {
  values: Value[];
}

export default function ValuesSection({ values }: ValuesSectionProps) {
  return (
    <section className="py-20 px-4 bg-gray-50">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-heading font-bold text-gray-900 mb-4">What Sets Us Apart</h2>
          <p className="text-subheading text-gray-600 max-w-3xl mx-auto">
            Our commitment to excellence is guided by core values that shape every aspect of patient care.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {values.map((value) => (
            <div
              key={value.id}
              className="bg-white border-2 border-gray-200 rounded-xl p-8 hover:border-[var(--brand)] hover:shadow-lg transition-all group"
            >
              <div className="flex items-start gap-4 mb-4">
                <div className="w-14 h-14 rounded-xl bg-[color-mix(in_srgb,var(--brand)_10%,transparent)] flex items-center justify-center shrink-0 group-hover:bg-[var(--brand)] transition-colors">
                  <Icon name={value.icon} size={24} className="text-[var(--brand)] group-hover:text-white transition-colors" />
                </div>
                <div className="flex-1">
                  <h3 className="text-subheading font-bold text-gray-900 mb-2">{value.title}</h3>
                  <p className="text-gray-700 leading-relaxed">{value.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

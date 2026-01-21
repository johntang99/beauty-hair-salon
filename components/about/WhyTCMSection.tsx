import type { AboutContent } from '@/lib/about';
import IconBadge from '@/components/ui/IconBadge';

interface WhyTCMSectionProps {
  content: AboutContent['whyChooseUs'];
}

export default function WhyTCMSection({ content }: WhyTCMSectionProps) {
  return (
    <section className="py-20 px-4 bg-white">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-heading font-bold text-gray-900 mb-4">{content.title}</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {content.benefits.map((benefit) => (
            <div
              key={benefit.title}
              className="bg-gradient-to-br from-[var(--backdrop-primary)] to-[var(--backdrop-secondary)] border-2 border-gray-200 rounded-xl p-8 hover:border-[var(--brand)] hover:shadow-lg transition-all"
            >
              <div className="flex gap-4 items-start mb-4">
                <IconBadge iconName={benefit.icon} size={24} className="shrink-0" />
                <h3 className="text-subheading font-bold text-gray-900">{benefit.title}</h3>
              </div>
              <p className="text-gray-700 leading-relaxed">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

import type { Statistic } from '@/lib/about';
import Icon from '@/components/ui/Icon';

interface StatsBarProps {
  statistics: Statistic[];
}

export default function StatsBar({ statistics }: StatsBarProps) {
  return (
    <section className="py-12 px-4 bg-gradient-to-r from-[var(--primary)] to-[var(--primary-dark)] relative overflow-hidden">
      {/* Decorative Background */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-1/4 w-64 h-64 bg-white rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-white rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {statistics.map((stat) => (
            <div key={stat.id} className="text-center">
              <div className="flex justify-center mb-3">
                <div className="w-12 h-12 rounded-lg bg-white/20 flex items-center justify-center">
                  <Icon name={stat.icon} size={24} className="text-white" />
                </div>
              </div>
              <div className="text-heading text-white mb-2">
                {stat.value}
              </div>
              <div className="text-small md:text-body text-white/90 font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

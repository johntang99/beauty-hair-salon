import { TrendingUp, Heart, Award } from 'lucide-react';

export default function CaseStudiesHero() {
  const features = [
    {
      icon: TrendingUp,
      text: 'Real patient outcomes',
    },
    {
      icon: Heart,
      text: 'Evidence-based results',
    },
    {
      icon: Award,
      text: 'Proven effectiveness',
    },
  ];

  return (
    <section className="relative bg-gradient-to-br from-[var(--backdrop-primary)] via-[var(--backdrop-secondary)] to-[var(--backdrop-primary)] py-16 md:py-20 px-4 overflow-hidden">
      {/* Decorative Background */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 right-10 w-64 h-64 bg-green-300 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 left-10 w-64 h-64 bg-amber-300 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto max-w-7xl relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text Content */}
          <div className="text-center lg:text-left">
            <h1 className="text-display md:text-display font-bold text-gray-900 mb-6 leading-tight">
              Case Studies
            </h1>
            <p className="text-subheading text-[var(--brand)] font-medium mb-4">
              Real Patient Experiences with Traditional Chinese Medicine
            </p>
            <p className="text-subheading text-gray-600 leading-relaxed mb-8">
              Discover how Traditional Chinese Medicine has helped real patients overcome health challenges and achieve lasting wellness.
            </p>

            {/* Features Row */}
            <div className="grid sm:grid-cols-3 gap-4">
              {features.map((item) => {
                const Icon = item.icon;
                return (
                  <div
                    key={item.text}
                    className="flex flex-col items-center sm:items-start gap-3 bg-white/80 backdrop-blur rounded-xl p-4 border border-gray-200 shadow-sm"
                  >
                    <div className="w-10 h-10 rounded-lg bg-[color-mix(in_srgb,var(--brand)_10%,transparent)] flex items-center justify-center">
                      <Icon className="w-5 h-5 text-[var(--brand)]" />
                    </div>
                    <span className="text-small font-semibold text-gray-900 text-center sm:text-left">{item.text}</span>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right Column - Hero Image */}
          <div className="relative lg:h-[500px] h-[350px] hidden md:block">
            <div className="absolute inset-0 bg-gradient-to-br from-[var(--backdrop-primary)] to-[var(--backdrop-secondary)] rounded-3xl overflow-hidden shadow-2xl">
              <div className="w-full h-full flex flex-col items-center justify-center bg-gradient-to-br from-green-600/10 to-amber-600/10 relative p-8">
                <div className="absolute top-10 left-10 w-24 h-24 bg-[var(--primary-50)]0/20 rounded-full"></div>
                <div className="absolute bottom-10 right-10 w-32 h-32 bg-[var(--secondary-50)]0/20 rounded-full"></div>
                
                <div className="relative z-10 text-center">
                  <div className="text-8xl mb-6">📊</div>
                  <p className="text-gray-700 font-semibold text-subheading mb-2">Success Stories</p>
                  <p className="text-gray-600 text-small">Real results from real patients</p>
                </div>
              </div>
            </div>
            <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-[var(--primary)] rounded-3xl opacity-10 -z-10"></div>
            <div className="absolute -top-6 -left-6 w-48 h-48 bg-amber-600 rounded-3xl opacity-10 -z-10"></div>
          </div>
        </div>
      </div>
    </section>
  );
}

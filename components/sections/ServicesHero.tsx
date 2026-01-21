import { Award, Users, Shield } from 'lucide-react';

export default function ServicesHero() {
  const trustItems = [
    {
      icon: Award,
      title: 'Licensed Practitioner',
      description: 'Certified & experienced',
    },
    {
      icon: Users,
      title: 'Personalized Plans',
      description: 'Tailored to your needs',
    },
    {
      icon: Shield,
      title: 'Calm & Private',
      description: 'Peaceful healing space',
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
              Traditional Healing Modalities
            </h1>
            <p className="text-subheading text-gray-600 leading-relaxed mb-8">
              Comprehensive Traditional Chinese Medicine treatments, each tailored to your unique health journey and wellness goals.
            </p>

            {/* Trust Bar */}
            <div className="grid sm:grid-cols-3 gap-4 mt-8">
              {trustItems.map((item) => {
                const Icon = item.icon;
                return (
                  <div
                    key={item.title}
                    className="flex flex-col items-center sm:items-start gap-3 bg-white/80 backdrop-blur rounded-xl p-4 border border-gray-200 shadow-sm"
                  >
                    <div className="w-12 h-12 rounded-lg bg-[color-mix(in_srgb,var(--brand)_10%,transparent)] flex items-center justify-center shrink-0">
                      <Icon className="w-6 h-6 text-[var(--brand)]" />
                    </div>
                    <div className="text-center sm:text-left">
                      <p className="font-semibold text-gray-900 text-small">{item.title}</p>
                      <p className="text-smallall text-gray-600">{item.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right Column - Hero Image */}
          <div className="relative lg:h-[500px] h-[350px] hidden md:block">
            <div className="absolute inset-0 bg-gradient-to-br from-[var(--backdrop-primary)] to-[var(--backdrop-secondary)] rounded-3xl overflow-hidden shadow-2xl">
              {/* Image Placeholder - Replace with actual image */}
              <div className="w-full h-full flex flex-col items-center justify-center bg-gradient-to-br from-green-600/10 to-amber-600/10 relative p-8">
                {/* Decorative Elements */}
                <div className="absolute top-8 left-8 w-20 h-20 bg-[var(--primary-50)]0/20 rounded-full"></div>
                <div className="absolute bottom-8 right-8 w-28 h-28 bg-[var(--secondary-50)]0/20 rounded-full"></div>
                <div className="absolute top-1/3 right-12 w-16 h-16 bg-green-400/15 rounded-full"></div>
                
                {/* Central Content */}
                <div className="relative z-10 text-center">
                  <div className="text-8xl mb-6">🧘</div>
                  <p className="text-gray-700 font-semibold text-subheading mb-2">Holistic TCM Treatments</p>
                  <p className="text-gray-600 text-small">Time-tested healing methods</p>
                </div>

                {/* Optional: Add your actual image here */}
                {/* 
                <Image
                  src="/images/services-hero.jpg"
                  alt="Traditional Chinese Medicine treatments"
                  fill
                  className="object-cover"
                  priority
                />
                */}
              </div>
            </div>
            {/* Decorative accent boxes */}
            <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-[var(--primary)] rounded-3xl opacity-10 -z-10"></div>
            <div className="absolute -top-6 -left-6 w-48 h-48 bg-amber-600 rounded-3xl opacity-10 -z-10"></div>
          </div>
        </div>
      </div>
    </section>
  );
}

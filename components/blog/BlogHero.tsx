import Image from 'next/image';
import { BookOpen, Video, Sparkles } from 'lucide-react';

export default function BlogHero() {
  const features = [
    {
      icon: BookOpen,
      text: 'Beauty Tips & Guides',
    },
    {
      icon: Video,
      text: 'Video Tutorials',
    },
    {
      icon: Sparkles,
      text: 'Style Inspiration',
    },
  ];

  return (
    <section className="relative bg-gradient-to-br from-[var(--backdrop-primary)] via-[var(--backdrop-secondary)] to-[var(--backdrop-primary)] py-16 md:py-20 px-4 overflow-hidden">
      {/* Decorative Background */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 right-10 w-64 h-64 rounded-full blur-3xl" style={{ backgroundColor: 'var(--primary)' }}></div>
        <div className="absolute bottom-10 left-10 w-64 h-64 rounded-full blur-3xl" style={{ backgroundColor: 'var(--secondary)' }}></div>
      </div>

      <div className="container mx-auto max-w-7xl relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text Content */}
          <div className="text-center lg:text-left">
            <span className="inline-block px-4 py-2 bg-[var(--primary-100)] text-[var(--primary)] rounded-full text-small font-semibold mb-6">
              BEAUTY BLOG
            </span>
            <h1 className="text-display md:text-display font-bold text-gray-900 mb-6 leading-tight">
              Beauty Tips & Inspiration
            </h1>
            <p className="text-subheading text-[var(--primary)] font-semibold mb-4">
              Your guide to gorgeous hair and radiant skin
            </p>
            <p className="text-body text-gray-600 leading-relaxed mb-8">
              Expert advice, tutorials, and inspiration from our professional stylists and estheticians. Learn the latest techniques, trends, and tips to look and feel your best.
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
                    <div className="w-10 h-10 rounded-lg flex items-center justify-center" style={{ backgroundColor: 'color-mix(in srgb, var(--primary) 10%, transparent)' }}>
                      <Icon className="w-5 h-5 text-[var(--primary)]" />
                    </div>
                    <span className="text-small font-semibold text-gray-900 text-center sm:text-left">{item.text}</span>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right Column - Hero Image */}
          <div className="relative lg:h-[500px] h-[350px] hidden md:block">
            <div className="absolute inset-0 rounded-3xl overflow-hidden shadow-2xl">
              <Image
                src="https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=1000&q=80"
                alt="Beauty and hair styling"
                fill
                className="object-cover"
                sizes="50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>
              
              <div className="absolute bottom-8 left-8 right-8 text-white">
                <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20">
                  <p className="font-semibold text-subheading mb-2">💇 Latest Beauty Trends</p>
                  <p className="text-small opacity-90">Articles & tutorials updated weekly</p>
                </div>
              </div>
            </div>
            <div className="absolute -bottom-6 -right-6 w-48 h-48 rounded-3xl opacity-10 -z-10" style={{ backgroundColor: 'var(--primary)' }}></div>
            <div className="absolute -top-6 -left-6 w-48 h-48 rounded-3xl opacity-10 -z-10" style={{ backgroundColor: 'var(--secondary)' }}></div>
          </div>
        </div>
      </div>
    </section>
  );
}

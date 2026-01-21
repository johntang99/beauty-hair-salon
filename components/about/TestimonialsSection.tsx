import { Star } from 'lucide-react';
import { testimonials } from '@/lib/testimonials';

export default function TestimonialsSection() {
  const featuredTestimonials = testimonials.slice(0, 3);

  if (featuredTestimonials.length === 0) return null;

  return (
    <section className="py-20 px-4 bg-white">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-heading font-bold text-gray-900 mb-4">What Our Patients Say</h2>
          <p className="text-subheading text-gray-600">Real experiences from real people on their healing journeys</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {featuredTestimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-gradient-to-br from-[var(--backdrop-primary)] to-[var(--backdrop-secondary)] rounded-xl p-8 border-2 border-gray-200 hover:border-[var(--brand)] hover:shadow-lg transition-all"
            >
              {/* Rating */}
              <div className="flex gap-1 mb-4">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-amber-400 text-amber-400" />
                ))}
              </div>

              {/* Quote */}
              <p className="text-gray-700 italic mb-6 leading-relaxed">
                &ldquo;{testimonial.text}&rdquo;
              </p>

              {/* Attribution */}
              <div className="border-t border-gray-300 pt-4">
                <p className="font-semibold text-gray-900">{testimonial.name}</p>
                <p className="text-small text-gray-600">{testimonial.service}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

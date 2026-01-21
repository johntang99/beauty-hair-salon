import type { AboutContent } from '@/lib/about';
import { Award, GraduationCap } from 'lucide-react';
import Chip from '@/components/ui/Chip';

interface DoctorSectionProps {
  doctor: AboutContent['founder'];
}

export default function DoctorSection({ doctor }: DoctorSectionProps) {
  return (
    <section className="py-20 px-4 bg-white">
      <div className="container mx-auto max-w-7xl">
        <div className="grid lg:grid-cols-3 gap-12">
          {/* Left Column - Photo */}
          <div className="lg:col-span-1">
            <div className="sticky top-24">
              {/* Photo Placeholder */}
              <div className="relative h-[400px] lg:h-[500px] bg-gradient-to-br from-[var(--backdrop-primary)] to-[var(--backdrop-secondary)] rounded-2xl overflow-hidden shadow-xl">
                <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-green-600/10 to-amber-600/10">
                  <div className="text-center">
                    <div className="text-8xl mb-4">👨‍⚕️</div>
                    <p className="text-gray-700 font-semibold text-subheading">{doctor.name}</p>
                    <p className="text-gray-600 text-small">{doctor.title}</p>
                  </div>
                  {/* Replace with actual image:
                  <Image
                    src="/images/dr-huang.jpg"
                    alt="Dr. Huang"
                    fill
                    className="object-cover"
                  />
                  */}
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Bio & Credentials */}
          <div className="lg:col-span-2">
            <div className="mb-8">
              <h2 className="text-heading font-bold text-gray-900 mb-2">Meet {doctor.name}</h2>
              <p className="text-subheading text-[var(--brand)] font-medium">{doctor.title}</p>
            </div>

            {/* Bio */}
            <div className="space-y-4 mb-8">
              {doctor.bio.map((paragraph, idx) => (
                <p key={idx} className="text-gray-700 leading-relaxed">
                  {paragraph}
                </p>
              ))}
            </div>

            {/* Specialties */}
            <div className="mb-8 p-6 bg-gradient-to-br from-[var(--backdrop-primary)] to-[var(--backdrop-secondary)] rounded-xl">
              <h3 className="text-subheading font-bold text-gray-900 mb-4">Areas of Expertise</h3>
              <div className="flex flex-wrap gap-2">
                {doctor.specialties.map((specialty, idx) => (
                  <Chip key={idx} variant="primary" size="md">
                    {specialty}
                  </Chip>
                ))}
              </div>
            </div>

            {/* Education */}
            <div className="mb-8">
              <h3 className="text-subheading font-bold text-gray-900 mb-4 flex items-center gap-2">
                <GraduationCap className="w-5 h-5 text-[var(--brand)]" />
                Education
              </h3>
              <div className="space-y-3">
                {doctor.education.map((edu, idx) => (
                  <div key={idx} className="flex items-start gap-3 p-4 bg-gray-50 rounded-lg">
                    <div className="w-2 h-2 rounded-full bg-[var(--brand)] mt-2 shrink-0"></div>
                    <div className="flex-1">
                      <p className="font-semibold text-gray-900">{edu.degree}</p>
                      <p className="text-small text-gray-600">{edu.school}</p>
                      <p className="text-smallall text-gray-500">{edu.year}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Credentials */}
            <div>
              <h3 className="text-subheading font-bold text-gray-900 mb-4 flex items-center gap-2">
                <Award className="w-5 h-5 text-[var(--brand)]" />
                Certifications & Credentials
              </h3>
              <div className="grid sm:grid-cols-2 gap-4">
                {doctor.credentials.map((cred) => (
                  <div
                    key={cred.id}
                    className="p-4 border-2 border-gray-200 rounded-lg hover:border-[var(--brand)] transition-colors"
                  >
                    <p className="font-semibold text-gray-900 text-small mb-1">{cred.title}</p>
                    {cred.organization && (
                      <p className="text-smallall text-[var(--brand)] font-medium">{cred.organization}</p>
                    )}
                    {cred.year && (
                      <p className="text-smallall text-gray-500 mt-1">{cred.year}</p>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

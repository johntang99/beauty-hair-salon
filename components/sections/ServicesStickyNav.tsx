'use client';

import { useEffect, useState } from 'react';
import type { Modality } from '@/lib/modalities';

interface ServicesStickyNavProps {
  modalities: Modality[];
}

export default function ServicesStickyNav({ modalities }: ServicesStickyNavProps) {
  const [activeId, setActiveId] = useState<string>('');

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      { rootMargin: '-20% 0px -70% 0px' }
    );

    modalities.forEach((modality) => {
      const element = document.getElementById(modality.id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, [modalities]);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 100;
      const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
      window.scrollTo({
        top: elementPosition - offset,
        behavior: 'smooth',
      });
    }
  };

  return (
    <nav className="sticky top-[73px] z-40 bg-white border-b border-gray-200 shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex gap-2 overflow-x-auto py-4 scrollbar-hide">
          {modalities.map((modality) => (
            <button
              key={modality.id}
              onClick={() => scrollToSection(modality.id)}
              className={`px-4 py-2 rounded-lg text-small font-medium whitespace-nowrap transition-colors ${
                activeId === modality.id
                  ? 'bg-[var(--brand)] text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {modality.name}
            </button>
          ))}
        </div>
      </div>
    </nav>
  );
}

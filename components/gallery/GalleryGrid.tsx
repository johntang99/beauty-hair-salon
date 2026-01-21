'use client';

import { useState } from 'react';
import type { GalleryImage } from '@/lib/gallery';
import Chip from '@/components/ui/Chip';

interface GalleryGridProps {
  images: GalleryImage[];
  categories: string[];
}

export default function GalleryGrid({ images, categories }: GalleryGridProps) {
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);

  const filteredImages = activeCategory === 'All' 
    ? images 
    : images.filter(img => img.category === activeCategory);

  return (
    <>
      {/* Category Filters */}
      {categories.length > 0 && (
        <div className="mb-8">
          <div className="flex flex-wrap gap-2 justify-center">
            <button
              onClick={() => setActiveCategory('All')}
              className={`px-4 py-2 rounded-lg text-small font-semibold transition-colors ${
                activeCategory === 'All'
                  ? 'bg-[var(--brand)] text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              All Photos ({images.length})
            </button>
            {categories.map((category) => {
              const count = images.filter(img => img.category === category).length;
              return (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={`px-4 py-2 rounded-lg text-small font-semibold transition-colors capitalize ${
                    activeCategory === category
                      ? 'bg-[var(--brand)] text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {category} ({count})
                </button>
              );
            })}
          </div>
        </div>
      )}

      {/* Image Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredImages.map((image) => (
          <div
            key={image.id}
            onClick={() => setSelectedImage(image)}
            className="group cursor-pointer bg-white border-2 border-gray-200 rounded-xl overflow-hidden hover:border-[var(--brand)] hover:shadow-xl transition-all duration-300"
          >
            {/* Image Container */}
            <div className="aspect-[4/3] bg-gradient-to-br from-[var(--backdrop-primary)] to-[var(--backdrop-secondary)] relative overflow-hidden">
              <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-green-600/10 to-amber-600/10">
                <div className="text-center p-6">
                  <div className="text-display mb-4 opacity-30">📸</div>
                  <p className="text-gray-600 text-small font-medium">{image.alt}</p>
                  <p className="text-smallall text-gray-500 mt-2">Click to view</p>
                </div>
              </div>
              {/* Overlay on hover */}
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300 flex items-center justify-center">
                <span className="opacity-0 group-hover:opacity-100 transition-opacity text-white font-semibold bg-[var(--brand)] px-4 py-2 rounded-lg">
                  View Photo
                </span>
              </div>
              {/* Replace with actual image:
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
              */}
            </div>

            {/* Caption */}
            <div className="p-4">
              <p className="text-gray-900 font-medium mb-2 group-hover:text-[var(--brand)] transition-colors">
                {image.alt}
              </p>
              <Chip variant="default" size="sm">{image.category}</Chip>
            </div>
          </div>
        ))}
      </div>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div 
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative max-w-5xl w-full">
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute -top-12 right-0 text-white hover:text-gray-300 text-small font-semibold"
            >
              Close ✕
            </button>
            <div className="bg-white rounded-2xl overflow-hidden shadow-2xl">
              <div className="aspect-[16/10] bg-gradient-to-br from-[var(--backdrop-primary)] to-[var(--backdrop-secondary)] relative">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-9xl mb-4 opacity-20">📸</div>
                    <p className="text-gray-600 font-medium">{selectedImage.alt}</p>
                  </div>
                </div>
                {/* Replace with actual image:
                <Image
                  src={selectedImage.src}
                  alt={selectedImage.alt}
                  fill
                  className="object-contain"
                />
                */}
              </div>
              <div className="p-6 bg-white">
                <p className="text-subheading font-semibold text-gray-900 mb-2">{selectedImage.alt}</p>
                <Chip variant="secondary" size="sm">{selectedImage.category}</Chip>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

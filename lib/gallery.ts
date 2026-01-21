export interface GalleryImage {
  id: string;
  src: string;
  alt: string;
  category: string;
  featured?: boolean;
}

export const galleryImages: GalleryImage[] = [
  // Clinic Exterior & Reception
  {
    id: 'exterior-1',
    src: '/images/gallery/clinic-exterior.jpg',
    alt: 'Dr Huang Clinic exterior on East Main Street',
    category: 'Exterior',
    featured: true,
  },
  {
    id: 'reception-1',
    src: '/images/gallery/reception-area.jpg',
    alt: 'Welcoming reception area with comfortable seating',
    category: 'Reception',
    featured: true,
  },
  {
    id: 'entrance-1',
    src: '/images/gallery/entrance.jpg',
    alt: 'Accessible entrance with wheelchair access',
    category: 'Exterior',
  },

  // Treatment Rooms
  {
    id: 'treatment-1',
    src: '/images/gallery/treatment-room-1.jpg',
    alt: 'Peaceful treatment room with acupuncture table',
    category: 'Treatment Rooms',
    featured: true,
  },
  {
    id: 'treatment-2',
    src: '/images/gallery/treatment-room-2.jpg',
    alt: 'Private treatment room with calming ambiance',
    category: 'Treatment Rooms',
  },
  {
    id: 'treatment-3',
    src: '/images/gallery/treatment-room-3.jpg',
    alt: 'Treatment room with natural lighting',
    category: 'Treatment Rooms',
  },

  // Equipment & Supplies
  {
    id: 'equipment-1',
    src: '/images/gallery/acupuncture-needles.jpg',
    alt: 'Sterile acupuncture needles and supplies',
    category: 'Equipment',
  },
  {
    id: 'equipment-2',
    src: '/images/gallery/cupping-equipment.jpg',
    alt: 'Cupping therapy equipment and supplies',
    category: 'Equipment',
  },
  {
    id: 'equipment-3',
    src: '/images/gallery/herbal-pharmacy.jpg',
    alt: 'Chinese herbal pharmacy with traditional herbs',
    category: 'Equipment',
    featured: true,
  },
  {
    id: 'equipment-4',
    src: '/images/gallery/moxa-supplies.jpg',
    alt: 'Moxibustion supplies and materials',
    category: 'Equipment',
  },

  // Treatment Details
  {
    id: 'detail-1',
    src: '/images/gallery/acupuncture-treatment.jpg',
    alt: 'Close-up of acupuncture treatment',
    category: 'Treatments',
  },
  {
    id: 'detail-2',
    src: '/images/gallery/pulse-diagnosis.jpg',
    alt: 'Traditional pulse diagnosis technique',
    category: 'Treatments',
  },
  {
    id: 'detail-3',
    src: '/images/gallery/herbal-consultation.jpg',
    alt: 'Herbal medicine consultation',
    category: 'Treatments',
  },

  // Atmosphere
  {
    id: 'atmosphere-1',
    src: '/images/gallery/waiting-area.jpg',
    alt: 'Comfortable waiting area with plants',
    category: 'Reception',
  },
  {
    id: 'atmosphere-2',
    src: '/images/gallery/hallway.jpg',
    alt: 'Clean, peaceful clinic hallway',
    category: 'Exterior',
  },
];

// Utility functions
export function getGalleryImagesByCategory(category: string): GalleryImage[] {
  return galleryImages.filter((img) => img.category === category);
}

export function getFeaturedImages(): GalleryImage[] {
  return galleryImages.filter((img) => img.featured);
}

export function getAllCategories(): string[] {
  return Array.from(new Set(galleryImages.map((img) => img.category)));
}

export default galleryImages;

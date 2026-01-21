// Beauty & Hair Services for The Beauty Cares
// Complete service catalog with detailed information

export interface Service {
  id: string;
  slug: string;
  name: string;
  category: 'beauty' | 'hair';
  tagline: string;
  description: string;
  processSteps: {
    step: number;
    title: string;
    description: string;
    duration: string;
  }[];
  duration: string;
  price: {
    from: number;
    to?: number;
    note?: string;
  };
  icon: string;
  featured?: boolean;
  benefits: string[];
}

export const services: Service[] = [
  // ========================================
  // BEAUTY SERVICES
  // ========================================
  {
    id: '1',
    slug: 'facials-skincare',
    name: 'Facials & Skincare',
    category: 'beauty',
    tagline: 'Radiant, healthy skin',
    description:
      'Customized facial treatments tailored to your skin type and concerns. Our expert estheticians use premium products and techniques to cleanse, exfoliate, and nourish your skin for a glowing complexion.',
    processSteps: [
      {
        step: 1,
        title: 'Skin Analysis',
        description: 'Comprehensive assessment of your skin type, concerns, and goals',
        duration: '10 min',
      },
      {
        step: 2,
        title: 'Deep Cleansing',
        description: 'Thorough cleansing to remove impurities and prepare skin',
        duration: '10 min',
      },
      {
        step: 3,
        title: 'Exfoliation & Treatment',
        description: 'Customized exfoliation and targeted treatment application',
        duration: '20 min',
      },
      {
        step: 4,
        title: 'Facial Massage',
        description: 'Relaxing massage to improve circulation and product absorption',
        duration: '10 min',
      },
      {
        step: 5,
        title: 'Mask & Moisturize',
        description: 'Nourishing mask and hydrating moisturizer application',
        duration: '10 min',
      },
    ],
    duration: '60-90 min',
    price: {
      from: 85,
      to: 150,
      note: 'Varies by treatment type',
    },
    icon: 'sparkles',
    featured: true,
    benefits: [
      'Deep cleansing and exfoliation',
      'Improved skin texture and tone',
      'Hydration and nourishment',
      'Stress relief and relaxation',
      'Anti-aging benefits',
    ],
  },
  {
    id: '2',
    slug: 'makeup-application',
    name: 'Makeup Application',
    category: 'beauty',
    tagline: 'Look your absolute best',
    description:
      'Professional makeup application for any occasion. From natural everyday looks to glamorous evening makeup, our makeup artists create the perfect look to enhance your natural beauty.',
    processSteps: [
      {
        step: 1,
        title: 'Consultation',
        description: 'Discuss the look you want and the occasion',
        duration: '10 min',
      },
      {
        step: 2,
        title: 'Skin Prep',
        description: 'Cleanse and prime skin for flawless makeup application',
        duration: '10 min',
      },
      {
        step: 3,
        title: 'Foundation & Complexion',
        description: 'Apply foundation, concealer, and contour',
        duration: '15 min',
      },
      {
        step: 4,
        title: 'Eyes & Brows',
        description: 'Eye makeup and brow shaping/filling',
        duration: '15 min',
      },
      {
        step: 5,
        title: 'Finishing Touches',
        description: 'Lips, blush, highlight, and setting spray',
        duration: '10 min',
      },
    ],
    duration: '45-60 min',
    price: {
      from: 75,
      to: 125,
      note: 'Add airbrush for +$25',
    },
    icon: 'palette',
    featured: true,
    benefits: [
      'Professional, long-lasting makeup',
      'Customized to your features',
      'High-quality products',
      'Perfect for photos',
      'Complimentary touch-up kit',
    ],
  },
  {
    id: '3',
    slug: 'microblading',
    name: 'Microblading',
    category: 'beauty',
    tagline: 'Perfect brows, every day',
    description:
      'Semi-permanent eyebrow enhancement using fine strokes that mimic natural hair. Wake up with perfect brows that last 1-3 years. Includes consultation, mapping, and touch-up.',
    processSteps: [
      {
        step: 1,
        title: 'Consultation & Design',
        description: 'Discuss desired shape, color, and style',
        duration: '15 min',
      },
      {
        step: 2,
        title: 'Brow Mapping',
        description: 'Precise measurements and drawing of brow shape',
        duration: '15 min',
      },
      {
        step: 3,
        title: 'Numbing',
        description: 'Apply topical anesthetic for comfort',
        duration: '20 min',
      },
      {
        step: 4,
        title: 'Microblading',
        description: 'Create hair-like strokes with specialized tool',
        duration: '60 min',
      },
      {
        step: 5,
        title: 'Aftercare Instructions',
        description: 'Review healing process and care guidelines',
        duration: '10 min',
      },
    ],
    duration: '2-2.5 hours',
    price: {
      from: 450,
      to: 600,
      note: 'Includes 6-week touch-up',
    },
    icon: 'edit',
    benefits: [
      'Natural-looking brows',
      'Long-lasting (1-3 years)',
      'Saves daily makeup time',
      'Waterproof and smudge-proof',
      'Customized shape and color',
    ],
  },
  {
    id: '4',
    slug: 'lash-extensions',
    name: 'Lash Extensions',
    category: 'beauty',
    tagline: 'Gorgeous, full lashes',
    description:
      'Individual lash extensions applied to each natural lash for stunning length, volume, and curl. Choose from classic, hybrid, or volume sets. Lasts 3-4 weeks with proper care.',
    processSteps: [
      {
        step: 1,
        title: 'Consultation',
        description: 'Select style, length, and curl type',
        duration: '10 min',
      },
      {
        step: 2,
        title: 'Preparation',
        description: 'Cleanse lashes and apply under-eye patches',
        duration: '5 min',
      },
      {
        step: 3,
        title: 'Application',
        description: 'Carefully apply individual extensions',
        duration: '90-120 min',
      },
      {
        step: 4,
        title: 'Finishing',
        description: 'Final check and lash sealing',
        duration: '5 min',
      },
      {
        step: 5,
        title: 'Aftercare',
        description: 'Care instructions and maintenance tips',
        duration: '5 min',
      },
    ],
    duration: '1.5-2 hours',
    price: {
      from: 150,
      to: 300,
      note: 'Classic to Volume',
    },
    icon: 'eye',
    featured: true,
    benefits: [
      'Wake up with perfect lashes',
      'No mascara needed',
      'Customizable length and volume',
      'Lasts 3-4 weeks',
      'Safe for sensitive eyes',
    ],
  },
  {
    id: '5',
    slug: 'waxing-hair-removal',
    name: 'Waxing & Hair Removal',
    category: 'beauty',
    tagline: 'Smooth, silky skin',
    description:
      'Professional waxing services for face and body. Using high-quality, gentle waxes suitable for all skin types. Quick, effective, and long-lasting results.',
    processSteps: [
      {
        step: 1,
        title: 'Consultation',
        description: 'Discuss areas and any skin sensitivities',
        duration: '5 min',
      },
      {
        step: 2,
        title: 'Skin Preparation',
        description: 'Cleanse and prepare the treatment area',
        duration: '5 min',
      },
      {
        step: 3,
        title: 'Waxing',
        description: 'Apply and remove wax for hair removal',
        duration: '15-30 min',
      },
      {
        step: 4,
        title: 'Soothing Treatment',
        description: 'Apply calming lotion to reduce redness',
        duration: '5 min',
      },
    ],
    duration: '15-45 min',
    price: {
      from: 15,
      to: 75,
      note: 'Varies by area',
    },
    icon: 'star',
    benefits: [
      'Smooth skin for 3-6 weeks',
      'Finer hair regrowth over time',
      'Quick and efficient',
      'Less irritation than shaving',
      'Professional technique',
    ],
  },
  {
    id: '6',
    slug: 'skin-treatments',
    name: 'Advanced Skin Treatments',
    category: 'beauty',
    tagline: 'Targeted skin solutions',
    description:
      'Specialized treatments for specific skin concerns including chemical peels, microdermabrasion, LED therapy, and anti-aging treatments. Visible results with minimal downtime.',
    processSteps: [
      {
        step: 1,
        title: 'Skin Assessment',
        description: 'Analyze skin and determine best treatment',
        duration: '15 min',
      },
      {
        step: 2,
        title: 'Preparation',
        description: 'Cleanse and prepare skin for treatment',
        duration: '10 min',
      },
      {
        step: 3,
        title: 'Treatment Application',
        description: 'Apply chosen treatment (peel, micro, LED, etc)',
        duration: '30 min',
      },
      {
        step: 4,
        title: 'Post-Treatment Care',
        description: 'Soothing products and sun protection',
        duration: '10 min',
      },
    ],
    duration: '60 min',
    price: {
      from: 100,
      to: 250,
      note: 'Based on treatment',
    },
    icon: 'zap',
    benefits: [
      'Improved skin texture',
      'Reduced fine lines and wrinkles',
      'Even skin tone',
      'Minimized pores',
      'Brighter complexion',
    ],
  },

  // ========================================
  // HAIR SERVICES
  // ========================================
  {
    id: '7',
    slug: 'haircuts-styling',
    name: 'Haircuts & Styling',
    category: 'hair',
    tagline: 'The perfect cut for you',
    description:
      'Precision haircuts and styling by expert stylists. From classic cuts to trendy styles, we create the perfect look that complements your face shape, hair type, and lifestyle.',
    processSteps: [
      {
        step: 1,
        title: 'Consultation',
        description: 'Discuss your desired style and lifestyle needs',
        duration: '10 min',
      },
      {
        step: 2,
        title: 'Shampoo & Condition',
        description: 'Luxurious hair wash and conditioning treatment',
        duration: '10 min',
      },
      {
        step: 3,
        title: 'Precision Cutting',
        description: 'Expert cutting technique for your style',
        duration: '30 min',
      },
      {
        step: 4,
        title: 'Styling',
        description: 'Professional blow-dry and finishing',
        duration: '20 min',
      },
    ],
    duration: '60-75 min',
    price: {
      from: 65,
      to: 150,
      note: 'Based on stylist level',
    },
    icon: 'scissors',
    featured: true,
    benefits: [
      'Customized to your features',
      'Expert cutting techniques',
      'Style education and tips',
      'Complimentary styling',
      'Premium hair products',
    ],
  },
  {
    id: '8',
    slug: 'hair-coloring',
    name: 'Hair Coloring',
    category: 'hair',
    tagline: 'Vibrant, beautiful color',
    description:
      'Full hair color services including all-over color, root touch-ups, color correction, and fashion colors. We use premium, ammonia-free formulas for healthy, vibrant results.',
    processSteps: [
      {
        step: 1,
        title: 'Color Consultation',
        description: 'Determine desired color and assess hair condition',
        duration: '15 min',
      },
      {
        step: 2,
        title: 'Preparation',
        description: 'Protect clothing and prepare color formula',
        duration: '10 min',
      },
      {
        step: 3,
        title: 'Color Application',
        description: 'Precise application of color to hair',
        duration: '45 min',
      },
      {
        step: 4,
        title: 'Processing',
        description: 'Allow color to develop',
        duration: '30-45 min',
      },
      {
        step: 5,
        title: 'Shampoo & Style',
        description: 'Wash, condition, and style your new color',
        duration: '30 min',
      },
    ],
    duration: '2-3 hours',
    price: {
      from: 85,
      to: 250,
      note: 'Varies by length and complexity',
    },
    icon: 'droplet',
    featured: true,
    benefits: [
      'Rich, vibrant color',
      'Gray coverage',
      'Ammonia-free options',
      'Color-safe products',
      'Long-lasting results',
    ],
  },
  {
    id: '9',
    slug: 'highlights-balayage',
    name: 'Highlights & Balayage',
    category: 'hair',
    tagline: 'Sun-kissed perfection',
    description:
      'Beautiful dimensional color through highlights, lowlights, and balayage techniques. Hand-painted for natural-looking results that grow out gracefully.',
    processSteps: [
      {
        step: 1,
        title: 'Style Consultation',
        description: 'Choose placement, tone, and technique',
        duration: '15 min',
      },
      {
        step: 2,
        title: 'Sectioning',
        description: 'Divide hair for precise placement',
        duration: '10 min',
      },
      {
        step: 3,
        title: 'Application',
        description: 'Hand-paint or foil color placement',
        duration: '60-90 min',
      },
      {
        step: 4,
        title: 'Processing',
        description: 'Allow color to develop to perfection',
        duration: '30-45 min',
      },
      {
        step: 5,
        title: 'Tone & Style',
        description: 'Toner application, wash, and styling',
        duration: '45 min',
      },
    ],
    duration: '3-4 hours',
    price: {
      from: 150,
      to: 350,
      note: 'Full or partial',
    },
    icon: 'sun',
    featured: true,
    benefits: [
      'Natural-looking dimension',
      'Low maintenance',
      'Customized placement',
      'Grows out gracefully',
      'Adds depth and movement',
    ],
  },
  {
    id: '10',
    slug: 'hair-treatments',
    name: 'Hair Treatments',
    category: 'hair',
    tagline: 'Restore and strengthen',
    description:
      'Deep conditioning treatments including keratin treatments, protein treatments, and intensive moisture masks. Repair damage, add shine, and improve hair health.',
    processSteps: [
      {
        step: 1,
        title: 'Hair Analysis',
        description: 'Assess hair condition and treatment needs',
        duration: '10 min',
      },
      {
        step: 2,
        title: 'Clarifying Shampoo',
        description: 'Deep cleanse to prepare for treatment',
        duration: '10 min',
      },
      {
        step: 3,
        title: 'Treatment Application',
        description: 'Apply treatment product throughout hair',
        duration: '15 min',
      },
      {
        step: 4,
        title: 'Processing',
        description: 'Allow treatment to penetrate and work',
        duration: '20-30 min',
      },
      {
        step: 5,
        title: 'Rinse & Style',
        description: 'Rinse and style to reveal results',
        duration: '20 min',
      },
    ],
    duration: '60-90 min',
    price: {
      from: 75,
      to: 300,
      note: 'Keratin smoothing is higher',
    },
    icon: 'leaf',
    benefits: [
      'Repairs damaged hair',
      'Adds shine and softness',
      'Reduces frizz',
      'Strengthens hair',
      'Long-lasting results',
    ],
  },
  {
    id: '11',
    slug: 'special-event-styling',
    name: 'Special Event Styling',
    category: 'hair',
    tagline: 'Picture-perfect styles',
    description:
      'Professional hairstyling for weddings, proms, parties, and special occasions. From elegant updos to romantic curls, we create stunning styles that last all day.',
    processSteps: [
      {
        step: 1,
        title: 'Style Consultation',
        description: 'Discuss event, outfit, and desired look',
        duration: '15 min',
      },
      {
        step: 2,
        title: 'Hair Preparation',
        description: 'Wash, condition, and prep hair',
        duration: '15 min',
      },
      {
        step: 3,
        title: 'Styling',
        description: 'Create the chosen hairstyle',
        duration: '45-60 min',
      },
      {
        step: 4,
        title: 'Finishing',
        description: 'Add accessories and finishing spray',
        duration: '10 min',
      },
    ],
    duration: '75-90 min',
    price: {
      from: 85,
      to: 200,
      note: 'Trial run available',
    },
    icon: 'star',
    benefits: [
      'Long-lasting style',
      'Professional finish',
      'Customized to your event',
      'Complements your outfit',
      'Trial available for bridal',
    ],
  },
  {
    id: '12',
    slug: 'hair-extensions',
    name: 'Hair Extensions',
    category: 'hair',
    tagline: 'Instant length and volume',
    description:
      'Premium hair extensions including tape-in, sew-in, and clip-in options. Add length, volume, or both with natural-looking, high-quality extensions.',
    processSteps: [
      {
        step: 1,
        title: 'Consultation',
        description: 'Determine goals, method, and color match',
        duration: '20 min',
      },
      {
        step: 2,
        title: 'Preparation',
        description: 'Shampoo and section hair',
        duration: '15 min',
      },
      {
        step: 3,
        title: 'Installation',
        description: 'Apply extensions using chosen method',
        duration: '90-180 min',
      },
      {
        step: 4,
        title: 'Blending',
        description: 'Cut and style to blend seamlessly',
        duration: '30 min',
      },
      {
        step: 5,
        title: 'Care Instructions',
        description: 'Learn how to care for your extensions',
        duration: '10 min',
      },
    ],
    duration: '2.5-4 hours',
    price: {
      from: 300,
      to: 1200,
      note: 'Includes hair and installation',
    },
    icon: 'maximize',
    benefits: [
      'Instant length and volume',
      'Natural-looking results',
      'Lasts 6-12 weeks',
      'High-quality human hair',
      'Multiple application methods',
    ],
  },

  // ========================================
  // SPECIALTY SERVICES
  // ========================================
  {
    id: '13',
    slug: 'bridal-packages',
    name: 'Bridal Packages',
    category: 'beauty',
    tagline: 'Your perfect wedding day',
    description:
      'Complete bridal beauty packages including trial, wedding day hair and makeup, and bridal party services. Look stunning on your special day with our expert team.',
    processSteps: [
      {
        step: 1,
        title: 'Initial Consultation',
        description: 'Discuss vision, timeline, and services needed',
        duration: '30 min',
      },
      {
        step: 2,
        title: 'Trial Session',
        description: 'Practice run of hair and makeup',
        duration: '2 hours',
      },
      {
        step: 3,
        title: 'Wedding Day Prep',
        description: 'Arrive early for setup and preparation',
        duration: '30 min',
      },
      {
        step: 4,
        title: 'Bridal Beauty',
        description: 'Hair, makeup, and final touches',
        duration: '2-3 hours',
      },
      {
        step: 5,
        title: 'Touch-Ups',
        description: 'Final check and touch-up kit provided',
        duration: '15 min',
      },
    ],
    duration: 'Full day service',
    price: {
      from: 500,
      to: 1500,
      note: 'Packages available',
    },
    icon: 'heart',
    featured: true,
    benefits: [
      'Trial session included',
      'Expert bridal stylists',
      'Long-lasting makeup',
      'Bridal party services',
      'Touch-up kit provided',
    ],
  },
  {
    id: '14',
    slug: 'mens-grooming',
    name: "Men's Grooming",
    category: 'hair',
    tagline: 'Sharp cuts and clean grooming',
    description:
      "Professional men's haircuts, beard trims, and grooming services. From classic cuts to modern styles, we keep you looking sharp and well-groomed.",
    processSteps: [
      {
        step: 1,
        title: 'Consultation',
        description: 'Discuss style preferences and maintenance',
        duration: '5 min',
      },
      {
        step: 2,
        title: 'Wash',
        description: 'Shampoo and scalp massage',
        duration: '5 min',
      },
      {
        step: 3,
        title: 'Cutting & Trimming',
        description: 'Precision haircut and beard trim',
        duration: '30 min',
      },
      {
        step: 4,
        title: 'Styling',
        description: 'Style and product application',
        duration: '10 min',
      },
    ],
    duration: '45-60 min',
    price: {
      from: 45,
      to: 85,
      note: 'Add beard trim +$20',
    },
    icon: 'user',
    benefits: [
      'Expert cutting techniques',
      'Professional grooming',
      'Quick service',
      'Style guidance',
      'Premium products',
    ],
  },
  {
    id: '15',
    slug: 'blowout-styling',
    name: 'Blowout & Quick Styling',
    category: 'hair',
    tagline: 'Quick, gorgeous styling',
    description:
      'Professional blow-dry and styling service. Perfect for a quick refresh, special event, or weekly maintenance. Leave with smooth, bouncy, salon-perfect hair.',
    processSteps: [
      {
        step: 1,
        title: 'Shampoo & Condition',
        description: 'Cleanse with premium products',
        duration: '10 min',
      },
      {
        step: 2,
        title: 'Product Application',
        description: 'Apply heat protectant and styling products',
        duration: '5 min',
      },
      {
        step: 3,
        title: 'Blow-Dry & Style',
        description: 'Professional blow-dry technique',
        duration: '30 min',
      },
      {
        step: 4,
        title: 'Finishing',
        description: 'Final touches and finishing spray',
        duration: '5 min',
      },
    ],
    duration: '45-50 min',
    price: {
      from: 45,
      to: 75,
      note: 'Add curls +$15',
    },
    icon: 'wind',
    benefits: [
      'Quick service',
      'Professional results',
      'Lasts several days',
      'Volume and shine',
      'Great for any occasion',
    ],
  },
];

// Helper functions
export const getServicesByCategory = (category: 'beauty' | 'hair') => {
  return services.filter((service) => service.category === category);
};

export const getFeaturedServices = () => {
  return services.filter((service) => service.featured);
};

export const getServiceBySlug = (slug: string) => {
  return services.find((service) => service.slug === slug);
};

export const beautyServices = getServicesByCategory('beauty');
export const hairServices = getServicesByCategory('hair');
export const featuredServices = getFeaturedServices();

export default services;

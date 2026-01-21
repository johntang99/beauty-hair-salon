// Beauty Transformation Case Studies for The Beauty Cares

export interface BeautyTransformation {
  id: string;
  slug: string;
  title: string;
  category: 'hair' | 'beauty' | 'bridal' | 'complete';
  clientAge?: string;
  gender?: string;
  duration: string; // How long the transformation took
  overview: string;
  concerns: string[]; // Client's initial concerns
  servicesUsed: string[];
  productsUsed: string[];
  stylist: string;
  outcome: string;
  testimonial?: string;
  featured?: boolean;
  hasBeforeImage: boolean;
  hasAfterImage: boolean;
  beforeImagePath?: string;
  afterImagePath?: string;
  multipleAngles?: {
    before: string[];
    after: string[];
  };
}

export const beautyTransformations: BeautyTransformation[] = [
  {
    id: '1',
    slug: 'complete-bridal-transformation',
    title: 'Complete Bridal Transformation',
    category: 'bridal',
    clientAge: '28',
    duration: '8-week timeline',
    overview:
      'Jennifer came to us 8 weeks before her wedding day wanting to look and feel her absolute best. We created a comprehensive plan including skincare prep, hair color refresh, and a trial for her wedding day hair and makeup.',
    concerns: [
      'Wanted glowing, camera-ready skin',
      'Needed hair color refresh',
      'Wanted long-lasting makeup',
      'Nervous about wedding day timeline',
    ],
    servicesUsed: [
      'Series of 4 facials (weekly)',
      'Balayage touch-up',
      'Haircut and treatment',
      'Bridal makeup trial',
      'Wedding day hair & makeup',
    ],
    productsUsed: [
      'Vitamin C Serum',
      'Intensive Repair Hair Mask',
      'Long-wear makeup products',
      'Touch-up kit',
    ],
    stylist: 'Sophia Martinez & Ava Williams',
    outcome:
      'Jennifer looked absolutely radiant on her wedding day. Her skin was glowing, hair was healthy and perfectly styled, and her makeup lasted through the ceremony, photos, and reception. She felt confident and beautiful, and the photos are stunning.',
    testimonial:
      'I felt like the most beautiful version of myself. The 8-week prep made such a difference, and on the day, everything was perfect. Ava and Sophia are true artists!',
    featured: true,
    hasBeforeImage: true,
    hasAfterImage: true,
    beforeImagePath: '/images/transformations/bridal-before.jpg',
    afterImagePath: '/images/transformations/bridal-after.jpg',
    multipleAngles: {
      before: [
        '/images/transformations/bridal-before-1.jpg',
        '/images/transformations/bridal-before-2.jpg',
        '/images/transformations/bridal-before-3.jpg',
      ],
      after: [
        '/images/transformations/bridal-after-1.jpg',
        '/images/transformations/bridal-after-2.jpg',
        '/images/transformations/bridal-after-3.jpg',
      ],
    },
  },
  {
    id: '2',
    slug: 'gray-coverage-color-refresh',
    title: 'Gray Coverage & Dimensional Color',
    category: 'hair',
    clientAge: '56',
    duration: 'Single session (3.5 hours)',
    overview:
      'Maria had been coloring her gray hair at home but was frustrated with flat, one-dimensional color and visible roots. She wanted a more natural, sophisticated look that would require less frequent maintenance.',
    concerns: [
      'Full gray hair showing through',
      'Flat, unnatural-looking color',
      'Frequent root touch-ups needed',
      'Hair felt dry and damaged',
    ],
    servicesUsed: [
      'Full color with gray coverage',
      'Dimensional lowlights',
      'Haircut',
      'Deep conditioning treatment',
    ],
    productsUsed: [
      'Ammonia-free color formula',
      'Intensive Repair Hair Mask',
      'Color-safe shampoo & conditioner',
    ],
    stylist: 'Sophia Martinez',
    outcome:
      'Maria now has beautiful, natural-looking color with dimension and movement. The multi-tonal approach covers gray completely while looking sophisticated and youthful. Her hair is also healthier thanks to the professional products and treatment.',
    testimonial:
      'I\'m so happy with my color! It looks natural, feels healthy, and I get so many compliments. Sophia is a true master colorist.',
    featured: true,
    hasBeforeImage: true,
    hasAfterImage: true,
    beforeImagePath: '/images/transformations/gray-coverage-before.jpg',
    afterImagePath: '/images/transformations/gray-coverage-after.jpg',
  },
  {
    id: '3',
    slug: 'damaged-hair-revival',
    title: 'Bleach Damage Repair & Revival',
    category: 'hair',
    clientAge: '24',
    duration: '6-month journey',
    overview:
      'Ashley came to us with severely damaged hair from repeated bleaching and heat styling. Her hair was breaking, extremely dry, and she had lost significant length. She was considering cutting it all off but wanted to see if it could be saved.',
    concerns: [
      'Severe breakage',
      'Extremely dry, brittle texture',
      'Significant split ends',
      'Lost several inches of length',
      'Hair color was brassy and uneven',
    ],
    servicesUsed: [
      'Color correction (3 sessions)',
      'Monthly deep conditioning treatments',
      'Keratin smoothing treatment',
      'Strategic trims every 6 weeks',
    ],
    productsUsed: [
      'Intensive Repair Hair Mask (weekly at home)',
      'Heat protectant spray',
      'Color-safe, sulfate-free products',
      'Leave-in conditioner',
    ],
    stylist: 'Olivia Chen',
    outcome:
      'After 6 months of dedicated treatments and at-home care, Ashley\'s hair has been completely transformed. It\'s healthy, shiny, strong, and back to a beautiful length. The color is even and dimensional, and the texture is smooth and manageable.',
    testimonial:
      'I can\'t believe this is my hair! Olivia saved it when I thought there was no hope. The transformation is incredible and I\'ve learned so much about proper hair care.',
    featured: true,
    hasBeforeImage: true,
    hasAfterImage: true,
    beforeImagePath: '/images/transformations/damage-before.jpg',
    afterImagePath: '/images/transformations/damage-after.jpg',
  },
  {
    id: '4',
    slug: 'dark-to-platinum-blonde',
    title: 'Dramatic Color Change: Dark to Platinum',
    category: 'hair',
    clientAge: '30',
    duration: '4 sessions over 3 months',
    overview:
      'Rachel had naturally dark brown hair and dreamed of going platinum blonde. She understood it would be a process and was committed to doing it right to maintain hair health. We created a multi-session plan to gradually lighten her hair safely.',
    concerns: [
      'Naturally very dark hair',
      'Concerned about damage',
      'Wanted platinum blonde',
      'Worried about maintenance',
    ],
    servicesUsed: [
      'Session 1: Partial highlight',
      'Session 2: Full highlight',
      'Session 3: Double process',
      'Session 4: Platinum toning',
      'Deep conditioning after each session',
    ],
    productsUsed: [
      'Professional lightener with Olaplex',
      'Purple shampoo & conditioner',
      'Intensive hair mask',
      'Color-depositing conditioner',
    ],
    stylist: 'Olivia Chen',
    outcome:
      'Rachel achieved her dream platinum blonde while maintaining healthy hair. The gradual process prevented damage, and her hair is shiny, soft, and the perfect icy blonde tone. She follows a maintenance schedule and her hair continues to look amazing.',
    testimonial:
      'Worth every minute of the process! My hair is the platinum blonde I\'ve always wanted, and it\'s still healthy. Olivia is a blonde specialist!',
    featured: true,
    hasBeforeImage: true,
    hasAfterImage: true,
    beforeImagePath: '/images/transformations/blonde-before.jpg',
    afterImagePath: '/images/transformations/blonde-after.jpg',
  },
  {
    id: '5',
    slug: 'acne-skin-transformation',
    title: 'Clear Skin: Acne Treatment Success',
    category: 'beauty',
    clientAge: '32',
    duration: '12-week program',
    overview:
      'Christina struggled with adult acne for years, trying countless products without success. We created a customized skincare program combining professional treatments with a proper at-home routine.',
    concerns: [
      'Active breakouts',
      'Acne scarring',
      'Uneven skin texture',
      'Hyperpigmentation',
      'Low confidence',
    ],
    servicesUsed: [
      'Weekly customized facials (first 6 weeks)',
      'Bi-weekly facials (last 6 weeks)',
      'Chemical peels (3 treatments)',
      'LED light therapy',
      'Extractions',
    ],
    productsUsed: [
      'Vitamin C serum',
      'Salicylic acid cleanser',
      'Retinol treatment',
      'Hydrating moisturizer',
      'SPF 50 sunscreen',
    ],
    stylist: 'Isabella Rose',
    outcome:
      'After 12 weeks, Christina\'s skin is dramatically clearer with minimal breakouts. Scarring has faded significantly, texture is smooth, and her complexion is even and glowing. She\'s confident going makeup-free for the first time in years.',
    testimonial:
      'Isabella changed my life. My skin has never looked this good. I finally feel confident without makeup. The program was worth every investment.',
    featured: true,
    hasBeforeImage: true,
    hasAfterImage: true,
    beforeImagePath: '/images/transformations/acne-before.jpg',
    afterImagePath: '/images/transformations/acne-after.jpg',
  },
  {
    id: '6',
    slug: 'short-to-long-extensions',
    title: 'Instant Length: Hair Extension Transformation',
    category: 'hair',
    clientAge: '27',
    duration: 'Single session (4 hours)',
    overview:
      'Nicole had a short bob and was growing out an unfortunate haircut. She had an important event coming up and wanted long, voluminous hair immediately. Hair extensions were the perfect solution.',
    concerns: [
      'Short hair from bad cut',
      'Wanted length for special event',
      'Thin hair lacking volume',
      'Concerned about natural look',
    ],
    servicesUsed: [
      'Tape-in hair extensions',
      'Color matching',
      'Blending cut',
      'Professional styling',
    ],
    productsUsed: [
      'Premium human hair extensions',
      'Extension-safe products',
      'Heat protectant',
    ],
    stylist: 'Emma Thompson',
    outcome:
      'Nicole went from a chin-length bob to long, flowing hair past her shoulders in one appointment. The extensions blend seamlessly with her natural hair, and the added volume is stunning. She loved them so much she keeps them maintained.',
    testimonial:
      'I can\'t believe the transformation! The extensions look completely natural and I get compliments constantly. Emma is an extension artist!',
    featured: false,
    hasBeforeImage: true,
    hasAfterImage: true,
    beforeImagePath: '/images/transformations/extensions-before.jpg',
    afterImagePath: '/images/transformations/extensions-after.jpg',
  },
  {
    id: '7',
    slug: 'anti-aging-facial-series',
    title: 'Anti-Aging Transformation: 10-Week Series',
    category: 'beauty',
    clientAge: '48',
    duration: '10-week series',
    overview:
      'Patricia wanted to address visible signs of aging including fine lines, wrinkles, loss of firmness, and age spots. We designed a comprehensive 10-week anti-aging facial series with advanced treatments.',
    concerns: [
      'Deep lines around eyes and mouth',
      'Loss of skin firmness',
      'Age spots and sun damage',
      'Dull complexion',
      'Enlarged pores',
    ],
    servicesUsed: [
      'Weekly anti-aging facials',
      'Microdermabrasion (3 sessions)',
      'Chemical peels (2 sessions)',
      'Collagen-boosting treatments',
      'Facial massage and lymphatic drainage',
    ],
    productsUsed: [
      'Vitamin C serum',
      'Retinol night cream',
      'Peptide moisturizer',
      'SPF protection',
      'Eye cream',
    ],
    stylist: 'Isabella Rose',
    outcome:
      'The results are remarkable. Fine lines are visibly reduced, skin is firmer and more lifted, age spots have faded significantly, and Patricia\'s complexion is radiant. She looks refreshed and years younger, and the results continue to improve with maintenance.',
    testimonial:
      'People keep asking if I\'ve had work done! My skin looks amazing. The 10-week series was transformative. I look like a younger version of myself.',
    featured: true,
    hasBeforeImage: true,
    hasAfterImage: true,
    beforeImagePath: '/images/transformations/antiaging-before.jpg',
    afterImagePath: '/images/transformations/antiaging-after.jpg',
  },
  {
    id: '8',
    slug: 'special-event-makeover',
    title: 'Prom Night Glam Transformation',
    category: 'complete',
    clientAge: '17',
    duration: 'Single session (2.5 hours)',
    overview:
      'Emma wanted to look absolutely stunning for her senior prom. We created a complete look with hair, makeup, and nails that complemented her dress and made her feel like a princess.',
    concerns: [
      'First time having professional makeup',
      'Wanted hair to last all night',
      'Worried about looking too different',
      'Needed to match her dress',
    ],
    servicesUsed: [
      'Special event hairstyling (romantic updo)',
      'Makeup application',
      'Lash application',
      'Nail services',
    ],
    productsUsed: [
      'Long-wear makeup',
      'Setting spray',
      'Professional styling products',
    ],
    stylist: 'Charlotte Lee & Ava Williams',
    outcome:
      'Emma looked absolutely breathtaking! The romantic updo with soft curls was elegant and age-appropriate, and the makeup enhanced her natural beauty while being camera-ready. Her hair and makeup lasted through the entire night of dancing, and she felt confident and beautiful.',
    testimonial:
      'I felt like a princess! Everyone said I looked beautiful. My hair and makeup were perfect and lasted all night. Best prom experience ever!',
    featured: false,
    hasBeforeImage: true,
    hasAfterImage: true,
    beforeImagePath: '/images/transformations/prom-before.jpg',
    afterImagePath: '/images/transformations/prom-after.jpg',
  },
];

// Utility functions
export function getTransformationBySlug(slug: string): BeautyTransformation | undefined {
  return beautyTransformations.find((t) => t.slug === slug);
}

export function getTransformationsByCategory(
  category: BeautyTransformation['category']
): BeautyTransformation[] {
  return beautyTransformations.filter((t) => t.category === category);
}

export function getFeaturedTransformations(): BeautyTransformation[] {
  return beautyTransformations.filter((t) => t.featured);
}

export function getAllTransformationSlugs(): string[] {
  return beautyTransformations.map((t) => t.slug);
}

export function getAllCategories(): string[] {
  const categories: BeautyTransformation['category'][] = ['hair', 'beauty', 'bridal', 'complete'];
  return categories;
}

// Legacy exports for compatibility
export interface CaseStudy extends BeautyTransformation {
  condition?: string;
}

export const caseStudies = beautyTransformations as CaseStudy[];

export function getCaseStudyBySlug(slug: string): CaseStudy | undefined {
  return getTransformationBySlug(slug);
}

export function getCaseStudiesByCategory(category: string): CaseStudy[] {
  return getTransformationsByCategory(category as BeautyTransformation['category']);
}

export default beautyTransformations;

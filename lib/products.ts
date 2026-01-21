// Beauty Products for The Beauty Cares
// Premium products available for purchase at the salon

export interface Product {
  id: string;
  slug: string;
  name: string;
  category: 'skincare' | 'haircare' | 'tools' | 'makeup';
  brand: string;
  price: number;
  salePrice?: number;
  description: string;
  benefits: string[];
  howToUse: string;
  ingredients?: string[];
  image: string; // Path to product image
  inStock: boolean;
  featured?: boolean;
  rating: number;
  reviewCount: number;
  size?: string;
}

export const products: Product[] = [
  {
    id: '1',
    slug: 'luxury-face-serum',
    name: 'Radiance Boost Vitamin C Serum',
    category: 'skincare',
    brand: 'BeautyCares Luxury',
    price: 89,
    description:
      'Our signature anti-aging serum combines powerful Vitamin C with hyaluronic acid to brighten, hydrate, and reduce the appearance of fine lines. This lightweight formula absorbs quickly and delivers visible results.',
    benefits: [
      'Brightens and evens skin tone',
      'Reduces fine lines and wrinkles',
      'Boosts collagen production',
      'Deep hydration',
      'Protects against environmental damage',
    ],
    howToUse:
      'Apply 3-4 drops to clean, dry skin morning and evening. Gently massage into face and neck. Follow with moisturizer and SPF during the day.',
    ingredients: [
      'Vitamin C (20%)',
      'Hyaluronic Acid',
      'Vitamin E',
      'Ferulic Acid',
      'Aloe Vera Extract',
    ],
    image: '/images/products/face-serum.jpg',
    inStock: true,
    featured: true,
    rating: 4.8,
    reviewCount: 127,
    size: '1 oz / 30ml',
  },
  {
    id: '2',
    slug: 'shampoo-conditioner-set',
    name: 'Professional Color-Safe Shampoo & Conditioner Duo',
    category: 'haircare',
    brand: 'BeautyCares Pro',
    price: 45,
    description:
      'Salon-quality shampoo and conditioner set formulated without sulfates or parabens. Gentle cleansing that preserves color vibrancy while nourishing and strengthening hair from root to tip.',
    benefits: [
      'Color-safe formula',
      'Sulfate and paraben-free',
      'Strengthens and repairs',
      'Adds shine and softness',
      'Safe for all hair types',
    ],
    howToUse:
      'Apply shampoo to wet hair, massage into scalp, and rinse thoroughly. Follow with conditioner from mid-length to ends. Leave on for 2-3 minutes, then rinse.',
    image: '/images/products/shampoo-conditioner.jpg',
    inStock: true,
    featured: true,
    rating: 4.7,
    reviewCount: 89,
    size: '8 oz each',
  },
  {
    id: '3',
    slug: 'hair-styling-cream',
    name: 'Flexible Hold Styling Cream',
    category: 'haircare',
    brand: 'BeautyCares Style',
    price: 32,
    description:
      'Lightweight styling cream provides flexible hold with a natural shine finish. Heat protection up to 450°F keeps hair healthy during styling. Perfect for creating textured, lived-in looks.',
    benefits: [
      'Flexible, touchable hold',
      'Heat protection',
      'Natural shine finish',
      'Tames frizz',
      'Non-greasy formula',
    ],
    howToUse:
      'Work a small amount through damp or dry hair. Style as desired. Can be layered for more hold or used minimally for natural texture.',
    image: '/images/products/styling-cream.jpg',
    inStock: true,
    rating: 4.6,
    reviewCount: 64,
    size: '4 oz',
  },
  {
    id: '4',
    slug: 'organic-face-mask-set',
    name: 'Organic Clay Mask Collection',
    category: 'skincare',
    brand: 'BeautyCares Organics',
    price: 55,
    description:
      'Four luxurious clay masks formulated for different skin types and concerns. Made with organic ingredients and no harsh chemicals. Each mask targets specific needs for a complete at-home spa experience.',
    benefits: [
      'Four targeted treatments',
      'Organic ingredients',
      'Deep cleansing',
      'Minimizes pores',
      'Suitable for all skin types',
    ],
    howToUse:
      'Apply chosen mask to clean, dry skin. Leave on for 10-15 minutes. Rinse with warm water and pat dry. Use 1-2 times per week.',
    image: '/images/products/face-mask-set.jpg',
    inStock: true,
    featured: true,
    rating: 4.9,
    reviewCount: 103,
    size: '4 masks, 2 oz each',
  },
  {
    id: '5',
    slug: 'lash-growth-serum',
    name: 'Advanced Lash Growth Serum',
    category: 'makeup',
    brand: 'BeautyCares Enhance',
    price: 68,
    description:
      'Clinically proven lash serum promotes longer, thicker, healthier lashes in as little as 8 weeks. Ophthalmologist tested and safe for sensitive eyes. The secret to naturally beautiful lashes.',
    benefits: [
      'Proven lash growth',
      'Visible results in 8 weeks',
      'Strengthens lashes',
      'Ophthalmologist tested',
      'Safe for lash extensions',
    ],
    howToUse:
      'Apply a thin line along the upper lash line once daily, preferably at night. Use consistently for best results. Avoid contact with eyes.',
    ingredients: [
      'Biotin',
      'Peptide Complex',
      'Hyaluronic Acid',
      'Vitamin E',
      'Panthenol',
    ],
    image: '/images/products/lash-serum.jpg',
    inStock: true,
    featured: true,
    rating: 4.7,
    reviewCount: 156,
    size: '3ml',
  },
  {
    id: '6',
    slug: 'hair-treatment-mask',
    name: 'Intensive Repair Hair Mask',
    category: 'haircare',
    brand: 'BeautyCares Restore',
    price: 42,
    description:
      'Deep conditioning mask with protein and keratin repairs damage, restores moisture, and strengthens hair. Ideal for color-treated, heat-damaged, or chemically processed hair.',
    benefits: [
      'Repairs damaged hair',
      'Intense moisture',
      'Strengthens with protein',
      'Reduces breakage',
      'Smooths and softens',
    ],
    howToUse:
      'Apply generously to clean, damp hair. Focus on mid-lengths and ends. Leave on for 10-20 minutes. Rinse thoroughly. Use weekly or as needed.',
    ingredients: [
      'Hydrolyzed Keratin',
      'Argan Oil',
      'Coconut Oil',
      'Protein Complex',
      'Shea Butter',
    ],
    image: '/images/products/hair-mask.jpg',
    inStock: true,
    rating: 4.8,
    reviewCount: 92,
    size: '8 oz',
  },
  {
    id: '7',
    slug: 'makeup-brush-set',
    name: 'Professional Makeup Brush Collection',
    category: 'makeup',
    brand: 'BeautyCares Pro',
    price: 75,
    description:
      'Complete set of 12 professional-grade makeup brushes with vegan synthetic bristles. Includes face and eye brushes for flawless application. Comes in elegant storage case.',
    benefits: [
      '12 essential brushes',
      'Vegan synthetic bristles',
      'Professional quality',
      'Soft and durable',
      'Includes storage case',
    ],
    howToUse:
      'Use appropriate brush for each makeup step. Clean brushes weekly with gentle cleanser. Allow to air dry flat.',
    image: '/images/products/brush-set.jpg',
    inStock: true,
    featured: true,
    rating: 4.9,
    reviewCount: 78,
    size: '12 brushes with case',
  },
  {
    id: '8',
    slug: 'skincare-starter-kit',
    name: 'Complete Skincare Starter Kit',
    category: 'skincare',
    brand: 'BeautyCares Essentials',
    price: 95,
    description:
      'Everything you need for a complete skincare routine. Includes cleanser, toner, serum, day cream, and night cream. Perfect for beginning your journey to healthy, glowing skin.',
    benefits: [
      'Complete 5-step routine',
      'Suitable for all skin types',
      'Morning and evening care',
      'Travel-friendly sizes',
      'Great value set',
    ],
    howToUse:
      'Morning: Cleanser → Toner → Serum → Day Cream. Evening: Cleanser → Toner → Serum → Night Cream. Use consistently for best results.',
    image: '/images/products/skincare-kit.jpg',
    inStock: true,
    rating: 4.7,
    reviewCount: 112,
    size: '5 products, travel sizes',
  },
  {
    id: '9',
    slug: 'heat-protectant-spray',
    name: 'Thermal Guard Heat Protectant Spray',
    category: 'haircare',
    brand: 'BeautyCares Style',
    price: 28,
    description:
      'Lightweight heat protectant spray shields hair from thermal damage up to 450°F. Prevents breakage while adding shine and reducing frizz. A must-have for anyone who uses hot tools.',
    benefits: [
      'Heat protection up to 450°F',
      'Prevents damage and breakage',
      'Adds shine',
      'Reduces frizz',
      'Lightweight formula',
    ],
    howToUse:
      'Spray evenly on damp hair before blow-drying, or on dry hair before using flat iron or curling iron. Hold 6-8 inches from hair.',
    image: '/images/products/heat-protectant.jpg',
    inStock: true,
    rating: 4.6,
    reviewCount: 87,
    size: '6 oz',
  },
  {
    id: '10',
    slug: 'beauty-tool-set',
    name: 'Jade Facial Tool Collection',
    category: 'tools',
    brand: 'BeautyCares Wellness',
    price: 85,
    description:
      'Premium set includes jade roller, gua sha tool, and spa headband. Natural jade stones promote circulation, reduce puffiness, and enhance product absorption. Elevate your skincare routine.',
    benefits: [
      'Reduces puffiness and tension',
      'Promotes circulation',
      'Enhances product absorption',
      'Natural jade stones',
      'Complete facial massage set',
    ],
    howToUse:
      'Use on clean skin with serum or oil. Roll or glide tools gently across face, always moving upward and outward. Store in refrigerator for extra cooling effect.',
    image: '/images/products/beauty-tools.jpg',
    inStock: true,
    featured: true,
    rating: 4.8,
    reviewCount: 94,
    size: '3-piece set',
  },
];

// Helper functions
export const getProductsByCategory = (category: Product['category']) => {
  return products.filter((product) => product.category === category);
};

export const getFeaturedProducts = () => {
  return products.filter((product) => product.featured);
};

export const getProductBySlug = (slug: string) => {
  return products.find((product) => product.slug === slug);
};

export const getInStockProducts = () => {
  return products.filter((product) => product.inStock);
};

export const getProductsByPriceRange = (min: number, max: number) => {
  return products.filter((product) => product.price >= min && product.price <= max);
};

export const skincareProducts = getProductsByCategory('skincare');
export const haircareProducts = getProductsByCategory('haircare');
export const makeupProducts = getProductsByCategory('makeup');
export const toolsProducts = getProductsByCategory('tools');
export const featuredProducts = getFeaturedProducts();

export default products;

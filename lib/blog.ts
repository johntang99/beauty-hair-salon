export type ContentType = 'article' | 'video';

export interface BlogPost {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  content: string;
  category: string;
  author: string;
  type: ContentType;
  readTime?: string;
  videoUrl?: string;
  videoDuration?: string;
  featuredImage?: string;
  thumbnail?: string;
  featured?: boolean;
  tags?: string[];
}

export const blogPosts: BlogPost[] = [
  // FEATURED ARTICLE
  {
    slug: 'ultimate-guide-hair-color-maintenance',
    title: 'Ultimate Guide to Hair Color Maintenance',
    date: '2024-12-15',
    excerpt: 'Keep your hair color vibrant and beautiful longer with these expert tips from our colorists. Learn the best products, techniques, and routines for maintaining gorgeous color.',
    content: `# Ultimate Guide to Hair Color Maintenance

Investing in professional hair color is just the beginning. Here's how to keep it looking salon-fresh for weeks.

## The Right Products Matter

Color-treated hair needs special care:
- Sulfate-free shampoo and conditioner
- Color-depositing treatments weekly
- Deep conditioning masks bi-weekly
- Heat protectant before styling
- Purple shampoo for blondes

## Washing Techniques

- Wait 48-72 hours before first wash
- Use lukewarm water (not hot!)
- Wash 2-3 times per week maximum
- Focus shampoo on scalp, conditioner on ends
- Rinse thoroughly with cool water

## Protect Your Investment

- Limit heat styling when possible
- Use UV protection products in summer
- Avoid chlorine and salt water
- Schedule regular toning appointments
- Touch up roots every 6-8 weeks`,
    category: 'Hair Care',
    author: 'Sophia Martinez',
    type: 'article',
    readTime: '8 min read',
    featuredImage: 'https://images.unsplash.com/photo-1522337660859-02fbefca4702?w=800&q=80',
    featured: true,
    tags: ['hair color', 'hair care', 'maintenance', 'tips'],
  },

  // MORE ARTICLES
  {
    slug: 'choose-perfect-haircut',
    title: 'How to Choose Your Perfect Haircut',
    date: '2024-12-10',
    excerpt: 'Finding the right haircut for your face shape, hair type, and lifestyle. Our expert stylists share their professional tips for choosing a flattering cut.',
    content: `# How to Choose Your Perfect Haircut

The perfect haircut considers your face shape, hair texture, and daily routine.

## Face Shape Guide

- Oval: Lucky you - almost any style works!
- Round: Add height, avoid width
- Square: Soften angles with layers
- Heart: Balance with chin-length cuts
- Long: Create width with volume

## Consider Your Hair Type

Different textures require different approaches...`,
    category: 'Hair Care',
    author: 'Emma Thompson',
    type: 'article',
    readTime: '6 min read',
    featuredImage: 'https://images.unsplash.com/photo-1562322140-8baeececf3df?w=800&q=80',
    tags: ['haircut', 'styling', 'tips'],
  },

  {
    slug: 'skincare-routine-by-age',
    title: 'Skincare Routine for Every Age',
    date: '2024-12-08',
    excerpt: 'Your skin needs change as you age. Our lead esthetician shares age-appropriate skincare routines for your 20s, 30s, 40s, and beyond.',
    content: `# Skincare Routine for Every Age

Skincare isn't one-size-fits-all. Here's what to focus on at every age.

## In Your 20s
- Focus: Prevention and protection
- Key products: Cleanser, moisturizer, SPF
- Concerns: Acne, oiliness, sun damage prevention

## In Your 30s
- Focus: First signs of aging
- Add: Antioxidant serum, eye cream, retinol
- Concerns: Fine lines, uneven tone

## In Your 40s+
- Focus: Firming and brightening
- Add: Peptides, vitamin C, richer moisturizers
- Concerns: Wrinkles, loss of elasticity, age spots`,
    category: 'Skincare',
    author: 'Isabella Rose',
    type: 'article',
    readTime: '7 min read',
    featuredImage: 'https://images.unsplash.com/photo-1516975080664-ed2fc6a32937?w=800&q=80',
    tags: ['skincare', 'anti-aging', 'routine'],
  },

  {
    slug: 'bridal-beauty-timeline',
    title: 'Bridal Hair & Makeup Timeline',
    date: '2024-12-05',
    excerpt: 'Planning your wedding beauty? Our bridal specialist shares the perfect timeline from engagement to wedding day for flawless bridal beauty.',
    content: `# Bridal Hair & Makeup Timeline

Perfect wedding day beauty requires planning. Here's your complete timeline.

## 6-12 Months Before
- Book your trial session
- Start skincare regimen
- Consider hair changes (color, extensions)
- Research inspiration photos

## 3-6 Months Before
- Hair trial appointment
- Finalize hair and makeup looks
- Book wedding day appointments
- Start intensive skincare

## 1 Month Before
- Final hair trim
- Lash extensions if desired
- Professional facial series
- Confirm all appointments

## Wedding Week
- No new skincare products
- Keep routine simple
- Stay hydrated
- Get plenty of sleep

## Wedding Day
- Arrive with clean, dry hair
- Skip moisturizer before makeup
- Bring inspiration photos
- Relax and enjoy!`,
    category: 'Bridal',
    author: 'Ava Williams',
    type: 'article',
    readTime: '10 min read',
    featuredImage: 'https://images.unsplash.com/photo-1519415510236-718bdfcd89c8?w=800&q=80',
    tags: ['bridal', 'wedding', 'planning'],
  },

  {
    slug: 'hair-color-trends-2026',
    title: 'Hair Color Trends 2026',
    date: '2024-12-01',
    excerpt: 'The hottest hair color trends for 2026 according to our master colorists. From subtle balayage to bold fashion colors.',
    content: `# Hair Color Trends 2026

Stay ahead of the curve with these trending hair colors for the new year.

## Top Trends

### 1. Buttery Blonde
Warm, golden tones that look natural and sun-kissed

### 2. Copper Renaissance  
Rich, dimensional reds and coppers

### 3. Mocha Brown
Deep, cool-toned brunettes with subtle highlights

### 4. Lived-In Balayage
Low-maintenance, natural-looking dimension

### 5. Face-Framing Highlights
Strategic placement around the face for brightness`,
    category: 'Hair Color',
    author: 'Olivia Chen',
    type: 'article',
    readTime: '5 min read',
    featuredImage: 'https://images.unsplash.com/photo-1560066984-138dadb4c035?w=800&q=80',
    tags: ['trends', 'hair color', '2026'],
  },

  // VIDEOS
  {
    slug: '5-minute-everyday-makeup',
    title: '5-Minute Everyday Makeup Tutorial',
    date: '2024-11-28',
    excerpt: 'Quick and easy everyday makeup that looks polished and professional. Perfect for busy mornings when you need to look put-together fast.',
    content: 'Video tutorial on creating a simple, elegant everyday makeup look in just 5 minutes.',
    category: 'Makeup',
    author: 'Ava Williams',
    type: 'video',
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    videoDuration: '5:23',
    thumbnail: 'https://images.unsplash.com/photo-1512496015851-a90fb38ba796?w=800&q=80',
    tags: ['makeup', 'tutorial', 'quick'],
  },

  {
    slug: 'how-to-blow-dry-like-pro',
    title: 'How to Blow-Dry Your Hair Like a Pro',
    date: '2024-11-25',
    excerpt: 'Learn the professional techniques our stylists use to create smooth, bouncy blowouts. Step-by-step tutorial for salon-quality results at home.',
    content: 'Professional blow-dry techniques demonstrated by our senior stylists.',
    category: 'Hair Care',
    author: 'Emma Thompson',
    type: 'video',
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    videoDuration: '8:45',
    thumbnail: 'https://images.unsplash.com/photo-1522337660859-02fbefca4702?w=800&q=80',
    tags: ['hair', 'tutorial', 'blow-dry'],
  },

  {
    slug: 'curling-iron-techniques',
    title: 'Curling Iron Techniques for Perfect Curls',
    date: '2024-11-20',
    excerpt: 'Master three different curling techniques for loose waves, tight curls, and everything in between. Professional tips for long-lasting curls.',
    content: 'Step-by-step demonstration of curling iron techniques for various curl styles.',
    category: 'Hair Styling',
    author: 'Charlotte Lee',
    type: 'video',
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    videoDuration: '12:15',
    thumbnail: 'https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?w=800&q=80',
    tags: ['curls', 'tutorial', 'styling'],
  },

  {
    slug: 'facial-massage-tutorial',
    title: 'Facial Massage for Glowing Skin',
    date: '2024-11-18',
    excerpt: 'Learn professional facial massage techniques to improve circulation, reduce puffiness, and achieve a natural glow. Easy to do at home!',
    content: 'Professional facial massage techniques for home skincare routines.',
    category: 'Skincare',
    author: 'Isabella Rose',
    type: 'video',
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    videoDuration: '10:30',
    thumbnail: 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=800&q=80',
    tags: ['skincare', 'massage', 'tutorial'],
  },

  {
    slug: 'perfect-winged-eyeliner',
    title: 'Perfect Winged Eyeliner Every Time',
    date: '2024-11-15',
    excerpt: 'Master the winged eyeliner with these foolproof techniques from our makeup artists. Works for any eye shape!',
    content: 'Step-by-step tutorial for creating perfect winged eyeliner.',
    category: 'Makeup',
    author: 'Ava Williams',
    type: 'video',
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    videoDuration: '6:52',
    thumbnail: 'https://images.unsplash.com/photo-1596462502278-27a107d1e2d8?w=800&q=80',
    tags: ['makeup', 'eyeliner', 'tutorial'],
  },

  // MORE ARTICLES
  {
    slug: 'summer-hair-care-tips',
    title: '10 Hair Care Tips for Summer',
    date: '2024-11-12',
    excerpt: 'Protect your hair from sun, chlorine, and heat damage this summer. Essential tips for keeping your hair healthy and beautiful all season long.',
    content: `# 10 Hair Care Tips for Summer

Summer can be tough on your hair. Follow these tips to keep it healthy.

## Protect from UV
- Use products with UV filters
- Wear a hat at the beach
- Spray-in sun protectants

## Chlorine Protection  
- Wet hair before swimming
- Use leave-in conditioner
- Rinse immediately after
- Chelating shampoo weekly

## Hydration is Key
- Deep condition weekly
- Hair masks for moisture
- Drink plenty of water
- Avoid over-washing`,
    category: 'Hair Care',
    author: 'Mia Johnson',
    type: 'article',
    readTime: '6 min read',
    featuredImage: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=800&q=80',
    tags: ['summer', 'hair care', 'protection'],
  },

  {
    slug: 'makeup-tips-beginners',
    title: 'Makeup Tips for Beginners',
    date: '2024-11-08',
    excerpt: 'New to makeup? Start here! Our makeup artists share essential tips and must-have products for building your makeup collection.',
    content: `# Makeup Tips for Beginners

Starting your makeup journey? Here's what you need to know.

## Essential Products to Start

1. Foundation or BB cream
2. Concealer
3. Mascara
4. Blush
5. Lip gloss or lipstick

## Basic Application

- Always start with clean, moisturized skin
- Use primer for longevity
- Blend, blend, blend!
- Build coverage gradually
- Set with powder or spray

## Common Mistakes to Avoid

- Wrong foundation shade
- Too much product
- Skipping blending
- Harsh lines
- Not cleaning brushes`,
    category: 'Makeup',
    author: 'Ava Williams',
    type: 'article',
    readTime: '7 min read',
    featuredImage: 'https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?w=800&q=80',
    tags: ['makeup', 'beginners', 'tips'],
  },

  {
    slug: 'best-ingredients-anti-aging',
    title: 'Best Ingredients for Anti-Aging',
    date: '2024-11-05',
    excerpt: 'Not all anti-aging ingredients are created equal. Learn which ones actually work and how to incorporate them into your skincare routine.',
    content: `# Best Ingredients for Anti-Aging

Science-backed ingredients that actually make a difference.

## The Power Players

### Retinol
- Boosts collagen production
- Reduces fine lines
- Improves texture
- Use at night only

### Vitamin C
- Brightens skin
- Evens tone
- Antioxidant protection
- Use in morning

### Hyaluronic Acid
- Deep hydration
- Plumps skin
- Reduces appearance of lines
- Use AM and PM

### Peptides
- Supports collagen
- Firms skin
- Gentle for sensitive skin
- Great for mature skin`,
    category: 'Skincare',
    author: 'Isabella Rose',
    type: 'article',
    readTime: '9 min read',
    featuredImage: 'https://images.unsplash.com/photo-1556228578-0d85b1a4d571?w=800&q=80',
    tags: ['anti-aging', 'skincare', 'ingredients'],
  },

  {
    slug: 'balayage-vs-highlights',
    title: 'Balayage vs Highlights: Which is Right for You?',
    date: '2024-11-01',
    excerpt: 'Confused about the difference between balayage and traditional highlights? Our color experts explain both techniques and help you choose.',
    content: `# Balayage vs Highlights

Understanding the difference helps you get the look you want.

## Traditional Highlights

- Foil technique
- More uniform placement
- Root to tip lightening
- Regular touch-ups needed
- Defined, bright look

## Balayage

- Hand-painted technique
- Natural, sun-kissed look
- Softer regrowth
- Lower maintenance
- Dimensional color

## Which to Choose?

Consider your:
- Desired look (natural vs dramatic)
- Maintenance preference
- Hair color and texture
- Budget and time`,
    category: 'Hair Color',
    author: 'Olivia Chen',
    type: 'article',
    readTime: '5 min read',
    featuredImage: 'https://images.unsplash.com/photo-1560066984-138dadb4c035?w=800&q=80',
    tags: ['balayage', 'highlights', 'hair color'],
  },

  {
    slug: 'lash-extension-care-guide',
    title: 'How to Make Your Lash Extensions Last',
    date: '2024-10-28',
    excerpt: 'Get the most out of your lash extensions with proper aftercare. Expert tips from our lash technician for beautiful, long-lasting lashes.',
    content: `# Lash Extension Care Guide

Proper care makes your lash extensions last 6-8 weeks.

## First 24 Hours

- Keep completely dry
- No makeup on lashes
- Avoid steam and heat
- Sleep on your back

## Daily Care

- Cleanse gently with lash-safe cleanser
- Brush daily with spoolie
- No oil-based products
- Avoid rubbing eyes

## What to Avoid

- Waterproof mascara
- Oil-based makeup removers
- Sleeping face-down
- Picking or pulling
- Eyelash curlers`,
    category: 'Beauty',
    author: 'Harper Davis',
    type: 'article',
    readTime: '4 min read',
    featuredImage: 'https://images.unsplash.com/photo-1519699047748-de8e457a634e?w=800&q=80',
    tags: ['lashes', 'extensions', 'care'],
  },

  {
    slug: 'keratin-treatment-guide',
    title: 'Everything You Need to Know About Keratin Treatments',
    date: '2024-10-25',
    excerpt: 'Considering a keratin treatment? Learn what it is, how it works, and if it\'s right for your hair type from our treatment specialists.',
    content: `# Keratin Treatment Guide

Transform frizzy, unmanageable hair into smooth, sleek perfection.

## What is Keratin Treatment?

A semi-permanent smoothing treatment that:
- Reduces frizz dramatically
- Cuts styling time in half
- Adds incredible shine
- Lasts 3-6 months
- Works on most hair types

## The Process

1. Deep cleansing (20 min)
2. Application (45 min)
3. Drying (30 min)
4. Flat iron sealing (45 min)
5. Total: 2.5-3 hours

## Aftercare

- Wait 3 days before washing
- Use sulfate-free products
- Avoid hair ties for 48 hours
- No swimming for 1 week`,
    category: 'Hair Treatments',
    author: 'Sophia Martinez',
    type: 'article',
    readTime: '8 min read',
    featuredImage: 'https://images.unsplash.com/photo-1522337660859-02fbefca4702?w=800&q=80',
    tags: ['keratin', 'treatment', 'hair'],
  },
];

// Helper functions
export function getAllCategories(): string[] {
  const categories = Array.from(new Set(blogPosts.map((post) => post.category)));
  return ['All', ...categories];
}

export function getFeaturedPosts(): BlogPost[] {
  return blogPosts.filter((post) => post.featured);
}

export function getPostBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find((post) => post.slug === slug);
}

export function getPostsByCategory(category: string): BlogPost[] {
  if (category === 'All') return blogPosts;
  return blogPosts.filter((post) => post.category === category);
}

export function getPostsByType(type: ContentType): BlogPost[] {
  return blogPosts.filter((post) => post.type === type);
}

// Additional helper functions for blog slug pages
export function getAllBlogSlugs(): string[] {
  return blogPosts.map((post) => post.slug);
}

export function getBlogPostBySlug(slug: string): BlogPost | undefined {
  return getPostBySlug(slug);
}

export default blogPosts;

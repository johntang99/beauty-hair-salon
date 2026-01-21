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
  readTime?: string; // For articles (e.g., "5 min read")
  videoUrl?: string; // YouTube/Vimeo embed URL
  videoDuration?: string; // For videos (e.g., "12:34")
  featuredImage?: string; // Path to featured image
  thumbnail?: string; // Video thumbnail
  featured?: boolean; // Mark as featured content
  tags?: string[];
}

export const blogPosts: BlogPost[] = [
  // FEATURED ARTICLE
  {
    slug: 'benefits-of-acupuncture',
    title: 'The Science Behind Acupuncture: How It Works',
    date: '2024-12-15',
    excerpt: 'Discover how acupuncture stimulates your body\'s natural healing mechanisms through both traditional wisdom and modern research. Learn about the neurological and biochemical effects of this ancient practice.',
    content: `Acupuncture has been practiced for thousands of years, and modern research is now revealing the scientific mechanisms behind its effectiveness.

## How Acupuncture Works

From a Traditional Chinese Medicine perspective, acupuncture works by restoring the flow of Qi (vital energy) through meridians in the body. When Qi flows freely, the body maintains health and balance.

Modern research shows that acupuncture:
- Stimulates the nervous system to release pain-relieving endorphins
- Reduces inflammation through neurological pathways
- Improves blood circulation to treatment areas
- Modulates stress hormones and promotes relaxation
- Enhances the body's natural healing responses

## Common Conditions Treated

Acupuncture has been shown to be effective for:
- Chronic pain (back, neck, shoulders, joints)
- Headaches and migraines
- Stress, anxiety, and depression
- Insomnia and sleep disturbances
- Digestive issues
- Allergies and sinus problems
- Women's health concerns

## What to Expect

During an acupuncture treatment, very thin needles (about the width of a hair) are gently inserted at specific points. Most patients feel minimal to no discomfort and find the experience deeply relaxing.

## The Research

Multiple studies, including research from the National Institutes of Health, have confirmed acupuncture's effectiveness for various conditions. It's recognized by the World Health Organization as a valid treatment for over 100 conditions.

If you're interested in exploring how acupuncture can support your health, we'd be happy to discuss your specific needs during a consultation.`,
    category: 'Acupuncture',
    author: 'Dr. Huang',
    type: 'article',
    readTime: '8 min read',
    featuredImage: '/images/blog/acupuncture-science.jpg',
    featured: true,
    tags: ['Acupuncture', 'Pain Relief', 'Science', 'Research'],
  },

  // ARTICLE 2
  {
    slug: 'chinese-herbs-101',
    title: 'Chinese Herbal Medicine: A Beginner\'s Guide',
    date: '2024-12-01',
    excerpt: 'Learn about the ancient art of Chinese herbal medicine and how personalized formulas can support your health. Understand the principles behind herbal prescriptions and what to expect.',
    content: `Chinese herbal medicine is one of the oldest and most comprehensive systems of plant-based healing in the world, with over 3,000 years of documented use.

## What is Chinese Herbal Medicine?

Unlike Western herbs which are often used individually, Chinese herbs are typically combined in formulas that work synergistically. Each formula is carefully balanced to address your unique constitution and health concerns.

## How Herbs Are Prescribed

A Chinese herbal prescription is created based on:
- Your TCM diagnosis (patterns of imbalance)
- Your unique constitution
- Current symptoms and health goals
- Other treatments you're receiving

## Common Forms

Herbs can be provided as:
- **Granules**: Concentrated powder that dissolves in hot water
- **Pills/Capsules**: Convenient for on-the-go
- **Raw Herbs**: Traditional decoction method
- **Tinctures**: Liquid extracts

## Safety and Quality

We use high-quality herbs from reputable suppliers that test for:
- Heavy metals and contaminants
- Correct botanical identification  
- Potency and efficacy

All formulas are prescribed by a licensed herbalist and monitored for your safety and results.

## What to Expect

Most people notice initial improvements within 2-4 weeks. Formulas are adjusted as your condition changes, ensuring optimal support throughout your healing journey.`,
    category: 'Herbal Medicine',
    author: 'Dr. Huang',
    type: 'article',
    readTime: '6 min read',
    featuredImage: '/images/blog/herbal-medicine.jpg',
    featured: false,
    tags: ['Herbal Medicine', 'Natural Remedies', 'TCM Basics'],
  },

  // VIDEO 1 - FEATURED
  {
    slug: 'acupuncture-treatment-demo',
    title: 'What to Expect During Your First Acupuncture Visit',
    date: '2024-11-20',
    excerpt: 'Watch this comprehensive video guide showing exactly what happens during an acupuncture treatment, from consultation to needle insertion. Perfect for first-time patients.',
    content: 'Video content - see embedded player',
    category: 'Acupuncture',
    author: 'Dr. Huang',
    type: 'video',
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ', // Replace with actual video
    videoDuration: '12:45',
    thumbnail: '/images/blog/video-acupuncture-demo.jpg',
    featured: true,
    tags: ['Acupuncture', 'Tutorial', 'New Patients'],
  },

  // ARTICLE 3
  {
    slug: 'seasonal-wellness-tips',
    title: 'Traditional Chinese Medicine Seasonal Wellness Tips for Winter',
    date: '2024-11-15',
    excerpt: 'Learn how to stay healthy during winter using Traditional Chinese Medicine principles. Discover foods, herbs, and practices that support your immune system and energy during the cold months.',
    content: `In Traditional Chinese Medicine, each season has specific qualities and requires different approaches to maintain optimal health.

## Winter According to TCM

Winter is associated with the Water element and the Kidney system in TCM. This season calls for:
- Conserving energy rather than expending it
- Nourishing the body with warming foods
- Getting adequate rest and sleep
- Protecting yourself from cold and wind

## Winter Wellness Strategies

### Dietary Recommendations
- Eat warming foods: soups, stews, bone broths
- Include root vegetables, dark leafy greens
- Use warming spices: ginger, cinnamon, garlic
- Drink warm beverages, avoid cold drinks
- Reduce raw, cold foods

### Lifestyle Practices
- Go to bed earlier, wake up with sunrise
- Keep your lower back and feet warm
- Practice gentle exercises like Tai Chi or Qi Gong
- Minimize stress and conserve energy
- Stay well-hydrated

### Acupuncture Support
Winter acupuncture treatments can:
- Boost immune function
- Support kidney and adrenal health
- Improve circulation
- Prevent seasonal illness
- Maintain energy levels

## Prevention is Key

The best time to strengthen your immune system is before you get sick. Consider starting acupuncture and herbal support in early winter to stay healthy throughout the season.`,
    category: 'Wellness',
    author: 'Dr. Huang',
    type: 'article',
    readTime: '7 min read',
    featuredImage: '/images/blog/winter-wellness.jpg',
    featured: false,
    tags: ['Seasonal Health', 'Prevention', 'Wellness', 'Winter'],
  },

  // VIDEO 2
  {
    slug: 'cupping-therapy-explained',
    title: 'Cupping Therapy: Benefits and What to Expect',
    date: '2024-11-10',
    excerpt: 'Watch Dr. Huang demonstrate cupping therapy and explain how this ancient technique releases tension, improves circulation, and supports healing.',
    content: 'Video content - see embedded player',
    category: 'Treatments',
    author: 'Dr. Huang',
    type: 'video',
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ', // Replace with actual video
    videoDuration: '8:30',
    thumbnail: '/images/blog/video-cupping-demo.jpg',
    featured: false,
    tags: ['Cupping', 'Tutorial', 'Pain Relief'],
  },

  // ARTICLE 4
  {
    slug: 'stress-relief-with-tcm',
    title: '5 TCM Techniques for Natural Stress Relief',
    date: '2024-11-05',
    excerpt: 'Feeling overwhelmed? Discover five Traditional Chinese Medicine techniques you can use to manage stress naturally, from acupressure points to breathing exercises.',
    content: `Modern life brings constant stress, but Traditional Chinese Medicine offers time-tested tools for finding calm and balance.

## 1. Acupressure Points for Instant Relief

### Heart 7 (Shen Men - "Spirit Gate")
Location: On the wrist crease, in line with your pinky finger
How to use: Apply gentle pressure for 2-3 minutes
Benefits: Calms anxiety, promotes peaceful sleep

### Pericardium 6 (Nei Guan - "Inner Gate")
Location: 2-3 finger widths above your wrist crease, between the tendons
How to use: Press firmly for 1-2 minutes on each wrist
Benefits: Reduces anxiety, relieves nausea, calms the mind

## 2. Breathing Exercises

Try this simple Qi Gong breathing:
- Breathe in slowly through your nose for 4 counts
- Hold for 4 counts
- Exhale slowly through your mouth for 6 counts
- Repeat 5-10 times

This activates your parasympathetic nervous system and promotes calm.

## 3. Herbal Support

Consider these calming herbs:
- Chamomile tea for gentle relaxation
- Passionflower for nervous tension
- Custom Chinese herbal formulas for chronic stress

## 4. Dietary Adjustments

TCM recommends:
- Reduce caffeine and sugar
- Eat regular, warm meals
- Include calming foods like oats, dates, mushrooms
- Avoid late-night eating

## 5. Regular Acupuncture

Weekly acupuncture treatments can:
- Regulate stress hormones
- Improve sleep quality
- Reduce physical tension
- Support emotional balance
- Build resilience to stress

Remember, stress management is a practice. Start with one technique and build from there.`,
    category: 'Wellness',
    author: 'Dr. Huang',
    type: 'article',
    readTime: '9 min read',
    featuredImage: '/images/blog/stress-relief.jpg',
    featured: false,
    tags: ['Stress Relief', 'Mental Health', 'Self-Care', 'Acupressure'],
  },

  // VIDEO 3
  {
    slug: 'herbal-consultation-walkthrough',
    title: 'Chinese Herbal Medicine Consultation: What Happens',
    date: '2024-10-28',
    excerpt: 'Take a behind-the-scenes look at a Chinese herbal medicine consultation. Learn how formulas are customized and what questions you can expect.',
    content: 'Video content - see embedded player',
    category: 'Herbal Medicine',
    author: 'Dr. Huang',
    type: 'video',
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ', // Replace with actual video
    videoDuration: '15:20',
    thumbnail: '/images/blog/video-herbal-consultation.jpg',
    featured: false,
    tags: ['Herbal Medicine', 'Consultation', 'Tutorial'],
  },

  // ARTICLE 5
  {
    slug: 'fertility-support-with-acupuncture',
    title: 'How Acupuncture Supports Natural Fertility',
    date: '2024-10-20',
    excerpt: 'Understanding how acupuncture and Traditional Chinese Medicine can support reproductive health, regulate cycles, and optimize fertility naturally.',
    content: `Traditional Chinese Medicine has been supporting fertility for thousands of years, with growing research validating its effectiveness.

## How TCM Supports Fertility

### Regulating the Menstrual Cycle
Acupuncture helps:
- Balance hormones naturally
- Regulate cycle length and timing
- Reduce PMS symptoms
- Improve ovulation quality

### Improving Reproductive Health
- Increases blood flow to reproductive organs
- Reduces stress (a major fertility factor)
- Supports healthy endometrial lining
- Balances FSH, LH, and other hormones

### Supporting IVF and ART
Many fertility clinics now recommend acupuncture alongside assisted reproductive technologies. Research shows it may:
- Improve IVF success rates
- Reduce side effects of medications
- Support implantation
- Reduce anxiety during treatment

## Treatment Timeline

Most patients receive acupuncture:
- Weekly for 3-4 months before conception attempts
- Throughout IVF cycles at key points
- During early pregnancy for support

## Herbal Medicine for Fertility

Custom herbal formulas can:
- Nourish blood and Yin
- Tonify kidney essence
- Regulate qi and blood flow
- Support different phases of the cycle

## Lifestyle Support

We also address:
- Stress management
- Sleep quality
- Dietary optimization
- Exercise balance

TCM fertility support works best with at least 3-4 months of consistent treatment to allow the body to regulate and optimize.`,
    category: 'Women\'s Health',
    author: 'Dr. Huang',
    type: 'article',
    readTime: '10 min read',
    featuredImage: '/images/blog/fertility-support.jpg',
    featured: false,
    tags: ['Fertility', 'Women\'s Health', 'IVF Support', 'Reproductive Health'],
  },

  // VIDEO 4
  {
    slug: 'pulse-diagnosis-explained',
    title: 'The Art of Pulse Diagnosis in Traditional Chinese Medicine',
    date: '2024-10-15',
    excerpt: 'Discover the ancient diagnostic technique of pulse reading. Watch as Dr. Huang explains what we can learn from your pulse and how it guides treatment.',
    content: 'Video content - see embedded player',
    category: 'TCM Basics',
    author: 'Dr. Huang',
    type: 'video',
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ', // Replace with actual video
    videoDuration: '10:15',
    thumbnail: '/images/blog/video-pulse-diagnosis.jpg',
    featured: false,
    tags: ['Diagnosis', 'TCM Basics', 'Educational'],
  },

  // ARTICLE 6
  {
    slug: 'pain-management-naturally',
    title: 'Natural Pain Management: TCM Alternatives to Medication',
    date: '2024-10-10',
    excerpt: 'Explore natural, effective approaches to managing chronic pain through acupuncture, herbs, and lifestyle modifications without pharmaceutical side effects.',
    content: `Chronic pain affects millions, but there are effective natural alternatives to long-term pain medication.

## TCM Approach to Pain

In Traditional Chinese Medicine, pain is often understood as blocked or stagnant Qi and blood flow. Treatment focuses on:
- Unblocking meridians
- Improving circulation
- Reducing inflammation
- Addressing root causes

## Effective TCM Modalities for Pain

### Acupuncture
- Releases endorphins (natural pain relievers)
- Reduces inflammation
- Improves local circulation
- Addresses nerve pain

### Cupping Therapy
- Releases deep muscle tension
- Improves blood flow
- Reduces fascial adhesions
- Provides immediate relief

### Herbal Medicine
- Anti-inflammatory formulas
- Blood circulation enhancement
- Nourishing damaged tissues
- Long-term pain management

### Tui Na Massage
- Releases trigger points
- Improves joint mobility
- Reduces muscle spasm
- Enhances flexibility

## Lifestyle Modifications

Pain management also involves:
- Gentle stretching and movement
- Stress reduction techniques
- Sleep quality improvement
- Anti-inflammatory diet
- Proper ergonomics

## The Advantage of Natural Pain Relief

Unlike pain medications, TCM approaches:
- Have minimal to no side effects
- Address root causes, not just symptoms
- Support overall health and wellbeing
- Can be used long-term safely
- Work synergistically with other treatments

Many patients are able to reduce or eliminate pain medications under their doctor's supervision while using TCM therapies.`,
    category: 'Pain Management',
    author: 'Dr. Huang',
    type: 'article',
    readTime: '11 min read',
    featuredImage: '/images/blog/pain-management.jpg',
    featured: false,
    tags: ['Pain Relief', 'Chronic Pain', 'Natural Medicine', 'Alternatives'],
  },

  // VIDEO 5
  {
    slug: 'qi-gong-morning-routine',
    title: 'Energizing Morning Qi Gong Routine (15 Minutes)',
    date: '2024-10-05',
    excerpt: 'Start your day with vitality! Follow along with this gentle Qi Gong routine designed to awaken your energy, improve circulation, and set a positive tone for your day.',
    content: 'Video content - see embedded player',
    category: 'Qi Gong',
    author: 'Dr. Huang',
    type: 'video',
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ', // Replace with actual video
    videoDuration: '15:42',
    thumbnail: '/images/blog/video-qigong-morning.jpg',
    featured: false,
    tags: ['Qi Gong', 'Exercise', 'Morning Routine', 'Energy'],
  },

  // ARTICLE 7
  {
    slug: 'digestive-health-tcm',
    title: 'Healing Digestive Issues with Traditional Chinese Medicine',
    date: '2024-09-28',
    excerpt: 'IBS, bloating, and digestive discomfort? Discover how TCM addresses the root causes of digestive issues through acupuncture, herbs, and dietary therapy.',
    content: `Digestive health is fundamental to overall wellness in Traditional Chinese Medicine. The Spleen and Stomach systems are considered the foundation of health.

## TCM Understanding of Digestion

Unlike Western medicine which focuses on specific organs, TCM looks at:
- Digestive "fire" and transformation ability
- Dampness and phlegm accumulation
- Qi stagnation in the digestive tract
- Emotional factors affecting digestion

## Common Digestive Patterns

### Spleen Qi Deficiency
Symptoms: Bloating, fatigue after meals, loose stools, poor appetite
Treatment: Tonifying herbs, moxibustion, dietary therapy

### Liver Qi Stagnation
Symptoms: IBS, alternating bowel habits, stress-related symptoms
Treatment: Acupuncture to smooth Liver Qi, stress management

### Stomach Heat
Symptoms: Acid reflux, burning pain, constant hunger
Treatment: Clearing heat herbs, cooling foods

## Treatment Approaches

### Acupuncture
Points to harmonize digestion, reduce inflammation, and regulate gut motility

### Herbal Medicine
Custom formulas to strengthen digestion and address specific patterns

### Dietary Therapy
Personalized recommendations based on your constitution:
- Foods that strengthen digestion
- Foods to avoid based on your pattern
- Proper food combining
- Eating habits and timing

## Success with Digestive Issues

Many patients see improvement within 4-6 weeks of consistent treatment. Digestive issues often respond very well to TCM because it addresses both physical and emotional factors.`,
    category: 'Digestive Health',
    author: 'Dr. Huang',
    type: 'article',
    readTime: '9 min read',
    featuredImage: '/images/blog/digestive-health.jpg',
    featured: false,
    tags: ['Digestive Health', 'IBS', 'Gut Health', 'Dietary Therapy'],
  },

  // VIDEO 6
  {
    slug: 'self-care-acupressure',
    title: 'Self-Care Acupressure Points You Can Do at Home',
    date: '2024-09-20',
    excerpt: 'Learn powerful acupressure points for headaches, stress, digestion, and sleep that you can practice at home between treatments.',
    content: 'Video content - see embedded player',
    category: 'Self-Care',
    author: 'Dr. Huang',
    type: 'video',
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ', // Replace with actual video
    videoDuration: '18:25',
    thumbnail: '/images/blog/video-acupressure-home.jpg',
    featured: false,
    tags: ['Acupressure', 'Self-Care', 'Tutorial', 'Home Practice'],
  },
];

// Utility functions
export function getAllBlogSlugs(): string[] {
  return blogPosts.map((p) => p.slug);
}

export function getBlogPostBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find((p) => p.slug === slug);
}

export function getAllCategories(): string[] {
  return Array.from(new Set(blogPosts.map((p) => p.category)));
}

export function getFeaturedPosts(): BlogPost[] {
  return blogPosts.filter((p) => p.featured);
}

export function getPostsByType(type: ContentType): BlogPost[] {
  return blogPosts.filter((p) => p.type === type);
}

export function getPostsByCategory(category: string): BlogPost[] {
  return blogPosts.filter((p) => p.category === category);
}

export default blogPosts;

// Chinese Medicine Modalities/Services
// All treatment modalities offered at Dr Huang Clinic

export interface Modality {
  id: string;
  slug: string;
  name: string;
  tagline: string;
  description: string;
  icon: string;
  benefits: string[];
  conditions: string[];
  whatToExpect: string | string[]; // Support both formats
  duration: string;
  frequency: string;
  quickFacts: {
    sessionTime: string;
    sensation: string;
    bestPairedWith?: string[];
  };
}

export const modalities: Modality[] = [
  {
    id: 'acupuncture',
    slug: 'acupuncture',
    name: 'Acupuncture',
    tagline: 'Restore balance and stimulate healing',
    description:
      'Acupuncture involves the insertion of fine, sterile needles at specific points along the body\'s meridians to restore the flow of Qi (vital energy). This ancient practice stimulates the body\'s natural healing mechanisms, promotes circulation, and helps restore balance.',
    icon: 'acupuncture',
    benefits: [
      'Reduces pain and inflammation naturally',
      'Improves circulation and energy flow',
      'Promotes relaxation and stress relief',
      'Supports immune function',
      'Enhances overall well-being',
      'No side effects when performed by a licensed practitioner',
    ],
    conditions: [
      'Chronic pain (back, neck, joints)',
      'Headaches and migraines',
      'Stress and anxiety',
      'Insomnia',
      'Digestive issues',
      'Allergies and sinus problems',
      'Fertility support',
      'Menstrual irregularities',
    ],
    whatToExpect:
      'During your first visit, we\'ll discuss your health history and concerns. Treatment involves lying comfortably while thin needles are gently inserted at specific points. Most patients find the experience deeply relaxing. Needles remain in place for 20-30 minutes while you rest.',
    duration: '60 minutes for initial visit, 45 minutes for follow-ups',
    frequency: 'Weekly initially, then as needed for maintenance',
    quickFacts: {
      sessionTime: '45-60 minutes',
      sensation: 'Gentle (minimal discomfort)',
      bestPairedWith: ['Herbal Medicine', 'Cupping', 'Moxibustion'],
    },
  },
  {
    id: 'herbal-medicine',
    slug: 'herbal-medicine',
    name: 'Chinese Herbal Medicine',
    tagline: 'Nature\'s pharmacy for holistic healing',
    description:
      'Chinese herbal medicine uses natural plant-based remedies, carefully combined in traditional formulas, to address the root causes of health concerns. Each formula is customized to your unique constitution and current health needs, supporting your body\'s innate healing wisdom.',
    icon: 'herbs',
    benefits: [
      'Addresses root causes, not just symptoms',
      'Personalized formulas for your unique needs',
      'Supports long-term health and vitality',
      'Complements other treatments effectively',
      'Minimal side effects compared to pharmaceuticals',
      'Thousands of years of documented use',
    ],
    conditions: [
      'Digestive disorders',
      'Hormonal imbalances',
      'Immune system support',
      'Respiratory conditions',
      'Skin conditions',
      'Chronic fatigue',
      'Sleep disturbances',
      'Cardiovascular support',
    ],
    whatToExpect:
      'After a thorough consultation, we\'ll create a custom herbal formula tailored to your needs. Herbs may be provided as granules (powder), pills, or raw herbs for decoction. We\'ll explain how to prepare and take your herbs, and adjust the formula as your condition improves.',
    duration: 'Consultation: 30-45 minutes',
    frequency: 'Formula adjustments every 2-4 weeks as needed',
    quickFacts: {
      sessionTime: '30-45 minutes (consultation)',
      sensation: 'N/A (oral herbs)',
      bestPairedWith: ['Acupuncture', 'Dietary Therapy'],
    },
  },
  {
    id: 'cupping',
    slug: 'cupping',
    name: 'Cupping Therapy',
    tagline: 'Release tension and promote circulation',
    description:
      'Cupping therapy uses glass or silicone cups to create suction on the skin, promoting blood flow, releasing muscle tension, and drawing out toxins. This technique has been used for thousands of years to treat pain, improve circulation, and support respiratory health.',
    icon: 'cupping',
    benefits: [
      'Releases deep muscle tension',
      'Improves blood circulation',
      'Reduces inflammation',
      'Supports detoxification',
      'Relieves respiratory congestion',
      'Promotes tissue healing',
    ],
    conditions: [
      'Muscle pain and stiffness',
      'Back and shoulder pain',
      'Sports injuries',
      'Respiratory conditions',
      'Cellulite and skin health',
      'Poor circulation',
    ],
    whatToExpect:
      'Cups are placed on specific areas of the body, creating gentle suction. You may feel a pulling sensation, but it should not be painful. Cups remain in place for 5-15 minutes. Temporary circular marks may appear but fade within a few days.',
    duration: '20-30 minutes, often combined with acupuncture',
    frequency: 'Weekly or bi-weekly',
    quickFacts: {
      sessionTime: '20-30 minutes',
      sensation: 'Moderate (pulling sensation)',
      bestPairedWith: ['Acupuncture', 'Tui Na'],
    },
  },
  {
    id: 'moxibustion',
    slug: 'moxibustion',
    name: 'Moxibustion',
    tagline: 'Warming therapy to invigorate Qi',
    description:
      'Moxibustion involves burning dried mugwort (moxa) near acupuncture points to warm the meridians, strengthen Qi, and promote healing. The gentle heat penetrates deeply to nourish and invigorate the body, especially beneficial for cold conditions and weakened immune systems.',
    icon: 'moxibustion',
    benefits: [
      'Warms and invigorates the body',
      'Strengthens the immune system',
      'Improves digestion',
      'Relieves cold-type pain',
      'Supports reproductive health',
      'Promotes overall vitality',
    ],
    conditions: [
      'Cold hands and feet',
      'Digestive weakness',
      'Fatigue and low energy',
      'Arthritis (cold-type)',
      'Menstrual cramps',
      'Breech presentation in pregnancy',
    ],
    whatToExpect:
      'Moxa is burned near (not touching) specific acupuncture points. You\'ll feel gentle warmth penetrating the area. The treatment is relaxing and often combined with acupuncture for enhanced benefits.',
    duration: '15-20 minutes, often added to acupuncture session',
    frequency: 'As recommended based on condition',
    quickFacts: {
      sessionTime: '15-20 minutes',
      sensation: 'Gentle (warming)',
      bestPairedWith: ['Acupuncture'],
    },
  },
  {
    id: 'tui-na',
    slug: 'tui-na',
    name: 'Tui Na Medical Massage',
    tagline: 'Therapeutic massage along meridians',
    description:
      'Tui Na is a form of Chinese therapeutic massage that uses rhythmic compression, stretching, and manipulation techniques along the body\'s meridian channels. It combines massage with acupressure to restore balance, relieve pain, and improve overall health.',
    icon: 'tui-na',
    benefits: [
      'Releases muscular tension',
      'Improves joint mobility',
      'Enhances circulation',
      'Supports injury recovery',
      'Reduces stress and promotes relaxation',
      'Complements acupuncture treatment',
    ],
    conditions: [
      'Musculoskeletal pain',
      'Sports injuries',
      'Chronic tension',
      'Joint stiffness',
      'Poor circulation',
      'Stress-related conditions',
    ],
    whatToExpect:
      'Treatment is performed through light clothing. The practitioner uses various hand techniques including pressing, kneading, and stretching along meridian pathways and specific points. Pressure is adjusted to your comfort level.',
    duration: '30-45 minutes',
    frequency: 'Weekly or as needed',
    quickFacts: {
      sessionTime: '30-45 minutes',
      sensation: 'Moderate (firm pressure)',
      bestPairedWith: ['Acupuncture', 'Cupping'],
    },
  },
  {
    id: 'gua-sha',
    slug: 'gua-sha',
    name: 'Gua Sha',
    tagline: 'Scraping therapy to release stagnation',
    description:
      'Gua Sha involves using a smooth-edged tool to gently scrape the skin, promoting blood flow and releasing stagnation. This technique is particularly effective for releasing muscle tension, reducing inflammation, and supporting immune function.',
    icon: 'gua-sha',
    benefits: [
      'Releases muscle tension and adhesions',
      'Reduces inflammation',
      'Improves micro-circulation',
      'Supports immune response',
      'Relieves pain naturally',
      'Promotes lymphatic drainage',
    ],
    conditions: [
      'Neck and shoulder tension',
      'Upper back pain',
      'Headaches',
      'Common cold and flu',
      'Chronic pain',
      'Poor circulation',
    ],
    whatToExpect:
      'A smooth tool is used to gently scrape the skin in specific areas. You may experience temporary redness or marks (similar to cupping) which typically fade within 2-5 days. The treatment should feel therapeutic, not painful.',
    duration: '15-20 minutes, often added to other treatments',
    frequency: 'As needed, typically weekly',
    quickFacts: {
      sessionTime: '15-20 minutes',
      sensation: 'Moderate (scraping)',
      bestPairedWith: ['Acupuncture', 'Cupping'],
    },
  },
  {
    id: 'dietary-therapy',
    slug: 'dietary-therapy',
    name: 'Dietary Therapy',
    tagline: 'Food as medicine for optimal health',
    description:
      'Chinese dietary therapy views food as medicine, recommending specific foods and eating patterns based on your unique constitution and health needs. Learn how to support your healing through mindful food choices aligned with TCM principles.',
    icon: 'stomach',
    benefits: [
      'Supports overall health and vitality',
      'Addresses underlying imbalances',
      'Complements other treatments',
      'Promotes digestive health',
      'Sustainable long-term approach',
      'Personalized to your constitution',
    ],
    conditions: [
      'Digestive issues',
      'Fatigue and low energy',
      'Hormonal imbalances',
      'Weak immune system',
      'Chronic inflammation',
      'Any condition benefiting from nutritional support',
    ],
    whatToExpect:
      'We\'ll assess your constitution and current imbalances, then provide personalized dietary recommendations. You\'ll learn which foods support your healing and which to minimize. Guidance is practical and adaptable to modern life.',
    duration: '30 minutes consultation',
    frequency: 'Initial consultation, then follow-up as needed',
    quickFacts: {
      sessionTime: '30 minutes',
      sensation: 'N/A (consultation)',
      bestPairedWith: ['Herbal Medicine', 'Acupuncture'],
    },
  },
  {
    id: 'lifestyle-coaching',
    slug: 'lifestyle-coaching',
    name: 'Qi Gong & Lifestyle Coaching',
    tagline: 'Cultivate vitality through daily practice',
    description:
      'Qi Gong combines gentle movement, breathwork, and meditation to cultivate and balance your vital energy. We also provide lifestyle coaching based on TCM principles to support your overall health, including sleep hygiene, stress management, and seasonal living.',
    icon: 'heart',
    benefits: [
      'Reduces stress and promotes calm',
      'Improves energy and vitality',
      'Enhances mind-body connection',
      'Supports immune function',
      'Improves balance and flexibility',
      'Empowers self-care practices',
    ],
    conditions: [
      'Stress and anxiety',
      'Fatigue',
      'Insomnia',
      'High blood pressure',
      'Chronic pain',
      'General wellness and prevention',
    ],
    whatToExpect:
      'Learn simple Qi Gong exercises and breathing techniques you can practice at home. Receive personalized lifestyle recommendations for sleep, stress management, and seasonal wellness. Guidance is practical and easy to integrate into daily life.',
    duration: '30-45 minutes instruction',
    frequency: 'Initial session, then practice at home with periodic check-ins',
    quickFacts: {
      sessionTime: '30-45 minutes',
      sensation: 'Gentle (movement)',
      bestPairedWith: ['Acupuncture', 'Dietary Therapy'],
    },
  },
];

// Utility functions
export function getModalityBySlug(slug: string): Modality | undefined {
  return modalities.find((m) => m.slug === slug);
}

export function getAllModalitySlugs(): string[] {
  return modalities.map((m) => m.slug);
}

export function getModalitiesByCondition(condition: string): Modality[] {
  return modalities.filter((m) =>
    m.conditions.some((c) => c.toLowerCase().includes(condition.toLowerCase()))
  );
}

export default modalities;

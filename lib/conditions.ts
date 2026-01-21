// Conditions Treated at Dr Huang Clinic
// Health conditions addressed through Traditional Chinese Medicine

export interface Condition {
  id: string;
  slug: string;
  name: string;
  category: string;
  symptoms: string[];
  description: string; // Short summary for cards
  tcmPerspective: string;
  treatments: string[];
  icon: string; // Icon name matching SVG file in /public/icons/
}

export const conditions: Condition[] = [
  {
    id: 'chronic-pain',
    slug: 'chronic-pain',
    name: 'Chronic Pain',
    category: 'Pain Management',
    symptoms: ['Back pain', 'Neck pain', 'Joint pain', 'Muscle tension', 'Arthritis', 'Sciatica'],
    description:
      'Chronic pain affects millions and can significantly impact quality of life. Whether from injury, arthritis, or repetitive strain, persistent pain requires a comprehensive approach.',
    tcmPerspective:
      'In TCM, pain often results from blocked Qi and blood stagnation in the meridians. Acupuncture helps restore free flow of energy, while herbs and other modalities address underlying imbalances contributing to pain.',
    treatments: ['Acupuncture', 'Cupping', 'Tui Na', 'Herbal Medicine', 'Moxibustion'],
    icon: 'activity',
  },
  {
    id: 'stress-anxiety',
    slug: 'stress-anxiety',
    name: 'Stress & Anxiety',
    category: 'Mental-Emotional Health',
    symptoms: ['Worry', 'Tension', 'Irritability', 'Racing thoughts', 'Panic', 'Overwhelm'],
    description:
      'Modern life brings constant stress that can manifest as anxiety, tension, and emotional imbalance. TCM offers effective tools for calming the mind and restoring emotional equilibrium.',
    tcmPerspective:
      'Stress and anxiety often involve disharmony of the Heart and Liver systems in TCM. Treatment focuses on calming the spirit (Shen), smoothing Liver Qi, and nourishing the Heart to restore peace and emotional balance.',
    treatments: ['Acupuncture', 'Herbal Medicine', 'Qi Gong', 'Lifestyle Coaching'],
    icon: 'brain',
  },
  {
    id: 'insomnia',
    slug: 'insomnia',
    name: 'Insomnia & Sleep Issues',
    category: 'Sleep Disorders',
    symptoms: ['Difficulty falling asleep', 'Frequent waking', 'Early waking', 'Restless sleep', 'Fatigue'],
    description:
      'Quality sleep is essential for health and healing. Whether you have trouble falling asleep, staying asleep, or waking unrefreshed, TCM can help restore natural sleep patterns.',
    tcmPerspective:
      'Sleep issues often relate to Heart and Kidney imbalances, excess heat, or blood deficiency. Treatment nourishes the systems that govern sleep, calms the mind, and addresses the root causes of insomnia.',
    treatments: ['Acupuncture', 'Herbal Medicine', 'Dietary Therapy', 'Lifestyle Coaching'],
    icon: 'moon',
  },
  {
    id: 'digestive-issues',
    slug: 'digestive-issues',
    name: 'Digestive Issues',
    category: 'Digestive Health',
    symptoms: ['IBS', 'Bloating', 'Constipation', 'Diarrhea', 'Acid reflux', 'Nausea', 'Poor appetite'],
    description:
      'Digestive health is fundamental to overall wellness. TCM excels at addressing various digestive complaints by strengthening digestion and harmonizing the digestive system.',
    tcmPerspective:
      'The Spleen and Stomach are central to digestion in TCM. Treatment focuses on strengthening digestive function, regulating Qi flow, and addressing factors like dampness, heat, or stagnation that impair digestion.',
    treatments: ['Acupuncture', 'Herbal Medicine', 'Moxibustion', 'Dietary Therapy'],
    icon: 'stomach',
  },
  {
    id: 'womens-health',
    slug: 'womens-health',
    name: "Women's Health",
    category: 'Reproductive Health',
    symptoms: ['Menstrual irregularities', 'PMS', 'Menopause symptoms', 'PCOS', 'Endometriosis'],
    description:
      'TCM has a long history of supporting women\'s health throughout all life stages, from menstruation to pregnancy to menopause.',
    tcmPerspective:
      'Women\'s health in TCM revolves around balanced blood and Qi, harmonious Liver function, and strong Kidney essence. Treatment regulates the menstrual cycle, eases transitions, and addresses hormonal imbalances naturally.',
    treatments: ['Acupuncture', 'Herbal Medicine', 'Moxibustion', 'Dietary Therapy'],
    icon: 'flower',
  },
  {
    id: 'fertility-support',
    slug: 'fertility-support',
    name: 'Fertility Support',
    category: 'Reproductive Health',
    symptoms: ['Difficulty conceiving', 'Irregular cycles', 'Low ovarian reserve', 'Supporting IVF'],
    description:
      'TCM can support natural fertility and complement assisted reproductive technologies by optimizing reproductive health and creating favorable conditions for conception.',
    tcmPerspective:
      'Fertility depends on abundant Kidney essence, balanced hormones, and smooth flow of Qi and blood to the reproductive organs. Treatment nourishes essence, regulates cycles, and creates optimal conditions for conception.',
    treatments: ['Acupuncture', 'Herbal Medicine', 'Moxibustion', 'Lifestyle Coaching'],
    icon: 'baby',
  },
  {
    id: 'headaches-migraines',
    slug: 'headaches-migraines',
    name: 'Headaches & Migraines',
    category: 'Pain Management',
    symptoms: ['Tension headaches', 'Migraines', 'Cluster headaches', 'Sinus headaches'],
    description:
      'Frequent headaches and migraines can be debilitating. TCM addresses both immediate relief and underlying causes to reduce frequency and severity.',
    tcmPerspective:
      'Headaches often result from Liver Qi stagnation, rising Liver Yang, blood deficiency, or wind invasion. Treatment pattern identifies the specific cause and addresses it with targeted acupuncture points and herbs.',
    treatments: ['Acupuncture', 'Herbal Medicine', 'Cupping', 'Gua Sha'],
    icon: 'zap',
  },
  {
    id: 'allergies',
    slug: 'allergies',
    name: 'Allergies & Sinus Issues',
    category: 'Immune & Respiratory',
    symptoms: ['Seasonal allergies', 'Hay fever', 'Sinus congestion', 'Sneezing', 'Itchy eyes'],
    description:
      'Allergies and sinus problems can significantly affect quality of life. TCM strengthens the immune system and reduces allergic responses naturally.',
    tcmPerspective:
      'Allergies often involve Lung and Spleen weakness, with invasion of external wind. Treatment strengthens defensive Qi, clears wind and dampness, and fortifies the body\'s natural resistance.',
    treatments: ['Acupuncture', 'Herbal Medicine', 'Dietary Therapy'],
    icon: 'wind',
  },
  {
    id: 'fatigue',
    slug: 'fatigue',
    name: 'Chronic Fatigue',
    category: 'Energy & Vitality',
    symptoms: ['Low energy', 'Exhaustion', 'Mental fog', 'Weakness', 'Burnout'],
    description:
      'Persistent fatigue goes beyond normal tiredness and can indicate deeper imbalances. TCM addresses the root causes to restore vitality and resilience.',
    tcmPerspective:
      'Fatigue typically involves Qi deficiency, blood deficiency, or Kidney Yang weakness. Treatment nourishes the fundamental substances (Qi, blood, Yin, Yang) and supports the organs responsible for energy production.',
    treatments: ['Acupuncture', 'Herbal Medicine', 'Moxibustion', 'Dietary Therapy', 'Qi Gong'],
    icon: 'activity',
  },
  {
    id: 'skin-conditions',
    slug: 'skin-conditions',
    name: 'Skin Conditions',
    category: 'Dermatology',
    symptoms: ['Eczema', 'Psoriasis', 'Acne', 'Rosacea', 'Hives', 'Dry skin'],
    description:
      'Skin reflects internal health. TCM treats skin conditions from the inside out, addressing underlying imbalances rather than just suppressing symptoms.',
    tcmPerspective:
      'Skin conditions often involve heat, dampness, blood deficiency, or toxins. Treatment clears heat and dampness, nourishes blood, and promotes healthy skin from within.',
    treatments: ['Acupuncture', 'Herbal Medicine', 'Dietary Therapy'],
    icon: 'spark',
  },
  {
    id: 'post-stroke',
    slug: 'post-stroke',
    name: 'Post-Stroke Recovery',
    category: 'Neurological',
    symptoms: ['Weakness', 'Numbness', 'Speech difficulties', 'Balance issues', 'Facial drooping'],
    description:
      'TCM, particularly acupuncture, can be valuable as part of post-stroke rehabilitation, helping restore function and support neurological recovery.',
    tcmPerspective:
      'Stroke involves wind, phlegm, and blood stagnation blocking the meridians. Treatment focuses on opening meridians, promoting blood circulation, transforming phlegm, and supporting neurological recovery.',
    treatments: ['Acupuncture', 'Herbal Medicine', 'Tui Na'],
    icon: 'activity',
  },
  {
    id: 'immune-support',
    slug: 'immune-support',
    name: 'Immune System Support',
    category: 'Immune & Respiratory',
    symptoms: ['Frequent colds', 'Slow recovery', 'Weak immunity', 'Recurrent infections'],
    description:
      'A strong immune system is your best defense. TCM strengthens your body\'s natural defenses and resilience against illness.',
    tcmPerspective:
      'Immune strength depends on robust defensive Qi (Wei Qi) and strong Spleen, Lung, and Kidney systems. Treatment fortifies these systems and builds overall resistance to external pathogens.',
    treatments: ['Acupuncture', 'Herbal Medicine', 'Moxibustion', 'Dietary Therapy', 'Qi Gong'],
    icon: 'shield',
  },
];

// Utility functions
export function getConditionBySlug(slug: string): Condition | undefined {
  return conditions.find((c) => c.slug === slug);
}

export function getConditionsByCategory(category: string): Condition[] {
  return conditions.filter((c) => c.category === category);
}

export function getAllCategories(): string[] {
  return Array.from(new Set(conditions.map((c) => c.category)));
}

export function getAllConditionSlugs(): string[] {
  return conditions.map((c) => c.slug);
}

export default conditions;

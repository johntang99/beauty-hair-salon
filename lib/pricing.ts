// Pricing page content - Services, packages, insurance info

export interface ServicePrice {
  id: string;
  name: string;
  price: number;
  duration: string;
  description: string;
  includes: string[];
}

export interface Package {
  id: string;
  name: string;
  price: number;
  originalPrice: number;
  savings: number;
  sessions: number;
  validity: string;
  description: string;
  popular?: boolean;
}

export interface PricingContent {
  hero: {
    title: string;
    subtitle: string;
  };
  services: ServicePrice[];
  packages: Package[];
  insurance: {
    title: string;
    description: string[];
    coverage: string[];
  };
  payment: {
    title: string;
    methods: string[];
    notes: string[];
  };
  cancellation: {
    title: string;
    policy: string;
  };
  faqs: {
    question: string;
    answer: string;
  }[];
}

export const pricingContent: PricingContent = {
  hero: {
    title: 'Pricing',
    subtitle: 'Transparent pricing for quality Traditional Chinese Medicine care',
  },
  services: [
    {
      id: 'initial-consultation',
      name: 'Initial Consultation',
      price: 150,
      duration: '60-75 minutes',
      description: 'Comprehensive first visit with treatment',
      includes: [
        'Comprehensive health assessment',
        'TCM diagnosis (tongue & pulse)',
        'Personalized treatment plan',
        'First acupuncture treatment',
      ],
    },
    {
      id: 'follow-up-acupuncture',
      name: 'Follow-Up Acupuncture',
      price: 90,
      duration: '45-60 minutes',
      description: 'Standard acupuncture session',
      includes: [
        'Progress assessment',
        'Acupuncture treatment',
        'May include cupping or moxibustion',
        'Lifestyle & dietary guidance',
      ],
    },
    {
      id: 'herbal-consultation',
      name: 'Herbal Consultation',
      price: 60,
      duration: '30 minutes',
      description: 'Custom herbal formula design',
      includes: [
        'Custom herbal formula design',
        'Preparation instructions',
        'Formula adjustments as needed',
        'Herbs priced separately ($40-80/week)',
      ],
    },
    {
      id: 'cupping-therapy',
      name: 'Cupping Therapy',
      price: 50,
      duration: '30 minutes',
      description: 'Targeted cupping treatment',
      includes: [
        'Targeted cupping treatment',
        'Muscle tension relief',
        'Circulation improvement',
        'Often combined with acupuncture',
      ],
    },
    {
      id: 'tui-na-massage',
      name: 'Tui Na Massage',
      price: 80,
      duration: '45 minutes',
      description: 'Therapeutic Chinese massage',
      includes: [
        'Therapeutic Chinese massage',
        'Meridian-based techniques',
        'Joint mobilization',
        'Acupressure points',
      ],
    },
    {
      id: 'dietary-consultation',
      name: 'Dietary Consultation',
      price: 70,
      duration: '45 minutes',
      description: 'TCM dietary guidance',
      includes: [
        'TCM dietary assessment',
        'Personalized food recommendations',
        'Constitution-based guidance',
        'Recipe suggestions',
      ],
    },
  ],
  packages: [
    {
      id: 'starter',
      name: 'Starter Package',
      price: 425,
      originalPrice: 465,
      savings: 40,
      sessions: 5,
      validity: '3 months',
      description: 'Great for acute conditions',
    },
    {
      id: 'wellness',
      name: 'Wellness Package',
      price: 810,
      originalPrice: 900,
      savings: 90,
      sessions: 10,
      validity: '6 months',
      description: 'Ideal for chronic conditions',
      popular: true,
    },
    {
      id: 'premium',
      name: 'Premium Package',
      price: 1530,
      originalPrice: 1700,
      savings: 170,
      sessions: 20,
      validity: '12 months',
      description: 'Maximum value',
    },
  ],
  insurance: {
    title: 'Insurance Coverage',
    description: [
      'Many insurance plans now cover acupuncture, especially for chronic pain conditions. We recommend verifying your benefits before your first visit.',
      'We can provide detailed receipts (superbills) for you to submit to your insurance company for reimbursement.',
    ],
    coverage: [
      'Whether acupuncture is covered',
      'If a referral is required',
      'Your copay or coinsurance amount',
      'Number of visits covered per year',
    ],
  },
  payment: {
    title: 'Payment Options',
    methods: [
      'Cash, credit cards (Visa, Mastercard, Amex, Discover)',
      'Health Savings Account (HSA) and Flexible Spending Account (FSA)',
      'Payment due at time of service',
    ],
    notes: [
      'HSA and FSA cards accepted',
      'Receipts provided for insurance submission',
      'Package discounts available',
    ],
  },
  cancellation: {
    title: 'Cancellation Policy',
    policy:
      'Please provide at least 24 hours notice for cancellations or rescheduling. Late cancellations or no-shows may be charged 50% of the service fee.',
  },
  faqs: [
    {
      question: 'Can I use my HSA or FSA?',
      answer:
        'Yes! Acupuncture and Chinese herbal medicine are eligible expenses for both Health Savings Accounts (HSA) and Flexible Spending Accounts (FSA).',
    },
    {
      question: 'Do packages expire?',
      answer:
        'Yes, packages have expiration dates to ensure treatment continuity and effectiveness. Starter packages are valid for 3 months, Wellness for 6 months, and Premium for 12 months from purchase date.',
    },
    {
      question: 'Can I share my package with family members?',
      answer:
        'Treatment packages are non-transferable and designed for individual use to ensure personalized, consistent care.',
    },
    {
      question: 'Do you offer sliding scale pricing?',
      answer:
        'We offer limited sliding scale spots for patients with financial hardship. Please contact us directly to discuss your situation.',
    },
  ],
};

export default pricingContent;

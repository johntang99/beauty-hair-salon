// About page content - Salon story, founder, values, credentials

export interface Credential {
  id: string;
  title: string;
  organization?: string;
  year?: string;
}

export interface Statistic {
  id: string;
  value: string;
  label: string;
  icon: string;
}

export interface Value {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export interface AboutContent {
  hero: {
    title: string;
    subtitle: string;
    description: string;
  };
  statistics: Statistic[];
  philosophy: {
    title: string;
    content: string;
  };
  founder: {
    name: string;
    title: string;
    bio: string[];
    credentials: Credential[];
    specialties: string[];
    education: {
      degree: string;
      school: string;
      year: string;
    }[];
  };
  values: Value[];
  whyChooseUs: {
    title: string;
    benefits: {
      title: string;
      description: string;
      icon: string;
    }[];
  };
  salon: {
    title: string;
    description: string[];
    features: string[];
  };
}

export const aboutContent: AboutContent = {
  hero: {
    title: 'About The Beauty Cares',
    subtitle: 'New York\'s Premier Luxury Beauty & Hair Destination',
    description: 'Where artistry meets expertise, and every client leaves feeling beautiful and confident',
  },
  statistics: [
    {
      id: '1',
      value: '15+',
      label: 'Years Experience',
      icon: 'award',
    },
    {
      id: '2',
      value: '5000+',
      label: 'Happy Clients',
      icon: 'heart',
    },
    {
      id: '3',
      value: '4.9',
      label: 'Average Rating',
      icon: 'star',
    },
    {
      id: '4',
      value: '15+',
      label: 'Expert Stylists',
      icon: 'sparkles',
    },
  ],
  philosophy: {
    title: 'Our Philosophy',
    content:
      'At The Beauty Cares, we believe beauty is personal. Every client is unique, and your beauty services should be too. We combine expert technique with personalized care, premium products, and a luxurious experience to help you look and feel your absolute best.',
  },
  founder: {
    name: 'Sophia Martinez',
    title: 'Founder & Master Stylist',
    bio: [
      'Sophia Martinez founded The Beauty Cares in 2010 with a vision to create a welcoming, luxurious space where every client feels valued and beautiful. With over 20 years of experience in the beauty industry, Sophia has built a reputation as one of New York\'s most sought-after hair colorists and bridal stylists.',
      'Her passion for beauty began at age 16 when she started working in her mother\'s salon. After formal training and years of experience with top salons in Manhattan, Sophia opened The Beauty Cares to offer high-end services in a warm, personal environment.',
      'Today, Sophia leads a team of talented stylists, estheticians, and beauty professionals who share her commitment to excellence, ongoing education, and personalized client care.',
    ],
    credentials: [
      {
        id: '1',
        title: 'Master Colorist Certification',
        organization: 'Redken Elite Academy',
        year: '2012',
      },
      {
        id: '2',
        title: 'Bridal Beauty Specialist',
        organization: 'Professional Beauty Association',
        year: '2015',
      },
      {
        id: '3',
        title: 'Olaplex Master Certification',
        organization: 'Olaplex',
        year: '2018',
      },
      {
        id: '4',
        title: 'Advanced Balayage Techniques',
        organization: 'L\'Oréal Professional',
        year: '2020',
      },
      {
        id: '5',
        title: 'Business Owner Excellence Award',
        organization: 'NY Beauty Council',
        year: '2022',
      },
    ],
    specialties: [
      'Advanced Hair Color & Correction',
      'Balayage & Dimensional Color',
      'Bridal Hair & Makeup',
      'Color Formulation',
      'Salon Management',
      'Team Training & Development',
    ],
    education: [
      {
        degree: 'Cosmetology License',
        school: 'Aveda Institute New York',
        year: '2003',
      },
      {
        degree: 'Advanced Color Theory',
        school: 'Vidal Sassoon Academy',
        year: '2008',
      },
      {
        degree: 'Bridal Beauty Certification',
        school: 'QC Makeup Academy',
        year: '2014',
      },
    ],
  },
  values: [
    {
      id: '1',
      title: 'Personalized Care',
      description:
        'We believe every client is unique. Your consultation is thorough, your treatment is customized, and your experience is tailored to your individual needs and goals.',
      icon: 'heart',
    },
    {
      id: '2',
      title: 'Expert Artistry',
      description:
        'Our team consists of highly trained, certified professionals who stay current with the latest techniques, trends, and products through ongoing education.',
      icon: 'award',
    },
    {
      id: '3',
      title: 'Premium Products',
      description:
        'We exclusively use high-quality, professional-grade products that deliver exceptional results while maintaining the health of your hair and skin.',
      icon: 'sparkles',
    },
    {
      id: '4',
      title: 'Luxurious Experience',
      description:
        'From the moment you walk in, you\'ll experience a welcoming, relaxing atmosphere with complimentary beverages, comfortable seating, and attentive service.',
      icon: 'star',
    },
    {
      id: '5',
      title: 'Client Satisfaction',
      description:
        'Your satisfaction is our top priority. We\'re not happy until you\'re thrilled with your results, and we stand behind every service we provide.',
      icon: 'thumbs-up',
    },
    {
      id: '6',
      title: 'Community Focus',
      description:
        'We\'re proud to be part of the New York beauty community, supporting local businesses, participating in charity events, and giving back to our neighborhood.',
      icon: 'users',
    },
  ],
  whyChooseUs: {
    title: 'Why Choose The Beauty Cares',
    benefits: [
      {
        title: 'Experienced Team',
        description:
          'Our stylists and estheticians average 8+ years of professional experience, with ongoing training in the latest techniques.',
        icon: 'award',
      },
      {
        title: 'Consultative Approach',
        description:
          'Every service begins with a thorough consultation to understand your goals, lifestyle, and maintenance preferences.',
        icon: 'message-circle',
      },
      {
        title: 'Luxury Amenities',
        description:
          'Enjoy complimentary beverages, free WiFi, comfortable robes, and a relaxing atmosphere designed for your comfort.',
        icon: 'sparkles',
      },
      {
        title: 'Flexible Scheduling',
        description:
          'We offer convenient hours including evenings and weekends, plus online booking for your convenience.',
        icon: 'calendar',
      },
      {
        title: 'Satisfaction Guarantee',
        description:
          'We stand behind our work. If you\'re not completely satisfied, we\'ll make it right at no additional charge.',
        icon: 'shield-check',
      },
    ],
  },
  salon: {
    title: 'Our Beautiful Salon',
    description: [
      'Located in the heart of New York, The Beauty Cares offers a modern, luxurious space designed for your comfort and relaxation. Our salon features contemporary styling stations, private treatment rooms, and a welcoming reception area.',
      'Every detail has been thoughtfully designed to create an environment where you can relax, refresh, and enjoy your beauty experience. From our comfortable shampoo chairs to our well-lit styling areas, we\'ve created a space that supports both exceptional results and a pleasant experience.',
    ],
    features: [
      'Modern, well-lit styling stations',
      'Private treatment rooms for facials and specialty services',
      'Comfortable shampoo lounge with massage chairs',
      'Complimentary beverage bar (coffee, tea, wine)',
      'Free WiFi throughout the salon',
      'Accessible entrance and facilities',
      'Secure parking nearby',
      'Retail boutique with professional products',
      'Relaxing music and ambiance',
      'Sanitary practices exceeding industry standards',
    ],
  },
};

export default aboutContent;

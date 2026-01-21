// New patients page content - What to expect, preparation, FAQ

export interface VisitStep {
  id: string;
  step: number;
  title: string;
  description: string;
  duration?: string;
}

export interface Preparation {
  category: string;
  items: string[];
}

export interface FAQ {
  id: string;
  question: string;
  answer: string;
}

export interface NewPatientsContent {
  hero: {
    title: string;
    subtitle: string;
  };
  whatToExpect: {
    title: string;
    steps: VisitStep[];
  };
  preparation: {
    title: string;
    sections: Preparation[];
  };
  insurance: {
    title: string;
    description: string[];
    checkBefore: string[];
  };
  faqs: FAQ[];
}

export const newPatientsContent: NewPatientsContent = {
  hero: {
    title: 'New Patient Information',
    subtitle: 'Welcome to Dr Huang Clinic! Here\'s everything you need to know before your first visit.',
  },
  whatToExpect: {
    title: 'What to Expect at Your First Visit',
    steps: [
      {
        id: '1',
        step: 1,
        title: 'Comprehensive Consultation',
        description:
          'Dr. Huang will review your health history, current symptoms, lifestyle, diet, sleep patterns, and health goals. In Traditional Chinese Medicine, we look at the whole person, not just isolated symptoms.',
        duration: '30-40 minutes',
      },
      {
        id: '2',
        step: 2,
        title: 'TCM Diagnosis',
        description:
          'Dr. Huang will perform tongue diagnosis and pulse diagnosis, two key diagnostic methods in Chinese Medicine that help identify underlying patterns and imbalances.',
      },
      {
        id: '3',
        step: 3,
        title: 'Treatment Plan Discussion',
        description:
          'We\'ll explain your diagnosis from a TCM perspective and create a personalized treatment plan that may include acupuncture, herbal medicine, dietary recommendations, and lifestyle guidance.',
      },
      {
        id: '4',
        step: 4,
        title: 'First Treatment',
        description:
          'If appropriate, we\'ll begin treatment during your first visit. Most patients find acupuncture deeply relaxing and experience minimal to no discomfort.',
        duration: '20-30 minutes',
      },
    ],
  },
  preparation: {
    title: 'How to Prepare',
    sections: [
      {
        category: 'Before Your Visit',
        items: [
          'Eat a light meal 1-2 hours before your appointment',
          'Wear loose, comfortable clothing',
          'Bring a list of current medications and supplements',
          'Arrive 10 minutes early to complete intake forms',
        ],
      },
      {
        category: 'What to Bring',
        items: [
          'Photo ID',
          'Insurance card (if applicable)',
          'List of questions or concerns',
          'Recent lab results or imaging reports (if relevant)',
        ],
      },
    ],
  },
  insurance: {
    title: 'Insurance & Payment',
    description: [
      'We accept cash, credit cards, and health savings account (HSA) payments. Some insurance plans cover acupuncture, especially for pain management.',
      'We can provide itemized receipts (superbills) for you to submit to your insurance for potential reimbursement.',
    ],
    checkBefore: [
      'Whether acupuncture is covered',
      'If a referral is required',
      'Your copay or coinsurance amount',
      'Number of visits covered per year',
    ],
  },
  faqs: [
    {
      id: '1',
      question: 'Does acupuncture hurt?',
      answer:
        'Most patients feel minimal to no discomfort. Acupuncture needles are extremely thin (about the width of a hair), and insertion is usually painless. You may feel a brief pinch or tingling sensation, followed by deep relaxation.',
    },
    {
      id: '2',
      question: 'How many treatments will I need?',
      answer:
        'Treatment frequency depends on your condition and how long you\'ve had it. Acute conditions may improve in 3-5 sessions, while chronic conditions often require ongoing care. We\'ll create a personalized treatment plan and adjust as you progress.',
    },
    {
      id: '3',
      question: 'Is Chinese Medicine safe?',
      answer:
        'When performed by a licensed practitioner like Dr. Huang, Traditional Chinese Medicine is extremely safe. We use sterile, single-use needles and follow strict safety protocols. Herbal formulas are prescribed based on your individual constitution and monitored regularly.',
    },
    {
      id: '4',
      question: 'Do you accept insurance?',
      answer:
        'We accept some insurance plans for acupuncture. Please contact your insurance provider to verify your coverage for acupuncture services. We can provide receipts for you to submit for reimbursement.',
    },
    {
      id: '5',
      question: 'Can I combine TCM with conventional medicine?',
      answer:
        'Yes! Traditional Chinese Medicine can complement conventional treatments. Many patients use TCM alongside Western medicine. Please inform us of all medications and treatments you\'re receiving so we can coordinate care safely.',
    },
    {
      id: '6',
      question: 'What conditions can you treat?',
      answer:
        'Traditional Chinese Medicine can address a wide range of conditions including pain, stress, digestive issues, insomnia, fertility concerns, headaches, allergies, and many others. Visit our Conditions page for a full list.',
    },
  ],
};

export default newPatientsContent;

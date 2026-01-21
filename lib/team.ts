// Team Members for The Beauty Cares
// Complete team profiles with creative positioning for floating layout

export interface TeamMember {
  id: string;
  slug: string;
  name: string;
  role: 'owner' | 'senior_stylist' | 'stylist' | 'esthetician' | 'makeup_artist' | 'lash_tech' | 'assistant_manager' | 'receptionist';
  title: string; // Display title
  photo: string; // Path to photo (placeholder for now)
  bio: string;
  specialties: string[];
  certifications: string[];
  yearsExperience: number;
  instagram?: string;
  featured?: boolean;
  // For creative floating circles layout
  position?: {
    top: string;
    left: string;
    rotation: number;
  };
}

export const teamMembers: TeamMember[] = [
  {
    id: '1',
    slug: 'sophia-martinez',
    name: 'Sophia Martinez',
    role: 'owner',
    title: 'Owner & Master Stylist',
    photo: '/images/team/sophia-martinez.jpg',
    bio: 'With over 20 years of experience in the beauty industry, Sophia founded The Beauty Cares with a vision to create a luxurious, welcoming space where every client feels pampered and beautiful. Her expertise in hair color and bridal styling has made her one of the most sought-after stylists in New York.',
    specialties: ['Hair Color Specialist', 'Bridal Expert', 'Color Correction', 'Balayage Master'],
    certifications: [
      'Master Colorist Certification',
      'Bridal Beauty Specialist',
      'Redken Certified',
      'Olaplex Expert',
    ],
    yearsExperience: 20,
    instagram: '@sophiabeautynyc',
    featured: true,
    position: {
      top: '10%',
      left: '15%',
      rotation: -5,
    },
  },
  {
    id: '2',
    slug: 'emma-thompson',
    name: 'Emma Thompson',
    role: 'senior_stylist',
    title: 'Senior Stylist',
    photo: '/images/team/emma-thompson.jpg',
    bio: 'Emma is a precision cutting specialist with 15 years of experience creating stunning, wearable styles. Her attention to detail and understanding of face shapes ensure every client leaves with a cut that enhances their natural beauty and suits their lifestyle.',
    specialties: ['Precision Cutting', 'Bob Specialist', 'Layered Cuts', 'Style Consultation'],
    certifications: [
      'Vidal Sassoon Advanced Cutting',
      'Toni&Guy Certified',
      'Texture Specialist',
    ],
    yearsExperience: 15,
    instagram: '@emmastyles',
    featured: true,
    position: {
      top: '20%',
      left: '45%',
      rotation: 3,
    },
  },
  {
    id: '3',
    slug: 'olivia-chen',
    name: 'Olivia Chen',
    role: 'senior_stylist',
    title: 'Hair Color Expert',
    photo: '/images/team/olivia-chen.jpg',
    bio: 'Olivia specializes in balayage and dimensional color techniques that create natural-looking, sun-kissed results. With 10 years of experience, she has mastered the art of hand-painting color to enhance and illuminate every hair type.',
    specialties: ['Balayage Specialist', 'Dimensional Color', 'Blonding Expert', 'Color Melting'],
    certifications: [
      'Advanced Balayage Certification',
      'Blonde Specialist',
      'L\'Oréal Color Degree',
    ],
    yearsExperience: 10,
    instagram: '@oliviacolorbar',
    featured: true,
    position: {
      top: '15%',
      left: '75%',
      rotation: -8,
    },
  },
  {
    id: '4',
    slug: 'isabella-rose',
    name: 'Isabella Rose',
    role: 'esthetician',
    title: 'Lead Esthetician',
    photo: '/images/team/isabella-rose.jpg',
    bio: 'Isabella is our lead esthetician with 12 years of experience in advanced skincare treatments. Her holistic approach to skin health combines cutting-edge treatments with personalized care to help clients achieve their best skin.',
    specialties: ['Advanced Facials', 'Chemical Peels', 'Microdermabrasion', 'Anti-Aging Treatments'],
    certifications: [
      'Licensed Esthetician',
      'Advanced Skincare Specialist',
      'Chemical Peel Certified',
      'Dermaplaning Expert',
    ],
    yearsExperience: 12,
    instagram: '@isabellaroseskin',
    featured: true,
    position: {
      top: '45%',
      left: '20%',
      rotation: 5,
    },
  },
  {
    id: '5',
    slug: 'mia-johnson',
    name: 'Mia Johnson',
    role: 'stylist',
    title: 'Curly Hair Specialist',
    photo: '/images/team/mia-johnson.jpg',
    bio: 'Mia is passionate about curly hair and has dedicated her 8-year career to mastering curly cutting techniques. She understands the unique needs of textured hair and creates beautiful, defined curls that clients love.',
    specialties: ['Curly Hair Cutting', 'DevaCut Certified', 'Texture Specialist', 'Natural Hair Care'],
    certifications: [
      'DevaCurl Certified',
      'Ouidad Certified',
      'Curly Hair Specialist',
    ],
    yearsExperience: 8,
    instagram: '@miacurlsnyc',
    position: {
      top: '40%',
      left: '50%',
      rotation: -3,
    },
  },
  {
    id: '6',
    slug: 'ava-williams',
    name: 'Ava Williams',
    role: 'makeup_artist',
    title: 'Bridal Makeup Artist',
    photo: '/images/team/ava-williams.jpg',
    bio: 'Ava is a professional makeup artist specializing in bridal beauty. With 7 years of experience, she has perfected the art of creating flawless, long-lasting makeup that looks stunning in person and photographs beautifully.',
    specialties: ['Bridal Makeup', 'Airbrush Makeup', 'Special Event Makeup', 'Makeup Lessons'],
    certifications: [
      'Professional Makeup Artist',
      'Airbrush Certified',
      'Bridal Beauty Specialist',
      'MAC Pro Certified',
    ],
    yearsExperience: 7,
    instagram: '@avamakeupnyc',
    featured: true,
    position: {
      top: '35%',
      left: '80%',
      rotation: 7,
    },
  },
  {
    id: '7',
    slug: 'charlotte-lee',
    name: 'Charlotte Lee',
    role: 'stylist',
    title: 'Stylist',
    photo: '/images/team/charlotte-lee.jpg',
    bio: 'Charlotte brings 5 years of experience and fresh, creative energy to The Beauty Cares. She excels at modern cuts and styling techniques, keeping up with the latest trends while ensuring wearable, flattering results.',
    specialties: ['Modern Cuts', 'Blowout Specialist', 'Event Styling', 'Men\'s Cuts'],
    certifications: [
      'Cosmetology License',
      'Blow-Dry Specialist',
      'Paul Mitchell Certified',
    ],
    yearsExperience: 5,
    instagram: '@charlottestylesnyc',
    position: {
      top: '65%',
      left: '15%',
      rotation: -6,
    },
  },
  {
    id: '8',
    slug: 'amelia-garcia',
    name: 'Amelia Garcia',
    role: 'esthetician',
    title: 'Esthetician',
    photo: '/images/team/amelia-garcia.jpg',
    bio: 'Amelia specializes in skin treatments and has 6 years of experience helping clients achieve their skincare goals. Her gentle approach and extensive product knowledge make her a favorite among clients seeking healthier, glowing skin.',
    specialties: ['Customized Facials', 'Waxing Services', 'LED Therapy', 'Skin Consultations'],
    certifications: [
      'Licensed Esthetician',
      'Facial Specialist',
      'Waxing Certified',
    ],
    yearsExperience: 6,
    instagram: '@ameliaskincare',
    position: {
      top: '70%',
      left: '45%',
      rotation: 4,
    },
  },
  {
    id: '9',
    slug: 'harper-davis',
    name: 'Harper Davis',
    role: 'lash_tech',
    title: 'Lash Extension Specialist',
    photo: '/images/team/harper-davis.jpg',
    bio: 'Harper is our lash extension expert with 4 years of specialized experience. Her meticulous attention to detail and artistry create stunning lash sets that enhance natural beauty and last beautifully.',
    specialties: ['Lash Extensions', 'Volume Lashes', 'Hybrid Sets', 'Lash Lifts'],
    certifications: [
      'Certified Lash Technician',
      'Volume Lash Specialist',
      'Classic Lash Certified',
      'Lash Lift Certified',
    ],
    yearsExperience: 4,
    instagram: '@harperlashesnyc',
    position: {
      top: '60%',
      left: '75%',
      rotation: -4,
    },
  },
  {
    id: '10',
    slug: 'evelyn-wilson',
    name: 'Evelyn Wilson',
    role: 'stylist',
    title: 'Colorist',
    photo: '/images/team/evelyn-wilson.jpg',
    bio: 'Evelyn is a talented colorist with 9 years of experience specializing in highlights and dimensional color. Her artistic eye and technical skill create beautiful, natural-looking results that complement each client\'s unique features.',
    specialties: ['Highlights Expert', 'Foiling Techniques', 'Toning Specialist', 'Gray Blending'],
    certifications: [
      'Advanced Colorist',
      'Highlight Specialist',
      'Wella Certified',
    ],
    yearsExperience: 9,
    instagram: '@evelyncolornyc',
    position: {
      top: '25%',
      left: '30%',
      rotation: 2,
    },
  },
  {
    id: '11',
    slug: 'abigail-moore',
    name: 'Abigail Moore',
    role: 'assistant_manager',
    title: 'Assistant Manager',
    photo: '/images/team/abigail-moore.jpg',
    bio: 'Abigail ensures our salon runs smoothly and efficiently. With 3 years of experience in salon management, she oversees operations, scheduling, and client relations to ensure every visit exceeds expectations.',
    specialties: ['Operations Management', 'Client Relations', 'Scheduling', 'Team Coordination'],
    certifications: [
      'Salon Management Certificate',
      'Customer Service Excellence',
    ],
    yearsExperience: 3,
    position: {
      top: '85%',
      left: '30%',
      rotation: -2,
    },
  },
  {
    id: '12',
    slug: 'emily-taylor',
    name: 'Emily Taylor',
    role: 'receptionist',
    title: 'Client Care Specialist',
    photo: '/images/team/emily-taylor.jpg',
    bio: 'Emily is the welcoming face of The Beauty Cares. With 2 years of experience, she ensures every client feels valued from the moment they walk through our doors. Her warm personality and organizational skills keep everything running smoothly.',
    specialties: ['Client Care', 'Appointment Scheduling', 'Product Knowledge', 'Guest Experience'],
    certifications: [
      'Customer Service Certified',
      'Product Knowledge Training',
    ],
    yearsExperience: 2,
    position: {
      top: '80%',
      left: '65%',
      rotation: 3,
    },
  },
];

// Helper functions
export const getFeaturedTeamMembers = () => {
  return teamMembers.filter((member) => member.featured);
};

export const getTeamMemberBySlug = (slug: string) => {
  return teamMembers.find((member) => member.slug === slug);
};

export const getTeamMembersByRole = (role: TeamMember['role']) => {
  return teamMembers.filter((member) => member.role === role);
};

export const getSeniorStaff = () => {
  return teamMembers.filter(
    (member) => member.role === 'owner' || member.role === 'senior_stylist'
  );
};

export const getStylists = () => {
  return teamMembers.filter(
    (member) => 
      member.role === 'owner' || 
      member.role === 'senior_stylist' || 
      member.role === 'stylist'
  );
};

export const getBeautySpecialists = () => {
  return teamMembers.filter(
    (member) => 
      member.role === 'esthetician' || 
      member.role === 'makeup_artist' || 
      member.role === 'lash_tech'
  );
};

export const featuredTeam = getFeaturedTeamMembers();
export const seniorStaff = getSeniorStaff();
export const stylists = getStylists();
export const beautySpecialists = getBeautySpecialists();

export default teamMembers;

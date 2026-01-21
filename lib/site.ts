// Site-wide configuration for The Beauty Cares
// All branding, contact info, navigation, and theme settings

export const siteConfig = {
  // Brand Identity
  brand: {
    name: 'The Beauty Cares',
    tagline: 'Where Beauty Meets Art',
    description: 'Luxury beauty and hair services in the heart of New York. Expert stylists, premium products, and personalized care for your complete transformation.',
  },

  // Contact Information
  contact: {
    phone: {
      display: '(555) 123-4567',
      raw: '+15551234567',
      href: 'tel:+15551234567',
    },
    email: {
      display: 'hello@thebeautycares.com',
      href: 'mailto:hello@thebeautycares.com',
    },
    address: {
      street: '123 Fashion Avenue',
      city: 'New York',
      state: 'NY',
      zip: '10001',
      country: 'United States',
      full: '123 Fashion Avenue, New York, NY 10001',
      mapEmbed:
        'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.2176039469597!2d-73.98823492404069!3d40.74844097139097!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259a9b3117469%3A0xd134e199a405a163!2sEmpire%20State%20Building!5e0!3m2!1sen!2sus!4v1234567890!5m2!1sen!2sus',
    },
    hours: {
      monday: { open: '9:00 AM', close: '7:00 PM' },
      tuesday: { open: '9:00 AM', close: '7:00 PM' },
      wednesday: { open: '9:00 AM', close: '7:00 PM' },
      thursday: { open: '9:00 AM', close: '8:00 PM' },
      friday: { open: '9:00 AM', close: '8:00 PM' },
      saturday: { open: '9:00 AM', close: '6:00 PM' },
      sunday: { open: '11:00 AM', close: '5:00 PM' },
    },
    hoursFormatted: [
      { days: 'Monday - Wednesday', hours: '9:00 AM - 7:00 PM' },
      { days: 'Thursday - Friday', hours: '9:00 AM - 8:00 PM' },
      { days: 'Saturday', hours: '9:00 AM - 6:00 PM' },
      { days: 'Sunday', hours: '11:00 AM - 5:00 PM' },
    ],
  },

  // Schema.org / SEO Data
  schema: {
    businessType: 'BeautySalon',
    url: 'https://thebeautycares.com',
    geo: {
      latitude: 40.7484,
      longitude: -73.9857,
    },
    priceRange: '$$$',
  },

  // SEO Defaults
  seo: {
    defaultTitle: 'The Beauty Cares | Luxury Beauty & Hair Salon | New York, NY',
    titleTemplate: '%s | The Beauty Cares',
    defaultDescription:
      'Experience luxury beauty and hair services at The Beauty Cares. Expert stylists, premium products, and personalized care for hair, makeup, skincare, and complete transformations in New York.',
    keywords: [
      'beauty salon NYC',
      'hair salon New York',
      'luxury hair salon',
      'makeup artist NYC',
      'bridal hair and makeup',
      'hair color specialist',
      'balayage NYC',
      'facial treatments',
      'lash extensions',
      'beauty salon near me',
    ],
  },

  // Navigation Structure
  navigation: {
    main: [
      { name: 'Home', href: '/' },
      { name: 'Services', href: '/services' },
      { name: 'Products', href: '/products' },
      { name: 'Our Team', href: '/team' },
      { name: 'Gallery', href: '/gallery' },
      { name: 'Pricing', href: '/pricing' },
      { name: 'Case Studies', href: '/case-studies' },
      { name: 'Blog', href: '/blog' },
    ],
    footer: {
      services: [
        { name: 'Hair Services', href: '/services#hair' },
        { name: 'Beauty Services', href: '/services#beauty' },
        { name: 'Bridal Packages', href: '/services#bridal' },
        { name: 'Special Events', href: '/services#events' },
      ],
      quickLinks: [
        { name: 'About Us', href: '/about' },
        { name: 'Book Appointment', href: '/book' },
        { name: 'Products', href: '/products' },
        { name: 'Contact', href: '/contact' },
      ],
    },
  },

  // Theme Tokens (Pink & Purple - Chic Pink theme)
  theme: {
    colors: {
      primary: {
        50: '#FDF2F8',
        100: '#FCE7F3',
        200: '#FBCFE8',
        300: '#F9A8D4',
        400: '#F472B6',
        500: '#EC4899', // Pink-500
        600: '#DB2777', // Pink-600 (main)
        700: '#BE185D', // Pink-700
        800: '#9F1239',
        900: '#831843',
      },
      accent: {
        50: '#FAF5FF',
        100: '#F3E8FF',
        200: '#E9D5FF',
        300: '#D8B4FE',
        400: '#C084FC',
        500: '#A855F7', // Purple-500 (main)
        600: '#9333EA', // Purple-600
        700: '#7E22CE',
        800: '#6B21A8',
        900: '#581C87',
      },
      neutral: {
        50: '#fafaf9',
        100: '#f5f5f4',
        200: '#e7e5e4',
        300: '#d6d3d1',
        400: '#a8a29e',
        500: '#78716c',
        600: '#57534e',
        700: '#44403c',
        800: '#292524',
        900: '#1c1917',
      },
    },
  },

  // Call-to-Action Buttons
  cta: {
    primary: {
      text: 'Book Your Appointment',
      href: '/book',
    },
    secondary: {
      text: 'Call Now',
      href: 'tel:+15551234567',
    },
  },

  // Business Settings
  settings: {
    acceptNewPatients: true, // "Accepting new clients"
    parkingAvailable: true,
    wheelchairAccessible: true,
    languages: ['English', 'Spanish'],
    specialties: [
      'Hair Color & Highlights',
      'Haircuts & Styling',
      'Bridal Hair & Makeup',
      'Facials & Skincare',
      'Lash Extensions',
      'Makeup Services',
    ],
    amenities: [
      'Complimentary Beverages',
      'Free WiFi',
      'Luxury Products',
      'Private Rooms Available',
      'Relaxing Ambiance',
      'Online Booking',
    ],
  },

  // Social Media (optional - add when ready)
  social: {
    instagram: 'https://instagram.com/thebeautycares',
    facebook: 'https://facebook.com/thebeautycares',
    pinterest: 'https://pinterest.com/thebeautycares',
    tiktok: 'https://tiktok.com/@thebeautycares',
  },
};

export const brand = siteConfig.brand;
export const contact = siteConfig.contact;
export const navigation = siteConfig.navigation;
export const seo = siteConfig.seo;
export const theme = siteConfig.theme;
export const cta = siteConfig.cta;
export const settings = siteConfig.settings;
export const schema = siteConfig.schema;

export default siteConfig;

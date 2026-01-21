// Client Testimonials for The Beauty Cares

export interface Testimonial {
  id: string;
  name: string;
  initial?: string;
  service: string; // Changed from "condition" to "service"
  text: string;
  rating: number;
  date?: string;
  photo?: string;
}

export const testimonials: Testimonial[] = [
  {
    id: '1',
    name: 'Emily Rodriguez',
    service: 'Balayage & Styling',
    text: 'Olivia transformed my hair with the most beautiful balayage! The color is exactly what I wanted - natural, sun-kissed, and low maintenance. I get compliments everywhere I go. The salon is gorgeous and everyone is so friendly!',
    rating: 5,
    date: '2024-12',
  },
  {
    id: '2',
    name: 'Jessica M.',
    service: 'Bridal Hair & Makeup',
    text: 'Ava made me feel like an absolute princess on my wedding day! The trial session was so helpful, and on the day, everything was perfect. My makeup lasted through tears, hugs, and dancing. I looked back at my photos and felt beautiful.',
    rating: 5,
    date: '2024-11',
  },
  {
    id: '3',
    name: 'Sarah Thompson',
    service: 'Facial Treatment',
    text: 'Isabella is a skincare miracle worker! After struggling with acne for years, her customized facial treatments and product recommendations completely transformed my skin. I finally feel confident without makeup.',
    rating: 5,
    date: '2024-12',
  },
  {
    id: '4',
    name: 'Amanda Chen',
    service: 'Lash Extensions',
    text: 'Harper\'s lash extensions are incredible! They look so natural and last forever. I wake up feeling put-together without any effort. Best beauty investment I\'ve ever made. Harper is meticulous and the results are stunning.',
    rating: 5,
    date: '2024-12',
  },
  {
    id: '5',
    name: 'Lauren Davis',
    service: 'Hair Color Correction',
    text: 'Sophia saved my hair! After a bad color job elsewhere, I came to her in tears. She patiently corrected it over a few sessions and now my hair is healthier and more beautiful than ever. She\'s a true master colorist.',
    rating: 5,
    date: '2024-10',
  },
  {
    id: '6',
    name: 'Rachel Williams',
    service: 'Haircut & Style',
    text: 'Emma gave me the best haircut of my life! She really listened to what I wanted and understood my hair type perfectly. The cut grows out beautifully and is so easy to style at home. I\'ll never go anywhere else.',
    rating: 5,
    date: '2024-11',
  },
  {
    id: '7',
    name: 'Michelle Garcia',
    service: 'Microblading',
    text: 'My microbladed brows from The Beauty Cares are perfect! I no longer spend 20 minutes every morning filling in my brows. They look natural and have completely changed my morning routine. Worth every penny!',
    rating: 5,
    date: '2024-09',
  },
  {
    id: '8',
    name: 'Jennifer Taylor',
    service: 'Curly Hair Cut',
    text: 'Mia is the only stylist who truly understands curly hair! She gave me a DevaCut and taught me how to care for my curls properly. For the first time in my life, I love my natural hair. She\'s a curly hair genius!',
    rating: 5,
    date: '2024-11',
  },
  {
    id: '9',
    name: 'Nicole Anderson',
    service: 'Special Event Styling',
    text: 'Charlotte did my hair for my sister\'s wedding and I felt like a movie star! The updo was elegant, comfortable, and lasted all night through dancing. Everyone asked who did my hair. I have her on speed dial now!',
    rating: 5,
    date: '2024-10',
  },
  {
    id: '10',
    name: 'Ashley Martinez',
    service: 'Full Highlights',
    text: 'Evelyn is a highlight goddess! My hair has so much dimension and the toner she used is perfection. The color lasts much longer than other salons I\'ve tried. The Beauty Cares is now my go-to for everything.',
    rating: 5,
    date: '2024-12',
  },
  {
    id: '11',
    name: 'Stephanie Lee',
    service: 'Facial & Waxing',
    text: 'Amelia is so gentle and professional! The facial was incredibly relaxing and my skin glowed for weeks. The waxing was quick and way less painful than other places. She makes you feel so comfortable.',
    rating: 5,
    date: '2024-11',
  },
  {
    id: '12',
    name: 'Brittany Wilson',
    service: 'Hair Extensions',
    text: 'The hair extensions I got at The Beauty Cares completely changed my look! They blend seamlessly with my natural hair and the quality is amazing. Finally have the long, voluminous hair I\'ve always wanted!',
    rating: 5,
    date: '2024-09',
  },
  {
    id: '13',
    name: 'Danielle Moore',
    service: 'Makeup Application',
    text: 'Ava did my makeup for a photoshoot and I looked flawless! She knew exactly how to make me camera-ready. The makeup stayed perfect all day and I got so many compliments. She\'s a true artist.',
    rating: 5,
    date: '2024-10',
  },
  {
    id: '14',
    name: 'Christina Brown',
    service: 'Keratin Treatment',
    text: 'My frizzy hair is now smooth and manageable thanks to the keratin treatment! It cut my styling time in half and my hair looks healthy and shiny. I should have done this years ago. Amazing results!',
    rating: 5,
    date: '2024-10',
  },
  {
    id: '15',
    name: 'Melissa Johnson',
    service: 'Complete Transformation',
    text: 'I came in for a complete makeover and the team at The Beauty Cares delivered! New color, cut, makeup lesson, and skincare routine. I feel like a new person. The entire experience was luxurious and the results exceeded my expectations.',
    rating: 5,
    date: '2024-11',
  },
];

// Helper functions
export function getFeaturedTestimonials(limit: number = 3): Testimonial[] {
  return testimonials.slice(0, limit);
}

export function getTestimonialsByService(service: string): Testimonial[] {
  return testimonials.filter((t) => 
    t.service.toLowerCase().includes(service.toLowerCase())
  );
}

export function getRecentTestimonials(limit: number = 5): Testimonial[] {
  return [...testimonials]
    .sort((a, b) => {
      if (!a.date || !b.date) return 0;
      return b.date.localeCompare(a.date);
    })
    .slice(0, limit);
}

export default testimonials;

import {
  Heart,
  Gem,
  Baby,
  Sparkles,
  Users,
  Plane,
  Shield,
  Clock,
  Headphones,
  Award,
  MapPin,
  type LucideIcon,
} from "lucide-react";

// ─── Navigation ──────────────────────────────────────────
export const NAV_LINKS = [
  { label: "Experiences", href: "#experiences" },
  { label: "Why XO", href: "#why-xo" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "Contact", href: "/inquiry" },
] as const;

// ─── Hero Stats ──────────────────────────────────────────
export const HERO_STATS = [
  { value: "500+", label: "Journeys Curated" },
  { value: "50+", label: "Countries" },
  { value: "5-Star", label: "Service" },
] as const;

export const TRUST_STRIP = [
  "Tailor-Made Itineraries",
  "Premium Stays",
  "Private Experiences",
  "Concierge Support",
] as const;

// ─── Experience Categories ───────────────────────────────
export interface ExperienceCategory {
  title: string;
  tagline: string;
  icon: LucideIcon;
  image: string;
}

export const EXPERIENCE_CATEGORIES: ExperienceCategory[] = [
  {
    title: "Honeymoons",
    tagline: "Begin forever in paradise",
    icon: Heart,
    image: "https://images.unsplash.com/photo-1439130490301-25e322d88054?w=800&h=600&fit=crop",
  },
  {
    title: "Proposals",
    tagline: "The perfect moment, perfectly planned",
    icon: Gem,
    image: "https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?w=800&h=600&fit=crop",
  },
  {
    title: "Anniversaries",
    tagline: "Celebrate your love story",
    icon: Sparkles,
    image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800&h=600&fit=crop",
  },
  {
    title: "Babymoons",
    tagline: "Serenity before the beautiful chaos",
    icon: Baby,
    image: "https://images.unsplash.com/photo-1540541338287-41700207dee6?w=800&h=600&fit=crop",
  },
  {
    title: "Romantic Getaways",
    tagline: "Escape together, reconnect deeply",
    icon: Heart,
    image: "https://images.unsplash.com/photo-1510414842594-a61c69b5ae57?w=800&h=600&fit=crop",
  },
  {
    title: "Family Escapes",
    tagline: "Memories the whole family will treasure",
    icon: Users,
    image: "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?w=800&h=600&fit=crop",
  },
];

// ─── Why XO Value Props ─────────────────────────────────
export interface ValueProp {
  icon: LucideIcon;
  title: string;
  description: string;
}

export const VALUE_PROPS: ValueProp[] = [
  {
    icon: Sparkles,
    title: "No Fixed Packages",
    description:
      "Every journey is designed from scratch around your preferences, pace, and passions.",
  },
  {
    icon: Gem,
    title: "Fully Curated Experiences",
    description:
      "From sunset dinners to private tours, every moment is thoughtfully orchestrated.",
  },
  {
    icon: Award,
    title: "Premium Stays",
    description:
      "Handpicked luxury hotels, overwater villas, and boutique properties worldwide.",
  },
  {
    icon: Shield,
    title: "End-to-End Planning",
    description:
      "Flights, transfers, activities, dining — we handle every detail so you don't have to.",
  },
  {
    icon: Heart,
    title: "Personalized Recommendations",
    description:
      "We learn what you love and craft experiences that feel intimately yours.",
  },
  {
    icon: Headphones,
    title: "Concierge Support",
    description:
      "24/7 dedicated support from your personal travel concierge, before and during your trip.",
  },
];

// ─── Signature Experiences ──────────────────────────────
export interface SignatureExperience {
  destination: string;
  occasion: string;
  description: string;
  duration: string;
  startingPrice: string;
  image: string;
}

export const SIGNATURE_EXPERIENCES: SignatureExperience[] = [
  {
    destination: "Maldives",
    occasion: "Private Beach Honeymoon",
    description:
      "Overwater villas, private dining under the stars, and sunset dolphin cruises in the Indian Ocean.",
    duration: "7 Nights",
    startingPrice: "$8,500",
    image: "https://images.unsplash.com/photo-1514282401047-d79a71a590e8?w=900&h=600&fit=crop",
  },
  {
    destination: "Santorini & Paris",
    occasion: "Europe Proposal Journey",
    description:
      "A romantic odyssey from the cliffs of Santorini to the streets of Paris, with a private proposal setup.",
    duration: "10 Nights",
    startingPrice: "$12,000",
    image: "https://images.unsplash.com/photo-1613395877344-13d4a8e0d49e?w=900&h=600&fit=crop",
  },
  {
    destination: "Bali",
    occasion: "Wellness Babymoon Retreat",
    description:
      "Spa rituals, jungle villas, and serene beach days designed for relaxation before your new arrival.",
    duration: "5 Nights",
    startingPrice: "$5,200",
    image: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=900&h=600&fit=crop",
  },
  {
    destination: "Amalfi Coast",
    occasion: "Anniversary Island Escape",
    description:
      "Private yacht charters, cliffside dining, and luxurious coastal villas along Italy's most romantic coast.",
    duration: "6 Nights",
    startingPrice: "$9,800",
    image: "https://images.unsplash.com/photo-1455587734955-081b22074882?w=900&h=600&fit=crop",
  },
];

// ─── How It Works Steps ─────────────────────────────────
export interface HowItWorksStep {
  number: string;
  title: string;
  description: string;
  icon: LucideIcon;
}

export const HOW_IT_WORKS_STEPS: HowItWorksStep[] = [
  {
    number: "01",
    title: "Discover",
    description:
      "Share your vision, occasion, and preferences in a complimentary consultation call.",
    icon: Sparkles,
  },
  {
    number: "02",
    title: "Curate",
    description:
      "We design a bespoke itinerary with handpicked stays, experiences, and special touches.",
    icon: Gem,
  },
  {
    number: "03",
    title: "Refine",
    description:
      "Review and perfect every detail together until the journey feels exactly right.",
    icon: Clock,
  },
  {
    number: "04",
    title: "Travel",
    description:
      "Relax and enjoy — we handle every booking, transfer, and on-trip concierge need.",
    icon: Plane,
  },
];

// ─── Testimonials ────────────────────────────────────────
export interface Testimonial {
  name: string;
  location: string;
  occasion: string;
  text: string;
  rating: number;
}

export const TESTIMONIALS: Testimonial[] = [
  {
    name: "Sarah & James Mitchell",
    location: "New York, USA",
    occasion: "Maldives Honeymoon",
    text: "XO Vacations turned our honeymoon into something beyond our wildest dreams. Every detail was flawless — from the private dinner on the sandbank to the surprise sunset cruise. It felt like the entire island was ours.",
    rating: 5,
  },
  {
    name: "David & Elena Chen",
    location: "London, UK",
    occasion: "Santorini Proposal",
    text: "They helped me plan the perfect proposal in Santorini. The private terrace, the photographer hidden among the cliffs, the champagne waiting — she said yes before I even got the words out. Pure magic.",
    rating: 5,
  },
  {
    name: "Maria & Carlos Gonzalez",
    location: "Madrid, Spain",
    occasion: "Anniversary Escape",
    text: "For our 10th anniversary, XO created an Amalfi Coast journey that felt like a love letter to our marriage. The attention to detail, the personal touches — it's a travel experience that changed how we vacation forever.",
    rating: 5,
  },
];

// ─── FAQ ─────────────────────────────────────────────────
export interface FAQItem {
  question: string;
  answer: string;
}

export const FAQ_ITEMS: FAQItem[] = [
  {
    question: "How does the complimentary consultation work?",
    answer:
      "We begin with a relaxed 20-30 minute call to understand your occasion, travel style, preferences, and budget. There's no obligation — it's simply our way of getting to know you so we can craft something extraordinary.",
  },
  {
    question: "How far in advance should I book?",
    answer:
      "For the best availability at premium properties, we recommend reaching out 3-6 months in advance. However, we've crafted stunning last-minute getaways with as little as 3 weeks notice.",
  },
  {
    question: "What is the typical budget range?",
    answer:
      "Our curated experiences typically start from $5,000 per person for a 5-night journey. Luxury is personal — we design around your budget to ensure maximum value and unforgettable moments.",
  },
  {
    question: "Do you handle flights and transfers?",
    answer:
      "Absolutely. We manage every aspect of your journey — flights, private transfers, airport meet-and-greets, restaurant reservations, spa bookings, and any special arrangements you desire.",
  },
  {
    question: "Can you accommodate special requests or surprises?",
    answer:
      "This is where we truly shine. From private beach proposals with hidden photographers to surprise birthday celebrations in a Tuscan villa — we specialize in making the extraordinary happen.",
  },
  {
    question: "What if I need to change or cancel my trip?",
    answer:
      "We work with flexible booking policies wherever possible and will always advocate on your behalf. Our concierge team handles all modifications seamlessly so you never have to worry.",
  },
];

// ─── Occasion Options (for inquiry form) ─────────────────
export const OCCASION_OPTIONS = [
  "Honeymoon",
  "Proposal",
  "Anniversary",
  "Babymoon",
  "Romantic Getaway",
  "Family Escape",
  "Bucket-List Trip",
  "Other",
] as const;

export const BUDGET_OPTIONS = [
  "$3,000 – $5,000",
  "$5,000 – $10,000",
  "$10,000 – $25,000",
  "$25,000 – $50,000",
  "$50,000+",
] as const;

export const TRAVEL_MONTHS = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
  "Flexible",
] as const;

// ─── Footer Links ────────────────────────────────────────
export const FOOTER_EXPERIENCES = [
  "Honeymoons",
  "Proposals",
  "Anniversaries",
  "Babymoons",
  "Romantic Getaways",
  "Family Escapes",
] as const;

export const FOOTER_COMPANY = [
  "About Us",
  "Our Story",
  "Journal",
  "Careers",
  "Press",
] as const;

export const CONTACT_INFO = {
  phone: "+91 98937-77555",
  email: "shreyas@xovacations.com",
  address: "M-5/6 Navneet Darshan, Greater Kailash Road, Old Palasia, Indore, Madhya Pradesh 452001",
  icon: MapPin,
} as const;

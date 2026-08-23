export type ProjectCategory = 'all' | 'business' | 'ecommerce' | 'education' | 'portfolio';

export interface Project {
  id: string;
  name: string;
  category: 'business' | 'ecommerce' | 'education' | 'portfolio';
  categoryLabel: string;
  tagline: string;
  description: string;
  fullOverview: string;
  deliverables: string[];
  features: string[];
  techStack: string[];
  accentColor: string;
  heroImage: string;
  mobileImage: string;
  previewAccent: string;
  mockupType: 'corporate' | 'ecommerce' | 'education' | 'restaurant' | 'portfolio' | 'logistics';
  liveUrlPlaceholder: string;
}

export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  badge?: string;
  iconName: string;
  features: string[];
}

export interface WhyChooseItem {
  title: string;
  description: string;
  iconName: string;
  highlight: string;
}

export interface DeliveryStandard {
  id: string;
  title: string;
  description: string;
  iconName: string;
}

export interface PricingPlan {
  id: string;
  name: string;
  badge?: string;
  isPopular?: boolean;
  tagline: string;
  price: string;
  period?: string;
  features: string[];
  ctaText: string;
  ctaAction: 'basic' | 'professional' | 'custom';
}

export interface ProcessStep {
  step: string;
  title: string;
  description: string;
  details: string;
  iconName: string;
}

export interface ReviewItem {
  id: string;
  name: string;
  role: string;
  businessName: string;
  projectName: string;
  rating: number;
  review: string;
  avatarSeed: string;
  verifiedPlaceholder: boolean;
}

export interface FaqItem {
  question: string;
  answer: string;
  category?: string;
}

export interface OwnershipRow {
  asset: string;
  owner: string;
  note: string;
}

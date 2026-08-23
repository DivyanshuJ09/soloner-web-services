import {
  ServiceItem,
  WhyChooseItem,
  DeliveryStandard,
  PricingPlan,
  ProcessStep,
  ReviewItem,
  FaqItem,
  OwnershipRow,
} from '../types';

export const AGENCY_INFO = {
  name: 'Soloner Web Services',
  shortName: 'Soloner',
  tagline: 'Modern websites for modern businesses.',
  phone: '+1 (555) 349-8200',
  phoneClean: '+15553498200',
  whatsapp: '+15553498200',
  whatsappDisplay: '+1 (555) 349-8200',
  email: 'hello@solonerwebservices.com',
  location: 'San Francisco, CA & Global Remote Support',
  address: '100 Montgomery St, Suite 1400, San Francisco, CA 94104',
  workingHours: 'Mon – Fri: 9:00 AM – 6:00 PM (PST)',
  responseTime: 'Inquiries answered within 2 to 4 business hours',
};

export const SERVICES_DATA: ServiceItem[] = [
  {
    id: 'business',
    title: 'Business Websites',
    description: 'Professional websites for companies and local businesses designed to build credibility and win clients.',
    iconName: 'Building2',
    features: ['Corporate identity & branding', 'Lead capture forms', 'Service showcases', 'Google Business & Maps integration'],
  },
  {
    id: 'ecommerce',
    title: 'E-commerce Websites',
    description: 'Modern online stores designed for selling products smoothly with seamless checkout and inventory flows.',
    iconName: 'ShoppingBag',
    features: ['Stripe/Razorpay payment gateway', 'Product catalogs & search', 'Order notifications & receipting', 'Mobile cart optimization'],
  },
  {
    id: 'portfolio',
    title: 'Portfolio Websites',
    description: 'Beautiful websites for professionals, creators, architects, doctors and individuals to showcase work.',
    iconName: 'Briefcase',
    features: ['Project galleries & case studies', 'Interactive resume/CV section', 'Client inquiry routing', 'High-res media optimization'],
  },
  {
    id: 'education',
    title: 'School & Coaching Websites',
    description: 'Professional websites for schools, institutes, academies and coaching businesses to engage students and parents.',
    iconName: 'GraduationCap',
    features: ['Course/Curriculum displays', 'Admission inquiry forms', 'Faculty directory', 'Notice board & event schedule'],
  },
  {
    id: 'hospitality',
    title: 'Hotel & Restaurant Websites',
    description: 'Modern websites for hospitality businesses with rich menus, ambiance showcases and direct reservation links.',
    iconName: 'UtensilsCrossed',
    features: ['Interactive digital menu', 'Table reservation / WhatsApp booking', 'Room & suite visual tour', 'Location & instant navigation'],
  },
  {
    id: 'landing-pages',
    title: 'Landing Pages',
    description: 'Focused high-converting pages designed specifically to generate leads, validate offers and power ad campaigns.',
    iconName: 'Zap',
    features: ['High-impact hero section', 'A/B test ready structure', 'Direct WhatsApp & call triggers', 'Sub-second loading speed'],
  },
];

export const WHY_CHOOSE_DATA: WhyChooseItem[] = [
  {
    title: 'Modern Design',
    description: 'Professional interfaces designed around your brand with clean aesthetics, crisp typography, and intuitive layouts.',
    iconName: 'Palette',
    highlight: 'Brand-focused',
  },
  {
    title: 'Mobile First',
    description: 'Beautiful, glitch-free experiences engineered for smooth touch navigation across smartphones, tablets, and high-res screens.',
    iconName: 'Smartphone',
    highlight: 'Flawless across devices',
  },
  {
    title: 'Fast & Secure',
    description: 'Optimized performance, clean semantic code, and HTTPS-ready deployment for safety and lightning-fast loading.',
    iconName: 'ShieldCheck',
    highlight: 'HTTPS & Speed Optimized',
  },
  {
    title: 'Transparent Service',
    description: 'Clear pricing, structured timelines, and documented project expectations with zero hidden surprises or lock-in.',
    iconName: 'FileCheck2',
    highlight: '100% Upfront clarity',
  },
];

export const DELIVERY_STANDARDS: DeliveryStandard[] = [
  { id: '1', title: 'Mobile Responsive', description: 'Tailored for all phone screen sizes and orientations', iconName: 'Smartphone' },
  { id: '2', title: 'Desktop Optimized', description: 'Pixel-perfect clarity on monitors and laptops', iconName: 'Monitor' },
  { id: '3', title: 'Chrome Tested', description: 'Cross-browser tested on Chrome, Safari, Edge, Firefox', iconName: 'Compass' },
  { id: '4', title: 'Contact Form', description: 'Spam-protected email routing & client notification', iconName: 'Mail' },
  { id: '5', title: 'WhatsApp Integration', description: 'Direct 1-click WhatsApp customer chat trigger', iconName: 'MessageSquare' },
  { id: '6', title: 'Click-to-Call', description: 'Instant tap-to-dial buttons for mobile visitors', iconName: 'PhoneCall' },
  { id: '7', title: 'Google Maps', description: 'Embedded map location for easy physical visits', iconName: 'MapPin' },
  { id: '8', title: 'Optimized Images', description: 'Next-gen WebP/SVG assets for speedy rendering', iconName: 'Sparkles' },
  { id: '9', title: 'Basic SEO', description: 'Title tags, meta descriptions, and Open Graph tags', iconName: 'Search' },
  { id: '10', title: 'HTTPS / SSL', description: 'Secure encrypted certificate configuration', iconName: 'Lock' },
  { id: '11', title: 'Favicon', description: 'Custom branded browser tab icon & touch icons', iconName: 'Bookmark' },
  { id: '12', title: 'Custom 404 Page', description: 'Friendly error page guiding visitors back home', iconName: 'HelpCircle' },
];

export const PRICING_PLANS: PricingPlan[] = [
  {
    id: 'basic',
    name: 'Basic',
    tagline: 'For businesses getting started online.',
    price: '₹7,999',
    period: '/year',
    features: [
      'Essential core pages (Home, About, Services, Contact)',
      '100% Responsive mobile-friendly layout',
      'Integrated Contact Form with email alerts',
      'WhatsApp direct chat button',
      'Basic On-Page SEO setup & meta tags',
      'Standard Google Maps & location embed',
      'Basic support & post-launch walkthrough',
    ],
    ctaText: 'Get Started with Basic →',
    ctaAction: 'basic',
  },
  {
    id: 'medium',
    name: 'Medium',
    badge: 'MOST POPULAR',
    isPopular: true,
    tagline: 'For growing businesses wanting a high-converting web presence.',
    price: '₹12,999',
    period: '/year',
    features: [
      'Expanded page architecture (Up to 8–10 tailored pages)',
      'Premium custom UI & bespoke brand styling',
      'Direct WhatsApp chat & click-to-call integration',
      'Interactive Google Maps & branch location guides',
      'Improved SEO with rich schema markup',
      'Lead capture forms with auto-responder integration',
      'Photo galleries / Service catalog showcase',
      'Extended support & content handoff guide',
    ],
    ctaText: 'Choose Medium →',
    ctaAction: 'professional',
  },
  {
    id: 'premium',
    name: 'Premium',
    tagline: 'For comprehensive scale & advanced business features.',
    price: '₹25,000',
    period: '/year',
    features: [
      'Custom features & bespoke web architecture',
      'Advanced API & third-party CRM integrations',
      'E-commerce store or digital product catalog',
      'Appointment & booking calendar systems',
      'Custom customer inquiry workflows & databases',
      'High-performance multi-language / multi-branch support',
      'Priority development sprint & dedicated onboarding',
    ],
    ctaText: 'Choose Premium →',
    ctaAction: 'custom',
  },
];

export const PROCESS_STEPS: ProcessStep[] = [
  {
    step: '01',
    title: 'Discover',
    description: 'Understand the business and requirements.',
    details: 'We begin with an intake consultation to clarify your business goals, target audience, brand aesthetic, and required website features.',
    iconName: 'Compass',
  },
  {
    step: '02',
    title: 'Design',
    description: 'Create the visual direction.',
    details: 'We establish modern layouts, typography pairings, color systems, and interactive wireframes tailored specifically to your brand.',
    iconName: 'Layout',
  },
  {
    step: '03',
    title: 'Develop',
    description: 'Build the responsive website.',
    details: 'Our team writes clean, fast-loading, standard-compliant code with mobile responsiveness, SEO foundations, and form connections.',
    iconName: 'Code2',
  },
  {
    step: '04',
    title: 'Review',
    description: 'Client reviews the website and requests changes.',
    details: 'You test the live staging link across all your devices, provide structured feedback, and we fine-tune every detail until you are satisfied.',
    iconName: 'CheckCircle2',
  },
  {
    step: '05',
    title: 'Launch',
    description: 'Deploy the website and make it live.',
    details: 'We configure DNS, SSL certificates, test contact pipelines, verify Google indexing, and hand over clean operational access.',
    iconName: 'Rocket',
  },
];

export const OWNERSHIP_DATA: OwnershipRow[] = [
  {
    asset: 'Domain Name',
    owner: 'Client',
    note: 'Registered directly in your name or transferred with 100% control retained by you.',
  },
  {
    asset: 'Client Logo, Photos & Content',
    owner: 'Client',
    note: 'All client-supplied brand assets, text, photography, and marks remain exclusively yours.',
  },
  {
    asset: 'Client Social & Business Accounts',
    owner: 'Client',
    note: 'You retain full direct administrative ownership of all connected social and business profiles.',
  },
  {
    asset: 'Website Code',
    owner: 'As defined in contract',
    note: 'Deliverables and customized client code are assigned to client upon final milestone settlement.',
  },
  {
    asset: 'Hosting Account',
    owner: 'Agency or Client depending on plan',
    note: 'Can be hosted under agency-managed infrastructure or deployed directly to your private cloud.',
  },
  {
    asset: 'Reusable Agency Components & Templates',
    owner: 'Agency',
    note: 'Underlying proprietary frameworks, boilerplates, and developer toolkits remain agency property.',
  },
];

export const REVIEWS_DATA: ReviewItem[] = [
  {
    id: 'rev-1',
    name: 'David Vance',
    role: 'Managing Partner',
    businessName: 'Vance & Sterling Legal Advisory',
    projectName: 'Corporate Law Practice Website',
    rating: 5,
    review: 'Soloner Web Services provided an exceptionally clear process from quotation to launch. Our new firm website looks authoritative, loads instantly, and client inquiries through our contact form increased in the very first month.',
    avatarSeed: 'David',
    verifiedPlaceholder: true,
  },
  {
    id: 'rev-2',
    name: 'Elena Rostova',
    role: 'Founder & Formulator',
    businessName: 'Aura Botanical Skincare',
    projectName: 'E-commerce Brand Storefront',
    rating: 5,
    review: 'The mobile shopping experience is silky smooth. They understood our clean luxury aesthetic perfectly, integrated our checkout without a hitch, and kept us updated at every single milestone.',
    avatarSeed: 'Elena',
    verifiedPlaceholder: true,
  },
  {
    id: 'rev-3',
    name: 'Marcus Chen',
    role: 'Head of Admissions',
    businessName: 'Horizon Preparatory Academy',
    projectName: 'School Portal & Admissions Platform',
    rating: 5,
    review: 'Parents frequently compliment our new school website. The navigation is straightforward, mobile inquiries work seamlessly on WhatsApp, and the handover documentation made updates simple for our staff.',
    avatarSeed: 'Marcus',
    verifiedPlaceholder: true,
  },
  {
    id: 'rev-4',
    name: 'Chef Julian Moretti',
    role: 'Executive Chef & Owner',
    businessName: 'Lumina Artisan Bistro',
    projectName: 'Restaurant & Reservation Website',
    rating: 5,
    review: 'Our dinner bookings through WhatsApp and click-to-call jumped immediately. The digital menu is crisp and easy to view on phones. Soloner was transparent about timeline and costs from day one.',
    avatarSeed: 'Julian',
    verifiedPlaceholder: true,
  },
];

export const FAQ_DATA: FaqItem[] = [
  {
    question: 'How long does a website take?',
    answer: 'Standard business websites typically take 1 to 2 weeks from kickoff to launch. More comprehensive projects, such as customized portals or online stores with extensive catalogs, generally take 2 to 4 weeks depending on the speed of content review and specific custom features.',
  },
  {
    question: 'Do you provide domain and hosting?',
    answer: 'Yes. We assist you in registering your domain directly under your own name or can connect existing domains. For hosting, we can manage high-speed, secure cloud hosting on your behalf or deploy directly to your preferred hosting provider.',
  },
  {
    question: 'Can I request changes after delivery?',
    answer: 'Yes! Every project includes a structured review phase prior to launch for refinements. Post-launch, minor adjustments are covered within our initial delivery support window. For ongoing updates, we offer flexible maintenance options.',
  },
  {
    question: 'Do you provide website maintenance?',
    answer: 'Yes. We offer reliable monthly maintenance that covers regular uptime monitoring, security updates, dependency patches, minor text/image edits, and technical backups to keep your website running smoothly.',
  },
  {
    question: 'What happens if I need a new feature?',
    answer: 'When you need substantial new capabilities (such as adding an e-commerce store, a booking engine, or major new service sections), we provide a separate, transparent project quotation with clear timelines and deliverables.',
  },
  {
    question: 'Who owns the domain?',
    answer: 'You own 100% of your domain. We ensure your domain is registered in your name or under your account so you always maintain complete administrative ownership.',
  },
  {
    question: 'Can you redesign my existing website?',
    answer: 'Absolutely. We frequently redesign outdated or slow websites into modern, fast, mobile-friendly platforms while preserving your existing SEO value, brand identity, and important content.',
  },
  {
    question: 'Do you build e-commerce websites?',
    answer: 'Yes. We build modern online stores equipped with product catalogs, secure payment processing (Stripe, PayPal, etc.), mobile checkout, automated order notifications, and inventory management.',
  },
];
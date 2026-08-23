import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ServicesSection } from './components/ServicesSection';
import { WhyChooseSection } from './components/WhyChooseSection';
import { PortfolioSection } from './components/PortfolioSection';
import { DeliveryStandardSection } from './components/DeliveryStandardSection';
import { PricingSection } from './components/PricingSection';
import { MaintenanceSection } from './components/MaintenanceSection';
import { ProcessSection } from './components/ProcessSection';
import { BusinessProcessSection } from './components/BusinessProcessSection';
import { OwnershipSection } from './components/OwnershipSection';
import { ReviewsSection } from './components/ReviewsSection';
import { FaqSection } from './components/FaqSection';
import { FinalCtaSection } from './components/FinalCtaSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { QuoteModal } from './components/QuoteModal';
import { ProjectModal } from './components/ProjectModal';
import { LegalModal } from './components/LegalModal';
import { NotFoundView } from './components/NotFoundView';
import { PORTFOLIO_PROJECTS } from './data/portfolioData';
import { Project } from './types';

export default function App() {
  const [activeSection, setActiveSection] = useState('home');
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);
  const [selectedPlanForQuote, setSelectedPlanForQuote] = useState<string | undefined>(undefined);
  
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isLegalModalOpen, setIsLegalModalOpen] = useState(false);
  const [legalInitialTab, setLegalInitialTab] = useState('agreement');
  
  const [is404View, setIs404View] = useState(false);

  // Active section observer on scroll
  useEffect(() => {
    if (is404View) return;

    const sections = [
      'home',
      'services',
      'why-choose',
      'our-work',
      'delivery-standard',
      'pricing',
      'maintenance',
      'process',
      'business-process',
      'ownership',
      'reviews',
      'faq',
      'contact',
    ];

    const handleScroll = () => {
      const scrollPosition = window.scrollY + 200;
      for (const sectionId of sections) {
        const element = document.getElementById(sectionId);
        if (element) {
          const top = element.offsetTop;
          const height = element.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [is404View]);

  const handleNavigate = (sectionId: string) => {
    setIs404View(false);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handleOpenQuoteModal = (planOrTopic?: string) => {
    setSelectedPlanForQuote(planOrTopic);
    setIsQuoteModalOpen(true);
  };

  const handleSelectProject = (projectId: string) => {
    const proj = PORTFOLIO_PROJECTS.find((p) => p.id === projectId) || null;
    setSelectedProject(proj);
  };

  const handleOpenLegalModal = (tab: string = 'agreement') => {
    setLegalInitialTab(tab);
    setIsLegalModalOpen(true);
  };

  if (is404View) {
    return (
      <NotFoundView
        onReturnHome={() => setIs404View(false)}
        onOpenQuoteModal={() => {
          setIs404View(false);
          handleOpenQuoteModal();
        }}
      />
    );
  }

  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans selection:bg-blue-600 selection:text-white flex flex-col">
      {/* Sticky Responsive Navbar */}
      <Navbar
        onOpenQuoteModal={handleOpenQuoteModal}
        activeSection={activeSection}
        onNavigate={handleNavigate}
        onView404={() => setIs404View(true)}
      />

      {/* Main Homepage Flow (Strictly ordered according to requirements):
          Hero → Services → Why Soloner → Websites We've Shipped →
          Website Quality (Delivery Standard) → Pricing → Maintenance →
          Process → Professional Business Process → Ownership →
          Customer Reviews → FAQ → Final CTA → Contact → Footer
      */}
      <main className="flex-1">
        {/* 1. Hero Section */}
        <Hero
          onOpenQuoteModal={() => handleOpenQuoteModal()}
          onNavigate={handleNavigate}
          onSelectProject={handleSelectProject}
        />

        {/* 2. Services ("What We Build") */}
        <ServicesSection
          onOpenQuoteModal={handleOpenQuoteModal}
          onNavigateToWork={() => handleNavigate('our-work')}
        />

        {/* 3. Why Choose Soloner */}
        <WhyChooseSection />

        {/* 4. Our Work ("Websites We've Shipped") */}
        <PortfolioSection
          onSelectProject={handleSelectProject}
          onOpenQuoteModal={handleOpenQuoteModal}
        />

        {/* 5. Website Delivery Standard ("Every Website Comes Business-Ready") */}
        <DeliveryStandardSection />

        {/* 6. Pricing ("Simple & Transparent Pricing") */}
        <PricingSection onOpenQuoteModal={handleOpenQuoteModal} />

        {/* 7. Maintenance ("Keep Your Website Running Smoothly") */}
        <MaintenanceSection onOpenQuoteModal={handleOpenQuoteModal} />

        {/* 8. Our Process ("From Idea to Live Website") */}
        <ProcessSection />

        {/* 9. Professional Business Process ("Professional From Start to Finish") */}
        <BusinessProcessSection onOpenLegalModal={handleOpenLegalModal} />

        {/* 10. Ownership ("Your Business. Your Assets.") */}
        <OwnershipSection onOpenLegalModal={handleOpenLegalModal} />

        {/* 11. Customer Reviews ("What Our Clients Say") */}
        <ReviewsSection onOpenQuoteModal={() => handleOpenQuoteModal()} />

        {/* 12. FAQ ("Frequently Asked Questions") */}
        <FaqSection />

        {/* 13. Final CTA ("Ready to Take Your Business Online?") */}
        <FinalCtaSection onOpenQuoteModal={() => handleOpenQuoteModal()} />

        {/* 14. Contact ("Let's Build Something Great") */}
        <ContactSection initialTopic={selectedPlanForQuote} />
      </main>

      {/* 15. Footer */}
      <Footer
        onNavigate={handleNavigate}
        onOpenLegalModal={handleOpenLegalModal}
        onView404={() => setIs404View(true)}
      />

      {/* Interactive Modals */}
      <QuoteModal
        isOpen={isQuoteModalOpen}
        onClose={() => setIsQuoteModalOpen(false)}
        initialPlan={selectedPlanForQuote}
      />

      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
        onRequestSimilar={(projectName) => {
          setSelectedProject(null);
          handleOpenQuoteModal(`Similar to ${projectName}`);
        }}
      />

      <LegalModal
        isOpen={isLegalModalOpen}
        onClose={() => setIsLegalModalOpen(false)}
        initialTab={legalInitialTab}
      />
    </div>
  );
}

import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowRight, Phone, MessageSquare, Globe2 } from 'lucide-react';
import { AGENCY_INFO } from '../data/agencyData';

interface NavbarProps {
  onOpenQuoteModal: (plan?: string) => void;
  activeSection: string;
  onNavigate: (sectionId: string) => void;
  onView404?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  onOpenQuoteModal,
  activeSection,
  onNavigate,
  onView404,
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home', id: 'home' },
    { name: 'Services', href: '#services', id: 'services' },
    { name: 'Our Work', href: '#our-work', id: 'our-work' },
    { name: 'Pricing', href: '#pricing', id: 'pricing' },
    { name: 'Maintenance', href: '#maintenance', id: 'maintenance' },
    { name: 'Reviews', href: '#reviews', id: 'reviews' },
    { name: 'Contact', href: '#contact', id: 'contact' },
  ];

  const handleNavClick = (e: React.MouseEvent, id: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    onNavigate(id);
  };

  const openWhatsApp = () => {
    const message = encodeURIComponent(`Hello Soloner Web Services, I would like to inquire about getting a website developed for my business.`);
    window.open(`https://wa.me/${AGENCY_INFO.whatsapp}?text=${message}`, '_blank', 'noopener,noreferrer');
  };

  return (
    <header
      id="main-navbar"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md border-b border-slate-200/80 shadow-xs py-3.5'
          : 'bg-white/80 backdrop-blur-xs border-b border-slate-100 py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Brand Wordmark & Logo */}
          <a
            id="brand-logo-link"
            href="#home"
            onClick={(e) => handleNavClick(e, 'home')}
            className="flex items-center gap-3 group focus:outline-hidden"
          >
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-blue-600 via-blue-700 to-indigo-600 flex items-center justify-center text-white shadow-sm shadow-blue-500/20 group-hover:scale-105 transition-transform duration-200">
              <Globe2 className="w-5 h-5 text-white" />
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-lg sm:text-xl text-slate-900 tracking-tight leading-tight flex items-center gap-1.5">
                Soloner
                <span className="text-xs font-semibold uppercase tracking-wider text-blue-600 bg-blue-50 px-1.5 py-0.5 rounded-md border border-blue-100/80 hidden sm:inline-block">
                  Agency
                </span>
              </span>
              <span className="text-xs text-slate-500 font-medium tracking-wide">
                Web Services
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav id="desktop-navigation" className="hidden lg:flex items-center gap-1 xl:gap-2">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <a
                  key={link.id}
                  id={`nav-link-${link.id}`}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.id)}
                  className={`px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                    isActive
                      ? 'text-blue-600 bg-blue-50/70 font-semibold'
                      : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
                  }`}
                >
                  {link.name}
                </a>
              );
            })}
          </nav>

          {/* Action CTAs */}
          <div className="hidden sm:flex items-center gap-3">
            <button
              id="navbar-whatsapp-btn"
              onClick={openWhatsApp}
              className="inline-flex items-center gap-1.5 px-3 py-2 text-xs font-medium text-emerald-700 bg-emerald-50 hover:bg-emerald-100 rounded-lg border border-emerald-200 transition-colors"
              title="Chat with us on WhatsApp"
            >
              <MessageSquare className="w-3.5 h-3.5" />
              <span>WhatsApp</span>
            </button>

            <button
              id="navbar-quote-btn"
              onClick={() => onOpenQuoteModal()}
              className="inline-flex items-center gap-2 px-4 py-2.5 bg-blue-600 hover:bg-blue-700 active:bg-blue-800 text-white text-sm font-semibold rounded-lg shadow-sm shadow-blue-600/20 hover:shadow-md hover:shadow-blue-600/25 transition-all duration-200 group"
            >
              <span>Get a Free Quote</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center gap-2 lg:hidden">
            <button
              id="mobile-quote-btn"
              onClick={() => onOpenQuoteModal()}
              className="sm:hidden inline-flex items-center px-3 py-1.5 bg-blue-600 text-white text-xs font-semibold rounded-lg shadow-xs"
            >
              Quote
            </button>
            <button
              id="mobile-menu-toggle"
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-slate-700 hover:text-slate-900 hover:bg-slate-100 focus:outline-hidden focus:ring-2 focus:ring-blue-500"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div
          id="mobile-nav-drawer"
          className="lg:hidden border-t border-slate-200 bg-white shadow-xl animate-in slide-in-from-top-2 duration-200"
        >
          <div className="max-w-7xl mx-auto px-4 pt-3 pb-6 space-y-1">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <a
                  key={link.id}
                  id={`mobile-nav-${link.id}`}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.id)}
                  className={`block px-4 py-2.5 rounded-lg text-base font-medium transition-colors ${
                    isActive
                      ? 'bg-blue-50 text-blue-600 font-semibold'
                      : 'text-slate-700 hover:bg-slate-50 hover:text-slate-900'
                  }`}
                >
                  {link.name}
                </a>
              );
            })}

            <div className="pt-4 border-t border-slate-100 flex flex-col gap-2.5 mt-2">
              <button
                id="mobile-drawer-quote-btn"
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenQuoteModal();
                }}
                className="w-full flex items-center justify-center gap-2 px-4 py-3 bg-blue-600 hover:bg-blue-700 text-white text-base font-semibold rounded-xl shadow-sm"
              >
                <span>Get a Free Quote</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <div className="grid grid-cols-2 gap-2">
                <button
                  id="mobile-drawer-whatsapp-btn"
                  onClick={() => {
                    setMobileMenuOpen(false);
                    openWhatsApp();
                  }}
                  className="flex items-center justify-center gap-1.5 px-3 py-2.5 bg-emerald-50 text-emerald-700 font-medium text-sm rounded-xl border border-emerald-200"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>WhatsApp Us</span>
                </button>
                <a
                  id="mobile-drawer-phone-btn"
                  href={`tel:${AGENCY_INFO.phoneClean}`}
                  className="flex items-center justify-center gap-1.5 px-3 py-2.5 bg-slate-50 text-slate-700 font-medium text-sm rounded-xl border border-slate-200"
                >
                  <Phone className="w-4 h-4" />
                  <span>Call Us</span>
                </a>
              </div>

              {onView404 && (
                <button
                  id="nav-preview-404-btn"
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onView404();
                  }}
                  className="text-xs text-slate-400 hover:text-slate-600 text-center py-1 mt-1"
                >
                  Preview Custom 404 Error Page
                </button>
              )}
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

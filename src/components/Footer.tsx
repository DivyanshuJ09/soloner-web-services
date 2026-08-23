import React from 'react';
import { Globe2, MessageSquare, ArrowUp, Mail, Phone, MapPin, Heart } from 'lucide-react';
import { AGENCY_INFO } from '../data/agencyData';

interface FooterProps {
  onNavigate: (sectionId: string) => void;
  onOpenLegalModal: (tab: string) => void;
  onView404: () => void;
}

export const Footer: React.FC<FooterProps> = ({
  onNavigate,
  onOpenLegalModal,
  onView404,
}) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navLinks = [
    { name: 'Home', id: 'home' },
    { name: 'Services', id: 'services' },
    { name: 'Our Work', id: 'our-work' },
    { name: 'Pricing', id: 'pricing' },
    { name: 'Maintenance', id: 'maintenance' },
    { name: 'Reviews', id: 'reviews' },
    { name: 'Contact', id: 'contact' },
  ];

  return (
    <footer className="bg-white border-t border-slate-200/80 pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-12 border-b border-slate-100">
          
          {/* Brand Col (5 cols) */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-blue-600 flex items-center justify-center text-white shadow-xs">
                <Globe2 className="w-5 h-5" />
              </div>
              <span className="font-bold text-lg text-slate-900 tracking-tight">
                Soloner Web Services
              </span>
            </div>

            <p className="text-slate-600 text-sm max-w-sm leading-relaxed">
              Modern websites for modern businesses. We design and build fast, responsive, conversion-focused websites that help brands win trust and grow online.
            </p>

            <div className="pt-2 flex items-center gap-3 text-xs text-slate-500 font-medium">
              <span className="flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
                <span>Accepting New Client Projects</span>
              </span>
            </div>
          </div>

          {/* Navigation Links (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider">
              Navigation
            </h4>
            <ul className="space-y-2">
              {navLinks.map((item) => (
                <li key={item.id}>
                  <button
                    onClick={() => onNavigate(item.id)}
                    className="text-sm text-slate-600 hover:text-blue-600 transition-colors font-medium"
                  >
                    {item.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal & Policies (2 cols) */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider">
              Legal & Terms
            </h4>
            <ul className="space-y-2">
              <li>
                <button
                  onClick={() => onOpenLegalModal('agreement')}
                  className="text-sm text-slate-600 hover:text-blue-600 transition-colors font-medium text-left"
                >
                  Service Agreement
                </button>
              </li>
              <li>
                <button
                  onClick={() => onOpenLegalModal('terms')}
                  className="text-sm text-slate-600 hover:text-blue-600 transition-colors font-medium text-left"
                >
                  Terms & Conditions
                </button>
              </li>
              <li>
                <button
                  onClick={() => onOpenLegalModal('privacy')}
                  className="text-sm text-slate-600 hover:text-blue-600 transition-colors font-medium text-left"
                >
                  Privacy Policy
                </button>
              </li>
              <li>
                <button
                  onClick={() => onOpenLegalModal('ownership')}
                  className="text-sm text-slate-600 hover:text-blue-600 transition-colors font-medium text-left"
                >
                  Ownership Matrix
                </button>
              </li>
              <li>
                <button
                  onClick={onView404}
                  className="text-xs text-slate-400 hover:text-slate-600 transition-colors font-medium text-left pt-1 block"
                >
                  Custom 404 Page
                </button>
              </li>
            </ul>
          </div>

          {/* Social Links (2 cols) */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider">
              Connect
            </h4>
            <ul className="space-y-2">
              <li>
                <a
                  href={`https://wa.me/${AGENCY_INFO.whatsapp}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-slate-600 hover:text-emerald-600 transition-colors font-medium flex items-center gap-1.5"
                >
                  <span>WhatsApp</span>
                </a>
              </li>
              <li>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-slate-600 hover:text-blue-600 transition-colors font-medium"
                >
                  LinkedIn
                </a>
              </li>
              <li>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-slate-600 hover:text-pink-600 transition-colors font-medium"
                >
                  Instagram
                </a>
              </li>
              <li>
                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-slate-600 hover:text-slate-900 transition-colors font-medium"
                >
                  GitHub
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Copyright & Back to Top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div>
            © 2026 Soloner Web Services. All Rights Reserved.
          </div>

          <div className="flex items-center gap-4">
            <button
              onClick={scrollToTop}
              className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-600 hover:text-blue-600 transition-colors p-1"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};

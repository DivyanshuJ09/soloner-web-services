import React from 'react';
import { Home, ArrowLeft, Globe2, Compass, MessageSquare, Phone } from 'lucide-react';
import { AGENCY_INFO } from '../data/agencyData';

interface NotFoundViewProps {
  onReturnHome: () => void;
  onOpenQuoteModal: () => void;
}

export const NotFoundView: React.FC<NotFoundViewProps> = ({
  onReturnHome,
  onOpenQuoteModal,
}) => {
  return (
    <div className="min-h-screen bg-slate-50 flex flex-col justify-between pt-24 pb-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-xl mx-auto text-center my-auto space-y-6">
        
        {/* Badge */}
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-100 text-blue-800 text-xs font-bold uppercase tracking-wider">
          <span>Error 404 • Page Not Found</span>
        </div>

        {/* 404 Display */}
        <h1 className="text-7xl sm:text-8xl font-extrabold text-slate-900 tracking-tight">
          4<span className="text-blue-600">0</span>4
        </h1>

        <h2 className="text-2xl font-bold text-slate-800">
          Looks like this page took a wrong turn.
        </h2>

        <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
          The page you are looking for doesn't exist, was moved, or had its URL updated. Every Soloner website includes this customized 404 page to keep your visitors engaged and easily guided back.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
          <button
            onClick={onReturnHome}
            className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 active:bg-blue-800 text-white font-bold text-sm rounded-xl shadow-md shadow-blue-600/20 transition-all duration-200"
          >
            <Home className="w-4 h-4" />
            <span>Return to Homepage</span>
          </button>

          <button
            onClick={onOpenQuoteModal}
            className="inline-flex items-center gap-2 px-6 py-3 bg-white hover:bg-slate-100 text-slate-700 font-semibold text-sm rounded-xl border border-slate-200 shadow-2xs transition-colors"
          >
            <span>Request a Quote</span>
          </button>
        </div>

        {/* Quick Links */}
        <div className="pt-6 border-t border-slate-200/80 text-xs text-slate-500 space-y-2">
          <p>Need urgent technical assistance with your website?</p>
          <div className="flex items-center justify-center gap-4 text-blue-600 font-semibold">
            <a href={`tel:${AGENCY_INFO.phoneClean}`} className="hover:underline flex items-center gap-1">
              <Phone className="w-3.5 h-3.5" />
              <span>Call Us</span>
            </a>
            <span>•</span>
            <a href={`https://wa.me/${AGENCY_INFO.whatsapp}`} target="_blank" rel="noopener noreferrer" className="hover:underline flex items-center gap-1 text-emerald-600">
              <MessageSquare className="w-3.5 h-3.5" />
              <span>WhatsApp Support</span>
            </a>
          </div>
        </div>

      </div>

      <div className="text-center text-xs text-slate-400">
        © 2026 Soloner Web Services • Custom 404 Experience
      </div>
    </div>
  );
};

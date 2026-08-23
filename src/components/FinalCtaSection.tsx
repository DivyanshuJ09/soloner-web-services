import React from 'react';
import { ArrowRight, MessageSquare, Sparkles, CheckCircle2, Shield } from 'lucide-react';
import { AGENCY_INFO } from '../data/agencyData';

interface FinalCtaSectionProps {
  onOpenQuoteModal: () => void;
}

export const FinalCtaSection: React.FC<FinalCtaSectionProps> = ({ onOpenQuoteModal }) => {
  const openWhatsApp = () => {
    const message = encodeURIComponent(`Hello Soloner Web Services, I'm ready to take my business online and would like to get a quote.`);
    window.open(`https://wa.me/${AGENCY_INFO.whatsapp}?text=${message}`, '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="final-cta" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Blue / Violet Gradient Banner Card */}
        <div className="relative rounded-3xl overflow-hidden bg-gradient-to-r from-blue-700 via-indigo-700 to-violet-700 p-8 sm:p-12 lg:p-16 text-white shadow-2xl shadow-blue-900/20">
          
          {/* Subtle Decorative Elements */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-violet-400/20 rounded-full blur-2xl translate-y-1/3 -translate-x-1/3 pointer-events-none" />

          <div className="relative z-10 max-w-3xl mx-auto text-center space-y-6">
            
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/15 backdrop-blur-md border border-white/20 text-xs font-semibold tracking-wide">
              <Sparkles className="w-3.5 h-3.5 text-blue-200" />
              <span>Let's Start Your Next Digital Milestone</span>
            </div>

            {/* Headline */}
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight leading-tight">
              Ready to Take Your Business Online?
            </h2>

            {/* Description */}
            <p className="text-lg sm:text-xl text-blue-100/90 max-w-2xl mx-auto font-normal leading-relaxed">
              Let's build a website that represents your business professionally.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
              <button
                id="final-quote-cta"
                onClick={onOpenQuoteModal}
                className="inline-flex items-center gap-2 px-8 py-4 bg-white hover:bg-slate-50 active:bg-slate-100 text-blue-900 font-bold text-base rounded-xl shadow-lg hover:shadow-xl transition-all duration-200 group"
              >
                <span>Get a Free Quote</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>

              <button
                id="final-whatsapp-cta"
                onClick={openWhatsApp}
                className="inline-flex items-center gap-2 px-7 py-4 bg-white/10 hover:bg-white/20 active:bg-white/25 text-white font-semibold text-base rounded-xl backdrop-blur-md border border-white/30 transition-all duration-200"
              >
                <MessageSquare className="w-4 h-4 text-emerald-300" />
                <span>WhatsApp Us</span>
              </button>
            </div>

            {/* Reassurance text */}
            <div className="pt-6 flex flex-wrap items-center justify-center gap-6 text-xs text-blue-200 font-medium">
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-300" /> Free 30-min Consultation
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-300" /> Itemized Quote in 24 Hours
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-300" /> Transparent Milestones
              </span>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

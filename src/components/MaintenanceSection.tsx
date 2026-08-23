import React, { useState } from 'react';
import {
  ShieldCheck,
  CheckCircle2,
  ChevronDown,
  ChevronUp,
  AlertCircle,
  ArrowRight,
  Sparkles,
  Info,
} from 'lucide-react';

interface MaintenanceSectionProps {
  onOpenQuoteModal: (topic?: string) => void;
}

export const MaintenanceSection: React.FC<MaintenanceSectionProps> = ({ onOpenQuoteModal }) => {
  const [showExcluded, setShowExcluded] = useState(true);

  const includedItems = [
    { title: 'Website monitoring', desc: 'Uptime checks to make sure your site is always reachable.' },
    { title: 'Deployment fixes', desc: 'Prompt resolution if hosting or server environment hiccups occur.' },
    { title: 'Minor text changes', desc: 'Updating business hours, contact numbers, staff bios, or addresses.' },
    { title: 'Image replacement', desc: 'Swapping banners, team headshots, or product photos.' },
    { title: 'Basic bug fixes', desc: 'Resolving minor layout glitches or responsive quirks.' },
    { title: 'Dependency/security updates', desc: 'Applying necessary framework and SSL certificate updates.' },
  ];

  const excludedItems = [
    { title: 'Complete redesign', note: 'Handled as a separate design & revamp project' },
    { title: 'Large new features', note: 'Quoted transparently with itemized milestone scope' },
    { title: 'Appointment management systems', note: 'Configured as a dedicated booking module' },
    { title: 'E-commerce', note: 'Built as an online store architecture' },
    { title: 'Major new pages', note: 'Added via mini-project additions' },
    { title: 'Custom integrations', note: 'Custom CRM or third-party API pipelines' },
  ];

  return (
    <section id="maintenance" className="py-20 bg-slate-50/80 border-y border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-white text-blue-700 text-xs font-semibold uppercase tracking-wider mb-3 border border-slate-200 shadow-2xs">
            Ongoing Peace of Mind
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Keep Your Website Running Smoothly
          </h2>
          <p className="mt-3 text-lg text-slate-600">
            Simple maintenance to keep your website updated, secure and reliable.
          </p>
        </div>

        <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Main Card: What's Included */}
          <div className="lg:col-span-7 bg-white rounded-2xl p-7 sm:p-8 border border-slate-200 shadow-xs">
            <div className="flex items-center gap-3 mb-6 pb-4 border-b border-slate-100">
              <div className="w-10 h-10 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center text-blue-600">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-slate-900">
                  Basic Maintenance Includes
                </h3>
                <p className="text-xs text-slate-500">
                  Essential upkeep to protect your digital storefront
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
              {includedItems.map((item, idx) => (
                <div key={idx} className="flex items-start gap-2.5 p-2 rounded-lg hover:bg-slate-50 transition-colors">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-xs sm:text-sm font-semibold text-slate-900">
                      {item.title}
                    </h4>
                    <p className="text-[11px] text-slate-500 mt-0.5 leading-snug">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Note about bigger scope */}
            <div className="p-4 rounded-xl bg-blue-50/70 border border-blue-100 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
              <div className="text-xs text-blue-900 font-medium">
                <strong>Need something bigger?</strong> We provide a separate development quote.
              </div>
              <button
                onClick={() => onOpenQuoteModal('Maintenance / Upgrade')}
                className="text-xs font-bold text-blue-700 hover:text-blue-900 flex items-center gap-1 shrink-0"
              >
                <span>Request Scope</span>
                <ArrowRight className="w-3 h-3" />
              </button>
            </div>
          </div>

          {/* Side Card: Transparent Scope Management ("What's Not Included?") */}
          <div className="lg:col-span-5 bg-white rounded-2xl p-6 sm:p-7 border border-slate-200 shadow-xs">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-2">
                <Info className="w-4 h-4 text-slate-500" />
                <h3 className="text-base font-bold text-slate-900">
                  What's Not Included?
                </h3>
              </div>
              <span className="text-[11px] font-semibold text-slate-500 bg-slate-100 px-2 py-0.5 rounded-md">
                Transparent Scope
              </span>
            </div>

            <p className="text-xs text-slate-600 mb-4 leading-relaxed">
              To keep regular maintenance lightweight and affordable for our clients, large-scale developments are quoted separately as needed:
            </p>

            <div className="space-y-2.5">
              {excludedItems.map((item, idx) => (
                <div
                  key={idx}
                  className="flex items-start gap-2.5 p-2.5 rounded-lg bg-slate-50/80 border border-slate-100"
                >
                  <span className="text-slate-400 text-xs font-mono mt-0.5">•</span>
                  <div className="flex-1">
                    <span className="text-xs font-semibold text-slate-800">
                      {item.title}
                    </span>
                    <span className="block text-[11px] text-slate-500">
                      {item.note}
                    </span>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-5 pt-4 border-t border-slate-100 text-center">
              <p className="text-[11px] text-slate-500">
                Clear boundaries prevent billing disputes and keep expectations aligned.
              </p>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

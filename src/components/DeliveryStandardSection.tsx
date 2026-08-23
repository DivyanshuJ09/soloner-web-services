import React from 'react';
import {
  Smartphone,
  Monitor,
  Compass,
  Mail,
  MessageSquare,
  PhoneCall,
  MapPin,
  Sparkles,
  Search,
  Lock,
  Bookmark,
  HelpCircle,
  CheckCircle2,
} from 'lucide-react';
import { DELIVERY_STANDARDS } from '../data/agencyData';

export const DeliveryStandardSection: React.FC = () => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Smartphone':
        return <Smartphone className="w-4 h-4 text-blue-600" />;
      case 'Monitor':
        return <Monitor className="w-4 h-4 text-blue-600" />;
      case 'Compass':
        return <Compass className="w-4 h-4 text-blue-600" />;
      case 'Mail':
        return <Mail className="w-4 h-4 text-blue-600" />;
      case 'MessageSquare':
        return <MessageSquare className="w-4 h-4 text-emerald-600" />;
      case 'PhoneCall':
        return <PhoneCall className="w-4 h-4 text-blue-600" />;
      case 'MapPin':
        return <MapPin className="w-4 h-4 text-rose-600" />;
      case 'Sparkles':
        return <Sparkles className="w-4 h-4 text-amber-600" />;
      case 'Search':
        return <Search className="w-4 h-4 text-indigo-600" />;
      case 'Lock':
        return <Lock className="w-4 h-4 text-emerald-600" />;
      case 'Bookmark':
        return <Bookmark className="w-4 h-4 text-violet-600" />;
      case 'HelpCircle':
        return <HelpCircle className="w-4 h-4 text-blue-600" />;
      default:
        return <CheckCircle2 className="w-4 h-4 text-blue-600" />;
    }
  };

  return (
    <section id="delivery-standard" className="py-20 bg-slate-50/70 border-y border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-white text-blue-700 text-xs font-semibold uppercase tracking-wider mb-3 border border-slate-200 shadow-2xs">
            Standard Inclusions
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Every Website Comes Business-Ready
          </h2>
          <p className="mt-3 text-base sm:text-lg text-slate-600">
            We don't cut corners. Every site we build is deployed with these 12 essential capabilities.
          </p>
        </div>

        {/* 12 Compact Visual Cards Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-5">
          {DELIVERY_STANDARDS.map((standard) => (
            <div
              key={standard.id}
              className="bg-white rounded-xl p-4 sm:p-5 border border-slate-200/80 shadow-2xs hover:shadow-md hover:border-blue-200 transition-all duration-200 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <div className="w-8 h-8 rounded-lg bg-slate-50 border border-slate-100 flex items-center justify-center">
                    {getIcon(standard.iconName)}
                  </div>
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                </div>

                <h3 className="text-sm font-bold text-slate-900 mb-1">
                  {standard.title}
                </h3>
                <p className="text-xs text-slate-500 leading-relaxed">
                  {standard.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Note */}
        <div className="mt-10 text-center">
          <div className="inline-flex items-center gap-2 text-xs sm:text-sm font-medium text-slate-600 bg-white px-4 py-2 rounded-full border border-slate-200 shadow-2xs">
            <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
            <span>Tested & verified across modern browsers before handover.</span>
          </div>
        </div>

      </div>
    </section>
  );
};

import React from 'react';
import {
  Building2,
  ShoppingBag,
  Briefcase,
  GraduationCap,
  UtensilsCrossed,
  Zap,
  ArrowRight,
  Check,
} from 'lucide-react';
import { SERVICES_DATA } from '../data/agencyData';

interface ServicesSectionProps {
  onOpenQuoteModal: (serviceName?: string) => void;
  onNavigateToWork: () => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({
  onOpenQuoteModal,
  onNavigateToWork,
}) => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Building2':
        return <Building2 className="w-6 h-6 text-blue-600" />;
      case 'ShoppingBag':
        return <ShoppingBag className="w-6 h-6 text-indigo-600" />;
      case 'Briefcase':
        return <Briefcase className="w-6 h-6 text-violet-600" />;
      case 'GraduationCap':
        return <GraduationCap className="w-6 h-6 text-blue-600" />;
      case 'UtensilsCrossed':
        return <UtensilsCrossed className="w-6 h-6 text-amber-600" />;
      case 'Zap':
        return <Zap className="w-6 h-6 text-emerald-600" />;
      default:
        return <Building2 className="w-6 h-6 text-blue-600" />;
    }
  };

  const getIconBg = (iconName: string) => {
    switch (iconName) {
      case 'Building2':
        return 'bg-blue-50 border-blue-100 group-hover:bg-blue-600 group-hover:text-white';
      case 'ShoppingBag':
        return 'bg-indigo-50 border-indigo-100 group-hover:bg-indigo-600 group-hover:text-white';
      case 'Briefcase':
        return 'bg-violet-50 border-violet-100 group-hover:bg-violet-600 group-hover:text-white';
      case 'GraduationCap':
        return 'bg-blue-50 border-blue-100 group-hover:bg-blue-600 group-hover:text-white';
      case 'UtensilsCrossed':
        return 'bg-amber-50 border-amber-100 group-hover:bg-amber-600 group-hover:text-white';
      case 'Zap':
        return 'bg-emerald-50 border-emerald-100 group-hover:bg-emerald-600 group-hover:text-white';
      default:
        return 'bg-blue-50 border-blue-100 group-hover:bg-blue-600 group-hover:text-white';
    }
  };

  return (
    <section id="services" className="py-20 bg-white border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-blue-50 text-blue-700 text-xs font-semibold uppercase tracking-wider mb-3">
            Services & Expertise
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            What We Build
          </h2>
          <p className="mt-3 text-lg text-slate-600">
            Professional websites designed around your business.
          </p>
        </div>

        {/* 6 Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {SERVICES_DATA.map((service) => (
            <div
              key={service.id}
              id={`service-card-${service.id}`}
              className="group relative bg-white rounded-2xl p-7 border border-slate-200/90 shadow-xs hover:shadow-lg hover:border-blue-200 hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Icon Container */}
                <div className="flex items-center justify-between mb-5">
                  <div
                    className={`w-12 h-12 rounded-xl border flex items-center justify-center transition-all duration-200 ${getIconBg(
                      service.iconName
                    )}`}
                  >
                    {getIcon(service.iconName)}
                  </div>
                  <span className="text-xs font-semibold text-slate-400 group-hover:text-blue-600 transition-colors">
                    0{SERVICES_DATA.indexOf(service) + 1}
                  </span>
                </div>

                {/* Title & Description */}
                <h3 className="text-xl font-bold text-slate-900 mb-2.5 group-hover:text-blue-600 transition-colors">
                  {service.title}
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed mb-6">
                  {service.description}
                </p>

                {/* Feature Checklist */}
                <div className="space-y-2 pt-2 border-t border-slate-100 mb-6">
                  {service.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-xs text-slate-600">
                      <Check className="w-3.5 h-3.5 text-blue-600 shrink-0" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Card Action */}
              <button
                onClick={() => onOpenQuoteModal(service.title)}
                className="w-full flex items-center justify-between text-xs font-semibold text-slate-700 hover:text-blue-600 py-2 px-3 rounded-lg bg-slate-50 hover:bg-blue-50 border border-slate-100 transition-colors group/btn"
              >
                <span>Request {service.title}</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-1 transition-transform" />
              </button>
            </div>
          ))}
        </div>

        {/* Bottom Banner */}
        <div className="mt-12 text-center">
          <p className="text-sm text-slate-500">
            Have a custom requirement?{' '}
            <button
              onClick={() => onOpenQuoteModal('Custom Project')}
              className="text-blue-600 font-semibold hover:underline"
            >
              Discuss your custom specifications →
            </button>
          </p>
        </div>

      </div>
    </section>
  );
};

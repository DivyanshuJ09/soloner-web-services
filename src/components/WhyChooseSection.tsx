import React from 'react';
import { Palette, Smartphone, ShieldCheck, FileCheck2, Sparkles } from 'lucide-react';
import { WHY_CHOOSE_DATA } from '../data/agencyData';

export const WhyChooseSection: React.FC = () => {
  const getIcon = (name: string) => {
    switch (name) {
      case 'Palette':
        return <Palette className="w-6 h-6 text-blue-600" />;
      case 'Smartphone':
        return <Smartphone className="w-6 h-6 text-indigo-600" />;
      case 'ShieldCheck':
        return <ShieldCheck className="w-6 h-6 text-emerald-600" />;
      case 'FileCheck2':
        return <FileCheck2 className="w-6 h-6 text-violet-600" />;
      default:
        return <Sparkles className="w-6 h-6 text-blue-600" />;
    }
  };

  return (
    <section id="why-choose" className="py-20 bg-slate-50/80 border-y border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-white text-slate-700 text-xs font-semibold uppercase tracking-wider mb-3 border border-slate-200 shadow-2xs">
            Agency Standards
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Why Businesses Choose Soloner
          </h2>
          <p className="mt-3 text-lg text-slate-600">
            We focus on business results, clean craftsmanship, and complete transparency.
          </p>
        </div>

        {/* 4 Clean Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {WHY_CHOOSE_DATA.map((item, idx) => (
            <div
              key={idx}
              id={`why-card-${idx}`}
              className="bg-white rounded-2xl p-7 border border-slate-200/80 shadow-xs hover:shadow-md transition-all duration-200 flex flex-col justify-between"
            >
              <div>
                <div className="w-12 h-12 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-center mb-5">
                  {getIcon(item.iconName)}
                </div>

                <div className="inline-block text-[11px] font-semibold text-blue-700 bg-blue-50/80 px-2 py-0.5 rounded-md mb-2">
                  {item.highlight}
                </div>

                <h3 className="text-lg font-bold text-slate-900 mb-2">
                  {item.title}
                </h3>

                <p className="text-sm text-slate-600 leading-relaxed">
                  {item.description}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-100 flex items-center gap-1.5 text-xs font-medium text-slate-500">
                <span className="w-1.5 h-1.5 rounded-full bg-blue-600"></span>
                <span>Standard on every build</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

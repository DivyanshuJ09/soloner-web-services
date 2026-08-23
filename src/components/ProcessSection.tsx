import React from 'react';
import { Compass, Layout, Code2, CheckCircle2, Rocket, ArrowRight } from 'lucide-react';
import { PROCESS_STEPS } from '../data/agencyData';

export const ProcessSection: React.FC = () => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Compass':
        return <Compass className="w-5 h-5 text-blue-600" />;
      case 'Layout':
        return <Layout className="w-5 h-5 text-indigo-600" />;
      case 'Code2':
        return <Code2 className="w-5 h-5 text-violet-600" />;
      case 'CheckCircle2':
        return <CheckCircle2 className="w-5 h-5 text-blue-600" />;
      case 'Rocket':
        return <Rocket className="w-5 h-5 text-emerald-600" />;
      default:
        return <Compass className="w-5 h-5 text-blue-600" />;
    }
  };

  return (
    <section id="process" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-blue-50 text-blue-700 text-xs font-semibold uppercase tracking-wider mb-3">
            Workflow & Delivery
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            From Idea to Live Website
          </h2>
          <p className="mt-3 text-lg text-slate-600">
            A structured, 5-step collaborative process designed for speed and quality.
          </p>
        </div>

        {/* 5-Step Process Timeline */}
        <div className="relative">
          {/* Connecting Line (Desktop) */}
          <div className="hidden lg:block absolute top-1/2 left-8 right-8 h-0.5 bg-gradient-to-r from-blue-200 via-indigo-200 to-violet-200 -translate-y-6 z-0" />

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6 relative z-10">
            {PROCESS_STEPS.map((stepItem, idx) => (
              <div
                key={stepItem.step}
                className="bg-white rounded-2xl p-6 border border-slate-200/90 shadow-xs hover:shadow-md hover:border-blue-300 transition-all duration-200 flex flex-col justify-between"
              >
                <div>
                  {/* Step Header */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-10 h-10 rounded-xl bg-slate-50 border border-slate-200 flex items-center justify-center shadow-2xs">
                      {getIcon(stepItem.iconName)}
                    </div>
                    <span className="font-mono text-xs font-bold text-blue-600 bg-blue-50 px-2 py-0.5 rounded-md border border-blue-100">
                      Step {stepItem.step}
                    </span>
                  </div>

                  {/* Title & Short Description */}
                  <h3 className="text-lg font-bold text-slate-900 mb-1.5">
                    {stepItem.title}
                  </h3>
                  <p className="text-xs font-semibold text-blue-700 mb-2">
                    {stepItem.description}
                  </p>
                  <p className="text-xs text-slate-500 leading-relaxed">
                    {stepItem.details}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-slate-100 flex items-center gap-1 text-[11px] text-slate-400">
                  <span>Phase {idx + 1} of 5</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Timeline Guarantee */}
        <div className="mt-12 text-center text-xs text-slate-500">
          Regular progress updates shared with live preview links before public deployment.
        </div>

      </div>
    </section>
  );
};

import React from 'react';
import { Check, ArrowRight, Sparkles, HelpCircle, ShieldCheck } from 'lucide-react';
import { PRICING_PLANS } from '../data/agencyData';

interface PricingSectionProps {
  onOpenQuoteModal: (planName?: string) => void;
}

export const PricingSection: React.FC<PricingSectionProps> = ({ onOpenQuoteModal }) => {
  return (
    <section id="pricing" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-blue-50 text-blue-700 text-xs font-semibold uppercase tracking-wider mb-3">
            Investment Plans
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Simple & Transparent Pricing
          </h2>
          <p className="mt-3 text-lg text-slate-600">
            Clear project milestones and fixed quotes with zero hidden charges.
          </p>
        </div>

        {/* 3 Pricing Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          {PRICING_PLANS.map((plan) => {
            const isPopular = plan.isPopular;
            return (
              <div
                key={plan.id}
                id={`pricing-card-${plan.id}`}
                className={`relative rounded-2xl p-8 flex flex-col justify-between transition-all duration-300 ${
                  isPopular
                    ? 'bg-white border-2 border-blue-600 shadow-xl shadow-blue-500/10 lg:-translate-y-2'
                    : 'bg-white border border-slate-200/90 shadow-xs hover:shadow-lg hover:border-slate-300'
                }`}
              >
                {/* Popular Badge */}
                {isPopular && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
                    <span className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white text-[11px] font-extrabold tracking-wider uppercase px-3 py-1 rounded-full shadow-sm flex items-center gap-1">
                      <Sparkles className="w-3 h-3" />
                      MOST POPULAR
                    </span>
                  </div>
                )}

                <div>
                  {/* Plan Header */}
                  <div className="border-b border-slate-100 pb-6 mb-6">
                    <h3 className="text-xl font-bold text-slate-900 tracking-tight">
                      {plan.name}
                    </h3>
                    <p className="text-xs text-slate-500 mt-1 min-h-[32px]">
                      {plan.tagline}
                    </p>

                    {/* Price Display */}
                    <div className="mt-4 flex items-baseline gap-1.5">
                      <span className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
                        {plan.price}
                      </span>
                      <span className="text-sm text-slate-500 font-semibold">
                        {plan.period || '/year'}
                      </span>
                    </div>
                    <p className="text-[11px] text-blue-600 font-medium mt-1">
                      Annual plan • Full setup, hosting & maintenance support
                    </p>
                  </div>

                  {/* Feature List */}
                  <div className="space-y-3 mb-8">
                    <div className="text-xs font-bold text-slate-900 uppercase tracking-wider">
                      Includes:
                    </div>
                    {plan.features.map((feature, idx) => (
                      <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-600">
                        <div className="w-4 h-4 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center shrink-0 mt-0.5">
                          <Check className="w-3 h-3" />
                        </div>
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Plan Action CTA */}
                <div>
                  <button
                    id={`pricing-cta-${plan.id}`}
                    onClick={() => onOpenQuoteModal(plan.name)}
                    className={`w-full py-3.5 px-4 rounded-xl font-semibold text-sm flex items-center justify-center gap-2 transition-all duration-200 ${
                      isPopular
                        ? 'bg-blue-600 hover:bg-blue-700 active:bg-blue-800 text-white shadow-md shadow-blue-600/25 hover:shadow-lg'
                        : 'bg-slate-50 hover:bg-slate-100 active:bg-slate-200 text-slate-900 border border-slate-200'
                    }`}
                  >
                    <span>{plan.ctaText}</span>
                  </button>
                  <p className="text-[11px] text-center text-slate-400 mt-2.5">
                    100% transparent pricing before development begins.
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Pricing Guarantee Note */}
        <div className="mt-12 max-w-2xl mx-auto text-center p-4 rounded-xl bg-slate-50 border border-slate-200/80 flex items-center justify-center gap-2.5 text-xs text-slate-600">
          <ShieldCheck className="w-4 h-4 text-blue-600 shrink-0" />
          <span>
            Every client receives a documented itemized quotation with timeline, deliverables, and payment terms.
          </span>
        </div>

      </div>
    </section>
  );
};
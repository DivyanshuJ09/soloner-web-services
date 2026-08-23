import React from 'react';
import { Star, ArrowRight, Quote, CheckCircle, Sparkles, Building } from 'lucide-react';
import { REVIEWS_DATA } from '../data/agencyData';

interface ReviewsSectionProps {
  onOpenQuoteModal: () => void;
}

export const ReviewsSection: React.FC<ReviewsSectionProps> = ({ onOpenQuoteModal }) => {
  return (
    <section id="reviews" className="py-20 bg-slate-50/70 border-t border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-white text-blue-700 text-xs font-semibold uppercase tracking-wider mb-3 border border-slate-200 shadow-2xs">
            Client Feedback
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            What Our Clients Say
          </h2>
          <p className="mt-3 text-lg text-slate-600">
            Real feedback format from business founders, partners, and administrators.
          </p>

          {/* Explicit Transparency Notice as required by prompt */}
          <div className="mt-4 inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50/90 text-blue-800 border border-blue-200/70 text-xs font-medium">
            <span className="w-2 h-2 rounded-full bg-blue-600"></span>
            <span>Illustrative client feedback format — ready to feature your project launch!</span>
          </div>
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {REVIEWS_DATA.map((rev) => (
            <div
              key={rev.id}
              className="bg-white rounded-2xl p-7 border border-slate-200/90 shadow-xs hover:shadow-md transition-all duration-200 flex flex-col justify-between"
            >
              <div>
                {/* Review Header: Stars + Placeholder Badge */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-1 text-amber-400">
                    {[...Array(rev.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                    ))}
                  </div>

                  <span className="text-[10px] font-semibold uppercase tracking-wider bg-slate-100 text-slate-500 px-2 py-0.5 rounded-md border border-slate-200">
                    Client Review
                  </span>
                </div>

                {/* Project Tag */}
                <div className="text-xs font-semibold text-blue-600 mb-3 flex items-center gap-1.5">
                  <Building className="w-3.5 h-3.5" />
                  <span>{rev.projectName}</span>
                </div>

                {/* Review Body */}
                <p className="text-sm sm:text-base text-slate-700 italic leading-relaxed mb-6">
                  "{rev.review}"
                </p>
              </div>

              {/* Reviewer Profile */}
              <div className="pt-4 border-t border-slate-100 flex items-center gap-3.5">
                <div className="w-11 h-11 rounded-full bg-gradient-to-tr from-blue-600 to-indigo-600 text-white font-bold text-sm flex items-center justify-center shadow-xs">
                  {rev.name.charAt(0)}
                </div>
                <div>
                  <h4 className="text-sm font-bold text-slate-900 leading-tight">
                    {rev.name}
                  </h4>
                  <p className="text-xs text-slate-500 font-medium">
                    {rev.role} • {rev.businessName}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA below reviews */}
        <div className="mt-14 text-center">
          <button
            onClick={onOpenQuoteModal}
            className="inline-flex items-center gap-2 px-6 py-3.5 bg-blue-600 hover:bg-blue-700 active:bg-blue-800 text-white text-sm font-bold rounded-xl shadow-md shadow-blue-600/20 hover:shadow-lg transition-all duration-200 group"
          >
            <span>Want to Be Our Next Success Story?</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

      </div>
    </section>
  );
};

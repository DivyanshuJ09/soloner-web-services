import React from 'react';
import { FileText, Receipt, Scale, ArrowRight, CheckCircle2 } from 'lucide-react';

interface BusinessProcessSectionProps {
  onOpenLegalModal: (tab?: string) => void;
}

export const BusinessProcessSection: React.FC<BusinessProcessSectionProps> = ({
  onOpenLegalModal,
}) => {
  return (
    <section id="business-process" className="py-20 bg-slate-50/80 border-t border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-white text-slate-700 text-xs font-semibold uppercase tracking-wider mb-3 border border-slate-200 shadow-2xs">
            Commercial Standards
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Professional From Start to Finish
          </h2>
          <p className="mt-3 text-lg text-slate-600">
            We handle business relationships with the same precision and accountability as our code.
          </p>
        </div>

        {/* 3 Clean Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* Card 1: Client Quotation */}
          <div className="bg-white rounded-2xl p-7 border border-slate-200/90 shadow-xs hover:shadow-md transition-all duration-200 flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center text-blue-600 mb-5">
                <FileText className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">
                Client Quotation
              </h3>
              <p className="text-xs text-slate-500 mb-5">
                Clearly outlines every cost element before project commencement:
              </p>

              <ul className="space-y-2.5 text-xs text-slate-700">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0" />
                  <span>Website development cost</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0" />
                  <span>Domain registration cost</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0" />
                  <span>Hosting infrastructure cost</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0" />
                  <span>Ongoing maintenance options</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0" />
                  <span>Exact project timeline</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0" />
                  <span>Transparent milestone payment terms</span>
                </li>
              </ul>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-100 text-[11px] text-slate-400">
              Zero hidden or unexpected add-on costs.
            </div>
          </div>

          {/* Card 2: Invoice / Receipt */}
          <div className="bg-white rounded-2xl p-7 border border-slate-200/90 shadow-xs hover:shadow-md transition-all duration-200 flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-xl bg-indigo-50 border border-indigo-100 flex items-center justify-center text-indigo-600 mb-5">
                <Receipt className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">
                Invoice / Receipt
              </h3>
              <p className="text-xs text-slate-500 mb-5">
                Full documentation for bookkeeping, company accounting, and tax compliance:
              </p>

              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/70 mb-5 space-y-2">
                <p className="text-xs font-semibold text-slate-800 leading-relaxed">
                  Every payment is documented with a professional invoice or receipt.
                </p>
                <p className="text-[11px] text-slate-500">
                  Includes itemized breakdowns, transaction IDs, tax identifiers, and payment confirmation stamps.
                </p>
              </div>

              <div className="space-y-2 text-xs text-slate-600">
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
                  <span>Direct bank transfer / card payment receipts</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
                  <span>Instant PDF receipt generation for your records</span>
                </div>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-100 text-[11px] text-slate-400">
              Clear corporate accountability on all payments.
            </div>
          </div>

          {/* Card 3: Service Agreement */}
          <div className="bg-white rounded-2xl p-7 border border-slate-200/90 shadow-xs hover:shadow-md transition-all duration-200 flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-xl bg-violet-50 border border-violet-100 flex items-center justify-center text-violet-600 mb-5">
                <Scale className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">
                Service Agreement
              </h3>
              <p className="text-xs text-slate-500 mb-5">
                Protects both parties and formalizes mutual scope expectations:
              </p>

              <div className="grid grid-cols-2 gap-2 text-xs text-slate-700 mb-6 font-medium">
                <div className="p-2 rounded-md bg-slate-50 border border-slate-100 flex items-center gap-1.5">
                  <span className="text-blue-600">✓</span> Deliverables
                </div>
                <div className="p-2 rounded-md bg-slate-50 border border-slate-100 flex items-center gap-1.5">
                  <span className="text-blue-600">✓</span> Exclusions
                </div>
                <div className="p-2 rounded-md bg-slate-50 border border-slate-100 flex items-center gap-1.5">
                  <span className="text-blue-600">✓</span> Ownership
                </div>
                <div className="p-2 rounded-md bg-slate-50 border border-slate-100 flex items-center gap-1.5">
                  <span className="text-blue-600">✓</span> Domain & Host
                </div>
                <div className="p-2 rounded-md bg-slate-50 border border-slate-100 flex items-center gap-1.5">
                  <span className="text-blue-600">✓</span> Maintenance
                </div>
                <div className="p-2 rounded-md bg-slate-50 border border-slate-100 flex items-center gap-1.5">
                  <span className="text-blue-600">✓</span> Cancellation
                </div>
              </div>
            </div>

            {/* Action CTA: View Service Terms */}
            <div>
              <button
                id="view-service-terms-btn"
                onClick={() => onOpenLegalModal('agreement')}
                className="w-full flex items-center justify-center gap-2 py-2.5 px-4 bg-slate-900 hover:bg-slate-800 text-white rounded-xl text-xs font-semibold shadow-xs transition-colors"
              >
                <span>View Service Terms</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

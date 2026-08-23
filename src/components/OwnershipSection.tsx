import React from 'react';
import { KeyRound, ShieldCheck, CheckCircle2, Info } from 'lucide-react';
import { OWNERSHIP_DATA } from '../data/agencyData';

interface OwnershipSectionProps {
  onOpenLegalModal: (tab?: string) => void;
}

export const OwnershipSection: React.FC<OwnershipSectionProps> = ({ onOpenLegalModal }) => {
  return (
    <section id="ownership" className="py-20 bg-white border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-blue-50 text-blue-700 text-xs font-semibold uppercase tracking-wider mb-3">
            Asset Transparency
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Your Business. Your Assets.
          </h2>
          <p className="mt-3 text-lg text-slate-600">
            We believe in honest partnerships with zero artificial vendor lock-in.
          </p>
        </div>

        {/* Clean Visual Ownership Table */}
        <div className="max-w-4xl mx-auto bg-white rounded-2xl border border-slate-200 shadow-xs overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-slate-50 border-b border-slate-200">
                  <th className="py-4 px-6 text-xs font-bold uppercase tracking-wider text-slate-700">
                    Asset
                  </th>
                  <th className="py-4 px-6 text-xs font-bold uppercase tracking-wider text-slate-700">
                    Owner
                  </th>
                  <th className="py-4 px-6 text-xs font-bold uppercase tracking-wider text-slate-700 hidden sm:table-cell">
                    Ownership Details
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 text-sm">
                {OWNERSHIP_DATA.map((row, idx) => (
                  <tr key={idx} className="hover:bg-slate-50/70 transition-colors">
                    <td className="py-4 px-6 font-semibold text-slate-900 flex items-center gap-2">
                      <KeyRound className="w-4 h-4 text-blue-600 shrink-0" />
                      <span>{row.asset}</span>
                    </td>
                    <td className="py-4 px-6">
                      <span
                        className={`inline-flex items-center px-2.5 py-1 rounded-md text-xs font-bold ${
                          row.owner === 'Client'
                            ? 'bg-emerald-50 text-emerald-700 border border-emerald-200'
                            : row.owner.includes('Client')
                            ? 'bg-blue-50 text-blue-700 border border-blue-200'
                            : 'bg-slate-100 text-slate-700 border border-slate-200'
                        }`}
                      >
                        {row.owner}
                      </span>
                    </td>
                    <td className="py-4 px-6 text-xs text-slate-600 hidden sm:table-cell">
                      {row.note}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Bottom Note */}
          <div className="p-4 sm:p-5 bg-slate-50/70 border-t border-slate-200/80 flex flex-col sm:flex-row items-center justify-between gap-3 text-center sm:text-left">
            <div className="flex items-center gap-2 text-xs font-semibold text-slate-800">
              <ShieldCheck className="w-4 h-4 text-blue-600 shrink-0" />
              <span>Ownership terms are clearly defined before development begins.</span>
            </div>

            <button
              onClick={() => onOpenLegalModal('ownership')}
              className="text-xs text-blue-600 hover:text-blue-700 font-semibold hover:underline"
            >
              Read full ownership clause →
            </button>
          </div>
        </div>

      </div>
    </section>
  );
};

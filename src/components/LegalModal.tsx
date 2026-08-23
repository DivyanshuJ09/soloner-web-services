import React, { useState, useEffect } from 'react';
import { X, Scale, FileText, Shield, KeyRound, CheckCircle2 } from 'lucide-react';
import { OWNERSHIP_DATA } from '../data/agencyData';

interface LegalModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialTab?: string;
}

export const LegalModal: React.FC<LegalModalProps> = ({
  isOpen,
  onClose,
  initialTab = 'agreement',
}) => {
  const [activeTab, setActiveTab] = useState<'agreement' | 'terms' | 'privacy' | 'ownership'>('agreement');

  useEffect(() => {
    if (initialTab === 'terms' || initialTab === 'privacy' || initialTab === 'ownership') {
      setActiveTab(initialTab);
    } else {
      setActiveTab('agreement');
    }
  }, [initialTab]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-950/70 backdrop-blur-xs flex items-center justify-center p-3 sm:p-6 animate-in fade-in duration-200">
      <div className="bg-white w-full max-w-4xl rounded-3xl shadow-2xl border border-slate-200 overflow-hidden relative max-h-[90vh] flex flex-col">
        
        {/* Header */}
        <div className="bg-slate-900 text-white p-5 sm:p-6 flex items-center justify-between border-b border-slate-800 shrink-0">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-blue-600 flex items-center justify-center text-white">
              <Scale className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-lg font-bold">Legal & Governance Terms</h3>
              <p className="text-xs text-slate-400">Soloner Web Services Commercial Standards</p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-slate-800 hover:bg-slate-700 text-white flex items-center justify-center transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Tab Navigation */}
        <div className="bg-slate-50 border-b border-slate-200 px-6 py-2 flex gap-2 overflow-x-auto shrink-0">
          {[
            { id: 'agreement', label: 'Service Agreement', icon: FileText },
            { id: 'ownership', label: 'Ownership Matrix', icon: KeyRound },
            { id: 'terms', label: 'Terms & Conditions', icon: Scale },
            { id: 'privacy', label: 'Privacy Policy', icon: Shield },
          ].map((tab) => {
            const Icon = tab.icon;
            const isSelected = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as any)}
                className={`px-4 py-2 rounded-xl text-xs font-bold flex items-center gap-2 whitespace-nowrap transition-colors ${
                  isSelected
                    ? 'bg-white text-blue-600 shadow-2xs border border-slate-200'
                    : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
                }`}
              >
                <Icon className="w-3.5 h-3.5" />
                <span>{tab.label}</span>
              </button>
            );
          })}
        </div>

        {/* Modal Scrollable Body */}
        <div className="overflow-y-auto p-6 sm:p-8 space-y-6 text-sm text-slate-700 leading-relaxed">
          {activeTab === 'agreement' && (
            <div className="space-y-6">
              <div>
                <h4 className="text-lg font-bold text-slate-900 mb-2">
                  Standard Website Development Service Agreement
                </h4>
                <p className="text-slate-600 text-xs">
                  This Agreement sets out the professional standards, milestone commitments, and terms under which Soloner Web Services executes website design and engineering projects.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-1.5">
                  <h5 className="font-bold text-xs uppercase tracking-wider text-slate-900">1. Deliverables</h5>
                  <p className="text-xs text-slate-600">
                    Each project includes custom responsive code, designated pages, contact workflows, basic SEO tags, and browser testing specified in the accepted quotation.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-1.5">
                  <h5 className="font-bold text-xs uppercase tracking-wider text-slate-900">2. Exclusions</h5>
                  <p className="text-xs text-slate-600">
                    Out-of-scope features (e.g. separate custom mobile apps, third-party licensing fees, unapproved API rebuilds) are quoted separately with explicit consent.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-1.5">
                  <h5 className="font-bold text-xs uppercase tracking-wider text-slate-900">3. Domain & Hosting</h5>
                  <p className="text-xs text-slate-600">
                    Domains are registered directly in the client's name. Hosting accounts are configured with direct client ownership or transparent agency management.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-1.5">
                  <h5 className="font-bold text-xs uppercase tracking-wider text-slate-900">4. Content Responsibility</h5>
                  <p className="text-xs text-slate-600">
                    The client represents they own the copyright or appropriate license for all logos, photographs, graphics, and written copy supplied to Soloner.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-1.5">
                  <h5 className="font-bold text-xs uppercase tracking-wider text-slate-900">5. Payment & Invoicing</h5>
                  <p className="text-xs text-slate-600">
                    Standard projects operate on documented milestone invoices (e.g. 50% deposit upon kickoff, 50% upon final review approval before live deployment).
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-1.5">
                  <h5 className="font-bold text-xs uppercase tracking-wider text-slate-900">6. Cancellation & Handover</h5>
                  <p className="text-xs text-slate-600">
                    Either party may terminate with written notice. Completed milestone deliverables and assets are transferred proportionally upon payment settlement.
                  </p>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'ownership' && (
            <div className="space-y-6">
              <div>
                <h4 className="text-lg font-bold text-slate-900 mb-2">
                  Asset Ownership Breakdown
                </h4>
                <p className="text-slate-600 text-xs">
                  We guarantee total transparency regarding digital assets and intellectual property:
                </p>
              </div>

              <div className="border border-slate-200 rounded-2xl overflow-hidden">
                <table className="w-full text-left text-xs">
                  <thead className="bg-slate-100 font-bold text-slate-800 border-b border-slate-200">
                    <tr>
                      <th className="p-3.5">Asset</th>
                      <th className="p-3.5">Owner</th>
                      <th className="p-3.5">Details</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100">
                    {OWNERSHIP_DATA.map((row, i) => (
                      <tr key={i} className="hover:bg-slate-50">
                        <td className="p-3.5 font-semibold text-slate-900">{row.asset}</td>
                        <td className="p-3.5 font-bold text-blue-700">{row.owner}</td>
                        <td className="p-3.5 text-slate-600">{row.note}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {activeTab === 'terms' && (
            <div className="space-y-4 text-xs sm:text-sm">
              <h4 className="text-lg font-bold text-slate-900">Terms & Conditions of Service</h4>
              <p>
                By requesting a quote or engaging Soloner Web Services, you agree to collaborative milestone sign-offs, timely feedback during review phases, and mutual respect of agreed timelines.
              </p>
              <p>
                All development code is delivered in modern, standards-compliant TypeScript/React or standard static architectures optimized for high uptime and performance.
              </p>
              <p>
                Warranties: We guarantee that all websites delivered conform to the delivery standards checklist (SSL, mobile responsive, Chrome/Safari tested) upon launch.
              </p>
            </div>
          )}

          {activeTab === 'privacy' && (
            <div className="space-y-4 text-xs sm:text-sm">
              <h4 className="text-lg font-bold text-slate-900">Privacy Policy</h4>
              <p>
                Soloner Web Services respects the confidentiality of your business data. Information submitted through quote forms, email, or WhatsApp is strictly utilized for project scoping, communication, and invoicing.
              </p>
              <p>
                We do not sell, rent, or distribute client contact records or proprietary commercial details to any third-party marketing brokers.
              </p>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="bg-slate-50 px-6 py-4 border-t border-slate-200 flex items-center justify-between shrink-0">
          <span className="text-xs text-slate-500">© 2026 Soloner Web Services Legal Framework</span>
          <button
            onClick={onClose}
            className="px-4 py-2 bg-slate-900 hover:bg-slate-800 text-white rounded-xl text-xs font-semibold"
          >
            I Understand & Close
          </button>
        </div>

      </div>
    </div>
  );
};

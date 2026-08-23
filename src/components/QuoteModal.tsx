import React, { useState, useEffect } from 'react';
import { X, Check, ArrowRight, MessageSquare, Send, Sparkles, ShieldCheck } from 'lucide-react';
import { AGENCY_INFO } from '../data/agencyData';

interface QuoteModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialPlan?: string;
}

export const QuoteModal: React.FC<QuoteModalProps> = ({
  isOpen,
  onClose,
  initialPlan,
}) => {
  const [projectType, setProjectType] = useState('Business Website');
  const [scope, setScope] = useState('5-8 Pages');
  const [timeline, setTimeline] = useState('Standard (1-2 Weeks)');
  const [clientName, setClientName] = useState('');
  const [businessName, setBusinessName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [notes, setNotes] = useState('');
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (initialPlan) {
      if (initialPlan.toLowerCase().includes('basic')) {
        setProjectType('Business Website (Basic)');
        setScope('1-4 Pages');
      } else if (initialPlan.toLowerCase().includes('professional')) {
        setProjectType('Business Website (Professional)');
        setScope('5-10 Pages');
      } else if (initialPlan.toLowerCase().includes('custom')) {
        setProjectType('Custom Web Application');
        setScope('10+ Pages / Custom');
      } else {
        setProjectType(initialPlan);
      }
    }
  }, [initialPlan]);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleWhatsAppInstant = () => {
    const text = encodeURIComponent(
      `Hello Soloner Web Services,\nI would like a website quotation:\n- Name: ${clientName || 'Client'}\n- Business: ${
        businessName || 'My Business'
      }\n- Type: ${projectType}\n- Scope: ${scope}\n- Timeline: ${timeline}\n- Details: ${
        notes || 'Please provide quotation details.'
      }`
    );
    window.open(`https://wa.me/${AGENCY_INFO.whatsapp}?text=${text}`, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-900/60 backdrop-blur-xs flex items-center justify-center p-4 sm:p-6 animate-in fade-in duration-200">
      <div className="bg-white w-full max-w-2xl rounded-3xl shadow-2xl border border-slate-200 overflow-hidden relative">
        
        {/* Modal Header */}
        <div className="bg-gradient-to-r from-slate-900 via-blue-950 to-indigo-950 text-white p-6 sm:p-7 flex items-center justify-between">
          <div>
            <div className="inline-flex items-center gap-1.5 text-[11px] font-semibold tracking-wider uppercase text-blue-300 bg-white/10 px-2.5 py-0.5 rounded-md mb-1.5">
              <Sparkles className="w-3 h-3 text-blue-300" />
              <span>Project Quotation Request</span>
            </div>
            <h3 className="text-xl sm:text-2xl font-bold tracking-tight">
              Get Your Free Custom Quote
            </h3>
            <p className="text-xs text-blue-200 mt-0.5">
              Receive an itemized quote and milestone breakdown within 24 hours.
            </p>
          </div>

          <button
            onClick={onClose}
            className="w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Content */}
        <div className="p-6 sm:p-8 max-h-[80vh] overflow-y-auto">
          {submitted ? (
            <div className="text-center py-8 space-y-4">
              <div className="w-14 h-14 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
                <Check className="w-7 h-7" />
              </div>
              <h4 className="text-xl font-bold text-slate-900">
                Quote Request Submitted!
              </h4>
              <p className="text-sm text-slate-600 max-w-md mx-auto leading-relaxed">
                Thank you, <strong>{clientName || 'there'}</strong>. We have logged your request for <strong>{projectType}</strong>. Our team will prepare your itemized proposal and email you at <strong>{email}</strong> shortly.
              </p>
              <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
                <button
                  onClick={handleWhatsAppInstant}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold rounded-xl"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Send Directly on WhatsApp</span>
                </button>
                <button
                  onClick={onClose}
                  className="w-full sm:w-auto px-5 py-2.5 bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-semibold rounded-xl"
                >
                  Close Window
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              {/* Project Type */}
              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                  Select Project Type
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                  {[
                    'Business Website',
                    'E-commerce Store',
                    'Portfolio Website',
                    'School / Coaching',
                    'Hotel / Restaurant',
                    'Custom Application',
                  ].map((type) => (
                    <button
                      key={type}
                      type="button"
                      onClick={() => setProjectType(type)}
                      className={`p-2.5 text-xs font-semibold rounded-xl border text-left transition-all ${
                        projectType.includes(type)
                          ? 'border-blue-600 bg-blue-50/70 text-blue-700 font-bold'
                          : 'border-slate-200 text-slate-700 hover:bg-slate-50'
                      }`}
                    >
                      {type}
                    </button>
                  ))}
                </div>
              </div>

              {/* Scope & Timeline */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                    Estimated Page Count
                  </label>
                  <select
                    value={scope}
                    onChange={(e) => setScope(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs sm:text-sm text-slate-900 bg-white"
                  >
                    <option>1-4 Pages (Essential Basic)</option>
                    <option>5-8 Pages (Standard Professional)</option>
                    <option>9-15 Pages (Comprehensive)</option>
                    <option>15+ Pages / Custom Store</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                    Target Timeline
                  </label>
                  <select
                    value={timeline}
                    onChange={(e) => setTimeline(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs sm:text-sm text-slate-900 bg-white"
                  >
                    <option>Standard (1-2 Weeks)</option>
                    <option>Fast Track (Under 1 Week)</option>
                    <option>Comprehensive (2-4 Weeks)</option>
                    <option>Flexible / Planning Phase</option>
                  </select>
                </div>
              </div>

              {/* Contact Inputs */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-1">
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Full name"
                    value={clientName}
                    onChange={(e) => setClientName(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs sm:text-sm text-slate-900 focus:border-blue-600 focus:outline-hidden"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                    Business Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Company name"
                    value={businessName}
                    onChange={(e) => setBusinessName(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs sm:text-sm text-slate-900 focus:border-blue-600 focus:outline-hidden"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                    Phone / WhatsApp *
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="+1 (555) 000-0000"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs sm:text-sm text-slate-900 focus:border-blue-600 focus:outline-hidden"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                    Work Email *
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="name@business.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs sm:text-sm text-slate-900 focus:border-blue-600 focus:outline-hidden"
                  />
                </div>
              </div>

              {/* Notes */}
              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                  Specific Features or Notes (Optional)
                </label>
                <textarea
                  rows={2}
                  placeholder="Any special integrations, style preferences, or domain/hosting status..."
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs sm:text-sm text-slate-900 focus:border-blue-600 focus:outline-hidden"
                ></textarea>
              </div>

              {/* Modal Actions */}
              <div className="flex flex-col sm:flex-row items-center gap-3 pt-3">
                <button
                  type="submit"
                  className="w-full sm:flex-1 py-3 px-5 bg-blue-600 hover:bg-blue-700 active:bg-blue-800 text-white font-bold text-xs sm:text-sm rounded-xl shadow-md shadow-blue-600/20 flex items-center justify-center gap-2 transition-colors"
                >
                  <span>Request Itemized Quotation</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                <button
                  type="button"
                  onClick={handleWhatsAppInstant}
                  className="w-full sm:w-auto py-3 px-4 bg-emerald-50 hover:bg-emerald-100 text-emerald-700 font-bold text-xs sm:text-sm rounded-xl border border-emerald-200 flex items-center justify-center gap-1.5 transition-colors"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Send via WhatsApp</span>
                </button>
              </div>

              <div className="flex items-center justify-center gap-2 text-[11px] text-slate-400 pt-1">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                <span>100% free consultation. No commitment required.</span>
              </div>
            </form>
          )}
        </div>

      </div>
    </div>
  );
};

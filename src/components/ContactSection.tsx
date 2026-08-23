import React, { useState } from 'react';
import {
  Phone,
  MessageSquare,
  Mail,
  MapPin,
  Send,
  CheckCircle2,
  Clock,
  ExternalLink,
  ShieldCheck,
} from 'lucide-react';
import { AGENCY_INFO } from '../data/agencyData';

interface ContactSectionProps {
  initialTopic?: string;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ initialTopic }) => {
  const [formData, setFormData] = useState({
    name: '',
    businessName: '',
    phone: '',
    email: '',
    websiteType: initialTopic || 'Business Website',
    budget: '$1,000 - $3,000',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const websiteTypes = [
    'Business Website',
    'E-commerce Store',
    'Portfolio Website',
    'School & Coaching Website',
    'Hotel & Restaurant Website',
    'High-Conversion Landing Page',
    'Custom Web Application',
    'Website Redesign & Speed Up',
  ];

  const budgetOptions = [
    'Under $1,000',
    '$1,000 - $3,000',
    '$3,000 - $5,000',
    '$5,000+',
    'Flexible / Seeking Consultation',
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate immediate seamless verification
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 800);
  };

  const handleWhatsAppSend = () => {
    const text = encodeURIComponent(
      `Hello Soloner Web Services,\nName: ${formData.name || 'Prospective Client'}\nBusiness: ${
        formData.businessName || 'N/A'
      }\nWebsite Type: ${formData.websiteType}\nBudget: ${formData.budget}\nMessage: ${
        formData.message || 'I would like a website quotation.'
      }`
    );
    window.open(`https://wa.me/${AGENCY_INFO.whatsapp}?text=${text}`, '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="contact" className="py-20 bg-slate-50/80 border-t border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-white text-blue-700 text-xs font-semibold uppercase tracking-wider mb-3 border border-slate-200 shadow-2xs">
            Start a Conversation
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Let's Build Something Great
          </h2>
          <p className="mt-3 text-lg text-slate-600">
            Tell us about your project or reach out directly through your preferred channel.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          
          {/* Column 1: Contact Form */}
          <div className="lg:col-span-7 bg-white rounded-3xl p-7 sm:p-10 border border-slate-200 shadow-sm">
            {submitted ? (
              <div className="text-center py-10 space-y-4">
                <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900">
                  Inquiry Received Successfully!
                </h3>
                <p className="text-sm text-slate-600 max-w-md mx-auto leading-relaxed">
                  Thank you for reaching out to Soloner Web Services. We are reviewing your requirements and will reply with a detailed project proposal within 2 to 4 business hours.
                </p>
                <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
                  <button
                    onClick={handleWhatsAppSend}
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 bg-emerald-600 text-white text-xs font-bold rounded-xl shadow-xs"
                  >
                    <MessageSquare className="w-4 h-4" />
                    <span>Send Copy to WhatsApp</span>
                  </button>
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({
                        name: '',
                        businessName: '',
                        phone: '',
                        email: '',
                        websiteType: 'Business Website',
                        budget: '$1,000 - $3,000',
                        message: '',
                      });
                    }}
                    className="w-full sm:w-auto px-5 py-2.5 bg-slate-100 text-slate-700 hover:bg-slate-200 text-xs font-semibold rounded-xl"
                  >
                    Submit Another Inquiry
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  {/* Name */}
                  <div>
                    <label htmlFor="contact-name" className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                      Your Name *
                    </label>
                    <input
                      id="contact-name"
                      type="text"
                      required
                      placeholder="e.g. Sarah Jenkins"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 text-slate-900 text-sm focus:outline-hidden focus:ring-2 focus:ring-blue-500/20 focus:border-blue-600 transition-colors"
                    />
                  </div>

                  {/* Business Name */}
                  <div>
                    <label htmlFor="contact-business" className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                      Business / Organization *
                    </label>
                    <input
                      id="contact-business"
                      type="text"
                      required
                      placeholder="e.g. Sterling Legal Advisory"
                      value={formData.businessName}
                      onChange={(e) => setFormData({ ...formData, businessName: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 text-slate-900 text-sm focus:outline-hidden focus:ring-2 focus:ring-blue-500/20 focus:border-blue-600 transition-colors"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  {/* Phone */}
                  <div>
                    <label htmlFor="contact-phone" className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                      Phone / WhatsApp Number *
                    </label>
                    <input
                      id="contact-phone"
                      type="tel"
                      required
                      placeholder="+1 (555) 000-0000"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 text-slate-900 text-sm focus:outline-hidden focus:ring-2 focus:ring-blue-500/20 focus:border-blue-600 transition-colors"
                    />
                  </div>

                  {/* Email */}
                  <div>
                    <label htmlFor="contact-email" className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                      Email Address *
                    </label>
                    <input
                      id="contact-email"
                      type="email"
                      required
                      placeholder="sarah@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 text-slate-900 text-sm focus:outline-hidden focus:ring-2 focus:ring-blue-500/20 focus:border-blue-600 transition-colors"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  {/* Website Type */}
                  <div>
                    <label htmlFor="contact-type" className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                      Website Type
                    </label>
                    <select
                      id="contact-type"
                      value={formData.websiteType}
                      onChange={(e) => setFormData({ ...formData, websiteType: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 text-slate-900 text-sm focus:outline-hidden focus:ring-2 focus:ring-blue-500/20 focus:border-blue-600 bg-white"
                    >
                      {websiteTypes.map((type, i) => (
                        <option key={i} value={type}>
                          {type}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Budget */}
                  <div>
                    <label htmlFor="contact-budget" className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                      Target Budget Range
                    </label>
                    <select
                      id="contact-budget"
                      value={formData.budget}
                      onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 text-slate-900 text-sm focus:outline-hidden focus:ring-2 focus:ring-blue-500/20 focus:border-blue-600 bg-white"
                    >
                      {budgetOptions.map((b, i) => (
                        <option key={i} value={b}>
                          {b}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* Message */}
                <div>
                  <label htmlFor="contact-message" className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                    Project Message / Notes
                  </label>
                  <textarea
                    id="contact-message"
                    rows={4}
                    placeholder="Briefly describe your goals, required pages, brand references, or target launch deadline..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 text-slate-900 text-sm focus:outline-hidden focus:ring-2 focus:ring-blue-500/20 focus:border-blue-600 transition-colors"
                  ></textarea>
                </div>

                {/* Form Buttons */}
                <div className="flex flex-col sm:flex-row items-center gap-3 pt-2">
                  <button
                    id="submit-contact-form-btn"
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full sm:flex-1 py-3.5 px-6 bg-blue-600 hover:bg-blue-700 active:bg-blue-800 disabled:opacity-75 text-white font-bold text-sm rounded-xl shadow-md shadow-blue-600/20 flex items-center justify-center gap-2 transition-all duration-200"
                  >
                    {isSubmitting ? (
                      <span className="flex items-center gap-2">
                        <span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></span>
                        Processing...
                      </span>
                    ) : (
                      <>
                        <span>Send Inquiry</span>
                        <Send className="w-4 h-4" />
                      </>
                    )}
                  </button>

                  <button
                    type="button"
                    onClick={handleWhatsAppSend}
                    className="w-full sm:w-auto py-3.5 px-5 bg-emerald-50 hover:bg-emerald-100 text-emerald-700 font-bold text-sm rounded-xl border border-emerald-200 flex items-center justify-center gap-2 transition-colors"
                  >
                    <MessageSquare className="w-4 h-4" />
                    <span>WhatsApp Chat</span>
                  </button>
                </div>

                <div className="flex items-center gap-2 text-[11px] text-slate-500 pt-1">
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                  <span>Strict confidentiality. Your contact details are never shared.</span>
                </div>
              </form>
            )}
          </div>

          {/* Column 2: Direct Contact & Google Maps Area */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Direct Contact Cards */}
            <div className="bg-white rounded-3xl p-7 border border-slate-200 shadow-xs space-y-5">
              <h3 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-3">
                Direct Contact Channels
              </h3>

              <div className="space-y-4">
                {/* Phone */}
                <a
                  id="direct-phone-link"
                  href={`tel:${AGENCY_INFO.phoneClean}`}
                  className="flex items-center gap-3.5 p-3 rounded-xl hover:bg-slate-50 border border-slate-100 transition-colors group"
                >
                  <div className="w-10 h-10 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center group-hover:bg-blue-600 group-hover:text-white transition-colors">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="block text-[11px] font-bold text-slate-400 uppercase tracking-wider">
                      Phone Support (Click to Call)
                    </span>
                    <span className="text-sm font-bold text-slate-900 group-hover:text-blue-600">
                      {AGENCY_INFO.phone}
                    </span>
                  </div>
                </a>

                {/* WhatsApp */}
                <a
                  id="direct-whatsapp-link"
                  href={`https://wa.me/${AGENCY_INFO.whatsapp}?text=${encodeURIComponent(
                    'Hello Soloner Web Services, I would like to discuss a website project.'
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3.5 p-3 rounded-xl hover:bg-emerald-50/50 border border-slate-100 transition-colors group"
                >
                  <div className="w-10 h-10 rounded-lg bg-emerald-50 text-emerald-600 flex items-center justify-center group-hover:bg-emerald-600 group-hover:text-white transition-colors">
                    <MessageSquare className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="block text-[11px] font-bold text-emerald-700 uppercase tracking-wider">
                      WhatsApp Quick Chat
                    </span>
                    <span className="text-sm font-bold text-slate-900 group-hover:text-emerald-700">
                      {AGENCY_INFO.whatsappDisplay}
                    </span>
                  </div>
                </a>

                {/* Email */}
                <a
                  id="direct-email-link"
                  href={`mailto:${AGENCY_INFO.email}?subject=${encodeURIComponent(
                    'Website Inquiry — Soloner Web Services'
                  )}`}
                  className="flex items-center gap-3.5 p-3 rounded-xl hover:bg-slate-50 border border-slate-100 transition-colors group"
                >
                  <div className="w-10 h-10 rounded-lg bg-indigo-50 text-indigo-600 flex items-center justify-center group-hover:bg-indigo-600 group-hover:text-white transition-colors">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="block text-[11px] font-bold text-slate-400 uppercase tracking-wider">
                      Email Inquiries
                    </span>
                    <span className="text-sm font-bold text-slate-900 group-hover:text-blue-600 truncate max-w-[240px] block">
                      {AGENCY_INFO.email}
                    </span>
                  </div>
                </a>

                {/* Location */}
                <div className="flex items-start gap-3.5 p-3 rounded-xl bg-slate-50/60 border border-slate-100">
                  <div className="w-10 h-10 rounded-lg bg-slate-100 text-slate-700 flex items-center justify-center shrink-0">
                    <MapPin className="w-5 h-5 text-slate-700" />
                  </div>
                  <div>
                    <span className="block text-[11px] font-bold text-slate-400 uppercase tracking-wider">
                      Main Office & Operations
                    </span>
                    <span className="text-xs font-semibold text-slate-800">
                      {AGENCY_INFO.address}
                    </span>
                    <span className="block text-[11px] text-slate-500 mt-0.5">
                      {AGENCY_INFO.workingHours}
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Google Maps Area */}
            <div className="bg-white rounded-3xl p-5 border border-slate-200 shadow-xs overflow-hidden">
              <div className="flex items-center justify-between mb-3 px-1">
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-rose-600" />
                  <span className="text-xs font-bold text-slate-900 uppercase tracking-wider">
                    Google Maps
                  </span>
                </div>
                <a
                  href={`https://maps.google.com/?q=${encodeURIComponent(AGENCY_INFO.address)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[11px] font-semibold text-blue-600 hover:text-blue-700 flex items-center gap-1"
                >
                  <span>Open in Google Maps</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>

              {/* Styled Interactive Map Visualizer */}
              <div className="relative h-48 rounded-2xl overflow-hidden bg-slate-100 border border-slate-200">
                {/* Map Grid Pattern & Visual Pins */}
                <div className="absolute inset-0 bg-[radial-gradient(#cbd5e1_1px,transparent_1px)] [background-size:16px_16px] bg-slate-50 opacity-90" />
                
                {/* Stylized streets map overlay */}
                <svg className="absolute inset-0 w-full h-full opacity-40" xmlns="http://www.w3.org/2000/svg">
                  <path d="M0 40 Q 150 60 300 20 T 600 80" stroke="#94a3b8" strokeWidth="6" fill="none" />
                  <path d="M120 0 L 140 200" stroke="#94a3b8" strokeWidth="5" fill="none" />
                  <path d="M280 0 L 260 200" stroke="#60a5fa" strokeWidth="7" fill="none" />
                  <path d="M0 130 L 400 150" stroke="#cbd5e1" strokeWidth="4" fill="none" />
                </svg>

                {/* Interactive Map Pin Marker */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center">
                  <div className="bg-slate-900 text-white text-[11px] font-bold py-1 px-3 rounded-lg shadow-lg flex items-center gap-1.5 whitespace-nowrap mb-1">
                    <span className="w-2 h-2 rounded-full bg-blue-400"></span>
                    <span>Soloner Web Services HQ</span>
                  </div>
                  <div className="w-8 h-8 rounded-full bg-blue-600 text-white flex items-center justify-center shadow-lg animate-bounce">
                    <MapPin className="w-4 h-4 fill-white" />
                  </div>
                  <div className="w-4 h-1.5 bg-slate-900/20 rounded-full blur-2xs mt-0.5"></div>
                </div>

                {/* Map Controls Floating Badge */}
                <div className="absolute bottom-2 left-2 bg-white/90 backdrop-blur-xs text-[10px] text-slate-700 font-medium px-2 py-1 rounded-md border border-slate-200 shadow-2xs">
                  San Francisco, CA • Worldwide Service
                </div>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

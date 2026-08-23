import React, { useState } from 'react';
import {
  ArrowRight,
  CheckCircle2,
  Sparkles,
  ExternalLink,
  Shield,
  Smartphone,
  Gauge,
  MessageSquare,
  Lock,
  Search,
} from 'lucide-react';
import { AGENCY_INFO } from '../data/agencyData';

interface HeroProps {
  onOpenQuoteModal: () => void;
  onNavigate: (sectionId: string) => void;
  onSelectProject: (projectId: string) => void;
}

export const Hero: React.FC<HeroProps> = ({
  onOpenQuoteModal,
  onNavigate,
  onSelectProject,
}) => {
  const [activeTab, setActiveTab] = useState<'preview' | 'mobile' | 'performance'>('preview');

  return (
    <section
      id="home"
      className="relative pt-28 pb-16 md:pt-36 md:pb-24 overflow-hidden bg-gradient-to-b from-slate-50/60 via-white to-white"
    >
      {/* Subtle Background Glow Elements */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[450px] bg-blue-100/40 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute top-1/3 right-10 w-[450px] h-[350px] bg-indigo-100/30 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Headline & Value Proposition */}
          <div className="lg:col-span-7 space-y-7">
            {/* Small Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-100/80 text-blue-700 text-xs font-semibold tracking-wide shadow-xs">
              <span className="flex h-2 w-2 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-600"></span>
              </span>
              <span>Professional Website Development</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl xl:text-6xl font-extrabold text-slate-900 tracking-tight leading-[1.12]">
              We Build Websites That{' '}
              <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600 bg-clip-text text-transparent">
                Grow Your Business.
              </span>
            </h1>

            {/* Description */}
            <p className="text-lg sm:text-xl text-slate-600 leading-relaxed max-w-2xl font-normal">
              Modern, responsive and professional websites designed to help businesses build trust, attract customers and grow online.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-1">
              <button
                id="hero-quote-cta"
                onClick={onOpenQuoteModal}
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-blue-600 hover:bg-blue-700 active:bg-blue-800 text-white font-semibold text-base rounded-xl shadow-md shadow-blue-600/20 hover:shadow-lg hover:shadow-blue-600/25 transition-all duration-200 group"
              >
                <span>Get a Free Quote</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>

              <button
                id="hero-view-work-cta"
                onClick={() => onNavigate('our-work')}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-white hover:bg-slate-50 active:bg-slate-100 text-slate-800 font-semibold text-base rounded-xl border border-slate-200 shadow-xs hover:border-slate-300 transition-all duration-200"
              >
                <span>View Our Work</span>
              </button>
            </div>

            {/* Business-Ready Badges below buttons */}
            <div className="pt-4 border-t border-slate-100">
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-slate-700 text-xs sm:text-sm font-medium">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0" />
                  <span>Mobile Friendly</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0" />
                  <span>Fast & Secure</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0" />
                  <span>SEO Ready</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0" />
                  <span>WhatsApp Ready</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Premium Laptop + Smartphone Mockup with subtle glow */}
          <div className="lg:col-span-5 relative">
            {/* Subtle blue/purple glow behind mockup */}
            <div className="absolute -inset-4 bg-gradient-to-r from-blue-500/15 via-indigo-500/15 to-violet-500/15 rounded-3xl blur-2xl -z-10" />

            <div className="relative">
              {/* Laptop Mockup */}
              <div className="bg-slate-900 p-2.5 sm:p-3.5 rounded-2xl shadow-2xl border border-slate-800 shadow-slate-900/20">
                {/* Browser top chrome bar */}
                <div className="flex items-center justify-between px-3 py-2 bg-slate-800 rounded-t-xl mb-1.5">
                  <div className="flex items-center gap-1.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-red-400/80 inline-block"></span>
                    <span className="w-2.5 h-2.5 rounded-full bg-amber-400/80 inline-block"></span>
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-400/80 inline-block"></span>
                  </div>
                  <div className="flex items-center gap-1.5 bg-slate-900/90 text-slate-300 text-[11px] px-3 py-1 rounded-md font-mono border border-slate-700/50 max-w-[220px] truncate">
                    <Lock className="w-3 h-3 text-emerald-400 shrink-0" />
                    <span>https://soloner.dev/client-portal</span>
                  </div>
                  <div className="flex items-center gap-2 text-slate-400 text-xs">
                    <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
                    <span className="text-[10px] text-slate-300 font-mono hidden sm:inline">200 OK</span>
                  </div>
                </div>

                {/* Laptop Screen Content - High Quality Realistic Business Site Preview */}
                <div className="relative bg-white rounded-lg overflow-hidden border border-slate-200">
                  {/* Mock Site Navbar */}
                  <div className="bg-white px-4 py-2.5 border-b border-slate-100 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="w-5 h-5 rounded-md bg-blue-600 flex items-center justify-center text-white text-[10px] font-bold">
                        A
                      </div>
                      <span className="font-bold text-xs text-slate-900">Apex Advisory</span>
                    </div>
                    <div className="hidden sm:flex items-center gap-3 text-[11px] text-slate-600 font-medium">
                      <span className="text-blue-600 font-semibold">Services</span>
                      <span>Case Studies</span>
                      <span>About</span>
                    </div>
                    <div className="bg-blue-600 text-white text-[10px] font-semibold px-2.5 py-1 rounded-md">
                      Contact Us
                    </div>
                  </div>

                  {/* Mock Hero Area inside Mockup */}
                  <div className="p-4 sm:p-5 bg-gradient-to-br from-slate-50 to-blue-50/40">
                    <div className="inline-block bg-blue-100/70 text-blue-800 text-[10px] font-semibold px-2 py-0.5 rounded-full mb-2">
                      Corporate Law Practice
                    </div>
                    <h3 className="text-sm sm:text-base font-bold text-slate-900 leading-snug">
                      Strategic Legal Counsel for Growing Enterprises.
                    </h3>
                    <p className="text-[11px] text-slate-500 mt-1 line-clamp-2">
                      Modern corporate litigation, IP protection, and compliance advising with 99.8% client retention.
                    </p>

                    <div className="flex items-center gap-2 mt-3">
                      <div className="bg-blue-600 text-white text-[10px] font-medium px-3 py-1.5 rounded-md flex items-center gap-1 shadow-xs">
                        <span>Book Consultation</span>
                        <ArrowRight className="w-2.5 h-2.5" />
                      </div>
                      <div className="bg-white border border-slate-200 text-slate-700 text-[10px] font-medium px-2.5 py-1.5 rounded-md">
                        Our Partners
                      </div>
                    </div>

                    {/* Mini stats inside mockup */}
                    <div className="grid grid-cols-3 gap-2 mt-3 pt-3 border-t border-slate-200/60">
                      <div className="bg-white p-1.5 rounded-md border border-slate-100 shadow-2xs">
                        <div className="text-[11px] font-bold text-blue-600">Fast</div>
                        <div className="text-[9px] text-slate-500">100% Mobile Ready</div>
                      </div>
                      <div className="bg-white p-1.5 rounded-md border border-slate-100 shadow-2xs">
                        <div className="text-[11px] font-bold text-slate-800">SEO</div>
                        <div className="text-[9px] text-slate-500">Rankings Optimized</div>
                      </div>
                      <div className="bg-white p-1.5 rounded-md border border-slate-100 shadow-2xs">
                        <div className="text-[11px] font-bold text-emerald-600">SSL</div>
                        <div className="text-[9px] text-slate-500">Encrypted / HTTPS</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Overlapping Smartphone Mockup */}
              <div className="absolute -bottom-6 -right-3 sm:-right-6 w-36 sm:w-44 bg-slate-900 p-2 rounded-2xl sm:rounded-3xl shadow-2xl border-2 border-slate-700/80 shadow-slate-900/40">
                {/* Phone Speaker & Notch */}
                <div className="w-12 h-1 bg-slate-700 rounded-full mx-auto mb-1.5"></div>
                
                {/* Phone Screen */}
                <div className="bg-white rounded-xl sm:rounded-2xl p-2.5 border border-slate-100 space-y-2">
                  <div className="flex items-center justify-between pb-1 border-b border-slate-100">
                    <span className="text-[9px] font-bold text-slate-900">Aura Skin</span>
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
                  </div>

                  <div className="bg-emerald-50 p-2 rounded-lg text-[9px] space-y-1">
                    <div className="font-bold text-emerald-900">E-Commerce Ready</div>
                    <div className="text-emerald-700 text-[8px]">Mobile Cart & Pay</div>
                  </div>

                  <button
                    onClick={() => onSelectProject('aura-botanicals')}
                    className="w-full bg-emerald-600 hover:bg-emerald-700 text-white text-[9px] font-semibold py-1.5 rounded-md flex items-center justify-center gap-1 shadow-xs"
                  >
                    <span>View Store</span>
                    <ExternalLink className="w-2.5 h-2.5" />
                  </button>

                  <div className="flex items-center justify-between text-[8px] text-slate-400 pt-0.5 font-mono">
                    <span>WhatsApp Connected</span>
                    <span>✓</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

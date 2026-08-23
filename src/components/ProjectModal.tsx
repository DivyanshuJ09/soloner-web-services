import React, { useState } from 'react';
import {
  X,
  Globe,
  Smartphone,
  Monitor,
  CheckCircle2,
  ExternalLink,
  ArrowRight,
  Shield,
  Layers,
  Sparkles,
} from 'lucide-react';
import { Project } from '../types';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
  onRequestSimilar: (projectName: string) => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({
  project,
  onClose,
  onRequestSimilar,
}) => {
  const [viewMode, setViewMode] = useState<'desktop' | 'mobile'>('desktop');

  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-950/70 backdrop-blur-xs flex items-center justify-center p-3 sm:p-6 animate-in fade-in duration-200">
      <div className="bg-white w-full max-w-4xl rounded-3xl shadow-2xl border border-slate-200 overflow-hidden relative max-h-[92vh] flex flex-col">
        
        {/* Header Bar */}
        <div className="bg-slate-900 text-white px-6 py-4 flex items-center justify-between border-b border-slate-800 shrink-0">
          <div className="flex items-center gap-3">
            <span className="inline-block text-xs font-semibold bg-blue-600 text-white px-2.5 py-0.5 rounded-md">
              {project.categoryLabel}
            </span>
            <h3 className="text-lg font-bold text-white truncate max-w-[280px] sm:max-w-md">
              {project.name}
            </h3>
          </div>

          <div className="flex items-center gap-3">
            {/* View Mode Toggle */}
            <div className="hidden sm:flex items-center gap-1 bg-slate-800 p-1 rounded-lg border border-slate-700">
              <button
                onClick={() => setViewMode('desktop')}
                className={`px-2.5 py-1 text-xs font-semibold rounded-md flex items-center gap-1.5 transition-colors ${
                  viewMode === 'desktop'
                    ? 'bg-blue-600 text-white'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                <Monitor className="w-3.5 h-3.5" />
                <span>Desktop</span>
              </button>
              <button
                onClick={() => setViewMode('mobile')}
                className={`px-2.5 py-1 text-xs font-semibold rounded-md flex items-center gap-1.5 transition-colors ${
                  viewMode === 'mobile'
                    ? 'bg-blue-600 text-white'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                <Smartphone className="w-3.5 h-3.5" />
                <span>Mobile</span>
              </button>
            </div>

            <button
              onClick={onClose}
              className="w-8 h-8 rounded-full bg-slate-800 hover:bg-slate-700 text-white flex items-center justify-center transition-colors"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Scrollable Content Body */}
        <div className="overflow-y-auto p-6 sm:p-8 space-y-8">
          
          {/* Visual Showcase Viewport */}
          <div className="bg-slate-900 p-3 sm:p-4 rounded-2xl border border-slate-800 shadow-inner">
            <div className="flex items-center justify-between px-3 py-1.5 bg-slate-800 rounded-t-lg mb-2">
              <div className="flex items-center gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-red-400"></span>
                <span className="w-2.5 h-2.5 rounded-full bg-amber-400"></span>
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-400"></span>
              </div>
              <span className="text-xs text-slate-300 font-mono">
                {project.liveUrlPlaceholder}
              </span>
              <span className="text-[10px] text-emerald-400 font-mono">HTTPS Verified</span>
            </div>

            {/* Render Desktop or Mobile View */}
            {viewMode === 'desktop' ? (
              <div className="rounded-xl overflow-hidden border border-slate-700 bg-white max-h-[380px] sm:max-h-[440px] overflow-y-auto">
                <img
                  src={project.heroImage}
                  alt={project.name}
                  className="w-full h-auto object-cover"
                />
              </div>
            ) : (
              <div className="flex justify-center py-4 bg-slate-950/40 rounded-xl">
                <div className="w-64 bg-slate-900 p-2 rounded-3xl border-2 border-slate-700 shadow-2xl">
                  <div className="w-12 h-1 bg-slate-700 rounded-full mx-auto mb-2"></div>
                  <div className="rounded-2xl overflow-hidden bg-white max-h-[360px] overflow-y-auto">
                    <img
                      src={project.mobileImage}
                      alt={`${project.name} mobile preview`}
                      className="w-full h-auto object-cover"
                    />
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Project Details Grid */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
            
            {/* Left: Overview & Deliverables (7 cols) */}
            <div className="md:col-span-7 space-y-6">
              <div>
                <h4 className="text-xs font-bold text-blue-600 uppercase tracking-wider mb-1">
                  Project Scope & Overview
                </h4>
                <h3 className="text-2xl font-bold text-slate-900">
                  {project.tagline}
                </h3>
                <p className="text-sm text-slate-600 mt-2.5 leading-relaxed">
                  {project.fullOverview}
                </p>
              </div>

              <div>
                <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider mb-3">
                  Key Deliverables Shipped:
                </h4>
                <div className="space-y-2">
                  {project.deliverables.map((item, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right: Technical Highlights & CTA (5 cols) */}
            <div className="md:col-span-5 space-y-6">
              <div className="bg-slate-50 p-5 rounded-2xl border border-slate-200 space-y-4">
                <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider">
                  Technology & Architecture
                </h4>
                <div className="flex flex-wrap gap-1.5">
                  {project.techStack.map((tech, idx) => (
                    <span
                      key={idx}
                      className="text-xs font-semibold bg-white text-slate-700 px-2.5 py-1 rounded-lg border border-slate-200 shadow-2xs"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="pt-3 border-t border-slate-200">
                  <h5 className="text-xs font-bold text-slate-900 mb-2">Performance Standards</h5>
                  <div className="space-y-1.5">
                    {project.features.map((feat, idx) => (
                      <div key={idx} className="text-xs text-slate-600 flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-blue-600"></span>
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Action */}
              <button
                onClick={() => {
                  onClose();
                  onRequestSimilar(project.name);
                }}
                className="w-full py-3.5 px-4 bg-blue-600 hover:bg-blue-700 active:bg-blue-800 text-white font-bold text-xs sm:text-sm rounded-xl shadow-md shadow-blue-600/20 flex items-center justify-center gap-2 transition-colors"
              >
                <span>Request Similar Website</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

          </div>

        </div>

        {/* Modal Footer */}
        <div className="bg-slate-50 px-6 py-3 border-t border-slate-200 flex items-center justify-between text-xs text-slate-500 shrink-0">
          <span>Soloner Web Services Case Study</span>
          <button onClick={onClose} className="font-semibold text-slate-700 hover:text-slate-900">
            Close
          </button>
        </div>

      </div>
    </div>
  );
};

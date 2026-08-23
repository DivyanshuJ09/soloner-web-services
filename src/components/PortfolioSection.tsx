import React, { useState } from 'react';
import { ArrowRight, ExternalLink, Globe, Smartphone, Laptop, CheckCircle2, Sparkles, Filter } from 'lucide-react';
import { PORTFOLIO_PROJECTS } from '../data/portfolioData';
import { Project, ProjectCategory } from '../types';

interface PortfolioSectionProps {
  onSelectProject: (projectId: string) => void;
  onOpenQuoteModal: (projectRef?: string) => void;
}

export const PortfolioSection: React.FC<PortfolioSectionProps> = ({
  onSelectProject,
  onOpenQuoteModal,
}) => {
  const [activeCategory, setActiveCategory] = useState<ProjectCategory>('all');

  const categories: { id: ProjectCategory; label: string }[] = [
    { id: 'all', label: 'All Projects' },
    { id: 'business', label: 'Business' },
    { id: 'ecommerce', label: 'E-commerce' },
    { id: 'education', label: 'Education' },
    { id: 'portfolio', label: 'Portfolio' },
  ];

  const filteredProjects =
    activeCategory === 'all'
      ? PORTFOLIO_PROJECTS
      : PORTFOLIO_PROJECTS.filter((p) => p.category === activeCategory);

  return (
    <section id="our-work" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-blue-50 text-blue-700 text-xs font-semibold uppercase tracking-wider mb-3">
              Portfolio Showcase
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Websites We've Shipped
            </h2>
            <p className="mt-2 text-lg text-slate-600 max-w-2xl">
              A selection of websites we've designed and developed.
            </p>
          </div>

          {/* Category Filter Tabs */}
          <div className="flex flex-wrap items-center gap-1.5 p-1.5 bg-slate-100/80 rounded-xl border border-slate-200/80 self-start md:self-auto">
            {categories.map((cat) => {
              const isSelected = activeCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  id={`filter-btn-${cat.id}`}
                  onClick={() => setActiveCategory(cat.id)}
                  className={`px-3.5 py-1.5 rounded-lg text-xs sm:text-sm font-semibold transition-all duration-200 ${
                    isSelected
                      ? 'bg-white text-blue-600 shadow-xs border border-slate-200/80'
                      : 'text-slate-600 hover:text-slate-900 hover:bg-white/50'
                  }`}
                >
                  {cat.label}
                </button>
              );
            })}
          </div>
        </div>

        {/* Portfolio Grid with Large Website Screenshots */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              id={`portfolio-card-${project.id}`}
              className="group bg-white rounded-2xl border border-slate-200/90 shadow-xs hover:shadow-xl hover:border-slate-300 transition-all duration-300 flex flex-col overflow-hidden"
            >
              {/* Browser-style Card Header & Screenshot Viewport */}
              <div className="relative bg-slate-900 pt-2 px-2 pb-0 overflow-hidden">
                {/* Browser top chrome */}
                <div className="flex items-center justify-between px-2 py-1.5 bg-slate-800 rounded-t-lg">
                  <div className="flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-red-400"></span>
                    <span className="w-2 h-2 rounded-full bg-amber-400"></span>
                    <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
                  </div>
                  <span className="text-[10px] text-slate-400 font-mono truncate max-w-[160px]">
                    {project.name.toLowerCase().replace(/[^a-z0-9]/g, '')}.soloner.dev
                  </span>
                  <div className="w-3 h-3 flex items-center justify-center">
                    <Globe className="w-2.5 h-2.5 text-slate-400" />
                  </div>
                </div>

                {/* Screenshot Image with Hover Zoom */}
                <div className="relative h-56 sm:h-60 w-full overflow-hidden bg-slate-100">
                  <img
                    src={project.heroImage}
                    alt={project.name}
                    loading="lazy"
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                  />
                  
                  {/* Category Pill Tag Overlay */}
                  <div className="absolute top-3 left-3">
                    <span className="inline-block text-[11px] font-semibold tracking-wide bg-white/95 backdrop-blur-xs text-slate-800 px-2.5 py-1 rounded-md shadow-xs border border-white/40">
                      {project.categoryLabel}
                    </span>
                  </div>

                  {/* Hover Overlay with Quick Preview Trigger */}
                  <div className="absolute inset-0 bg-slate-950/40 opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex items-center justify-center p-4">
                    <button
                      onClick={() => onSelectProject(project.id)}
                      className="inline-flex items-center gap-1.5 px-4 py-2 bg-white text-slate-900 text-xs font-bold rounded-lg shadow-lg hover:bg-blue-600 hover:text-white transition-colors"
                    >
                      <span>Explore Case Study</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                <div>
                  <div className="flex items-center justify-between gap-2 mb-1.5">
                    <h3 className="text-xl font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
                      {project.name}
                    </h3>
                  </div>

                  <p className="text-xs font-medium text-blue-700 mb-2.5">
                    {project.tagline}
                  </p>

                  <p className="text-sm text-slate-600 leading-relaxed line-clamp-2 mb-4">
                    {project.description}
                  </p>

                  {/* Highlight badges */}
                  <div className="flex flex-wrap gap-1.5 mb-2">
                    {project.techStack.slice(0, 3).map((tech, idx) => (
                      <span
                        key={idx}
                        className="text-[11px] font-medium bg-slate-100 text-slate-600 px-2 py-0.5 rounded-md"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Card Action Link */}
                <div className="pt-3 border-t border-slate-100 flex items-center justify-between">
                  <button
                    onClick={() => onSelectProject(project.id)}
                    className="inline-flex items-center gap-1.5 text-sm font-bold text-blue-600 hover:text-blue-700 group/link"
                  >
                    <span>View Project</span>
                    <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                  </button>

                  <button
                    onClick={() => onOpenQuoteModal(`Project like ${project.name}`)}
                    className="text-xs font-semibold text-slate-500 hover:text-slate-800"
                  >
                    Build Similar →
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All Projects / Custom Request CTA */}
        <div className="mt-14 p-6 sm:p-8 rounded-2xl bg-gradient-to-r from-slate-50 via-blue-50/50 to-indigo-50/40 border border-slate-200/80 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <h4 className="text-lg font-bold text-slate-900">
              Need a custom website built for your exact industry?
            </h4>
            <p className="text-sm text-slate-600 mt-1">
              Every project is crafted around your unique business objectives, branding, and workflows.
            </p>
          </div>

          <div className="flex items-center gap-3 shrink-0">
            {activeCategory !== 'all' && (
              <button
                onClick={() => setActiveCategory('all')}
                className="px-4 py-2.5 bg-white text-slate-700 hover:bg-slate-50 text-sm font-semibold rounded-xl border border-slate-200 shadow-2xs"
              >
                View All Projects
              </button>
            )}
            <button
              onClick={() => onOpenQuoteModal()}
              className="px-5 py-2.5 bg-blue-600 hover:bg-blue-700 text-white text-sm font-semibold rounded-xl shadow-xs shadow-blue-600/20"
            >
              Start Your Project →
            </button>
          </div>
        </div>

      </div>
    </section>
  );
};

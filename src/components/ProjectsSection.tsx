'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Project } from '@/types';
import { Trophy, ExternalLink, ArrowRight, Layers, CheckCircle2 } from 'lucide-react';
import { GitHubIcon } from '@/components/Icons';
import { useLanguage } from '@/context/LanguageContext';

interface ProjectsSectionProps {
  projects: Project[];
  isStandalonePage?: boolean;
}

export default function ProjectsSection({ projects, isStandalonePage = false }: ProjectsSectionProps) {
  const [filter, setFilter] = useState<string>('all');
  const { t } = useLanguage();

  const categories = [
    { id: 'all', label: t.projects.all },
    { id: 'robotics', label: t.projects.robotics },
    { id: 'social', label: t.projects.social },
    { id: 'ecommerce', label: t.projects.ecommerce },
    { id: 'agtech', label: t.projects.agtech },
  ];

  const filteredProjects = projects.filter((project) => {
    if (filter === 'all') return true;
    if (filter === 'robotics') return project.category.includes('Robotexnika') || project.title.includes('VEX') || project.tagline.includes('Robotexnika');
    if (filter === 'social') return project.category.includes('Sosial') || project.title.includes('Bondify');
    if (filter === 'ecommerce') return project.category.includes('E-ticarət') || project.title.includes('Mağaza');
    if (filter === 'agtech') return project.category.includes('Aqrotex') || project.title.includes('TransportTech') || project.title.includes('Fermerim');
    return true;
  });

  return (
    <section id="layiheler" aria-label="Projects Section" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/25 text-amber-400 text-xs font-semibold uppercase tracking-wider mb-3">
              <Layers className="w-3.5 h-3.5" />
              {t.projects.badge}
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
              {t.projects.title}
            </h2>
            <p className="mt-2 text-slate-400 max-w-2xl text-sm sm:text-base">
              {t.projects.subtitle}
            </p>
          </div>

          {/* Category Filter Pills */}
          <div className="mt-6 md:mt-0 flex flex-wrap items-center gap-2">
            {categories.map((c) => (
              <button
                key={c.id}
                onClick={() => setFilter(c.id)}
                className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold transition ${
                  filter === c.id
                    ? 'bg-amber-500 text-black shadow-lg shadow-amber-500/20'
                    : 'bg-[#0f121e] border border-amber-500/15 text-slate-300 hover:border-amber-400/40'
                }`}
              >
                {c.label}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="card-luxury overflow-hidden flex flex-col justify-between group hover:border-amber-400/50 transition-all duration-300"
            >
              <div>
                {/* Project Image banner */}
                <div className="relative h-56 sm:h-64 w-full bg-[#0a0d17] overflow-hidden">
                  <Image
                    src={project.imageUrl || '/images/hero-bg.jpg'}
                    alt={project.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#090b14] via-[#090b14]/40 to-transparent" />

                  {/* Category badge */}
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 rounded-full text-xs font-bold bg-[#090b14]/90 border border-amber-500/30 text-amber-300 backdrop-blur-md">
                      {project.category}
                    </span>
                  </div>

                  {project.achievements && (
                    <div className="absolute top-4 right-4">
                      <span className="flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-amber-500/90 text-black shadow-lg">
                        <Trophy className="w-3.5 h-3.5 text-black" />
                        <span>{project.achievements}</span>
                      </span>
                    </div>
                  )}
                </div>

                {/* Content */}
                <div className="p-6 sm:p-7 space-y-4">
                  <div>
                    <h3 className="text-2xl font-bold text-white group-hover:text-amber-300 transition">
                      {project.title}
                    </h3>
                    <p className="text-sm text-amber-400/90 font-medium mt-1">
                      {project.tagline}
                    </p>
                  </div>

                  <p className="text-slate-300 text-sm leading-relaxed line-clamp-3">
                    {project.description}
                  </p>

                  {/* Highlights / Metrics */}
                  {project.metrics && project.metrics.length > 0 && (
                    <div className="grid grid-cols-2 gap-3 py-3 border-y border-slate-800">
                      {project.metrics.map((m, idx) => (
                        <div key={idx} className="bg-[#0b0e1b] p-2.5 rounded-lg border border-amber-500/10">
                          <span className="text-[10px] uppercase font-bold text-slate-400 block tracking-wider">
                            {m.label}
                          </span>
                          <span className="text-sm font-bold text-amber-400">
                            {m.value}
                          </span>
                        </div>
                      ))}
                    </div>
                  )}

                  {/* Tech stack */}
                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {project.techStack.map((tech) => (
                      <span
                        key={tech}
                        className="text-xs px-2.5 py-1 rounded-md bg-[#0e111d] border border-slate-800 text-slate-300 font-mono"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Action link */}
              <div className="p-6 sm:p-7 pt-0 flex items-center justify-between">
                <Link
                  href={`/projects/${project.id}`}
                  prefetch={true}
                  className="inline-flex items-center gap-2 text-sm font-bold text-amber-400 hover:text-amber-300 transition group/link"
                >
                  <span>{t.projects.viewDetails}</span>
                  <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition" />
                </Link>

                <div className="flex items-center gap-2">
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-lg bg-[#0e111d] text-slate-400 hover:text-white border border-slate-800 transition"
                      aria-label="GitHub Repository"
                    >
                      <GitHubIcon className="w-4 h-4" />
                    </a>
                  )}
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-lg bg-[#0e111d] text-slate-400 hover:text-amber-400 border border-slate-800 transition"
                      aria-label="Live Demo"
                    >
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

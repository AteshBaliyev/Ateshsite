'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Project } from '@/types';
import { Trophy, ExternalLink, ArrowRight, Layers, CheckCircle2 } from 'lucide-react';
import { GitHubIcon } from '@/components/Icons';

interface ProjectsSectionProps {
  projects: Project[];
  isStandalonePage?: boolean;
}

export default function ProjectsSection({ projects, isStandalonePage = false }: ProjectsSectionProps) {
  const [filter, setFilter] = useState<string>('all');

  const categories = [
    { id: 'all', label: 'Bütün Layihələr' },
    { id: 'robotics', label: 'Robotexnika' },
    { id: 'social', label: 'Sosial & TMA' },
    { id: 'ecommerce', label: 'E-ticarət' },
    { id: 'agtech', label: 'Aqrotex & Hakaton' },
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
    <section id="layiheler" aria-label="Layihələr və Nailiyyətlər" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/25 text-amber-400 text-xs font-semibold uppercase tracking-wider mb-3">
              <Layers className="w-3.5 h-3.5" />
              İnnovasiya Portfeli
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
              Layihələr və <span className="gold-gradient-text">Uğurlar</span>
            </h2>
            <p className="mt-2 text-slate-400 max-w-2xl text-sm sm:text-base">
              Robotexnika çempionatları, rəqəmsal sosial platformalar, e-ticarət vitrinləri və kənd təsərrüfatı innovasiyaları.
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
          {filteredProjects.map((project) => {
            const isAward = project.achievements || project.category.includes('Hakaton') || project.tagline.includes('Medal');

            return (
              <article
                key={project.id}
                className="card-luxury overflow-hidden flex flex-col justify-between group"
              >
                <div>
                  {/* Image Container with Badges */}
                  <Link
                    href={`/projects/${project.id}`}
                    prefetch={true}
                    className="block relative aspect-video w-full overflow-hidden bg-slate-900 cursor-pointer"
                  >
                    <Image
                      src={project.imageUrl}
                      alt={`${project.title} - ${project.tagline} Atəş Balıyev portfolio layihəsi`}
                      fill
                      sizes="(max-width: 768px) 100vw, 50vw"
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                      unoptimized
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0c0e18] via-transparent to-transparent opacity-80" />

                    {/* Category or Hackathon Badge */}
                    <div className="absolute top-3 left-3 flex flex-wrap gap-2">
                      {isAward ? (
                        <span className="flex items-center gap-1.5 text-xs font-bold px-3 py-1 rounded-full bg-gradient-to-r from-amber-500 to-yellow-600 text-black shadow-lg">
                          <Trophy className="w-3.5 h-3.5" />
                          {project.tagline.includes('Medal') ? 'Qızıl Medal' : 'Qalibiyyət'}
                        </span>
                      ) : (
                        <span className="text-xs font-medium px-3 py-1 rounded-full bg-black/75 border border-amber-500/30 text-amber-300 backdrop-blur-sm">
                          {project.category}
                        </span>
                      )}
                    </div>
                  </Link>

                  {/* Body Content */}
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-white group-hover:text-amber-400 transition flex items-center justify-between">
                      <Link href={`/projects/${project.id}`} prefetch={true} className="hover:text-amber-400 transition">
                        {project.title}
                      </Link>
                      {project.liveUrl && (
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={`${project.title} canlı layihəsinə keçid`}
                          className="text-slate-400 hover:text-amber-400 transition"
                        >
                          <ExternalLink className="w-4 h-4" />
                        </a>
                      )}
                    </h3>

                    <p className="mt-1 text-xs text-amber-400/90 font-medium">
                      {project.tagline}
                    </p>

                    <p className="mt-3 text-sm text-slate-300 leading-relaxed line-clamp-3">
                      {project.description}
                    </p>

                    {/* Achievement / Highlight */}
                    {project.achievements && (
                      <div className="mt-4 p-2.5 rounded-lg bg-amber-500/10 border border-amber-500/20 flex items-center gap-2 text-xs text-amber-300 font-medium">
                        <CheckCircle2 className="w-4 h-4 shrink-0 text-amber-400" />
                        <span>{project.achievements}</span>
                      </div>
                    )}

                    {/* Metrics preview */}
                    {project.metrics && project.metrics.length > 0 && (
                      <div className="mt-4 grid grid-cols-3 gap-2 py-2 border-t border-b border-slate-800 text-center">
                        {project.metrics.map((m, idx) => (
                          <div key={idx} className="flex flex-col">
                            <span className="text-xs font-bold text-white">{m.value}</span>
                            <span className="text-[10px] text-slate-400">{m.label}</span>
                          </div>
                        ))}
                      </div>
                    )}

                    {/* Tech Stack Pills */}
                    <div className="mt-4 flex flex-wrap gap-1.5">
                      {project.techStack.map((tech, i) => (
                        <span
                          key={i}
                          className="text-[11px] px-2.5 py-0.5 rounded bg-[#151928] border border-slate-700/60 text-slate-300"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Card Footer Actions */}
                <div className="p-6 pt-0 flex items-center justify-between border-t border-slate-800/60 mt-4">
                  <Link
                    href={`/projects/${project.id}`}
                    prefetch={true}
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-amber-400 hover:text-amber-300 transition"
                  >
                    <span>Detallı Məlumata Bax (/projects/{project.id})</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>

                  <div className="flex items-center gap-2">
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-1.5 rounded-lg text-slate-400 hover:text-amber-400 hover:bg-amber-500/10 transition"
                        title="Canlı Link"
                      >
                        <ExternalLink className="w-4 h-4" />
                      </a>
                    )}
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

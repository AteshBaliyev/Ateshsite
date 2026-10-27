import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { Metadata } from 'next';
import { getProjectById, getAllProjects } from '@/lib/db';
import { generateProjectJsonLd, SITE_CONFIG } from '@/lib/seo';
import JsonLd from '@/components/JsonLd';
import {
  ArrowLeft,
  ExternalLink,
  Trophy,
  CheckCircle2,
  Layers,
  Sparkles,
  MessageSquare,
  Send,
  Calendar
} from 'lucide-react';
import { InstagramIcon, GitHubIcon } from '@/components/Icons';

interface ProjectPageProps {
  params: Promise<{ id: string }>;
}

export async function generateMetadata({ params }: ProjectPageProps): Promise<Metadata> {
  const { id } = await params;
  const project = await getProjectById(id);

  if (!project) {
    return {
      title: 'Layihə Tapılmadı',
    };
  }

  return {
    title: `${project.title} | Atəş Balıyev`,
    description: project.description,
    openGraph: {
      title: `${project.title} | ${project.tagline}`,
      description: project.description,
      images: [{ url: project.imageUrl }],
      url: `${SITE_CONFIG.url}/projects/${project.id}`,
    },
    twitter: {
      card: 'summary_large_image',
      title: project.title,
      description: project.description,
      images: [project.imageUrl],
    },
  };
}

export async function generateStaticParams() {
  const projects = await getAllProjects();
  // Support both ID (e.g. '1', '2') and slug (e.g. 'saf-2025-vex-v5-robotexnika')
  const ids = projects.map((p) => ({ id: p.id }));
  const slugs = projects.map((p) => ({ id: p.slug }));
  return [...ids, ...slugs];
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { id } = await params;
  const project = await getProjectById(id);

  if (!project) {
    notFound();
  }

  const projectJsonLd = generateProjectJsonLd(project);
  const isAward = project.achievements || project.category.includes('Hakaton') || project.category.includes('Çempionatı');

  return (
    <>
      <JsonLd data={projectJsonLd} />

      <article className="py-12 sm:py-20 relative">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb & Navigation */}
          <nav aria-label="Breadcrumb" className="mb-8 flex items-center justify-between">
            <Link
              href="/#layiheler"
              className="inline-flex items-center gap-2 text-xs font-semibold text-amber-400 hover:text-amber-300 transition"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Bütün Layihələrə Qayıt</span>
            </Link>

            <span className="text-xs text-slate-500 font-mono">
              /projects/{project.id}
            </span>
          </nav>

          {/* Header */}
          <header className="space-y-4 mb-8">
            <div className="flex flex-wrap items-center gap-2">
              <span className="badge-gold text-xs px-3.5 py-1 rounded-full font-bold">
                {project.category}
              </span>
              {isAward && (
                <span className="flex items-center gap-1.5 text-xs font-bold px-3 py-1 rounded-full bg-gradient-to-r from-amber-500 to-yellow-600 text-black shadow-md">
                  <Trophy className="w-3.5 h-3.5" />
                  Qalibiyyət & Mükafat
                </span>
              )}
            </div>

            <h1 className="text-3xl sm:text-5xl font-black text-white leading-tight">
              {project.title}
            </h1>

            <p className="text-lg sm:text-xl text-amber-300/90 font-medium leading-relaxed">
              {project.tagline}
            </p>
          </header>

          {/* Project Featured Image */}
          <figure className="relative aspect-video w-full rounded-2xl overflow-hidden border border-amber-500/25 mb-10 shadow-2xl bg-slate-900">
            <Image
              src={project.imageUrl}
              alt={`${project.title} - ${project.tagline} Atəş Balıyev`}
              fill
              priority
              sizes="(max-width: 1200px) 100vw, 1200px"
              className="object-cover"
              unoptimized
            />
            <figcaption className="sr-only">
              {project.title} - {project.tagline}
            </figcaption>
          </figure>

          {/* Quick Action Bar */}
          <div className="flex flex-wrap items-center justify-between gap-4 p-5 rounded-2xl bg-[#0e111d] border border-amber-500/20 mb-12">
            <div className="flex flex-wrap items-center gap-3">
              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="gold-button px-5 py-2.5 rounded-xl text-xs font-bold flex items-center gap-2"
                >
                  <span>Canlı Platforma / Əlaqəli Link</span>
                  <ExternalLink className="w-4 h-4" />
                </a>
              )}

              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 py-2.5 rounded-xl text-xs font-bold bg-[#141829] text-white border border-slate-700 hover:border-amber-400/50 transition flex items-center gap-2"
                >
                  <Send className="w-4 h-4 text-sky-400" />
                  <span>Telegram Bot / Kod</span>
                </a>
              )}
            </div>

            <div className="flex items-center gap-3 text-xs text-slate-400">
              <span className="flex items-center gap-1.5">
                <Calendar className="w-4 h-4 text-amber-400" />
                <span>Tarix: {new Date(project.createdAt).toLocaleDateString('az-AZ')}</span>
              </span>
            </div>
          </div>

          {/* Metrics section */}
          {project.metrics && project.metrics.length > 0 && (
            <section aria-label="Layihə Göstəriciləri" className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-12">
              {project.metrics.map((m, idx) => (
                <div key={idx} className="card-luxury p-5 text-center">
                  <div className="text-2xl font-black text-amber-400">{m.value}</div>
                  <div className="text-xs text-slate-300 mt-1 font-medium">{m.label}</div>
                </div>
              ))}
            </section>
          )}

          {/* Detailed Content Breakdown */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
            {/* Main Content Body */}
            <section className="lg:col-span-8 space-y-6">
              <h2 className="text-2xl font-bold text-white flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-amber-400" />
                Layihə Haqqında Detallı Məlumat
              </h2>

              <div className="prose prose-invert max-w-none text-slate-300 leading-relaxed space-y-4 text-base">
                <p className="whitespace-pre-line leading-relaxed">
                  {project.fullDetails}
                </p>
              </div>

              {project.achievements && (
                <div className="mt-8 p-5 rounded-2xl bg-amber-500/10 border border-amber-500/30 flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
                  <div>
                    <h3 className="text-sm font-bold text-amber-300">Xüsusi Nailiyyət</h3>
                    <p className="text-xs text-slate-300 mt-1">{project.achievements}</p>
                  </div>
                </div>
              )}
            </section>

            {/* Sidebar */}
            <aside className="lg:col-span-4 space-y-6">
              {/* Tech Stack */}
              <div className="card-luxury p-6">
                <h3 className="text-sm font-bold text-white mb-3 flex items-center gap-2">
                  <Layers className="w-4 h-4 text-amber-400" />
                  İstifadə Olunan Texnologiyalar
                </h3>
                <div className="flex flex-wrap gap-2">
                  {project.techStack.map((tech, i) => (
                    <span
                      key={i}
                      className="text-xs px-2.5 py-1 rounded-lg bg-[#141828] border border-amber-500/20 text-slate-200"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Creator Box */}
              <div className="card-luxury p-6 space-y-4">
                <div className="flex items-center gap-3">
                  <div className="relative w-12 h-12 rounded-xl overflow-hidden border border-amber-500/40 shrink-0 shadow-[0_0_12px_rgba(212,175,55,0.3)] bg-slate-950">
                    <Image
                      src="/images/atesh-baliyev.png"
                      alt="Atəş Balıyev - AI Developer və Layihə Müəllifi"
                      fill
                      sizes="48px"
                      className="object-cover object-top"
                    />
                  </div>
                  <div>
                    <h4 className="font-bold text-white text-sm">Atəş Balıyev</h4>
                    <p className="text-xs text-amber-400">Layihə Müəllifi & AI Developer</p>
                  </div>
                </div>

                <p className="text-xs text-slate-400 leading-relaxed">
                  İKT tələbəsi, Prime Media Group rəhbəri və süni intellekt alətləri ilə sistemlər quran proqramçı.
                </p>

                <div className="pt-2 border-t border-slate-800 flex flex-col gap-2">
                  <a
                    href="https://wa.me/994556422545"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 py-2 rounded-lg bg-emerald-950/40 border border-emerald-500/30 text-emerald-400 text-xs font-semibold hover:bg-emerald-900/40 transition"
                  >
                    <MessageSquare className="w-3.5 h-3.5" />
                    WhatsApp ilə Əlaqə
                  </a>

                  <a
                    href="https://t.me/Baliyews"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 py-2 rounded-lg bg-sky-950/40 border border-sky-500/30 text-sky-400 text-xs font-semibold hover:bg-sky-900/40 transition"
                  >
                    <Send className="w-3.5 h-3.5" />
                    Telegram: @Baliyews
                  </a>

                  <a
                    href="https://instagram.com/atesh_baliyev?igsh=MXNseDRyeGNwZzZpNw=="
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 py-2 rounded-lg bg-pink-950/40 border border-pink-500/30 text-pink-400 text-xs font-semibold hover:bg-pink-900/40 transition"
                  >
                    <InstagramIcon className="w-3.5 h-3.5" />
                    Instagram: @atesh_baliyev
                  </a>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </article>
    </>
  );
}

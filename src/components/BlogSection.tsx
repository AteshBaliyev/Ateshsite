import Image from 'next/image';
import Link from 'next/link';
import { Post } from '@/types';
import { BookOpen, Clock, Calendar, ArrowRight, Sparkles, Tag } from 'lucide-react';

interface BlogSectionProps {
  posts: Post[];
  isStandalonePage?: boolean;
}

export default function BlogSection({ posts, isStandalonePage = false }: BlogSectionProps) {
  return (
    <section id="bloq" aria-label="Bloq və Texnoloji Məqalələr" className="py-20 relative bg-[#080a11] border-t border-b border-amber-500/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/25 text-amber-400 text-xs font-semibold uppercase tracking-wider mb-3">
              <BookOpen className="w-3.5 h-3.5" />
              Bilik Bazasının İdarəedilməsi
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
              Bloq & <span className="gold-gradient-text">Texnoloji Məqalələr</span>
            </h2>
            <p className="mt-2 text-slate-400 max-w-2xl text-sm sm:text-base">
              Süni intellekt, sistem düşüncəsi, n8n avtomatlaşdırması və AI SEO haqqında dərinləşdirilmiş mühəndislik qeydləri.
            </p>
          </div>

          {!isStandalonePage && (
            <Link
              href="/bloq"
              className="mt-4 md:mt-0 inline-flex items-center gap-1.5 text-xs font-semibold text-amber-400 hover:text-amber-300 transition"
            >
              <span>Bütün Məqalələrə Bax</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          )}
        </div>

        {/* Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {posts.map((post) => (
            <article
              key={post.id}
              className="card-luxury overflow-hidden flex flex-col sm:flex-row group"
            >
              {/* Image side */}
              <div className="relative aspect-video sm:aspect-square sm:w-5/12 overflow-hidden bg-slate-900 shrink-0">
                <Image
                  src={post.coverImage}
                  alt={`${post.title} - Atəş Balıyev bloq məqaləsi`}
                  fill
                  sizes="(max-width: 768px) 100vw, 30vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  unoptimized
                />
                <div className="absolute top-3 left-3">
                  <span className="badge-gold text-[10px] font-bold px-2.5 py-0.5 rounded-full">
                    {post.category}
                  </span>
                </div>
              </div>

              {/* Text content side */}
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-3 text-[11px] text-slate-400 mb-2">
                    <span className="flex items-center gap-1">
                      <Clock className="w-3 h-3 text-amber-400" />
                      {post.readTime}
                    </span>
                    <span>•</span>
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3 h-3" />
                      {new Date(post.createdAt).toLocaleDateString('az-AZ', {
                        year: 'numeric',
                        month: 'short',
                        day: 'numeric',
                      })}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-white group-hover:text-amber-400 transition leading-snug line-clamp-2">
                    <Link href={`/bloq/${post.slug}`}>
                      {post.title}
                    </Link>
                  </h3>

                  <p className="mt-2.5 text-xs sm:text-sm text-slate-300 line-clamp-3 leading-relaxed">
                    {post.excerpt}
                  </p>
                </div>

                <div className="mt-5 pt-4 border-t border-slate-800/80 flex items-center justify-between">
                  <div className="flex flex-wrap gap-1.5">
                    {post.tags.slice(0, 2).map((tag, i) => (
                      <span
                        key={i}
                        className="text-[10px] px-2 py-0.5 rounded bg-slate-800/70 text-slate-300"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>

                  <Link
                    href={`/bloq/${post.slug}`}
                    className="inline-flex items-center gap-1 text-xs font-semibold text-amber-400 hover:text-amber-300 transition"
                  >
                    <span>Oxu</span>
                    <ArrowRight className="w-3 h-3" />
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

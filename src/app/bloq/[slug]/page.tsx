import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { Metadata } from 'next';
import { getPostBySlug, getAllPosts } from '@/lib/db';
import { generateArticleJsonLd, SITE_CONFIG } from '@/lib/seo';
import JsonLd from '@/components/JsonLd';
import {
  ArrowLeft,
  Clock,
  Calendar,
  Share2,
  MessageSquare,
  Send,
  Sparkles,
  BookOpen,
  Tag
} from 'lucide-react';

interface BlogPostPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = await getPostBySlug(slug);

  if (!post) {
    return {
      title: 'Məqalə Tapılmadı',
    };
  }

  return {
    title: `${post.title} | Atəş Balıyev Bloq`,
    description: post.excerpt,
    keywords: post.tags,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      images: [{ url: post.coverImage }],
      type: 'article',
      publishedTime: post.createdAt,
      modifiedTime: post.updatedAt,
      authors: [SITE_CONFIG.author],
      url: `${SITE_CONFIG.url}/bloq/${post.slug}`,
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: post.excerpt,
      images: [post.coverImage],
    },
  };
}

export async function generateStaticParams() {
  const posts = await getAllPosts();
  return posts.map((p) => ({ slug: p.slug }));
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = await getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  const articleJsonLd = generateArticleJsonLd(post);
  const articleUrl = `${SITE_CONFIG.url}/bloq/${post.slug}`;
  const encodedTitle = encodeURIComponent(`${post.title} - Atəş Balıyev`);
  const encodedUrl = encodeURIComponent(articleUrl);

  return (
    <>
      <JsonLd data={articleJsonLd} />

      <article className="py-12 sm:py-20 relative">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb & Back */}
          <nav aria-label="Breadcrumb" className="mb-8">
            <Link
              href="/bloq"
              className="inline-flex items-center gap-2 text-xs font-semibold text-amber-400 hover:text-amber-300 transition"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Bütün Məqalələrə Qayıt</span>
            </Link>
          </nav>

          {/* Header */}
          <header className="space-y-4 mb-8">
            <div className="flex flex-wrap items-center gap-3 text-xs text-slate-400">
              <span className="badge-gold text-xs px-3 py-1 rounded-full font-bold">
                {post.category}
              </span>
              <span className="flex items-center gap-1">
                <Clock className="w-3.5 h-3.5 text-amber-400" />
                {post.readTime}
              </span>
              <span>•</span>
              <span className="flex items-center gap-1">
                <Calendar className="w-3.5 h-3.5" />
                {new Date(post.createdAt).toLocaleDateString('az-AZ', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric',
                })}
              </span>
            </div>

            <h1 className="text-3xl sm:text-5xl font-black text-white leading-[1.2]">
              {post.title}
            </h1>

            <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-normal">
              {post.excerpt}
            </p>
          </header>

          {/* Featured Image */}
          <figure className="relative aspect-video w-full rounded-2xl overflow-hidden border border-amber-500/25 mb-10 shadow-2xl bg-slate-900">
            <Image
              src={post.coverImage}
              alt={`${post.title} məqaləsinin illüstrasiyası Atəş Balıyev`}
              fill
              priority
              sizes="(max-width: 1000px) 100vw, 1000px"
              className="object-cover"
              unoptimized
            />
            <figcaption className="sr-only">
              {post.title}
            </figcaption>
          </figure>

          {/* Share & Quick CTAs Bar */}
          <div className="flex items-center justify-between p-4 rounded-xl bg-[#0e111d] border border-amber-500/20 mb-10">
            <div className="flex items-center gap-2 text-xs text-slate-300 font-semibold">
              <Share2 className="w-4 h-4 text-amber-400" />
              <span>Məqaləni Paylaş:</span>
            </div>

            <div className="flex items-center gap-2">
              <a
                href={`https://api.whatsapp.com/send?text=${encodedTitle}%20${encodedUrl}`}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp-da paylaş"
                className="px-3 py-1.5 rounded-lg bg-emerald-950/40 border border-emerald-500/30 text-emerald-400 text-xs font-semibold hover:bg-emerald-900/40 transition flex items-center gap-1.5"
              >
                <MessageSquare className="w-3.5 h-3.5" />
                <span>WhatsApp</span>
              </a>

              <a
                href={`https://t.me/share/url?url=${encodedUrl}&text=${encodedTitle}`}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Telegram-da paylaş"
                className="px-3 py-1.5 rounded-lg bg-sky-950/40 border border-sky-500/30 text-sky-400 text-xs font-semibold hover:bg-sky-900/40 transition flex items-center gap-1.5"
              >
                <Send className="w-3.5 h-3.5" />
                <span>Telegram</span>
              </a>
            </div>
          </div>

          {/* Post Content Body */}
          <div className="prose prose-invert max-w-none text-slate-200 leading-relaxed text-base sm:text-lg space-y-6">
            <div className="whitespace-pre-line leading-relaxed">
              {post.content}
            </div>
          </div>

          {/* Tags */}
          <div className="mt-12 pt-6 border-t border-slate-800 flex flex-wrap items-center gap-2">
            <span className="text-xs text-slate-400 font-semibold mr-2 flex items-center gap-1">
              <Tag className="w-3.5 h-3.5 text-amber-400" />
              Etiketlər:
            </span>
            {post.tags.map((tag, i) => (
              <span
                key={i}
                className="text-xs px-3 py-1 rounded-lg bg-[#111422] border border-amber-500/20 text-slate-300"
              >
                #{tag}
              </span>
            ))}
          </div>

          {/* Author Card Box */}
          <aside className="mt-12 p-8 rounded-2xl bg-gradient-to-tr from-[#0d0f1a] to-[#121626] border border-amber-500/25 shadow-xl flex flex-col sm:flex-row items-center sm:items-start gap-6">
            <div className="relative w-20 h-20 rounded-2xl overflow-hidden border-2 border-amber-500/40 shrink-0 shadow-[0_0_20px_rgba(212,175,55,0.3)] bg-slate-950">
              <Image
                src="/images/atesh-baliyev.png"
                alt="Atəş Balıyev - AI Developer və Prime Media Group Rəhbəri"
                fill
                sizes="80px"
                className="object-cover object-top"
              />
            </div>

            <div className="space-y-3 text-center sm:text-left flex-1">
              <div>
                <h3 className="text-xl font-bold text-white flex items-center justify-center sm:justify-start gap-2">
                  Atəş Balıyev
                  <Sparkles className="w-4 h-4 text-amber-400" />
                </h3>
                <p className="text-xs text-amber-400 font-semibold uppercase tracking-wider">
                  AI Developer & Prime Media Group Rəhbəri
                </p>
              </div>

              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                İKT tələbəsi, süni intellekt sistemləri mühəndisi və rəqəmsal media qurucusu. AzMoney və The Systemic Mind YouTube platformalarının təsisçisidir.
              </p>

              <div className="pt-2 flex flex-wrap items-center justify-center sm:justify-start gap-3">
                <a
                  href="https://wa.me/994556422545"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 rounded-xl text-xs font-semibold bg-emerald-600 hover:bg-emerald-500 text-white transition flex items-center gap-1.5"
                >
                  <MessageSquare className="w-3.5 h-3.5" />
                  WhatsApp
                </a>

                <a
                  href="https://t.me/Baliyews"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 rounded-xl text-xs font-semibold bg-sky-600 hover:bg-sky-500 text-white transition flex items-center gap-1.5"
                >
                  <Send className="w-3.5 h-3.5" />
                  Telegram: @Baliyews
                </a>
              </div>
            </div>
          </aside>
        </div>
      </article>
    </>
  );
}

'use client';

import { useState } from 'react';
import Image from 'next/image';
import { YouTubeVideo } from '@/types';
import { Play, ExternalLink, X, Eye, Calendar, Sparkles } from 'lucide-react';
import { YouTubeIcon } from '@/components/Icons';

interface YouTubeSectionProps {
  videos: YouTubeVideo[];
}

export default function YouTubeSection({ videos }: YouTubeSectionProps) {
  const [selectedChannel, setSelectedChannel] = useState<string>('All');
  const [activeVideo, setActiveVideo] = useState<YouTubeVideo | null>(null);

  const filteredVideos = selectedChannel === 'All'
    ? videos
    : videos.filter((v) => v.channelName === selectedChannel);

  return (
    <section id="youtube" aria-label="Videolarım və YouTube Kanalları" className="py-20 relative bg-[#090b14] border-t border-b border-amber-500/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-red-500/10 border border-red-500/25 text-red-400 text-xs font-semibold uppercase tracking-wider mb-3">
              <YouTubeIcon className="w-3.5 h-3.5" />
              YouTube Video İnteqrasiyası
            </div>
            <h2 className="text-3xl sm:text-5xl font-black text-white">
              Videolarım
            </h2>
            <p className="mt-2 text-slate-400 max-w-2xl text-sm sm:text-base">
              Rəsmi <strong className="text-amber-300">@thebaliyev</strong> YouTube kanalımdan robotexnika, süni intellekt, mürəkkəb sistemlər və rəqəmsal satış haqqında videolar.
            </p>
          </div>

          {/* Channel Selector Filter Tabs */}
          <div className="mt-6 md:mt-0 flex flex-wrap items-center gap-2 p-1.5 rounded-xl bg-[#0e101a] border border-amber-500/20">
            <button
              onClick={() => setSelectedChannel('All')}
              className={`px-4 py-2 rounded-lg text-xs font-semibold transition ${
                selectedChannel === 'All'
                  ? 'bg-amber-500 text-black shadow-lg shadow-amber-500/20'
                  : 'text-slate-400 hover:text-white hover:bg-slate-800/50'
              }`}
            >
              Bütün Videolar
            </button>
            <button
              onClick={() => setSelectedChannel('@thebaliyev')}
              className={`px-4 py-2 rounded-lg text-xs font-semibold transition ${
                selectedChannel === '@thebaliyev'
                  ? 'bg-amber-500 text-black shadow-lg shadow-amber-500/20'
                  : 'text-slate-400 hover:text-white hover:bg-slate-800/50'
              }`}
            >
              @thebaliyev (Rəsmi)
            </button>
          </div>
        </div>

        {/* Channel Banner Box */}
        <div className="p-6 rounded-2xl bg-gradient-to-r from-[#170a0e] via-[#100d18] to-[#0c0e18] border border-red-500/30 flex flex-col sm:flex-row items-center justify-between gap-4 mb-10 shadow-xl">
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 rounded-2xl bg-red-600 text-white flex items-center justify-center shadow-lg shadow-red-600/30 shrink-0">
              <YouTubeIcon className="w-8 h-8" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h3 className="font-bold text-white text-lg">Atəş Balıyev (@thebaliyev)</h3>
                <span className="text-[10px] bg-red-500/20 text-red-300 border border-red-500/30 px-2 py-0.5 rounded-full font-bold">Rəsmi Kanal</span>
              </div>
              <p className="text-xs text-slate-300 mt-1">
                Süni intellekt, SAF 2025 Robotexnika çempionluğu, sistem düşüncəsi və e-ticarət analizləri.
              </p>
            </div>
          </div>
          <a
            href="https://youtube.com/@thebaliyev?si=qSM7KyDCpWuq_xsb"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Atəş Balıyev YouTube kanalına abunə olun"
            className="px-5 py-2.5 rounded-xl bg-red-600 text-white font-bold text-xs hover:bg-red-500 transition shadow-lg shadow-red-600/20 flex items-center gap-2 shrink-0"
          >
            <YouTubeIcon className="w-4 h-4" />
            <span>Kanalı Ziyarət Et</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>

        {/* Video Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredVideos.map((video) => (
            <article
              key={video.id}
              className="card-luxury overflow-hidden flex flex-col group cursor-pointer"
              onClick={() => setActiveVideo(video)}
            >
              {/* Thumbnail Container */}
              <div className="relative aspect-video w-full overflow-hidden bg-slate-900">
                <Image
                  src={video.thumbnailUrl}
                  alt={`${video.title} - ${video.channelName} kanalı Atəş Balıyev`}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  unoptimized
                />
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-all flex items-center justify-center">
                  <div className="w-12 h-12 rounded-full bg-red-600/90 text-white flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:bg-red-600 transition duration-300">
                    <Play className="w-5 h-5 fill-white translate-x-0.5" />
                  </div>
                </div>

                {/* Channel badge overlay */}
                <div className="absolute bottom-2 left-2">
                  <span className="text-[10px] font-bold px-2 py-0.5 rounded shadow bg-red-600 text-white">
                    {video.channelName}
                  </span>
                </div>
              </div>

              {/* Video Info */}
              <div className="p-4 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="font-bold text-white text-sm line-clamp-2 group-hover:text-amber-400 transition">
                    {video.title}
                  </h3>
                  <p className="mt-2 text-xs text-slate-400 line-clamp-2">
                    {video.description}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-slate-800 flex items-center justify-between text-[11px] text-slate-400">
                  <span className="flex items-center gap-1">
                    <Eye className="w-3.5 h-3.5 text-amber-400" />
                    {video.viewsDisplay}
                  </span>
                  <span className="flex items-center gap-1">
                    <Calendar className="w-3.5 h-3.5" />
                    {video.publishedDate}
                  </span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>

      {/* Interactive Video Player Modal */}
      {activeVideo && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md"
          onClick={() => setActiveVideo(null)}
        >
          <div
            className="relative w-full max-w-4xl bg-[#0c0e18] border border-amber-500/30 rounded-2xl overflow-hidden shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="p-4 border-b border-slate-800 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <span className="badge-gold text-xs px-2.5 py-1 rounded-md font-semibold">
                  {activeVideo.channelName}
                </span>
                <h3 className="font-bold text-white text-sm sm:text-base line-clamp-1">
                  {activeVideo.title}
                </h3>
              </div>
              <button
                onClick={() => setActiveVideo(null)}
                aria-label="Bağla"
                className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Embed Video Frame */}
            <div className="relative aspect-video w-full bg-black">
              <iframe
                src={`https://www.youtube.com/embed/${activeVideo.videoId}?autoplay=1`}
                title={activeVideo.title}
                className="w-full h-full border-0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>

            {/* Modal Footer */}
            <div className="p-4 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 bg-[#0a0c14]">
              <p className="text-xs text-slate-300 line-clamp-2 flex-1">
                {activeVideo.description}
              </p>
              <a
                href={activeVideo.channelUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="gold-button px-4 py-2 rounded-lg text-xs font-bold shrink-0 flex items-center gap-1.5"
              >
                <span>Kanala Keçid</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

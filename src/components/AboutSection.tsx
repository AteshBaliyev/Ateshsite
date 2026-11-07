'use client';

import { useState } from 'react';
import Image from 'next/image';
import {
  UserCheck,
  ShieldCheck,
  Sparkles,
  Target,
  Award,
  ChevronDown,
  ChevronUp,
  Lock,
  Smartphone,
  Code2,
} from 'lucide-react';
import { YouTubeIcon } from '@/components/Icons';
import { useLanguage } from '@/context/LanguageContext';

export default function AboutSection() {
  const [showFullBio, setShowFullBio] = useState(false);
  const { t } = useLanguage();

  return (
    <section id="haqqimda" aria-label="About Me Section" className="py-20 relative bg-[#090b12] border-t border-b border-amber-500/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Visual Identity & Key Highlights */}
          <div className="lg:col-span-5 flex flex-col items-center">
            <div className="relative w-full max-w-md">
              {/* Gold gradient ambient frame */}
              <div className="absolute -inset-1 rounded-3xl bg-gradient-to-tr from-amber-500/35 via-yellow-400/25 to-amber-600/35 blur-lg"></div>

              <div className="relative rounded-3xl bg-[#0d0f1a] border border-amber-500/30 p-6 sm:p-7 shadow-2xl overflow-hidden">
                {/* Compact Profile Header with Scaled-Down Photo */}
                <div className="flex items-center gap-4 sm:gap-5 mb-5 pb-5 border-b border-slate-800/80">
                  <div className="relative w-24 h-32 sm:w-28 sm:h-36 rounded-xl overflow-hidden border-2 border-amber-500/40 shadow-[0_4px_20px_rgba(212,175,55,0.3)] shrink-0 bg-[#07080d] group">
                    <Image
                      src="/images/atesh-baliyev.png"
                      alt="Atəş Balıyev - AI Developer and Atesh Studio Founder"
                      fill
                      priority
                      sizes="120px"
                      className="object-cover object-top transition duration-500 group-hover:scale-105"
                    />
                  </div>
                  <div>
                    <div className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-300 text-[10px] font-bold mb-1.5">
                      <Sparkles className="w-3 h-3 text-amber-400" />
                      {t.about.officialProfile}
                    </div>
                    <h3 className="text-xl sm:text-2xl font-black text-white tracking-wide">Atəş Balıyev</h3>
                    <p className="text-xs text-amber-400 font-semibold uppercase tracking-wider mt-0.5">
                      Atesh Studio • AI Systems
                    </p>
                    <p className="text-xs text-slate-400 mt-1">{t.about.location}</p>
                  </div>
                </div>

                <div className="space-y-3.5 text-sm">
                  <div className="flex items-start gap-3">
                    <Smartphone className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-slate-200">Atesh Studio Founder</strong>
                      <p className="text-xs text-slate-400">Mobile apps & 3D games (Bondify, E5cape, TələbəX).</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <UserCheck className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-slate-200">ADAU IT & Shamkir Lyceum</strong>
                      <p className="text-xs text-slate-400">{t.about.highSchool}</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <ShieldCheck className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-slate-200">Prime Media Group</strong>
                      <p className="text-xs text-slate-400">{t.about.mediaGroup}</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Award className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-slate-200">SAF 2025 Gold Medalist</strong>
                      <p className="text-xs text-slate-400">{t.about.robotics}</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Target className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-slate-200">TransportTech 1st Place</strong>
                      <p className="text-xs text-slate-400">AgTech 4444 AZN major prize winner & ADAU 2nd place mentor.</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Lock className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-slate-200">Application Security (AppSec)</strong>
                      <p className="text-xs text-slate-400">{t.about.appSec}</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <YouTubeIcon className="w-5 h-5 text-red-400 shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-slate-200">Official YouTube (@thebaliyev)</strong>
                      <p className="text-xs text-slate-400">The Systemic Mind & AzMoney media network.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Detailed Narrative, Philosophy & Expandable AI Bio */}
          <article className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-semibold uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5" />
              {t.about.badge}
            </div>

            <h2 className="text-3xl sm:text-4xl font-extrabold text-white leading-tight">
              {t.about.title}
            </h2>

            <p className="text-slate-300 leading-relaxed text-base sm:text-lg">
              {t.about.bioIntro}
            </p>

            <p className="text-slate-300 leading-relaxed text-base">
              {t.about.bioVibe}
            </p>

            {/* Core Competencies Box */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="p-4 rounded-xl bg-[#0d0f1b] border border-amber-500/15">
                <div className="flex items-center gap-2 text-amber-400 font-semibold mb-1">
                  <Smartphone className="w-4 h-4" />
                  <h4>{t.about.cardStudioTitle}</h4>
                </div>
                <p className="text-xs text-slate-400">
                  {t.about.cardStudioDesc}
                </p>
              </div>

              <div className="p-4 rounded-xl bg-[#0d0f1b] border border-amber-500/15">
                <div className="flex items-center gap-2 text-amber-400 font-semibold mb-1">
                  <Code2 className="w-4 h-4" />
                  <h4>{t.about.cardHackathonTitle}</h4>
                </div>
                <p className="text-xs text-slate-400">
                  {t.about.cardHackathonDesc}
                </p>
              </div>
            </div>

            {/* Interactive Toggle for Full Biography */}
            <div className="pt-2">
              <button
                type="button"
                onClick={() => setShowFullBio(!showFullBio)}
                className="inline-flex items-center gap-2.5 px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold bg-[#121626] text-amber-300 border border-amber-500/35 hover:bg-amber-500/15 hover:border-amber-400 transition shadow-lg"
              >
                <span>{showFullBio ? t.about.toggleHideBio : t.about.toggleShowBio}</span>
                {showFullBio ? <ChevronUp className="w-4 h-4 text-amber-400" /> : <ChevronDown className="w-4 h-4 text-amber-400" />}
              </button>
            </div>

            {/* Expandable Rich Profile Drawer */}
            {showFullBio && (
              <div className="p-6 rounded-2xl bg-gradient-to-b from-[#0e111d] to-[#0a0c16] border border-amber-500/30 space-y-6 text-sm text-slate-300 shadow-2xl animate-in fade-in duration-300">
                <div>
                  <h3 className="text-lg font-bold text-white mb-2 flex items-center gap-2">
                    <Sparkles className="w-4 h-4 text-amber-400" />
                    <span>{t.about.fullBioTitle}</span>
                  </h3>
                  <p className="text-slate-300 leading-relaxed text-xs sm:text-sm">
                    {t.about.bioIntro}
                  </p>
                </div>

                <div className="border-t border-slate-800 pt-4">
                  <h4 className="text-sm font-bold text-amber-400 mb-2">{t.about.eduTitle}</h4>
                  <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                    {t.about.eduText}
                  </p>
                </div>

                <div className="border-t border-slate-800 pt-4">
                  <h4 className="text-sm font-bold text-amber-400 mb-2">{t.about.venturesTitle}</h4>
                  <ul className="space-y-1.5 text-xs sm:text-sm text-slate-300">
                    {t.about.venturesList.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <span className="text-amber-400 font-bold">•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="border-t border-slate-800 pt-4">
                  <h4 className="text-sm font-bold text-amber-400 mb-2">{t.about.appSecTitle}</h4>
                  <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                    {t.about.appSecText}
                  </p>
                </div>
              </div>
            )}
          </article>
        </div>
      </div>
    </section>
  );
}

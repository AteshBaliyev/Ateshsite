'use client';

import Link from 'next/link';
import { Trophy, Award, MessageSquare, Send, ArrowRight, Bot, Cpu, Layers } from 'lucide-react';
import { InstagramIcon } from '@/components/Icons';
import TypewriterHeadline from '@/components/TypewriterHeadline';
import { useLanguage } from '@/context/LanguageContext';

export default function Hero() {
  const { t } = useLanguage();

  return (
    <section aria-label="Hero Section" className="relative pt-12 pb-16 sm:pt-20 sm:pb-24 overflow-hidden">
      {/* Ambient background glows */}
      <div className="ambient-glow w-96 h-96 -top-12 -left-20 bg-amber-500/25" />
      <div className="ambient-glow w-[500px] h-[500px] top-40 -right-32 bg-yellow-600/20" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
          {/* Main Typewriter Headline */}
          <TypewriterHeadline />

          {/* Sub-headline / Bio */}
          <p className="mt-5 text-base sm:text-lg md:text-xl text-slate-300 leading-relaxed max-w-3xl">
            {t.hero.bio}
          </p>

          {/* Prestigious Accolades Badges */}
          <div className="mt-6 flex flex-wrap items-center justify-center gap-2 sm:gap-2.5 max-w-2xl">
            <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#0f121d] border border-amber-500/25 text-xs text-slate-200 shadow-sm">
              <Award className="w-3.5 h-3.5 text-amber-400 shrink-0" />
              <span>{t.hero.badgeRobotics}</span>
            </span>

            <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#0f121d] border border-amber-500/25 text-xs text-slate-200 shadow-sm">
              <Trophy className="w-3.5 h-3.5 text-amber-400 shrink-0" />
              <span>{t.hero.badgeHackathon}</span>
            </span>

            <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#0f121d] border border-amber-500/25 text-xs text-slate-200 shadow-sm">
              <Bot className="w-3.5 h-3.5 text-amber-400 shrink-0" />
              <span>{t.hero.badgeStudio}</span>
            </span>
          </div>

          {/* Primary Action Buttons & Direct Channels */}
          <div className="mt-8 sm:mt-10 flex flex-col items-center gap-4 w-full">
            {/* Main Action Pair */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 w-full sm:w-auto">
              {/* Atesh Studio CTA */}
              <Link
                href="/#atesh-studio"
                prefetch={true}
                className="w-full sm:w-auto flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-bold text-sm text-black bg-gradient-to-r from-amber-400 via-yellow-400 to-amber-500 shadow-[0_4px_22px_rgba(212,175,55,0.4)] hover:shadow-[0_6px_30px_rgba(212,175,55,0.6)] hover:-translate-y-0.5 active:scale-95 transition-all"
              >
                <span>{t.hero.ctaStudio}</span>
                <ArrowRight className="w-4 h-4 text-black" />
              </Link>

              {/* View Projects CTA */}
              <Link
                href="/#layiheler"
                prefetch={true}
                className="w-full sm:w-auto flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-sm text-slate-200 bg-[#0e111d] border border-slate-700/80 hover:border-amber-400/50 hover:text-white hover:-translate-y-0.5 active:scale-95 transition-all shadow-sm"
              >
                <span>{t.hero.ctaProjects}</span>
              </Link>
            </div>

            {/* Branded Quick-Connect Social Row */}
            <div className="flex items-center justify-center gap-2.5 pt-1 w-full flex-wrap">
              {/* WhatsApp */}
              <a
                href="https://wa.me/994556422545"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp Direct"
                className="flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-[#0f1422] border border-emerald-500/30 hover:border-emerald-400 text-slate-200 hover:text-emerald-300 text-xs font-medium transition shadow-sm"
              >
                <MessageSquare className="w-3.5 h-3.5 text-emerald-400" />
                <span>{t.hero.ctaWhatsApp}</span>
              </a>

              {/* Telegram */}
              <a
                href="https://t.me/Baliyews"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Telegram"
                className="flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-[#0f1422] border border-sky-500/30 hover:border-sky-400 text-slate-200 hover:text-sky-300 text-xs font-medium transition shadow-sm"
              >
                <Send className="w-3.5 h-3.5 text-sky-400" />
                <span>{t.hero.ctaTelegram}</span>
              </a>

              {/* Instagram */}
              <a
                href="https://instagram.com/atesh_baliyev?igsh=MXNseDRyeGNwZzZpNw=="
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-[#0f1422] border border-pink-500/30 hover:border-pink-400 text-slate-200 hover:text-pink-300 text-xs font-medium transition shadow-sm"
              >
                <InstagramIcon className="w-3.5 h-3.5 text-pink-400" />
                <span>{t.hero.ctaInstagram}</span>
              </a>
            </div>
          </div>

          {/* Key Competence Metrics Grid */}
          <div className="mt-14 sm:mt-16 grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 w-full">
            <div className="card-luxury p-4 sm:p-5 text-left">
              <div className="flex items-center gap-2 text-amber-400 mb-1.5">
                <Award className="w-4 h-4 sm:w-5 sm:h-5 shrink-0" />
                <span className="text-[11px] sm:text-xs uppercase tracking-wider text-slate-400 font-medium">
                  {t.hero.metrics.safTitle}
                </span>
              </div>
              <div className="text-xl sm:text-2xl font-bold text-amber-400">{t.hero.metrics.safValue}</div>
              <p className="text-[11px] sm:text-xs text-slate-400 mt-1">{t.hero.metrics.safDesc}</p>
            </div>

            <div className="card-luxury p-4 sm:p-5 text-left">
              <div className="flex items-center gap-2 text-amber-400 mb-1.5">
                <Trophy className="w-4 h-4 sm:w-5 sm:h-5 shrink-0" />
                <span className="text-[11px] sm:text-xs uppercase tracking-wider text-slate-400 font-medium">
                  {t.hero.metrics.ttTitle}
                </span>
              </div>
              <div className="text-xl sm:text-2xl font-bold text-white">{t.hero.metrics.ttValue}</div>
              <p className="text-[11px] sm:text-xs text-slate-400 mt-1">{t.hero.metrics.ttDesc}</p>
            </div>

            <div className="card-luxury p-4 sm:p-5 text-left">
              <div className="flex items-center gap-2 text-amber-400 mb-1.5">
                <Layers className="w-4 h-4 sm:w-5 sm:h-5 shrink-0" />
                <span className="text-[11px] sm:text-xs uppercase tracking-wider text-slate-400 font-medium">
                  {t.hero.metrics.socialTitle}
                </span>
              </div>
              <div className="text-xl sm:text-2xl font-bold text-white">{t.hero.metrics.socialValue}</div>
              <p className="text-[11px] sm:text-xs text-slate-400 mt-1">{t.hero.metrics.socialDesc}</p>
            </div>

            <div className="card-luxury p-4 sm:p-5 text-left">
              <div className="flex items-center gap-2 text-amber-400 mb-1.5">
                <Cpu className="w-4 h-4 sm:w-5 sm:h-5 shrink-0" />
                <span className="text-[11px] sm:text-xs uppercase tracking-wider text-slate-400 font-medium">
                  {t.hero.metrics.ecomTitle}
                </span>
              </div>
              <div className="text-xl sm:text-2xl font-bold text-amber-400">{t.hero.metrics.ecomValue}</div>
              <p className="text-[11px] sm:text-xs text-slate-400 mt-1">{t.hero.metrics.ecomDesc}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

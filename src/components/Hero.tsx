import Link from 'next/link';
import { Trophy, Award, MessageSquare, Send, ArrowRight, Bot, Cpu, Layers } from 'lucide-react';
import { InstagramIcon } from '@/components/Icons';
import TypewriterHeadline from '@/components/TypewriterHeadline';

export default function Hero() {
  return (
    <section aria-label="Giriş Bölməsi" className="relative pt-16 pb-20 md:pt-24 md:pb-28 overflow-hidden">
      {/* Ambient background glows */}
      <div className="ambient-glow w-96 h-96 -top-12 -left-20 bg-amber-500/25" />
      <div className="ambient-glow w-[500px] h-[500px] top-40 -right-32 bg-yellow-600/20" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
          {/* Main Typewriter Headline */}
          <TypewriterHeadline />

          {/* Sub-headline */}
          <p className="mt-6 text-lg sm:text-xl text-slate-300 leading-relaxed max-w-3xl">
            İKT tələbəsi, <strong className="text-amber-300 font-semibold">Prime Media Group</strong> rəhbəri və mürəkkəb biznes proseslərini intellektual alqoritmlər, avtonom AI agentləri və modern veb arxitekturası ilə avtomatlaşdıran proqram mühəndisiyəm.
          </p>

          {/* Prestigious Accolades Badges */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-lg bg-[#0f121d] border border-amber-500/20 text-xs text-slate-200">
              <Award className="w-4 h-4 text-amber-400" />
              <span><strong>SAF 2025 VEX V5</strong> Qızıl Medal</span>
            </div>

            <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-lg bg-[#0f121d] border border-amber-500/20 text-xs text-slate-200">
              <Trophy className="w-4 h-4 text-amber-400" />
              <span><strong>TransportTech Hakatonu</strong> 1-ci Yer (4444 AZN)</span>
            </div>

            <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-lg bg-[#0f121d] border border-amber-500/20 text-xs text-slate-200">
              <Bot className="w-4 h-4 text-amber-400" />
              <span>Bondify & Electrolify Qurucusu</span>
            </div>
          </div>

          {/* Primary Action Buttons */}
          <div className="mt-10 flex flex-wrap items-center justify-center gap-3 w-full">
            {/* WhatsApp CTA */}
            <a
              href="https://wa.me/994556422545"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Atəş Balıyev ilə birbaşa WhatsApp vasitəsilə əlaqə qurun"
              className="flex items-center justify-center gap-2 px-5 py-3 rounded-xl font-semibold text-xs sm:text-sm bg-gradient-to-r from-emerald-600 to-emerald-500 text-white shadow-[0_6px_25px_rgba(16,185,129,0.3)] hover:shadow-[0_8px_35px_rgba(16,185,129,0.5)] hover:-translate-y-0.5 transition-all"
            >
              <MessageSquare className="w-4 h-4" />
              <span>WhatsApp ilə Yazın</span>
            </a>

            {/* Telegram CTA */}
            <a
              href="https://t.me/Baliyews"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Atəş Balıyev Telegram kanalı"
              className="flex items-center justify-center gap-2 px-5 py-3 rounded-xl font-semibold text-xs sm:text-sm bg-gradient-to-r from-sky-600 to-cyan-500 text-white shadow-[0_6px_25px_rgba(14,165,233,0.3)] hover:shadow-[0_8px_35px_rgba(14,165,233,0.5)] hover:-translate-y-0.5 transition-all"
            >
              <Send className="w-4 h-4" />
              <span>Telegram: @Baliyews</span>
            </a>

            {/* Instagram CTA */}
            <a
              href="https://instagram.com/atesh_baliyev?igsh=MXNseDRyeGNwZzZpNw=="
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Atəş Balıyev Instagram profili"
              className="flex items-center justify-center gap-2 px-5 py-3 rounded-xl font-semibold text-xs sm:text-sm bg-gradient-to-r from-pink-600 via-rose-500 to-amber-500 text-white shadow-[0_6px_25px_rgba(244,63,94,0.3)] hover:shadow-[0_8px_35px_rgba(244,63,94,0.5)] hover:-translate-y-0.5 transition-all"
            >
              <InstagramIcon className="w-4 h-4" />
              <span>Instagram: @atesh_baliyev</span>
            </a>

            {/* Projects Link */}
            <Link
              href="/#layiheler"
              prefetch={true}
              className="flex items-center justify-center gap-2 px-5 py-3 rounded-xl font-semibold text-xs sm:text-sm text-amber-300 bg-[#0f121e] border border-amber-500/30 hover:bg-amber-500/15 hover:border-amber-400 transition-all"
            >
              <span>Layihələri Kəşf Et</span>
              <ArrowRight className="w-4 h-4 text-amber-400" />
            </Link>
          </div>

          {/* Key Competence Metrics Grid */}
          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4 w-full">
            <div className="card-luxury p-5 text-left">
              <div className="flex items-center gap-2 text-amber-400 mb-2">
                <Award className="w-5 h-5" />
                <span className="text-xs uppercase tracking-wider text-slate-400 font-medium">SAF 2025</span>
              </div>
              <div className="text-2xl font-bold text-amber-400">Qızıl Medal</div>
              <p className="text-xs text-slate-400 mt-1">VEX V5 Robotexnika Çempionatı</p>
            </div>

            <div className="card-luxury p-5 text-left">
              <div className="flex items-center gap-2 text-amber-400 mb-2">
                <Trophy className="w-5 h-5" />
                <span className="text-xs uppercase tracking-wider text-slate-400 font-medium">TransportTech</span>
              </div>
              <div className="text-2xl font-bold text-white">1-ci Yer</div>
              <p className="text-xs text-slate-400 mt-1">4444 AZN Mükafat & AgTech Qələbəsi</p>
            </div>

            <div className="card-luxury p-5 text-left">
              <div className="flex items-center gap-2 text-amber-400 mb-2">
                <Layers className="w-5 h-5" />
                <span className="text-xs uppercase tracking-wider text-slate-400 font-medium">Sosial Platforma</span>
              </div>
              <div className="text-2xl font-bold text-white">Bondify</div>
              <p className="text-xs text-slate-400 mt-1">Telegram Mini App & Coin İqtisadiyyatı</p>
            </div>

            <div className="card-luxury p-5 text-left">
              <div className="flex items-center gap-2 text-amber-400 mb-2">
                <Cpu className="w-5 h-5" />
                <span className="text-xs uppercase tracking-wider text-slate-400 font-medium">E-ticarət</span>
              </div>
              <div className="text-2xl font-bold text-amber-400">Electrolify</div>
              <p className="text-xs text-slate-400 mt-1">Qlobal Vitrinlər, Meta & TikTok Ads</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

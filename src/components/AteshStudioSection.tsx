import Link from 'next/link';
import {
  Smartphone,
  Gamepad2,
  Mail,
  MapPin,
  UserCheck,
  ShieldCheck,
  ExternalLink,
  Sparkles,
  Layers,
  ArrowRight,
  Code2,
  CheckCircle2,
  Download
} from 'lucide-react';

interface StudioApp {
  id: string;
  name: string;
  taglineAz: string;
  taglineEn: string;
  category: string;
  iconType: 'social' | 'game' | 'campus' | 'arcade';
  techStack: string[];
  status: string;
  statusBadgeColor: string;
  features: string[];
  playStoreReady: boolean;
  liveUrl?: string;
}

const STUDIO_APPS: StudioApp[] = [
  {
    id: 'bondify',
    name: 'Bondify',
    taglineAz: 'Qlobal Sosial Kəşf və Tanışlıq Platforması',
    taglineEn: 'Global Social Discovery, Dating & Real-Time Connection Platform',
    category: 'Social & Communication',
    iconType: 'social',
    techStack: ['Node.js', 'Firebase', 'Telegram Mini App', 'Android', 'Tailwind CSS'],
    status: 'Canlı Ekosistem / Android Ready',
    statusBadgeColor: 'bg-emerald-500/10 text-emerald-400 border-emerald-500/30',
    features: [
      'Real-time matchmaking & encrypted messaging',
      'Dual age mode for maximum user safety & privacy',
      'Telegram Stars & in-app coin economic model',
    ],
    playStoreReady: true,
    liveUrl: 'https://bondify.az',
  },
  {
    id: 'e5cape',
    name: 'E5cape',
    taglineAz: 'Dinamik 3D Arcade Runner Mobil Oyunu',
    taglineEn: 'High-Octane 3D Endless Arcade Runner Mobile Game',
    category: 'Mobile Action & Arcade',
    iconType: 'game',
    techStack: ['React Native', 'Three.js', 'Godot Engine', 'GLSL Shaders'],
    status: 'Beta Sınaq / In Active Development',
    statusBadgeColor: 'bg-amber-500/10 text-amber-400 border-amber-500/30',
    features: [
      'Immersive cyber-neon 3D procedurally generated levels',
      'Physics-based obstacle dodging and velocity chaining',
      'Optimized 60 FPS performance on mid-tier Android devices',
    ],
    playStoreReady: true,
  },
  {
    id: 'telebex',
    name: 'TələbəX',
    taglineAz: 'Tələbələr üçün İnteraktiv Sosial Media və Kampus Şəbəkəsi',
    taglineEn: 'Interactive Student Social Network & Campus Ecosystem',
    category: 'Education & Community',
    iconType: 'campus',
    techStack: ['React Native', 'Expo', 'Cloud Functions', 'PostgreSQL'],
    status: 'Prototip & MVP Hazır / Pre-Launch',
    statusBadgeColor: 'bg-sky-500/10 text-sky-400 border-sky-500/30',
    features: [
      'Campus-verified peer discussions & study communities',
      'Academic resource exchange & event scheduling',
      'Modern UI/UX tailored for youth & student organizations',
    ],
    playStoreReady: true,
  },
  {
    id: 'getrich-lasergrid',
    name: 'GET RICH OR RESET & Laser Grid',
    taglineAz: 'Hiper-təsadüfi və Arkada Mobil Oyun Layihələri',
    taglineEn: 'Hyper-Casual Reflex & Laser Puzzle Arcade Games',
    category: 'Hyper-Casual Games',
    iconType: 'arcade',
    techStack: ['Godot Engine', 'C#', 'Mobile Arcade', 'AdMob Integration'],
    status: 'Yayıma Hazır / Production Ready',
    statusBadgeColor: 'bg-purple-500/10 text-purple-400 border-purple-500/30',
    features: [
      'Ultra-fast reflex challenges with instant retry mechanic',
      'Satisfying haptic feedback & minimalist audio design',
      'Privacy-compliant lightweight ad monetization',
    ],
    playStoreReady: true,
  },
];

export default function AteshStudioSection() {
  return (
    <section
      id="atesh-studio"
      aria-label="Atesh Studio - Mobile Apps & Games"
      className="py-24 relative bg-gradient-to-b from-[#080910] via-[#0b0d18] to-[#07080c] border-t border-b border-amber-500/20 overflow-hidden"
    >
      {/* Ambient background glows */}
      <div className="ambient-glow w-96 h-96 top-10 left-[-100px] bg-amber-500/15" />
      <div className="ambient-glow w-[500px] h-[500px] bottom-10 right-[-120px] bg-yellow-600/15" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-300 text-xs sm:text-sm font-semibold uppercase tracking-wider mb-4 shadow-[0_0_15px_rgba(212,175,55,0.2)]">
            <Smartphone className="w-4 h-4 text-amber-400" />
            <span>Google Play Official Developer Portal</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight leading-tight">
            Atesh Studio — <span className="gold-gradient-text">Next-Level Mobile Apps & Games</span>
          </h2>

          {/* Bilingual Intro */}
          <div className="mt-5 space-y-2 max-w-3xl">
            <p className="text-base sm:text-lg text-slate-200 leading-relaxed font-medium">
              &quot;Atesh Studio by Atesh Baliyev. Crafting next-level mobile apps and immersive games that redefine the user experience. Official developer portal for Google Play Store applications.&quot;
            </p>
            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
              Atəş Balıyev tərəfindən qurulan Atesh Studio — istifadəçi təcrübəsini yenidən formalaşdıran yeni nəsil mobil tətbiqlər, kampus ekosistemləri və qüsursuz 3D mobil oyunlar inşa edir.
            </p>
          </div>
        </div>

        {/* Developer Verification & Compliance Card */}
        <div className="mb-14 p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-[#0d0f1c] via-[#121527] to-[#0d0f1c] border border-amber-500/30 shadow-2xl">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 items-center">
            {/* Dev Entity */}
            <div className="flex items-start gap-3.5">
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-amber-400 to-yellow-600 p-[1.5px] shrink-0 shadow-lg">
                <div className="w-full h-full bg-[#080911] rounded-[14px] flex items-center justify-center">
                  <Smartphone className="w-6 h-6 text-amber-400" />
                </div>
              </div>
              <div>
                <p className="text-[11px] uppercase tracking-wider text-amber-400 font-bold">Developer Entity</p>
                <h3 className="text-lg font-extrabold text-white">Atesh Studio</h3>
                <span className="inline-flex items-center gap-1 text-[11px] text-emerald-400 mt-0.5">
                  <CheckCircle2 className="w-3 h-3" />
                  Google Play Console Ready
                </span>
              </div>
            </div>

            {/* Founder & Lead */}
            <div className="flex items-start gap-3.5">
              <div className="w-12 h-12 rounded-2xl bg-[#141829] border border-amber-500/25 flex items-center justify-center shrink-0 text-amber-400">
                <UserCheck className="w-6 h-6" />
              </div>
              <div>
                <p className="text-[11px] uppercase tracking-wider text-slate-400 font-semibold">Founder & Lead Developer</p>
                <h4 className="text-base font-bold text-white">Atəş Balıyev</h4>
                <p className="text-xs text-amber-400/90 font-medium">(Atesh Baliyev)</p>
              </div>
            </div>

            {/* Support Email */}
            <div className="flex items-start gap-3.5">
              <div className="w-12 h-12 rounded-2xl bg-[#141829] border border-amber-500/25 flex items-center justify-center shrink-0 text-amber-400">
                <Mail className="w-6 h-6" />
              </div>
              <div>
                <p className="text-[11px] uppercase tracking-wider text-slate-400 font-semibold">Official Support Email</p>
                <a
                  href="mailto:ates.baliyev.01@gmail.com"
                  className="text-xs sm:text-sm font-bold text-amber-300 hover:text-amber-200 underline underline-offset-2 transition"
                >
                  ates.baliyev.01@gmail.com
                </a>
                <p className="text-[11px] text-slate-400 mt-0.5">Direct developer assistance</p>
              </div>
            </div>

            {/* Location & Legal Links */}
            <div className="flex items-start gap-3.5">
              <div className="w-12 h-12 rounded-2xl bg-[#141829] border border-amber-500/25 flex items-center justify-center shrink-0 text-amber-400">
                <MapPin className="w-6 h-6" />
              </div>
              <div>
                <p className="text-[11px] uppercase tracking-wider text-slate-400 font-semibold">Location & Legal</p>
                <p className="text-sm font-bold text-white">Ganja, Azerbaijan</p>
                <div className="flex items-center gap-2 mt-1 text-[11px]">
                  <Link href="/privacy" className="text-amber-400 hover:underline">Privacy</Link>
                  <span className="text-slate-600">•</span>
                  <Link href="/terms" className="text-amber-400 hover:underline">Terms</Link>
                  <span className="text-slate-600">•</span>
                  <Link href="/data-deletion" className="text-amber-400 hover:underline">Data Safety</Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Studio Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {STUDIO_APPS.map((app) => (
            <div
              key={app.id}
              className="card-luxury p-7 sm:p-8 flex flex-col justify-between group hover:border-amber-400/50 transition-all duration-300"
            >
              <div>
                {/* Header row */}
                <div className="flex items-start justify-between gap-4 mb-4">
                  <div className="flex items-center gap-3.5">
                    <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-amber-400/20 to-yellow-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400 group-hover:scale-110 transition-transform">
                      {app.iconType === 'social' && <Smartphone className="w-6 h-6" />}
                      {app.iconType === 'game' && <Gamepad2 className="w-6 h-6" />}
                      {app.iconType === 'campus' && <Layers className="w-6 h-6" />}
                      {app.iconType === 'arcade' && <Gamepad2 className="w-6 h-6" />}
                    </div>
                    <div>
                      <h3 className="text-2xl font-black text-white group-hover:text-amber-300 transition-colors">
                        {app.name}
                      </h3>
                      <p className="text-xs text-slate-400 font-medium">{app.category}</p>
                    </div>
                  </div>

                  <span
                    className={`text-[10px] sm:text-xs font-bold px-3 py-1 rounded-full border ${app.statusBadgeColor}`}
                  >
                    {app.status}
                  </span>
                </div>

                {/* Taglines */}
                <h4 className="text-sm font-semibold text-amber-400/90 mb-1">
                  {app.taglineAz}
                </h4>
                <p className="text-xs text-slate-300 italic mb-5">
                  {app.taglineEn}
                </p>

                {/* Features List */}
                <div className="space-y-2 mb-6 pt-4 border-t border-slate-800/80">
                  {app.features.map((feat, i) => (
                    <div key={i} className="flex items-start gap-2 text-xs text-slate-300">
                      <CheckCircle2 className="w-3.5 h-3.5 text-amber-400 shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Bottom Tech Stack & Action Links */}
              <div>
                <div className="flex flex-wrap gap-1.5 mb-5">
                  {app.techStack.map((tech, i) => (
                    <span
                      key={i}
                      className="text-[11px] px-2.5 py-1 rounded-lg bg-[#0e111d] border border-amber-500/20 text-slate-300 font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="pt-4 border-t border-slate-800 flex items-center justify-between text-xs">
                  <div className="flex items-center gap-1.5 text-slate-400">
                    <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                    <span>Google Play Data Safety Compliant</span>
                  </div>

                  <div className="flex items-center gap-2">
                    {app.liveUrl ? (
                      <a
                        href={app.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-amber-400 hover:text-amber-300 font-bold transition"
                      >
                        <span>Platformaya Bax</span>
                        <ExternalLink className="w-3.5 h-3.5" />
                      </a>
                    ) : (
                      <span className="text-slate-500 font-medium">Atesh Studio Internal Build</span>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Category Note for Web & AI Ventures */}
        <div className="mt-12 p-5 rounded-2xl bg-[#0b0d17] border border-amber-500/20 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3 text-left">
            <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-400 shrink-0">
              <Code2 className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-white">AI Sistemləri və Veb Ekosistemlər</h4>
              <p className="text-xs text-slate-400">
                Fermerim.az (AgTech), AiXəbər (AI News), Gizlimiz.com və Electrolify.com kimi qabaqcıl platformalar aşağıdakı bölmədə yer alır.
              </p>
            </div>
          </div>

          <a
            href="#layiheler"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold text-amber-300 bg-amber-500/10 border border-amber-500/30 hover:bg-amber-500/20 transition shrink-0"
          >
            <span>Bütün Ekosistemi Kəşf Et</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>
    </section>
  );
}

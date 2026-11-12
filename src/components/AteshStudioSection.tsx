'use client';

import Link from 'next/link';
import Image from 'next/image';
import {
  Smartphone,
  Gamepad2,
  Mail,
  UserCheck,
  ShieldCheck,
  ExternalLink,
  Layers,
  CheckCircle2,
  ShoppingBag,
  Send,
} from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';

interface StudioApp {
  id: string;
  name: string;
  tagline: {
    en: string;
    az: string;
    ru: string;
  };
  category: {
    en: string;
    az: string;
    ru: string;
  };
  iconType: 'social' | 'ecommerce' | 'campus' | 'arcade' | 'game';
  techStack: string[];
  status: {
    en: string;
    az: string;
    ru: string;
  };
  statusBadgeColor: string;
  features: {
    en: string[];
    az: string[];
    ru: string[];
  };
  complianceBadge?: {
    en: string;
    az: string;
    ru: string;
  };
  playStoreReady: boolean;
  liveUrl?: string;
  liveLabel?: {
    en: string;
    az: string;
    ru: string;
  };
}

const STUDIO_APPS: StudioApp[] = [
  {
    id: 'bondify',
    name: 'Bondify',
    tagline: {
      en: 'Real-Time Social Discovery Telegram Mini App (@BondifyAppBot)',
      az: 'Telegram Mini App Sosial Kəşf Platforması (@BondifyAppBot)',
      ru: 'Платформа Знакомств Telegram Mini App (@BondifyAppBot)',
    },
    category: {
      en: 'Telegram Mini App',
      az: 'Telegram Mini App',
      ru: 'Telegram Mini App',
    },
    iconType: 'social',
    techStack: ['Telegram Mini App', 'Node.js', 'Firebase', 'Telegram Stars', 'Adsgram'],
    status: {
      en: 'Live Telegram Mini App',
      az: 'Canlı Telegram Mini App',
      ru: 'Активный Telegram Mini App',
    },
    statusBadgeColor: 'bg-sky-500/10 text-sky-400 border-sky-500/30',
    features: {
      en: [
        'Instant social discovery & real-time chat inside Telegram',
        'Dual age mode for maximum user safety & privacy',
        'Telegram Stars & Adsgram rewarded coin economy',
      ],
      az: [
        'Birbaşa Telegram daxilində real vaxt rejimində tanışlıq və mesajlaşma',
        'İkili yaş rejimi (dual age mode) ilə yüksək istifadəçi təhlükəsizliyi',
        'Telegram Stars və Adsgram vasitəsilə mükafatlı coin iqtisadiyyatı',
      ],
      ru: [
        'Мгновенные знакомства и общение в реальном времени внутри Telegram',
        'Двойной возрастной режим для максимальной безопасности',
        'Интеграция Telegram Stars и внутренняя экономика Adsgram',
      ],
    },
    complianceBadge: {
      en: 'Telegram Mini App Verified',
      az: 'Telegram Mini App (@BondifyAppBot)',
      ru: 'Telegram Mini App (@BondifyAppBot)',
    },
    playStoreReady: true,
    liveUrl: 'https://t.me/BondifyAppBot',
    liveLabel: {
      en: 'Open @BondifyAppBot',
      az: 'Telegram-da Aç (@BondifyAppBot)',
      ru: 'Открыть @BondifyAppBot',
    },
  },
  {
    id: 'trendim-store',
    name: 'Trendim.store',
    tagline: {
      en: 'Modern E-Commerce Storefront Built Specifically for Azerbaijan',
      az: 'Azərbaycanlılar Üçün Nəzərdə Tutulmuş Rəqəmsal Ticarət Saytı',
      ru: 'Современный Интернет-Магазин Специально для Азербайджана',
    },
    category: {
      en: 'E-Commerce & Retail',
      az: 'E-Ticarət Platforması',
      ru: 'Электронная Коммерция',
    },
    iconType: 'ecommerce',
    techStack: ['Next.js', 'E-Commerce', 'Meta Ads', 'TikTok Ads', 'Tailwind CSS'],
    status: {
      en: 'Live Storefront / Azerbaijan',
      az: 'Canlı Mağaza / Azərbaycan',
      ru: 'Активный Магазин / Азербайджан',
    },
    statusBadgeColor: 'bg-emerald-500/10 text-emerald-400 border-emerald-500/30',
    features: {
      en: [
        'Curated trending products & gadgets tailored for Azerbaijani shoppers',
        'Ultra-fast mobile storefront & seamless checkout UX',
        'Scaled with targeted Meta Ads & TikTok Ads campaigns',
      ],
      az: [
        'Azərbaycanlı alıcılar üçün xüsusi seçilmiş trend məhsullar və qadjetlər',
        'Sürətli mobil vitrin dizaynı və rahat sifariş təcrübəsi',
        'Meta Ads və TikTok Ads reklamları ilə avtomatlaşdırılmış satış axını',
      ],
      ru: [
        'Трендовые товары и гаджеты специально для покупателей из Азербайджана',
        'Быстрая мобильная витрина и удобный интерфейс оформления заказов',
        'Масштабирование через таргетированную рекламу Meta и TikTok Ads',
      ],
    },
    complianceBadge: {
      en: 'Official Azerbaijan Storefront',
      az: 'Rəsmi Azərbaycan E-Ticarət Saytı',
      ru: 'Официальный Магазин (Азербайджан)',
    },
    playStoreReady: false,
    liveUrl: 'https://trendim.store',
    liveLabel: {
      en: 'Visit Trendim.store',
      az: 'Sayta Keçid (Trendim.store)',
      ru: 'Перейти на Trendim.store',
    },
  },
  {
    id: 'telebex',
    name: 'TələbəX',
    tagline: {
      en: 'Interactive Student Social Network & Campus Community',
      az: 'Tələbələr üçün İnteraktiv Sosial Media və Kampus Şəbəkəsi',
      ru: 'Интерактивная Студенческая Сеть и Кампус-Сообщество',
    },
    category: {
      en: 'Education & Community',
      az: 'Təhsil & İcma',
      ru: 'Образование & Сообщество',
    },
    iconType: 'campus',
    techStack: ['React Native', 'PostgreSQL', 'Node.js', 'Supabase'],
    status: {
      en: 'Pilot Release / Campus Launch',
      az: 'Pilot Mərhələ / Kampus İcması',
      ru: 'Пилотный Запуск / Университеты',
    },
    statusBadgeColor: 'bg-sky-500/10 text-sky-400 border-sky-500/30',
    features: {
      en: [
        'Campus-verified peer discussions & study communities',
        'Academic resource exchange & event scheduling',
        'Modern UI/UX tailored for youth & student organizations',
      ],
      az: [
        'Tələbələr arasında akademik müzakirələr və qrup layihələri',
        'Faydalı təhsil resurslarının və təcrübələrin paylaşılması',
        'Gənclər və tələbə təşkilatları üçün uyğunlaşdırılmış interfeys',
      ],
      ru: [
        'Верифицированные студенческие обсуждения и учебные группы',
        'Обмен академическими материалами и расписание событий',
        'Современный интерфейс, созданный специально для молодежи',
      ],
    },
    playStoreReady: true,
  },
  {
    id: 'getrich-lasergrid',
    name: 'GlowSnake.io & Arcade Games',
    tagline: {
      en: 'Hyper-Casual Reflex, GlowSnake.io & Arcade Mobile Games',
      az: 'GlowSnake.io, GET RICH OR RESET və Arkada Mobil Oyunları',
      ru: 'GlowSnake.io и Гиперказуальные Аркадные Игры',
    },
    category: {
      en: 'Hyper-Casual Games',
      az: 'Hiper-təsadüfi Oyunlar',
      ru: 'Гиперказуальные Игры',
    },
    iconType: 'arcade',
    techStack: ['Godot Engine', 'Capacitor Android', 'Mobile Arcade', 'AdMob Integration'],
    status: {
      en: 'Production Ready / Google Play',
      az: 'Yayıma Hazır / Production Ready',
      ru: 'Готово к Публикации',
    },
    statusBadgeColor: 'bg-purple-500/10 text-purple-400 border-purple-500/30',
    features: {
      en: [
        'Ultra-fast reflex challenges with instant retry mechanic',
        'Satisfying haptic feedback & glowing neon arcade visuals',
        'Privacy-compliant lightweight AdMob monetization',
      ],
      az: [
        'Sürətli refleks sınaqları və neon qrafikalı GlowSnake.io oyunu',
        'Minimalist səs dizaynı və vibro-əlaqə effekti',
        'Təhlükəsiz və yüngül Google AdMob monetizasiyası',
      ],
      ru: [
        'Мгновенный перезапуск и динамичная неоновая графика GlowSnake.io',
        'Приятный тактильный отклик и стильный звук',
        'Безопасная рекламная монетизация через Google AdMob',
      ],
    },
    playStoreReady: true,
  },
];

export default function AteshStudioSection() {
  const { locale, t } = useLanguage();

  return (
    <section
      id="atesh-studio"
      aria-label="Atesh Studio - Mobile Apps, E-Commerce & Games"
      className="py-20 sm:py-24 relative bg-gradient-to-b from-[#080910] via-[#0b0d18] to-[#07080c] border-t border-b border-amber-500/20 overflow-hidden"
    >
      {/* Ambient background glows */}
      <div className="ambient-glow w-96 h-96 top-10 left-[-100px] bg-amber-500/15" />
      <div className="ambient-glow w-[500px] h-[500px] bottom-10 right-[-120px] bg-yellow-600/15" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-300 text-xs sm:text-sm font-semibold uppercase tracking-wider mb-4 shadow-[0_0_15px_rgba(212,175,55,0.2)]">
            <Smartphone className="w-4 h-4 text-amber-400" />
            <span>{t.studio.badge}</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight leading-tight">
            Atesh Studio — <span className="gold-gradient-text">Next-Level Mobile Apps &amp; Digital Ventures</span>
          </h2>

          <div className="mt-4 space-y-2 max-w-3xl">
            <p className="text-base sm:text-lg text-slate-200 leading-relaxed font-medium">
              {t.studio.descriptionEn}
            </p>
          </div>
        </div>

        {/* Developer Verification & Compliance Card */}
        <div className="mb-14 p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-[#0d0f1c] via-[#121527] to-[#0d0f1c] border border-amber-500/30 shadow-2xl">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 items-center">
            {/* Dev Entity */}
            <div className="flex items-start gap-3.5">
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-amber-400 to-yellow-600 p-[1.5px] shrink-0 shadow-lg">
                <div className="w-full h-full bg-[#080911] rounded-[14px] flex items-center justify-center p-1.5 overflow-hidden">
                  <Image
                    src="/images/logo.png"
                    alt="Atesh Studio Logo"
                    width={40}
                    height={40}
                    className="w-full h-full object-contain"
                  />
                </div>
              </div>
              <div>
                <p className="text-[11px] uppercase tracking-wider text-amber-400 font-bold">{t.studio.devEntityTitle}</p>
                <h3 className="text-lg font-extrabold text-white">{t.studio.devEntityName}</h3>
                <span className="inline-flex items-center gap-1 text-[11px] text-emerald-400 mt-0.5">
                  <CheckCircle2 className="w-3 h-3" />
                  {t.studio.devEntityStatus}
                </span>
              </div>
            </div>

            {/* Founder & Lead */}
            <div className="flex items-start gap-3.5">
              <div className="w-12 h-12 rounded-2xl bg-[#141829] border border-amber-500/25 flex items-center justify-center shrink-0 text-amber-400">
                <UserCheck className="w-6 h-6" />
              </div>
              <div>
                <p className="text-[11px] uppercase tracking-wider text-slate-400 font-semibold">{t.studio.leadTitle}</p>
                <h4 className="text-base font-bold text-white">{t.studio.leadName}</h4>
                <p className="text-xs text-amber-400/90 font-medium">{t.studio.leadSubtitle}</p>
              </div>
            </div>

            {/* Support Email */}
            <div className="flex items-start gap-3.5">
              <div className="w-12 h-12 rounded-2xl bg-[#141829] border border-amber-500/25 flex items-center justify-center shrink-0 text-amber-400">
                <Mail className="w-6 h-6" />
              </div>
              <div>
                <p className="text-[11px] uppercase tracking-wider text-slate-400 font-semibold">{t.studio.emailTitle}</p>
                <a
                  href="mailto:atesbaliyev@gmail.com"
                  className="text-xs sm:text-sm font-bold text-amber-300 hover:text-amber-200 underline underline-offset-2 transition"
                >
                  atesbaliyev@gmail.com
                </a>
                <p className="text-[10px] text-slate-400 mt-0.5">Direct Developer Inquiries</p>
              </div>
            </div>

            {/* Compliance & AppSec */}
            <div className="flex items-start gap-3.5">
              <div className="w-12 h-12 rounded-2xl bg-[#141829] border border-emerald-500/30 flex items-center justify-center shrink-0 text-emerald-400">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <div>
                <p className="text-[11px] uppercase tracking-wider text-emerald-400 font-bold">{t.studio.appSecTitle}</p>
                <p className="text-xs font-semibold text-white">{t.studio.appSecStatus}</p>
                <div className="flex flex-col gap-1 mt-1 text-[11px]">
                  <Link href="/privacy" className="text-amber-300 hover:underline">
                    {t.studio.viewPrivacyPolicy} →
                  </Link>
                  <Link href="/data-deletion" className="text-slate-400 hover:text-slate-200 underline">
                    {t.studio.dataDeletionSla}
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Flagship Apps & Ecosystem Grid */}
        <div className="space-y-6">
          <div className="flex items-center justify-between pb-3 border-b border-slate-800">
            <div>
              <h3 className="text-xl sm:text-2xl font-bold text-white flex items-center gap-2">
                <Layers className="w-5 h-5 text-amber-400" />
                <span>{t.studio.appsTitle}</span>
              </h3>
              <p className="text-xs sm:text-sm text-slate-400 mt-1">
                {t.studio.appsSubtitle}
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {STUDIO_APPS.map((app) => (
              <div
                key={app.id}
                className="card-luxury p-6 sm:p-7 flex flex-col justify-between group hover:border-amber-400/50 transition-all duration-300"
              >
                <div>
                  <div className="flex items-start justify-between gap-4 mb-4">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-amber-500/20 to-yellow-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400 shadow-md">
                        {app.iconType === 'game' || app.iconType === 'arcade' ? (
                          <Gamepad2 className="w-6 h-6" />
                        ) : app.iconType === 'ecommerce' ? (
                          <ShoppingBag className="w-6 h-6" />
                        ) : app.iconType === 'social' ? (
                          <Send className="w-6 h-6 text-sky-400" />
                        ) : (
                          <Smartphone className="w-6 h-6" />
                        )}
                      </div>
                      <div>
                        <h4 className="text-xl font-black text-white group-hover:text-amber-300 transition">
                          {app.name}
                        </h4>
                        <span className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider">
                          {app.category[locale] || app.category.en}
                        </span>
                      </div>
                    </div>

                    <span className={`px-2.5 py-1 rounded-full text-[10px] font-bold border ${app.statusBadgeColor}`}>
                      {app.status[locale] || app.status.en}
                    </span>
                  </div>

                  <p className="text-sm font-semibold text-slate-200 mb-4">
                    {app.tagline[locale] || app.tagline.en}
                  </p>

                  <ul className="space-y-2 mb-6">
                    {(app.features[locale] || app.features.en).map((feat, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-xs text-slate-300">
                        <CheckCircle2 className="w-3.5 h-3.5 text-amber-400 shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-1.5 mb-6">
                    {app.techStack.map((tech) => (
                      <span
                        key={tech}
                        className="text-[11px] px-2.5 py-1 rounded-lg bg-[#0e111d] border border-amber-500/20 text-slate-300 font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="pt-4 border-t border-slate-800 flex items-center justify-between text-xs gap-2 flex-wrap">
                  <div className="flex items-center gap-1.5 text-slate-400">
                    <ShieldCheck className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                    <span>
                      {app.complianceBadge
                        ? app.complianceBadge[locale] || app.complianceBadge.en
                        : t.studio.playStoreStatus}
                    </span>
                  </div>

                  {app.liveUrl ? (
                    <a
                      href={app.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-amber-500/15 border border-amber-500/30 text-amber-300 font-bold hover:bg-amber-500 hover:text-black transition"
                    >
                      <span>
                        {app.liveLabel ? app.liveLabel[locale] || app.liveLabel.en : t.studio.liveWeb}
                      </span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  ) : (
                    <div className="flex items-center gap-2">
                      <span className="text-slate-500 font-medium">Atesh Studio Internal Build</span>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

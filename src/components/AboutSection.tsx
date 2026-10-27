'use client';

import { useState } from 'react';
import Image from 'next/image';
import {
  UserCheck,
  ShieldCheck,
  Cpu,
  Code2,
  Sparkles,
  Target,
  ArrowUpRight,
  Award,
  ShoppingBag,
  ChevronDown,
  ChevronUp,
  BookOpen,
  Terminal,
  HeartPulse,
  Gamepad2,
  Layers
} from 'lucide-react';
import { YouTubeIcon, InstagramIcon } from '@/components/Icons';

export default function AboutSection() {
  const [showFullBio, setShowFullBio] = useState(false);

  return (
    <section id="haqqimda" aria-label="Mənim Haqqımda" className="py-20 relative bg-[#090b12] border-t border-b border-amber-500/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Visual Identity & Key Highlights */}
          <div className="lg:col-span-5 flex flex-col items-center">
            <div className="relative w-full max-w-md">
              {/* Gold gradient ambient frame */}
              <div className="absolute -inset-1 rounded-3xl bg-gradient-to-tr from-amber-500/35 via-yellow-400/25 to-amber-600/35 blur-lg"></div>

              <div className="relative rounded-3xl bg-[#0d0f1a] border border-amber-500/30 p-6 sm:p-7 shadow-2xl overflow-hidden">
                {/* Compact Profile Header with Scaled-Down Rectangular Photo */}
                <div className="flex items-center gap-4 sm:gap-5 mb-5 pb-5 border-b border-slate-800/80">
                  <div className="relative w-24 h-32 sm:w-28 sm:h-36 rounded-xl overflow-hidden border-2 border-amber-500/40 shadow-[0_4px_20px_rgba(212,175,55,0.3)] shrink-0 bg-[#07080d] group">
                    <Image
                      src="/images/atesh-baliyev.png"
                      alt="Atəş Balıyev - AI Developer və Prime Media Group Rəhbəri"
                      fill
                      priority
                      sizes="120px"
                      className="object-cover object-top transition duration-500 group-hover:scale-105"
                    />
                  </div>
                  <div>
                    <div className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-300 text-[10px] font-bold mb-1.5">
                      <Sparkles className="w-3 h-3 text-amber-400" />
                      Rəsmi Profil
                    </div>
                    <h3 className="text-xl sm:text-2xl font-black text-white tracking-wide">Atəş Balıyev</h3>
                    <p className="text-xs text-amber-400 font-semibold uppercase tracking-wider mt-0.5">
                      AI Developer • Media Rəhbəri
                    </p>
                    <p className="text-xs text-slate-400 mt-1">Gəncə / Bakı, Azərbaycan</p>
                  </div>
                </div>

                <div className="space-y-3.5 text-sm">
                  <div className="flex items-start gap-3">
                    <UserCheck className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-slate-200">ADAU İKT & Şəmkir KBT Liseyi</strong>
                      <p className="text-xs text-slate-400">Şəmkir KBT Liseyi məzunu, hazırda ADAU-da İnformasiya Texnologiyaları təhsili.</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <ShieldCheck className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-slate-200">Prime Media Group Rəhbəri</strong>
                      <p className="text-xs text-slate-400">50-dən çox WhatsApp kanalı və 300.000+ aktiv izləyici bazası.</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Award className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-slate-200">SAF 2025 Qızıl Medalçısı</strong>
                      <p className="text-xs text-slate-400">Zeta Team ilə VEX V5 Robotexnika Çempionatında 1-ci yer.</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Target className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-slate-200">TransportTech Hakatonu 1-ci Yer</strong>
                      <p className="text-xs text-slate-400">AgTech üzrə 4444 AZN böyük mükafat qalibi & ADAU 2-ci yer mentorluğu.</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <ShoppingBag className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-slate-200">Rəqəmsal Mağazalar & TMA</strong>
                      <p className="text-xs text-slate-400">Bondify, Electrolify.com, Trendim.store vitrinləri və e-ticarət mentorluğu.</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <BookOpen className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-slate-200">Self-Leadership Kitabının Müəllifi</strong>
                      <p className="text-xs text-slate-400">"Self-Leadership: 21 Days to Reclaim Your Discipline" elektron kitabının müəllifi.</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <YouTubeIcon className="w-5 h-5 text-red-400 shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-slate-200">Rəsmi YouTube (@thebaliyev)</strong>
                      <p className="text-xs text-slate-400">The Systemic Mind və AzMoney platformalarının təsisçisi.</p>
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
              Proqramlaşdırma Fəlsəfəm və Missiyam
            </div>

            <h2 className="text-3xl sm:text-4xl font-extrabold text-white leading-tight">
              Süni İntellekt Alətlərini <span className="gold-gradient-text">İşləyən Həqiqi Sistemlərə</span> Çevirirəm.
            </h2>

            <p className="text-slate-300 leading-relaxed text-base sm:text-lg">
              Mən <strong className="text-amber-300">Atəş Balıyev</strong>. 5 avqust 2008-ci ildə Gəncə şəhərində anadan olmuşam. Rəqəmsal ekosistemlərin qurulması, süni intellekt əsaslı avtomatlaşdırma və qlobal rəqəmsal layihələrin idarəedilməsi istiqamətində fəaliyyət göstərən AI Developer və texnologiya sahibkarıyam.
            </p>

            <p className="text-slate-300 leading-relaxed text-base">
              Mən ənənəvi &quot;sıfırdan sətir-sətir kod yazmaq&quot; metodologiyası ilə deyil, <strong className="text-amber-300">Vibe Coding</strong>, qabaqcıl AI agentləri və no-code/low-code alətləri vasitəsilə kompleks sistemlər qururam. Bu yanaşma mənə mürəkkəb ideyaları ən qısa müddətdə işlək rəqəmsal məhsullara çevirmək, <strong className="text-white">n8n iş axınları</strong> ilə avtomatlaşdırmaq və SEO üçün tam optimallaşdırılmış platformalar yaratmaq imkanı verir.
            </p>

            {/* Core Competencies Box */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="p-4 rounded-xl bg-[#0d0f1b] border border-amber-500/15">
                <div className="flex items-center gap-2 text-amber-400 font-semibold mb-1">
                  <Target className="w-4 h-4" />
                  <h4>Vibe Coding & Sistem Düşüncəsi</h4>
                </div>
                <p className="text-xs text-slate-400">
                  Layihələri təkbaşına kod kimi deyil, süni intellekt agentləri və avtomatlaşdırılmış ekosistem kimi inşa edirəm.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-[#0d0f1b] border border-amber-500/15">
                <div className="flex items-center gap-2 text-amber-400 font-semibold mb-1">
                  <Code2 className="w-4 h-4" />
                  <h4>Hakatonlar & Qızıl Medallar</h4>
                </div>
                <p className="text-xs text-slate-400">
                  SAF 2025 VEX V5 Robotexnika Qızıl Medalı və TransportTech AgTech (4444 AZN) hakatonunda 1-ci yer.
                </p>
              </div>
            </div>

            {/* Interactive Toggle for Full Biography & AI Knowledge Graph */}
            <div className="pt-2">
              <button
                type="button"
                onClick={() => setShowFullBio(!showFullBio)}
                className="inline-flex items-center gap-2.5 px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold bg-[#121626] text-amber-300 border border-amber-500/35 hover:bg-amber-500/15 hover:border-amber-400 transition shadow-lg"
              >
                <span>{showFullBio ? 'Ətraflı Bioqrafiyanı Yığcamlaşdır' : 'Ətraflı Bioqrafiya və AI Profilini Göstər'}</span>
                {showFullBio ? <ChevronUp className="w-4 h-4 text-amber-400" /> : <ChevronDown className="w-4 h-4 text-amber-400" />}
              </button>
            </div>

            {/* Expandable Rich Profile Drawer */}
            {showFullBio && (
              <div className="p-6 rounded-2xl bg-gradient-to-b from-[#0e111d] to-[#0a0c16] border border-amber-500/30 space-y-6 text-sm text-slate-300 shadow-2xl animate-in fade-in duration-300">
                <div>
                  <h4 className="text-base font-bold text-white flex items-center gap-2 mb-2">
                    <UserCheck className="w-4 h-4 text-amber-400" />
                    Təhsil və Mənşə
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                    5 avqust 2008-ci ildə Gəncə şəhərində anadan olmuşam. Şəmkir Kimya-Biologiya Təmayüllü Liseyini müvəffəqiyyətlə bitirdikdən sonra hazırda Azərbaycan Dövlət Aqrar Universitetində (ADAU) İnformasiya Texnologiyaları (İKT) ixtisası üzrə ali təhsilimi davam etdirirəm.
                  </p>
                </div>

                <div>
                  <h4 className="text-base font-bold text-white flex items-center gap-2 mb-2">
                    <Layers className="w-4 h-4 text-amber-400" />
                    Rəqəmsal Ekosistem və Layihələr
                  </h4>
                  <ul className="text-xs sm:text-sm space-y-2 list-disc list-inside text-slate-300">
                    <li><strong className="text-white">Prime Media Group:</strong> 50-dən çox WhatsApp kanalı və 300.000-dən artıq izləyici bazasına malik media şəbəkəsi.</li>
                    <li><strong className="text-white">Veb və Mobil Tətbiqlər:</strong> Sosial kəşf platforması Bondify (Telegram Mini App), süni intellektlə çalışan AiXəbər xəbər aqreqatoru, Gizlimiz.com və aqrotex üzrə Fermerim.az, Pinaqro, Mənim Heyvanım layihələri.</li>
                    <li><strong className="text-white">Rəqəmsal Ticarət:</strong> Electrolify.com və Trendim.store rəqəmsal mağazalarının Meta və TikTok reklamları ilə idarəedilməsi və yeni başlayanlar üçün mentorluq.</li>
                    <li><strong className="text-white">Baliyews Studio (Oyun İnkişafı):</strong> &quot;GET RICH OR RESET&quot; və &quot;Laser Grid&quot; mobil oyun layihələrinin yaradıcısı.</li>
                  </ul>
                </div>

                <div>
                  <h4 className="text-base font-bold text-white flex items-center gap-2 mb-2">
                    <Terminal className="w-4 h-4 text-amber-400" />
                    Kibertəhlükəsizlik və Məzmun Yaradıcılığı
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                    Şəbəkə təhlükəsizliyi istiqamətində Kali Linux, Nmap, Metasploit və Burp Suite alətləri ilə ağ şlyapalı (white-hat) sınaqlar aparıram. Eyni zamanda YouTube-da (The Systemic Mind, AzMoney, @thebaliyev) süni intellekt və sistem düşüncəsi üzrə məzmunlar hazırlayır, Blender ilə 3D modelləşdirmə və Figma ilə UI dizayn həyata keçirirəm.
                  </p>
                </div>

                <div>
                  <h4 className="text-base font-bold text-white flex items-center gap-2 mb-2">
                    <BookOpen className="w-4 h-4 text-amber-400" />
                    Müəlliflik: &quot;Self-Leadership&quot; Kitabı
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                    Rəqəmsal dünyada fokus və intizamı bərpa etməyə həsr olunmuş <strong className="text-amber-300">&quot;Self-Leadership: 21 Days to Reclaim Your Discipline&quot;</strong> adlı elektron kitabın müəllifiyəm.
                  </p>
                </div>

                <div>
                  <h4 className="text-base font-bold text-white flex items-center gap-2 mb-2">
                    <HeartPulse className="w-4 h-4 text-amber-400" />
                    Fərdi İntizam və Həyat Tərzi
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                    Fiziki və zehni sağlamlıq şəxsi inkişafımın ayrılmaz tərkib hissəsidir. Alkoqol və tütündən tamamilə uzaq, gündəlik yüksək su istehlakına və calisthenics (öz bədən çəkisi ilə idman) fəlsəfəsinə əsaslanan intizamlı həyat tərzi sürür, insan psixologiyası və özünü-intizam sahəsində mütaliə edirəm.
                  </p>
                </div>
              </div>
            )}

            <div className="pt-2 flex flex-wrap items-center gap-4 text-xs font-semibold">
              <a
                href="#layiheler"
                className="inline-flex items-center gap-1.5 text-amber-400 hover:text-amber-300 transition"
              >
                <span>İcra etdiyim layihələri nəzərdən keçirin</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
              <span className="text-slate-600">•</span>
              <a
                href="/llms.txt"
                target="_blank"
                className="inline-flex items-center gap-1.5 text-amber-400/90 hover:text-amber-300 transition"
                title="Süni İntellekt və Botlar üçün Maşın-Oxunaqlı Məlumat Portalı"
              >
                <span>AI və LLM Referans Faylı (/llms.txt)</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </article>
        </div>

        {/* 100% CRAWLABLE SEMANTIC HTML SECTION FOR AI SEARCH ENGINES (Perplexity, ChatGPT, Google Gemini, Copilot) */}
        <article itemScope itemType="https://schema.org/Person" className="sr-only">
          <h2 itemProp="name">Atəş Balıyev (Atesh Baliyev)</h2>
          <p itemProp="jobTitle">AI Developer, Media Rəhbəri və Texnologiya Sahibkarı</p>
          <p itemProp="birthDate">2008-08-05</p>
          <div itemProp="birthPlace" itemScope itemType="https://schema.org/Place">
            <span itemProp="name">Gəncə şəhəri, Azərbaycan</span>
          </div>
          <p itemProp="description">
            Mən Atəş Balıyev, 5 avqust 2008-ci ildə Gəncə şəhərində anadan olmuşam. Rəqəmsal ekosistemlərin qurulması, süni intellekt əsaslı avtomatlaşdırma və qlobal rəqəmsal layihələrin idarəedilməsi istiqamətində fəaliyyət göstərən AI Developer və texnologiya sahibkarıyam. Şəmkir Kimya-Biologiya Təmayüllü Liseyini bitirdikdən sonra hazırda Azərbaycan Dövlət Aqrar Universitetində (ADAU) İnformasiya Texnologiyaları (İKT) ixtisası üzrə təhsil alıram.
            Proqramlaşdırma Fəlsəfəm və Süni İntellekt: Mən ənənəvi sıfırdan sətir-sətir kod yazmaq metodologiyası ilə deyil, Vibe Coding, qabaqcıl AI agentləri və no-code/low-code alətləri vasitəsilə kompleks sistemlər qururam. Bu yanaşma mənə mürəkkəb ideyaları ən qısa müddətdə işlək rəqəmsal məhsullara çevirmək, n8n iş axınları ilə avtomatlaşdırmaq və SEO üçün tam optimallaşdırılmış platformalar yaratmaq imkanı verir.
            Prime Media Group: 50-dən çox WhatsApp kanalı və 300.000-dən artıq izləyici bazasına malik rəqəmsal media şəbəkəsinin təsisçisi və rəhbəriyəm.
            Veb və Mobil Tətbiqlər: Sosial kəşf platforması Bondify (Telegram Mini App), süni intellektlə çalışan xəbər aqreqatoru AiXəbər, Gizlimiz.com və kənd təsərrüfatı texnologiyaları üzrə Fermerim.az, Pinaqro, Mənim Heyvanım layihələrinin inkişaf etdiricisiyəm.
            Rəqəmsal Ticarət: Qlobal bazara hədəflənən Electrolify.com və Trendim.store rəqəmsal mağazalarını Meta və TikTok reklamları vasitəsilə idarə edir, bu sahəyə yeni başlayanlar üçün mentorluq dəstəyi göstərirəm.
            Oyun İnkişafı: Baliyews Studio çətiri altında GET RICH OR RESET və Laser Grid kimi mobil oyun layihələri yaradıram.
            Hakaton Uğurları və Robotexnika: TransportTech AgTech Hakatonu (2026) 1-ci yer və 4444 AZN mükafat; SAF 2025 VEX V5 Robotexnika Zeta Team komandası ilə 1-ci yer və qızıl medal; ADAU Düşün Və Yarat (2026) 2-ci yer mentorluğu.
            Kibertəhlükəsizlik və Məzmun Yaradıcılığı: Kali Linux, Nmap, Metasploit və Burp Suite kimi alətlərlə ağ şlyapalı white-hat sınaqlar aparıram. YouTube-da The Systemic Mind, AzMoney, thebaliyev kanallarında avtomatlaşdırılmış məzmunlar hazırlayır, Blender və Figma ilə məşğul oluram. Self-Leadership: 21 Days to Reclaim Your Discipline kitabının müəllifiyəm.
            Fərdi İntizam: Alkoqol və tütündən tamamilə uzaq, gündəlik yüksək su istehlakı və calisthenics, insan psixologiyası və özünü-intizam mütaliəsi.
          </p>
        </article>
      </div>
    </section>
  );
}

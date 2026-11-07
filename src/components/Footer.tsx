'use client';

import Link from 'next/link';
import Image from 'next/image';
import { ShieldCheck, FileText, Smartphone, Mail } from 'lucide-react';
import { YouTubeIcon, InstagramIcon, GitHubIcon } from '@/components/Icons';
import { useLanguage } from '@/context/LanguageContext';
import LanguageSwitcher from '@/components/LanguageSwitcher';

export default function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="border-t border-amber-500/15 bg-[#06070a] text-slate-400 text-sm relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* Identity & Mission */}
          <div className="md:col-span-2 space-y-4">
            <Link href="/" prefetch={true} className="flex items-center space-x-3 group">
              <div className="relative w-11 h-11 rounded-xl bg-gradient-to-br from-amber-400 via-yellow-500 to-amber-600 p-[1.5px] shadow-[0_0_15px_rgba(212,175,55,0.3)]">
                <div className="w-full h-full bg-[#07080d] rounded-[10px] overflow-hidden flex items-center justify-center p-1">
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
                <span className="font-bold text-lg text-white">Atəş Balıyev</span>
                <p className="text-[11px] text-amber-400/80 font-medium">Atesh Studio • Prime Media Group</p>
              </div>
            </Link>

            <p className="text-xs sm:text-sm text-slate-400 max-w-md leading-relaxed">
              {t.footer.description}
            </p>

            <div className="flex items-center gap-2 pt-1 text-xs text-slate-300">
              <Mail className="w-3.5 h-3.5 text-amber-400" />
              <span>{t.footer.officialEmail}</span>
              <a
                href="mailto:atesbaliyev@gmail.com"
                className="text-amber-400 hover:text-amber-300 font-semibold transition underline underline-offset-2"
              >
                atesbaliyev@gmail.com
              </a>
            </div>

            <div className="flex items-center gap-3 pt-2">
              {/* Instagram */}
              <a
                href="https://instagram.com/atesh_baliyev?igsh=MXNseDRyeGNwZzZpNw=="
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="w-9 h-9 rounded-xl bg-[#0f121d] border border-pink-500/30 flex items-center justify-center text-pink-400 hover:text-pink-300 hover:border-pink-400 transition"
              >
                <InstagramIcon className="w-4 h-4" />
              </a>

              {/* YouTube */}
              <a
                href="https://youtube.com/@thebaliyev?si=qSM7KyDCpWuq_xsb"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="YouTube"
                className="w-9 h-9 rounded-xl bg-[#0f121d] border border-red-500/30 flex items-center justify-center text-red-400 hover:text-red-300 hover:border-red-400 transition"
              >
                <YouTubeIcon className="w-4 h-4" />
              </a>

              {/* GitHub */}
              <a
                href="https://github.com/AteshBaliyev"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="w-9 h-9 rounded-xl bg-[#0f121d] border border-slate-700 flex items-center justify-center text-slate-300 hover:text-white hover:border-amber-400 transition"
              >
                <GitHubIcon className="w-4 h-4" />
              </a>

              {/* Footer Language Switcher */}
              <div className="ml-2">
                <LanguageSwitcher size="sm" />
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-bold text-sm tracking-wide mb-4">Naviqasiya</h4>
            <ul className="space-y-2.5 text-xs">
              <li>
                <Link href="/#atesh-studio" className="hover:text-amber-400 transition">
                  Atesh Studio
                </Link>
              </li>
              <li>
                <Link href="/#haqqimda" className="hover:text-amber-400 transition">
                  Mənim Haqqımda
                </Link>
              </li>
              <li>
                <Link href="/#layiheler" className="hover:text-amber-400 transition">
                  Layihələr
                </Link>
              </li>
              <li>
                <Link href="/#youtube" className="hover:text-amber-400 transition">
                  Videolarım
                </Link>
              </li>
              <li>
                <Link href="/bloq" className="hover:text-amber-400 transition">
                  Məqalələr (Bloq)
                </Link>
              </li>
              <li>
                <Link href="/#elaqe" className="hover:text-amber-400 transition">
                  Əlaqə
                </Link>
              </li>
            </ul>
          </div>

          {/* Google Play & Developer Compliance Legal Routes */}
          <div>
            <h4 className="text-white font-bold text-sm tracking-wide mb-4 flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              <span>Google Play Uyğunluğu</span>
            </h4>
            <ul className="space-y-2.5 text-xs">
              <li>
                <Link href="/privacy" className="hover:text-amber-400 transition flex items-center gap-1.5">
                  <FileText className="w-3 h-3 text-slate-500" />
                  <span>{t.footer.privacyPolicy}</span>
                </Link>
              </li>
              <li>
                <Link href="/terms" className="hover:text-amber-400 transition flex items-center gap-1.5">
                  <FileText className="w-3 h-3 text-slate-500" />
                  <span>{t.footer.termsOfService}</span>
                </Link>
              </li>
              <li>
                <Link href="/data-deletion" className="hover:text-amber-400 transition flex items-center gap-1.5">
                  <ShieldCheck className="w-3 h-3 text-emerald-400" />
                  <span>{t.footer.dataDeletion}</span>
                </Link>
              </li>
              <li>
                <a
                  href="/app-ads.txt"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-amber-400 transition flex items-center gap-1.5 text-slate-500"
                >
                  <Smartphone className="w-3 h-3" />
                  <span>app-ads.txt (AdMob)</span>
                </a>
              </li>
              <li>
                <a
                  href="/llms.txt"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-amber-400 transition text-[11px] text-amber-500/80"
                >
                  llms.txt (AI Canonical Profile)
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-slate-900 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>© {new Date().getFullYear()} Atəş Balıyev (Atesh Studio). {t.footer.rights}</p>
          <div className="flex items-center gap-4">
            <span className="text-emerald-400/90 font-medium flex items-center gap-1">
              <ShieldCheck className="w-3.5 h-3.5" />
              {t.footer.securityVerified}
            </span>
            <span>•</span>
            <span className="text-amber-400/80 font-mono">atesh.site</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

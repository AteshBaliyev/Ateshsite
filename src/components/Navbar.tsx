'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Menu, X, MessageSquare, Send, Sparkles } from 'lucide-react';
import { InstagramIcon } from '@/components/Icons';
import { useLanguage } from '@/context/LanguageContext';
import LanguageSwitcher from '@/components/LanguageSwitcher';

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { t } = useLanguage();

  return (
    <header className="sticky top-0 z-50 w-full border-b border-amber-500/15 bg-[#07080c]/85 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo & Identity */}
          <Link href="/" prefetch={true} className="flex items-center space-x-3 group shrink-0">
            <div className="relative w-11 h-11 sm:w-12 sm:h-12 rounded-xl bg-gradient-to-br from-amber-400 via-amber-500 to-yellow-600 p-[1.5px] shadow-[0_0_18px_rgba(212,175,55,0.35)] transition group-hover:shadow-[0_0_24px_rgba(212,175,55,0.55)]">
              <div className="w-full h-full bg-[#07080d] rounded-[10px] overflow-hidden flex items-center justify-center p-1">
                <Image
                  src="/images/logo.png"
                  alt="Atesh Studio Official Logo"
                  width={44}
                  height={44}
                  priority
                  className="w-full h-full object-contain transition group-hover:scale-105"
                />
              </div>
            </div>
            <div>
              <div className="font-bold text-base sm:text-lg text-slate-100 tracking-wide flex items-center gap-1.5">
                <span>Atəş Balıyev</span>
                <Sparkles className="w-3.5 h-3.5 text-amber-400" />
              </div>
              <p className="text-[11px] sm:text-xs text-amber-400/90 font-medium">{t.nav.tagline}</p>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center space-x-1 lg:space-x-1.5 text-sm font-medium text-slate-300">
            <Link
              href="/"
              prefetch={true}
              className="px-3 py-2 rounded-lg hover:text-amber-400 hover:bg-amber-500/10 transition"
            >
              {t.nav.home}
            </Link>
            <Link
              href="/#atesh-studio"
              prefetch={true}
              className="px-3 py-2 rounded-lg text-amber-300 hover:text-amber-200 hover:bg-amber-500/15 transition font-semibold"
            >
              {t.nav.studio}
            </Link>
            <Link
              href="/#haqqimda"
              prefetch={true}
              className="px-3 py-2 rounded-lg hover:text-amber-400 hover:bg-amber-500/10 transition"
            >
              {t.nav.about}
            </Link>
            <Link
              href="/#layiheler"
              prefetch={true}
              className="px-3 py-2 rounded-lg hover:text-amber-400 hover:bg-amber-500/10 transition"
            >
              {t.nav.projects}
            </Link>
            <Link
              href="/#youtube"
              prefetch={true}
              className="px-3 py-2 rounded-lg hover:text-amber-400 hover:bg-amber-500/10 transition"
            >
              {t.nav.videos}
            </Link>
            <Link
              href="/bloq"
              prefetch={true}
              className="px-3 py-2 rounded-lg hover:text-amber-400 hover:bg-amber-500/10 transition"
            >
              {t.nav.blog}
            </Link>
            <Link
              href="/#elaqe"
              prefetch={true}
              className="px-3 py-2 rounded-lg hover:text-amber-400 hover:bg-amber-500/10 transition"
            >
              {t.nav.contact}
            </Link>
          </nav>

          {/* Desktop Right: Language Switcher + Social Pills */}
          <div className="hidden md:flex items-center space-x-2.5">
            {/* Standard Easy Language Switcher */}
            <LanguageSwitcher />

            {/* Direct Quick WhatsApp */}
            <a
              href="https://wa.me/994556422545"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp Direct"
              className="flex items-center gap-1.5 px-3 py-2 text-xs font-semibold text-emerald-400 bg-emerald-950/40 border border-emerald-500/30 rounded-lg hover:bg-emerald-900/40 hover:border-emerald-400 transition"
            >
              <MessageSquare className="w-3.5 h-3.5" />
              <span>{t.nav.whatsapp}</span>
            </a>
          </div>

          {/* Mobile Right: Language Switcher + Hamburger */}
          <div className="flex md:hidden items-center space-x-2">
            <LanguageSwitcher size="sm" />
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label={mobileMenuOpen ? 'Close Menu' : 'Open Menu'}
              aria-expanded={mobileMenuOpen}
              className="p-2 rounded-lg text-slate-300 hover:text-amber-400 hover:bg-amber-500/10 transition"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-amber-500/20 bg-[#0c0e18]/95 px-4 pt-3 pb-6 space-y-3">
          <nav className="flex flex-col space-y-1 text-base font-medium">
            <Link
              href="/"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2.5 rounded-lg text-slate-200 hover:bg-amber-500/15 hover:text-amber-400 transition"
            >
              {t.nav.home}
            </Link>
            <Link
              href="/#atesh-studio"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2.5 rounded-lg text-amber-300 font-bold hover:bg-amber-500/15 hover:text-amber-200 transition"
            >
              {t.nav.studio}
            </Link>
            <Link
              href="/#haqqimda"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2.5 rounded-lg text-slate-200 hover:bg-amber-500/15 hover:text-amber-400 transition"
            >
              {t.nav.about}
            </Link>
            <Link
              href="/#layiheler"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2.5 rounded-lg text-slate-200 hover:bg-amber-500/15 hover:text-amber-400 transition"
            >
              {t.nav.projects}
            </Link>
            <Link
              href="/#youtube"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2.5 rounded-lg text-slate-200 hover:bg-amber-500/15 hover:text-amber-400 transition"
            >
              {t.nav.videos}
            </Link>
            <Link
              href="/bloq"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2.5 rounded-lg text-slate-200 hover:bg-amber-500/15 hover:text-amber-400 transition"
            >
              {t.nav.blog}
            </Link>
            <Link
              href="/#elaqe"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2.5 rounded-lg text-slate-200 hover:bg-amber-500/15 hover:text-amber-400 transition"
            >
              {t.nav.contact}
            </Link>
          </nav>

          <div className="pt-3 border-t border-slate-800 grid grid-cols-3 gap-2">
            <a
              href="https://instagram.com/atesh_baliyev?igsh=MXNseDRyeGNwZzZpNw=="
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-1.5 py-2.5 px-2 text-xs font-semibold text-pink-400 bg-pink-950/40 border border-pink-500/30 rounded-lg"
            >
              <InstagramIcon className="w-3.5 h-3.5" />
              <span>{t.nav.instagram}</span>
            </a>
            <a
              href="https://wa.me/994556422545"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-1.5 py-2.5 px-2 text-xs font-semibold text-emerald-400 bg-emerald-950/40 border border-emerald-500/30 rounded-lg"
            >
              <MessageSquare className="w-3.5 h-3.5" />
              <span>{t.nav.whatsapp}</span>
            </a>
            <a
              href="https://t.me/Baliyews"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-1.5 py-2.5 px-2 text-xs font-semibold text-sky-400 bg-sky-950/40 border border-sky-500/30 rounded-lg"
            >
              <Send className="w-3.5 h-3.5" />
              <span>{t.nav.telegram}</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}

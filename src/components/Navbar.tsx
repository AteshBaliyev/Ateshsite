'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Menu, X, MessageSquare, Send, Sparkles } from 'lucide-react';
import { InstagramIcon } from '@/components/Icons';

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-amber-500/15 bg-[#07080c]/85 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo & Identity */}
          <Link href="/" prefetch={true} className="flex items-center space-x-3 group">
            <div className="relative w-12 h-12 rounded-xl bg-gradient-to-br from-amber-400 via-amber-500 to-yellow-600 p-[1.5px] shadow-[0_0_18px_rgba(212,175,55,0.35)] transition group-hover:shadow-[0_0_24px_rgba(212,175,55,0.55)]">
              <div className="w-full h-full bg-[#07080d] rounded-[10px] overflow-hidden flex items-center justify-center p-1">
                <Image
                  src="/images/logo.png"
                  alt="Atesh Studio Rəsmi Logo"
                  width={44}
                  height={44}
                  priority
                  className="w-full h-full object-contain transition group-hover:scale-105"
                />
              </div>
            </div>
            <div>
              <div className="font-bold text-lg text-slate-100 tracking-wide flex items-center gap-1.5">
                <span>Atəş Balıyev</span>
                <Sparkles className="w-3.5 h-3.5 text-amber-400" />
              </div>
              <p className="text-xs text-amber-400/90 font-medium">Atesh Studio • AI Systems</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-1 lg:space-x-2 text-sm font-medium text-slate-300">
            <Link
              href="/"
              prefetch={true}
              className="px-3.5 py-2 rounded-lg hover:text-amber-400 hover:bg-amber-500/10 transition"
            >
              Ana Səhifə
            </Link>
            <Link
              href="/#atesh-studio"
              prefetch={true}
              className="px-3.5 py-2 rounded-lg text-amber-300 hover:text-amber-200 hover:bg-amber-500/15 transition font-semibold"
            >
              Atesh Studio
            </Link>
            <Link
              href="/#haqqimda"
              prefetch={true}
              className="px-3.5 py-2 rounded-lg hover:text-amber-400 hover:bg-amber-500/10 transition"
            >
              Mənim Haqqımda
            </Link>
            <Link
              href="/#layiheler"
              prefetch={true}
              className="px-3.5 py-2 rounded-lg hover:text-amber-400 hover:bg-amber-500/10 transition"
            >
              Layihələr
            </Link>
            <Link
              href="/#youtube"
              prefetch={true}
              className="px-3.5 py-2 rounded-lg hover:text-amber-400 hover:bg-amber-500/10 transition"
            >
              Videolarım
            </Link>
            <Link
              href="/bloq"
              prefetch={true}
              className="px-3.5 py-2 rounded-lg hover:text-amber-400 hover:bg-amber-500/10 transition"
            >
              Bloq
            </Link>
            <Link
              href="/#elaqe"
              prefetch={true}
              className="px-3.5 py-2 rounded-lg hover:text-amber-400 hover:bg-amber-500/10 transition"
            >
              Əlaqə
            </Link>
          </nav>

          {/* Social CTAs (NO admin link in public header) */}
          <div className="hidden lg:flex items-center space-x-2.5">
            <a
              href="https://instagram.com/atesh_baliyev?igsh=MXNseDRyeGNwZzZpNw=="
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Atəş Balıyev Instagram profili"
              className="flex items-center gap-1.5 px-3 py-2 text-xs font-semibold text-pink-400 bg-pink-950/40 border border-pink-500/30 rounded-lg hover:bg-pink-900/40 hover:border-pink-400 transition"
              title="Instagram: @atesh_baliyev"
            >
              <InstagramIcon className="w-3.5 h-3.5" />
              <span>Instagram</span>
            </a>

            <a
              href="https://wa.me/994556422545"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Atəş Balıyev WhatsApp ilə əlaqə"
              className="flex items-center gap-1.5 px-3 py-2 text-xs font-semibold text-emerald-400 bg-emerald-950/40 border border-emerald-500/30 rounded-lg hover:bg-emerald-900/40 hover:border-emerald-400 transition"
            >
              <MessageSquare className="w-3.5 h-3.5" />
              <span>WhatsApp</span>
            </a>

            <a
              href="https://t.me/Baliyews"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Atəş Balıyev Telegram ilə əlaqə"
              className="flex items-center gap-1.5 px-3 py-2 text-xs font-semibold text-sky-400 bg-sky-950/40 border border-sky-500/30 rounded-lg hover:bg-sky-900/40 hover:border-sky-400 transition"
            >
              <Send className="w-3.5 h-3.5" />
              <span>Telegram</span>
            </a>
          </div>

          {/* Mobile menu trigger (No admin icon) */}
          <div className="flex md:hidden items-center space-x-2">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Naviqasiya menyusunu aç"
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
              Ana Səhifə
            </Link>
            <Link
              href="/#atesh-studio"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2.5 rounded-lg text-amber-300 font-bold hover:bg-amber-500/15 hover:text-amber-200 transition"
            >
              Atesh Studio
            </Link>
            <Link
              href="/#haqqimda"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2.5 rounded-lg text-slate-200 hover:bg-amber-500/15 hover:text-amber-400 transition"
            >
              Mənim Haqqımda
            </Link>
            <Link
              href="/#layiheler"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2.5 rounded-lg text-slate-200 hover:bg-amber-500/15 hover:text-amber-400 transition"
            >
              Layihələr
            </Link>
            <Link
              href="/#youtube"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2.5 rounded-lg text-slate-200 hover:bg-amber-500/15 hover:text-amber-400 transition"
            >
              Videolarım
            </Link>
            <Link
              href="/bloq"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2.5 rounded-lg text-slate-200 hover:bg-amber-500/15 hover:text-amber-400 transition"
            >
              Bloq
            </Link>
            <Link
              href="/#elaqe"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2.5 rounded-lg text-slate-200 hover:bg-amber-500/15 hover:text-amber-400 transition"
            >
              Əlaqə
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
              <span>Instagram</span>
            </a>
            <a
              href="https://wa.me/994556422545"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-1.5 py-2.5 px-2 text-xs font-semibold text-emerald-400 bg-emerald-950/40 border border-emerald-500/30 rounded-lg"
            >
              <MessageSquare className="w-3.5 h-3.5" />
              <span>WhatsApp</span>
            </a>
            <a
              href="https://t.me/Baliyews"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-1.5 py-2.5 px-2 text-xs font-semibold text-sky-400 bg-sky-950/40 border border-sky-500/30 rounded-lg"
            >
              <Send className="w-3.5 h-3.5" />
              <span>Telegram</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}

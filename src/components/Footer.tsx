import Link from 'next/link';
import Image from 'next/image';
import { MessageSquare, Send, Shield, FileText, Bot } from 'lucide-react';
import { YouTubeIcon, InstagramIcon } from '@/components/Icons';

export default function Footer() {
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
                    alt="ATESH SITE Logo"
                    width={40}
                    height={40}
                    className="w-full h-full object-contain"
                  />
                </div>
              </div>
              <div>
                <span className="font-bold text-lg text-white">Atəş Balıyev</span>
                <p className="text-[11px] text-amber-400/80 font-medium">Atesh Site • Prime Media Group</p>
              </div>
            </Link>

            <p className="text-xs sm:text-sm text-slate-400 max-w-md leading-relaxed">
              İKT tələbəsi, Prime Media Group rəhbəri və süni intellekt sistemləri quran AI Developer. SAF 2025 Qızıl Medal, Bondify, Fermerim.az və TransportTech hakaton qalibi.
            </p>

            <div className="flex items-center gap-3 pt-2">
              {/* Instagram */}
              <a
                href="https://instagram.com/atesh_baliyev?igsh=MXNseDRyeGNwZzZpNw=="
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Atəş Balıyev Instagram profili"
                className="w-9 h-9 rounded-lg bg-pink-950/40 border border-pink-500/30 text-pink-400 flex items-center justify-center hover:bg-pink-900/40 hover:border-pink-400 transition"
                title="Instagram: @atesh_baliyev"
              >
                <InstagramIcon className="w-4 h-4" />
              </a>

              {/* WhatsApp */}
              <a
                href="https://wa.me/994556422545"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Atəş Balıyev WhatsApp"
                className="w-9 h-9 rounded-lg bg-emerald-950/40 border border-emerald-500/30 text-emerald-400 flex items-center justify-center hover:bg-emerald-900/40 transition"
                title="WhatsApp ilə əlaqə"
              >
                <MessageSquare className="w-4 h-4" />
              </a>

              {/* Telegram */}
              <a
                href="https://t.me/Baliyews"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Atəş Balıyev Telegram"
                className="w-9 h-9 rounded-lg bg-sky-950/40 border border-sky-500/30 text-sky-400 flex items-center justify-center hover:bg-sky-900/40 transition"
                title="Telegram: @Baliyews"
              >
                <Send className="w-4 h-4" />
              </a>

              {/* Official YouTube Channel */}
              <a
                href="https://youtube.com/@thebaliyev?si=qSM7KyDCpWuq_xsb"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Atəş Balıyev Rəsmi YouTube (@thebaliyev)"
                className="w-9 h-9 rounded-lg bg-red-950/40 border border-red-500/30 text-red-400 flex items-center justify-center hover:bg-red-900/40 transition"
                title="Rəsmi YouTube: @thebaliyev"
              >
                <YouTubeIcon className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white text-xs font-bold uppercase tracking-wider mb-4">
              Naviqasiya
            </h4>
            <nav className="flex flex-col space-y-2.5 text-xs">
              <Link href="/#haqqimda" prefetch={true} className="hover:text-amber-400 transition">
                Mənim Haqqımda
              </Link>
              <Link href="/#layiheler" prefetch={true} className="hover:text-amber-400 transition">
                Layihələr & Uğurlar
              </Link>
              <Link href="/#youtube" prefetch={true} className="hover:text-amber-400 transition">
                Videolarım
              </Link>
              <Link href="/bloq" prefetch={true} className="hover:text-amber-400 transition">
                Bloq & Texnoloji Məqalələr
              </Link>
              <Link href="/#elaqe" prefetch={true} className="hover:text-amber-400 transition">
                Əlaqə & Əməkdaşlıq
              </Link>
            </nav>
          </div>

          {/* AI & SEO Protocols */}
          <div>
            <h4 className="text-white text-xs font-bold uppercase tracking-wider mb-4 flex items-center gap-1.5">
              <Bot className="w-3.5 h-3.5 text-amber-400" />
              AI SEO & İndekslənmə
            </h4>
            <div className="flex flex-col space-y-2 text-xs">
              <Link href="/llms.txt" target="_blank" className="hover:text-amber-400 transition flex items-center gap-1.5">
                <FileText className="w-3.5 h-3.5 text-amber-400" />
                <span>/llms.txt (Perplexity & GPT)</span>
              </Link>
              <Link href="/sitemap.xml" target="_blank" className="hover:text-amber-400 transition flex items-center gap-1.5">
                <FileText className="w-3.5 h-3.5 text-amber-400" />
                <span>/sitemap.xml</span>
              </Link>
              <Link href="/robots.txt" target="_blank" className="hover:text-amber-400 transition flex items-center gap-1.5">
                <FileText className="w-3.5 h-3.5 text-amber-400" />
                <span>/robots.txt</span>
              </Link>
              <Link href="/admin" className="hover:text-amber-400 transition flex items-center gap-1.5 pt-2">
                <Shield className="w-3.5 h-3.5 text-amber-400" />
                <span>Admin İdarəetmə Paneli</span>
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-6 border-t border-slate-900 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-4">
          <p>© 2026 Atəş Balıyev. Bütün hüquqlar qorunur. Prime Media Group.</p>
          <p className="flex items-center gap-1 text-slate-500">
            <span>Next.js 16 App Router & Tailwind CSS ilə hazırlanıb</span>
          </p>
        </div>
      </div>
    </footer>
  );
}

import Link from 'next/link';
import Image from 'next/image';
import { MessageSquare, Send, ShieldCheck, FileText, Smartphone, Mail } from 'lucide-react';
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
              AI Developer, Atesh Studio qurucusu və Prime Media Group rəhbəri. Google Play mobil tətbiqləri (Bondify, TələbəX), oyunlar (E5cape), SAF 2025 Qızıl Medal və TransportTech hakaton qalibi.
            </p>

            <div className="flex items-center gap-2 pt-1 text-xs text-slate-300">
              <Mail className="w-3.5 h-3.5 text-amber-400" />
              <span>Official Developer Contact:</span>
              <a
                href="mailto:ates.baliyev.01@gmail.com"
                className="text-amber-400 hover:text-amber-300 font-semibold transition underline underline-offset-2"
              >
                ates.baliyev.01@gmail.com
              </a>
            </div>

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
              <Link href="/#atesh-studio" prefetch={true} className="text-amber-300 hover:text-amber-200 transition font-medium flex items-center gap-1.5">
                <Smartphone className="w-3.5 h-3.5" />
                <span>Atesh Studio (Apps & Games)</span>
              </Link>
              <Link href="/#haqqimda" prefetch={true} className="hover:text-amber-400 transition">
                Mənim Haqqımda
              </Link>
              <Link href="/#layiheler" prefetch={true} className="hover:text-amber-400 transition">
                Layihələr & Uğurlar
              </Link>
              <Link href="/#youtube" prefetch={true} className="hover:text-amber-400 transition">
                Videolarım (@thebaliyev)
              </Link>
              <Link href="/bloq" prefetch={true} className="hover:text-amber-400 transition">
                Bloq & Texnoloji Məqalələr
              </Link>
              <Link href="/#elaqe" prefetch={true} className="hover:text-amber-400 transition">
                Əlaqə & Əməkdaşlıq
              </Link>
            </nav>
          </div>

          {/* Legal & Google Play Compliance */}
          <div>
            <h4 className="text-white text-xs font-bold uppercase tracking-wider mb-4 flex items-center gap-1.5">
              <ShieldCheck className="w-3.5 h-3.5 text-amber-400" />
              Hüquqi & Google Play
            </h4>
            <div className="flex flex-col space-y-2.5 text-xs">
              <Link
                href="/privacy"
                prefetch={true}
                className="hover:text-amber-400 transition font-medium text-slate-300"
              >
                Privacy Policy (Məxfilik Siyasəti)
              </Link>
              <Link
                href="/terms"
                prefetch={true}
                className="hover:text-amber-400 transition font-medium text-slate-300"
              >
                Terms of Service (İstifadə Şərtləri)
              </Link>
              <Link
                href="/data-deletion"
                prefetch={true}
                className="hover:text-amber-400 transition font-medium text-slate-300"
              >
                Data Deletion (Məlumatların Silinməsi)
              </Link>
              <div className="pt-2 border-t border-slate-900 flex flex-col space-y-1.5 text-[11px] text-slate-400">
                <Link href="/llms.txt" target="_blank" className="hover:text-amber-400 transition flex items-center gap-1">
                  <FileText className="w-3 h-3 text-amber-400" />
                  <span>/llms.txt (AI Knowledge Base)</span>
                </Link>
                <Link href="/app-ads.txt" target="_blank" className="hover:text-amber-400 transition flex items-center gap-1">
                  <FileText className="w-3 h-3 text-amber-400" />
                  <span>/app-ads.txt (AdMob Verification)</span>
                </Link>
                <Link href="/sitemap.xml" target="_blank" className="hover:text-amber-400 transition flex items-center gap-1">
                  <FileText className="w-3 h-3 text-amber-400" />
                  <span>/sitemap.xml</span>
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-6 border-t border-slate-900 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-4">
          <p>© 2026 Atəş Balıyev (Atesh Baliyev). Bütün hüquqlar qorunur. Atesh Studio & Prime Media Group.</p>
          <div className="flex items-center gap-4 text-[11px]">
            <Link href="/privacy" className="hover:text-amber-400 transition">Privacy Policy</Link>
            <span>•</span>
            <Link href="/terms" className="hover:text-amber-400 transition">Terms of Service</Link>
            <span>•</span>
            <Link href="/data-deletion" className="hover:text-amber-400 transition">Data Safety</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

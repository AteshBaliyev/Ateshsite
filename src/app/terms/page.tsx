import { Metadata } from 'next';
import Link from 'next/link';
import {
  FileText,
  ArrowLeft,
  Mail,
  ShieldCheck,
  Scale,
  CheckCircle2,
  AlertCircle
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'Terms of Service | Atesh Studio & Applications',
  description:
    'Official Terms of Service for Atesh Studio mobile applications, games, and website (atesh.site) operated by Atesh Baliyev.',
  alternates: {
    canonical: 'https://atesh.site/terms',
  },
};

export default function TermsOfServicePage() {
  return (
    <div className="min-h-screen bg-[#07080c] text-slate-200 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Back navigation */}
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-xs font-bold text-amber-400 hover:text-amber-300 transition mb-8 bg-amber-500/10 border border-amber-500/20 px-3.5 py-1.5 rounded-xl"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Ana Səhifəyə Qayıt (Back to Home)</span>
        </Link>

        {/* Header Banner */}
        <header className="p-8 sm:p-10 rounded-3xl bg-gradient-to-br from-[#0e111d] via-[#121528] to-[#0a0c16] border border-amber-500/30 shadow-2xl mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-300 text-xs font-semibold mb-4">
            <Scale className="w-4 h-4 text-amber-400" />
            <span>Legal Agreement</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight leading-tight">
            Terms of Service — <span className="gold-gradient-text">Atesh Studio</span>
          </h1>
          <p className="mt-3 text-sm text-slate-300 leading-relaxed">
            Please read these Terms of Service carefully before using any mobile applications (Bondify, E5cape, TələbəX, GET RICH OR RESET, Laser Grid) or website services operated by Atesh Studio.
          </p>
          <div className="mt-4 pt-4 border-t border-slate-800 flex flex-wrap items-center justify-between text-xs text-slate-400 gap-2">
            <span><strong>Effective Date:</strong> November 2026</span>
            <span><strong>Governing Law:</strong> Republic of Azerbaijan</span>
            <span><strong>Developer:</strong> Atesh Studio</span>
          </div>
        </header>

        {/* Terms Sections */}
        <article className="space-y-10 text-sm leading-relaxed text-slate-300">
          {/* Section 1 */}
          <section className="p-6 rounded-2xl bg-[#0b0d17] border border-slate-800/80">
            <h2 className="text-xl font-bold text-white mb-3 flex items-center gap-2">
              <span className="w-7 h-7 rounded-lg bg-amber-500/10 text-amber-400 flex items-center justify-center text-xs font-bold border border-amber-500/20">1</span>
              Acceptance of Terms
            </h2>
            <p>
              By downloading, installing, accessing, or using any mobile application, game, or web service provided by <strong>Atesh Studio</strong> (founded by <strong>Atəş Balıyev / Atesh Baliyev</strong>), you signify your unconditional acceptance of and agreement to be bound by these Terms of Service. If you do not agree to these terms, do not download or use our services.
            </p>
          </section>

          {/* Section 2 */}
          <section className="p-6 rounded-2xl bg-[#0b0d17] border border-slate-800/80">
            <h2 className="text-xl font-bold text-white mb-3 flex items-center gap-2">
              <span className="w-7 h-7 rounded-lg bg-amber-500/10 text-amber-400 flex items-center justify-center text-xs font-bold border border-amber-500/20">2</span>
              User Accounts & Safety
            </h2>
            <p className="mb-3">
              Certain features (such as in Bondify or TələbəX) may require an account. You agree to:
            </p>
            <ul className="list-disc list-inside space-y-1.5 text-xs sm:text-sm pl-2">
              <li>Provide accurate, current, and truthful information during registration.</li>
              <li>Maintain the confidentiality of your login credentials and authentication tokens.</li>
              <li>Notify us immediately of any unauthorized access or security breach.</li>
              <li>Refrain from impersonating any person, campus organization, or entity.</li>
            </ul>
          </section>

          {/* Section 3 */}
          <section className="p-6 rounded-2xl bg-[#0b0d17] border border-slate-800/80">
            <h2 className="text-xl font-bold text-white mb-3 flex items-center gap-2">
              <span className="w-7 h-7 rounded-lg bg-amber-500/10 text-amber-400 flex items-center justify-center text-xs font-bold border border-amber-500/20">3</span>
              Intellectual Property Rights
            </h2>
            <p>
              All software, source code, game mechanics, 3D graphics, user interfaces, branding, trademarks (including Atesh Studio, Bondify, E5cape, and TələbəX), and multimedia content are the exclusive intellectual property of Atesh Studio and Atəş Balıyev. Users receive a limited, revocable, non-exclusive, non-transferable license to use the apps for personal, non-commercial entertainment and communication purposes.
            </p>
          </section>

          {/* Section 4 */}
          <section className="p-6 rounded-2xl bg-[#0b0d17] border border-slate-800/80">
            <h2 className="text-xl font-bold text-white mb-3 flex items-center gap-2">
              <span className="w-7 h-7 rounded-lg bg-amber-500/10 text-amber-400 flex items-center justify-center text-xs font-bold border border-amber-500/20">4</span>
              Acceptable Use & Community Guidelines
            </h2>
            <p className="mb-2">You agree NOT to engage in any of the following prohibited behaviors:</p>
            <ul className="list-disc list-inside space-y-1.5 text-xs sm:text-sm pl-2">
              <li>Posting hateful, harassing, abusive, defamatory, or unlawful content in community channels.</li>
              <li>Attempting to reverse-engineer, decompile, or tamper with app security mechanisms.</li>
              <li>Using automated bots, scrapers, or exploits to manipulate in-game scores or coin economies.</li>
              <li>Disrupting server infrastructure or interfering with other users&apos; access.</li>
            </ul>
          </section>

          {/* Section 5 */}
          <section className="p-6 rounded-2xl bg-[#0b0d17] border border-slate-800/80">
            <h2 className="text-xl font-bold text-white mb-3 flex items-center gap-2">
              <span className="w-7 h-7 rounded-lg bg-amber-500/10 text-amber-400 flex items-center justify-center text-xs font-bold border border-amber-500/20">5</span>
              In-App Purchases & Virtual Items
            </h2>
            <p>
              Where in-app purchases or virtual tokens are available, all financial transactions are processed securely through official platform billing systems (such as <strong>Google Play In-App Billing</strong> or official Telegram Stars). Virtual items hold no real-world monetary value, cannot be redeemed for cash, and are non-refundable except where mandated by platform policy or applicable law.
            </p>
          </section>

          {/* Section 6 */}
          <section className="p-6 rounded-2xl bg-[#0b0d17] border border-slate-800/80">
            <h2 className="text-xl font-bold text-white mb-3 flex items-center gap-2">
              <span className="w-7 h-7 rounded-lg bg-amber-500/10 text-amber-400 flex items-center justify-center text-xs font-bold border border-amber-500/20">6</span>
              Limitation of Liability & Disclaimer of Warranties
            </h2>
            <p>
              Atesh Studio applications and services are provided on an &quot;AS IS&quot; and &quot;AS AVAILABLE&quot; basis without warranties of any kind, whether express or implied. To the maximum extent permitted by applicable law, Atesh Studio and its founder shall not be liable for any indirect, incidental, punitive, or consequential damages resulting from the use or inability to use our services.
            </p>
          </section>

          {/* Section 7 */}
          <section className="p-6 rounded-2xl bg-[#0b0d17] border border-slate-800/80">
            <h2 className="text-xl font-bold text-white mb-3 flex items-center gap-2">
              <span className="w-7 h-7 rounded-lg bg-amber-500/10 text-amber-400 flex items-center justify-center text-xs font-bold border border-amber-500/20">7</span>
              Termination & Contact
            </h2>
            <p className="mb-4">
              We reserve the right to suspend or terminate accounts that breach these terms. If you have any inquiries regarding these terms, please contact:
            </p>
            <div className="p-4 rounded-xl bg-[#0e111d] border border-amber-500/25 space-y-1.5 text-xs sm:text-sm">
              <p><strong className="text-white">Studio:</strong> Atesh Studio</p>
              <p><strong className="text-white">Founder:</strong> Atəş Balıyev (Atesh Baliyev)</p>
              <p>
                <strong className="text-white">Email:</strong>{' '}
                <a href="mailto:ates.baliyev.01@gmail.com" className="text-amber-400 hover:underline font-bold">
                  ates.baliyev.01@gmail.com
                </a>
              </p>
              <p><strong className="text-white">Location:</strong> Ganja, Azerbaijan</p>
            </div>
          </section>
        </article>

        {/* Azerbaijani Summary */}
        <div className="mt-14 pt-10 border-t border-slate-800">
          <h3 className="text-lg font-bold text-amber-300 mb-3 flex items-center gap-2">
            <FileText className="w-5 h-5 text-amber-400" />
            İstifadə Şərtləri Xülasəsi (Azərbaycan Dilində)
          </h3>
          <div className="p-6 rounded-2xl bg-[#0a0c14] border border-slate-800 text-xs sm:text-sm text-slate-300 space-y-3 leading-relaxed">
            <p>
              Atesh Studio tərəfindən hazırlanmış tətbiqlərdən və oyunlardan istifadə edərək bu qaydaları qəbul etmiş olursunuz.
            </p>
            <p>
              Bütün proqram təminatı, dizayn və brend elementləri Atesh Studio və Atəş Balıyevə məxsusdur. İstifadəçilərdən cəmiyyət qaydalarına riayət etmək və xidmətlərdən qanuni məqsədlər üçün istifadə etmək tələb olunur.
            </p>
            <p>
              Suallarınız və ya rəsmi sorğularınız üçün əlaqə: <strong className="text-amber-300">ates.baliyev.01@gmail.com</strong>.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

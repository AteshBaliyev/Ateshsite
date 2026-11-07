import { Metadata } from 'next';
import Link from 'next/link';
import {
  ShieldCheck,
  ArrowLeft,
  Mail,
  Lock,
  Smartphone,
  CheckCircle2,
  FileText,
  AlertCircle,
  HelpCircle,
  ExternalLink
} from 'lucide-react';
import { SITE_CONFIG } from '@/lib/seo';

export const metadata: Metadata = {
  title: 'Privacy Policy | Atesh Studio & Mobile Applications',
  description:
    'Official Privacy Policy for Atesh Studio mobile applications and games (Bondify, E5cape, TələbəX, and all associated software) by Atesh Baliyev.',
  alternates: {
    canonical: 'https://atesh.site/privacy',
  },
};

export default function PrivacyPolicyPage() {
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

        {/* Header Header Banner */}
        <header className="p-8 sm:p-10 rounded-3xl bg-gradient-to-br from-[#0e111d] via-[#121528] to-[#0a0c16] border border-amber-500/30 shadow-2xl mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-300 text-xs font-semibold mb-4">
            <ShieldCheck className="w-4 h-4 text-amber-400" />
            <span>Google Play Developer Policy Compliant</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight leading-tight">
            Privacy Policy for <span className="gold-gradient-text">Atesh Studio</span> Applications & Games
          </h1>
          <p className="mt-3 text-sm text-slate-300 leading-relaxed">
            Covers <strong>Bondify</strong>, <strong>E5cape</strong>, <strong>TələbəX</strong>, <strong>GET RICH OR RESET</strong>, <strong>Laser Grid</strong>, and all digital products operated by Atesh Studio (Founder & Developer: Atəş Balıyev).
          </p>
          <div className="mt-4 pt-4 border-t border-slate-800 flex flex-wrap items-center justify-between text-xs text-slate-400 gap-2">
            <span><strong>Effective Date:</strong> November 2026</span>
            <span><strong>Last Updated:</strong> November 2026</span>
            <span><strong>Developer:</strong> Atesh Studio</span>
          </div>
        </header>

        {/* Quick Language Note */}
        <div className="mb-10 p-4 rounded-2xl bg-amber-500/10 border border-amber-500/20 flex items-start gap-3 text-xs text-amber-200/90 leading-relaxed">
          <HelpCircle className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
          <div>
            <strong>Dil Qeydi / Language Notice:</strong> Bu sənəd Google Play Store və beynəlxalq yoxlayıcıların tələblərinə tam uyğun olaraq rəsmi ingilis dilində tərtib edilmiş, aşağıda Azərbaycan dilində xülasəsi əlavə olunmuşdur.
          </div>
        </div>

        {/* Policy Body in English */}
        <article className="space-y-10 text-sm leading-relaxed text-slate-300">
          {/* Section 1 */}
          <section className="p-6 rounded-2xl bg-[#0b0d17] border border-slate-800/80">
            <h2 className="text-xl font-bold text-white mb-3 flex items-center gap-2">
              <span className="w-7 h-7 rounded-lg bg-amber-500/10 text-amber-400 flex items-center justify-center text-xs font-bold border border-amber-500/20">1</span>
              Introduction & Scope
            </h2>
            <p className="mb-3">
              This Privacy Policy applies to all mobile applications, games, and digital services developed and published by <strong>Atesh Studio</strong> (founded by <strong>Atəş Balıyev / Atesh Baliyev</strong>), including but not limited to:
            </p>
            <ul className="list-disc list-inside space-y-1 text-slate-200 mb-4 pl-2">
              <li><strong>Bondify</strong> (Social discovery, connection platform & Telegram Mini App)</li>
              <li><strong>E5cape</strong> (3D endless arcade runner mobile game)</li>
              <li><strong>TələbəX</strong> (Interactive campus & student community app)</li>
              <li><strong>GET RICH OR RESET & Laser Grid</strong> (Arcade & reflex mobile games)</li>
              <li>Official website: <Link href="/" className="text-amber-400 hover:underline">atesh.site</Link></li>
            </ul>
            <p>
              We are committed to protecting your privacy and ensuring your personal information is handled in a safe, transparent, and responsible manner in accordance with Google Play Developer Program Policies, GDPR, and applicable privacy laws.
            </p>
          </section>

          {/* Section 2 */}
          <section className="p-6 rounded-2xl bg-[#0b0d17] border border-slate-800/80">
            <h2 className="text-xl font-bold text-white mb-3 flex items-center gap-2">
              <span className="w-7 h-7 rounded-lg bg-amber-500/10 text-amber-400 flex items-center justify-center text-xs font-bold border border-amber-500/20">2</span>
              Information We Collect
            </h2>
            <div className="space-y-4">
              <div>
                <h3 className="font-semibold text-white mb-1">A. Information You Provide Voluntarily</h3>
                <p className="text-xs text-slate-300">
                  When creating an account or using community features (such as in Bondify or TələbəX), you may provide your display name, email address, avatar photo, campus affiliation, or profile bio.
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-white mb-1">B. Device & Diagnostic Data</h3>
                <p className="text-xs text-slate-300">
                  To ensure app stability and performance, we may automatically collect non-personally identifiable diagnostic metrics: device model, operating system version, crash stack traces, and anonymous performance indicators.
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-white mb-1">C. Gameplay & Session Data</h3>
                <p className="text-xs text-slate-300">
                  In games like E5cape or Laser Grid, high scores, levels reached, and gameplay achievements are stored locally on the device or synced to user accounts when cloud save is active.
                </p>
              </div>
            </div>
          </section>

          {/* Section 3 */}
          <section className="p-6 rounded-2xl bg-[#0b0d17] border border-slate-800/80">
            <h2 className="text-xl font-bold text-white mb-3 flex items-center gap-2">
              <span className="w-7 h-7 rounded-lg bg-amber-500/10 text-amber-400 flex items-center justify-center text-xs font-bold border border-amber-500/20">3</span>
              Third-Party SDKs & Services
            </h2>
            <p className="mb-3">
              Our mobile applications may integrate trusted third-party SDKs that process limited data according to their own privacy standards:
            </p>
            <div className="space-y-3">
              <div className="p-3.5 rounded-xl bg-[#0e111d] border border-slate-800 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                <div>
                  <strong className="text-white">Google Play Services</strong>
                  <p className="text-xs text-slate-400">Authentication, in-app purchases, and core system functionality.</p>
                </div>
                <a
                  href="https://policies.google.com/privacy"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs text-amber-400 flex items-center gap-1 hover:underline"
                >
                  <span>Google Privacy Policy</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>

              <div className="p-3.5 rounded-xl bg-[#0e111d] border border-slate-800 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                <div>
                  <strong className="text-white">Google AdMob</strong>
                  <p className="text-xs text-slate-400">Serves non-personalized or personalized ads with user consent.</p>
                </div>
                <a
                  href="https://support.google.com/admob/answer/6128543"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs text-amber-400 flex items-center gap-1 hover:underline"
                >
                  <span>AdMob Policy</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>

              <div className="p-3.5 rounded-xl bg-[#0e111d] border border-slate-800 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                <div>
                  <strong className="text-white">Google Analytics for Firebase & Crashlytics</strong>
                  <p className="text-xs text-slate-400">Anonymous crash reporting and performance metrics.</p>
                </div>
                <a
                  href="https://firebase.google.com/support/privacy"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs text-amber-400 flex items-center gap-1 hover:underline"
                >
                  <span>Firebase Privacy</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </div>
          </section>

          {/* Section 4 */}
          <section className="p-6 rounded-2xl bg-[#0b0d17] border border-slate-800/80">
            <h2 className="text-xl font-bold text-white mb-3 flex items-center gap-2">
              <span className="w-7 h-7 rounded-lg bg-amber-500/10 text-amber-400 flex items-center justify-center text-xs font-bold border border-amber-500/20">4</span>
              Application Security Architecture (AppSec) & Encryption
            </h2>
            <p className="mb-3">
              We employ strict industry-standard security controls across Atesh Studio infrastructure:
            </p>
            <ul className="list-disc list-inside space-y-1.5 text-slate-300 text-xs sm:text-sm pl-2">
              <li>All client-server communications are encrypted in transit via modern <strong>HTTPS / TLS 1.3</strong> protocols.</li>
              <li>Authentication tokens are securely hashed and stored in encrypted keystores.</li>
              <li>Database access is isolated with strict role-based access control and continuous monitoring.</li>
              <li>We never sell, rent, or trade your personal user data to any external broker or unauthorized party.</li>
            </ul>
          </section>

          {/* Section 5 */}
          <section className="p-6 rounded-2xl bg-[#0b0d17] border border-slate-800/80">
            <h2 className="text-xl font-bold text-white mb-3 flex items-center gap-2">
              <span className="w-7 h-7 rounded-lg bg-amber-500/10 text-amber-400 flex items-center justify-center text-xs font-bold border border-amber-500/20">5</span>
              Children&apos;s Privacy (COPPA & GDPR-K Compliance)
            </h2>
            <p className="mb-3">
              Our general applications (such as Bondify and TələbəX) are designed for general audiences and young adults and are not directed to children under 13 years of age. In Bondify, we implement a dedicated <strong>Dual Age Mode</strong> to safeguard youth and provide separated age-appropriate environments.
            </p>
            <p>
              We do not knowingly collect personal identifiable information from children under 13. If you become aware that a child has provided personal information without parental consent, please contact us at <a href="mailto:ates.baliyev.01@gmail.com" className="text-amber-400 underline">ates.baliyev.01@gmail.com</a>, and we will delete the data immediately.
            </p>
          </section>

          {/* Section 6 */}
          <section className="p-6 rounded-2xl bg-[#0b0d17] border border-slate-800/80">
            <h2 className="text-xl font-bold text-white mb-3 flex items-center gap-2">
              <span className="w-7 h-7 rounded-lg bg-amber-500/10 text-amber-400 flex items-center justify-center text-xs font-bold border border-amber-500/20">6</span>
              User Rights & Data Deletion
            </h2>
            <p className="mb-3">
              In full compliance with Google Play Data Safety requirements and global privacy standards, you have the right to request the complete deletion of your account and associated personal data at any time.
            </p>
            <div className="p-4 rounded-xl bg-amber-500/10 border border-amber-500/30 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div>
                <strong className="text-amber-300 block">Need to delete your account or data?</strong>
                <p className="text-xs text-slate-300 mt-0.5">
                  Visit our dedicated Data Deletion Request page for instant in-app and web instructions. Requests are executed within a maximum of 7 business days.
                </p>
              </div>
              <Link
                href="/data-deletion"
                className="gold-button px-4 py-2 rounded-xl text-xs font-bold whitespace-nowrap shrink-0"
              >
                Go to Data Deletion Page
              </Link>
            </div>
          </section>

          {/* Section 7 */}
          <section className="p-6 rounded-2xl bg-[#0b0d17] border border-slate-800/80">
            <h2 className="text-xl font-bold text-white mb-3 flex items-center gap-2">
              <span className="w-7 h-7 rounded-lg bg-amber-500/10 text-amber-400 flex items-center justify-center text-xs font-bold border border-amber-500/20">7</span>
              Device Permissions
            </h2>
            <p className="mb-2">
              Depending on the app, we may request certain permissions only when explicitly needed for user-initiated actions:
            </p>
            <ul className="list-disc list-inside space-y-1 text-xs text-slate-300 pl-2">
              <li><strong>INTERNET:</strong> Required for server synchronization and cloud updates.</li>
              <li><strong>POST_NOTIFICATIONS:</strong> Optional; to deliver chat alerts and in-game updates (can be toggled off at any time).</li>
              <li><strong>CAMERA / STORAGE:</strong> Optional; solely used when you choose to upload a profile avatar or community picture.</li>
            </ul>
          </section>

          {/* Section 8 */}
          <section className="p-6 rounded-2xl bg-[#0b0d17] border border-slate-800/80">
            <h2 className="text-xl font-bold text-white mb-3 flex items-center gap-2">
              <span className="w-7 h-7 rounded-lg bg-amber-500/10 text-amber-400 flex items-center justify-center text-xs font-bold border border-amber-500/20">8</span>
              Contact Developer
            </h2>
            <p className="mb-4">
              If you have any questions, concerns, or privacy inquiries regarding this Privacy Policy or any Atesh Studio app, please contact:
            </p>
            <div className="p-4 rounded-xl bg-[#0e111d] border border-amber-500/25 space-y-2 text-xs sm:text-sm">
              <p><strong className="text-white">Developer Studio:</strong> Atesh Studio</p>
              <p><strong className="text-white">Founder & Lead Developer:</strong> Atəş Balıyev (Atesh Baliyev)</p>
              <p>
                <strong className="text-white">Official Support Email:</strong>{' '}
                <a href="mailto:ates.baliyev.01@gmail.com" className="text-amber-400 hover:underline font-bold">
                  ates.baliyev.01@gmail.com
                </a>
              </p>
              <p><strong className="text-white">Location:</strong> Ganja, Azerbaijan</p>
              <p><strong className="text-white">Official Website:</strong> <a href="https://atesh.site" className="text-amber-400 hover:underline">https://atesh.site</a></p>
            </div>
          </section>
        </article>

        {/* Azerbaijani Summary Section */}
        <div className="mt-14 pt-10 border-t border-slate-800">
          <h3 className="text-lg font-bold text-amber-300 mb-3 flex items-center gap-2">
            <FileText className="w-5 h-5 text-amber-400" />
            Məxfilik Siyasəti Xülasəsi (Azərbaycan Dilində)
          </h3>
          <div className="p-6 rounded-2xl bg-[#0a0c14] border border-slate-800 text-xs sm:text-sm text-slate-300 space-y-3 leading-relaxed">
            <p>
              Atesh Studio (təsisçi: Atəş Balıyev) olaraq Bondify, E5cape, TələbəX, GET RICH OR RESET və digər tətbiqlərimizdə istifadəçi məlumatlarının məxfiliyinə tam zəmanət veririk.
            </p>
            <p>
              Toplanan məlumatlar yalnız tətbiqlərin düzgün işləməsi və sabitliyi üçün istifadə edilir, heç bir halda üçüncü şəxslərə satılmır və ya ötürülmür. İstifadəçilər öz hesablarını və şəxsi məlumatlarını istənilən vaxt tətbiq daxilindən və ya <Link href="/data-deletion" className="text-amber-400 underline">Məlumatların Silinməsi Səhifəsi</Link> vasitəsilə 7 iş günü ərzində tam silə bilərlər.
            </p>
            <p>
              Hər hansı hüquqi və ya texniki sualınız yaranarsa, rəsmi e-poçt ünvanımız vasitəsilə bizimlə əlaqə saxlaya bilərsiniz: <strong className="text-amber-300">ates.baliyev.01@gmail.com</strong>.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

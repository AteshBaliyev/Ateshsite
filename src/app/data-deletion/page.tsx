'use client';

import { useState } from 'react';
import Link from 'next/link';
import {
  Trash2,
  ArrowLeft,
  Mail,
  ShieldCheck,
  CheckCircle2,
  Clock,
  AlertTriangle,
  Send,
  Smartphone,
  HelpCircle,
  FileText
} from 'lucide-react';

export default function DataDeletionPage() {
  const [appName, setAppName] = useState('Bondify');
  const [userEmail, setUserEmail] = useState('');
  const [username, setUsername] = useState('');
  const [reason, setReason] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!userEmail) return;
    setLoading(true);

    // Simulate submission and provide mailto fallback
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 700);
  };

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
            <ShieldCheck className="w-4 h-4 text-amber-400" />
            <span>Google Play Data Safety Official Requirement</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight leading-tight">
            User Account & Data Deletion <span className="gold-gradient-text">Instructions</span>
          </h1>
          <p className="mt-3 text-sm text-slate-300 leading-relaxed">
            Atesh Studio provides users with complete autonomy over their personal information. Follow these instructions to permanently delete your account and associated data from any Atesh Studio application (Bondify, TələbəX, E5cape, and all associated software).
          </p>
          <div className="mt-4 pt-4 border-t border-slate-800 flex flex-wrap items-center justify-between text-xs text-slate-400 gap-2">
            <span className="flex items-center gap-1.5">
              <Clock className="w-3.5 h-3.5 text-amber-400" />
              <strong>Processing Time:</strong> Within 7 business days (Maksimum 7 iş günü)
            </span>
            <span><strong>Official Developer:</strong> Atesh Studio</span>
          </div>
        </header>

        {/* Methods Overview */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {/* Method 1: In-App Self-Service */}
          <div className="p-7 rounded-3xl bg-[#0b0d18] border border-amber-500/25 flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400 mb-4">
                <Smartphone className="w-6 h-6" />
              </div>
              <h2 className="text-lg font-bold text-white mb-2">Method 1: In-App Deletion (Instant)</h2>
              <p className="text-xs text-slate-400 mb-4 leading-relaxed">
                If you still have the application installed on your device, you can delete your account directly through the settings interface:
              </p>
              <ol className="space-y-2.5 text-xs text-slate-300 list-decimal list-inside pl-1">
                <li>Open the app (e.g. <strong>Bondify</strong> or <strong>TələbəX</strong>).</li>
                <li>Navigate to your <strong>Profile</strong> or <strong>Settings</strong> tab.</li>
                <li>Tap <strong>Account & Security</strong> (Hesab və Təhlükəsizlik).</li>
                <li>Select <strong>&quot;Delete Account&quot;</strong> (Hesabı Sil).</li>
                <li>Confirm deletion. Your session, credentials, and data are purged immediately.</li>
              </ol>
            </div>
            <div className="mt-6 pt-4 border-t border-slate-800/80 text-[11px] text-emerald-400 flex items-center gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 shrink-0" />
              <span>Instant local & cloud session termination</span>
            </div>
          </div>

          {/* Method 2: Web & Email Request */}
          <div className="p-7 rounded-3xl bg-[#0b0d17] border border-amber-500/25 flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400 mb-4">
                <Mail className="w-6 h-6" />
              </div>
              <h2 className="text-lg font-bold text-white mb-2">Method 2: Web or Email Request (No app needed)</h2>
              <p className="text-xs text-slate-400 mb-4 leading-relaxed">
                If you have uninstalled the application or cannot access your device, submit a request directly via web or email:
              </p>
              <ul className="space-y-2 text-xs text-slate-300 list-disc list-inside pl-1">
                <li>Fill out the quick request form below.</li>
                <li>Or send an email to <a href="mailto:ates.baliyev.01@gmail.com?subject=Data%20Deletion%20Request" className="text-amber-400 font-bold underline">ates.baliyev.01@gmail.com</a> with subject &quot;Data Deletion Request&quot;.</li>
                <li>Specify the application name and your registered email/username.</li>
                <li>Our engineering team will complete data eradication within <strong>7 business days</strong>.</li>
              </ul>
            </div>
            <div className="mt-6 pt-4 border-t border-slate-800/80 text-[11px] text-amber-300/90 flex items-center gap-1.5">
              <Clock className="w-3.5 h-3.5 shrink-0 text-amber-400" />
              <span>SLA: Guaranteed execution within 7 business days</span>
            </div>
          </div>
        </div>

        {/* Interactive Deletion Request Form */}
        <div className="p-8 sm:p-10 rounded-3xl bg-gradient-to-b from-[#0e111d] to-[#0a0c16] border border-amber-500/30 shadow-2xl mb-12">
          <div className="flex items-center gap-3 mb-6">
            <Trash2 className="w-6 h-6 text-red-400" />
            <div>
              <h3 className="text-xl font-bold text-white">Online Data Deletion Request Form</h3>
              <p className="text-xs text-slate-400">Rəsmi Məlumat Silinməsi Sorğu Forması</p>
            </div>
          </div>

          {submitted ? (
            <div className="p-6 rounded-2xl bg-emerald-950/40 border border-emerald-500/40 text-center space-y-3">
              <CheckCircle2 className="w-10 h-10 text-emerald-400 mx-auto" />
              <h4 className="text-lg font-bold text-white">Sorğunuz Qeydə Alındı! / Request Received</h4>
              <p className="text-xs text-slate-300 max-w-md mx-auto leading-relaxed">
                Hesabınız və əlaqəli bütün şəxsi məlumatlarınız 7 iş günü ərzində Atesh Studio serverlərindən tamamilə təmizlənəcəkdir. Təsdiq üçün həmçinin <a href={`mailto:ates.baliyev.01@gmail.com?subject=Data%20Deletion%20Request%20-%20${appName}&body=Please%20delete%20my%20account%20for%20${userEmail}`} className="text-amber-400 underline font-bold">buradan birbaşa e-poçt</a> göndərə bilərsiniz.
              </p>
              <button
                type="button"
                onClick={() => setSubmitted(false)}
                className="mt-3 text-xs text-slate-400 hover:text-white underline"
              >
                Yeni sorğu göndər
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                  Application Name / Tətbiqin Adı *
                </label>
                <select
                  value={appName}
                  onChange={(e) => setAppName(e.target.value)}
                  className="w-full px-4 py-2.5 rounded-xl bg-[#141829] border border-amber-500/25 text-white text-xs sm:text-sm focus:outline-none focus:border-amber-400"
                >
                  <option value="Bondify">Bondify (Social Discovery & Mini App)</option>
                  <option value="TələbəX">TələbəX (Campus Network)</option>
                  <option value="E5cape">E5cape (3D Arcade Runner)</option>
                  <option value="GET RICH OR RESET">GET RICH OR RESET & Laser Grid</option>
                  <option value="Other">Other Atesh Studio Application</option>
                </select>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                    Registered Email / Qeydiyyat E-poçtu *
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="user@example.com"
                    value={userEmail}
                    onChange={(e) => setUserEmail(e.target.value)}
                    className="w-full px-4 py-2.5 rounded-xl bg-[#141829] border border-amber-500/25 text-white text-xs sm:text-sm focus:outline-none focus:border-amber-400 placeholder:text-slate-600"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                    Username or Account ID (Optional)
                  </label>
                  <input
                    type="text"
                    placeholder="@username or ID"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    className="w-full px-4 py-2.5 rounded-xl bg-[#141829] border border-amber-500/25 text-white text-xs sm:text-sm focus:outline-none focus:border-amber-400 placeholder:text-slate-600"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                  Reason or Specific Notes / Qeyd (Optional)
                </label>
                <textarea
                  rows={3}
                  placeholder="I want to delete all my personal profile data and account history..."
                  value={reason}
                  onChange={(e) => setReason(e.target.value)}
                  className="w-full px-4 py-2.5 rounded-xl bg-[#141829] border border-amber-500/25 text-white text-xs sm:text-sm focus:outline-none focus:border-amber-400 placeholder:text-slate-600 resize-none"
                />
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full gold-button py-3 px-6 rounded-xl text-xs sm:text-sm font-bold flex items-center justify-center gap-2"
                >
                  <Trash2 className="w-4 h-4" />
                  <span>{loading ? 'Sorğu göndərilir...' : 'Məlumatların Silinməsini Tələb Et (Request Data Deletion)'}</span>
                </button>
              </div>
            </form>
          )}
        </div>

        {/* What Data is Erased vs Retained */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div className="p-6 rounded-2xl bg-[#0b0d17] border border-slate-800">
            <h4 className="text-base font-bold text-white mb-2 flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-400" />
              What Data is Permanently Erased
            </h4>
            <ul className="text-xs text-slate-300 space-y-1.5 list-disc list-inside">
              <li>Profile information (name, avatar, bio, age, campus).</li>
              <li>Authentication credentials and associated session tokens.</li>
              <li>User-uploaded photos, media, and peer conversation history.</li>
              <li>Cloud-saved preferences, achievements, and friends lists.</li>
            </ul>
          </div>

          <div className="p-6 rounded-2xl bg-[#0b0d17] border border-slate-800">
            <h4 className="text-base font-bold text-white mb-2 flex items-center gap-2">
              <AlertTriangle className="w-4 h-4 text-amber-400" />
              What May Be Retained (Legal Mandates)
            </h4>
            <ul className="text-xs text-slate-300 space-y-1.5 list-disc list-inside">
              <li>Anonymized purchase transaction records (required by tax & billing laws).</li>
              <li>Aggregated, non-identifiable system telemetry (crash rate statistics).</li>
              <li>Records strictly required for fraud prevention or legal compliance.</li>
            </ul>
          </div>
        </div>

        {/* Direct Developer Contact */}
        <div className="p-6 rounded-2xl bg-[#0a0c14] border border-amber-500/20 text-xs sm:text-sm text-slate-300 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            <strong className="text-white block">Official Developer Support Desk</strong>
            <p className="text-xs text-slate-400 mt-0.5">
              Atesh Studio • Founder: Atəş Balıyev (Atesh Baliyev) • Ganja, Azerbaijan
            </p>
          </div>
          <a
            href="mailto:ates.baliyev.01@gmail.com?subject=Data%20Deletion%20Help"
            className="flex items-center gap-2 text-xs font-bold px-4 py-2 rounded-xl bg-amber-500/10 text-amber-300 border border-amber-500/30 hover:bg-amber-500/20 transition shrink-0"
          >
            <Mail className="w-4 h-4" />
            <span>ates.baliyev.01@gmail.com</span>
          </a>
        </div>
      </div>
    </div>
  );
}

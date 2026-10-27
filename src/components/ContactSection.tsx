'use client';

import { useState } from 'react';
import { MessageSquare, Send, Mail, CheckCircle2, ArrowRight, Sparkles, AlertCircle } from 'lucide-react';
import { InstagramIcon } from '@/components/Icons';

export default function ContactSection() {
  const [formState, setFormState] = useState({
    name: '',
    contactInfo: '',
    subject: '',
    message: '',
  });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    setErrorMessage('');

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formState),
      });

      if (!res.ok) {
        throw new Error('Mesaj göndərilərkən xəta baş verdi');
      }

      setStatus('success');
      setFormState({ name: '', contactInfo: '', subject: '', message: '' });
    } catch (err: unknown) {
      setStatus('error');
      setErrorMessage(err instanceof Error ? err.message : 'Xəta baş verdi');
    }
  };

  return (
    <section id="elaqe" aria-label="Əlaqə Bölməsi" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/25 text-amber-400 text-xs font-semibold uppercase tracking-wider mb-3">
            <Mail className="w-3.5 h-3.5" />
            Birbaşa Əlaqə & Əməkdaşlıq
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white">
            Yeni Bir Layihə <span className="gold-gradient-text">Quraq?</span>
          </h2>
          <p className="mt-3 text-slate-300 text-sm sm:text-base">
            Süni intellekt sistemləri, veb arxitekturası, Prime Media Group tərəfdaşlığı və ya ideyalarınızı müzakirə etmək üçün birbaşa yazın.
          </p>
        </div>

        {/* Priority Social Channels Grid (WhatsApp, Telegram, Instagram) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 max-w-5xl mx-auto mb-12">
          {/* WhatsApp Card */}
          <a
            href="https://wa.me/994556422545"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Atəş Balıyev WhatsApp birbaşa söhbət"
            className="p-5 rounded-2xl bg-gradient-to-br from-[#0c1f15] via-[#09150e] to-[#0d0f18] border border-emerald-500/40 hover:border-emerald-400 shadow-[0_4px_25px_rgba(16,185,129,0.15)] hover:shadow-[0_8px_35px_rgba(16,185,129,0.3)] transition-all duration-300 group flex items-center justify-between"
          >
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-xl bg-[#25D366] text-white flex items-center justify-center shadow-lg group-hover:scale-105 transition shrink-0">
                <MessageSquare className="w-6 h-6 fill-white text-[#25D366]" />
              </div>
              <div>
                <span className="text-[10px] uppercase font-bold text-emerald-400 tracking-wider">Ən Sürətli Əlaqə</span>
                <h3 className="text-base font-bold text-white group-hover:text-emerald-300 transition">
                  WhatsApp
                </h3>
                <p className="text-[11px] text-slate-300 mt-0.5">+994 55 642 25 45</p>
              </div>
            </div>
            <ArrowRight className="w-4 h-4 text-emerald-400 group-hover:translate-x-1 transition shrink-0" />
          </a>

          {/* Telegram Card */}
          <a
            href="https://t.me/Baliyews"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Atəş Balıyev Telegram kanalı və profili"
            className="p-5 rounded-2xl bg-gradient-to-br from-[#0c1824] via-[#08121d] to-[#0d0f18] border border-sky-500/40 hover:border-sky-400 shadow-[0_4px_25px_rgba(14,165,233,0.15)] hover:shadow-[0_8px_35px_rgba(14,165,233,0.3)] transition-all duration-300 group flex items-center justify-between"
          >
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-xl bg-[#229ED9] text-white flex items-center justify-center shadow-lg group-hover:scale-105 transition shrink-0">
                <Send className="w-6 h-6" />
              </div>
              <div>
                <span className="text-[10px] uppercase font-bold text-sky-400 tracking-wider">İcma & Birbaşa Mesaj</span>
                <h3 className="text-base font-bold text-white group-hover:text-sky-300 transition">
                  Telegram
                </h3>
                <p className="text-[11px] text-slate-300 mt-0.5">@Baliyews</p>
              </div>
            </div>
            <ArrowRight className="w-4 h-4 text-sky-400 group-hover:translate-x-1 transition shrink-0" />
          </a>

          {/* Instagram Card */}
          <a
            href="https://instagram.com/atesh_baliyev?igsh=MXNseDRyeGNwZzZpNw=="
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Atəş Balıyev Instagram profili"
            className="p-5 rounded-2xl bg-gradient-to-br from-[#240c18] via-[#1d0812] to-[#0d0f18] border border-pink-500/40 hover:border-pink-400 shadow-[0_4px_25px_rgba(244,63,94,0.15)] hover:shadow-[0_8px_35px_rgba(244,63,94,0.3)] transition-all duration-300 group flex items-center justify-between"
          >
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-tr from-amber-500 via-rose-500 to-pink-600 text-white flex items-center justify-center shadow-lg group-hover:scale-105 transition shrink-0">
                <InstagramIcon className="w-6 h-6" />
              </div>
              <div>
                <span className="text-[10px] uppercase font-bold text-pink-400 tracking-wider">Rəsmi Instagram</span>
                <h3 className="text-base font-bold text-white group-hover:text-pink-300 transition">
                  Instagram
                </h3>
                <p className="text-[11px] text-slate-300 mt-0.5">@atesh_baliyev</p>
              </div>
            </div>
            <ArrowRight className="w-4 h-4 text-pink-400 group-hover:translate-x-1 transition shrink-0" />
          </a>
        </div>

        {/* Contact Form */}
        <div className="max-w-2xl mx-auto card-luxury p-8 sm:p-10 border-amber-500/25">
          <h3 className="text-xl font-bold text-white mb-2 flex items-center gap-2">
            <Sparkles className="w-5 h-5 text-amber-400" />
            Mesajınızı Buradan Göndərin
          </h3>
          <p className="text-xs text-slate-400 mb-6">
            Form vasitəsilə göndərilən hər müraciət birbaşa sistemimə qeyd olunur və qısa zamanda cavablandırılır.
          </p>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                  Adınız və Soyadınız *
                </label>
                <input
                  type="text"
                  required
                  value={formState.name}
                  onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                  placeholder="Məs: Əli Məmmədov"
                  className="w-full px-4 py-3 rounded-xl bg-[#090b14] border border-slate-700/80 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-amber-400 transition"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                  Əlaqə Məlumatınız (Email, Nömrə və ya Telegram) *
                </label>
                <input
                  type="text"
                  required
                  value={formState.contactInfo}
                  onChange={(e) => setFormState({ ...formState, contactInfo: e.target.value })}
                  placeholder="Məs: +994 50... və ya mail@domain.com"
                  className="w-full px-4 py-3 rounded-xl bg-[#090b14] border border-slate-700/80 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-amber-400 transition"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                Mövzu
              </label>
              <input
                type="text"
                value={formState.subject}
                onChange={(e) => setFormState({ ...formState, subject: e.target.value })}
                placeholder="Məs: Robotexnika / TMA / E-ticarət Layihəsi"
                className="w-full px-4 py-3 rounded-xl bg-[#090b14] border border-slate-700/80 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-amber-400 transition"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                Mesajınız *
              </label>
              <textarea
                required
                rows={4}
                value={formState.message}
                onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                placeholder="Layihəniz və ya təklifiniz haqqında qısa məlumat qeyd edin..."
                className="w-full px-4 py-3 rounded-xl bg-[#090b14] border border-slate-700/80 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-amber-400 transition resize-none"
              />
            </div>

            {status === 'success' && (
              <div className="p-3.5 rounded-xl bg-emerald-500/15 border border-emerald-500/30 text-emerald-400 text-xs flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 shrink-0" />
                <span>Mesajınız uğurla qeydə alındı! Tezliklə sizinlə əlaqə saxlanılacaq.</span>
              </div>
            )}

            {status === 'error' && (
              <div className="p-3.5 rounded-xl bg-red-500/15 border border-red-500/30 text-red-400 text-xs flex items-center gap-2">
                <AlertCircle className="w-4 h-4 shrink-0" />
                <span>{errorMessage}</span>
              </div>
            )}

            <button
              type="submit"
              disabled={status === 'loading'}
              className="w-full gold-button py-3.5 px-6 rounded-xl text-sm font-bold flex items-center justify-center gap-2 disabled:opacity-50"
            >
              {status === 'loading' ? (
                <span>Göndərilir...</span>
              ) : (
                <>
                  <span>Mesajı Göndər</span>
                  <Send className="w-4 h-4" />
                </>
              )}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

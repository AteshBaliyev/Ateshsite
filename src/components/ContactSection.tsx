'use client';

import { useState } from 'react';
import { MessageSquare, Send, Mail, CheckCircle2, ArrowRight, Sparkles, AlertCircle } from 'lucide-react';
import { InstagramIcon } from '@/components/Icons';
import { useLanguage } from '@/context/LanguageContext';

export default function ContactSection() {
  const { t } = useLanguage();
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
        throw new Error('Error sending message. Please try again.');
      }

      setStatus('success');
      setFormState({ name: '', contactInfo: '', subject: '', message: '' });
    } catch (err: unknown) {
      setStatus('error');
      setErrorMessage(err instanceof Error ? err.message : 'Error sending message');
    }
  };

  return (
    <section id="elaqe" aria-label="Contact Section" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/25 text-amber-400 text-xs font-semibold uppercase tracking-wider mb-3">
            <Mail className="w-3.5 h-3.5" />
            {t.contact.badge}
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white">
            {t.contact.title}
          </h2>
          <p className="mt-3 text-slate-300 text-sm sm:text-base">
            {t.contact.subtitle}
          </p>
        </div>

        {/* Priority Social Channels Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 max-w-5xl mx-auto mb-12">
          {/* WhatsApp Card */}
          <a
            href="https://wa.me/994556422545"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="WhatsApp Direct"
            className="p-5 rounded-2xl bg-gradient-to-br from-[#0c1f15] via-[#09150e] to-[#0d0f18] border border-emerald-500/40 hover:border-emerald-400 shadow-[0_4px_25px_rgba(16,185,129,0.15)] hover:shadow-[0_8px_35px_rgba(16,185,129,0.3)] transition-all duration-300 group flex items-center justify-between"
          >
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-xl bg-[#25D366] text-white flex items-center justify-center shadow-lg group-hover:scale-105 transition shrink-0">
                <MessageSquare className="w-6 h-6 fill-white text-[#25D366]" />
              </div>
              <div>
                <span className="text-[10px] uppercase font-bold text-emerald-400 tracking-wider">
                  {t.contact.whatsappTitle}
                </span>
                <h3 className="text-base font-bold text-white group-hover:text-emerald-300 transition">
                  +994 55 642 25 45
                </h3>
                <p className="text-[11px] text-slate-300 mt-0.5">{t.contact.whatsappNote}</p>
              </div>
            </div>
            <ArrowRight className="w-4 h-4 text-emerald-400 group-hover:translate-x-1 transition shrink-0" />
          </a>

          {/* Telegram Card */}
          <a
            href="https://t.me/Baliyews"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Telegram"
            className="p-5 rounded-2xl bg-gradient-to-br from-[#0a1a26] via-[#08121a] to-[#0d0f18] border border-sky-500/40 hover:border-sky-400 shadow-[0_4px_25px_rgba(14,165,233,0.15)] hover:shadow-[0_8px_35px_rgba(14,165,233,0.3)] transition-all duration-300 group flex items-center justify-between"
          >
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-xl bg-[#229ED9] text-white flex items-center justify-center shadow-lg group-hover:scale-105 transition shrink-0">
                <Send className="w-6 h-6 text-white translate-x-[-1px] translate-y-[1px]" />
              </div>
              <div>
                <span className="text-[10px] uppercase font-bold text-sky-400 tracking-wider">
                  {t.contact.telegramTitle}
                </span>
                <h3 className="text-base font-bold text-white group-hover:text-sky-300 transition">
                  @Baliyews
                </h3>
                <p className="text-[11px] text-slate-300 mt-0.5">{t.contact.telegramNote}</p>
              </div>
            </div>
            <ArrowRight className="w-4 h-4 text-sky-400 group-hover:translate-x-1 transition shrink-0" />
          </a>

          {/* Instagram Card */}
          <a
            href="https://instagram.com/atesh_baliyev?igsh=MXNseDRyeGNwZzZpNw=="
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            className="p-5 rounded-2xl bg-gradient-to-br from-[#240e1b] via-[#170a12] to-[#0d0f18] border border-pink-500/40 hover:border-pink-400 shadow-[0_4px_25px_rgba(244,63,94,0.15)] hover:shadow-[0_8px_35px_rgba(244,63,94,0.3)] transition-all duration-300 group flex items-center justify-between"
          >
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-tr from-amber-500 via-rose-500 to-pink-600 text-white flex items-center justify-center shadow-lg group-hover:scale-105 transition shrink-0">
                <InstagramIcon className="w-6 h-6" />
              </div>
              <div>
                <span className="text-[10px] uppercase font-bold text-pink-400 tracking-wider">
                  {t.contact.instagramTitle}
                </span>
                <h3 className="text-base font-bold text-white group-hover:text-pink-300 transition">
                  @atesh_baliyev
                </h3>
                <p className="text-[11px] text-slate-300 mt-0.5">{t.contact.instagramNote}</p>
              </div>
            </div>
            <ArrowRight className="w-4 h-4 text-pink-400 group-hover:translate-x-1 transition shrink-0" />
          </a>
        </div>

        {/* Message Form */}
        <div className="max-w-2xl mx-auto card-luxury p-8 sm:p-10 border-amber-500/25">
          <h3 className="text-xl font-bold text-white mb-2 flex items-center gap-2">
            <Sparkles className="w-5 h-5 text-amber-400" />
            <span>{t.contact.formTitle}</span>
          </h3>
          <p className="text-xs text-slate-400 mb-6">
            {t.contact.formSubtitle}
          </p>

          {status === 'success' ? (
            <div className="p-6 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 text-center space-y-2">
              <CheckCircle2 className="w-10 h-10 text-emerald-400 mx-auto" />
              <h4 className="text-lg font-bold text-white">{t.contact.successTitle}</h4>
              <p className="text-xs text-slate-300">{t.contact.successDesc}</p>
              <button
                type="button"
                onClick={() => setStatus('idle')}
                className="mt-3 inline-block text-xs font-semibold text-emerald-400 underline"
              >
                Send another message
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              {status === 'error' && (
                <div className="p-3 rounded-xl bg-red-500/10 border border-red-500/30 flex items-center gap-2 text-xs text-red-300">
                  <AlertCircle className="w-4 h-4 text-red-400 shrink-0" />
                  <span>{errorMessage}</span>
                </div>
              )}

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                    {t.contact.nameLabel}
                  </label>
                  <input
                    type="text"
                    required
                    placeholder={t.contact.namePlaceholder}
                    value={formState.name}
                    onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-[#090b14] border border-slate-700/80 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-amber-400 transition"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                    {t.contact.contactInfoLabel}
                  </label>
                  <input
                    type="text"
                    required
                    placeholder={t.contact.contactInfoPlaceholder}
                    value={formState.contactInfo}
                    onChange={(e) => setFormState({ ...formState, contactInfo: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-[#090b14] border border-slate-700/80 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-amber-400 transition"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                  {t.contact.subjectLabel}
                </label>
                <input
                  type="text"
                  placeholder={t.contact.subjectPlaceholder}
                  value={formState.subject}
                  onChange={(e) => setFormState({ ...formState, subject: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-[#090b14] border border-slate-700/80 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-amber-400 transition"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                  {t.contact.messageLabel}
                </label>
                <textarea
                  required
                  rows={4}
                  placeholder={t.contact.messagePlaceholder}
                  value={formState.message}
                  onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-[#090b14] border border-slate-700/80 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-amber-400 transition resize-none"
                />
              </div>

              <button
                type="submit"
                disabled={status === 'loading'}
                className="w-full gold-button py-3.5 px-6 rounded-xl text-sm font-bold flex items-center justify-center gap-2 disabled:opacity-50"
              >
                <span>{status === 'loading' ? t.contact.sending : t.contact.sendButton}</span>
                <Send className="w-4 h-4" />
              </button>
            </form>
          )}

          {/* Official Email Link */}
          <div className="mt-6 pt-5 border-t border-slate-800 text-center">
            <span className="text-xs text-slate-400">{t.contact.officialEmailTitle}: </span>
            <a
              href="mailto:atesbaliyev@gmail.com"
              className="text-xs font-bold text-amber-400 hover:text-amber-300 underline underline-offset-2 ml-1"
            >
              atesbaliyev@gmail.com
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

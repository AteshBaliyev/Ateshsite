'use client';

import { useLanguage } from '@/context/LanguageContext';
import { Locale } from '@/lib/translations';

interface LanguageSwitcherProps {
  className?: string;
  size?: 'sm' | 'md';
}

export default function LanguageSwitcher({ className = '', size = 'md' }: LanguageSwitcherProps) {
  const { locale, setLocale } = useLanguage();

  const options: { id: Locale; label: string; full: string }[] = [
    { id: 'en', label: 'EN', full: 'English' },
    { id: 'az', label: 'AZ', full: 'Azərbaycan' },
    { id: 'ru', label: 'RU', full: 'Русский' },
  ];

  const py = size === 'sm' ? 'py-0.5' : 'py-1';
  const px = size === 'sm' ? 'px-2' : 'px-2.5';
  const text = size === 'sm' ? 'text-[11px]' : 'text-xs';

  return (
    <div
      role="group"
      aria-label="Language selection"
      className={`inline-flex items-center p-0.5 sm:p-1 rounded-xl bg-[#0b0d18] border border-amber-500/25 shadow-inner ${className}`}
    >
      {options.map((opt) => {
        const isActive = locale === opt.id;
        return (
          <button
            key={opt.id}
            type="button"
            onClick={() => setLocale(opt.id)}
            title={opt.full}
            aria-pressed={isActive}
            className={`${px} ${py} ${text} font-bold rounded-lg transition-all duration-200 ${
              isActive
                ? 'bg-gradient-to-r from-amber-400 to-yellow-500 text-black shadow-[0_2px_10px_rgba(212,175,55,0.4)] scale-100'
                : 'text-slate-400 hover:text-white hover:bg-white/5'
            }`}
          >
            {opt.label}
          </button>
        );
      })}
    </div>
  );
}

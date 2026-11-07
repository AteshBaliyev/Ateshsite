'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';
import { translations, Locale, TranslationSchema } from '@/lib/translations';

interface LanguageContextType {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  t: TranslationSchema;
}

const LanguageContext = createContext<LanguageContextType>({
  locale: 'en',
  setLocale: () => {},
  t: translations.en,
});

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>('en');
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    try {
      const saved = localStorage.getItem('atesh_lang') as Locale | null;
      if (saved && (saved === 'en' || saved === 'az' || saved === 'ru')) {
        setLocaleState(saved);
        document.documentElement.lang = saved;
      } else {
        // Strict requirement: Default to English ('en')
        setLocaleState('en');
        document.documentElement.lang = 'en';
      }
    } catch {
      setLocaleState('en');
    }
  }, []);

  const setLocale = (newLocale: Locale) => {
    setLocaleState(newLocale);
    try {
      localStorage.setItem('atesh_lang', newLocale);
      document.documentElement.lang = newLocale;
    } catch {
      // storage unavailable
    }
  };

  const activeTranslations = translations[locale] || translations.en;

  return (
    <LanguageContext.Provider value={{ locale, setLocale, t: activeTranslations }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}

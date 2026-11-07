'use client';

import { useState, useEffect } from 'react';
import { useLanguage } from '@/context/LanguageContext';

export default function TypewriterHeadline() {
  const { t } = useLanguage();
  const [displayedName, setDisplayedName] = useState('');
  const [isNameDone, setIsNameDone] = useState(false);
  const [subtitleIndex, setSubtitleIndex] = useState(0);
  const [displayedSubtitle, setDisplayedSubtitle] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [mounted, setMounted] = useState(false);

  const fullName = t.hero.typewriterName;
  const subtitles = t.hero.subtitles;

  useEffect(() => {
    setMounted(true);
  }, []);

  // Reset typewriter when language changes
  useEffect(() => {
    setSubtitleIndex(0);
    setDisplayedSubtitle('');
    setIsDeleting(false);
  }, [t]);

  // 1. Type "Atəş Balıyev" letter by letter
  useEffect(() => {
    if (!mounted || isNameDone) return;

    if (displayedName.length < fullName.length) {
      const timeout = setTimeout(() => {
        setDisplayedName(fullName.slice(0, displayedName.length + 1));
      }, 70);
      return () => clearTimeout(timeout);
    } else {
      const timeout = setTimeout(() => {
        setIsNameDone(true);
      }, 200);
      return () => clearTimeout(timeout);
    }
  }, [displayedName, isNameDone, mounted, fullName]);

  // 2. Type, pause, delete and cycle the subtitle
  useEffect(() => {
    if (!isNameDone) return;

    const currentSubtitle = subtitles[subtitleIndex] || subtitles[0];

    if (!isDeleting) {
      if (displayedSubtitle.length < currentSubtitle.length) {
        const timeout = setTimeout(() => {
          setDisplayedSubtitle(currentSubtitle.slice(0, displayedSubtitle.length + 1));
        }, 45);
        return () => clearTimeout(timeout);
      } else {
        // Paused at full text
        const timeout = setTimeout(() => {
          setIsDeleting(true);
        }, 3000);
        return () => clearTimeout(timeout);
      }
    } else {
      if (displayedSubtitle.length > 0) {
        const timeout = setTimeout(() => {
          setDisplayedSubtitle(displayedSubtitle.slice(0, -1));
        }, 25);
        return () => clearTimeout(timeout);
      } else {
        setIsDeleting(false);
        setSubtitleIndex((prev) => (prev + 1) % subtitles.length);
      }
    }
  }, [isNameDone, displayedSubtitle, isDeleting, subtitleIndex, subtitles]);

  return (
    <>
      {/* Hidden semantic H1 for 100% SEO indexation */}
      <h1 className="sr-only">
        {t.hero.typewriterPre} {fullName}, {subtitles[0]}
      </h1>

      {/* Visual Typewriter Headline */}
      <div
        aria-hidden="true"
        className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white leading-[1.18] min-h-[130px] sm:min-h-[170px]"
      >
        <span>{t.hero.typewriterPre}</span>
        <span className="gold-gradient-text font-black">
          {mounted ? displayedName : fullName}
        </span>
        {(!mounted || isNameDone) && <span className="text-amber-400">,</span>}
        {mounted && !isNameDone && (
          <span className="inline-block w-[3px] h-[0.85em] bg-amber-400 ml-1.5 align-middle animate-pulse shadow-[0_0_10px_rgba(251,191,36,0.9)]" />
        )}

        {(!mounted || isNameDone) && (
          <>
            <br className="hidden sm:inline" />
            <span className="block mt-1 sm:mt-2 text-slate-100">
              {mounted ? displayedSubtitle : subtitles[0]}
              <span className="inline-block w-[3px] h-[0.85em] bg-amber-400 ml-1.5 align-middle animate-pulse shadow-[0_0_10px_rgba(251,191,36,0.9)]" />
            </span>
          </>
        )}
      </div>
    </>
  );
}

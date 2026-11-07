'use client';

import { useState, useEffect, useRef } from 'react';
import { MessageSquare, Send, X, MessageCircle } from 'lucide-react';
import { InstagramIcon } from '@/components/Icons';

export default function WhatsAppTelegramFloat() {
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  // Close when clicked outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <aside
      ref={containerRef}
      aria-label="Birbaşa Əlaqə Kanalları"
      className="fixed bottom-5 right-5 z-40 flex flex-col items-end gap-2.5"
    >
      {/* Expanded contact options */}
      <div
        className={`flex flex-col items-end gap-2.5 transition-all duration-300 ease-out origin-bottom ${
          isOpen
            ? 'opacity-100 translate-y-0 pointer-events-auto scale-100'
            : 'opacity-0 translate-y-4 pointer-events-none scale-90 sm:opacity-100 sm:translate-y-0 sm:pointer-events-auto sm:scale-100'
        }`}
      >
        {/* Instagram */}
        <a
          href="https://instagram.com/atesh_baliyev?igsh=MXNseDRyeGNwZzZpNw=="
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Atəş Balıyev Instagram hesabı"
          className="flex items-center gap-2.5 pl-3.5 pr-3 py-2 rounded-full bg-[#121524]/95 border border-pink-500/40 text-slate-100 shadow-[0_4px_20px_rgba(244,63,94,0.35)] hover:border-pink-400 hover:scale-105 active:scale-95 transition-all backdrop-blur-md group/ig"
        >
          <span className="text-xs font-semibold text-pink-300 sm:hidden">Instagram</span>
          <span className="hidden sm:inline text-xs font-medium text-slate-300 group-hover/ig:text-white">
            @atesh_baliyev
          </span>
          <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-amber-500 via-rose-500 to-pink-600 flex items-center justify-center text-white shrink-0">
            <InstagramIcon className="w-4 h-4" />
          </div>
        </a>

        {/* WhatsApp */}
        <a
          href="https://wa.me/994556422545"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Atəş Balıyev ilə WhatsApp üzərindən yazışın"
          className="flex items-center gap-2.5 pl-3.5 pr-3 py-2 rounded-full bg-[#121524]/95 border border-emerald-500/40 text-slate-100 shadow-[0_4px_20px_rgba(37,211,102,0.35)] hover:border-emerald-400 hover:scale-105 active:scale-95 transition-all backdrop-blur-md group/wa"
        >
          <span className="text-xs font-semibold text-emerald-300 sm:hidden">WhatsApp</span>
          <span className="hidden sm:inline text-xs font-medium text-slate-300 group-hover/wa:text-white">
            WhatsApp ilə Əlaqə
          </span>
          <div className="w-8 h-8 rounded-full bg-[#25D366] flex items-center justify-center text-white shrink-0">
            <MessageSquare className="w-4 h-4 fill-white text-[#25D366]" />
          </div>
        </a>

        {/* Telegram */}
        <a
          href="https://t.me/Baliyews"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Atəş Balıyev ilə Telegram üzərindən əlaqə saxlayın"
          className="flex items-center gap-2.5 pl-3.5 pr-3 py-2 rounded-full bg-[#121524]/95 border border-sky-500/40 text-slate-100 shadow-[0_4px_20px_rgba(34,158,217,0.35)] hover:border-sky-400 hover:scale-105 active:scale-95 transition-all backdrop-blur-md group/tg"
        >
          <span className="text-xs font-semibold text-sky-300 sm:hidden">Telegram</span>
          <span className="hidden sm:inline text-xs font-medium text-slate-300 group-hover/tg:text-white">
            @Baliyews
          </span>
          <div className="w-8 h-8 rounded-full bg-[#229ED9] flex items-center justify-center text-white shrink-0">
            <Send className="w-4 h-4 text-white translate-x-[-0.5px]" />
          </div>
        </a>
      </div>

      {/* Main Trigger Button on Mobile (Speed Dial FAB) */}
      <button
        type="button"
        onClick={() => setIsOpen((prev) => !prev)}
        aria-label={isOpen ? 'Əlaqə menyusunu bağla' : 'Birbaşa əlaqə seçimləri'}
        aria-expanded={isOpen}
        className="sm:hidden flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-tr from-amber-500 via-amber-400 to-yellow-500 text-black shadow-[0_4px_22px_rgba(212,175,55,0.55)] active:scale-90 transition-transform duration-200"
      >
        {isOpen ? (
          <X className="w-5 h-5 text-black stroke-[2.5]" />
        ) : (
          <MessageCircle className="w-5 h-5 text-black fill-black/20" />
        )}
      </button>
    </aside>
  );
}

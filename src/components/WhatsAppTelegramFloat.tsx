'use client';

import { MessageSquare, Send } from 'lucide-react';
import { InstagramIcon } from '@/components/Icons';

export default function WhatsAppTelegramFloat() {
  return (
    <aside
      aria-label="Birbaşa Əlaqə Kanalları"
      className="fixed bottom-6 right-6 z-40 flex flex-col gap-3 group"
    >
      {/* Instagram Floating Button */}
      <a
        href="https://instagram.com/atesh_baliyev?igsh=MXNseDRyeGNwZzZpNw=="
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Atəş Balıyev Instagram hesabı"
        className="flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-tr from-amber-500 via-rose-500 to-pink-600 text-white shadow-[0_6px_24px_rgba(244,63,94,0.45)] hover:shadow-[0_8px_30px_rgba(244,63,94,0.65)] hover:scale-110 active:scale-95 transition-all duration-300 relative group/btn"
      >
        <InstagramIcon className="w-5 h-5" />
        <span className="absolute right-14 bg-[#0f111a] text-slate-100 text-xs font-semibold px-3 py-1.5 rounded-lg border border-pink-500/30 whitespace-nowrap opacity-0 group-hover/btn:opacity-100 transition-opacity pointer-events-none shadow-xl">
          Instagram: @atesh_baliyev
        </span>
      </a>

      {/* WhatsApp Floating Button */}
      <a
        href="https://wa.me/994556422545"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Atəş Balıyev ilə WhatsApp üzərindən yazışın"
        className="flex items-center justify-center w-12 h-12 rounded-full bg-[#25D366] text-white shadow-[0_6px_24px_rgba(37,211,102,0.45)] hover:shadow-[0_8px_30px_rgba(37,211,102,0.65)] hover:scale-110 active:scale-95 transition-all duration-300 relative group/btn"
      >
        <MessageSquare className="w-5 h-5 fill-white text-[#25D366]" />
        <span className="absolute right-14 bg-[#0f111a] text-slate-100 text-xs font-semibold px-3 py-1.5 rounded-lg border border-emerald-500/30 whitespace-nowrap opacity-0 group-hover/btn:opacity-100 transition-opacity pointer-events-none shadow-xl">
          WhatsApp ilə Əlaqə
        </span>
      </a>

      {/* Telegram Floating Button */}
      <a
        href="https://t.me/Baliyews"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Atəş Balıyev ilə Telegram üzərindən əlaqə saxlayın"
        className="flex items-center justify-center w-12 h-12 rounded-full bg-[#229ED9] text-white shadow-[0_6px_24px_rgba(34,158,217,0.45)] hover:shadow-[0_8px_30px_rgba(34,158,217,0.65)] hover:scale-110 active:scale-95 transition-all duration-300 relative group/btn"
      >
        <Send className="w-5 h-5 text-white translate-x-[-1px] translate-y-[1px]" />
        <span className="absolute right-14 bg-[#0f111a] text-slate-100 text-xs font-semibold px-3 py-1.5 rounded-lg border border-sky-500/30 whitespace-nowrap opacity-0 group-hover/btn:opacity-100 transition-opacity pointer-events-none shadow-xl">
          Telegram: @Baliyews
        </span>
      </a>
    </aside>
  );
}

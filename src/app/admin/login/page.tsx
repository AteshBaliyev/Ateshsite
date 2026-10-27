'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { Shield, Lock, User, ArrowRight, AlertCircle, Sparkles } from 'lucide-react';

export default function AdminLoginPage() {
  const router = useRouter();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      const res = await fetch('/api/admin/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password }),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || 'Giriş uğursuz oldu');
      }

      router.push('/admin');
      router.refresh();
    } catch (err: unknown) {
      setError(err instanceof Error ? err.message : 'Xəta baş verdi');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#07080c] flex items-center justify-center p-4 relative overflow-hidden">
      {/* Background ambient glows */}
      <div className="ambient-glow w-96 h-96 top-10 left-10 bg-amber-500/20" />
      <div className="ambient-glow w-96 h-96 bottom-10 right-10 bg-yellow-600/15" />

      <div className="w-full max-w-md relative z-10">
        <div className="card-luxury p-8 sm:p-10 border-amber-500/30">
          <div className="text-center mb-8">
            <div className="relative w-16 h-16 mx-auto rounded-2xl bg-gradient-to-tr from-amber-400 to-yellow-600 p-[1.5px] mb-4 shadow-[0_0_25px_rgba(212,175,55,0.35)]">
              <div className="w-full h-full bg-[#0a0c14] rounded-[14px] overflow-hidden flex items-center justify-center p-1.5">
                <Image
                  src="/images/logo.png"
                  alt="Atesh Site Logo"
                  width={56}
                  height={56}
                  className="w-full h-full object-contain"
                />
              </div>
            </div>

            <h1 className="text-2xl font-black text-white flex items-center justify-center gap-1.5">
              <span>Admin Panel</span>
              <Sparkles className="w-4 h-4 text-amber-400" />
            </h1>
            <p className="text-xs text-slate-400 mt-1">
              Atəş Balıyev Portfeli və Bloq İdarəetmə Mərkəzi
            </p>
          </div>

          {error && (
            <div className="mb-6 p-3.5 rounded-xl bg-red-500/15 border border-red-500/30 text-red-400 text-xs flex items-center gap-2">
              <AlertCircle className="w-4 h-4 shrink-0" />
              <span>{error}</span>
            </div>
          )}

          <form onSubmit={handleLogin} className="space-y-4">
            <div>
              <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                İstifadəçi Adı
              </label>
              <div className="relative">
                <input
                  type="text"
                  required
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  placeholder="Admin istifadəçi adı"
                  className="w-full pl-10 pr-4 py-3 rounded-xl bg-[#090b14] border border-slate-700/80 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-amber-400 transition"
                />
                <User className="w-4 h-4 text-slate-500 absolute left-3.5 top-3.5" />
              </div>
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                Şifrə
              </label>
              <div className="relative">
                <input
                  type="password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Admin şifrəsi"
                  className="w-full pl-10 pr-4 py-3 rounded-xl bg-[#090b14] border border-slate-700/80 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-amber-400 transition"
                />
                <Lock className="w-4 h-4 text-slate-500 absolute left-3.5 top-3.5" />
              </div>
            </div>

            <p className="text-[11px] text-slate-500 leading-normal">
              🔒 Təhlükəsizlik bildirişi: Giriş məlumatları birbaşa serverin .env konfiqurasiyasından yoxlanılır.
            </p>

            <button
              type="submit"
              disabled={loading}
              className="w-full gold-button py-3.5 px-6 rounded-xl text-sm font-bold flex items-center justify-center gap-2 disabled:opacity-50 mt-2"
            >
              {loading ? (
                <span>Yoxlanılır...</span>
              ) : (
                <>
                  <span>İdarəetmə Panelinə Giriş</span>
                  <ArrowRight className="w-4 h-4" />
                </>
              )}
            </button>
          </form>

          <div className="mt-6 pt-6 border-t border-slate-800 text-center">
            <Link
              href="/"
              className="text-xs text-slate-400 hover:text-amber-400 transition"
            >
              ← Veb saytın ana səhifəsinə qayıt
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

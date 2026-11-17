import React from 'react';

const WA_NUMBER = "";
const WA_TEXT = "Halo Momozzy Care, aku mau tanya ketersediaan kamar untuk kucingku.";

export default function Hero() {
  const waUrl = `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(WA_TEXT)}`;

  return (
    <header className="pt-32 pb-20 px-6 md:px-12 bg-emerald-50">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        <div>
          <h1 className="fd text-5xl md:text-7xl font-extrabold leading-[1.04] text-emerald-950 mb-6">Fasilitas aman, tanpa was-was.</h1>
          <p className="text-lg text-slate-600 mb-8 leading-relaxed max-w-lg">Setiap anabul dipantau harian, 1 kamar 1 ekor, dan nol kontak silang. Kucingmu diperlakukan seperti keluarga, bukan sekadar dititipin.</p>
          <div className="flex flex-col sm:flex-row gap-4 mb-8">
            <a href={waUrl} target="_blank" rel="noopener noreferrer" className="btn px-8 py-4 shadow-lg shadow-emerald-500/25">Booking via WhatsApp</a>
            <a href="#harga" className="btn btn-o px-8 py-4">Hitung estimasi biaya</a>
          </div>
          <ul className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-slate-700 font-semibold">
            <li><span className="text-emerald-600">✓</span> Dipantau harian</li>
            <li><span className="text-emerald-600">✓</span> 1 kamar 1 kucing</li>
            <li><span className="text-emerald-600">✓</span> Update foto/video harian</li>
          </ul>
        </div>
        <div className="relative">
          <svg viewBox="0 0 400 320" preserveAspectRatio="xMidYMid slice" role="img" aria-label="Kucing nyaman di kamar Momozzy Care" className="float rounded-[2.5rem] shadow-2xl w-full h-[440px]">
            <rect width="400" height="320" fill="#D1FAE5" />
            <rect x="272" y="40" width="92" height="106" rx="8" fill="#BAE6FD" stroke="#fff" strokeWidth="8" />
            <path d="M318 40v106M272 93h92" stroke="#fff" strokeWidth="5" />
            <circle cx="296" cy="66" r="10" fill="#FDE68A" />
            <rect y="276" width="400" height="44" fill="#A7F3D0" />
            <ellipse cx="200" cy="278" rx="118" ry="16" fill="#34D399" />
            <path d="M92 120c-10-12-26 2-14 14l14 12 14-12c12-12-4-26-14-14z" fill="#FDA4AF" />
            <g transform="translate(-30 -20) scale(1.15)">
              <use href="#cat" />
              <use href="#nw" />
              <path d="M176 118q8-9 16 0M208 118q8-9 16 0" stroke="#5b3a1e" strokeWidth="4" fill="none" strokeLinecap="round" />
              <path d="M200 139q-5 8-12 4M200 139q5 8 12 4" stroke="#5b3a1e" strokeWidth="3" fill="none" strokeLinecap="round" />
            </g>
          </svg>
          <span className="absolute -bottom-4 left-4 bg-white rounded-2xl shadow-xl px-4 py-3 text-sm font-bold">📸 Update foto/video tiap hari</span>
          <span className="absolute -top-4 right-4 bg-emerald-950 text-white rounded-2xl shadow-xl px-4 py-3 text-sm font-bold">❄️ AC &amp; CCTV 24 jam</span>
        </div>
      </div>
    </header>
  );
}
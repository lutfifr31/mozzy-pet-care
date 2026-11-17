import React, { useState, useEffect } from 'react';

const WA_NUMBER = "";
const WA_TEXT = "Halo Momozzy Care, aku mau tanya ketersediaan kamar untuk kucingku.";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const waUrl = `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(WA_TEXT)}`;

  useEffect(() => {
    const handleScroll = () => {
      const y = window.scrollY;
      const h = document.documentElement.scrollHeight - window.innerHeight;
      setScrollProgress(h > 0 ? (y / h) * 100 : 0);
      setScrolled(y > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`fixed w-full top-0 z-50 py-4 px-6 md:px-12 transition-all ${scrolled ? "nav-s" : ""}`}>
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <a href="#" className="flex items-center gap-3" aria-label="Momozzy Care">
          <svg className="w-10 h-10 shrink-0" aria-hidden="true"><use href="#logo-mark" /></svg>
          <span className="leading-none">
            <span className="block text-xl font-extrabold tracking-tight">Momozzy<span className="text-emerald-600">Care</span></span>
            <span className="block text-[11px] font-semibold mt-1 text-slate-500">Cat Hotel &amp; Boarding</span>
          </span>
        </a>
        <div className="hidden md:flex items-center gap-8 text-sm font-semibold text-slate-600">
          <a className="nl hover:text-emerald-600" href="#kenapa-kami">Kenapa kami</a>
          <a className="nl hover:text-emerald-600" href="#rutinitas">Sehari di sini</a>
          <a className="nl hover:text-emerald-600" href="#harga">Harga</a>
          <a className="nl hover:text-emerald-600" href="#syarat">Syarat</a>
          <a className="nl hover:text-emerald-600" href="#faq">FAQ</a>
        </div>
        <div className="flex items-center gap-2">
          <a href={waUrl} target="_blank" rel="noopener noreferrer" className="btn px-5 py-2.5 text-sm">Booking</a>
          <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="md:hidden w-10 h-10 rounded-lg border border-slate-200 bg-white text-lg" aria-label="Buka menu">☰</button>
        </div>
      </div>
      {mobileMenuOpen && (
        <div className="md:hidden mt-3 bg-white rounded-2xl border border-slate-200 p-4 grid gap-3 text-sm font-semibold">
          <a onClick={() => setMobileMenuOpen(false)} href="#kenapa-kami">Kenapa kami</a>
          <a onClick={() => setMobileMenuOpen(false)} href="#rutinitas">Sehari di sini</a>
          <a onClick={() => setMobileMenuOpen(false)} href="#harga">Harga</a>
          <a onClick={() => setMobileMenuOpen(false)} href="#syarat">Syarat</a>
          <a onClick={() => setMobileMenuOpen(false)} href="#faq">FAQ</a>
        </div>
      )}
      <div className="absolute left-0 bottom-0 h-[3px] bg-emerald-500" style={{ width: `${scrollProgress}%` }}></div>
    </nav>
  );
}
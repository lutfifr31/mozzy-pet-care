import React, { useState, useEffect } from 'react';

const WA_NUMBER = "";
const WA_TEXT = "Halo Momozzy Care, aku mau tanya ketersediaan kamar untuk kucingku.";

export default function Footer() {
  const [showUp, setShowUp] = useState(false);
  const waUrl = `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(WA_TEXT)}`;

  useEffect(() => {
    const handleScroll = () => setShowUp(window.scrollY >= 600);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <footer className="bg-emerald-950 pt-16 pb-8 px-6 md:px-12 text-white">
        <div className="max-w-7xl mx-auto">
          <div className="bg-emerald-900 rounded-3xl p-10 flex flex-col md:flex-row items-center justify-between gap-8 mb-16">
            <div>
              <span className="bg-amber-400/20 text-amber-300 text-xs font-bold px-3 py-1 rounded-full mb-3 inline-block">Slot terbatas</span>
              <h2 className="fd text-2xl md:text-3xl font-extrabold mb-2">Kapasitas kami memang terbatas</h2>
              <p className="text-emerald-100/75 text-sm">Unitnya sedikit karena dirancang kedap. Saat musim libur, slot cepat penuh.</p>
            </div>
            <a href={waUrl} target="_blank" rel="noopener noreferrer" className="btn px-8 py-4 shrink-0 w-full md:w-auto">Booking via WhatsApp</a>
          </div>
          <div className="grid md:grid-cols-4 gap-12 mb-12">
            <div className="md:col-span-2">
              <a href="#" className="flex items-center gap-3 mb-4" aria-label="Momozzy Care">
                <svg className="w-10 h-10" aria-hidden="true"><use href="#logo-mark" /></svg>
                <span className="text-xl font-extrabold">Momozzy<span className="text-emerald-400">Care</span></span>
              </a>
              <p className="text-emerald-100/70 text-sm max-w-sm leading-relaxed">Hotel &amp; penitipan kucing premium dengan standar operasional ketat.</p>
            </div>
            <div>
              <h3 className="font-bold mb-4">Jelajahi</h3>
              <ul className="space-y-2 text-sm text-emerald-100/70">
                <li><a className="hover:text-white" href="#kenapa-kami">Kenapa kami</a></li>
                <li><a className="hover:text-white" href="#harga">Harga &amp; kalkulator</a></li>
                <li><a className="hover:text-white" href="#syarat">Syarat masuk</a></li>
                <li><a className="hover:text-white" href="#faq">FAQ</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold mb-4">Kontak &amp; lokasi</h3>
              <ul className="space-y-3 text-sm text-emerald-100/70">
                <li>📍 Sudirman, Jakarta Selatan</li>
                <li>🕒 Senin-Minggu<br />08.00 - 20.00 WIB</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-white/10 pt-8 text-sm text-emerald-100/60 flex flex-col md:flex-row justify-between gap-4">
            <p>&copy; 2026 Sutan Lutfi - Momozzy Pet Care. Hak cipta dilindungi.</p>
            <p>Dibuat dengan Tailwind CSS.</p>
          </div>
        </div>
      </footer>

      <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-3 items-center">
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className={`w-11 h-11 rounded-full bg-white border border-slate-200 shadow-lg transition-opacity ${showUp ? "opacity-100" : "opacity-0 pointer-events-none"}`}
          aria-label="Kembali ke atas"
        >
          ↑
        </button>
        <a href={waUrl} target="_blank" rel="noopener noreferrer" aria-label="Chat WhatsApp" className="bg-emerald-500 text-white p-4 rounded-full shadow-2xl hover:bg-emerald-600 hover:scale-110 transition-transform">
          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
            <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.347-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.876 1.213 3.074.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
          </svg>
        </a>
      </div>
    </>
  );
}
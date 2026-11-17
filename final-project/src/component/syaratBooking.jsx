import React, { useState } from 'react';

const WA_NUMBER = "";
const WA_TEXT = "Halo Momozzy Care, aku mau tanya ketersediaan kamar untuk kucingku.";
const SYARAT_LIST = [
  "Vaksin lengkap & masih aktif",
  "Bebas kutu & jamur",
  "Kondisi sehat saat masuk",
  "Usia minimal 3 bulan"
];

export default function SyaratBooking() {
  const [checkedSyarat, setCheckedSyarat] = useState([false, false, false, false]);
  const waUrl = `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(WA_TEXT)}`;
  const syaratCount = checkedSyarat.filter(Boolean).length;

  const toggleSyarat = (idx) => {
    setCheckedSyarat(prev => prev.map((val, i) => (i === idx ? !val : val)));
  };

  return (
    <>
      <section id="syarat" className="px-6 md:px-12 pb-24">
        <div className="max-w-6xl mx-auto bg-emerald-50 rounded-[2rem] p-8 md:p-14 grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="fd text-3xl md:text-4xl font-extrabold mb-4">Kami melindungi kucingmu dari kucing lain</h2>
            <p className="text-slate-600 text-sm leading-relaxed mb-8">Karena itu semua tamu wajib memenuhi standar kesehatan di samping. Centang yang sudah terpenuhi untuk cek kesiapan kucingmu.</p>
            <div className="h-2.5 bg-white rounded-full overflow-hidden">
              <div className="h-full bg-emerald-500 rounded-full transition-all duration-500" style={{ width: `${syaratCount * 25}%` }}></div>
            </div>
            <p className="mt-3 text-sm font-semibold min-h-[2.5rem]">
              {syaratCount === 4 ? (
                <>✅ Kucingmu memenuhi syarat. <a className="underline text-emerald-700" target="_blank" rel="noopener noreferrer" href={waUrl}>Lanjut booking</a></>
              ) : syaratCount > 0 ? (
                `${syaratCount} dari 4 terpenuhi. Lengkapi dulu ya, biar aman untuk semua anabul.`
              ) : ""}
            </p>
          </div>
          <div className="grid gap-3">
            {SYARAT_LIST.map((item, idx) => (
              <label key={idx} className="chip">
                <input type="checkbox" checked={checkedSyarat[idx]} onChange={() => toggleSyarat(idx)} />
                {item}
              </label>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 px-6 md:px-12 bg-emerald-950 text-white">
        <div className="max-w-5xl mx-auto">
          <h2 className="fd text-3xl md:text-5xl font-extrabold mb-4">Cara booking dalam 4 langkah</h2>
          <p className="text-emerald-100/70 mb-12">Semua lewat WhatsApp, dari tanggal sampai kucingmu check-in.</p>
          <ol className="grid sm:grid-cols-2 gap-6">
            <li className="bg-white/5 border border-white/10 rounded-3xl p-8"><b className="fd text-3xl text-amber-300">1</b><h3 className="font-bold text-lg my-2">Chat via WhatsApp</h3><p className="text-sm text-emerald-100/75 leading-relaxed">Tanya ketersediaan tanggal dan ceritakan kebutuhan kucingmu. Kami bantu pilih paket yang pas.</p></li>
            <li className="bg-white/5 border border-white/10 rounded-3xl p-8"><b className="fd text-3xl text-amber-300">2</b><h3 className="font-bold text-lg my-2">Konfirmasi &amp; data kucing</h3><p className="text-sm text-emerald-100/75 leading-relaxed">Kirim tanggal check-in/out, nama dan kondisi kucing, status vaksin, plus add-on antar-jemput atau grooming kalau perlu.</p></li>
            <li className="bg-white/5 border border-white/10 rounded-3xl p-8"><b className="fd text-3xl text-amber-300">3</b><h3 className="font-bold text-lg my-2">DP untuk kunci slot</h3><p className="text-sm text-emerald-100/75 leading-relaxed">Amankan kamar dengan DP, terutama saat peak atau libur. Pelunasan saat check-out.</p></li>
            <li className="bg-white/5 border border-white/10 rounded-3xl p-8"><b className="fd text-3xl text-amber-300">4</b><h3 className="font-bold text-lg my-2">Antar sendiri atau dijemput</h3><p className="text-sm text-emerald-100/75 leading-relaxed">Check-in langsung di lokasi kami, atau pakai layanan antar-jemput. Selama menginap, kamu dapat update foto/video harian.</p></li>
          </ol>
          <a href={waUrl} target="_blank" rel="noopener noreferrer" className="btn px-10 py-4 mt-12 rounded-full">Mulai booking via WhatsApp</a>
        </div>
      </section>
    </>
  );
}
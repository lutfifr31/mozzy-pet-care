import React, { useState } from 'react';

const WA_NUMBER = "";
const WA_TEXT = "Halo Momozzy Care, aku mau tanya ketersediaan kamar untuk kucingku.";
const PRICE = { weekday: 50000, weekend: 65000 };
const WEEKEND_NIGHTS = [5, 6];

export default function Hargakalkulator() {
  const todayIso = new Date(Date.now() - new Date().getTimezoneOffset() * 6e4).toISOString().slice(0, 10);
  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");
  const [catCount, setCatCount] = useState(1);
  const [antarJemput, setAntarJemput] = useState(false);
  const [grooming, setGrooming] = useState(false);

  const waUrl = (text) => `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(text)}`;
  const formatRp = (n) => "Rp" + n.toLocaleString("id-ID");

  const calculateEstimate = () => {
    if (!checkIn || !checkOut) return null;
    const a = new Date(checkIn + "T00:00");
    const b = new Date(checkOut + "T00:00");
    if (b <= a) return null;

    let wd = 0, we = 0;
    for (const d = new Date(a); d < b; d.setDate(d.getDate() + 1)) {
      WEEKEND_NIGHTS.includes(d.getDay()) ? we++ : wd++;
    }
    const nights = wd + we;
    const total = (wd * PRICE.weekday + we * PRICE.weekend) * catCount;
    const freeGrooming = nights > 7;
    const extra = [
      antarJemput && "Antar-jemput",
      grooming && "Grooming" + (freeGrooming ? " (gratis)" : "")
    ].filter(Boolean);

    const waMessage = `Halo Momozzy Care, aku mau booking.\nCheck-in: ${checkIn}\nCheck-out: ${checkOut} (${nights} malam)\nJumlah kucing: ${catCount}\nEstimasi: ${formatRp(total)}` +
      (extra.length ? `\nTambahan: ${extra.join(", ")}` : "") +
      "\nMohon info ketersediaannya ya.";

    return { wd, we, nights, total, freeGrooming, waMessage };
  };

  const est = calculateEstimate();

  return (
    <section id="harga" className="py-24 px-6 md:px-12">
      <div className="max-w-6xl mx-auto">
        <h2 className="fd text-3xl md:text-5xl font-extrabold mb-4">Harga per malam, transparan</h2>
        <p className="text-slate-600 mb-12 max-w-xl">Sudah termasuk 1 kamar 1 ekor, AC 24 jam, CCTV, dan daily report. Menginap lebih dari 7 malam? Grooming gratis.</p>
        <div className="grid lg:grid-cols-2 gap-8 items-start">
          <div className="bg-emerald-950 text-white rounded-[2rem] p-8 md:p-10">
            <h3 className="fd text-2xl font-extrabold mb-1">Kamar Standar VIP</h3>
            <p className="text-emerald-100/70 text-sm mb-8">Semua yang esensial, tanpa kompromi soal keamanan dan kebersihan.</p>
            <div className="grid grid-cols-2 gap-6 border-y border-white/15 py-8 mb-8">
              <div><p className="text-sm text-emerald-100/70 mb-1">Weekday</p><p className="fd text-4xl text-amber-300">Rp50.000</p><p className="text-xs text-emerald-100/60">per malam</p></div>
              <div><p className="text-sm text-emerald-100/70 mb-1">Weekend</p><p className="fd text-4xl text-amber-300">Rp65.000</p><p className="text-xs text-emerald-100/60">per malam</p></div>
            </div>
            <ul className="space-y-3 text-sm text-emerald-50 mb-8">
              <li>✓ 1 kamar 1 ekor, AC 24 jam, CCTV</li>
              <li>✓ Makan 2-3× + litter cleaning harian</li>
              <li>✓ Playtime harian + daily report foto/video</li>
              <li>✓ Akses dokter hewan bila ada gejala</li>
            </ul>
            <a href={waUrl(WA_TEXT)} target="_blank" rel="noopener noreferrer" className="btn w-full py-4">Booking via WhatsApp</a>
          </div>

          <div className="border-2 border-emerald-200 rounded-[2rem] p-8 md:p-10 bg-white">
            <h3 className="fd text-2xl font-extrabold mb-1">Hitung estimasi</h3>
            <p className="text-sm text-slate-500 mb-6">Pilih tanggal, totalnya langsung muncul.</p>
            <div className="grid grid-cols-2 gap-4 mb-5">
              <label className="lbl">
                Check-in
                <input type="date" min={todayIso} value={checkIn} onChange={e => setCheckIn(e.target.value)} className="inp" />
              </label>
              <label className="lbl">
                Check-out
                <input type="date" min={checkIn || todayIso} value={checkOut} onChange={e => setCheckOut(e.target.value)} className="inp" />
              </label>
            </div>
            <div className="flex items-center justify-between mb-5">
              <span className="text-sm font-bold text-slate-700">Jumlah kucing</span>
              <div className="flex items-center gap-3">
                <button type="button" onClick={() => setCatCount(c => Math.max(1, c - 1))} className="step" aria-label="Kurangi">−</button>
                <b className="w-6 text-center">{catCount}</b>
                <button type="button" onClick={() => setCatCount(c => Math.min(10, c + 1))} className="step" aria-label="Tambah">+</button>
              </div>
            </div>
            <div className="grid sm:grid-cols-2 gap-3 mb-6">
              <label className="chip"><input type="checkbox" checked={antarJemput} onChange={e => setAntarJemput(e.target.checked)} />Antar-jemput</label>
              <label className="chip"><input type="checkbox" checked={grooming} onChange={e => setGrooming(e.target.checked)} />Grooming</label>
            </div>

            <div className="rounded-2xl bg-emerald-50 p-5 text-sm" aria-live="polite">
              {!est ? (
                <p className="text-slate-500 text-center">Pilih tanggal check-in dan check-out (minimal 1 malam).</p>
              ) : (
                <>
                  <div className="flex justify-between py-1"><span>Weekday: {est.wd} malam × {catCount} kucing</span><b>{formatRp(est.wd * PRICE.weekday * catCount)}</b></div>
                  <div className="flex justify-between py-1"><span>Weekend: {est.we} malam × {catCount} kucing</span><b>{formatRp(est.we * PRICE.weekend * catCount)}</b></div>
                  {est.freeGrooming && <p className="py-1 font-semibold text-emerald-700">🎁 Grooming gratis karena menginap lebih dari 7 malam</p>}
                  <div className="flex justify-between items-end border-t border-dashed border-emerald-300 mt-2 pt-3">
                    <span className="font-bold">Estimasi {est.nights} malam</span>
                    <b className="fd text-3xl text-emerald-700">{formatRp(est.total)}</b>
                  </div>
                  <p className="text-xs text-slate-500 mt-2">Antar-jemput dan grooming di luar promo dikonfirmasi admin lewat WhatsApp.</p>
                </>
              )}
            </div>

            <a target="_blank" rel="noopener noreferrer" href={waUrl(est ? est.waMessage : WA_TEXT)} className="btn w-full py-4 mt-5">Kirim estimasi via WhatsApp</a>
          </div>
        </div>
      </div>
    </section>
  );
}
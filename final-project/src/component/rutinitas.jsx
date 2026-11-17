import React, { useState } from 'react';

const DAY_ROUTINE = {
  Pagi: [["🩺", "Cek kondisi pagi"], ["🍽️", "Makan pagi"], ["🧹", "Litter cleaning harian"]],
  Siang: [["🧶", "Playtime harian"], ["😴", "Istirahat di kamar ber-AC"], ["🪜", "Perch & hiding box"]],
  Sore: [["🩺", "Cek kondisi sore"], ["🍽️", "Makan sore"], ["📸", "Foto & video dikirim ke kamu"]],
  Malam: [["❄️", "AC 24 jam tetap menyala"], ["📹", "CCTV berjalan"], ["💬", "Opsi video call"]]
};

export default function Rutinitas() {
  const [activeDay, setActiveDay] = useState("Pagi");

  return (
    <section id="rutinitas" className="py-24 px-6 md:px-12 bg-emerald-50">
      <div className="max-w-5xl mx-auto">
        <h2 className="fd text-3xl md:text-5xl font-extrabold mb-4">Sehari di Momozzy</h2>
        <p className="text-slate-600 mb-8">Pilih waktunya, lihat apa yang terjadi di kamar kucingmu.</p>
        <div className="flex flex-wrap gap-3 mb-8" role="tablist">
          {Object.keys(DAY_ROUTINE).map(k => (
            <button
              key={k}
              onClick={() => setActiveDay(k)}
              className={`tab ${activeDay === k ? "on" : ""}`}
              role="tab"
              aria-selected={activeDay === k}
            >
              {k}
            </button>
          ))}
        </div>
        <div className="grid sm:grid-cols-3 gap-4" aria-live="polite">
          {DAY_ROUTINE[activeDay].map(([icon, text], idx) => (
            <div key={idx} className="bg-white rounded-2xl p-6 border border-emerald-100">
              <p className="text-3xl mb-3">{icon}</p>
              <p className="font-bold">{text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
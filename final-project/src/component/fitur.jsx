import React from 'react';

export default function Fitur() {
  return (
    <>
      <section className="bg-emerald-950 text-white px-6 md:px-12 py-10">
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8">
          <div><b className="fd text-4xl text-amber-300">24 jam</b><p className="text-sm text-emerald-100/80 mt-1">AC dan CCTV menyala</p></div>
          <div><b className="fd text-4xl text-amber-300">2×</b><p className="text-sm text-emerald-100/80 mt-1">Cek kondisi tiap hari, pagi &amp; sore</p></div>
          <div><b className="fd text-4xl text-amber-300">1 : 1</b><p className="text-sm text-emerald-100/80 mt-1">Satu kamar untuk satu kucing</p></div>
          <div><b className="fd text-4xl text-amber-300">7+ malam</b><p className="text-sm text-emerald-100/80 mt-1">Grooming gratis</p></div>
        </div>
      </section>

      <section className="py-24 px-6 md:px-12 max-w-7xl mx-auto">
        <h2 className="fd text-3xl md:text-5xl font-extrabold max-w-2xl mb-4">Nitip anabul itu bukan cuma soal ada tempat kosong.</h2>
        <p className="text-slate-600 max-w-xl mb-14">Kamu titip karena harus pergi: mudik, dinas, atau liburan. Tapi pertanyaan yang sama selalu muncul di kepala.</p>
        <div className="grid md:grid-cols-3 gap-10">
          <div>
            <svg viewBox="0 0 400 228" role="img" aria-label="Kucing stres" className="w-full h-52 rounded-3xl mb-5">
              <rect width="400" height="228" fill="#EDE9FE" />
              <rect y="200" width="400" height="28" fill="#DDD6FE" />
              <g transform="translate(30 -20) scale(.85)">
                <use href="#cat" /><use href="#nw" />
                <circle cx="178" cy="118" r="10" fill="#fff" /><circle cx="222" cy="118" r="10" fill="#fff" />
                <circle cx="180" cy="120" r="4.5" fill="#3b2412" /><circle cx="220" cy="120" r="4.5" fill="#3b2412" />
                <path d="M250 92q8 12 0 20q-8-8 0-20z" fill="#7DD3FC" />
              </g>
            </svg>
            <h3 className="font-bold text-lg mb-2">Takut anabul stres di tempat baru?</h3>
            <p className="text-slate-600 text-sm leading-relaxed">Kucing itu teritorial. Lingkungan baru, bau asing, dan suara ramai bikin stres, dan di kandang campur stresnya makin parah.</p>
          </div>
          <div>
            <svg viewBox="0 0 400 228" role="img" aria-label="Kucing bersin" className="w-full h-52 rounded-3xl mb-5">
              <rect width="400" height="228" fill="#DCFCE7" />
              <rect y="200" width="400" height="28" fill="#BBF7D0" />
              <g transform="translate(30 -20) scale(.85)">
                <use href="#cat" /><use href="#nw" />
                <path d="M168 111l16 7-16 7M232 111l-16 7 16 7" stroke="#5b3a1e" strokeWidth="4" fill="none" strokeLinecap="round" strokeLinejoin="round" />
                <ellipse cx="200" cy="149" rx="6" ry="7" fill="#7f1d1d" />
                <circle cx="238" cy="152" r="5" fill="#7DD3FC" /><circle cx="254" cy="160" r="4" fill="#7DD3FC" />
              </g>
            </svg>
            <h3 className="font-bold text-lg mb-2">Ngeri ketularan jamur, kutu, atau virus?</h3>
            <p className="text-slate-600 text-sm leading-relaxed">Satu ruangan ramai kucing berarti satu bersin bisa menular ke semuanya. Ini ketakutan nomor satu pemilik kucing.</p>
          </div>
          <div>
            <svg viewBox="0 0 400 228" role="img" aria-label="Kucing sedih dengan mangkuk kosong" className="w-full h-52 rounded-3xl mb-5">
              <rect width="400" height="228" fill="#E0F2FE" />
              <rect y="200" width="400" height="28" fill="#BAE6FD" />
              <path d="M38 176h72l-8 22H46z" fill="#94A3B8" />
              <g transform="translate(30 -20) scale(.85)">
                <use href="#cat" /><use href="#nw" />
                <ellipse cx="178" cy="119" rx="9" ry="11" fill="#fff" /><ellipse cx="222" cy="119" rx="9" ry="11" fill="#fff" />
                <circle cx="178" cy="122" r="6.5" fill="#3b2412" /><circle cx="222" cy="122" r="6.5" fill="#3b2412" />
                <path d="M168 134q5 8 0 12q-5-4 0-12z" fill="#7DD3FC" />
              </g>
            </svg>
            <h3 className="font-bold text-lg mb-2">Was-was kucingmu nggak keurus?</h3>
            <p className="text-slate-600 text-sm leading-relaxed">Sering dengar kasus kucing telantar di penitipan: dibiarkan lapar atau kotor di pojok kandang.</p>
          </div>
        </div>
      </section>

      <section id="kenapa-kami" className="py-24 px-6 md:px-12 bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="fd text-3xl md:text-5xl font-extrabold max-w-xl mb-14">Tiga hal yang bikin kami beda</h2>
          <div className="grid md:grid-cols-3 gap-10">
            <div className="border-t-4 border-emerald-500 pt-6"><p className="text-3xl mb-4">🛡️</p><h3 className="font-bold text-lg mb-3">Keamanan terjamin, bukan sekadar dititipin</h3><p className="text-slate-600 text-sm leading-relaxed">Kami merancang SOP ketat. Kondisi dicek tiap pagi dan sore, dan ada protokol darurat kalau muncul gejala sakit.</p></div>
            <div className="border-t-4 border-amber-400 pt-6"><p className="text-3xl mb-4">🚪</p><h3 className="font-bold text-lg mb-3">Satu kamar satu kucing, nol kontak silang</h3><p className="text-slate-600 text-sm leading-relaxed">Kucingmu punya ruang privasi. Sekat antar-unit solid (sneeze barrier) supaya bersin dan droplet tidak menyeberang ke tetangga.</p></div>
            <div className="border-t-4 border-sky-400 pt-6"><p className="text-3xl mb-4">📱</p><h3 className="font-bold text-lg mb-3">Kamu bisa lihat sendiri, tiap hari</h3><p className="text-slate-600 text-sm leading-relaxed">Update foto dan video harian, plus opsi video call. Tidak perlu menebak kabar anabulmu.</p></div>
          </div>
        </div>
      </section>
    </>
  );
}
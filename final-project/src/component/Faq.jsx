import React from 'react';

const FAQ_LIST = [
  ["Kucingku gampang stres. Aman nggak di sini?", "Justru itu alasan kami pakai kebijakan 1 kamar 1 ekor dan sekat solid antar-unit. Kucingmu punya teritori sendiri, tanpa kontak paksa dengan kucing lain. Ada perch untuk memanjat dan hiding box untuk bersembunyi, dua hal yang bikin kucing merasa aman."],
  ["Kalau kucingku sakit di tengah masa titip, gimana?", "Begitu muncul gejala, kucingmu langsung diperiksa dan kamu kami hubungi. Kami punya akses dokter hewan, dan kalau perlu kucingmu dipindahkan ke zona isolasi."],
  ["Syarat vaksinnya apa aja?", "Vaksin lengkap dan masih berlaku, bebas kutu & jamur, sehat, minimal usia 3 bulan. Ini bukan untuk menyulitkan, tapi supaya kucingmu aman dari kucing lain yang masuk."],
  ["Bagaimana cara bayarnya?", "Kamu bayar DP untuk mengunci slot, terutama saat peak atau libur. Pelunasan dilakukan saat check-out."],
  ["Bisa antar-jemput atau grooming?", "Bisa. Centang di kalkulator atau sebutkan saat chat WhatsApp. Menginap lebih dari 7 malam dapat grooming gratis."]
];

export default function Faq() {
  return (
    <section id="faq" className="py-24 px-6 md:px-12 max-w-6xl mx-auto grid md:grid-cols-5 gap-12">
      <div className="md:col-span-2">
        <h2 className="fd text-3xl md:text-4xl font-extrabold mb-4">Pertanyaan yang sering muncul</h2>
        <p className="text-slate-600">Yang biasanya kamu tanyakan sebelum memutuskan nitip.</p>
      </div>
      <div className="md:col-span-3 space-y-3">
        {FAQ_LIST.map(([q, a], idx) => (
          <details key={idx} className="bg-white border border-slate-200 rounded-2xl p-6 cursor-pointer">
            <summary className="flex justify-between items-center gap-4 font-bold text-lg">
              {q}
              <svg className="ch shrink-0 text-slate-400" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24">
                <path d="M6 9l6 6 6-6" />
              </svg>
            </summary>
            <p className="text-slate-600 mt-4 leading-relaxed text-sm">{a}</p>
          </details>
        ))}
      </div>
    </section>
  );
}
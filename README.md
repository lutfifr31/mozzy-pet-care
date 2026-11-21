<p align="center">
  <img src="assets/banner.svg" alt="MomozzyCare Cat Hotel & Boarding Banner" width="100%">
</p>

<h1 align="center">MomozzyCare — Cat Hotel & Boarding</h1>

<p align="center">
  <strong>Platform web informasi, simulasi biaya, dan reservasi penitipan kucing eksklusif di Sudirman, Jakarta Selatan.</strong>
</p>

<p align="center">
  <img src="https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white" alt="Vite" />
  <img src="https://img.shields.io/badge/Tailwind_CSS-10B981?style=for-the-badge&logo=tailwind-css&logoColor=white" alt="Tailwind CSS" />
  <img src="https://img.shields.io/badge/HTML5-022C22?style=for-the-badge&logo=html5&logoColor=6EE7B7" alt="HTML5" />
  <img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=022C22" alt="JavaScript" />
  <img src="https://img.shields.io/badge/Status-Active_Development-059669?style=for-the-badge" alt="Status" />
</p>

<p align="center">
  <a href="#tentang-proyek">Tentang</a> •
  <a href="#keunggulan--fitur-utama">Fitur Utama</a> •
  <a href="#arsitektur-alur-reservasi">Alur Reservasi</a> •
  <a href="#design-system">Design System</a> •
  <a href="#instalasi-lokal">Instalasi</a> •
  <a href="#roadmap-pengembangan">Roadmap</a>
</p>

---

## Tentang Proyek

**MomozzyCare** dirancang untuk memberikan rasa tenang bagi pemilik kucing (*cat parents*) saat harus menitipkan anabul selama bepergian. Dengan prinsip perawatan **1 kamar 1 ekor** dan **nol kontak silang**, antarmuka website ini memadukan tipografi editorial yang hangat dengan nuansa *mint-emerald* yang menenangkan.

Pengunjung dapat menelusuri standar kebersihan ruang menginap, jadwal perawatan harian, rincian paket harga, syarat vaksinasi, hingga menghitung estimasi biaya menginap secara instan sebelum terhubung langsung dengan admin melalui WhatsApp.

---

## Keunggulan & Fitur Utama

<table>
  <tr>
    <td width="50%" valign="top">
      <h3>🏠 1 Kamar 1 Ekor (Nol Kontak Silang)</h3>
      <p>Setiap kucing menempati suite privat terpisah guna mencegah stres teritorial dan meminimalkan risiko penularan penyakit antar-hewan.</p>
    </td>
    <td width="50%" valign="top">
      <h3>📸 Update Foto & Video Harian</h3>
      <p>Pemilik menerima laporan rutin kondisi makan, aktivitas bermain, dan kebersihan <em>litter box</em> anabul setiap hari.</p>
    </td>
  </tr>
  <tr>
    <td width="50%" valign="top">
      <h3>🧮 Kalkulator Estimasi Biaya</h3>
      <p>Simulasi otomatis total biaya penitipan berdasarkan pilihan tipe kamar (<em>suite</em>), jumlah anabul, dan durasi menginap.</p>
    </td>
    <td width="50%" valign="top">
      <h3>💬 Direct WhatsApp Booking</h3>
      <p>Integrasi tombol aksi cepat (<em>Hero CTA</em> & <em>Floating Action Button</em>) untuk konsultasi jadwal dan konfirmasi reservasi.</p>
    </td>
  </tr>
</table>

### Navigasi Halaman
* **Kenapa Kami** — Penjelasan standar keamanan, sanitasi ruangan, dan protokol *zero cross-contact*.
* **Sehari di Sini** — Linimasa rutinitas harian anabul dari pagi hingga malam.
* **Harga** — Transparansi tarif per malam beserta fasilitas tiap kategori kamar.
* **Syarat** — Daftar kriteria kesehatan wajib (bebas kutu/jamur, sehat klinis, dan buku vaksin).
* **FAQ** — Pusat jawaban pertanyaan umum seputar pakan pribadi, obat khusus, dan jam antar-jemput.

---

## Arsitektur Alur Reservasi

```mermaid
flowchart LR
    A[Cat Parent Mengakses Web] --> B{Eksplorasi Layanan}
    B --> C[Cek Fasilitas & Jadwal Harian]
    B --> D[Baca Syarat & FAQ]
    B --> E[Hitung Estimasi Biaya]
    C & D & E --> F[Klik Booking via WhatsApp]
    F --> G[Konfirmasi Ketersediaan Suite]
    G --> H[Check-in & Update Foto/Video Harian]

    style A fill:#ecfdf5,stroke:#10b981,stroke-width:2px,color:#022c22
    style E fill:#d1fae5,stroke:#059669,stroke-width:2px,color:#022c22
    style F fill:#10b981,stroke:#047857,stroke-width:2px,color:#ffffff
    style H fill:#022c22,stroke:#10b981,stroke-width:2px,color:#ecfdf5
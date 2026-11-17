import Navbar from './component/navbar';
import Hero from './component/hero';
import Fitur from './component/fitur';
import Rutinitas from './component/rutinitas';
import Hargakalkulator from './component/Hargakalkulator';
import SyaratBooking from './component/syaratBooking';
import Faq from './component/Faq';
import Footer from './component/Footer';

export default function App() {
  return (
    <div className="bg-white antialiased overflow-x-hidden">
      {/* Definisi SVG Ikon & Kucing */}
      <svg width="0" height="0" style={{ position: "absolute" }} aria-hidden="true">
        <defs>
          <linearGradient id="lg" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0" stopColor="#34d399" />
            <stop offset="1" stopColor="#059669" />
          </linearGradient>
          <symbol id="logo-mark" viewBox="0 0 48 48">
            <rect width="48" height="48" rx="12" fill="url(#lg)" />
            <path d="M12 11l7 6q5-1.5 10 0l7-6q2 0 2 2v12q0 12-14 12T10 25V13q0-2 2-2z" fill="#fff" />
            <ellipse cx="18.5" cy="23" rx="1.9" ry="2.5" fill="#059669" />
            <ellipse cx="29.5" cy="23" rx="1.9" ry="2.5" fill="#059669" />
            <path d="M24 33.5l-3.4-3.3a2 2 0 013-2.7l.4.4.4-.4a2 2 0 013 2.7z" fill="#059669" />
          </symbol>
          <g id="cat">
            <path d="M262 220c46 0 62-34 42-62" stroke="#E08A3C" strokeWidth="16" strokeLinecap="round" fill="none" />
            <ellipse cx="200" cy="205" rx="60" ry="48" fill="#F4A259" />
            <ellipse cx="200" cy="218" rx="32" ry="30" fill="#FFF1E0" />
            <ellipse cx="176" cy="250" rx="17" ry="8" fill="#FFF1E0" />
            <ellipse cx="224" cy="250" rx="17" ry="8" fill="#FFF1E0" />
            <path d="M152 104l4-48 36 24zM248 104l-4-48-36 24z" fill="#F4A259" />
            <path d="M161 90l3-22 15 11zM239 90l-3-22-15 11z" fill="#F9B8B0" />
            <ellipse cx="200" cy="122" rx="54" ry="46" fill="#F4A259" />
            <path d="M192 80v13m8-15v15m8-13v13" stroke="#E08A3C" strokeWidth="5" strokeLinecap="round" />
            <ellipse cx="200" cy="140" rx="26" ry="19" fill="#FFF1E0" />
          </g>
          <g id="nw">
            <path d="M194 132h12l-6 7z" fill="#E58A8A" />
            <path d="M150 134H124M150 143L126 151M250 134H276M250 143L274 151" stroke="#5b3a1e" strokeOpacity=".45" strokeWidth="2" strokeLinecap="round" />
          </g>
        </defs>
      </svg>

      <Navbar />
      <Hero />
      <Fitur />
      <Rutinitas />
      <Hargakalkulator />
      <SyaratBooking />
      <Faq />
      <Footer />
    </div>
  );
}
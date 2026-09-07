import { Phone, Mail, FileText } from 'lucide-react';
import { Link, useNavigate, useLocation } from 'react-router-dom';

const footerNav = [
  { label: 'Oferta', to: '/oferta' },
  { label: 'Kalkulator', to: '/', hash: '#kalkulator' },
  { label: 'Flota Pojazdów', to: '/', hash: '#flota' },
  { label: 'Dlaczego My', to: '/', hash: '#dlaczego-my' },
  { label: 'Proces', to: '/', hash: '#proces' },
  { label: 'Baza Wiedzy', to: '/', hash: '#baza-wiedzy' },
  { label: 'O nas', to: '/', hash: '#o-nas' },
];

export default function Footer() {
  const navigate = useNavigate();
  const location = useLocation();

  const handleClick = (to: string, hash?: string) => {
    if (to === '/' && hash) {
      if (location.pathname !== '/') {
        navigate('/');
        setTimeout(() => {
          const el = document.querySelector(hash);
          if (el) el.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      } else {
        const el = document.querySelector(hash);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      navigate(to);
    }
  };

  return (
    <footer className="bg-canvas border-t border-border">
      <div className="max-w-8xl mx-auto px-6 lg:px-10 py-16">
        <div className="grid md:grid-cols-3 gap-10 md:gap-8 mb-12">
          {/* Logo + Copyright */}
          <div>
            <Link to="/" className="font-serif text-2xl font-bold tracking-[0.2em] text-white mb-4 inline-block">
              CLARO MOTORS
            </Link>
            <p className="text-sm text-text-muted leading-relaxed max-w-xs">
              Doradztwo motoryzacyjne i finansowanie pojazdów premium. Od 2018 roku.
            </p>
          </div>

          {/* Nav */}
          <div>
            <p className="text-sm text-white font-medium mb-4">Nawigacja</p>
            <nav className="grid grid-cols-2 gap-y-2.5 gap-x-4">
              {footerNav.map((link) => (
                <button
                  key={link.label}
                  onClick={() => handleClick(link.to, link.hash)}
                  className="text-sm text-text-muted hover:text-white transition-colors text-left"
                >
                  {link.label}
                </button>
              ))}
            </nav>
          </div>

          {/* Contact */}
          <div>
            <p className="text-sm text-white font-medium mb-4">Kontakt</p>
            <div className="space-y-3">
              <a href="tel:517195097" className="flex items-center gap-2.5 text-sm text-text-muted hover:text-white transition-colors">
                <Phone size={15} />
                517 195 097
              </a>
              <a href="mailto:biuro@claromotors.pl" className="flex items-center gap-2.5 text-sm text-text-muted hover:text-white transition-colors">
                <Mail size={15} />
                biuro@claromotors.pl
              </a>
              <a href="#" className="flex items-center gap-2.5 text-sm text-text-muted hover:text-white transition-colors">
                <FileText size={15} />
                Polityka prywatności
              </a>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-border flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <p className="text-xs text-text-muted">
            © 2024 Claro Motors. Wszelkie prawa zastrzeżone.
          </p>
          <p className="text-xs text-text-muted">
            Claro Motors — doradztwo motoryzacyjne. NIP: 000-000-00-00. REGON: 000000000.
          </p>
        </div>
      </div>
    </footer>
  );
}

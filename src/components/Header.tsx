import { useState, useEffect } from 'react';
import { Phone, Menu, X } from 'lucide-react';
import { Link, useLocation, useNavigate } from 'react-router-dom';

const navLinks = [
  { label: 'Oferta', to: '/oferta' },
  { label: 'Kalkulator', to: '/', hash: '#kalkulator' },
  { label: 'Flota Pojazdów', to: '/', hash: '#flota' },
  { label: 'Dlaczego My', to: '/', hash: '#dlaczego-my' },
  { label: 'Proces', to: '/', hash: '#proces' },
  { label: 'Baza Wiedzy', to: '/', hash: '#baza-wiedzy' },
  { label: 'O nas', to: '/', hash: '#o-nas' },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleNavClick = (to: string, hash?: string) => {
    setMobileOpen(false);

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
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-canvas border-b border-border'
          : 'bg-canvas/95 border-b border-border/50'
      }`}
    >
      <div className="max-w-8xl mx-auto px-6 lg:px-10">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link
            to="/"
            onClick={() => setMobileOpen(false)}
            className="font-serif text-2xl font-bold tracking-[0.2em] text-white whitespace-nowrap"
          >
            CLARO MOTORS
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden xl:flex items-center gap-7">
            {navLinks.map((link) => (
              <button
                key={link.label}
                onClick={() => handleNavClick(link.to, link.hash)}
                className="text-sm font-normal text-text-muted hover:text-white transition-colors duration-200"
              >
                {link.label}
              </button>
            ))}
          </nav>

          {/* Direct Contact CTA */}
          <div className="hidden lg:flex items-center gap-3">
            <a
              href="tel:517195097"
              className="flex items-center gap-3 px-4 py-2.5 bg-btn-secondary border border-border rounded hover:bg-border transition-colors duration-200"
            >
              <Phone size={18} className="text-white" />
              <div className="flex flex-col leading-tight">
                <span className="text-sm font-semibold text-white tracking-wide">517 195 097</span>
                <span className="text-[11px] text-text-muted">Wojciech — Bezpośredni kontakt</span>
              </div>
            </a>
          </div>

          {/* Mobile Toggle */}
          <button
            className="xl:hidden text-white p-2"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Menu"
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <nav className="xl:hidden bg-canvas border-t border-border px-6 py-6 space-y-4">
          {navLinks.map((link) => (
            <button
              key={link.label}
              onClick={() => handleNavClick(link.to, link.hash)}
              className="block text-base text-text-muted hover:text-white transition-colors text-left w-full"
            >
              {link.label}
            </button>
          ))}
          <a
            href="tel:517195097"
            className="flex items-center gap-3 pt-4 border-t border-border"
          >
            <Phone size={18} className="text-white" />
            <div className="flex flex-col leading-tight">
              <span className="text-sm font-semibold text-white">517 195 097</span>
              <span className="text-[11px] text-text-muted">Wojciech — Bezpośredni kontakt</span>
            </div>
          </a>
        </nav>
      )}
    </header>
  );
}

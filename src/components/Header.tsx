import { useState, useEffect } from 'react';
import { Phone, Menu, X, Globe } from 'lucide-react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useLanguage } from '@/i18n/LanguageContext';
import logo from '@/assets/claromotors-logo.png';

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const { t, toggleLang } = useLanguage();

  const navLinks = [
    { label: t.nav.home, to: '/' },
    { label: t.nav.offer, to: '/oferta' },
    { label: t.nav.calculator, to: '/kalkulator' },
    { label: t.nav.howItWorks, to: '/jak-to-dziala' },
    { label: t.nav.about, to: '/o-nas' },
    { label: t.nav.blog, to: '/blog' },
    { label: t.nav.contact, to: '/kontakt' },
  ];

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleNavClick = (to: string) => {
    setMobileOpen(false);
    navigate(to);
    window.scrollTo({ top: 0 });
  };

  const isActive = (to: string) =>
    to === '/' ? location.pathname === '/' : location.pathname === to || location.pathname.startsWith(to + '/');

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 backdrop-blur-md ${
        scrolled
          ? 'bg-canvas/95 border-b border-border shadow-[0_4px_24px_-8px_rgba(0,0,0,0.4)]'
          : 'bg-canvas/80 border-b border-border/50'
      }`}
    >
      <div className="max-w-8xl mx-auto px-6 lg:px-10">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link
            to="/"
            onClick={() => setMobileOpen(false)}
            className="flex-shrink-0"
            aria-label="Claro Motors"
          >
            <img src={logo} alt="Claro Motors" className="h-6 md:h-7 w-auto object-contain" />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden xl:flex items-center gap-7">
            {navLinks.map((link) => (
              <button
                key={link.label}
                onClick={() => handleNavClick(link.to)}
                className={`text-sm font-normal transition-colors duration-200 ${
                  isActive(link.to) ? 'text-accent' : 'text-text-muted hover:text-accent'
                }`}
              >
                {link.label}
              </button>
            ))}
          </nav>

          {/* Right side: language toggle + phone */}
          <div className="hidden lg:flex items-center gap-3">
            <button
              onClick={toggleLang}
              aria-label="Toggle language"
              className="flex items-center gap-2 px-3 py-2.5 bg-btn-secondary border border-border rounded hover:border-accent transition-all duration-200 text-sm font-medium text-white"
            >
              <Globe size={16} className="text-accent" />
              {t.common.langSwitch}
            </button>
            <a
              href="tel:517195097"
              className="flex items-center gap-3 px-4 py-2.5 bg-btn-secondary border border-border rounded hover:border-accent hover:bg-border transition-all duration-200"
            >
              <Phone size={18} className="text-accent" />
              <div className="flex flex-col leading-tight">
                <span className="text-sm font-semibold text-white tracking-wide">517 195 097</span>
                <span className="text-[11px] text-text-muted">{t.header.phoneLabel}</span>
              </div>
            </a>
          </div>

          {/* Mobile: language toggle + menu button */}
          <div className="flex items-center gap-2 lg:hidden">
            <button
              onClick={toggleLang}
              aria-label="Toggle language"
              className="flex items-center gap-1.5 px-2.5 py-1.5 bg-btn-secondary border border-border rounded text-xs font-medium text-white"
            >
              <Globe size={14} className="text-accent" />
              {t.common.langSwitch}
            </button>
            <button
              className="text-white p-2"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Menu"
            >
              {mobileOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <nav className="xl:hidden bg-canvas border-t border-border px-6 py-6 space-y-4">
          {navLinks.map((link) => (
            <button
              key={link.label}
              onClick={() => handleNavClick(link.to)}
              className={`block text-base transition-colors text-left w-full ${
                isActive(link.to) ? 'text-accent' : 'text-text-muted hover:text-accent'
              }`}
            >
              {link.label}
            </button>
          ))}
          <a
            href="tel:517195097"
            className="flex items-center gap-3 pt-4 border-t border-border"
          >
            <Phone size={18} className="text-accent" />
            <div className="flex flex-col leading-tight">
              <span className="text-sm font-semibold text-white">517 195 097</span>
              <span className="text-[11px] text-text-muted">{t.header.phoneLabel}</span>
            </div>
          </a>
        </nav>
      )}
    </header>
  );
}

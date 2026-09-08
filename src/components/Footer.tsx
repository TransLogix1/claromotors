import { Phone, Mail, FileText, Facebook, Instagram } from 'lucide-react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { useLanguage } from '@/i18n/LanguageContext';
import logo from '@/assets/claromotors-logo.png';

export default function Footer() {
  const navigate = useNavigate();
  const location = useLocation();
  const { t } = useLanguage();

  const footerNav = [
    { label: t.nav.offer, to: '/oferta' },
    { label: t.nav.howItWorks, to: '/jak-to-dziala' },
    { label: t.nav.about, to: '/o-nas' },
    { label: t.nav.contact, to: '/kontakt' },
    { label: t.nav.calculator, to: '/kalkulator' },
    { label: t.nav.negotiate, to: '/negocjuj-cene' },
    { label: t.nav.fleet, to: '/', hash: '#flota' },
    { label: t.nav.blog, to: '/', hash: '#baza-wiedzy' },
  ];

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
      window.scrollTo({ top: 0 });
    }
  };

  return (
    <footer className="bg-canvas border-t border-border">
      <div className="max-w-8xl mx-auto px-6 lg:px-10 py-16">
        <div className="grid md:grid-cols-3 gap-10 md:gap-8 mb-12">
          {/* Logo + Copyright */}
          <div>
            <Link to="/" className="inline-block mb-4">
              <img src={logo} alt="Claro Motors" className="h-6 w-auto object-contain" />
            </Link>
            <p className="text-sm text-text-muted leading-relaxed max-w-xs mb-4">
              {t.footer.tagline}
            </p>
            <div className="flex gap-3">
              <a
                href="https://www.facebook.com/claromotors/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="w-9 h-9 flex items-center justify-center bg-input border border-border rounded hover:border-accent transition-colors group"
              >
                <Facebook size={15} className="text-text-muted group-hover:text-accent transition-colors" />
              </a>
              <a
                href="https://www.instagram.com/claromotors/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="w-9 h-9 flex items-center justify-center bg-input border border-border rounded hover:border-accent transition-colors group"
              >
                <Instagram size={15} className="text-text-muted group-hover:text-accent transition-colors" />
              </a>
            </div>
          </div>

          {/* Nav */}
          <div>
            <p className="text-sm text-white font-medium mb-4">{t.footer.navTitle}</p>
            <nav className="grid grid-cols-2 gap-y-2.5 gap-x-4">
              {footerNav.map((link) => (
                <button
                  key={link.label}
                  onClick={() => handleClick(link.to, link.hash)}
                  className="text-sm text-text-muted hover:text-accent transition-colors text-left"
                >
                  {link.label}
                </button>
              ))}
            </nav>
          </div>

          {/* Contact */}
          <div>
            <p className="text-sm text-white font-medium mb-4">{t.footer.contactTitle}</p>
            <div className="space-y-3">
              <a href="tel:517195097" className="flex items-center gap-2.5 text-sm text-text-muted hover:text-accent transition-colors">
                <Phone size={15} />
                517 195 097
              </a>
              <a href="mailto:biuro@claromotors.pl" className="flex items-center gap-2.5 text-sm text-text-muted hover:text-accent transition-colors">
                <Mail size={15} />
                biuro@claromotors.pl
              </a>
              <a href="#" className="flex items-center gap-2.5 text-sm text-text-muted hover:text-accent transition-colors">
                <FileText size={15} />
                {t.footer.privacy}
              </a>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-border flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <p className="text-xs text-text-muted">
            © {new Date().getFullYear()} Claro Motors. {t.footer.rights}
          </p>
          <p className="text-xs text-text-muted">
            {t.footer.regTagline} NIP: 000-000-00-00. REGON: 000000000.
          </p>
        </div>
      </div>
    </footer>
  );
}

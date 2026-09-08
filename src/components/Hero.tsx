import { ArrowRight, ArrowUpRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useLanguage } from '@/i18n/LanguageContext';

const quickLinkSlugs = [
  { key: 'leasing', slug: 'leasing' },
  { key: 'rental', slug: 'wynajem-dlugoterminowy' },
  { key: 'purchase', slug: 'zakup-samochodu' },
  { key: 'insurance', slug: 'ubezpieczenie' },
  { key: 'gap', slug: 'gap' },
] as const;

export default function Hero() {
  const navigate = useNavigate();
  const { t } = useLanguage();

  const scrollTo = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" className="relative min-h-screen flex flex-col justify-end">
      {/* Full-bleed cinematic background */}
      <div className="absolute inset-0 overflow-hidden">
        <img
          src="https://images.pexels.com/photos/94272/sports-car-pkw-auto-vehicle-94272.jpeg?auto=compress&cs=tinysrgb&w=2400"
          alt="Claro Motors"
          className="w-full h-full object-cover img-grade opacity-70"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-canvas via-canvas/50 to-canvas/10" />
        <div className="absolute inset-0 bg-gradient-to-r from-canvas/80 via-transparent to-transparent" />
      </div>

      <div className="relative z-10 max-w-8xl mx-auto px-6 lg:px-10 w-full pb-16 md:pb-24 pt-40">
        <div className="max-w-3xl fade-in-up">
          <p className="eyebrow mb-5">{t.hero.eyebrow}</p>
          <h1 className="text-5xl md:text-7xl lg:text-8xl leading-[0.95] mb-8 uppercase tracking-tight">
            <span className="text-white font-light">{t.hero.headlinePrefix} </span>
            <span className="text-accent font-bold">{t.hero.headlineAccent}</span>
            <span className="text-white font-light">{t.hero.headlineRest}</span>
          </h1>
          <p className="text-lg md:text-xl text-text-light leading-relaxed mb-10 max-w-xl font-light">
            {t.hero.subtitle}
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <button onClick={() => scrollTo('#flota')} className="btn-primary">
              {t.hero.ctaFleet}
              <ArrowRight size={18} />
            </button>
            <button onClick={() => scrollTo('#kalkulator')} className="btn-secondary">
              {t.hero.ctaCalculator}
            </button>
          </div>
        </div>
      </div>

      {/* Service quick links — hairline strip along the bottom edge */}
      <div className="relative z-10 border-t border-border/60 bg-canvas/70 backdrop-blur-sm">
        <div className="max-w-8xl mx-auto px-6 lg:px-10">
          <div className="flex flex-wrap items-center gap-x-8 gap-y-3 py-5">
            <span className="text-xs text-text-muted uppercase tracking-[0.2em]">
              {t.hero.quickLinksLabel}
            </span>
            {quickLinkSlugs.map((item) => (
              <button
                key={item.slug}
                onClick={() => navigate(`/oferta/${item.slug}`)}
                className="inline-flex items-center gap-1 text-sm text-text-light hover:text-accent transition-colors group"
              >
                {t.services[item.key]}
                <ArrowUpRight size={14} className="text-text-muted group-hover:text-accent transition-colors" />
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

import { ArrowRight, Settings, Gauge, Zap } from 'lucide-react';
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
    <section id="hero" className="relative min-h-screen flex items-center pt-20 pb-16">
      {/* Background */}
      <div className="absolute inset-0 overflow-hidden">
        <img
          src="https://images.pexels.com/photos/94272/sports-car-pkw-auto-vehicle-94272.jpeg?auto=compress&cs=tinysrgb&w=1920"
          alt="Samochód premium"
          className="w-full h-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-canvas via-canvas/90 to-canvas/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-canvas via-transparent to-canvas/60" />
      </div>

      <div className="relative z-10 max-w-8xl mx-auto px-6 lg:px-10 w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left: Copy */}
          <div className="fade-in-up">
            <p className="text-sm md:text-base uppercase tracking-[0.15em] text-text-light font-light mb-3 max-w-xl">
              {t.hero.eyebrow}
            </p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl leading-[1.15] mb-6 max-w-xl uppercase tracking-[0.02em]">
              <span className="text-white font-light">{t.hero.headlinePrefix} </span>
              <span className="text-accent font-bold">{t.hero.headlineAccent}</span>
              <span className="text-white font-light">{t.hero.headlineRest}</span>
            </h1>
            <p className="text-lg text-text-muted leading-relaxed mb-8 max-w-lg font-light">
              {t.hero.subtitle}
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={() => scrollTo('#flota')}
                className="btn-primary"
              >
                {t.hero.ctaFleet}
                <ArrowRight size={18} />
              </button>
              <button
                onClick={() => scrollTo('#kalkulator')}
                className="btn-secondary"
              >
                {t.hero.ctaCalculator}
                <Settings size={18} />
              </button>
            </div>

            {/* Service quick links */}
            <div className="mt-10 pt-10 border-t border-border">
              <p className="text-sm text-text-muted mb-4">{t.hero.quickLinksLabel}</p>
              <div className="flex flex-wrap gap-3">
                {quickLinkSlugs.map((item) => (
                  <button
                    key={item.slug}
                    onClick={() => navigate(`/oferta/${item.slug}`)}
                    className="text-sm text-text-muted hover:text-accent border border-border rounded px-3 py-1.5 transition-colors hover:border-accent/50"
                  >
                    {t.services[item.key]}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Right: Featured Model Card */}
          <div className="fade-in-up" style={{ animationDelay: '0.15s' }}>
            <div className="card card-interactive overflow-hidden">
              <div className="relative h-64 md:h-80 bg-input">
                <img
                  src="https://images.pexels.com/photos/94272/sports-car-pkw-auto-vehicle-94272.jpeg?auto=compress&cs=tinysrgb&w=1200"
                  alt="Porsche Panamera GTS"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-container via-transparent to-transparent" />
              </div>
              <div className="p-6 md:p-8">
                <p className="text-xs text-accent uppercase tracking-[0.15em] mb-2 font-medium">
                  {t.hero.featuredBadge}
                </p>
                <h3 className="text-2xl md:text-3xl text-white mb-6">
                  Porsche Panamera GTS
                </h3>
                <div className="grid grid-cols-3 gap-4 mb-6">
                  <div className="flex flex-col gap-1.5">
                    <Gauge size={18} className="text-accent" />
                    <span className="text-xs text-text-muted">{t.hero.power}</span>
                    <span className="text-sm text-white font-medium">480 KM</span>
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <Zap size={18} className="text-accent" />
                    <span className="text-xs text-text-muted">{t.hero.engine}</span>
                    <span className="text-sm text-white font-medium">V8 4.0T</span>
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <Settings size={18} className="text-accent" />
                    <span className="text-xs text-text-muted">{t.hero.installmentFrom}</span>
                    <span className="text-sm text-white font-medium">4 980 zł</span>
                  </div>
                </div>
                <button
                  onClick={() => scrollTo('#kalkulator')}
                  className="btn-secondary w-full"
                >
                  {t.hero.calcForModel}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

import { ArrowRight, Settings, Gauge, Zap } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export default function Hero() {
  const navigate = useNavigate();

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
            <h1 className="text-4xl md:text-5xl lg:text-6xl text-white leading-[1.15] mb-6 max-w-xl">
              Nowe samochody premium w najniższej cenie i finansowaniu szytym na miarę
            </h1>
            <p className="text-lg text-text-muted leading-relaxed mb-8 max-w-lg font-light">
              Przejmujemy negocjacje z dealerami i bankami. Dobieramy optymalną strukturę leasingu, wynajmu lub kredytu, dając Ci gotowe auto z pełnym ubezpieczeniem i minimum formalności.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={() => scrollTo('#flota')}
                className="btn-primary"
              >
                Zobacz dostępną flotę
                <ArrowRight size={18} />
              </button>
              <button
                onClick={() => scrollTo('#kalkulator')}
                className="btn-secondary"
              >
                Skonfiguruj leasing
                <Settings size={18} />
              </button>
            </div>

            {/* Service quick links */}
            <div className="mt-10 pt-10 border-t border-border">
              <p className="text-sm text-text-muted mb-4">Zobacz naszą ofertę:</p>
              <div className="flex flex-wrap gap-3">
                {[
                  { label: 'Leasing', slug: 'leasing' },
                  { label: 'Wynajem długoterminowy', slug: 'wynajem-dlugoterminowy' },
                  { label: 'Zakup auta', slug: 'zakup-samochodu' },
                  { label: 'Ubezpieczenie', slug: 'ubezpieczenie' },
                  { label: 'Ochrona GAP', slug: 'gap' },
                ].map((item) => (
                  <button
                    key={item.slug}
                    onClick={() => navigate(`/oferta/${item.slug}`)}
                    className="text-sm text-text-muted hover:text-accent border border-border rounded px-3 py-1.5 transition-colors hover:border-accent/50"
                  >
                    {item.label}
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
                  alt="Porsche Panamera GTS — Flagowy Model Tygodnia"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-container via-transparent to-transparent" />
              </div>
              <div className="p-6 md:p-8">
                <p className="text-xs text-accent uppercase tracking-[0.15em] mb-2 font-medium">
                  Flagowy Model Tygodnia
                </p>
                <h3 className="text-2xl md:text-3xl text-white mb-6">
                  Porsche Panamera GTS
                </h3>
                <div className="grid grid-cols-3 gap-4 mb-6">
                  <div className="flex flex-col gap-1.5">
                    <Gauge size={18} className="text-accent" />
                    <span className="text-xs text-text-muted">Moc</span>
                    <span className="text-sm text-white font-medium">480 KM</span>
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <Zap size={18} className="text-accent" />
                    <span className="text-xs text-text-muted">Silnik</span>
                    <span className="text-sm text-white font-medium">V8 4.0T</span>
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <Settings size={18} className="text-accent" />
                    <span className="text-xs text-text-muted">Rata od</span>
                    <span className="text-sm text-white font-medium">4 980 zł</span>
                  </div>
                </div>
                <button
                  onClick={() => scrollTo('#kalkulator')}
                  className="btn-secondary w-full"
                >
                  Oblicz ratę dla tego modelu
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

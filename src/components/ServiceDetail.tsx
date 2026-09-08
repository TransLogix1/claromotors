import { useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { ArrowLeft, ArrowRight, CheckCircle2, Phone } from 'lucide-react';
import { services, serviceText } from '@/services';
import { FileText, Car, ShoppingCart, ShieldCheck, Shield, type LucideIcon } from 'lucide-react';
import { useLanguage } from '@/i18n/LanguageContext';

const iconMap: Record<string, LucideIcon> = {
  FileText,
  Car,
  ShoppingCart,
  ShieldCheck,
  Shield,
};

export default function ServiceDetail() {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const { t, lang } = useLanguage();
  const service = services.find((s) => s.slug === slug);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (!service) {
    return (
      <div className="min-h-screen flex items-center justify-center pt-20">
        <div className="text-center">
          <h2 className="text-3xl text-white mb-4">404</h2>
          <Link to="/oferta" className="btn-primary">
            <ArrowLeft size={18} />
            {t.serviceDetail.back}
          </Link>
        </div>
      </div>
    );
  }

  const Icon = iconMap[service.icon] ?? FileText;

  return (
    <div className="pt-20">
      <section className="section-padding">
        <div className="max-w-8xl mx-auto px-6 lg:px-10">
          <Link
            to="/oferta"
            className="inline-flex items-center gap-2 text-sm text-text-muted hover:text-accent transition-colors mb-8"
          >
            <ArrowLeft size={16} />
            {t.serviceDetail.back}
          </Link>

          <div className="flex items-start gap-5 mb-8">
            <div className="w-14 h-14 flex items-center justify-center bg-accent-muted border border-accent/30 rounded flex-shrink-0">
              <Icon size={28} className="text-accent" />
            </div>
            <div>
              <h1 className="text-3xl md:text-5xl text-white mb-3">{serviceText(service.title, lang)}</h1>
              <p className="text-lg text-text-muted max-w-2xl font-light leading-relaxed">
                {serviceText(service.excerpt, lang)}
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="pb-20">
        <div className="max-w-8xl mx-auto px-6 lg:px-10">
          <div className="grid lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 space-y-8">
              <div className="card p-8 md:p-10">
                <p className="text-text-light leading-relaxed text-lg">
                  {serviceText(service.description, lang)}
                </p>
              </div>

              {service.details.map((detail, idx) => (
                <div key={idx} className="card p-8 md:p-10">
                  <h2 className="text-xl md:text-2xl text-white mb-4">
                    {serviceText(detail.heading, lang)}
                  </h2>
                  <p className="text-text-muted leading-relaxed font-light">
                    {serviceText(detail.body, lang)}
                  </p>
                </div>
              ))}
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              <div className="card p-6">
                <h3 className="text-lg text-white mb-5">{t.offerPage.title}</h3>
                <div className="space-y-2">
                  {services
                    .filter((s) => s.slug !== service.slug)
                    .map((s) => {
                      const OtherIcon = iconMap[s.icon] ?? FileText;
                      return (
                        <Link
                          key={s.slug}
                          to={`/oferta/${s.slug}`}
                          className="flex items-center gap-3 p-3 rounded hover:bg-input transition-colors group"
                        >
                          <div className="w-9 h-9 flex items-center justify-center bg-input border border-border rounded flex-shrink-0">
                            <OtherIcon size={16} className="text-text-muted group-hover:text-accent transition-colors" />
                          </div>
                          <span className="text-sm text-text-muted group-hover:text-white transition-colors">
                            {serviceText(s.shortTitle, lang)}
                          </span>
                          <ArrowRight size={14} className="ml-auto text-text-muted group-hover:text-accent transition-colors" />
                        </Link>
                      );
                    })}
                </div>
              </div>

              <div className="card p-6">
                <h3 className="text-lg text-white mb-2">{t.serviceDetail.contactCta}</h3>
                <p className="text-sm text-text-muted mb-5">
                  {t.about.founderName} — {t.header.phoneLabel}
                </p>
                <a
                  href="tel:517195097"
                  className="flex items-center gap-3 p-4 bg-input border border-border rounded mb-4 hover:border-accent transition-colors"
                >
                  <Phone size={20} className="text-accent" />
                  <div className="flex flex-col leading-tight">
                    <span className="text-sm font-semibold text-white">517 195 097</span>
                    <span className="text-[11px] text-text-muted">{t.header.phoneLabel}</span>
                  </div>
                </a>
                <button onClick={() => navigate('/kontakt')} className="btn-secondary w-full">
                  {t.nav.contact}
                </button>
              </div>

              <div className="card p-6">
                <h3 className="text-lg text-white mb-4">
                  {lang === 'pl' ? 'Co zyskujesz?' : 'What you get'}
                </h3>
                <div className="space-y-3">
                  {(lang === 'pl'
                    ? ['Negocjacja ceny z dealerem', '3 warianty finansowania w 24h', 'Porównanie 18 ubezpieczycieli', 'Transport auta pod wskazany adres']
                    : ['Price negotiation with the dealer', '3 financing variants within 24h', 'Comparison of 18 insurers', 'Car delivery to your chosen address']
                  ).map((item) => (
                    <div key={item} className="flex items-start gap-2.5">
                      <CheckCircle2 size={18} className="text-accent flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-text-muted">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

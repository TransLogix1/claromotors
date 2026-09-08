import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import { services, serviceText } from '@/services';
import { useLanguage } from '@/i18n/LanguageContext';

export default function OfertaPage() {
  const { t, lang } = useLanguage();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="pt-32 md:pt-36">
      <section className="section-padding pt-0 md:pt-0">
        <div className="max-w-8xl mx-auto px-6 lg:px-10">
          <div className="mb-14 md:mb-20 max-w-2xl">
            <p className="eyebrow mb-4">{t.offerPage.title}</p>
            <h1 className="text-4xl md:text-6xl text-white mb-5">{t.offerPage.title}</h1>
            <p className="text-text-muted text-lg font-light">
              {t.offerPage.subtitle}
            </p>
          </div>

          <div>
            {services.map((service, idx) => (
              <Link
                key={service.slug}
                to={`/oferta/${service.slug}`}
                className="hairline-row group flex flex-col md:flex-row md:items-center gap-3 md:gap-8 py-8 md:py-10 px-2 md:px-4"
              >
                <span className="font-serif text-3xl md:text-5xl text-border font-bold w-20 flex-shrink-0 group-hover:text-accent/50 transition-colors">
                  {String(idx + 1).padStart(2, '0')}
                </span>
                <div className="flex-1">
                  <h2 className="text-xl md:text-3xl text-white mb-2">
                    {serviceText(service.title, lang)}
                  </h2>
                  <p className="text-text-muted leading-relaxed font-light max-w-2xl">
                    {serviceText(service.excerpt, lang)}
                  </p>
                </div>
                <div className="flex items-center gap-2 text-sm text-white group-hover:text-accent flex-shrink-0 transition-colors">
                  {t.offerPage.readMore}
                  <ArrowUpRight size={16} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

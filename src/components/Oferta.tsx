import { ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { services, serviceText } from '@/services';
import { useLanguage } from '@/i18n/LanguageContext';

export default function Oferta() {
  const { t, lang } = useLanguage();

  return (
    <section id="oferta" className="section-padding">
      <div className="max-w-8xl mx-auto px-6 lg:px-10">
        <div className="mb-14 md:mb-16 reveal grid md:grid-cols-2 gap-6 items-end">
          <div>
            <p className="eyebrow mb-4">{t.offerHome.title}</p>
            <h2 className="text-3xl md:text-5xl text-white">{t.offerHome.title}</h2>
          </div>
          <p className="text-text-muted text-lg font-light md:text-right md:ml-auto md:max-w-md">
            {t.offerHome.subtitle}
          </p>
        </div>

        <div className="reveal">
          {services.map((service, index) => (
            <Link
              key={service.slug}
              to={`/oferta/${service.slug}`}
              className="hairline-row group flex flex-col md:flex-row md:items-center gap-3 md:gap-8 py-7 md:py-9 px-2 md:px-4"
            >
              <span className="font-serif text-3xl md:text-4xl text-border font-bold w-16 flex-shrink-0 group-hover:text-accent/50 transition-colors">
                {String(index + 1).padStart(2, '0')}
              </span>
              <h3 className="text-xl md:text-2xl text-white flex-shrink-0 md:w-72 leading-snug">
                {serviceText(service.title, lang)}
              </h3>
              <p className="text-sm md:text-base text-text-muted leading-relaxed font-light flex-1">
                {serviceText(service.excerpt, lang)}
              </p>
              <div className="flex items-center gap-2 text-sm text-white group-hover:text-accent transition-colors flex-shrink-0">
                {t.offerHome.checkDetails}
                <ArrowUpRight size={16} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

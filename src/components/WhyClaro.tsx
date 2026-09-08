import { CheckCircle2, ArrowRight } from 'lucide-react';
import { useLanguage } from '@/i18n/LanguageContext';

export default function WhyClaro() {
  const { t } = useLanguage();

  const scrollTo = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="dlaczego-my" className="section-padding bg-canvas">
      <div className="max-w-8xl mx-auto px-6 lg:px-10">
        {/* SI, CLARO */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-20">
          <div className="reveal">
            <h2 className="text-3xl md:text-5xl text-white mb-6">
              {t.whyClaro.title}
            </h2>
            <p className="text-text-muted text-lg leading-relaxed mb-6 font-light">
              {t.whyClaro.intro}
            </p>
            <div className="space-y-4">
              {t.whyClaro.points.map((point) => (
                <div key={point} className="flex items-start gap-3">
                  <CheckCircle2 size={22} className="text-accent flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="text-text-light">{point}</span>
                    <span className="text-white font-medium block mt-0.5">{t.whyClaro.pointAnswer}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="card reveal p-8 md:p-12" style={{ transitionDelay: '120ms' }}>
            <p className="text-text-muted leading-relaxed mb-6 font-light">
              {t.whyClaro.peopleParagraph}
            </p>
            <p className="text-text-light leading-relaxed">
              {t.whyClaro.guaranteeParagraph}
            </p>
          </div>
        </div>

        {/* Jak możemy pomóc */}
        <div className="mb-20 reveal">
          <h3 className="text-2xl md:text-3xl text-white mb-3 max-w-2xl">
            {t.whyClaro.helpTitle}
          </h3>
          <p className="text-text-muted mb-8 font-light max-w-2xl">
            {t.whyClaro.helpSubtitle}
          </p>
          <div className="flex flex-wrap gap-x-10 gap-y-4 mb-10 pb-10 border-b border-border">
            {t.whyClaro.financingOptions.map((option) => (
              <div key={option} className="flex items-center gap-2.5">
                <CheckCircle2 size={16} className="text-accent flex-shrink-0" />
                <span className="text-sm text-text-light">{option}</span>
              </div>
            ))}
          </div>
          <button onClick={() => scrollTo('#kalkulator')} className="btn-primary">
            {t.whyClaro.checkOffer}
            <ArrowRight size={18} />
          </button>
        </div>

        {/* Najlepsza oferta samochodu */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 mb-20">
          <div>
            <h3 className="text-2xl md:text-3xl text-white mb-5">
              {t.whyClaro.bestOfferTitle}
            </h3>
            <p className="text-text-muted leading-relaxed mb-5 font-light">
              {t.whyClaro.bestOfferP1}
            </p>
            <p className="text-text-muted leading-relaxed font-light">
              {t.whyClaro.guaranteeParagraph}
            </p>
          </div>
          <div className="card p-8 md:p-10">
            <p className="text-text-light leading-relaxed">
              {t.whyClaro.bestOfferCard}
            </p>
          </div>
        </div>

        {/* Atrakcyjne finansowanie */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 mb-20">
          <div className="card p-8 md:p-10">
            <h3 className="text-2xl md:text-3xl text-white mb-5">
              {t.whyClaro.financingTitle}
            </h3>
            <p className="text-text-muted leading-relaxed mb-6 font-light">
              {t.whyClaro.financingP1}
            </p>
            <p className="text-text-light leading-relaxed">
              {t.whyClaro.financingCard}
            </p>
          </div>
          <div>
            <div className="card p-8 md:p-10 mb-6">
              <p className="font-serif text-xl md:text-2xl text-white italic leading-relaxed">
                „{t.whyClaro.quote}”
              </p>
            </div>
            <div className="card p-8 md:p-10">
              <h3 className="text-xl text-white mb-4">{t.whyClaro.insuranceTitle}</h3>
              <p className="text-text-muted leading-relaxed mb-5 font-light">
                {t.whyClaro.insuranceP1}
              </p>
              <p className="text-text-muted leading-relaxed font-light">
                {t.whyClaro.insuranceP2}
              </p>
            </div>
          </div>
        </div>

        {/* Usługi dodatkowe */}
        <div className="reveal border-t border-border pt-10">
          <h3 className="text-xl text-white mb-4">{t.whyClaro.extraServicesTitle}</h3>
          <p className="text-text-light font-light">
            {t.whyClaro.extraServices.map((item, i) => (
              <span key={item}>
                {item}
                {i < t.whyClaro.extraServices.length - 1 && (
                  <span className="text-accent mx-3">·</span>
                )}
              </span>
            ))}
          </p>
        </div>
      </div>
    </section>
  );
}

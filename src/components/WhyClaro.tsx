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
        <div className="card p-8 md:p-12 mb-20">
          <h3 className="text-2xl md:text-3xl text-white mb-3">
            {t.whyClaro.helpTitle}
          </h3>
          <p className="text-text-muted mb-8 font-light">
            {t.whyClaro.helpSubtitle}
          </p>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
            {t.whyClaro.financingOptions.map((option) => (
              <div
                key={option}
                className="flex items-center gap-3 bg-input border border-border rounded p-4"
              >
                <CheckCircle2 size={18} className="text-accent flex-shrink-0" />
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
        <div className="card p-8 md:p-12">
          <h3 className="text-xl text-white mb-2">{t.whyClaro.extraServicesTitle}</h3>
          <div className="flex flex-wrap gap-3 mt-6">
            {t.whyClaro.extraServices.map((item) => (
              <span
                key={item}
                className="text-sm text-text-light border border-border rounded px-4 py-2 bg-input"
              >
                {item}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

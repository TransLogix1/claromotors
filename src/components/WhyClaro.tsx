import { CheckCircle2, ArrowRight, Layers, Calculator as CalculatorIcon, Handshake } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useLanguage } from '@/i18n/LanguageContext';

export default function WhyClaro() {
  const { t } = useLanguage();

  const cards = [
    { icon: Layers, to: '/oferta', title: t.whyClaro.ctaRow.offerTitle, desc: t.whyClaro.ctaRow.offerDesc },
    { icon: CalculatorIcon, to: '/kalkulator', title: t.whyClaro.ctaRow.calcTitle, desc: t.whyClaro.ctaRow.calcDesc },
    { icon: Handshake, to: '/negocjuj-cene', title: t.whyClaro.ctaRow.negotiateTitle, desc: t.whyClaro.ctaRow.negotiateDesc },
  ];

  return (
    <section id="dlaczego-my" className="section-padding bg-canvas">
      <div className="max-w-8xl mx-auto px-6 lg:px-10">
        {/* SI, CLARO */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-16">
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

        {/* Jak możemy pomóc — financing options */}
        <div className="mb-16 reveal">
          <h3 className="text-2xl md:text-3xl text-white mb-3 max-w-2xl">
            {t.whyClaro.helpTitle}
          </h3>
          <p className="text-text-muted mb-8 font-light max-w-2xl">
            {t.whyClaro.helpSubtitle}
          </p>
          <div className="flex flex-wrap gap-x-10 gap-y-4 pb-10 border-b border-border">
            {t.whyClaro.financingOptions.map((option) => (
              <div key={option} className="flex items-center gap-2.5">
                <CheckCircle2 size={16} className="text-accent flex-shrink-0" />
                <span className="text-sm text-text-light">{option}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Compact CTA row: full offer / calculator / negotiate */}
        <div className="grid sm:grid-cols-3 gap-6 mb-16">
          {cards.map((card) => (
            <Link key={card.to} to={card.to} className="card p-6 md:p-8 group hover:border-accent/50 transition-colors">
              <card.icon size={24} className="text-accent mb-4" />
              <h3 className="text-white mb-2 flex items-center gap-2">
                {card.title}
                <ArrowRight size={16} className="text-accent opacity-0 group-hover:opacity-100 transition-opacity" />
              </h3>
              <p className="text-sm text-text-muted font-light leading-relaxed">{card.desc}</p>
            </Link>
          ))}
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

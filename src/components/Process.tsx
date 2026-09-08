import { useEffect } from 'react';
import { useLanguage } from '@/i18n/LanguageContext';
import { useScrollReveal } from '@/hooks/useScrollReveal';

interface ProcessProps {
  standalonePage?: boolean;
}

export default function Process({ standalonePage = false }: ProcessProps) {
  const { t } = useLanguage();
  useScrollReveal([t]);

  useEffect(() => {
    if (standalonePage) window.scrollTo(0, 0);
  }, [standalonePage]);

  return (
    <section id="proces" className={`section-padding bg-canvas ${standalonePage ? 'pt-0 md:pt-0' : ''}`}>
      <div className="max-w-8xl mx-auto px-6 lg:px-10">
        <div className={`mb-14 md:mb-20 reveal ${standalonePage ? 'max-w-2xl' : ''}`}>
          <p className="eyebrow mb-4">{t.process.title}</p>
          <h2 className={`text-white mb-5 ${standalonePage ? 'text-4xl md:text-6xl' : 'text-3xl md:text-5xl'}`}>
            {t.process.title}
          </h2>
          <p className="text-text-muted text-lg max-w-2xl font-light">
            {t.process.subtitle}
          </p>
        </div>

        <div className="reveal">
          {t.process.steps.map((step) => (
            <div
              key={step.number}
              className="hairline-row flex flex-col md:flex-row md:items-baseline gap-3 md:gap-8 py-8 md:py-10 px-2 md:px-4"
            >
              <span className="font-serif text-3xl md:text-5xl text-border font-bold w-20 flex-shrink-0">
                {step.number}
              </span>
              <h3 className="text-xl md:text-2xl text-white md:w-80 flex-shrink-0 leading-snug">
                {step.title}
              </h3>
              <p className="text-text-muted leading-relaxed font-light max-w-2xl">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

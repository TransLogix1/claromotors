import { useEffect } from 'react';
import { Search, MessageSquare, FileCheck, Shield, Car } from 'lucide-react';
import { useLanguage } from '@/i18n/LanguageContext';
import { useScrollReveal } from '@/hooks/useScrollReveal';

const stepIcons = [Search, MessageSquare, FileCheck, Shield, Car];

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
    <section id="proces" className={`section-padding bg-canvas ${standalonePage ? 'pt-32 md:pt-36' : ''}`}>
      <div className="max-w-8xl mx-auto px-6 lg:px-10">
        <div className="mb-14 md:mb-20 reveal">
          <h2 className="text-3xl md:text-5xl text-white mb-4">
            {t.process.title}
          </h2>
          <p className="text-text-muted text-lg max-w-2xl font-light">
            {t.process.subtitle}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6">
          {t.process.steps.map((step, idx) => {
            const Icon = stepIcons[idx];
            return (
              <div key={step.number} className="relative reveal" style={{ transitionDelay: `${idx * 90}ms` }}>
                <div className="card card-interactive p-6 md:p-7 h-full">
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-11 h-11 flex items-center justify-center bg-accent-muted border border-accent/30 rounded">
                      <Icon size={22} className="text-accent" />
                    </div>
                    <span className="font-serif text-2xl text-border font-bold">
                      {step.number}
                    </span>
                  </div>
                  <h3 className="text-lg text-white mb-2.5 leading-snug">
                    {step.title}
                  </h3>
                  <p className="text-sm text-text-muted leading-relaxed font-light">
                    {step.description}
                  </p>
                </div>
                {idx < t.process.steps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-3 w-6 h-px bg-accent/30 z-10" />
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

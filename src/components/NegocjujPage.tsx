import { useEffect } from 'react';
import { CheckCircle2 } from 'lucide-react';
import { useLanguage } from '@/i18n/LanguageContext';
import InquiryForm from '@/components/InquiryForm';

export default function NegocjujPage() {
  const { t } = useLanguage();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="pt-20">
      <section className="section-padding">
        <div className="max-w-8xl mx-auto px-6 lg:px-10">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
            <div>
              <p className="eyebrow mb-3">{t.nav.negotiate}</p>
              <h1 className="text-3xl md:text-5xl text-white mb-6">{t.negocjujPage.title}</h1>
              <p className="text-text-muted text-lg leading-relaxed font-light mb-10">
                {t.negocjujPage.subtitle}
              </p>

              <h2 className="text-xl text-white mb-3">{t.negocjujPage.howTitle}</h2>
              <p className="text-text-muted leading-relaxed font-light mb-6">{t.negocjujPage.howBody}</p>

              <div className="space-y-3">
                {t.negocjujPage.points.map((point) => (
                  <div key={point} className="flex items-start gap-2.5">
                    <CheckCircle2 size={18} className="text-accent flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-text-light">{point}</span>
                  </div>
                ))}
              </div>
            </div>

            <InquiryForm subject="Negocjacja ceny — zapytanie ze strony" showCarField showBudgetField />
          </div>
        </div>
      </section>
    </div>
  );
}

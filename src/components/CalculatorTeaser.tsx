import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useLanguage } from '@/i18n/LanguageContext';

// Homepage teaser for the calculator — describes what it does, but the
// actual interactive tool lives only on the dedicated /kalkulator page.
export default function CalculatorTeaser() {
  const { t } = useLanguage();
  const navigate = useNavigate();

  return (
    <section id="kalkulator" className="section-padding bg-canvas">
      <div className="max-w-8xl mx-auto px-6 lg:px-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="reveal">
            <p className="eyebrow mb-4">{t.nav.calculator}</p>
            <h2 className="text-3xl md:text-5xl text-white mb-6">{t.kalkulatorPage.heroTitle}</h2>
            <p className="text-text-muted text-lg leading-relaxed font-light mb-8">
              {t.kalkulatorPage.heroSubtitle}
            </p>
            <button onClick={() => navigate('/kalkulator')} className="btn-primary">
              {t.nav.calculator}
              <ArrowRight size={18} />
            </button>
          </div>

          <div className="card reveal p-8 md:p-12" style={{ transitionDelay: '120ms' }}>
            <div className="space-y-5">
              {t.kalkulatorPage.steps.map((step) => (
                <div key={step.title} className="flex items-start gap-3">
                  <CheckCircle2 size={20} className="text-accent flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="text-white font-medium block mb-0.5">{step.title}</span>
                    <span className="text-sm text-text-muted font-light">{step.description}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

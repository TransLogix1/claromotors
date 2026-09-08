import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { HelpCircle } from 'lucide-react';
import { useLanguage } from '@/i18n/LanguageContext';
import Calculator from '@/components/Calculator';

export default function KalkulatorPage() {
  const { t } = useLanguage();
  const location = useLocation();
  const initialPrice = (location.state as { price?: number } | null)?.price;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="pt-20">
      <section className="section-padding pb-10">
        <div className="max-w-4xl mx-auto px-6 lg:px-10 text-center">
          <p className="eyebrow mb-3">{t.nav.calculator}</p>
          <h1 className="text-3xl md:text-5xl text-white mb-5">{t.kalkulatorPage.heroTitle}</h1>
          <p className="text-text-muted text-lg leading-relaxed font-light">
            {t.kalkulatorPage.heroSubtitle}
          </p>
        </div>
      </section>

      <Calculator initialPrice={initialPrice} />

      <section className="section-padding pt-0">
        <div className="max-w-8xl mx-auto px-6 lg:px-10">
          <h2 className="text-2xl md:text-3xl text-white mb-8">{t.kalkulatorPage.howTitle}</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {t.kalkulatorPage.steps.map((step, i) => (
              <div key={step.title} className="hairline-row py-5">
                <span className="font-serif text-2xl text-accent block mb-2">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <h3 className="text-white mb-2">{step.title}</h3>
                <p className="text-sm text-text-muted font-light leading-relaxed">{step.description}</p>
              </div>
            ))}
          </div>

          <h2 className="text-2xl md:text-3xl text-white mb-6">{t.kalkulatorPage.tableTitle}</h2>
          <div className="overflow-x-auto mb-16">
            <table className="w-full text-sm border-collapse">
              <tbody>
                {t.kalkulatorPage.tableRows.map((row) => (
                  <tr key={row.param} className="border-b border-border">
                    <td className="py-4 pr-4 text-white">{row.param}</td>
                    <td className="py-4 pr-4 text-accent">{row.installment}</td>
                    <td className="py-4 text-text-muted font-light">{row.payment}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="card p-8 md:p-10 mb-16">
            <h3 className="text-lg text-white mb-3">{t.kalkulatorPage.noteTitle}</h3>
            <p className="text-text-muted font-light leading-relaxed">{t.kalkulatorPage.noteBody}</p>
          </div>

          <h2 className="text-2xl md:text-3xl text-white mb-8">{t.kalkulatorPage.faqTitle}</h2>
          <div className="space-y-4 max-w-3xl">
            {t.kalkulatorPage.faq.map((item) => (
              <div key={item.q} className="card p-6">
                <div className="flex items-start gap-3 mb-2">
                  <HelpCircle size={18} className="text-accent flex-shrink-0 mt-0.5" />
                  <h3 className="text-white">{item.q}</h3>
                </div>
                <p className="text-sm text-text-muted font-light leading-relaxed pl-7">{item.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

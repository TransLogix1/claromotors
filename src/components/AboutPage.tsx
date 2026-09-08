import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Phone, Mail, ArrowRight, CheckCircle2 } from 'lucide-react';
import { useLanguage } from '@/i18n/LanguageContext';
import wojciechPhoto from '@/assets/wojciech.jpg';

export default function AboutPage() {
  const { t } = useLanguage();
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="pt-32 md:pt-36">
      {/* Intro + founder card */}
      <section id="o-nas" className="section-padding pb-16 bg-canvas">
        <div className="max-w-8xl mx-auto px-6 lg:px-10">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start mb-16">
            <div>
              <h1 className="text-3xl md:text-5xl text-white mb-6">
                {t.about.title}
              </h1>
              <p className="text-text-muted text-lg leading-relaxed mb-6 font-light">
                {t.about.p1}
              </p>
              <p className="text-text-muted leading-relaxed mb-6 font-light">
                {t.about.p2}
              </p>
              <p className="text-text-muted leading-relaxed font-light">
                {t.about.p3}
              </p>
            </div>

            {/* Owner Card */}
            <div className="card card-interactive p-6 md:p-10">
              <div className="flex items-start gap-5 mb-6">
                <div className="flex-shrink-0 w-20 h-20 rounded-full overflow-hidden border-2 border-accent/40">
                  <img src={wojciechPhoto} alt={t.about.founderName} className="w-full h-full object-cover" />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl text-white mb-1">{t.about.founderName}</h3>
                  <p className="text-sm text-text-muted mb-5">
                    {t.about.founderRole} — Claro Motors
                  </p>
                  <div className="space-y-3">
                    <a
                      href="tel:517195097"
                      className="flex items-center gap-3 text-text-light hover:text-accent transition-colors group"
                    >
                      <div className="w-9 h-9 flex items-center justify-center bg-input border border-border rounded group-hover:border-accent transition-colors">
                        <Phone size={16} className="text-accent" />
                      </div>
                      <span className="text-sm font-medium">517 195 097</span>
                    </a>
                    <a
                      href="mailto:biuro@claromotors.pl"
                      className="flex items-center gap-3 text-text-light hover:text-accent transition-colors group"
                    >
                      <div className="w-9 h-9 flex items-center justify-center bg-input border border-border rounded group-hover:border-accent transition-colors">
                        <Mail size={16} className="text-accent" />
                      </div>
                      <span className="text-sm font-medium">biuro@claromotors.pl</span>
                    </a>
                  </div>
                </div>
              </div>
              <button onClick={() => navigate('/kontakt')} className="btn-primary w-full">
                {t.about.goToContact}
                <ArrowRight size={18} />
              </button>
            </div>
          </div>

          {/* Stats row */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 border-t border-border pt-12">
            {t.about.stats.map((stat) => (
              <div key={stat.label}>
                <p className="font-serif text-3xl md:text-4xl text-accent mb-2">{stat.value}</p>
                <p className="text-sm text-text-muted font-light leading-snug">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Jak działamy */}
      <section className="section-padding pt-0 pb-16">
        <div className="max-w-8xl mx-auto px-6 lg:px-10">
          <h2 className="text-2xl md:text-4xl text-white mb-3 max-w-2xl">{t.about.howTitle}</h2>
          <p className="text-text-muted font-light max-w-2xl mb-12">{t.about.howSubtitle}</p>

          <div className="grid sm:grid-cols-3 gap-8">
            {t.about.steps.map((step, i) => (
              <div key={step.title} className="hairline-row py-6">
                <span className="font-serif text-2xl text-accent block mb-3">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <h3 className="text-white mb-2">{step.title}</h3>
                <p className="text-sm text-text-muted font-light leading-relaxed">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Dlaczego Claro Motors */}
      <section className="section-padding pt-0">
        <div className="max-w-8xl mx-auto px-6 lg:px-10">
          <h2 className="text-2xl md:text-4xl text-white mb-3 max-w-2xl">{t.about.whyTitle}</h2>
          <p className="text-text-muted font-light max-w-2xl mb-12">{t.about.whySubtitle}</p>

          <div className="grid sm:grid-cols-2 gap-6">
            {t.about.reasons.map((reason) => (
              <div key={reason.title} className="card p-6 md:p-8">
                <div className="flex items-start gap-3 mb-2">
                  <CheckCircle2 size={20} className="text-accent flex-shrink-0 mt-0.5" />
                  <h3 className="text-white">{reason.title}</h3>
                </div>
                <p className="text-sm text-text-muted font-light leading-relaxed pl-8">{reason.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

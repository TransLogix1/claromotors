import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Phone, Mail, ArrowRight } from 'lucide-react';
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
      <section id="o-nas" className="section-padding bg-canvas">
        <div className="max-w-8xl mx-auto px-6 lg:px-10">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
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
        </div>
      </section>
    </div>
  );
}

import { useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { ArrowLeft, ArrowRight, CheckCircle2, Phone } from 'lucide-react';
import { services } from '@/services';
import { FileText, Car, ShoppingCart, ShieldCheck, Shield, type LucideIcon } from 'lucide-react';

const iconMap: Record<string, LucideIcon> = {
  FileText,
  Car,
  ShoppingCart,
  ShieldCheck,
  Shield,
};

export default function ServiceDetail() {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const service = services.find((s) => s.slug === slug);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (!service) {
    return (
      <div className="min-h-screen flex items-center justify-center pt-20">
        <div className="text-center">
          <h2 className="text-3xl text-white mb-4">Usługa nie została znaleziona</h2>
          <Link to="/oferta" className="btn-primary">
            <ArrowLeft size={18} />
            Wróć do oferty
          </Link>
        </div>
      </div>
    );
  }

  const Icon = iconMap[service.icon] ?? FileText;

  const scrollToContact = () => {
    navigate('/');
    setTimeout(() => {
      const el = document.querySelector('#o-nas');
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }, 100);
  };

  return (
    <div className="pt-20">
      {/* Hero of the service page */}
      <section className="section-padding">
        <div className="max-w-8xl mx-auto px-6 lg:px-10">
          <Link
            to="/oferta"
            className="inline-flex items-center gap-2 text-sm text-text-muted hover:text-white transition-colors mb-8"
          >
            <ArrowLeft size={16} />
            Wróć do oferty
          </Link>

          <div className="flex items-start gap-5 mb-8">
            <div className="w-14 h-14 flex items-center justify-center bg-input border border-border rounded flex-shrink-0">
              <Icon size={28} className="text-white" />
            </div>
            <div>
              <h1 className="text-3xl md:text-5xl text-white mb-3">{service.title}</h1>
              <p className="text-lg text-text-muted max-w-2xl font-light leading-relaxed">
                {service.excerpt}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Main content */}
      <section className="pb-20">
        <div className="max-w-8xl mx-auto px-6 lg:px-10">
          <div className="grid lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 space-y-8">
              <div className="card p-8 md:p-10">
                <p className="text-text-light leading-relaxed text-lg">
                  {service.description}
                </p>
              </div>

              {service.details.map((detail, idx) => (
                <div key={idx} className="card p-8 md:p-10">
                  <h2 className="text-xl md:text-2xl text-white mb-4">
                    {detail.heading}
                  </h2>
                  <p className="text-text-muted leading-relaxed font-light">
                    {detail.body}
                  </p>
                </div>
              ))}
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Other services */}
              <div className="card p-6">
                <h3 className="text-lg text-white mb-5">Inne usługi</h3>
                <div className="space-y-2">
                  {services
                    .filter((s) => s.slug !== service.slug)
                    .map((s) => {
                      const OtherIcon = iconMap[s.icon] ?? FileText;
                      return (
                        <Link
                          key={s.slug}
                          to={`/oferta/${s.slug}`}
                          className="flex items-center gap-3 p-3 rounded hover:bg-input transition-colors group"
                        >
                          <div className="w-9 h-9 flex items-center justify-center bg-input border border-border rounded flex-shrink-0">
                            <OtherIcon size={16} className="text-text-muted group-hover:text-white transition-colors" />
                          </div>
                          <span className="text-sm text-text-muted group-hover:text-white transition-colors">
                            {s.shortTitle}
                          </span>
                          <ArrowRight size={14} className="ml-auto text-text-muted group-hover:text-white transition-colors" />
                        </Link>
                      );
                    })}
                </div>
              </div>

              {/* Contact CTA */}
              <div className="card p-6">
                <h3 className="text-lg text-white mb-2">Masz pytania?</h3>
                <p className="text-sm text-text-muted mb-5">
                  Zadzwoń do Wojciecha — odpowie na każde pytanie dotyczące finansowania i ubezpieczenia.
                </p>
                <a
                  href="tel:517195097"
                  className="flex items-center gap-3 p-4 bg-input border border-border rounded mb-4 hover:border-[#3a3f47] transition-colors"
                >
                  <Phone size={20} className="text-white" />
                  <div className="flex flex-col leading-tight">
                    <span className="text-sm font-semibold text-white">517 195 097</span>
                    <span className="text-[11px] text-text-muted">Wojciech — Bezpośredni kontakt</span>
                  </div>
                </a>
                <button onClick={scrollToContact} className="btn-secondary w-full">
                  Napisz do nas
                </button>
              </div>

              {/* Checklist */}
              <div className="card p-6">
                <h3 className="text-lg text-white mb-4">Co zyskujesz?</h3>
                <div className="space-y-3">
                  {[
                    'Negocjacja ceny z dealerem',
                    '3 warianty finansowania w 24h',
                    'Porównanie 18 ubezpieczycieli',
                    'Transport auta pod wskazany adres',
                  ].map((item) => (
                    <div key={item} className="flex items-start gap-2.5">
                      <CheckCircle2 size={18} className="text-white flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-text-muted">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

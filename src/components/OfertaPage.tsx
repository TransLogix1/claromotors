import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, FileText, Car, ShoppingCart, ShieldCheck, Shield, type LucideIcon } from 'lucide-react';
import { services } from '@/services';

const iconMap: Record<string, LucideIcon> = {
  FileText,
  Car,
  ShoppingCart,
  ShieldCheck,
  Shield,
};

export default function OfertaPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="pt-20">
      <section className="section-padding">
        <div className="max-w-8xl mx-auto px-6 lg:px-10">
          <div className="mb-14 md:mb-20">
            <h1 className="text-3xl md:text-5xl text-white mb-4">Oferta</h1>
            <p className="text-text-muted text-lg max-w-2xl font-light">
              Pięć obszarów, w których Claro Motors wspiera Cię na drodze do nowego samochodu. Wybierz interesujący Cię temat, aby poznać szczegóły.
            </p>
          </div>

          <div className="space-y-6">
            {services.map((service, idx) => {
              const Icon = iconMap[service.icon] ?? FileText;
              return (
                <Link
                  key={service.slug}
                  to={`/oferta/${service.slug}`}
                  className="card p-8 md:p-10 flex flex-col md:flex-row items-start gap-6 group hover:border-[#3a3f47] transition-colors"
                >
                  <div className="w-14 h-14 flex items-center justify-center bg-input border border-border rounded flex-shrink-0">
                    <Icon size={28} className="text-white" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-3">
                      <span className="font-serif text-2xl text-border font-bold">
                        {String(idx + 1).padStart(2, '0')}
                      </span>
                      <h2 className="text-xl md:text-2xl text-white">
                        {service.title}
                      </h2>
                    </div>
                    <p className="text-text-muted leading-relaxed font-light">
                      {service.excerpt}
                    </p>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-white flex-shrink-0 mt-2 md:mt-0">
                    Sprawdź szczegóły
                    <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}

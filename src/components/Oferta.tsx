import { ArrowRight, FileText, Car, ShoppingCart, ShieldCheck, Shield, type LucideIcon } from 'lucide-react';
import { Link } from 'react-router-dom';
import { services } from '@/services';

const iconMap: Record<string, LucideIcon> = {
  FileText,
  Car,
  ShoppingCart,
  ShieldCheck,
  Shield,
};

export default function Oferta() {
  return (
    <section id="oferta" className="section-padding">
      <div className="max-w-8xl mx-auto px-6 lg:px-10">
        <div className="mb-14 md:mb-20 reveal">
          <h2 className="text-3xl md:text-5xl text-white mb-4">Oferta</h2>
          <p className="text-text-muted text-lg max-w-2xl font-light">
            Pięć obszarów, w których Claro Motors wspiera Cię na drodze do nowego samochodu. Kliknij dowolny, aby poznać szczegóły.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => {
            const Icon = iconMap[service.icon] ?? FileText;
            return (
              <Link
                key={service.slug}
                to={`/oferta/${service.slug}`}
                className="card card-interactive reveal p-8 flex flex-col group"
                style={{ transitionDelay: `${(index % 3) * 80}ms` }}
              >
                <div className="w-12 h-12 flex items-center justify-center bg-accent-muted border border-accent/30 rounded mb-5 transition-colors group-hover:border-accent">
                  <Icon size={24} className="text-accent" />
                </div>
                <h3 className="text-xl text-white mb-3 leading-snug">
                  {service.title}
                </h3>
                <p className="text-sm text-text-muted leading-relaxed font-light flex-1">
                  {service.excerpt}
                </p>
                <div className="flex items-center gap-2 mt-6 text-sm text-white group-hover:text-accent transition-colors">
                  Sprawdź szczegóły
                  <ArrowRight size={16} className="group-hover:translate-x-1 group-hover:text-accent transition-all" />
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}

import { Quote } from 'lucide-react';
import { useLanguage } from '@/i18n/LanguageContext';

export default function Testimonial() {
  const { t } = useLanguage();

  return (
    <section className="section-padding bg-canvas">
      <div className="max-w-8xl mx-auto px-6 lg:px-10">
        <div className="card card-interactive reveal p-10 md:p-16 text-center max-w-3xl mx-auto">
          <Quote size={32} className="text-accent mx-auto mb-6" />
          <p className="font-serif text-2xl md:text-3xl text-white italic leading-relaxed mb-6">
            „{t.testimonial.quote}”
          </p>
          <p className="text-sm text-text-muted uppercase tracking-[0.15em]">
            {t.testimonial.author}
          </p>
        </div>
      </div>
    </section>
  );
}

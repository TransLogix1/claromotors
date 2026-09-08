import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Phone, Mail, Send, CheckCircle2, Facebook, Instagram } from 'lucide-react';
import { useLanguage } from '@/i18n/LanguageContext';
import wojciechPhoto from '@/assets/wojciech.jpg';

interface CalculatorState {
  rata: number;
  wplata: number;
  wykup: number;
}

const formatPLN = (value: number) =>
  new Intl.NumberFormat('pl-PL', { minimumFractionDigits: 2, maximumFractionDigits: 2 }).format(value) + ' PLN';

export default function ContactPage() {
  const { t } = useLanguage();
  const location = useLocation();
  const calculatorData = (location.state as CalculatorState | null) ?? null;

  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    nip: '',
    message: '',
    consent: false,
  });
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
    if (calculatorData) {
      const msg = t.contact.calculatorMessage(
        formatPLN(calculatorData.rata),
        formatPLN(calculatorData.wplata),
        formatPLN(calculatorData.wykup)
      );
      setForm((prev) => ({ ...prev, message: msg }));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.consent) return;
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setForm({ name: '', email: '', phone: '', nip: '', message: '', consent: false });
    }, 3500);
  };

  return (
    <div className="pt-32 md:pt-36">
      <section id="kontakt" className="section-padding bg-canvas">
        <div className="max-w-8xl mx-auto px-6 lg:px-10">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
            {/* Left: direct contact + social */}
            <div>
              <h1 className="text-3xl md:text-5xl text-white mb-6">{t.nav.contact}</h1>
              <p className="text-text-muted text-lg leading-relaxed mb-8 font-light">
                {t.contact.subtitle}
              </p>

              <div className="card p-6 md:p-8 mb-6">
                <div className="flex items-center gap-4 mb-5">
                  <div className="flex-shrink-0 w-14 h-14 rounded-full overflow-hidden border-2 border-accent/40">
                    <img src={wojciechPhoto} alt={t.about.founderName} className="w-full h-full object-cover" />
                  </div>
                  <div>
                    <h3 className="text-xl text-white mb-0.5">{t.about.founderName}</h3>
                    <p className="text-sm text-text-muted">{t.about.founderRole} — Claro Motors</p>
                  </div>
                </div>
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

              <div className="flex gap-3">
                <a
                  href="https://www.facebook.com/claromotors/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Facebook"
                  className="w-11 h-11 flex items-center justify-center bg-input border border-border rounded hover:border-accent transition-colors group"
                >
                  <Facebook size={18} className="text-text-muted group-hover:text-accent transition-colors" />
                </a>
                <a
                  href="https://www.instagram.com/claromotors/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                  className="w-11 h-11 flex items-center justify-center bg-input border border-border rounded hover:border-accent transition-colors group"
                >
                  <Instagram size={18} className="text-text-muted group-hover:text-accent transition-colors" />
                </a>
              </div>
            </div>

            {/* Right: Contact Form */}
            <div>
              <div className="card card-interactive p-6 md:p-10">
                <h2 className="text-2xl text-white mb-2">{t.contact.title}</h2>
                <p className="text-sm text-text-muted mb-8">
                  {t.contact.subtitle}
                </p>

                {!submitted ? (
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div>
                      <label className="block text-sm text-text-muted mb-2 font-medium">
                        {t.contact.fullName}
                      </label>
                      <input
                        type="text"
                        required
                        value={form.name}
                        onChange={(e) => setForm({ ...form, name: e.target.value })}
                        placeholder="Jan Kowalski"
                        className="input-field"
                      />
                    </div>
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm text-text-muted mb-2 font-medium">
                          {t.contact.email}
                        </label>
                        <input
                          type="email"
                          required
                          value={form.email}
                          onChange={(e) => setForm({ ...form, email: e.target.value })}
                          placeholder="jan@firma.pl"
                          className="input-field"
                        />
                      </div>
                      <div>
                        <label className="block text-sm text-text-muted mb-2 font-medium">
                          {t.contact.phone}
                        </label>
                        <input
                          type="tel"
                          required
                          value={form.phone}
                          onChange={(e) => setForm({ ...form, phone: e.target.value })}
                          placeholder="500 000 000"
                          className="input-field"
                        />
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm text-text-muted mb-2 font-medium">
                        {t.contact.nip}
                      </label>
                      <input
                        type="text"
                        value={form.nip}
                        onChange={(e) => setForm({ ...form, nip: e.target.value })}
                        placeholder="000-000-00-00"
                        className="input-field"
                      />
                    </div>
                    <div>
                      <label className="block text-sm text-text-muted mb-2 font-medium">
                        {t.contact.message}
                      </label>
                      <textarea
                        required
                        rows={5}
                        value={form.message}
                        onChange={(e) => setForm({ ...form, message: e.target.value })}
                        placeholder={t.contact.messagePlaceholder}
                        className="input-field resize-none"
                      />
                    </div>
                    <label className="flex items-start gap-3 cursor-pointer">
                      <input
                        type="checkbox"
                        required
                        checked={form.consent}
                        onChange={(e) => setForm({ ...form, consent: e.target.checked })}
                        className="mt-1 w-4 h-4 accent-accent cursor-pointer"
                      />
                      <span className="text-xs text-text-muted leading-relaxed">
                        {t.contact.consent}
                      </span>
                    </label>
                    <button type="submit" className="btn-primary w-full">
                      {t.contact.send}
                      <Send size={16} />
                    </button>
                  </form>
                ) : (
                  <div className="text-center py-16">
                    <CheckCircle2 size={48} className="text-accent mx-auto mb-4" />
                    <h3 className="text-2xl text-white mb-2">{t.contact.sentTitle}</h3>
                    <p className="text-text-muted">
                      {t.contact.sentBody}
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

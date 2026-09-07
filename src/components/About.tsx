import { useState, useEffect, type Ref } from 'react';
import { Phone, Mail, Send, CheckCircle2, User } from 'lucide-react';

interface AboutProps {
  contactRef: Ref<HTMLDivElement>;
  calculatorData: { rata: number; wplata: number; wykup: number } | null;
}

export default function About({ contactRef, calculatorData }: AboutProps) {
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
    if (calculatorData) {
      const msg = `Prośba o kontakt z wyliczonymi warunkami leasingu:\n\nMiesięczna rata netto: ${calculatorData.rata.toFixed(2)} PLN\nWpłata własna: ${calculatorData.wplata.toFixed(2)} PLN\nWykup końcowy: ${calculatorData.wykup.toFixed(2)} PLN`;
      setForm((prev) => ({ ...prev, message: msg }));
    }
  }, [calculatorData]);

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
    <section id="o-nas" className="section-padding bg-canvas">
      <div className="max-w-8xl mx-auto px-6 lg:px-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Left: About + Owner */}
          <div>
            <h2 className="text-3xl md:text-5xl text-white mb-6">
              O Claro Motors
            </h2>
            <p className="text-text-muted text-lg leading-relaxed mb-6 font-light">
              Claro Motors działa od 2018 roku. W pierwszym kwartale sprzedażnym przekazaliśmy klientom 120 aut. Każda transakcja to osobisty kontakt z właścicielem, a nie kolejka konsultantów.
            </p>
            <p className="text-text-muted leading-relaxed mb-10 font-light">
              Naszym fundamentem jest powtarzalny proces: negocjacja ceny z dealerem, dobór formy finansowania pod CIT/PIT i VAT, porównanie 18 towarzystw ubezpieczeniowych. Wynik to gotowy pojazd z pełną dokumentacją, dowieziony pod wskazany adres.
            </p>

            {/* Owner Card */}
            <div className="card p-6 md:p-8">
              <div className="flex items-start gap-5">
                <div className="flex-shrink-0 w-16 h-16 flex items-center justify-center bg-input border border-border rounded-full">
                  <User size={28} className="text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl text-white mb-1">Wojciech</h3>
                  <p className="text-sm text-text-muted mb-4">
                    Założyciel i Główny Doradca Claro Motors
                  </p>
                  <div className="space-y-3">
                    <a
                      href="tel:517195097"
                      className="flex items-center gap-3 text-text-light hover:text-white transition-colors group"
                    >
                      <div className="w-9 h-9 flex items-center justify-center bg-input border border-border rounded">
                        <Phone size={16} className="text-white" />
                      </div>
                      <span className="text-sm font-medium">517 195 097</span>
                    </a>
                    <a
                      href="mailto:biuro@claromotors.pl"
                      className="flex items-center gap-3 text-text-light hover:text-white transition-colors group"
                    >
                      <div className="w-9 h-9 flex items-center justify-center bg-input border border-border rounded">
                        <Mail size={16} className="text-white" />
                      </div>
                      <span className="text-sm font-medium">biuro@claromotors.pl</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Contact Form */}
          <div ref={contactRef}>
            <div className="card p-6 md:p-10">
              <h3 className="text-2xl text-white mb-2">Formularz kontaktowy</h3>
              <p className="text-sm text-text-muted mb-8">
                Wypełnij formularz, a Wojciech oddzwoni w ciągu 1 dnia roboczego z gotowymi wariantami finansowania.
              </p>

              {!submitted ? (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div>
                    <label className="block text-sm text-text-muted mb-2 font-medium">
                      Imię i nazwisko
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
                        Email
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
                        Telefon
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
                      NIP
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
                      Treść wiadomości
                    </label>
                    <textarea
                      required
                      rows={5}
                      value={form.message}
                      onChange={(e) => setForm({ ...form, message: e.target.value })}
                      placeholder="Opisz, jakiego auta szukasz i w jakiej formie finansowania."
                      className="input-field resize-none"
                    />
                  </div>
                  <label className="flex items-start gap-3 cursor-pointer">
                    <input
                      type="checkbox"
                      required
                      checked={form.consent}
                      onChange={(e) => setForm({ ...form, consent: e.target.checked })}
                      className="mt-1 w-4 h-4 accent-white cursor-pointer"
                    />
                    <span className="text-xs text-text-muted leading-relaxed">
                      Wyrażam zgodę na przetwarzanie moich danych osobowych przez Claro Motors w celu odpowiedzi na zapytanie, zgodnie z RODO.
                    </span>
                  </label>
                  <button type="submit" className="btn-primary w-full">
                    Wyślij wiadomość
                    <Send size={16} />
                  </button>
                </form>
              ) : (
                <div className="text-center py-16">
                  <CheckCircle2 size={48} className="text-white mx-auto mb-4" />
                  <h3 className="text-2xl text-white mb-2">Wiadomość wysłana</h3>
                  <p className="text-text-muted">
                    Wojciech skontaktuje się z Tobą w ciągu 1 dnia roboczego.
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

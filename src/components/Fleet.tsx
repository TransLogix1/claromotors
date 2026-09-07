import { useState } from 'react';
import { X, Send, CheckCircle2, Gauge, Fuel, Calendar } from 'lucide-react';
import { vehicles, type Vehicle } from '@/types';

const formatPLN = (value: number): string => {
  return new Intl.NumberFormat('pl-PL', {
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(value) + ' PLN';
};

export default function Fleet() {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedCar, setSelectedCar] = useState<Vehicle | null>(null);
  const [form, setForm] = useState({ cena: '', name: '', phone: '', email: '' });
  const [submitted, setSubmitted] = useState(false);

  const openModal = (vehicle: Vehicle) => {
    setSelectedCar(vehicle);
    setForm({ cena: '', name: '', phone: '', email: '' });
    setSubmitted(false);
    setModalOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setModalOpen(false);
    document.body.style.overflow = '';
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      closeModal();
    }, 2000);
  };

  return (
    <section id="flota" className="section-padding">
      <div className="max-w-8xl mx-auto px-6 lg:px-10">
        <div className="mb-14 md:mb-20">
          <h2 className="text-3xl md:text-5xl text-white mb-4">
            Flota Pojazdów
          </h2>
          <p className="text-text-muted text-lg max-w-2xl font-light">
            Modele dostępne w bieżącej ofercie. Każde auto pochodzi z polskiego salonu z pełną gwarancją producenta. Kliknij „Negocjuj cenę”, aby wysłać propozycję bezpośrednio do Wojciecha.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {vehicles.map((vehicle) => (
            <div key={vehicle.id} className="card overflow-hidden flex flex-col group">
              {/* Image */}
              <div className="relative h-52 bg-input overflow-hidden">
                <img
                  src={vehicle.image}
                  alt={vehicle.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-container/90 via-transparent to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <h3 className="text-xl text-white">{vehicle.name}</h3>
                </div>
              </div>

              {/* Specs */}
              <div className="p-5 flex flex-col flex-1">
                <div className="grid grid-cols-3 gap-3 mb-5">
                  <div className="flex flex-col gap-1">
                    <div className="flex items-center gap-1.5 text-text-muted">
                      <Gauge size={14} />
                      <span className="text-xs">Moc</span>
                    </div>
                    <span className="text-sm text-white font-medium">{vehicle.power}</span>
                  </div>
                  <div className="flex flex-col gap-1">
                    <div className="flex items-center gap-1.5 text-text-muted">
                      <Fuel size={14} />
                      <span className="text-xs">Paliwo</span>
                    </div>
                    <span className="text-sm text-white font-medium">{vehicle.fuel}</span>
                  </div>
                  <div className="flex flex-col gap-1">
                    <div className="flex items-center gap-1.5 text-text-muted">
                      <Calendar size={14} />
                      <span className="text-xs">Rok</span>
                    </div>
                    <span className="text-sm text-white font-medium">{vehicle.year}</span>
                  </div>
                </div>

                <div className="flex items-center justify-between pt-4 border-t border-border mb-5">
                  <span className="text-sm text-text-muted">Cena wyjściowa netto</span>
                  <span className="text-lg text-white font-semibold tabular-nums">
                    {formatPLN(vehicle.price)}
                  </span>
                </div>

                <button
                  onClick={() => openModal(vehicle)}
                  className="btn-secondary w-full mt-auto"
                >
                  Negocjuj cenę
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Negotiation Modal */}
      {modalOpen && selectedCar && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 modal-overlay"
          style={{ backgroundColor: 'rgba(15, 16, 18, 0.85)' }}
          onClick={closeModal}
        >
          <div
            className="card w-full max-w-lg p-6 md:p-8 modal-content relative"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 text-text-muted hover:text-white transition-colors"
              aria-label="Zamknij"
            >
              <X size={22} />
            </button>

            {!submitted ? (
              <>
                <h3 className="text-2xl text-white mb-1.5">
                  Propozycja cenowa dla:
                </h3>
                <p className="text-lg text-text-muted mb-6 font-medium">
                  {selectedCar.name}
                </p>
                <p className="text-sm text-text-muted mb-6">
                  Cena wyjściowa: <span className="text-white font-medium">{formatPLN(selectedCar.price)}</span> netto
                </p>

                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="block text-sm text-text-muted mb-2 font-medium">
                      Twoja proponowana cena netto (PLN)
                    </label>
                    <input
                      type="number"
                      required
                      value={form.cena}
                      onChange={(e) => setForm({ ...form, cena: e.target.value })}
                      placeholder={String(selectedCar.price)}
                      className="input-field"
                    />
                  </div>
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
                  <div>
                    <label className="block text-sm text-text-muted mb-2 font-medium">
                      Numer telefonu kontaktowego
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
                  <div>
                    <label className="block text-sm text-text-muted mb-2 font-medium">
                      Adres e-mail
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
                  <button type="submit" className="btn-primary w-full mt-2">
                    Wyślij propozycję cenową do Wojciecha
                    <Send size={16} />
                  </button>
                </form>
              </>
            ) : (
              <div className="text-center py-12">
                <CheckCircle2 size={56} className="text-white mx-auto mb-4" />
                <h3 className="text-2xl text-white mb-2">Propozycja wysłana</h3>
                <p className="text-text-muted">
                  Wojciech skontaktuje się z Tobą w ciągu 24 godzin z odpowiedzią.
                </p>
              </div>
            )}
          </div>
        </div>
      )}
    </section>
  );
}

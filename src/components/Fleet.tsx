import { useState } from 'react';
import { X, Send, CheckCircle2, Gauge, Fuel, Calendar } from 'lucide-react';
import { vehicles, type Vehicle } from '@/types';
import { useLanguage } from '@/i18n/LanguageContext';

const formatPLN = (value: number): string => {
  return new Intl.NumberFormat('pl-PL', {
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(value) + ' PLN';
};

export default function Fleet() {
  const { t } = useLanguage();
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
        <div className="mb-14 md:mb-20 reveal">
          <h2 className="text-3xl md:text-5xl text-white mb-4">
            {t.fleet.title}
          </h2>
          <p className="text-text-muted text-lg max-w-2xl font-light">
            {t.fleet.subtitle}
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {vehicles.map((vehicle, index) => (
            <div
              key={vehicle.id}
              className="card card-interactive reveal overflow-hidden flex flex-col group"
              style={{ transitionDelay: `${(index % 3) * 80}ms` }}
            >
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

              <div className="p-5 flex flex-col flex-1">
                <div className="grid grid-cols-3 gap-3 mb-5">
                  <div className="flex flex-col gap-1">
                    <div className="flex items-center gap-1.5 text-text-muted">
                      <Gauge size={14} />
                      <span className="text-xs">{t.fleet.power}</span>
                    </div>
                    <span className="text-sm text-white font-medium">{vehicle.power}</span>
                  </div>
                  <div className="flex flex-col gap-1">
                    <div className="flex items-center gap-1.5 text-text-muted">
                      <Fuel size={14} />
                      <span className="text-xs">{t.fleet.fuel}</span>
                    </div>
                    <span className="text-sm text-white font-medium">{vehicle.fuel}</span>
                  </div>
                  <div className="flex flex-col gap-1">
                    <div className="flex items-center gap-1.5 text-text-muted">
                      <Calendar size={14} />
                      <span className="text-xs">{t.fleet.year}</span>
                    </div>
                    <span className="text-sm text-white font-medium">{vehicle.year}</span>
                  </div>
                </div>

                <div className="flex items-center justify-between pt-4 border-t border-border mb-5">
                  <span className="text-sm text-text-muted">{t.fleet.basePrice}</span>
                  <span className="text-lg text-accent font-semibold tabular-nums">
                    {formatPLN(vehicle.price)}
                  </span>
                </div>

                <button
                  onClick={() => openModal(vehicle)}
                  className="btn-secondary w-full mt-auto"
                >
                  {t.fleet.negotiate}
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
              aria-label="Close"
            >
              <X size={22} />
            </button>

            {!submitted ? (
              <>
                <h3 className="text-2xl text-white mb-1.5">
                  {t.fleet.modalTitle}
                </h3>
                <p className="text-lg text-text-muted mb-6 font-medium">
                  {selectedCar.name}
                </p>
                <p className="text-sm text-text-muted mb-6">
                  {t.fleet.modalBasePrice} <span className="text-white font-medium">{formatPLN(selectedCar.price)}</span>
                </p>

                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="block text-sm text-text-muted mb-2 font-medium">
                      {t.fleet.yourPrice}
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
                      {t.fleet.fullName}
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
                      {t.fleet.phone}
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
                      {t.fleet.email}
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
                    {t.fleet.sendProposal}
                    <Send size={16} />
                  </button>
                </form>
              </>
            ) : (
              <div className="text-center py-12">
                <CheckCircle2 size={56} className="text-accent mx-auto mb-4" />
                <h3 className="text-2xl text-white mb-2">{t.fleet.sentTitle}</h3>
                <p className="text-text-muted">
                  {t.fleet.sentBody}
                </p>
              </div>
            )}
          </div>
        </div>
      )}
    </section>
  );
}

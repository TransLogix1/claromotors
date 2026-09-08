import { useState } from 'react';
import { X, Send, CheckCircle2 } from 'lucide-react';
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

  const [featured, ...rest] = vehicles;

  return (
    <section id="flota" className="section-padding">
      <div className="max-w-8xl mx-auto px-6 lg:px-10">
        <div className="mb-14 md:mb-16 reveal grid md:grid-cols-2 gap-6 items-end">
          <div>
            <p className="eyebrow mb-4">{t.fleet.title}</p>
            <h2 className="text-3xl md:text-5xl text-white">{t.fleet.title}</h2>
          </div>
          <p className="text-text-muted text-lg font-light md:text-right md:ml-auto md:max-w-md">
            {t.fleet.subtitle}
          </p>
        </div>

        {/* Featured vehicle — large asymmetric showcase */}
        <div className="reveal grid lg:grid-cols-5 gap-6 mb-6">
          <div className="lg:col-span-3 relative h-80 md:h-[30rem] overflow-hidden rounded group">
            <img
              src={featured.image}
              alt={featured.name}
              className="w-full h-full object-cover img-grade transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-canvas via-canvas/10 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-6 md:p-10">
              <p className="eyebrow mb-2">{t.hero.featuredBadge}</p>
              <h3 className="text-3xl md:text-5xl text-white">{featured.name}</h3>
            </div>
          </div>
          <div className="lg:col-span-2 flex flex-col justify-between border-t lg:border-t-0 lg:border-l border-border pt-6 lg:pt-0 lg:pl-8">
            <div className="grid grid-cols-3 gap-4 mb-8">
              <div>
                <p className="text-xs text-text-muted mb-1.5">{t.fleet.power}</p>
                <p className="text-white font-medium">{featured.power}</p>
              </div>
              <div>
                <p className="text-xs text-text-muted mb-1.5">{t.fleet.fuel}</p>
                <p className="text-white font-medium">{featured.fuel}</p>
              </div>
              <div>
                <p className="text-xs text-text-muted mb-1.5">{t.fleet.year}</p>
                <p className="text-white font-medium">{featured.year}</p>
              </div>
            </div>
            <div>
              <div className="flex items-center justify-between pt-6 border-t border-border mb-6">
                <span className="text-sm text-text-muted">{t.fleet.basePrice}</span>
                <span className="text-2xl text-accent font-serif font-semibold tabular-nums">
                  {formatPLN(featured.price)}
                </span>
              </div>
              <button onClick={() => openModal(featured)} className="btn-primary w-full">
                {t.fleet.negotiate}
              </button>
            </div>
          </div>
        </div>

        {/* Rest of the fleet — tighter grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {rest.map((vehicle, index) => (
            <div key={vehicle.id} className="reveal group" style={{ transitionDelay: `${(index % 4) * 70}ms` }}>
              <div className="relative h-48 overflow-hidden rounded mb-4">
                <img
                  src={vehicle.image}
                  alt={vehicle.name}
                  className="w-full h-full object-cover img-grade transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-canvas/60 via-transparent to-transparent" />
              </div>
              <h3 className="text-lg text-white mb-1">{vehicle.name}</h3>
              <p className="text-xs text-text-muted mb-3">{vehicle.power} · {vehicle.fuel}</p>
              <div className="flex items-center justify-between mb-4">
                <span className="text-sm text-text-muted">{t.fleet.basePrice}</span>
                <span className="text-base text-accent font-semibold tabular-nums">
                  {formatPLN(vehicle.price)}
                </span>
              </div>
              <button onClick={() => openModal(vehicle)} className="btn-secondary w-full">
                {t.fleet.negotiate}
              </button>
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

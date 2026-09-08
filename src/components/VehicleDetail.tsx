import { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { ArrowLeft, Gauge, Fuel, Calendar, Users, DoorOpen, Cog, Milestone, Palette } from 'lucide-react';
import { vehicles } from '@/types';
import { useLanguage } from '@/i18n/LanguageContext';
import InquiryForm from '@/components/InquiryForm';

const formatPLN = (value: number) =>
  new Intl.NumberFormat('pl-PL', { maximumFractionDigits: 0 }).format(value) + ' PLN';

export default function VehicleDetail() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { t, lang } = useLanguage();
  const vehicle = vehicles.find((v) => v.id === id);
  const [activePhoto, setActivePhoto] = useState(0);

  useEffect(() => {
    window.scrollTo(0, 0);
    setActivePhoto(0);
  }, [id]);

  if (!vehicle) {
    return (
      <div className="min-h-screen flex items-center justify-center pt-20">
        <div className="text-center">
          <h2 className="text-3xl text-white mb-4">404</h2>
          <button onClick={() => navigate('/#flota')} className="btn-primary">
            <ArrowLeft size={18} />
            {t.fleet.title}
          </button>
        </div>
      </div>
    );
  }

  const photos = [vehicle.image, ...(vehicle.gallery ?? [])].filter(Boolean);

  const specs: { icon: typeof Gauge; label: string; value: string }[] = [
    { icon: Gauge, label: t.fleet.power, value: vehicle.power },
    { icon: Fuel, label: t.fleet.fuel, value: vehicle.fuel },
    { icon: Calendar, label: t.fleet.year, value: vehicle.year },
    ...(vehicle.bodyType ? [{ icon: Cog, label: lang === 'pl' ? 'Nadwozie' : 'Body type', value: vehicle.bodyType }] : []),
    ...(vehicle.transmission ? [{ icon: Cog, label: lang === 'pl' ? 'Skrzynia biegów' : 'Transmission', value: vehicle.transmission }] : []),
    ...(vehicle.drivetrain ? [{ icon: Cog, label: lang === 'pl' ? 'Napęd' : 'Drivetrain', value: vehicle.drivetrain }] : []),
    ...(vehicle.seats ? [{ icon: Users, label: lang === 'pl' ? 'Liczba miejsc' : 'Seats', value: String(vehicle.seats) }] : []),
    ...(vehicle.doors ? [{ icon: DoorOpen, label: lang === 'pl' ? 'Liczba drzwi' : 'Doors', value: String(vehicle.doors) }] : []),
    ...(vehicle.mileage ? [{ icon: Milestone, label: lang === 'pl' ? 'Przebieg' : 'Mileage', value: vehicle.mileage }] : []),
  ];

  return (
    <div className="pt-20">
      <section className="section-padding">
        <div className="max-w-8xl mx-auto px-6 lg:px-10">
          <Link
            to="/#flota"
            className="inline-flex items-center gap-2 text-sm text-text-muted hover:text-accent transition-colors mb-8"
          >
            <ArrowLeft size={16} />
            {t.fleet.title}
          </Link>

          <div className="grid lg:grid-cols-5 gap-10 lg:gap-12">
            {/* Gallery */}
            <div className="lg:col-span-3">
              <div className="aspect-[4/3] rounded overflow-hidden mb-3 border border-border">
                <img src={photos[activePhoto]} alt={vehicle.name} className="w-full h-full object-cover img-grade" />
              </div>
              {photos.length > 1 && (
                <div className="flex gap-3 overflow-x-auto pb-1">
                  {photos.map((photo, i) => (
                    <button
                      key={photo + i}
                      onClick={() => setActivePhoto(i)}
                      className={`flex-shrink-0 w-20 h-16 rounded overflow-hidden border transition-colors ${
                        activePhoto === i ? 'border-accent' : 'border-border hover:border-text-muted'
                      }`}
                    >
                      <img src={photo} alt="" className="w-full h-full object-cover" />
                    </button>
                  ))}
                </div>
              )}

              <h1 className="text-2xl md:text-4xl text-white mt-8 mb-2">{vehicle.name}</h1>
              {vehicle.description && (
                <p className="text-text-muted leading-relaxed font-light mb-8 max-w-2xl">{vehicle.description}</p>
              )}

              <h2 className="text-lg text-white mb-4">{lang === 'pl' ? 'Specyfikacja' : 'Specification'}</h2>
              <div className="grid sm:grid-cols-2 gap-x-8">
                {specs.map((spec) => (
                  <div key={spec.label} className="hairline-row flex items-center justify-between py-3">
                    <span className="flex items-center gap-2.5 text-sm text-text-muted">
                      <spec.icon size={16} className="text-accent" />
                      {spec.label}
                    </span>
                    <span className="text-sm text-white">{spec.value}</span>
                  </div>
                ))}
              </div>

              {vehicle.colors && vehicle.colors.length > 0 && (
                <div className="mt-8">
                  <h2 className="text-lg text-white mb-3 flex items-center gap-2.5">
                    <Palette size={16} className="text-accent" />
                    {lang === 'pl' ? 'Dostępne kolory' : 'Available colors'}
                  </h2>
                  <div className="flex flex-wrap gap-2">
                    {vehicle.colors.map((c) => (
                      <span key={c} className="text-xs text-text-muted border border-border rounded px-3 py-1.5">
                        {c}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Sidebar: price + CTAs + form */}
            <div className="lg:col-span-2 space-y-6">
              <div className="card p-6 md:p-8">
                <p className="text-sm text-text-muted mb-1">{t.fleet.basePrice}</p>
                <p className="text-2xl md:text-3xl text-white mb-4">{formatPLN(vehicle.price)}</p>
                {vehicle.monthlyFrom && (
                  <p className="text-sm text-accent mb-6">
                    {t.hero.installmentFrom} {formatPLN(vehicle.monthlyFrom)} / {lang === 'pl' ? 'mies. netto' : 'mo. net'}
                  </p>
                )}
                <button
                  onClick={() => navigate('/kalkulator', { state: { price: vehicle.price } })}
                  className="btn-secondary w-full mb-3"
                >
                  {t.hero.calcForModel}
                </button>
                <button
                  onClick={() => document.getElementById('zapytanie')?.scrollIntoView({ behavior: 'smooth' })}
                  className="btn-primary w-full"
                >
                  {t.fleet.negotiate}
                </button>
              </div>

              <div id="zapytanie">
                <InquiryForm
                  subject={`Zapytanie o: ${vehicle.name}`}
                  showCarField={false}
                  showBudgetField
                  defaultMessage={lang === 'pl' ? `Interesuje mnie: ${vehicle.name}.` : `I'm interested in: ${vehicle.name}.`}
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

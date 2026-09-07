import { Search, MessageSquare, FileCheck, Shield, Car } from 'lucide-react';

const steps = [
  {
    icon: Search,
    number: '01',
    title: 'Wybór samochodu',
    description:
      'Określasz preferencje: marka, model, wyposażenie, budżet. My filtrujemy dostępny rynek i przygotowujemy listę pojazdów pasujących do Twoich kryteriów.',
  },
  {
    icon: MessageSquare,
    number: '02',
    title: 'Bezpłatny kontakt z doradcą',
    description:
      'Rozmawiasz z Wojciechem bezpośrednio. Przygotowujemy 3 warianty finansowania: leasing operacyjny, wynajem długoterminowy i kredyt — z porównaniem rat i kosztów podatkowych.',
  },
  {
    icon: FileCheck,
    number: '03',
    title: 'Analiza i akceptacja wniosku',
    description:
      'Składamy wniosek leasingowy u wybranego partnera finansowego. Decyzja kredytowa w ciągu 24 godzin. Ty dostajesz gotową umowę do podpisu.',
  },
  {
    icon: Shield,
    number: '04',
    title: 'Dobór ubezpieczenia AC/OC i GAP',
    description:
      'Porównujemy oferty 18 towarzystw ubezpieczeniowych. Dobieramy polisę AC/OC oraz GAP Fakturowy chroniący różnicę między kwotą na fakturze a wartością rynkową.',
  },
  {
    icon: Car,
    number: '05',
    title: 'Odbiór gotowego pojazdu',
    description:
      'Odbierasz zarejestrowany i ubezpieczony pojazd prosto z salonu. Transport pod wskazany adres w całej Polsce wliczony w cenę. Przekazujemy komplet dokumentów.',
  },
];

export default function Process() {
  return (
    <section id="proces" className="section-padding bg-canvas">
      <div className="max-w-8xl mx-auto px-6 lg:px-10">
        <div className="mb-14 md:mb-20">
          <h2 className="text-3xl md:text-5xl text-white mb-4">
            Proces krok po kroku
          </h2>
          <p className="text-text-muted text-lg max-w-2xl font-light">
            Pięć etapów od pierwszego kontaktu do odebrania auta. Każdy z nich ma określony czas trwania i konkretny rezultat.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6">
          {steps.map((step, idx) => {
            const Icon = step.icon;
            return (
              <div key={step.number} className="relative">
                <div className="card p-6 md:p-7 h-full">
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-11 h-11 flex items-center justify-center bg-input border border-border rounded">
                      <Icon size={22} className="text-white" />
                    </div>
                    <span className="font-serif text-2xl text-border font-bold">
                      {step.number}
                    </span>
                  </div>
                  <h3 className="text-lg text-white mb-2.5 leading-snug">
                    {step.title}
                  </h3>
                  <p className="text-sm text-text-muted leading-relaxed font-light">
                    {step.description}
                  </p>
                </div>
                {idx < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-3 w-6 h-px bg-border z-10" />
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

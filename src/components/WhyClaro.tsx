import { CheckCircle2, ArrowRight } from 'lucide-react';

const siClaroPoints = [
  'Znajdziemy dla Ciebie wymarzony samochód?',
  'Wynegocjujemy dla Ciebie najlepsze warunki?',
  'Znajdziemy dla Ciebie najlepszą formę finansowania?',
  'Zaoszczędzimy Twój cenny czas?',
];

const financingOptions = [
  'Leasing operacyjny',
  'Leasing finansowy',
  'Wynajem długoterminowy',
  'Kredyt samochodowy',
];

export default function WhyClaro() {
  const scrollTo = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="dlaczego-my" className="section-padding bg-canvas">
      <div className="max-w-8xl mx-auto px-6 lg:px-10">
        {/* SI, CLARO */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-20">
          <div className="reveal">
            <h2 className="text-3xl md:text-5xl text-white mb-6">
              Dlaczego my?
            </h2>
            <p className="text-text-muted text-lg leading-relaxed mb-6 font-light">
              Claro Motors to Twoja prawa ręka w wyborze samochodu. Nasza misja zawarta jest w hiszpańskim powiedzeniu „si, claro” (pol.: tak, oczywiście) — to krótkie stwierdzenie jest odpowiedzią na Twoje pytania:
            </p>
            <div className="space-y-4">
              {siClaroPoints.map((point) => (
                <div key={point} className="flex items-start gap-3">
                  <CheckCircle2 size={22} className="text-accent flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="text-text-light">{point}</span>
                    <span className="text-white font-medium block mt-0.5">— SI, CLARO</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="card reveal p-8 md:p-12" style={{ transitionDelay: '120ms' }}>
            <p className="text-text-muted leading-relaxed mb-6 font-light">
              Claro Motors to przede wszystkim ludzie; indywidualni doradcy, którzy na pierwszym miejscu stawiają Ciebie — naszego klienta; którzy znają ten moment, gdy przychodzi czas na zmianę samochodu, wyboru najlepszej formy finansowania, znalezienia najlepszej oferty ubezpieczenia czy pomocy w sprzedaży obecnego samochodu; którzy będą służyć pomocą od początku do końca — od wyboru samochodu, aż po odebranie z salonu.
            </p>
            <p className="text-text-light leading-relaxed">
              Powiedz, czego potrzebujesz, a zagwarantujemy Ci wymarzony samochód w najlepiej wynegocjonowanej cenie na rynku wszystkich marek m.in. BMW, Mercedes-Benz, Audi, Land Rover, Volvo, Jaguar, Maserati, Ferrari, Bentley, Ford, Opel, Kia, Hyundai, Volkswagen, Skoda, Alfa-Romeo, Jeep i inne.
            </p>
          </div>
        </div>

        {/* Jak możemy pomóc */}
        <div className="card p-8 md:p-12 mb-20">
          <h3 className="text-2xl md:text-3xl text-white mb-3">
            Jak możemy pomóc Ci w drodze do Twojego nowego samochodu?
          </h3>
          <p className="text-text-muted mb-8 font-light">
            Wybierz formę finansowania, która pasuje do Twojej sytuacji podatkowej:
          </p>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
            {financingOptions.map((option) => (
              <div
                key={option}
                className="flex items-center gap-3 bg-input border border-border rounded p-4"
              >
                <CheckCircle2 size={18} className="text-accent flex-shrink-0" />
                <span className="text-sm text-text-light">{option}</span>
              </div>
            ))}
          </div>
          <button onClick={() => scrollTo('#kalkulator')} className="btn-primary">
            Sprawdź ofertę
            <ArrowRight size={18} />
          </button>
        </div>

        {/* Najlepsza oferta samochodu */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 mb-20">
          <div>
            <h3 className="text-2xl md:text-3xl text-white mb-5">
              Najlepsza oferta samochodu
            </h3>
            <p className="text-text-muted leading-relaxed mb-5 font-light">
              Wybór nowego samochodu to bardzo ważny moment. Nie tylko ze względu na cenę, ale również elementy, które indywidualnie dla każdego są najistotniejsze — funkcjonalność, moc silnika, eksploatacja, duży bagażnik, a nawet kolor.
            </p>
            <p className="text-text-muted leading-relaxed font-light">
              Powiedz, czego potrzebujesz, a zagwarantujemy Ci wymarzony samochód w najlepiej wynegocjonowanej cenie na rynku wszystkich marek m.in. BMW, Mercedes-Benz, Audi, Land Rover, Volvo, Jaguar, Maserati, Ferrari, Bentley, Ford, Opel, Kia, Hyundai, Volkswagen, Skoda, Alfa-Romeo, Jeep i inne.
            </p>
          </div>
          <div className="card p-8 md:p-10">
            <p className="text-text-light leading-relaxed">
              Claro Motors to najkorzystniejsza oferta Twojego przyszłego samochodu, dzięki wieloletniemu doświadczeniu w branży oraz partnerskim relacjom z polskimi dealerami samochodów.
            </p>
          </div>
        </div>

        {/* Atrakcyjne finansowanie */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 mb-20">
          <div className="card p-8 md:p-10">
            <h3 className="text-2xl md:text-3xl text-white mb-5">
              Atrakcyjne finansowanie
            </h3>
            <p className="text-text-muted leading-relaxed mb-6 font-light">
              Zastanawiasz się, który produkt finansowy wybrać? Co najlepiej pasuje do Twoich potrzeb? Wynajem długoterminowy, leasing operacyjny, leasing zwrotny, leasing finansowy czy kredyt?
            </p>
            <p className="text-text-light leading-relaxed">
              Claro Motors to indywidualny doradca w doborze najlepszego produktu finansowanego, dostosowanego do Twoich potrzeb.
            </p>
          </div>
          <div>
            <div className="card p-8 md:p-10 mb-6">
              <p className="font-serif text-xl md:text-2xl text-white italic leading-relaxed">
                „Dla nas najważniejsze jest zadowolenie klientów, dlatego już na samym początku, dobierając ofertę finansową, podchodzimy indywidualnie rozpoznając potrzeby.”
              </p>
            </div>
            <div className="card p-8 md:p-10">
              <h3 className="text-xl text-white mb-4">Najtańsze ubezpieczenie</h3>
              <p className="text-text-muted leading-relaxed mb-5 font-light">
                Claro Motors to również Twój indywidualny doradca w znalezieniu najlepszej oferty ubezpieczenia, mając do dyspozycji 18 towarzystw ubezpieczeniowych.
              </p>
              <p className="text-text-muted leading-relaxed font-light">
                Szukasz ubezpieczenia komunikacyjnego, firmowego, grupowego czy na życie? Jesteś w dobrych rękach.
              </p>
            </div>
          </div>
        </div>

        {/* Usługi dodatkowe */}
        <div className="card p-8 md:p-12">
          <h3 className="text-xl text-white mb-2">Zapytaj naszego doradcę o usługi dodatkowe:</h3>
          <div className="flex flex-wrap gap-3 mt-6">
            {['Sprzedaż obecnego samochodu', 'Cesja leasingu/wynajmu', 'Detailing'].map((item) => (
              <span
                key={item}
                className="text-sm text-text-light border border-border rounded px-4 py-2 bg-input"
              >
                {item}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

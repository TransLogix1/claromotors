export interface Service {
  slug: string;
  title: string;
  shortTitle: string;
  icon: string;
  excerpt: string;
  description: string;
  details: { heading: string; body: string }[];
}

export const services: Service[] = [
  {
    slug: 'leasing',
    title: 'Leasing',
    shortTitle: 'Leasing',
    icon: 'FileText',
    excerpt:
      'Jeśli po okresie finansowania planujesz wykupić samochód, leasing będzie najlepszym rozwiązaniem. Najczęściej wybierane finansowanie przez właścicieli firm.',
    description:
      'Dzięki współpracy z wieloma instytucjami bankowymi gwarantujemy najlepsze rozwiązanie dopasowane indywidualnie do Twoich potrzeb. Leasing operacyjny pozwala wpisywać raty w koszty działalności i odliczać VAT, a wykup końcowy daje możliwość przejęcia pojazdu na własność.',
    details: [
      {
        heading: 'Leasing operacyjny',
        body: 'Wpisujesz raty w koszty działalności, odliczasz 100% VAT przy autach osobowych do 150 000 PLN i 50% powyżej tej kwoty. Po zakończeniu umowy decydujesz o wykupie — pojazd przechodzi na Twoją własność lub staje się środkiem trwałym firmy.',
      },
      {
        heading: 'Leasing finansowy',
        body: 'Pojazd wchodzi na bilans Twojej firmy. Amortyzujesz go w 5 lat, odliczasz 50% VAT niezależnie od wartości. Korzystne przy autach powyżej 150 000 PLN z długim okresem użytkowania.',
      },
      {
        heading: 'Leasing zwrotny',
        body: 'Posiadasz już samochód i potrzebujesz kapitału obrotowego? Sprzedajesz pojazd firmie leasingowej i od razu go dzierżawisz. Zwalniasz środki zamrożone w aucie bez utraty dostępu do pojazdu.',
      },
    ],
  },
  {
    slug: 'wynajem-dlugoterminowy',
    title: 'Wynajem długoterminowy',
    shortTitle: 'Wynajem długoterminowy',
    icon: 'Car',
    excerpt:
      'Jeśli na koniec okresu finansowania nie planujesz wykupu samochodu oraz chciałbyś, aby rata zawierała również ubezpieczenie, serwis oraz obsługę opon, wynajem długoterminowy jest dla Ciebie.',
    description:
      'Dzięki współpracy z największymi instytucjami udzielającymi wynajmu długoterminowego w Polsce możesz liczyć zawsze na najlepszą ofertę dostosowaną do Twoich potrzeb. Stała rata miesięczna obejmuje serwis, opony, ubezpieczenie i wymianę pojazdu.',
    details: [
      {
        heading: 'Wszystko w jednej racie',
        body: 'Stała rata miesięczna obejmuje serwis, opony sezonowe, ubezpieczenie AC/OC i assistance. Bez wkładu własnego i wykupu. Przekazujesz auto po zakończeniu umowy i wybierasz kolejne.',
      },
      {
        heading: 'Elastyczny limit kilometrów',
        body: 'Ustalamy limit przebiegu dopasowany do Twojego stylu jazdy — od 10 000 do 30 000 km rocznie. Zmiana limitu możliwa w trakcie trwania umowy.',
      },
      {
        heading: 'Bez wkładu własnego',
        body: 'Rozpoczynasz umowę bez wpłaty początkowej. Pierwsza opłata to kaucja zwrotna na koniec umowy. Korzystne dla firm, które chcą zachować płynność finansową.',
      },
    ],
  },
  {
    slug: 'zakup-samochodu',
    title: 'Zakup samochodu',
    shortTitle: 'Zakup samochodu',
    icon: 'ShoppingCart',
    excerpt:
      'Claro Motors to najkorzystniejsza oferta Twojego przyszłego samochodu, dzięki wieloletniemu doświadczeniu w branży oraz partnerskim relacjom z polskimi dealerami samochodów.',
    description:
      'Jeżeli zależy Ci na jak najkorzystniejszej cenie samochodu, a preferujesz zakup gotówkowy lub swoją formę finansowania, możesz liczyć na pomoc naszych doradców. Negocjujemy warunki bezpośrednio z dyrektorami flotowymi polskich dealerów.',
    details: [
      {
        heading: 'Negocjacja ceny z dealerami',
        body: 'Przekładamy wolumen sprzedaży na indywidualny rabat dla Ciebie. Wynegocjowany rabat sięga 18% w stosunku do ceny katalogowej. Bezpłatny transport samochodu pod wskazany adres w całej Polsce.',
      },
      {
        heading: 'Zakup gotówkowy',
        body: 'Preferujesz zakup za gotówkę? Negocjujemy cenę z dealerem, a Ty płacisz bezpośrednio po dostarczeniu auta. Pełna dokumentacja i faktura VAT od dealera.',
      },
      {
        heading: 'Własna forma finansowania',
        body: 'Masz już umówiony kredyt lub leasing z własnym bankiem? My zajmujemy się negocjacją ceny pojazdu i dostawą. Ty korzystasz z własnego finansowania na naszych warunkach cenowych.',
      },
    ],
  },
  {
    slug: 'ubezpieczenie',
    title: 'Najtańsze ubezpieczenie',
    shortTitle: 'Ubezpieczenie',
    icon: 'ShieldCheck',
    excerpt:
      'Claro Motors to również Twój indywidualny doradca w znalezieniu najlepszej oferty ubezpieczenia. Mając do dyspozycji 18 towarzystw ubezpieczeniowych, zapewniamy gwarancję uzyskania najlepszej oferty na rynku.',
    description:
      'Porównujemy oferty 18 towarzystw ubezpieczeniowych i przedstawiamy zestawienie kosztów oraz zakresu ochrony. Wybierasz polisę, która najlepiej odpowiada Twoim potrzebom — komunikacyjną, firmową, grupową lub na życie.',
    details: [
      {
        heading: 'Ubezpieczenie komunikacyjne AC/OC',
        body: 'Pełne zestawienie ofert AC i OC od 18 towarzystw. Porównujemy składki, franszyzy i zakres ochrony. Wybierasz polisę z najlepszym stosunkiem ceny do zakresu.',
      },
      {
        heading: 'Ubezpieczenie firmowe i grupowe',
        body: 'Zabezpieczamy floty pojazdów firmowych oraz ubezpieczenia grupowe dla pracowników. Indywidualne warunki negocjowane na podstawie wolumenu polis.',
      },
      {
        heading: 'Ubezpieczenie na życie',
        body: 'Ochrona na życie powiązana z umową leasingu lub kredytu. Zapewnia spłatę rat w przypadku zdarzeń losowych. Dobieramy zakres ochrony do Twojej sytuacji życiowej i zawodowej.',
      },
    ],
  },
  {
    slug: 'gap',
    title: 'Ochrona utraty wartości GAP',
    shortTitle: 'Ochrona GAP',
    icon: 'Shield',
    excerpt:
      'Ubezpieczenie GAP skierowane dla osób planujących zakup samochodu w formie kredytu lub leasingu. GAP zapewnia ochronę przed utratą wartości pojazdu, pokrywając różnicę pomiędzy pozostałymi do spłaty ratami a kwotą odszkodowania z AC.',
    description:
      'GAP Fakturowy wypłaca różnicę między kwotą na fakturze zakupu a wartością rynkową pojazdu w momencie szkody całkowitej lub kradzieży. Bez GAP zostajesz z ratami leasingowymi do spłaty i odszkodowaniem AC, które nie pokrywa pełnej kwoty zadłużenia.',
    details: [
      {
        heading: 'GAP Fakturowy',
        body: 'Wypłaca różnicę między kwotą na fakturze a wartością rynkową w momencie szkody całkowitej. Otrzymujesz zwrot pełnej kwoty, którą zapłaciłeś za auto — niezależnie od utraty wartości rynkowej.',
      },
      {
        heading: 'GAP Indeksowy',
        body: 'Bazuje na tabelach deprecjacji określonych w umowie. Wypłata jest ograniczona procentowo w stosunku do wieku pojazdu. Mniej korzystny przy autach premium, które tracą wartość szybciej niż przewidują tabele.',
      },
      {
        heading: 'Dla kogo GAP',
        body: 'Obowiązkowy przy autach premium finansowanych w leasingu lub kredycie. Chroni kapitał w przypadku kradzieży lub szkody całkowitej. Bez GAP możesz zostać z długiem wobec firmy leasingowej, mimo wypłaty z AC.',
      },
    ],
  },
];

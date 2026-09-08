export type Lang = 'pl' | 'en';

export interface TranslationShape {
  nav: {
    home: string; offer: string; howItWorks: string; about: string; contact: string;
    calculator: string; fleet: string; whyUs: string; blog: string; negotiate: string;
  };
  header: { phoneLabel: string };
  hero: {
    eyebrow: string; headlineAccent: string; headlineRest: string; headlinePrefix: string;
    subtitle: string; ctaFleet: string; ctaCalculator: string; quickLinksLabel: string;
    featuredBadge: string; power: string; engine: string; installmentFrom: string; calcForModel: string;
  };
  services: { leasing: string; rental: string; purchase: string; insurance: string; gap: string };
  whyClaro: {
    title: string; intro: string; points: string[]; pointAnswer: string;
    peopleParagraph: string; guaranteeParagraph: string; helpTitle: string; helpSubtitle: string;
    financingOptions: string[]; checkOffer: string; bestOfferTitle: string; bestOfferP1: string;
    bestOfferCard: string; financingTitle: string; financingP1: string; financingCard: string;
    quote: string; insuranceTitle: string; insuranceP1: string; insuranceP2: string;
    extraServicesTitle: string; extraServices: string[];
    ctaRow: { offerTitle: string; offerDesc: string; calcTitle: string; calcDesc: string; negotiateTitle: string; negotiateDesc: string };
  };
  calculator: {
    title: string; subtitle: string; priceLabel: string; periodLabel: string; months: string;
    downPaymentLabel: string; buyoutLabel: string; promoLabel: string; promoPlaceholder: string;
    promoActive: string; summaryTitle: string; monthlyRate: string; downPayment: string; buyout: string;
    totalPercent: string; totalPln: string; applyButton: string; applyHint: string;
  };
  fleet: {
    title: string; subtitle: string; power: string; fuel: string; year: string; basePrice: string;
    negotiate: string; modalTitle: string; modalBasePrice: string; yourPrice: string; fullName: string;
    phone: string; email: string; sendProposal: string; sentTitle: string; sentBody: string;
  };
  process: {
    title: string; subtitle: string;
    steps: { number: string; title: string; description: string }[];
    stepOf: (n: number, total: number) => string;
  };
  blog: { title: string; subtitle: string; readArticle: string };
  offerHome: { title: string; subtitle: string; checkDetails: string };
  offerPage: { title: string; subtitle: string; readMore: string };
  serviceDetail: { back: string; contactCta: string };
  about: { title: string; p1: string; p2: string; p3: string; founderName: string; founderRole: string; goToContact: string };
  contact: {
    title: string; subtitle: string; fullName: string; email: string; phone: string; nip: string;
    message: string; messagePlaceholder: string; consent: string; send: string; sentTitle: string;
    sentBody: string; calculatorMessage: (rata: string, wplata: string, wykup: string) => string;
  };
  testimonial: { quote: string; author: string };
  inquiryForm: {
    title: string; subtitle: string; fullName: string; phone: string; email: string;
    carInterest: string; carInterestPlaceholder: string; budget: string; budgetPlaceholder: string;
    message: string; messagePlaceholder: string; consent: string; send: string;
    sentTitle: string; sentBody: string; errorBody: string;
  };
  kalkulatorPage: {
    heroTitle: string; heroSubtitle: string; howTitle: string;
    steps: { title: string; description: string }[];
    tableTitle: string; tableRows: { param: string; installment: string; payment: string }[];
    noteTitle: string; noteBody: string; faqTitle: string;
    faq: { q: string; a: string }[];
  };
  negocjujPage: {
    title: string; subtitle: string; howTitle: string; howBody: string;
    points: string[];
  };
  wynajemLeasingCta: { title: string; body: string; button: string };
  footer: { tagline: string; navTitle: string; contactTitle: string; privacy: string; rights: string; regTagline: string };
  common: { langSwitch: string };
}

export const translations: Record<Lang, TranslationShape> = {
  pl: {
    nav: {
      home: 'Strona główna',
      offer: 'Oferta',
      howItWorks: 'Jak to działa',
      about: 'O nas',
      contact: 'Kontakt',
      calculator: 'Kalkulator',
      fleet: 'Flota Pojazdów',
      whyUs: 'Dlaczego My',
      blog: 'Baza Wiedzy',
      negotiate: 'Negocjuj cenę',
    },
    header: {
      phoneLabel: 'Wojciech — Bezpośredni kontakt',
    },
    hero: {
      eyebrow: 'Wymarzony samochód w najlepszym finansowaniu?',
      headlineAccent: 'CLARO',
      headlineRest: '!',
      headlinePrefix: 'Si,',
      subtitle:
        'Przejmujemy negocjacje z dealerami i bankami. Dobieramy optymalną strukturę leasingu, wynajmu lub kredytu, dając Ci gotowe auto z pełnym ubezpieczeniem i minimum formalności.',
      ctaFleet: 'Zobacz dostępną flotę',
      ctaCalculator: 'Skonfiguruj leasing',
      quickLinksLabel: 'Zobacz naszą ofertę:',
      featuredBadge: 'Flagowy Model Tygodnia',
      power: 'Moc',
      engine: 'Silnik',
      installmentFrom: 'Rata od',
      calcForModel: 'Oblicz ratę dla tego modelu',
    },
    services: {
      leasing: 'Leasing',
      rental: 'Wynajem długoterminowy',
      purchase: 'Zakup auta',
      insurance: 'Ubezpieczenie',
      gap: 'Ochrona GAP',
    },
    whyClaro: {
      title: 'Dlaczego my?',
      intro:
        'Claro Motors to Twoja prawa ręka w wyborze samochodu. Nasza misja zawarta jest w hiszpańskim powiedzeniu „si, claro” (pol.: tak, oczywiście) — to krótkie stwierdzenie jest odpowiedzią na Twoje pytania:',
      points: [
        'Znajdziemy dla Ciebie wymarzony samochód?',
        'Wynegocjujemy dla Ciebie najlepsze warunki?',
        'Znajdziemy dla Ciebie najlepszą formę finansowania?',
        'Zaoszczędzimy Twój cenny czas?',
      ],
      pointAnswer: '— SI, CLARO',
      peopleParagraph:
        'Claro Motors to przede wszystkim ludzie; indywidualni doradcy, którzy na pierwszym miejscu stawiają Ciebie — naszego klienta; którzy znają ten moment, gdy przychodzi czas na zmianę samochodu, wyboru najlepszej formy finansowania, znalezienia najlepszej oferty ubezpieczenia czy pomocy w sprzedaży obecnego samochodu; którzy będą służyć pomocą od początku do końca — od wyboru samochodu, aż po odebranie z salonu.',
      guaranteeParagraph:
        'Powiedz, czego potrzebujesz, a zagwarantujemy Ci wymarzony samochód w najlepiej wynegocjonowanej cenie na rynku wszystkich marek m.in. BMW, Mercedes-Benz, Audi, Land Rover, Volvo, Jaguar, Maserati, Ferrari, Bentley, Ford, Opel, Kia, Hyundai, Volkswagen, Skoda, Alfa-Romeo, Jeep i inne.',
      helpTitle: 'Jak możemy pomóc Ci w drodze do Twojego nowego samochodu?',
      helpSubtitle: 'Wybierz formę finansowania, która pasuje do Twojej sytuacji podatkowej:',
      financingOptions: ['Leasing operacyjny', 'Leasing finansowy', 'Wynajem długoterminowy', 'Kredyt samochodowy'],
      checkOffer: 'Sprawdź ofertę',
      bestOfferTitle: 'Najlepsza oferta samochodu',
      bestOfferP1:
        'Wybór nowego samochodu to bardzo ważny moment. Nie tylko ze względu na cenę, ale również elementy, które indywidualnie dla każdego są najistotniejsze — funkcjonalność, moc silnika, eksploatacja, duży bagażnik, a nawet kolor.',
      bestOfferCard:
        'Claro Motors to najkorzystniejsza oferta Twojego przyszłego samochodu, dzięki wieloletniemu doświadczeniu w branży oraz partnerskim relacjom z polskimi dealerami samochodów.',
      financingTitle: 'Atrakcyjne finansowanie',
      financingP1:
        'Zastanawiasz się, który produkt finansowy wybrać? Co najlepiej pasuje do Twoich potrzeb? Wynajem długoterminowy, leasing operacyjny, leasing zwrotny, leasing finansowy czy kredyt?',
      financingCard:
        'Claro Motors to indywidualny doradca w doborze najlepszego produktu finansowanego, dostosowanego do Twoich potrzeb.',
      quote:
        'Dla nas najważniejsze jest zadowolenie klientów, dlatego już na samym początku, dobierając ofertę finansową, podchodzimy indywidualnie rozpoznając potrzeby.',
      insuranceTitle: 'Najtańsze ubezpieczenie',
      insuranceP1:
        'Claro Motors to również Twój indywidualny doradca w znalezieniu najlepszej oferty ubezpieczenia, mając do dyspozycji 18 towarzystw ubezpieczeniowych.',
      insuranceP2: 'Szukasz ubezpieczenia komunikacyjnego, firmowego, grupowego czy na życie? Jesteś w dobrych rękach.',
      extraServicesTitle: 'Zapytaj naszego doradcę o usługi dodatkowe:',
      extraServices: ['Sprzedaż obecnego samochodu', 'Cesja leasingu/wynajmu', 'Detailing'],
      ctaRow: {
        offerTitle: 'Zobacz pełną ofertę',
        offerDesc: 'Leasing, wynajem długoterminowy, zakup, ubezpieczenie i GAP — szczegóły każdej formy.',
        calcTitle: 'Policz ratę',
        calcDesc: 'Ustaw cenę, wpłatę i okres — zobacz orientacyjną ratę w kilka sekund.',
        negotiateTitle: 'Negocjuj cenę',
        negotiateDesc: 'Masz na oku konkretny model? Powiedz nam swój budżet, a wynegocjujemy warunki.',
      },
    },
    calculator: {
      title: 'Kalkulator Leasingowy',
      subtitle:
        'Przelicz ratę netto w czasie rzeczywistym. Zmień cenę, wpłatę własną i wykup końcowy — algorytm annuitetowy z dyskontowaną wartością rezydualną przelicza się natychmiast.',
      priceLabel: 'Cena netto pojazdu (PLN)',
      periodLabel: 'Okres leasingu',
      months: 'mies.',
      downPaymentLabel: 'Wpłata własna',
      buyoutLabel: 'Wykup końcowy',
      promoLabel: 'Kod rabatowy',
      promoPlaceholder: 'Wpisz kod promocyjny',
      promoActive: 'Kod RABAT3010 aktywował obniżoną marżę leasingu!',
      summaryTitle: 'Podsumowanie wariantu',
      monthlyRate: 'Miesięczna rata netto',
      downPayment: 'Wpłata własna',
      buyout: 'Wykup końcowy',
      totalPercent: 'Całkowita suma opłat',
      totalPln: 'Suma opłat w PLN',
      applyButton: 'Złóż wniosek o te warunki',
      applyHint: 'Kliknięcie przeniesie wyliczone wartości do formularza kontaktowego',
    },
    fleet: {
      title: 'Flota Pojazdów',
      subtitle:
        'Modele dostępne w bieżącej ofercie. Każde auto pochodzi z polskiego salonu z pełną gwarancją producenta. Kliknij „Negocjuj cenę”, aby wysłać propozycję bezpośrednio do Wojciecha.',
      power: 'Moc',
      fuel: 'Paliwo',
      year: 'Rok',
      basePrice: 'Cena wyjściowa netto',
      negotiate: 'Negocjuj cenę',
      modalTitle: 'Propozycja cenowa dla:',
      modalBasePrice: 'Cena wyjściowa:',
      yourPrice: 'Twoja proponowana cena netto (PLN)',
      fullName: 'Imię i nazwisko',
      phone: 'Numer telefonu kontaktowego',
      email: 'Adres e-mail',
      sendProposal: 'Wyślij propozycję cenową do Wojciecha',
      sentTitle: 'Propozycja wysłana',
      sentBody: 'Wojciech skontaktuje się z Tobą w ciągu 24 godzin z odpowiedzią.',
    },
    process: {
      title: 'Jak to działa',
      subtitle: 'Pięć etapów od pierwszego kontaktu do odebrania auta. Każdy z nich ma określony czas trwania i konkretny rezultat.',
      steps: [
        {
          number: '01',
          title: 'Wybór samochodu',
          description: 'Wybierz jedną z przedstawionych przez nas propozycji lub prześlij swoją ofertę.',
        },
        {
          number: '02',
          title: 'Kontakt z naszym doradcą',
          description: 'Uzupełnij formularz lub skontaktuj się z nami w celu ustalenia szczegółów transakcji.',
        },
        {
          number: '03',
          title: 'Oczekuj na kontakt',
          description: 'W ciągu 24h skontaktujemy się z Tobą, aby omówić procedurę uzyskania decyzji leasingowej w jak najkrótszym czasie.',
        },
        {
          number: '04',
          title: 'Informowanie na bieżąco',
          description: 'Do każdego klienta podchodzimy z pełnym profesjonalizmem. Dbamy o to, abyś na bieżąco był informowany o Twoim zamówieniu.',
        },
        {
          number: '05',
          title: 'Ustalenie odbioru samochodu',
          description:
            'Ostatnim krokiem jest omówienie szczegółów odbioru samochodu. Po pozytywnym przejściu wszystkich etapów procesu, skontaktujemy się z Tobą, aby ustalić najdogodniejsze dla Ciebie termin i miejsce podpisania umowy oraz odbioru samochodu.',
        },
      ],
      stepOf: (n: number, total: number) => `Krok ${n} z ${total}`,
    },
    blog: {
      title: 'Baza Wiedzy',
      subtitle:
        'Artykuły eksperckie o leasingu, ubezpieczeniach i optymalizacji podatkowej przy autach premium. Pisanie treści opieramy na przepisach i liczbach, nie na hasłach marketingowych.',
      readArticle: 'Czytaj artykuł',
    },
    offerHome: {
      title: 'Oferta',
      subtitle: 'Pięć obszarów, w których Claro Motors wspiera Cię na drodze do nowego samochodu. Kliknij dowolny, aby poznać szczegóły.',
      checkDetails: 'Sprawdź szczegóły',
    },
    offerPage: {
      title: 'Oferta',
      subtitle: 'Pięć obszarów, w których Claro Motors wspiera Cię na drodze do nowego samochodu.',
      readMore: 'Czytaj więcej',
    },
    serviceDetail: {
      back: 'Wróć do oferty',
      contactCta: 'Zapytaj o szczegóły',
    },
    about: {
      title: 'O nas',
      p1: 'Claro Motors to firma, która powstała w oparciu o wieloletnie doświadczenie pracowników w branży finansowej oraz motoryzacyjnej. Doradcy Claro Motors przez lata zdobywali wiedzę w salonach samochodowych różnych marek oraz instytucjach bankowych.',
      p2: 'Koncepcja firmy doradczej powstała w 2018 roku, wychodząc naprzeciw oczekiwaniom i potrzebom klientów. Duże zainteresowanie oraz sprzedaż 120 samochodów w ostatnim kwartale 2018 roku pozwoliły na szybki rozwój firmy oraz zbudowaniu zaufania i ścisłej relacji z klientami, którzy zlecając nam obsługę w zakresie zakupu samochodu i wyboru finansowania zdecydowali się również na stałą współpracę w zakresie doradztwa ubezpieczeniowego.',
      p3: 'Wiemy, że indywidualne podejście i stała relacja budowana z Klientami, to podstawa naszego rozwoju oraz wieloletniej współpracy opartej na zaufaniu.',
      founderName: 'Wojciech',
      founderRole: 'Założyciel',
      goToContact: 'Skontaktuj się z nami',
    },
    contact: {
      title: 'Formularz kontaktowy',
      subtitle: 'Wypełnij formularz, a Wojciech oddzwoni w ciągu 1 dnia roboczego z gotowymi wariantami finansowania.',
      fullName: 'Imię i nazwisko',
      email: 'Email',
      phone: 'Telefon',
      nip: 'NIP',
      message: 'Treść wiadomości',
      messagePlaceholder: 'Opisz, jakiego auta szukasz i w jakiej formie finansowania.',
      consent: 'Wyrażam zgodę na przetwarzanie moich danych osobowych przez Claro Motors w celu odpowiedzi na zapytanie, zgodnie z RODO.',
      send: 'Wyślij wiadomość',
      sentTitle: 'Wiadomość wysłana',
      sentBody: 'Wojciech skontaktuje się z Tobą w ciągu 1 dnia roboczego.',
      calculatorMessage: (rata: string, wplata: string, wykup: string) =>
        `Prośba o kontakt z wyliczonymi warunkami leasingu:\n\nMiesięczna rata netto: ${rata}\nWpłata własna: ${wplata}\nWykup końcowy: ${wykup}`,
    },
    testimonial: {
      quote: 'Polecam z czystym sumieniem. Profesjonalne podejście do klienta, wyśmienity kontakt i obsługa od A-Z na najwyższym poziomie. Brawo!',
      author: 'Łukasz Knap',
    },
    inquiryForm: {
      title: 'Wyślij zapytanie',
      subtitle: 'Wypełnij krótki formularz — Wojciech oddzwoni z konkretną propozycją, zwykle w ciągu 1 dnia roboczego.',
      fullName: 'Imię i nazwisko',
      phone: 'Telefon',
      email: 'Email',
      carInterest: 'Interesujący Cię model (opcjonalnie)',
      carInterestPlaceholder: 'np. BMW X5, Audi A6, dowolna marka',
      budget: 'Orientacyjny budżet miesięczny',
      budgetPlaceholder: 'np. 2 500 zł netto / mies.',
      message: 'Wiadomość',
      messagePlaceholder: 'Opisz swoje potrzeby — resztą zajmie się nasz doradca.',
      consent: 'Wyrażam zgodę na przetwarzanie moich danych osobowych przez Claro Motors w celu odpowiedzi na zapytanie, zgodnie z RODO.',
      send: 'Wyślij zapytanie',
      sentTitle: 'Zapytanie wysłane',
      sentBody: 'Dziękujemy — Wojciech skontaktuje się z Tobą wkrótce.',
      errorBody: 'Coś poszło nie tak. Zadzwoń bezpośrednio: 517 195 097.',
    },
    kalkulatorPage: {
      heroTitle: 'Kalkulator rat',
      heroSubtitle: 'Ustaw cenę auta, wpłatę własną, okres i wykup — zobacz orientacyjną ratę netto, zanim porozmawiasz z doradcą. Wynik nie jest ofertą wiążącą, ale dobrym punktem wyjścia do rozmowy o finansowaniu.',
      howTitle: 'Jak czytać wynik',
      steps: [
        { title: 'Cena pojazdu', description: 'Wpisz wartość auta, którym jesteś zainteresowany — nowego lub używanego, z dowolnego salonu.' },
        { title: 'Wpłata własna', description: 'Im wyższa wpłata na starcie, tym niższa rata miesięczna — ale więcej płacisz przy podpisaniu umowy.' },
        { title: 'Okres finansowania', description: 'Dłuższy okres rozkłada koszt na więcej rat, ale zwykle podnosi całkowity koszt finansowania.' },
        { title: 'Wykup końcowy', description: 'Wyższy wykup obniża ratę miesięczną, bo więcej wartości auta zostaje do spłaty na końcu umowy.' },
      ],
      tableTitle: 'Jak parametry wpływają na ratę',
      tableRows: [
        { param: 'Wyższa wpłata własna', installment: 'Zwykle niższa', payment: 'Więcej płacisz na starcie umowy' },
        { param: 'Dłuższy okres', installment: 'Zwykle niższa', payment: 'Płatności rozłożone na więcej miesięcy' },
        { param: 'Wyższy wykup', installment: 'Zwykle niższa', payment: 'Więcej płacisz przy wykupie na końcu' },
      ],
      noteTitle: 'To orientacyjne wyliczenie',
      noteBody: 'Kalkulator pokazuje szacunkową ratę na podstawie wpisanych parametrów. Finalna oferta zależy od konkretnego modelu, oceny wniosku i aktualnych warunków finansujących — dlatego każdą kalkulację potwierdzamy indywidualnie z doradcą, zanim cokolwiek podpiszesz.',
      faqTitle: 'Najczęstsze pytania',
      faq: [
        { q: 'Czy wynik kalkulatora to gotowa oferta?', a: 'Nie. To orientacyjne wyliczenie, które pomaga zaplanować budżet. Ostateczne warunki ustalamy indywidualnie po rozmowie z doradcą.' },
        { q: 'Czy mogę przeliczyć ratę dla auta używanego?', a: 'Tak, kalkulator działa dla nowych i używanych samochodów — wystarczy wpisać cenę pojazdu.' },
        { q: 'Czy podanie danych kontaktowych jest wymagane, żeby zobaczyć ratę?', a: 'Nie — kalkulator liczy w czasie rzeczywistym bez podawania danych. Formularz kontaktowy wysyłasz dopiero, gdy chcesz otrzymać konkretną ofertę.' },
      ],
    },
    negocjujPage: {
      title: 'Negocjuj cenę',
      subtitle: 'Masz na oku konkretny model — u nas, w salonie albo w innym ogłoszeniu? Powiedz nam, jaką cenę chciałbyś osiągnąć, a nasz zespół podejmie negocjacje z dealerem lub instytucją finansującą w Twoim imieniu.',
      howTitle: 'Jak to działa',
      howBody: 'Wysyłasz model auta i swój budżet. W ciągu 24 godzin wracamy z realną oceną, czy i jak blisko tej ceny możemy się zbliżyć — bez zobowiązań z Twojej strony.',
      points: [
        'Negocjacje prowadzi doświadczony doradca, nie Ty',
        'Porównujemy oferty kilku dealerów i finansujących jednocześnie',
        'Odpowiedź zwykle w ciągu 24 godzin',
        'Zero kosztów wstępnych — płacisz dopiero za finalną umowę',
      ],
    },
    wynajemLeasingCta: {
      title: 'Nie widzisz odpowiedzi na swoje pytanie?',
      body: 'Napisz bezpośrednio do naszego doradcy — odpowiemy z konkretną propozycją dopasowaną do Twojej sytuacji.',
      button: 'Wyślij zapytanie',
    },
    footer: {
      tagline: 'Doradztwo motoryzacyjne i finansowanie pojazdów premium. Od 2018 roku.',
      navTitle: 'Nawigacja',
      contactTitle: 'Kontakt',
      privacy: 'Polityka prywatności',
      rights: 'Wszelkie prawa zastrzeżone.',
      regTagline: 'Claro Motors — doradztwo motoryzacyjne.',
    },
    common: {
      langSwitch: 'EN',
    },
  },
  en: {
    nav: {
      home: 'Home',
      offer: 'Offer',
      howItWorks: 'How It Works',
      about: 'About Us',
      contact: 'Contact',
      calculator: 'Calculator',
      fleet: 'Fleet',
      whyUs: 'Why Us',
      blog: 'Knowledge Base',
      negotiate: 'Negotiate price',
    },
    header: {
      phoneLabel: 'Wojciech — Direct contact',
    },
    hero: {
      eyebrow: 'Your dream car with the best financing?',
      headlineAccent: 'CLARO',
      headlineRest: '!',
      headlinePrefix: 'Si,',
      subtitle:
        'We take over negotiations with dealers and banks. We tailor the optimal leasing, rental, or loan structure, handing you a ready car with full insurance and minimal paperwork.',
      ctaFleet: 'See available fleet',
      ctaCalculator: 'Configure leasing',
      quickLinksLabel: 'See our offer:',
      featuredBadge: 'Flagship Model of the Week',
      power: 'Power',
      engine: 'Engine',
      installmentFrom: 'Installment from',
      calcForModel: 'Calculate installment for this model',
    },
    services: {
      leasing: 'Leasing',
      rental: 'Long-term rental',
      purchase: 'Buy a car',
      insurance: 'Insurance',
      gap: 'GAP protection',
    },
    whyClaro: {
      title: 'Why us?',
      intro:
        'Claro Motors is your right hand in choosing a car. Our mission is captured in the Spanish phrase "si, claro" (English: yes, of course) — this short statement is the answer to your questions:',
      points: [
        'Will we find your dream car?',
        'Will we negotiate the best terms for you?',
        'Will we find the best form of financing for you?',
        'Will we save your valuable time?',
      ],
      pointAnswer: '— SI, CLARO',
      peopleParagraph:
        'Claro Motors is, above all, people; individual advisors who put you — our client — first; who understand the moment when it’s time to change your car, choose the best form of financing, find the best insurance offer, or help sell your current car; who will help you from start to finish — from choosing the car to picking it up from the dealership.',
      guaranteeParagraph:
        'Tell us what you need, and we will guarantee your dream car at the best negotiated price on the market across all brands, including BMW, Mercedes-Benz, Audi, Land Rover, Volvo, Jaguar, Maserati, Ferrari, Bentley, Ford, Opel, Kia, Hyundai, Volkswagen, Skoda, Alfa Romeo, Jeep and others.',
      helpTitle: 'How can we help you on the way to your new car?',
      helpSubtitle: 'Choose the form of financing that fits your tax situation:',
      financingOptions: ['Operating lease', 'Finance lease', 'Long-term rental', 'Car loan'],
      checkOffer: 'Check the offer',
      bestOfferTitle: 'The best car offer',
      bestOfferP1:
        'Choosing a new car is a very important moment. Not only because of the price, but also because of the elements that matter most to each person individually — functionality, engine power, running costs, a large boot, and even colour.',
      bestOfferCard:
        'Claro Motors offers the most favourable deal on your future car, thanks to years of industry experience and partnership relationships with Polish car dealers.',
      financingTitle: 'Attractive financing',
      financingP1:
        'Wondering which financial product to choose? What best suits your needs? Long-term rental, operating lease, sale-and-leaseback, finance lease, or a loan?',
      financingCard:
        'Claro Motors is your individual advisor in selecting the best financing product, tailored to your needs.',
      quote:
        'For us, customer satisfaction is what matters most, which is why from the very beginning, when choosing a financing offer, we take an individual approach to identifying needs.',
      insuranceTitle: 'The cheapest insurance',
      insuranceP1:
        'Claro Motors is also your individual advisor in finding the best insurance offer, with access to 18 insurance companies.',
      insuranceP2: 'Looking for motor, business, group, or life insurance? You are in good hands.',
      extraServicesTitle: 'Ask our advisor about additional services:',
      extraServices: ['Selling your current car', 'Lease/rental assignment', 'Detailing'],
      ctaRow: {
        offerTitle: 'See the full offer',
        offerDesc: 'Leasing, long-term rental, purchase, insurance and GAP — details for every form.',
        calcTitle: 'Calculate the installment',
        calcDesc: 'Set the price, down payment and period — see an approximate installment in seconds.',
        negotiateTitle: 'Negotiate a price',
        negotiateDesc: 'Have a specific model in mind? Tell us your budget and we will negotiate the terms.',
      },
    },
    calculator: {
      title: 'Leasing Calculator',
      subtitle:
        'Calculate the net installment in real time. Change the price, down payment, and final buyout — the annuity algorithm with a discounted residual value recalculates instantly.',
      priceLabel: 'Net vehicle price (PLN)',
      periodLabel: 'Leasing period',
      months: 'mo.',
      downPaymentLabel: 'Down payment',
      buyoutLabel: 'Final buyout',
      promoLabel: 'Discount code',
      promoPlaceholder: 'Enter promo code',
      promoActive: 'Code RABAT3010 activated a reduced leasing margin!',
      summaryTitle: 'Variant summary',
      monthlyRate: 'Net monthly installment',
      downPayment: 'Down payment',
      buyout: 'Final buyout',
      totalPercent: 'Total cost percentage',
      totalPln: 'Total cost in PLN',
      applyButton: 'Apply for these terms',
      applyHint: 'Clicking will carry the calculated values over to the contact form',
    },
    fleet: {
      title: 'Vehicle Fleet',
      subtitle:
        'Models available in our current offer. Every car comes from a Polish dealership with full manufacturer warranty. Click "Negotiate price" to send a proposal directly to Wojciech.',
      power: 'Power',
      fuel: 'Fuel',
      year: 'Year',
      basePrice: 'Starting net price',
      negotiate: 'Negotiate price',
      modalTitle: 'Price proposal for:',
      modalBasePrice: 'Starting price:',
      yourPrice: 'Your proposed net price (PLN)',
      fullName: 'Full name',
      phone: 'Contact phone number',
      email: 'Email address',
      sendProposal: 'Send price proposal to Wojciech',
      sentTitle: 'Proposal sent',
      sentBody: 'Wojciech will get back to you within 24 hours with a response.',
    },
    process: {
      title: 'How It Works',
      subtitle: 'Five stages from first contact to picking up the car. Each has a defined duration and a concrete outcome.',
      steps: [
        {
          number: '01',
          title: 'Choosing a car',
          description: 'Pick one of the proposals we present or send us your own offer.',
        },
        {
          number: '02',
          title: 'Contact with our advisor',
          description: 'Fill out the form or contact us to arrange the details of the transaction.',
        },
        {
          number: '03',
          title: 'Wait for contact',
          description: 'Within 24h we will contact you to discuss the procedure for obtaining a leasing decision as quickly as possible.',
        },
        {
          number: '04',
          title: 'Ongoing updates',
          description: 'We approach every client with full professionalism. We make sure you are kept up to date about your order.',
        },
        {
          number: '05',
          title: 'Arranging car pickup',
          description:
            'The last step is arranging the details of picking up the car. Once all stages of the process are successfully completed, we will contact you to arrange the most convenient date and place for signing the contract and collecting the car.',
        },
      ],
      stepOf: (n: number, total: number) => `Step ${n} of ${total}`,
    },
    blog: {
      title: 'Knowledge Base',
      subtitle:
        'Expert articles on leasing, insurance, and tax optimisation for premium cars. We base our content on regulations and figures, not marketing slogans.',
      readArticle: 'Read article',
    },
    offerHome: {
      title: 'Offer',
      subtitle: 'Five areas where Claro Motors supports you on the way to your new car. Click any of them to learn the details.',
      checkDetails: 'Check details',
    },
    offerPage: {
      title: 'Offer',
      subtitle: 'Five areas where Claro Motors supports you on the way to your new car.',
      readMore: 'Read more',
    },
    serviceDetail: {
      back: 'Back to offer',
      contactCta: 'Ask for details',
    },
    about: {
      title: 'About Us',
      p1: 'Claro Motors is a company built on years of employee experience in the finance and automotive industries. Claro Motors advisors spent years gaining knowledge at dealerships of various brands and at banking institutions.',
      p2: 'The concept of an advisory company was created in 2018, in response to customer expectations and needs. Strong interest and the sale of 120 cars in the last quarter of 2018 allowed the company to grow quickly and to build trust and close relationships with clients, who, after entrusting us with car purchase and financing selection, also decided to continue working with us on insurance advisory.',
      p3: 'We know that an individual approach and a lasting relationship built with clients is the foundation of our growth and of years-long cooperation based on trust.',
      founderName: 'Wojciech',
      founderRole: 'Founder',
      goToContact: 'Get in touch with us',
    },
    contact: {
      title: 'Contact form',
      subtitle: 'Fill out the form and Wojciech will call you back within 1 business day with ready financing variants.',
      fullName: 'Full name',
      email: 'Email',
      phone: 'Phone',
      nip: 'Tax ID (NIP)',
      message: 'Message',
      messagePlaceholder: 'Describe what car you are looking for and what form of financing you prefer.',
      consent: 'I consent to Claro Motors processing my personal data in order to respond to my inquiry, in accordance with GDPR.',
      send: 'Send message',
      sentTitle: 'Message sent',
      sentBody: 'Wojciech will contact you within 1 business day.',
      calculatorMessage: (rata: string, wplata: string, wykup: string) =>
        `Contact request with calculated leasing terms:\n\nNet monthly installment: ${rata}\nDown payment: ${wplata}\nFinal buyout: ${wykup}`,
    },
    testimonial: {
      quote: 'I recommend them with a clear conscience. A professional approach to the client, excellent contact, and service from A to Z at the highest level. Well done!',
      author: 'Łukasz Knap',
    },
    inquiryForm: {
      title: 'Send an inquiry',
      subtitle: "Fill out a short form — Wojciech will call back with a concrete proposal, usually within 1 business day.",
      fullName: 'Full name',
      phone: 'Phone',
      email: 'Email',
      carInterest: 'Model you are interested in (optional)',
      carInterestPlaceholder: 'e.g. BMW X5, Audi A6, any make',
      budget: 'Approximate monthly budget',
      budgetPlaceholder: 'e.g. 2,500 PLN net / month',
      message: 'Message',
      messagePlaceholder: 'Describe what you need — our advisor will take care of the rest.',
      consent: 'I consent to Claro Motors processing my personal data in order to respond to my inquiry, in accordance with GDPR.',
      send: 'Send inquiry',
      sentTitle: 'Inquiry sent',
      sentBody: 'Thank you — Wojciech will contact you shortly.',
      errorBody: 'Something went wrong. Please call us directly: 517 195 097.',
    },
    kalkulatorPage: {
      heroTitle: 'Installment calculator',
      heroSubtitle: "Set the car's price, down payment, period and buyout to see an approximate net installment before speaking with an advisor. The result is not a binding offer, but a good starting point for a financing conversation.",
      howTitle: 'How to read the result',
      steps: [
        { title: 'Vehicle price', description: 'Enter the value of the car you are interested in — new or used, from any dealership.' },
        { title: 'Down payment', description: 'A higher upfront payment usually lowers the monthly installment, but increases what you pay at signing.' },
        { title: 'Financing period', description: 'A longer period spreads the cost over more installments, but usually raises the total cost of financing.' },
        { title: 'Final buyout', description: 'A higher buyout lowers the monthly installment, since more of the car\'s value remains to be paid at the end.' },
      ],
      tableTitle: 'How parameters affect the installment',
      tableRows: [
        { param: 'Higher down payment', installment: 'Usually lower', payment: 'You pay more at signing' },
        { param: 'Longer period', installment: 'Usually lower', payment: 'Payments spread over more months' },
        { param: 'Higher buyout', installment: 'Usually lower', payment: 'You pay more at the final buyout' },
      ],
      noteTitle: 'This is an approximate calculation',
      noteBody: 'The calculator shows an estimated installment based on the entered parameters. The final offer depends on the specific model, application assessment, and current financing terms — so we confirm every calculation individually with an advisor before you sign anything.',
      faqTitle: 'Frequently asked questions',
      faq: [
        { q: 'Is the calculator result a ready offer?', a: 'No. It is an approximate calculation that helps you plan your budget. Final terms are set individually after speaking with an advisor.' },
        { q: 'Can I calculate the installment for a used car?', a: 'Yes, the calculator works for both new and used cars — just enter the vehicle price.' },
        { q: 'Do I need to provide contact details to see the installment?', a: 'No — the calculator computes in real time without any contact details. You only submit the contact form once you want a concrete offer.' },
      ],
    },
    negocjujPage: {
      title: 'Negotiate a price',
      subtitle: 'Have a specific model in mind — with us, at a dealership, or in another listing? Tell us the price you would like to achieve, and our team will negotiate with the dealer or financing institution on your behalf.',
      howTitle: 'How it works',
      howBody: 'Send us the car model and your budget. Within 24 hours we come back with a realistic assessment of whether — and how close to that price — we can get, with no obligation on your part.',
      points: [
        'An experienced advisor handles the negotiation, not you',
        'We compare offers from several dealers and financing partners at once',
        'A reply usually within 24 hours',
        'Zero upfront cost — you only pay once the final agreement is signed',
      ],
    },
    wynajemLeasingCta: {
      title: "Don't see the answer to your question?",
      body: 'Write directly to our advisor — we will reply with a concrete proposal tailored to your situation.',
      button: 'Send an inquiry',
    },
    footer: {
      tagline: 'Automotive advisory and premium vehicle financing. Since 2018.',
      navTitle: 'Navigation',
      contactTitle: 'Contact',
      privacy: 'Privacy policy',
      rights: 'All rights reserved.',
      regTagline: 'Claro Motors — automotive advisory.',
    },
    common: {
      langSwitch: 'PL',
    },
  },
};

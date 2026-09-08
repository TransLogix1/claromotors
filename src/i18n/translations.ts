export type Lang = 'pl' | 'en';

export interface TranslationShape {
  nav: {
    home: string; offer: string; howItWorks: string; about: string; contact: string;
    calculator: string; fleet: string; whyUs: string; blog: string;
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

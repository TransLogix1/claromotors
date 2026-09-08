import type { Lang } from '@/i18n/translations';

interface Localized {
  pl: string;
  en: string;
}

export interface ServiceDetail {
  heading: Localized;
  body: Localized;
}

export interface Service {
  slug: string;
  title: Localized;
  shortTitle: Localized;
  icon: string;
  excerpt: Localized;
  description: Localized;
  details: ServiceDetail[];
}

export const services: Service[] = [
  {
    slug: 'leasing',
    title: { pl: 'Leasing', en: 'Leasing' },
    shortTitle: { pl: 'Leasing', en: 'Leasing' },
    icon: 'FileText',
    excerpt: {
      pl: 'Jeśli po okresie finansowania planujesz wykupić samochód, leasing będzie najlepszym rozwiązaniem. Najczęściej wybierane finansowanie przez właścicieli firm.',
      en: 'If you plan to buy out the car after the financing period, leasing will be the best solution. The most commonly chosen financing method among business owners.',
    },
    description: {
      pl: 'Dzięki współpracy z wieloma instytucjami bankowymi gwarantujemy najlepsze rozwiązanie dopasowane indywidualnie do Twoich potrzeb. Leasing operacyjny pozwala wpisywać raty w koszty działalności i odliczać VAT, a wykup końcowy daje możliwość przejęcia pojazdu na własność.',
      en: 'Thanks to cooperation with many banking institutions, we guarantee the best solution tailored individually to your needs. Operating lease lets you post installments as business costs and deduct VAT, while the final buyout gives you the option to take ownership of the vehicle.',
    },
    details: [
      {
        heading: { pl: 'Leasing operacyjny', en: 'Operating lease' },
        body: {
          pl: 'Wpisujesz raty w koszty działalności, odliczasz 100% VAT przy autach osobowych do 150 000 PLN i 50% powyżej tej kwoty. Po zakończeniu umowy decydujesz o wykupie — pojazd przechodzi na Twoją własność lub staje się środkiem trwałym firmy.',
          en: 'You post installments as business costs and deduct 100% VAT for passenger cars up to PLN 150,000, and 50% above that amount. At the end of the contract you decide on the buyout — the vehicle becomes your property or a fixed asset of the company.',
        },
      },
      {
        heading: { pl: 'Leasing finansowy', en: 'Finance lease' },
        body: {
          pl: 'Pojazd wchodzi na bilans Twojej firmy. Amortyzujesz go w 5 lat, odliczasz 50% VAT niezależnie od wartości. Korzystne przy autach powyżej 150 000 PLN z długim okresem użytkowania.',
          en: 'The vehicle enters your company balance sheet. You depreciate it over 5 years and deduct 50% VAT regardless of value. Beneficial for cars above PLN 150,000 with a long usage period.',
        },
      },
      {
        heading: { pl: 'Leasing zwrotny', en: 'Sale-and-leaseback' },
        body: {
          pl: 'Posiadasz już samochód i potrzebujesz kapitału obrotowego? Sprzedajesz pojazd firmie leasingowej i od razu go dzierżawisz. Zwalniasz środki zamrożone w aucie bez utraty dostępu do pojazdu.',
          en: 'Already own a car and need working capital? You sell the vehicle to a leasing company and lease it back immediately. You free up funds frozen in the car without losing access to it.',
        },
      },
    ],
  },
  {
    slug: 'wynajem-dlugoterminowy',
    title: { pl: 'Wynajem długoterminowy', en: 'Long-term rental' },
    shortTitle: { pl: 'Wynajem długoterminowy', en: 'Long-term rental' },
    icon: 'Car',
    excerpt: {
      pl: 'Jeśli na koniec okresu finansowania nie planujesz wykupu samochodu oraz chciałbyś, aby rata zawierała również ubezpieczenie, serwis oraz obsługę opon, wynajem długoterminowy jest dla Ciebie.',
      en: 'If you do not plan to buy out the car at the end of the financing period, and you would like the installment to also cover insurance, service, and tyre handling, long-term rental is for you.',
    },
    description: {
      pl: 'Dzięki współpracy z największymi instytucjami udzielającymi wynajmu długoterminowego w Polsce możesz liczyć zawsze na najlepszą ofertę dostosowaną do Twoich potrzeb. Stała rata miesięczna obejmuje serwis, opony, ubezpieczenie i wymianę pojazdu.',
      en: 'Thanks to cooperation with the largest long-term rental providers in Poland, you can always count on the best offer tailored to your needs. A fixed monthly installment covers service, tyres, insurance, and vehicle replacement.',
    },
    details: [
      {
        heading: { pl: 'Wszystko w jednej racie', en: 'Everything in one installment' },
        body: {
          pl: 'Stała rata miesięczna obejmuje serwis, opony sezonowe, ubezpieczenie AC/OC i assistance. Bez wkładu własnego i wykupu. Przekazujesz auto po zakończeniu umowy i wybierasz kolejne.',
          en: 'A fixed monthly installment covers service, seasonal tyres, comprehensive/liability insurance, and assistance. No down payment or buyout. You return the car at the end of the contract and choose the next one.',
        },
      },
      {
        heading: { pl: 'Elastyczny limit kilometrów', en: 'Flexible mileage limit' },
        body: {
          pl: 'Ustalamy limit przebiegu dopasowany do Twojego stylu jazdy — od 10 000 do 30 000 km rocznie. Zmiana limitu możliwa w trakcie trwania umowy.',
          en: 'We set a mileage limit tailored to your driving style — from 10,000 to 30,000 km per year. The limit can be changed during the contract.',
        },
      },
      {
        heading: { pl: 'Bez wkładu własnego', en: 'No down payment' },
        body: {
          pl: 'Rozpoczynasz umowę bez wpłaty początkowej. Pierwsza opłata to kaucja zwrotna na koniec umowy. Korzystne dla firm, które chcą zachować płynność finansową.',
          en: 'You start the contract with no initial payment. The first fee is a refundable deposit returned at the end of the contract. Beneficial for companies that want to preserve financial liquidity.',
        },
      },
    ],
  },
  {
    slug: 'zakup-samochodu',
    title: { pl: 'Zakup samochodu', en: 'Buying a car' },
    shortTitle: { pl: 'Zakup auta', en: 'Buy a car' },
    icon: 'ShoppingCart',
    excerpt: {
      pl: 'Claro Motors to najkorzystniejsza oferta Twojego przyszłego samochodu, dzięki wieloletniemu doświadczeniu w branży oraz partnerskim relacjom z polskimi dealerami samochodów.',
      en: 'Claro Motors offers the most favourable deal on your future car, thanks to years of industry experience and partnership relationships with Polish car dealers.',
    },
    description: {
      pl: 'Jeżeli zależy Ci na jak najkorzystniejszej cenie samochodu, a preferujesz zakup gotówkowy lub swoją formę finansowania, możesz liczyć na pomoc naszych doradców. Negocjujemy warunki bezpośrednio z dyrektorami flotowymi polskich dealerów.',
      en: 'If you care about getting the best possible price for a car and prefer a cash purchase or your own form of financing, you can count on the help of our advisors. We negotiate terms directly with fleet directors at Polish dealerships.',
    },
    details: [
      {
        heading: { pl: 'Negocjacja ceny z dealerami', en: 'Price negotiation with dealers' },
        body: {
          pl: 'Przekładamy wolumen sprzedaży na indywidualny rabat dla Ciebie. Wynegocjowany rabat sięga 18% w stosunku do ceny katalogowej. Bezpłatny transport samochodu pod wskazany adres w całej Polsce.',
          en: 'We translate sales volume into an individual discount for you. The negotiated discount reaches up to 18% off the list price. Free car delivery to your chosen address anywhere in Poland.',
        },
      },
      {
        heading: { pl: 'Zakup gotówkowy', en: 'Cash purchase' },
        body: {
          pl: 'Preferujesz zakup za gotówkę? Negocjujemy cenę z dealerem, a Ty płacisz bezpośrednio po dostarczeniu auta. Pełna dokumentacja i faktura VAT od dealera.',
          en: 'Prefer to pay cash? We negotiate the price with the dealer, and you pay directly after the car is delivered. Full documentation and a VAT invoice from the dealer.',
        },
      },
      {
        heading: { pl: 'Własna forma finansowania', en: 'Your own financing' },
        body: {
          pl: 'Masz już umówiony kredyt lub leasing z własnym bankiem? My zajmujemy się negocjacją ceny pojazdu i dostawą. Ty korzystasz z własnego finansowania na naszych warunkach cenowych.',
          en: 'Already arranged a loan or lease with your own bank? We handle negotiating the vehicle price and delivery. You use your own financing on our negotiated pricing terms.',
        },
      },
    ],
  },
  {
    slug: 'ubezpieczenie',
    title: { pl: 'Najtańsze ubezpieczenie', en: 'The cheapest insurance' },
    shortTitle: { pl: 'Ubezpieczenie', en: 'Insurance' },
    icon: 'ShieldCheck',
    excerpt: {
      pl: 'Claro Motors to również Twój indywidualny doradca w znalezieniu najlepszej oferty ubezpieczenia. Mając do dyspozycji 18 towarzystw ubezpieczeniowych, zapewniamy gwarancję uzyskania najlepszej oferty na rynku.',
      en: 'Claro Motors is also your individual advisor in finding the best insurance offer. With access to 18 insurance companies, we guarantee you get the best offer on the market.',
    },
    description: {
      pl: 'Porównujemy oferty 18 towarzystw ubezpieczeniowych i przedstawiamy zestawienie kosztów oraz zakresu ochrony. Wybierasz polisę, która najlepiej odpowiada Twoim potrzebom — komunikacyjną, firmową, grupową lub na życie.',
      en: 'We compare offers from 18 insurance companies and present a breakdown of costs and coverage. You choose the policy that best suits your needs — motor, business, group, or life insurance.',
    },
    details: [
      {
        heading: { pl: 'Ubezpieczenie komunikacyjne AC/OC', en: 'Motor insurance (comprehensive/liability)' },
        body: {
          pl: 'Pełne zestawienie ofert AC i OC od 18 towarzystw. Porównujemy składki, franszyzy i zakres ochrony. Wybierasz polisę z najlepszym stosunkiem ceny do zakresu.',
          en: 'A full comparison of comprehensive and liability offers from 18 companies. We compare premiums, deductibles, and coverage scope. You choose the policy with the best value for coverage.',
        },
      },
      {
        heading: { pl: 'Ubezpieczenie firmowe i grupowe', en: 'Business and group insurance' },
        body: {
          pl: 'Zabezpieczamy floty pojazdów firmowych oraz ubezpieczenia grupowe dla pracowników. Indywidualne warunki negocjowane na podstawie wolumenu polis.',
          en: 'We insure company vehicle fleets as well as group insurance for employees. Individual terms negotiated based on policy volume.',
        },
      },
      {
        heading: { pl: 'Ubezpieczenie na życie', en: 'Life insurance' },
        body: {
          pl: 'Ochrona na życie powiązana z umową leasingu lub kredytu. Zapewnia spłatę rat w przypadku zdarzeń losowych. Dobieramy zakres ochrony do Twojej sytuacji życiowej i zawodowej.',
          en: 'Life protection linked to a leasing or loan contract. Ensures installments are covered in the event of unforeseen circumstances. We tailor the coverage to your personal and professional situation.',
        },
      },
    ],
  },
  {
    slug: 'gap',
    title: { pl: 'Ochrona utraty wartości GAP', en: 'GAP value-loss protection' },
    shortTitle: { pl: 'Ochrona GAP', en: 'GAP protection' },
    icon: 'Shield',
    excerpt: {
      pl: 'Ubezpieczenie GAP skierowane dla osób planujących zakup samochodu w formie kredytu lub leasingu. GAP zapewnia ochronę przed utratą wartości pojazdu, pokrywając różnicę pomiędzy pozostałymi do spłaty ratami a kwotą odszkodowania z AC.',
      en: 'GAP insurance is aimed at people planning to buy a car through a loan or lease. GAP protects against the vehicle losing value by covering the difference between the remaining installments and the comprehensive insurance payout.',
    },
    description: {
      pl: 'GAP Fakturowy wypłaca różnicę między kwotą na fakturze zakupu a wartością rynkową pojazdu w momencie szkody całkowitej lub kradzieży. Bez GAP zostajesz z ratami leasingowymi do spłaty i odszkodowaniem AC, które nie pokrywa pełnej kwoty zadłużenia.',
      en: 'Invoice GAP pays out the difference between the purchase invoice amount and the market value of the vehicle at the time of total loss or theft. Without GAP, you are left with leasing installments to pay off and a comprehensive insurance payout that does not cover the full debt.',
    },
    details: [
      {
        heading: { pl: 'GAP Fakturowy', en: 'Invoice GAP' },
        body: {
          pl: 'Wypłaca różnicę między kwotą na fakturze a wartością rynkową w momencie szkody całkowitej. Otrzymujesz zwrot pełnej kwoty, którą zapłaciłeś za auto — niezależnie od utraty wartości rynkowej.',
          en: 'Pays out the difference between the invoice amount and the market value at the time of total loss. You get a refund of the full amount you paid for the car — regardless of market value loss.',
        },
      },
      {
        heading: { pl: 'GAP Indeksowy', en: 'Index GAP' },
        body: {
          pl: 'Bazuje na tabelach deprecjacji określonych w umowie. Wypłata jest ograniczona procentowo w stosunku do wieku pojazdu. Mniej korzystny przy autach premium, które tracą wartość szybciej niż przewidują tabele.',
          en: 'Based on depreciation tables set out in the contract. The payout is capped as a percentage relative to the vehicle age. Less favourable for premium cars, which lose value faster than the tables assume.',
        },
      },
      {
        heading: { pl: 'Dla kogo GAP', en: 'Who is GAP for' },
        body: {
          pl: 'Obowiązkowy przy autach premium finansowanych w leasingu lub kredycie. Chroni kapitał w przypadku kradzieży lub szkody całkowitej. Bez GAP możesz zostać z długiem wobec firmy leasingowej, mimo wypłaty z AC.',
          en: 'Essential for premium cars financed via lease or loan. Protects your capital in case of theft or total loss. Without GAP, you may be left with a debt to the leasing company despite the comprehensive insurance payout.',
        },
      },
    ],
  },
];

export function serviceText(value: Localized, lang: Lang): string {
  return value[lang];
}

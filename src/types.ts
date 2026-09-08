// ---------------------------------------------------------------------------
// ADDING A NEW CAR TO THE FLEET
// Copy one of the objects in the `vehicles` array below and edit the fields.
// Only `id`, `name`, `image`, `power`, `fuel`, `year` and `price` are
// required — everything else (gallery, specs, description, colors) is
// optional and simply will not render its section if left out.
//
//   id       — unique, lowercase, no spaces (used in the URL /flota/<id>)
//   image    — main photo shown on the fleet grid and as the first gallery photo
//   gallery  — extra photo URLs (exterior + interior); shown on the car's own page
//   monthlyFrom — optional "rata od" price shown as a highlight badge
// ---------------------------------------------------------------------------
export interface Vehicle {
  id: string;
  name: string;
  image: string;
  power: string;
  fuel: string;
  year: string;
  price: number;
  gallery?: string[];
  monthlyFrom?: number;
  bodyType?: string;
  transmission?: string;
  drivetrain?: string;
  seats?: number;
  doors?: number;
  mileage?: string;
  description?: string;
  colors?: string[];
}

export interface CalculatorResult {
  rata: number;
  wplata: number;
  wykup: number;
  sumaProcent: number;
  sumaPln: number;
}

// ---------------------------------------------------------------------------
// ADDING A NEW BLOG ARTICLE
// Copy one of the objects in the \`blogArticles\` array below.
//   id       — unique, lowercase, no spaces (used in the URL /blog/<id>)
//   content  — an array of paragraphs; each string becomes one <p> on the article page
// New articles show up automatically on /blog and on the homepage teaser
// (which shows the 3 most recent) — no other file needs to change.
// ---------------------------------------------------------------------------
export interface BlogArticle {
  id: string;
  title: string;
  excerpt: string;
  content: string[];
  date: string;
  category: string;
  readTime: string;
}

export const vehicles: Vehicle[] = [
  {
    id: 'audi-rs6',
    name: 'Audi RS6 Avant',
    image: 'https://images.pexels.com/photos/7727196/pexels-photo-7727196.jpeg?auto=compress&cs=tinysrgb&h=1200&w=1800',
    power: '600 KM',
    fuel: 'Benzyna V8 4.0T',
    year: '2024',
    price: 640000,
    gallery: [/* client TODO: paste extra exterior/interior photo URLs here */],
    monthlyFrom: 9800,
    bodyType: 'Kombi',
    transmission: 'Automatyczna',
    drivetrain: 'Quattro (4x4)',
    seats: 5,
    doors: 5,
    mileage: '0 km (nowy)',
    description: 'Audi RS6 Avant łączy przestrzeń rodzinnego kombi z osiągami samochodu sportowego. Idealny wybór dla klienta firmowego, który potrzebuje dużego bagażnika bez kompromisu na codzienną dynamikę.',
  },
  {
    id: 'bmw-m5',
    name: 'BMW M5 Competition',
    image: 'https://images.pexels.com/photos/17888840/pexels-photo-17888840.jpeg?auto=compress&cs=tinysrgb&h=1200&w=1800',
    power: '625 KM',
    fuel: 'Benzyna V8 4.4T',
    year: '2024',
    price: 590000,
    gallery: [/* client TODO: paste extra exterior/interior photo URLs here */],
    monthlyFrom: 9200,
    bodyType: 'Sedan',
    transmission: 'Automatyczna',
    drivetrain: 'xDrive (4x4)',
    seats: 5,
    doors: 4,
    mileage: '0 km (nowy)',
    description: 'BMW M5 Competition to flagowy sedan sportowy — połączenie luksusu klasy biznes z osiągami wyczynowymi. Dostępny w konfiguracji leasingowej i wynajmu długoterminowego.',
  },
  {
    id: 'porsche-911',
    name: 'Porsche 911 Carrera S',
    image: 'https://images.pexels.com/photos/38160273/pexels-photo-38160273.jpeg?auto=compress&cs=tinysrgb&h=1200&w=1800',
    power: '450 KM',
    fuel: 'Benzyna B6 3.0T',
    year: '2024',
    price: 680000,
    gallery: [/* client TODO: paste extra exterior/interior photo URLs here */],
    monthlyFrom: 10500,
    bodyType: 'Coupe',
    transmission: 'Automatyczna (PDK)',
    drivetrain: 'Tylny napęd',
    seats: 4,
    doors: 2,
    mileage: '0 km (nowy)',
    description: 'Porsche 911 Carrera S to ikona segmentu — auto, które można zamówić w dowolnej konfiguracji kolorystycznej i wyposażeniowej za pośrednictwem naszego doradcy.',
  },
  {
    id: 'mercedes-g63',
    name: 'Mercedes-AMG G 63',
    image: 'https://images.pexels.com/photos/36782669/pexels-photo-36782669.jpeg?auto=compress&cs=tinysrgb&h=1200&w=1800',
    power: '585 KM',
    fuel: 'Benzyna V8 4.0T',
    year: '2024',
    price: 890000,
    gallery: [/* client TODO: paste extra exterior/interior photo URLs here */],
    monthlyFrom: 13900,
    bodyType: 'SUV',
    transmission: 'Automatyczna',
    drivetrain: '4MATIC (4x4)',
    seats: 5,
    doors: 5,
    mileage: '0 km (nowy)',
    description: 'Mercedes-AMG G 63 — kultowa bryła terenówki z osiągami sportowego SUV-a. Wysoki popyt i ograniczona dostępność — rezerwacja przez naszego doradcę zdecydowanie przyspiesza termin odbioru.',
  },
  {
    id: 'alpine-a110',
    name: 'Alpine A110 GT',
    image: 'https://images.pexels.com/photos/20895340/pexels-photo-20895340.jpeg?auto=compress&cs=tinysrgb&h=1200&w=1800',
    power: '300 KM',
    fuel: 'Benzyna I4 1.8T',
    year: '2024',
    price: 310000,
    gallery: [/* client TODO: paste extra exterior/interior photo URLs here */],
    monthlyFrom: 5400,
    bodyType: 'Coupe',
    transmission: 'Automatyczna (DCT)',
    drivetrain: 'Tylny napęd',
    seats: 2,
    doors: 2,
    mileage: '0 km (nowy)',
    description: 'Alpine A110 GT to lekki, precyzyjny sportowy coupe — świetna propozycja dla klienta, który szuka emocji za kierownicą bez kosztów utrzymania auta klasy super-sport.',
  },
];

export const blogArticles: BlogArticle[] = [
  {
    id: 'wykup-leasing-podatki',
    title: 'Wykup samochodu z leasingu po zmianach przepisów — jak bezpiecznie zoptymalizować podatki?',
    excerpt: 'Zmiany w przepisach podatkowych wprowadzają nowe zasady amortyzacji i odliczeń VAT przy wykupie pojazdów z leasingu operacyjnego. Praktyczne kroki, które pomagają uniknąć błędów w rozliczeniu i maksymalnie wykorzystać dostępne ulgi.',
    date: '12 sierpnia 2024',
    category: 'Leasing',
    readTime: '5 min',
    content: [
      'Wykup samochodu z leasingu operacyjnego to moment, w którym najczęściej pojawiają się pytania o podatki — zarówno o VAT, jak i o to, jak rozliczyć wykupione auto dalej, jeśli planujesz je sprzedać lub wprowadzić do firmy jako środek trwały.',
      'Pierwsza rzecz, o którą warto zapytać leasingodawcę przed podpisaniem umowy wykupu, to wysokość ceny wykupu w relacji do wartości rynkowej pojazdu. Zbyt niska cena wykupu w stosunku do wartości rynkowej bywa kwestionowana przez organy podatkowe — dlatego dobrze mieć przygotowaną wycenę rynkową auta na moment wykupu.',
      'Druga kwestia to VAT. Jeśli leasingobiorca odliczał VAT od rat leasingowych (w całości lub w 50%, w zależności od sposobu użytkowania pojazdu), ten sam sposób rozliczenia zwykle dotyczy też faktury za wykup — ale zasady bywają zmieniane, dlatego ostateczną stawkę i sposób rozliczenia zawsze warto potwierdzić z księgowością przed podpisaniem dokumentów, nie po.',
      'Trzecia sprawa — jeśli planujesz sprzedać auto krótko po wykupie, zwróć uwagę na okres, po którym sprzedaż nie rodzi dodatkowych zobowiązań podatkowych. To jeden z najczęstszych błędów: wykup auta „pod korzystną cenę”, a potem szybka sprzedaż bez sprawdzenia konsekwencji podatkowych takiej transakcji.',
      'W Claro Motors pomagamy zaplanować cały proces wykupu z wyprzedzeniem — łącznie z wyceną rynkową pojazdu i rozmową o tym, czy wykup, dalszy leasing na nowe auto, czy sprzedaż obecnego pojazdu jest w Twojej sytuacji najbardziej opłacalna. Jeśli zbliża się koniec Twojej umowy leasingowej, warto zacząć tę rozmowę minimum 2-3 miesiące przed terminem wykupu.',
    ],
  },
  {
    id: 'ubezpieczenie-gap',
    title: 'Ubezpieczenie GAP Fakturowy vs Indeksowy — co naprawdę chroni Twój kapitał przy kradzieży auta premium?',
    excerpt: 'Polisa GAP Fakturowy wypłaca różnicę między kwotą na fakturze a wartością rynkową w momencie szkody całkowitej. Indeksowy bazuje na tabelach depreciation. Porównanie dla auta klasy premium.',
    date: '5 sierpnia 2024',
    category: 'Ubezpieczenia',
    readTime: '4 min',
    content: [
      'Auta klasy premium tracą wartość szybciej niż wynika to z podstawowego ubezpieczenia AC — a to oznacza, że w razie kradzieży lub szkody całkowitej odszkodowanie z samego AC może nie pokryć różnicy między ceną zakupu a wartością auta rok czy dwa później. Po to istnieje ubezpieczenie GAP.',
      'GAP Fakturowy wypłaca różnicę między kwotą wskazaną na fakturze zakupu auta a wartością rynkową pojazdu w dniu szkody, ustaloną przez ubezpieczyciela AC. To rozwiązanie, które najlepiej sprawdza się przy nowych, drogich autach — chroni realnie zapłaconą kwotę, a nie jej uśrednioną projekcję.',
      'GAP Indeksowy działa na innej zasadzie: opiera się na z góry ustalonych tabelach spadku wartości (np. procent za każdy miesiąc użytkowania), niezależnie od faktycznej ceny zakupu. Bywa tańszy, ale przy autach, które tracą wartość szybciej niż przewiduje tabela indeksowa — a takie są typowe dla segmentu premium — może nie pokryć całej różnicy.',
      'Przy aucie o wartości 500 000 zł skradzionym po 18 miesiącach różnica w wypłacie między dobrze dobranym GAP Fakturowym a standardowym GAP Indeksowym może sięgać kilkudziesięciu tysięcy złotych — dlatego dobór właściwego wariantu, a nie tylko najniższej składki, ma tu bezpośrednie przełożenie na to, ile realnie odzyskasz.',
      'Mając dostęp do ofert 18 towarzystw ubezpieczeniowych, w Claro Motors porównujemy oba warianty pod kątem konkretnego auta i sposobu jego finansowania — leasingowanym pojazdom zwykle polecamy GAP Fakturowy, ale ostateczny wybór zawsze zależy od warunków konkretnej oferty w danym momencie.',
    ],
  },
  {
    id: 'wynajem-vs-leasing',
    title: 'Wynajem Długoterminowy czy Leasing Operacyjny? Porównanie dla firm.',
    excerpt: 'Wynajem długoterminowy przenosi serwis i ubezpieczenie na dostawcę, leasing operacyjny daje elastyczność wykupu. Praktyczne różnice dla auta klasy premium w okresie 48 miesięcy.',
    date: '28 lipca 2024',
    category: 'Finansowanie',
    readTime: '6 min',
    content: [
      'To pytanie słyszymy od klientów firmowych najczęściej: leasing operacyjny czy wynajem długoterminowy? Odpowiedź zależy od tego, czy chcesz w przyszłości zostać właścicielem auta, i od tego, jak bardzo zależy Ci na przewidywalności miesięcznych kosztów.',
      'Leasing operacyjny to wciąż najczęściej wybierana forma finansowania przez właścicieli firm. Rata wchodzi w koszty działalności, VAT można odliczyć na zasadach obowiązujących dla danego pojazdu, a po zakończeniu umowy masz opcję wykupu — auto może zostać Twoje.',
      'Wynajem długoterminowy działa inaczej: w jednej racie masz zwykle ujęte nie tylko finansowanie, ale i serwis, ubezpieczenie, a często też oponę zimową/letnią i auto zastępcze. To rozwiązanie dla firm, które chcą mieć jeden, przewidywalny koszt miesięczny bez zaskoczeń serwisowych — ale na koniec umowy auto wraca do wynajmującego, nie ma opcji wykupu na standardowych warunkach.',
      'Przy aucie premium w okresie 48 miesięcy różnica w całkowitym koszcie posiadania (uwzględniając serwis, ubezpieczenie i przewidywaną wartość wykupu) zwykle wychodzi na korzyść leasingu operacyjnego dla firm, które planują zatrzymać auto — i na korzyść wynajmu dla tych, którym zależy na wymianie floty co kilka lat bez zajmowania się sprzedażą starych pojazdów.',
      'W Claro Motors pomagamy policzyć obie opcje dla konkretnego auta i konkretnego okresu — nie w oparciu o ogólne hasła, tylko realne raty od kilku dostawców jednocześnie, żebyś widział różnicę w liczbach, a nie tylko w teorii.',
    ],
  },
];

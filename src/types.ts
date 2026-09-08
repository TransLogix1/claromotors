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

export interface BlogArticle {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  date: string;
  category: string;
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
    content: 'Pełna treść artykułu dostępna wkrótce.',
    date: '12 sierpnia 2024',
    category: 'Leasing',
  },
  {
    id: 'ubezpieczenie-gap',
    title: 'Ubezpieczenie GAP Fakturowy vs Indeksowy — co naprawdę chroni Twój kapitał przy kradzieży auta premium?',
    excerpt: 'Polisa GAP Fakturowy wypłaca różnicę między kwotą na fakturze a wartością rynkową w momencie szkody całkowitej. Indeksowy bazuje na tabelach depreciation. Porównanie wypłat dla auta o wartości 500 000 PLN przy kradzieży po 18 miesiącach.',
    content: 'Pełna treść artykułu dostępna wkrótce.',
    date: '5 sierpnia 2024',
    category: 'Ubezpieczenia',
  },
  {
    id: 'wynajem-vs-leasing',
    title: 'Wynajem Długoterminowy czy Leasing Operacyjny? Porównanie TCO dla firm.',
    excerpt: 'Total Cost of Ownership to miarodajny wskaźnik porównawczy. Wynajem długoterminowy przenosi serwis i ubezpieczenie na dostawcę, leasing operacyjny daje elastyczność wykupu. Liczby dla auta klasy premium w okresie 48 miesięcy.',
    content: 'Pełna treść artykułu dostępna wkrótce.',
    date: '28 lipca 2024',
    category: 'Finansowanie',
  },
];

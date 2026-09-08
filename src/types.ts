export interface Vehicle {
  id: string;
  name: string;
  image: string;
  power: string;
  fuel: string;
  year: string;
  price: number;
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
  },
  {
    id: 'bmw-m5',
    name: 'BMW M5 Competition',
    image: 'https://images.pexels.com/photos/17888840/pexels-photo-17888840.jpeg?auto=compress&cs=tinysrgb&h=1200&w=1800',
    power: '625 KM',
    fuel: 'Benzyna V8 4.4T',
    year: '2024',
    price: 590000,
  },
  {
    id: 'porsche-911',
    name: 'Porsche 911 Carrera S',
    image: 'https://images.pexels.com/photos/38160273/pexels-photo-38160273.jpeg?auto=compress&cs=tinysrgb&h=1200&w=1800',
    power: '450 KM',
    fuel: 'Benzyna B6 3.0T',
    year: '2024',
    price: 680000,
  },
  {
    id: 'mercedes-g63',
    name: 'Mercedes-AMG G 63',
    image: 'https://images.pexels.com/photos/36782669/pexels-photo-36782669.jpeg?auto=compress&cs=tinysrgb&h=1200&w=1800',
    power: '585 KM',
    fuel: 'Benzyna V8 4.0T',
    year: '2024',
    price: 890000,
  },
  {
    id: 'alpine-a110',
    name: 'Alpine A110 GT',
    image: 'https://images.pexels.com/photos/20895340/pexels-photo-20895340.jpeg?auto=compress&cs=tinysrgb&h=1200&w=1800',
    power: '300 KM',
    fuel: 'Benzyna I4 1.8T',
    year: '2024',
    price: 310000,
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

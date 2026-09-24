// Centrale virksomhedsdata – ret her, så slår det igennem på hele sitet.

export const company = {
  name: 'Legaards Entreprenørforretning',
  shortName: 'Legaards',
  contactPerson: 'Christian Legaard',
  contactTitle: 'Ejer og direktør',
  phone: '24 78 84 10',
  phoneHref: 'tel:+4524788410',
  email: 'mail@legaards.dk',
  cvr: '40072713',
  street: 'Stydingvej 2',
  zip: '6500',
  city: 'Vojens',
  region: 'Syddanmark',
  geo: { lat: 55.2780774, lng: 9.3541645 },
  hours: [
    { days: 'Mandag – fredag', time: '07:00 – 17:00' },
    { days: 'Weekend', time: 'Efter aftale' },
  ],
  machinesTons: '2–30 tons',
  facebook: 'https://www.facebook.com/legaars/',
  facebookGenbrug: 'https://www.facebook.com/profile.php?id=61561232394287',
  googleReviews: 'https://maps.google.com/?cid=13291175373740106993',
  googleRating: 5.0,
  googleReviewCount: 6,
};

export type NavItem = { label: string; href: string; children?: { label: string; href: string; desc?: string }[] };

export const services = [
  { label: 'Nedbrydning', href: '/nedbrydning/', desc: 'Nedrivning af bygninger i alle størrelser' },
  { label: 'Asbest', href: '/asbest/', desc: 'Screening og sanering af asbest' },
  { label: 'Miljørapport', href: '/miljoerapport/', desc: 'Miljøscreening før nedrivning' },
  { label: 'Anlæg', href: '/anlaeg/', desc: 'Jordarbejde, byggemodning og veje' },
];

export const nav: NavItem[] = [
  { label: 'Arbejdsområder', href: '/nedbrydning/', children: services },
  {
    label: 'Genbrugsplads',
    href: '/modtagerplads/',
    children: [
      { label: 'Aflever materialer', href: '/modtagerplads/', desc: 'Modtagerplads for beton, tegl og jern' },
      { label: 'Køb materialer', href: '/koeb-materialer/', desc: 'Knust beton, tegl og blandede materialer' },
      { label: 'Genbrug', href: '/genbrug/', desc: 'Materialer fra nedrivning der får nyt liv' },
    ],
  },
  { label: 'Galleri', href: '/galleri/' },
  { label: 'Cases', href: '/cases/' },
  { label: 'Om os', href: '/om-os/' },
  { label: 'Kontakt', href: '/kontakt/' },
];

// Ægte Google-anmeldelser (hentet 24/9 2026 fra Google-profilen "Legaards - Nedbrydning & Anlæg").
// Teksten er gengivet ordret. Tilføj nye her, når der kommer flere.
export const reviews = [
  {
    name: 'Gerhard Ettrup',
    text: 'I forbindelse med opgave på Luthersvej 7000 Fredericia takker vi for behagelig samarbejde og effektiv / hurtig nedbrydning af ældre hus.',
    sign: 'HVH. Hanne og Gerhard Ettrup, Mine og Christoffer Jahne',
  },
  { name: 'Stefan Hørlyck', text: 'Hurtig, effektiv og god service.' },
  { name: 'Andreas Jensen', text: "Go service go'e folk go oplevelse" },
  { name: 'June Jørgensen', text: 'Positive aspekter: Svartid, Punktlighed, Kvalitet, Professionalisme, Priser' },
];

// Udvalgte kunder/referencer – fra Legaards' egne opslag.
// TODO: indhent tilladelse, før logoer bruges. Tilføj `logo: '/img/logo-xxx.png'` når det er på plads.
export const references: { name: string; project: string; logo?: string }[] = [
  { name: 'Haderslev Kommune', project: 'Miljøsanering og nedrivning ved Jomfrustien' },
  { name: 'Middelfart Kommune', project: 'Miljøsanering og fjernelse af togvogn' },
  { name: 'DTE, Ribe', project: 'Selektiv nedrivning af varmehus' },
  { name: 'Højbogaard', project: 'Knusning af beton på stedet' },
  { name: 'Lokale tømrermestre', project: 'Asbestsanering af tage' },
];

// Folkene bag – tilføj medarbejdere her. `photo` = billednavn i /public/img (uden -800.webp).
export const team: { name: string; role: string; photo?: string; phone?: boolean }[] = [
  { name: 'Christian Legaard', role: 'Ejer og direktør', phone: true },
];

// Cases. Tekster og fakta bygger på Legaards' egne Facebook-opslag, hvor opslaget kunne kobles sikkert til billederne.
// Cases markeret "UDKAST" er skrevet ud fra billederne alene – TODO (kunden): bekræft sted, år og omfang.
// Felter i `facts` vises i faktaboksen i case-popup'en. Tomme værdier skjules automatisk.

export type Case = {
  slug: string;
  title: string;
  category: 'Nedbrydning' | 'Asbest' | 'Anlæg' | 'Genbrug' | 'Miljørapport';
  location: string;
  year?: string;
  summary: string;
  body: string[];
  facts: { label: string; value?: string }[];
  images: { src: string; alt: string }[];
  featured?: boolean;
};

export const cases: Case[] = [
  {
    // Kilde: FB-opslag om DTE i Ribe (sommer 2026)
    slug: 'nedrivning-varmehus-dte-ribe',
    title: 'Selektiv nedrivning af varmehus hos DTE i Ribe',
    category: 'Nedbrydning',
    location: 'Ribe',
    year: '2026',
    summary: 'Et ældre varmehus til tørring af nyskåret træ blev revet ned, så det kunne erstattes af et nyt og energibesparende.',
    body: [
      'Hos DTE i Ribe bruges varmehuset til at tørre det nyskårne træ, så det er klar til at blive brugt til emballage. Det gamle varmehus skulle udskiftes med et nyt og mere energibesparende.',
      'Bygningen var over 250 m², og derfor krævede opgaven en autoriseret nedrivningsvirksomhed. Vi rev ned selektivt, så materialerne blev sorteret undervejs og mest muligt kunne genbruges.',
    ],
    facts: [
      { label: 'Kunde', value: 'DTE, Ribe' },
      { label: 'Opgave', value: 'Selektiv nedrivning af varmehus' },
      { label: 'Omfang', value: 'Over 250 m²' },
      { label: 'År', value: '2026' },
      { label: 'Ydelser', value: 'Selektiv nedrivning, sortering, bortskaffelse' },
    ],
    images: [
      { src: 'case-industri-hal-foer', alt: 'Varmehuset hos DTE i Ribe før nedrivning' },
      { src: 'case-industri-tag-demontering', alt: 'Demontering på taget af varmehuset' },
      { src: 'case-industri-hal-indvendig', alt: 'Varmehuset indvendigt' },
      { src: 'case-industri-grab', alt: 'Gravemaskine med grab river varmehuset ned' },
      { src: 'case-industri-nedrivning', alt: 'Nedrivning af varmehus med ventilationsrør' },
      { src: 'case-industri-oversigt', alt: 'Oversigt over nedrivningen med siloer i baggrunden' },
      { src: 'case-industri-tag', alt: 'Tagkonstruktionen revet ned' },
      { src: 'case-industri-ryddet', alt: 'Ryddet areal efter nedrivningen' },
    ],
    featured: true,
  },
  {
    // Kilde: FB-opslag 6. september 2026
    slug: 'nedrivning-hus-fjordvej-kolding',
    title: 'Nedrivning af hus på Fjordvej i Kolding',
    category: 'Nedbrydning',
    location: 'Kolding',
    year: '2026',
    summary: 'Et ældre hus med udsigt over Kolding Fjord revet ned i et tæt villakvarter – og grunden gravet ud til det nye.',
    body: [
      'Huset på Fjordvej lå i et tæt bebygget villakvarter ned mod Kolding Fjord. Der blev lagt køreplader ud, så indkørsel og naboarealer blev skånet, og affaldet blev sorteret direkte i containere.',
      'Efter nedrivningen blev grunden gravet ud, så den stod klar til byggeriet af det nye hus.',
    ],
    facts: [
      { label: 'Opgave', value: 'Nedrivning af bolig' },
      { label: 'Sted', value: 'Fjordvej, Kolding' },
      { label: 'År', value: '2026' },
      { label: 'Ydelser', value: 'Nedbrydning, sortering, udgravning' },
    ],
    images: [
      { src: 'nedbrydning-villa-container', alt: 'Nedrivning af huset på Fjordvej med container i indkørslen' },
      { src: 'nedbrydning-hus-ved-vandet', alt: 'Huset revet ned med Kolding Fjord i baggrunden' },
      { src: 'anlaeg-udgravning', alt: 'Udgravning af grunden efter nedrivning' },
      { src: 'anlaeg-udgravning-hus', alt: 'Grunden gravet ud til det nye hus' },
    ],
    featured: true,
  },
  {
    // Kilde: FB-opslag om fjernelse af elementer til 10 m port (samarbejdspartnere nævnt i opslaget)
    slug: 'elementer-fjernet-til-ny-port',
    title: 'Betonelementer fjernet til ny 10 m port',
    category: 'Nedbrydning',
    location: 'Syddanmark',
    year: '2026',
    summary: 'En anderledes opgave, hvor planlægningen var afgørende: facadeelementer blev fjernet, så en 10 meter bred port kunne sættes i.',
    body: [
      'I en eksisterende erhvervsbygning skulle der gøres plads til en ny, 10 meter bred port. Et par af facadeelementerne blev skåret fri og løftet ud med kran.',
      'Opgaven blev løst i tæt samarbejde med Sydjysk Diamant Skæring, Verner Jensen Krantransport ApS og Vognmandsfirmaet Mads Andersen.',
    ],
    facts: [
      { label: 'Opgave', value: 'Fjernelse af facadeelementer' },
      { label: 'Område', value: 'Syddanmark' },
      { label: 'Ydelser', value: 'Planlægning, delvis nedbrydning, kranløft' },
    ],
    images: [
      { src: 'case-port-kran', alt: 'Kran løfter facadeelement ud af bygningen' },
      { src: 'case-port-bygning', alt: 'Erhvervsbygningen før elementerne blev fjernet' },
      { src: 'case-port-loeft', alt: 'Facadeelement løftes ud' },
      { src: 'case-port-kranbil', alt: 'Mobilkran klar ved bygningen' },
      { src: 'case-port-oversigt', alt: 'Kranbil set oppefra' },
    ],
    featured: true,
  },
  {
    // Kilde: FB-opslag om asbestsanering i Haderslev og Jels
    slug: 'asbestsanering-tage-haderslev-jels',
    title: 'Asbestsanering af tage i Haderslev og Jels',
    category: 'Asbest',
    location: 'Haderslev og Jels',
    year: '2026',
    summary: 'Asbestholdige tage saneret for lokale tømrermestre – under afskærmning, med udsugning og korrekt bortskaffelse.',
    body: [
      'For lokale tømrermestre i Haderslev og Jels har vi saneret asbestholdige tage, så tømrerne kunne gå i gang med det nye tag.',
      'Arbejdsområdet blev afskærmet med plast og udsugning, og det asbestholdige materiale blev pakket og bortskaffet efter reglerne. Vi kan også fjerne asbest i badeværelser og andre steder i huset.',
    ],
    facts: [
      { label: 'Opgave', value: 'Asbestsanering af tage' },
      { label: 'Sted', value: 'Haderslev og Jels' },
      { label: 'Kunder', value: 'Lokale tømrermestre' },
      { label: 'År', value: '2026' },
      { label: 'Ydelser', value: 'Afskærmning, sanering, bortskaffelse' },
    ],
    images: [
      { src: 'asbest-tag-aabnet', alt: 'Åbnet tag med medarbejdere i beskyttelsesdragter' },
      { src: 'asbest-tag-udsugning', alt: 'Afdækket tag med udsugning under asbestsanering' },
      { src: 'asbest-loftrum-indkapslet', alt: 'Loftrum indkapslet i plast under sanering' },
    ],
    featured: false,
  },
  {
    // Kilde: FB-opslag 30. juni 2026
    slug: 'knust-beton-til-ny-plads',
    title: 'Knust beton til ny høtteplads',
    category: 'Genbrug',
    location: 'Syddanmark',
    year: '2026',
    summary: 'Knust beton fra vores egne opgaver blev genanvendt som bærelag på en ny plads, som entreprenør Jeppe Nøhr har etableret.',
    body: [
      'Vi leverede knust beton til den nye høtteplads, som entreprenør Jeppe Nøhr har etableret. Betonen stammer fra vores egne nedrivninger og er knust på vores plads.',
      'Vi er glade for, at vores materialer bliver genanvendt i nærområdet i stedet for nye råstoffer.',
    ],
    facts: [
      { label: 'Opgave', value: 'Levering af knust beton' },
      { label: 'Materiale', value: 'Knust beton' },
      { label: 'År', value: '2026' },
      { label: 'Ydelser', value: 'Knusning, levering' },
    ],
    images: [
      { src: 'anlaeg-planering-landmaaling', alt: 'Den nye plads med knust beton og landmålingsudstyr' },
      { src: 'anlaeg-planering-2', alt: 'Færdig plads udlagt med knust beton' },
    ],
    featured: false,
  },
  {
    // UDKAST – kun ud fra billederne
    slug: 'nedrivning-landbrugsejendom',
    title: 'Nedrivning af landbrugsbygninger',
    category: 'Nedbrydning',
    location: 'Syddanmark',
    summary: 'Ældre avlsbygninger revet ned, materialerne sorteret og grunden efterladt ryddet.',
    body: [
      'Nedrivning af ældre landbrugs- og avlsbygninger, hvor både stald og tilhørende bygninger blev fjernet.',
      'Materialerne blev sorteret på stedet, og grunden blev ryddet og efterladt klar til ny anvendelse.',
    ],
    facts: [
      { label: 'Opgave', value: 'Nedrivning af landbrugsejendom' },
      { label: 'Område', value: 'Syddanmark' },
      { label: 'Ydelser', value: 'Nedbrydning, sortering, oprydning' },
    ],
    images: [
      { src: 'case-landbrug-foer', alt: 'Landbrugsejendom under nedrivning' },
      { src: 'case-landbrug-nedrivning', alt: 'Nedrivningsmaterialer sorteres på grunden' },
      { src: 'case-landbrug-ryddet', alt: 'Ryddet grund efter nedrivning' },
      { src: 'case-landbrug-koereplader', alt: 'Køreplader lagt ud på den ryddede grund' },
    ],
    featured: false,
  },
  {
    // UDKAST – kun ud fra billederne
    slug: 'byggemodning-og-terraen',
    title: 'Byggemodning og terrænregulering',
    category: 'Anlæg',
    location: 'Syddanmark',
    summary: 'Udgravning, planering og sandpuder til et nyt område – klar til byggeri.',
    body: [
      'Byggemodning af et større areal med udgravning, jordflytning og terrænregulering.',
      'Arealet blev planeret, og der blev lagt sandpuder, så grunden stod klar til byggeriet.',
    ],
    facts: [
      { label: 'Opgave', value: 'Byggemodning' },
      { label: 'Område', value: 'Syddanmark' },
      { label: 'Ydelser', value: 'Udgravning, planering, sandpuder, jordtransport' },
    ],
    images: [
      { src: 'anlaeg-byggemodning', alt: 'Byggemodning set oppefra med jordbunker og maskiner' },
      { src: 'anlaeg-sandlevering', alt: 'Levering af sand til sandpude' },
      { src: 'anlaeg-sandpude', alt: 'Færdig sandpude' },
      { src: 'anlaeg-planering', alt: 'Planering set fra gravemaskinen' },
    ],
    featured: false,
  },
  {
    // UDKAST – kun ud fra billederne
    slug: 'rydning-af-erhvervsgrund',
    title: 'Rydning af erhvervsgrund',
    category: 'Nedbrydning',
    location: 'Syddanmark',
    summary: 'Betongulve og fundamenter brudt op, jorden gravet ud og en stor erhvervsgrund efterladt ryddet.',
    body: [
      'Efter nedrivningen af bygningerne skulle grunden ryddes helt. Betongulve og fundamenter blev brudt op med hydraulisk hammer og sorteringsgrab, og gamle fundamenter blev gravet fri og fjernet.',
      'Betonen blev sorteret fra, så den kunne knuses og genbruges. Til sidst stod hele arealet ryddet og planeret, klar til ny anvendelse.',
    ],
    facts: [
      { label: 'Opgave', value: 'Rydning af erhvervsgrund' },
      { label: 'Område', value: 'Syddanmark' },
      { label: 'År', value: '' },
      { label: 'Omfang', value: '' },
      { label: 'Ydelser', value: 'Brydning af beton, udgravning, sortering, planering' },
    ],
    images: [
      { src: 'case-erhvervsgrund-oversigt', alt: 'Oversigt over erhvervsgrund under rydning' },
      { src: 'case-erhvervsgrund-fundament', alt: 'Brydning af betonfundament med hydraulisk hammer' },
      { src: 'case-erhvervsgrund-udgravning', alt: 'Gravemaskine graver gamle fundamenter fri' },
      { src: 'case-erhvervsgrund-fundament-2', alt: 'Fundament graves op' },
      { src: 'case-erhvervsgrund-jord', alt: 'Udgravning på erhvervsgrunden' },
      { src: 'case-erhvervsgrund-ryddet', alt: 'Ryddet areal efter fjernelse af betongulv' },
      { src: 'case-erhvervsgrund-ryddet-2', alt: 'Færdigryddet erhvervsgrund' },
    ],
    featured: false,
  },
  {
    // UDKAST – kun ud fra billederne
    slug: 'nedrivning-muret-erhvervsbygning',
    title: 'Nedrivning af muret erhvervsbygning',
    category: 'Nedbrydning',
    location: 'Syddanmark',
    summary: 'Afspærret byggeplads midt i byen, hvor en ældre muret bygning blev revet ned og murbrokkerne sorteret.',
    body: [
      'En ældre, muret bygning i et bebygget område skulle rives ned. Byggepladsen blev afspærret med byggehegn og skiltet, så naboer og forbipasserende var sikret under hele forløbet.',
      'Bygningen blev revet ned med gravemaskine, og mursten og beton blev sorteret, så materialerne kunne genbruges.',
    ],
    facts: [
      { label: 'Opgave', value: 'Nedrivning af erhvervsbygning' },
      { label: 'Område', value: 'Syddanmark' },
      { label: 'År', value: '' },
      { label: 'Omfang', value: '' },
      { label: 'Ydelser', value: 'Afspærring, nedbrydning, sortering' },
    ],
    images: [
      { src: 'case-institution-foer', alt: 'Muret bygning før nedrivning' },
      { src: 'case-institution-skilt', alt: 'Afspærret byggeplads med Legaards-skilt' },
      { src: 'case-institution-foer-2', alt: 'Bygningen set fra vejen før nedrivning' },
      { src: 'case-institution-nedrivning', alt: 'Nedrivning bag byggehegn' },
      { src: 'nedbrydning-mursten', alt: 'Murbrokker sorteres efter nedrivning' },
    ],
    featured: false,
  },
  {
    // UDKAST – kun ud fra billederne
    slug: 'markvej-og-planering',
    title: 'Markvej og planering',
    category: 'Anlæg',
    location: 'Syddanmark',
    summary: 'Ny markvej anlagt gennem et skovområde og et større areal planeret og gjort klar.',
    body: [
      'Anlæg af en ny markvej gennem et skovområde, opbygget med grus.',
      'I samme opgave blev et større areal ryddet og planeret.',
    ],
    facts: [
      { label: 'Opgave', value: 'Markvej og terrænregulering' },
      { label: 'Område', value: 'Syddanmark' },
      { label: 'År', value: '' },
      { label: 'Omfang', value: '' },
      { label: 'Ydelser', value: 'Markvej, bundsikring, planering' },
    ],
    images: [
      { src: 'case-markvej-vej', alt: 'Nyanlagt markvej gennem skoven' },
      { src: 'case-markvej-planering', alt: 'Planeret areal' },
      { src: 'case-markvej-planering-2', alt: 'Planeret areal ved skovkanten' },
    ],
    featured: false,
  },
];

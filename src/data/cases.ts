// Cases – UDKAST lavet ud fra billederne.
// TODO (kunden): ret titel/tekst og udfyld sted, år og omfang for hver case.
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
    slug: 'nedrivning-industrihaller',
    title: 'Nedrivning af industrihaller',
    category: 'Nedbrydning',
    location: 'Syddanmark',
    summary: 'Nedrivning af industrihaller med tagkonstruktion, rør og ventilationsanlæg – og et ryddet areal til sidst.',
    body: [
      'Opgaven omfattede nedrivning af flere sammenhængende industrihaller, inklusive tagkonstruktion samt rør- og ventilationsinstallationer.',
      'Arbejdet blev udført med gravemaskiner med sorteringsgrab, så materialerne kunne sorteres undervejs og mest muligt gå til genbrug. Til slut stod arealet ryddet og klar til næste fase.',
    ],
    facts: [
      { label: 'Opgave', value: 'Nedrivning af industribygning' },
      { label: 'Område', value: 'Syddanmark' },
      { label: 'År', value: '' },
      { label: 'Omfang', value: '' },
      { label: 'Ydelser', value: 'Nedbrydning, sortering, bortskaffelse' },
    ],
    images: [
      { src: 'case-industri-oversigt', alt: 'Oversigt over nedrivning af industrihaller med siloer i baggrunden' },
      { src: 'case-industri-hal-foer', alt: 'Industrihal før nedrivning' },
      { src: 'case-industri-grab', alt: 'Gravemaskine med grab river hal ned' },
      { src: 'case-industri-nedrivning', alt: 'Nedrivning af hal med ventilationsrør' },
      { src: 'case-industri-tag', alt: 'Tagkonstruktion revet ned' },
      { src: 'case-industri-tag-demontering', alt: 'Demontering på taget af industrihal' },
      { src: 'case-industri-ryddet', alt: 'Ryddet areal efter nedrivning' },
    ],
    featured: true,
  },
  {
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
      { label: 'År', value: '' },
      { label: 'Omfang', value: '' },
      { label: 'Ydelser', value: 'Nedbrydning, sortering, oprydning' },
    ],
    images: [
      { src: 'case-landbrug-foer', alt: 'Landbrugsejendom under nedrivning' },
      { src: 'case-landbrug-stald', alt: 'Staldkonstruktion under nedrivning' },
      { src: 'case-landbrug-nedrivning', alt: 'Nedrivningsmaterialer sorteres på grunden' },
      { src: 'case-landbrug-ryddet', alt: 'Ryddet grund efter nedrivning' },
      { src: 'case-landbrug-koereplader', alt: 'Køreplader lagt ud på den ryddede grund' },
    ],
    featured: true,
  },
  {
    slug: 'nedrivning-parcelhus',
    title: 'Nedrivning af parcelhus',
    category: 'Nedbrydning',
    location: 'Syddanmark',
    summary: 'Et ældre hus revet ned i et villakvarter – med hensyn til naboer og sortering af materialerne.',
    body: [
      'Nedrivning af et ældre parcelhus i et tæt bebygget villakvarter. Huset blev først strippet indvendigt, hvorefter tag og mure blev revet ned.',
      'Affaldet blev sorteret direkte i containere, og grunden blev efterladt ryddet.',
    ],
    facts: [
      { label: 'Opgave', value: 'Nedrivning af bolig' },
      { label: 'Område', value: 'Syddanmark' },
      { label: 'År', value: '' },
      { label: 'Omfang', value: '' },
      { label: 'Ydelser', value: 'Indvendig strip, nedbrydning, sortering' },
    ],
    images: [
      { src: 'nedbrydning-villa-container', alt: 'Nedrivning af villa med container i indkørslen' },
      { src: 'nedbrydning-hus-tag', alt: 'Tag på murstenshus rives ned' },
      { src: 'nedbrydning-indvendig', alt: 'Indvendig strip af hus før nedrivning' },
      { src: 'nedbrydning-hus-ved-vandet', alt: 'Nedrevet murstenshus og sorteret affald' },
      { src: 'nedbrydning-mursten', alt: 'Mursten og byggeaffald efter nedrivning' },
    ],
    featured: true,
  },
  {
    slug: 'asbestsanering-tag',
    title: 'Asbestsanering af tag og loftrum',
    category: 'Asbest',
    location: 'Syddanmark',
    summary: 'Tag og loftrum saneret under fuld afskærmning, med udsugning, sluse og korrekt bortskaffelse.',
    body: [
      'Sanering af asbestholdigt materiale i tag og loftrum. Arbejdsområdet blev afskærmet med plast, og der blev etableret sluse og udsugning.',
      'Fibre blev bundet før fjernelse, og det asbestholdige affald blev pakket og bortskaffet efter reglerne – med dokumentation til bygherren.',
    ],
    facts: [
      { label: 'Opgave', value: 'Asbestsanering' },
      { label: 'Område', value: 'Syddanmark' },
      { label: 'År', value: '' },
      { label: 'Omfang', value: '' },
      { label: 'Ydelser', value: 'Afskærmning, sanering, bortskaffelse, dokumentation' },
    ],
    images: [
      { src: 'asbest-tag-aabnet', alt: 'Åbnet tag med medarbejdere i beskyttelsesdragter' },
      { src: 'asbest-tag-udsugning', alt: 'Afdækket tag med udsugning under asbestsanering' },
      { src: 'asbest-loftrum-indkapslet', alt: 'Loftrum indkapslet i plast under sanering' },
      { src: 'asbest-fiberbinding', alt: 'Binding af fibre i loftrum under asbestsanering' },
      { src: 'asbest-sluse', alt: 'Sluse ved arbejdsområde for asbestsanering' },
      { src: 'asbest-miljoevogn', alt: 'Legaards velfærds- og miljøvogn på pladsen' },
    ],
    featured: false,
  },
  {
    slug: 'byggemodning-og-terraen',
    title: 'Byggemodning og terrænregulering',
    category: 'Anlæg',
    location: 'Syddanmark',
    summary: 'Udgravning, planering og sandpuder til et nyt område – klar til byggeri.',
    body: [
      'Byggemodning af et større areal med udgravning, jordflytning og terrænregulering.',
      'Arealet blev planeret efter opmåling, og der blev lagt sandpuder, så grunden stod klar til byggeriet.',
    ],
    facts: [
      { label: 'Opgave', value: 'Byggemodning' },
      { label: 'Område', value: 'Syddanmark' },
      { label: 'År', value: '' },
      { label: 'Omfang', value: '' },
      { label: 'Ydelser', value: 'Udgravning, planering, sandpuder, jordtransport' },
    ],
    images: [
      { src: 'anlaeg-byggemodning', alt: 'Byggemodning set oppefra med jordbunker og maskiner' },
      { src: 'anlaeg-planering-landmaaling', alt: 'Planeret areal med landmålingsudstyr' },
      { src: 'anlaeg-sandlevering', alt: 'Levering af sand til sandpude' },
      { src: 'anlaeg-sandpude', alt: 'Færdig sandpude' },
      { src: 'anlaeg-planering', alt: 'Planering set fra gravemaskinen' },
    ],
    featured: false,
  },
  {
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

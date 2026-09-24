// Lokale landingssider med fokus på nedrivning.
// /entreprenoer-aabenraa/ (gammel URL fra legaards.dk) 301-redirectes til /nedrivning-aabenraa/ i public/_redirects.
// `jobs` er opgaver, Legaards selv har omtalt på Facebook – hold dem sande og lokale. Hold teksterne unikke pr. by.

export type City = {
  slug: string;
  name: string;
  kommune: string;
  title: string;
  description: string;
  nearby: string[];
  intro: string;
  local: string;
  distance: string;
  jobs: string[];
  caseSlugs: string[];
  image: string;
  images: { src: string; alt: string }[];
};

export const cities: City[] = [
  {
    slug: 'nedrivning-kolding',
    name: 'Kolding',
    kommune: 'Kolding Kommune',
    title: 'Nedrivning i Kolding – huse, sommerhuse, erhverv',
    description: 'Nedrivning af huse, sommerhuse, stalde og erhvervsbygninger i Kolding og omegn. Asbestsanering, selektiv nedrivning og udgravning bagefter. Ring 24 78 84 10.',
    nearby: ['Vamdrup', 'Lunderskov', 'Christiansfeld', 'Binderup Strand', 'Grønninghoved'],
    intro: 'Skal et hus, et sommerhus eller en erhvervsbygning i Kolding rives ned? Vi tager hele forløbet – fra screening og asbestsanering til nedrivning, sortering og en ryddet grund, klar til det nye byggeri.',
    local: 'Kolding er et af de steder, vi oftest river ned. Mange af opgaverne er ældre huse, der skal give plads til et nyt og energivenligt hus – ofte på grunde tæt på naboer og vand, hvor der skal planlægges og køres forsigtigt. Vi lægger køreplader ud, sorterer affaldet direkte i containere og graver gerne ud, så støberen kan gå i gang.',
    distance: 'Fra vores plads ved Vojens er der kort vej til Kolding, så vi kan ofte starte hurtigt.',
    jobs: [
      'Nedrivning af hus på Fjordvej i Kolding – med udgravning bagefter',
      'Miljøsanering og nedrivning af hus og garage, så der blev plads til et nyt hus',
      'Asbestsanering af tag og badeværelse og nedrivning af hus',
      'Nedrivning af stald med efterfølgende udlægning af muld og grus',
      'Nedrivning af stormflodsskadede sommerhuse i Grønninghoved',
      'Nedrivning af sommerhus ved Binderup Strand',
    ],
    caseSlugs: ['nedrivning-hus-fjordvej-kolding'],
    image: 'nedbrydning-hus-ved-vandet',
    images: [
      { src: 'nedbrydning-villa-container', alt: 'Nedrivning af hus i Kolding med container i indkørslen' },
      { src: 'nedbrydning-hus-ved-vandet', alt: 'Nedrevet hus med Kolding Fjord i baggrunden' },
      { src: 'anlaeg-udgravning', alt: 'Udgravning efter nedrivning i Kolding' },
      { src: 'bolig-foer-sommerhus', alt: 'Sommerhus før nedrivning' },
    ],
  },
  {
    slug: 'nedrivning-haderslev',
    name: 'Haderslev',
    kommune: 'Haderslev Kommune',
    title: 'Nedrivning i Haderslev – nedbrydning og sanering',
    description: 'Nedrivning og miljøsanering i Haderslev: huse, erhverv og kommunale bygninger. Vi har bl.a. nedrevet bygninger ved Jomfrustien for Haderslev Kommune. Få et tilbud.',
    nearby: ['Vojens', 'Gram', 'Årøsund', 'Hajsager', 'Starup', 'Marstrup'],
    intro: 'Legaards holder til få kilometer fra Haderslev. Vi river huse, lader og erhvervsbygninger ned i hele Haderslev Kommune – og miljøsanerer for asbest, bly og PCB, før maskinerne går i gang.',
    local: 'For Haderslev Kommune har vi miljøsaneret og nedrevet flere bygninger ved Jomfrustien, bl.a. det tidligere Kim Bil, Kirkens Korshær og Ønskebørn, og fjernet en tidligere tankstations underjordiske tanke. Området er i dag en del af den nye Hertug Hans Park. Vi løser også de mindre opgaver – et gammelt hus, der skal give plads til rækkehuse, eller en lade på landet.',
    distance: 'Vi har base på Stydingvej 2 ved Vojens – kun få minutters kørsel fra Haderslev.',
    jobs: [
      'Miljøsanering og nedrivning af bygninger ved Jomfrustien for Haderslev Kommune',
      'Fjernelse af underjordiske tanke fra tidligere tankstation',
      'Asbestsanering af tage for lokale tømrermestre i Haderslev og Jels',
      'Nedrivning af hus og sandpude til 4 nye rækkehuse',
      'Miljøsanering og nedrivning af huse i Årøsund og Hajsager',
      'Nedrivning af hus og lade i Marstrup',
    ],
    caseSlugs: ['asbestsanering-tage-haderslev-jels'],
    image: 'case-institution-foer',
    images: [
      { src: 'case-institution-skilt', alt: 'Afspærret byggeplads med Legaards-skilt' },
      { src: 'case-institution-foer', alt: 'Muret bygning før nedrivning' },
      { src: 'asbest-tag-aabnet', alt: 'Asbestsanering af tag' },
      { src: 'nedbrydning-grund-efter', alt: 'Grund planeres efter nedrivning' },
    ],
  },
  {
    slug: 'nedrivning-aabenraa',
    name: 'Aabenraa',
    kommune: 'Aabenraa Kommune',
    title: 'Nedrivning i Aabenraa – huse og erhverv',
    description: 'Nedrivning og nedbrydning i Aabenraa, Rødekro og Kruså: huse, stuehuse og erhvervsgrunde. Miljøsanering og asbest håndteres af autoriserede folk. Ring 24 78 84 10.',
    nearby: ['Rødekro', 'Kruså', 'Padborg', 'Kliplev', 'Løjt Kirkeby'],
    intro: 'Skal der rives ned i Aabenraa Kommune? Vi har rødderne i Sønderjylland og river både huse, stuehuse og erhvervsbygninger ned – med miljøsanering først og sortering af materialerne bagefter.',
    local: 'Vi har bl.a. miljøsaneret, nedrevet og terrænreguleret en grund på Aabenraa Havn, da en lejekontrakt ophørte. Ved Rødekro har vi saneret et stort stuehus for asbest i badeværelse, tag og tagrum og for bly i indervæggene, før det blev taget ned med maskine. Gennem god dialog finder vi den løsning, der passer til dig – stort som småt.',
    distance: 'Fra Vojens kører vi til Aabenraa og hele den sydlige del af kommunen.',
    jobs: [
      'Miljøsanering, nedbrydning og terrænregulering af grund på Aabenraa Havn',
      'Miljøsanering af stort stuehus ved Rødekro før nedrivning',
      'Asbestsanering af bølgepladetag i Kruså for lokal tømrermester',
    ],
    caseSlugs: [],
    image: 'case-erhvervsgrund-ryddet',
    images: [
      { src: 'case-erhvervsgrund-fundament', alt: 'Brydning af betonfundament' },
      { src: 'bolig-foer-hus', alt: 'Hus før nedrivning' },
      { src: 'case-erhvervsgrund-ryddet', alt: 'Ryddet grund efter nedrivning' },
      { src: 'asbest-loftrum-indkapslet', alt: 'Asbestsanering af tagrum' },
    ],
  },
  {
    slug: 'nedrivning-soenderborg',
    name: 'Sønderborg',
    kommune: 'Sønderborg Kommune',
    title: 'Nedrivning i Sønderborg – huse og sommerhuse',
    description: 'Nedrivning af huse og sommerhuse i Sønderborg og på Als – også stormflodsskadede bygninger. Miljøsanering, asbest og oprydning. Få et uforpligtende tilbud.',
    nearby: ['Rinkenæs', 'Gråsten', 'Broager', 'Nordborg', 'Augustenborg'],
    intro: 'Vi river huse og sommerhuse ned i hele Sønderborg Kommune – også dem, der er skadet af storm og stormflod. Vi screener for miljøfarlige stoffer, saner og river ned, så grunden står klar til det nye.',
    local: 'Mange huse og sommerhuse langs Flensborg Fjord og på Als er bygget med materialer, der kan indeholde asbest eller PCB. Derfor starter vi altid med en screening. I Rinkenæs har vi miljøsaneret og nedrevet et stormflodsskadet hus – med den flotteste udsigt – og efterladt grunden ryddet til ejerens næste skridt.',
    distance: 'Vi kører fra Vojens til Sønderborg, Gråsten og resten af kommunen.',
    jobs: [
      'Miljøsanering og nedrivning af stormflodsskadet hus i Rinkenæs',
      'Nedrivning af huse og sommerhuse med efterfølgende oprydning',
    ],
    caseSlugs: [],
    image: 'bolig-efter-grund-vand',
    images: [
      { src: 'bolig-foer-sommerhus-2', alt: 'Sommerhus før nedrivning' },
      { src: 'bolig-efter-grund-vand', alt: 'Ryddet grund ved vandet' },
      { src: 'nedbrydning-hus-tag', alt: 'Tag rives ned' },
      { src: 'asbest-tag-udsugning', alt: 'Asbestsanering af tag' },
    ],
  },
  {
    slug: 'nedrivning-vojens',
    name: 'Vojens',
    kommune: 'Haderslev Kommune',
    title: 'Nedrivning i Vojens – lokal nedrivningsentreprenør',
    description: 'Lokal nedrivning i Vojens, Sommersted og omegn: stuehuse, lader, maskinhuse og huse. Egen plads på Stydingvej 2 med modtagelse af beton og tegl. Ring 24 78 84 10.',
    nearby: ['Sommersted', 'Jegerup', 'Skrydstrup', 'Hammelev', 'Toftlund'],
    intro: 'Legaards har base på Stydingvej 2 ved Vojens. Her har vi maskinparken og vores egen modtagerplads – så vi er tæt på, når der skal rives ned i lokalområdet.',
    local: 'Mange af vores kunder omkring Vojens er landmænd og husejere, der kommer igen. Ved en gård har vi fjernet et ældre maskinhus og fundamentet fra et halmfyr, så der kunne bygges et tidssvarende maskinhus – og hos en anden kunde har vi to gange nedrevet lade og stuehus, så de kunne bygge nyt. Betonen og teglen kører vi hjem på pladsen, hvor den knuses og genbruges.',
    distance: 'Vi har base i Vojens – kortere bliver vejen ikke.',
    jobs: [
      'Nedrivning af ældre maskinhus og fundament fra halmfyr på gård ved Vojens',
      'Miljøsanering og nedrivning af stuehus og udhuse – med udgravning til nyt hus og indkørsel',
      'Miljøsanering og nedrivning af lade for en tilbagevendende kunde',
      'Indvendig nedbrydning af banehuset i Sommersted før ombygning',
      'Udgravning af stald og fjernelse af malkestald i Hammelev',
    ],
    caseSlugs: [],
    image: 'plads-oversigt',
    images: [
      { src: 'case-landbrug-foer', alt: 'Nedrivning af landbrugsbygning' },
      { src: 'nedbrydning-stald-tag', alt: 'Stald under nedrivning' },
      { src: 'plads-oversigt', alt: 'Legaards plads ved Vojens' },
      { src: 'plads-knuser-gravemaskine', alt: 'Knusning af beton på pladsen' },
    ],
  },
];

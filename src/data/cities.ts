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
  footer?: boolean; // vises i footeren (de 5 største byer)
  review?: string; // navn på en anmeldelse fra site.ts, der vises på siden
};

export const cities: City[] = [
  {
    slug: 'nedrivning-kolding',
    footer: true,
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
    footer: true,
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
    footer: true,
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
  {
    slug: 'nedrivning-fredericia',
    footer: true,
    name: 'Fredericia',
    kommune: 'Fredericia Kommune',
    title: 'Nedrivning i Fredericia – huse, garager og erhverv',
    description: 'Nedrivning og miljøsanering i Fredericia: huse, tilbygninger, garager og erhverv. Materialer genbruges – også i dit nye hus. Ring til Legaards på 24 78 84 10.',
    nearby: ['Erritsø', 'Taulov', 'Skærbæk', 'Pjedsted', 'Egeskov'],
    intro: 'Skal et ældre hus i Fredericia rives ned for at give plads til noget nyt? Vi miljøsanerer, river ned og sorterer materialerne – og gemmer gerne noget af det gamle hus til det nye.',
    local: 'I Fredericia har vi bl.a. miljøsaneret og nedrevet et hus med tilbygning og garage, som samme familie havde ejet, siden det blev opført i 1921. En del af de gamle mursten blev renset og gemt, så de kan indgå i indervæggene i familiens nye hus. Det er godt for miljøet – og en måde at bevare lidt af historien på.',
    distance: 'Fredericia ligger i kort køreafstand fra vores plads ved Vojens.',
    jobs: [
      'Miljøsanering og nedrivning af hus, tilbygning og garage fra 1921 – med genbrug af murstenene i det nye hus',
      'Hurtig nedbrydning af ældre hus på Luthersvej',
      'Miljøsanering og nedrivning af huse i Fredericia og Christiansfeld',
    ],
    caseSlugs: [],
    review: 'Gerhard Ettrup',
    image: 'nedbrydning-mursten',
    images: [
      { src: 'nedbrydning-hus-tag', alt: 'Ældre murstenshus rives ned' },
      { src: 'nedbrydning-mursten', alt: 'Mursten sorteres efter nedrivning' },
      { src: 'nedbrydning-indvendig', alt: 'Indvendig strip før nedrivning' },
      { src: 'bolig-efter-grund', alt: 'Ryddet grund klar til nyt hus' },
    ],
  },
  {
    slug: 'nedrivning-middelfart',
    name: 'Middelfart',
    kommune: 'Middelfart Kommune',
    title: 'Nedrivning i Middelfart – huse og miljøsanering',
    description: 'Nedrivning og miljøsanering i Middelfart og Strib – for private og for Middelfart Kommune. Huse, bundopbygning og oprydning. Få et uforpligtende tilbud.',
    nearby: ['Strib', 'Nørre Aaby', 'Ejby', 'Gelsted', 'Brenderup'],
    intro: 'Lige på den anden side af Lillebælt river vi huse ned og miljøsanerer i hele Middelfart Kommune – for både private bygherrer og kommunen selv.',
    local: 'For Middelfart Kommune har vi løst en lidt anderledes opgave: miljøsanering og fjernelse af en gammel togvogn på en børnehaves legeplads. I Middelfart har vi miljøsaneret og nedrevet et hus, så der blev plads til et nyt, og i Strib har vi nedrevet og saneret et hus og lavet bundopbygning til materialepladsen til nybyggeriet.',
    distance: 'Middelfart ligger lige over Lillebæltsbroen – kort vej fra Trekantområdet og vores plads ved Vojens.',
    jobs: [
      'Miljøsanering og fjernelse af gammel togvogn i børnehave for Middelfart Kommune',
      'Miljøsanering og nedrivning af hus i Middelfart, så der blev plads til et nyt',
      'Nedrivning og miljøsanering af hus i Strib samt bundopbygning til materialeplads',
    ],
    caseSlugs: [],
    image: 'bolig-foer-hus',
    images: [
      { src: 'bolig-foer-hus', alt: 'Hus før nedrivning' },
      { src: 'nedbrydning-villa-stillads', alt: 'Hus klar til miljøsanering og nedrivning' },
      { src: 'nedbrydning-grund-efter', alt: 'Grund planeres efter nedrivning' },
      { src: 'anlaeg-sandpude', alt: 'Bundopbygning til nybyggeri' },
    ],
  },
  {
    slug: 'nedrivning-vejle',
    footer: true,
    name: 'Vejle',
    kommune: 'Vejle Kommune',
    title: 'Nedrivning i Vejle – huse, husmandssteder og landbrug',
    description: 'Nedrivning og miljøsanering i Vejle og omegn: huse, husmandssteder, lader og stalde – med ny vej og indkørsel bagefter. Ring til Legaards på 24 78 84 10.',
    nearby: ['Børkop', 'Jelling', 'Give', 'Egtved', 'Bredsten'],
    intro: 'Skal et hus eller et ældre husmandssted i Vejle-området rives ned? Vi miljøsanerer, river ned og gør grunden klar – og kan lave ny vej og indkørsel bagefter.',
    local: 'I Vejle har vi miljøsaneret og nedrevet et hus, og ved Vejle har vi nedbrudt og miljøsaneret et ældre husmandssted og efterfølgende anlagt ny vej og indkørsel. Mange ældre landejendomme har både stuehus, lader og stalde med asbesttage – derfor starter vi altid med en screening, så de farlige materialer fjernes forsvarligt først.',
    distance: 'Vi kører fra Vojens til hele Vejle Kommune, og opgaverne planlægges, så maskinerne kun skal flyttes én gang.',
    jobs: [
      'Miljøsanering og nedrivning af hus i Vejle',
      'Nedbrydning og miljøsanering af ældre husmandssted ved Vejle',
      'Ny vej og indkørsel efter nedrivningen',
    ],
    caseSlugs: [],
    image: 'case-landbrug-foer',
    images: [
      { src: 'case-landbrug-foer', alt: 'Nedrivning af ældre landejendom' },
      { src: 'bolig-foer-eternit', alt: 'Hus med eternittag før nedrivning' },
      { src: 'case-landbrug-ryddet', alt: 'Ryddet grund efter nedrivning' },
      { src: 'case-markvej-vej', alt: 'Ny vej anlagt efter nedrivning' },
    ],
  },
];

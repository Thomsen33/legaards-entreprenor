// Lokale landingssider. /entreprenoer-aabenraa/ findes allerede på legaards.dk og bevares.
// Tilføj en by ved at kopiere et objekt. Hold teksterne unikke – ens tekster på tværs af byer skader SEO.

export type City = {
  slug: string;
  name: string;
  title: string;
  description: string;
  nearby: string[];
  intro: string;
  local: string;
  image: string;
};

export const cities: City[] = [
  {
    slug: 'entreprenoer-aabenraa',
    name: 'Aabenraa',
    title: 'Entreprenør Aabenraa – nedbrydning og anlæg',
    description: 'Entreprenør i Aabenraa: nedrivning, asbestsanering, miljøscreening og anlægsarbejde for private og erhverv. Ring til Legaards på 24 78 84 10.',
    nearby: ['Rødekro', 'Padborg', 'Kliplev', 'Løjt Kirkeby'],
    intro: 'Skal du have revet en bygning ned, fjernet asbest eller gravet ud til nyt byggeri i Aabenraa? Legaards løser opgaven fra start til slut – med egne maskiner og en fast kontaktperson.',
    local: 'Vi har vores rødder i Sønderjylland og løser opgaver i hele Aabenraa Kommune. Gennem god dialog finder vi den løsning, der passer til dig – uanset om det er et parcelhus i byen, en erhvervsbygning ved havnen eller en landbrugsejendom i oplandet.',
    image: 'nedbrydning-villa-container',
  },
  {
    slug: 'entreprenoer-haderslev',
    name: 'Haderslev',
    title: 'Entreprenør Haderslev – nedrivning, asbest og anlæg',
    description: 'Lokal entreprenør tæt på Haderslev. Nedrivning, asbestsanering, miljørapport og jordarbejde med maskiner fra 2–30 tons. Få et tilbud.',
    nearby: ['Vojens', 'Gram', 'Christiansfeld', 'Hoptrup'],
    intro: 'Legaards holder til få minutter fra Haderslev. Det betyder kort vej for maskinerne og hurtig opstart, når du har brug for nedrivning, asbestsanering eller anlægsarbejde.',
    local: 'I Haderslev og omegn løser vi alt fra nedrivning af ældre boliger og udhuse til større erhvervs- og landbrugsbygninger. Materialerne sorteres, så mest muligt kan genbruges – og det kan ofte gøre opgaven billigere.',
    image: 'case-landbrug-foer',
  },
  {
    slug: 'entreprenoer-kolding',
    name: 'Kolding',
    title: 'Entreprenør Kolding – nedbrydning og miljøscreening',
    description: 'Entreprenør til Kolding og omegn: nedbrydning, miljøscreening, asbest og byggemodning. Erfarne folk og moderne maskinpark. Ring 24 78 84 10.',
    nearby: ['Vamdrup', 'Lunderskov', 'Christiansfeld', 'Sdr. Stenderup'],
    intro: 'Står du med et byggeprojekt i Kolding, hvor noget først skal væk? Legaards river ned, screener for miljøfarlige stoffer og gør grunden klar til det nye.',
    local: 'Til erhverv i og omkring Kolding tilbyder vi nedrivning af haller, lagre og industribygninger med forudgående miljøscreening og dokumentation, som kan bruges over for kommunen. Private kan få hjælp til alt fra nedrivning af et hus til udgravning og sandpude.',
    image: 'case-industri-oversigt',
  },
  {
    slug: 'entreprenoer-soenderborg',
    name: 'Sønderborg',
    title: 'Entreprenør Sønderborg – nedrivning og asbestsanering',
    description: 'Nedrivning, asbestsanering og anlægsarbejde i Sønderborg og på Als. Legaards håndterer hele forløbet fra screening til genbrug.',
    nearby: ['Nordborg', 'Augustenborg', 'Gråsten', 'Broager'],
    intro: 'Legaards kører opgaver i hele Sønderborg Kommune – også på Als. Vi tager hele forløbet: besigtigelse, miljøscreening, sanering, nedrivning og sortering.',
    local: 'Mange ældre huse og sommerhuse i området er bygget med materialer, der kan indeholde asbest eller PCB. Derfor starter vi altid med en screening, så de miljøfarlige materialer fjernes forsvarligt, før nedrivningen begynder.',
    image: 'asbest-tag-aabnet',
  },
  {
    slug: 'entreprenoer-vojens',
    name: 'Vojens',
    title: 'Entreprenør Vojens – din lokale entreprenør',
    description: 'Legaards er din lokale entreprenør i Vojens og Sommersted: nedrivning, asbest, anlæg og modtagerplads for beton og tegl på Stydingvej 2.',
    nearby: ['Sommersted', 'Jegerup', 'Skrydstrup', 'Hammelev'],
    intro: 'Legaards har base på Stydingvej 2 ved Vojens. Her har vi både maskinpark og modtagerplads, så vi er tæt på, når du har en opgave i lokalområdet.',
    local: 'Fra Vojens løser vi nedrivning, asbestsanering, miljøscreening og anlægsarbejde. På pladsen kan du også aflevere sorteret beton og tegl – eller købe knuste materialer til bundsikring og opfyldning.',
    image: 'plads-oversigt',
  },
];

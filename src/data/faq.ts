// FAQ pr. side. Vises som harmonika + FAQPage-schema til Google.
// TODO (Christian): gennemlæs og godkend – især de lovmæssige svar. Regler kan ændre sig.
// Kilder (sep. 2026): BR18 (nedrivningstilladelse), Miljøstyrelsen (anmeldepligt, selektiv nedrivning), Bolius/Erhvervsstyrelsen (asbest).

export type Faq = { q: string; a: string };

export const faq: Record<string, Faq[]> = {
  nedbrydning: [
    {
      q: 'Skal jeg søge tilladelse til at rive min bygning ned?',
      a: 'Som udgangspunkt ja – nedrivning kræver tilladelse fra kommunen. Mindre sekundære bygninger som garager, carporte, udhuse og drivhuse på højst 50 m² kan som regel rives ned uden tilladelse, men det er kommunen, der afgør det. Husk også at opdatere BBR bagefter. Vi hjælper gerne med at finde ud af, hvad der gælder for din opgave.',
    },
    {
      q: 'Hvad skal anmeldes til kommunen før nedrivningen?',
      a: 'Giver arbejdet 1 ton affald eller mere, skal bygherren anmelde bygge- og anlægsaffaldet til kommunen senest 2 uger før arbejdet går i gang. Anmeldelsen skal indeholde en screening og kortlægning af miljøfarlige stoffer som asbest, PCB, tungmetaller, PAH og klorparaffiner.',
    },
    {
      q: 'Hvad betyder reglerne om selektiv nedrivning over 250 m²?',
      a: 'Siden 1. juli 2025 skal bygninger med et etageareal på 250 m² eller mere nedrives selektivt af en autoriseret nedrivningsvirksomhed, og bygherren skal udpege en miljø- og ressourcekoordinator. Legaards er autoriseret til selektiv nedrivning, så vi kan tage de store opgaver.',
    },
    {
      q: 'Hvad med el, vand, varme og kloak?',
      a: 'Før nedrivningen skal el, vand og eventuel fjernvarme eller gas afbrydes og afmeldes hos forsyningsselskaberne, og kloakken skal proppes af en autoriseret kloakmester. Vi hjælper med at lægge rækkefølgen, så intet forsinker opstarten.',
    },
    {
      q: 'Hvor lang tid tager det at rive et hus ned?',
      a: 'Selve nedrivningen af et almindeligt parcelhus tager typisk få dage. Den samlede tid afhænger af, om der skal saneres for asbest eller andre stoffer først, og af hvor meget der skal sorteres og køres væk. Du får en tidsplan sammen med tilbuddet.',
    },
    {
      q: 'Kan det betale sig at genbruge materialerne?',
      a: 'Ofte ja. Når vi river selektivt ned, kan beton og tegl knuses og genbruges, og stål, træ og andre materialer kan sælges videre. Det giver mindre affald til deponi og kan gøre opgaven billigere for dig.',
    },
  ],
  asbest: [
    {
      q: 'Må jeg selv fjerne asbest?',
      a: 'Som hovedregel nej. Asbestholdige materialer må kun nedrives af autoriserede virksomheder, medmindre det er kortvarigt arbejde af mindre omfang – fx et par enkelte tagplader. Bøderne for at bryde reglerne er høje, og asbeststøv er sundhedsskadeligt. Legaards er autoriseret til asbestarbejde.',
    },
    {
      q: 'Hvordan ved jeg, om der er asbest i mit hus?',
      a: 'Er huset bygget eller renoveret før 1988, kan der være asbest i fx tagplader, facadeplader, fliseklæb, gulvbelægning, rørisolering og ventilationskanaler. Det eneste sikre er en screening med prøver, der analyseres. Rør ikke ved materialet, før du ved, hvad det er.',
    },
    {
      q: 'Kan I fjerne asbest i et badeværelse?',
      a: 'Ja. Vi fjerner asbest både fra tage, tagrum og badeværelser, hvor der ofte sidder asbest i fliseklæb og fuger. Arbejdsområdet afskærmes, og affaldet pakkes og bortskaffes efter reglerne.',
    },
    {
      q: 'Hvad sker der med asbestaffaldet?',
      a: 'Asbestaffald pakkes forsvarligt og køres til godkendt modtageanlæg. Du får dokumentation for, at det er bortskaffet korrekt – den kan du bruge over for kommunen og ved et senere salg af ejendommen.',
    },
    {
      q: 'Jeg er tømrer – kan I tage asbestdelen på min opgave?',
      a: 'Ja, det gør vi ofte. Vi saner tag eller badeværelse, så du kan gå i gang med dit arbejde. Læs mere på vores side for håndværkere og entreprenører.',
    },
  ],
  miljoerapport: [
    {
      q: 'Hvornår skal der laves en miljøkortlægning?',
      a: 'Før nedrivning og renovering skal bygherren screene bygningen for miljøfarlige stoffer, når arbejdet giver 1 ton affald eller mere. Viser screeningen, at der kan være problemstoffer, skal der laves en kortlægning med prøver og analyser.',
    },
    {
      q: 'Hvem har ansvaret for screeningen?',
      a: 'Det er bygherrens ansvar, at bygningen bliver screenet og kortlagt, og at resultatet sendes med anmeldelsen til kommunen. Vi hjælper med at få det gjort rigtigt, så opgaven kan godkendes og affaldet håndteres korrekt.',
    },
    {
      q: 'Hvilke stoffer screenes der for?',
      a: 'Typisk asbest, PCB, bly og andre tungmetaller, PAH (tjærestoffer) og klorparaffiner. Ved behov laves der også klorid- og sulfatanalyser af beton og murværk.',
    },
    {
      q: 'Hvor lang tid før skal rapporten være klar?',
      a: 'Anmeldelsen til kommunen skal sendes senest 2 uger før arbejdet går i gang, og den skal indeholde screeningen og kortlægningen. Kontakt os i god tid, så tidsplanen holder.',
    },
  ],
  anlaeg: [
    {
      q: 'Hvad er en sandpude?',
      a: 'En sandpude er et lag komprimeret sand, der lægges under et nyt fundament eller gulv, så underlaget er stabilt og kan bære byggeriet. Vi graver ud, udlægger og komprimerer sandet, så støberen kan gå i gang.',
    },
    {
      q: 'Kan I også køre jorden væk?',
      a: 'Ja. Vi står for jordtransport og sørger for, at jorden bortskaffes miljøkorrekt til godkendt modtager.',
    },
    {
      q: 'Kan I lave vej og P-plads med genbrugsmaterialer?',
      a: 'Ja. Knust beton og asfalt fra vores egen plads kan bruges som bundsikring og bærelag. Det er et billigere og grønnere alternativ til nye råstoffer.',
    },
    {
      q: 'Hvor store maskiner har I?',
      a: 'Vi har gravemaskiner fra 2 til 30 tons – fra de små, der kommer ind i en baghave, til de store, der flytter meget jord hurtigt.',
    },
  ],
  modtagerplads: [
    {
      q: 'Koster det noget at aflevere beton?',
      a: 'Ren beton – også med armering – modtages gratis. Ring for pris på tegl og asfalt.',
    },
    {
      q: 'Kan jeg bare komme forbi?',
      a: 'Nej – ring altid først. Pladsen har åbent mandag til fredag efter telefonisk aftale, så vi er klar til at tage imod dig.',
    },
    {
      q: 'Hvorfor tager I ikke imod gulvklinker og vægfliser?',
      a: 'Gamle gulvklinker og vægfliser kan have et forhøjet indhold af bly. Derfor kan de ikke knuses og genbruges sammen med ren beton og tegl.',
    },
    {
      q: 'Hvordan skal materialerne være sorteret?',
      a: 'Materialerne skal være fri for plast, træ, PVC og isolering, og de må ikke være forurenede. Beton med mere end 1 cm flamingo eller isolering modtages ikke.',
    },
  ],
  koebMaterialer: [
    {
      q: 'Hvad bruges knust beton til?',
      a: 'Knust beton bruges typisk som bundsikring, bærelag og opfyldning – fx under indkørsler, P-pladser, veje og terrasser.',
    },
    {
      q: 'Hvilke fraktioner har I?',
      a: 'Vi har typisk knust beton og knust asfalt i 0–40 mm og 0–80 mm. Ring og hør, hvad vi har på lager lige nu.',
    },
    {
      q: 'Kan I levere?',
      a: 'Ja, vi kan levere i hele Syddanmark – eller du kan hente materialerne på pladsen på Stydingvej 2 ved Vojens efter aftale.',
    },
    {
      q: 'Er genbrugte materialer lige så gode som nye?',
      a: 'Til bundsikring og opfyldning er knust beton et godt og meget brugt alternativ til nye råstoffer. Det er billigere, og det skåner miljøet.',
    },
  ],
};

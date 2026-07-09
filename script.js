// ===============================
// 🔗 ID
// ===============================
const params = new URLSearchParams(window.location.search);
const deviceId = params.get("id") || "lyckokaka01";

const isLugnsten = deviceId.startsWith("lugnsten");
const isHjarta = deviceId.startsWith("hjarta");
const isSmahander = deviceId.startsWith("smahander");
const isMamma = deviceId.startsWith("mamma");
const isLanda = deviceId.startsWith("landa");

// ===============================
// 🥠 LYCKOKAKA
// ===============================
const wisdomQuotes = [
    "Varje liten handling formar framtiden.",
    "Små steg kan leda långt.",
    "Du behöver inte förstå allt idag.",
    "Små glädjeämnen räknas också.",
    "Framtiden är inte färdigskriven.",
    "Du är redan på väg.",
    "Det är okej att inte veta än.",
    "Allt börjar med något litet.",
    "Du behöver inte se hela vägen för att ta nästa steg.",
    "Ljuset kommer tillbaka, även efter långa vintrar.",
    "Det du gör nu spelar roll, även om det känns litet.",
    "Du behöver inte förstå allt för att fortsätta framåt.",
    "Det du gör idag formar något längre fram, även om du inte ser det än.",
    "Små förändringar är fortfarande förändringar.",
    "Du är redan mitt i något som håller på att bli.",
    "Det är okej att inte ha en plan som känns perfekt.",
    "Du behöver inte känna dig redo för att vara på väg.",
    "Det som känns litet nu kan växa sig stort senare.",
    "Du får ändra riktning om du behöver.",
    "Du behöver inte hinna ikapp något.",
    "Det finns inget rätt tempo du måste följa.",
    "Du kan börja där du är, inte där du tycker att du borde vara.",
    "Allt behöver inte vara klart för att vara på riktigt.",
    "Du får ta en sak i taget utan att det är för lite.",
    "Det är okej att inte se hela bilden än.",
    "Du behöver inte ha kontroll för att det ska gå bra.",
    "Det du fortsätter med räknas, även när det känns stilla.",
    "Du är inte sen, du är i rörelse.",
    "Det finns mer tid än känslan av brådska säger.",
    "Du får låta saker utvecklas långsamt.",
    "Du behöver inte pressa fram tydlighet.",
    "Det du lär dig nu syns kanske först senare.",
    "Du får vara i processen utan att skynda igenom den.",
    "Du behöver inte veta vart allt leder.",
    "Det är okej att vara mitt i något ofärdigt.",
    "Du gör mer än du tror, även när det inte känns så.",
    "Du behöver inte bevisa framsteg varje dag.",
    "Små steg är fortfarande steg framåt.",
    "Du får låta livet vara lite oklart ibland.",
    "Du behöver inte hinna ikapp någon annan version av dig själv.",
    "Det är okej att saker tar den tid de tar.",
    "Du behöver inte känna dig säker för att ta nästa steg.",
    "Det som växer syns inte alltid direkt.",
    "Ibland är riktningen viktigare än farten.",
    "Du får ändra dig utan att ha gjort fel.",
    "Det är okej att inte veta ännu.",
    "Det finns plats för både tålamod och framsteg.",
    "Det lilla du gör idag räknas också.",
    "Du behöver inte skynda för att komma fram.",
    "Allt utvecklas inte i samma takt.",
    "Det är inte för sent att börja där du är.",
    "Du får vara nybörjare så länge du behöver.",
    "Det som känns stilla kan ändå vara rörelse.",
    "Du behöver inte välja hela vägen idag.",
    "Vissa svar kommer först när man fortsätter.",
    "Du får låta saker mogna i sin egen takt.",
    "Det är okej att inte känna sig färdig.",
    "Du behöver inte bära morgondagen idag.",
    "Det finns fler möjligheter än du ser just nu.",
    "Små justeringar kan förändra mycket över tid.",
    "Du får fortsätta även utan tydliga bevis.",
    "Det är okej att växa långsamt.",
    "Du behöver inte veta hur allt ska gå.",
    "Det finns inget krav på perfekta beslut.",
    "Du får följa det som känns sant för dig.",
    "Det är inte fel att ta omvägar ibland.",
    "Det som känns svårt nu behöver inte kännas så för alltid.",
    "Du behöver inte jämföra din väg med någon annans.",
    "Vissa saker blir tydligare med tiden.",
    "Du får vila utan att tappa riktningen.",
    "Det finns värde även i de små framstegen.",
    "Du behöver inte förstå allt för att lära dig något.",
    "Det är okej att låta framtiden vara lite öppen.",
    "Du får ta plats även när du fortfarande lär dig.",
    "Det som är viktigt får ibland ta tid.",
    "Du behöver inte vara längst fram för att vara på väg.",
    "Det är okej att låta saker bli till steg för steg.",
    "Du får lita på att allt inte måste avgöras idag.",
    "Det som väntar på dig behöver inte jagas.",
    "Du behöver inte känna dig färdig för att fortsätta.",
    "Det finns styrka i att fortsätta lugnt.",
    "Du får vara stolt över sådant som ingen annan ser.",
    "Det är okej att låta vissa frågor vara obesvarade ett tag.",
    "Du behöver inte pressa fram nästa kapitel.",
    "Det som känns osäkert idag kan kännas självklart senare.",
    "Du får ge saker en chans att utvecklas.",
    "Det är okej att bygga något långsamt.",
    "Du behöver inte ha bråttom mot framtiden.",
    "Det finns mer än ett sätt att komma fram.",
    "Du får fortsätta i ditt eget tempo.",
    "Det är okej att låta vägen visa sig efter hand."
];

// ===============================
// ❤️ HJÄRTA
// ===============================
const heartQuotes = [
    "Du behöver inte förtjäna ditt värde.",
    "Du är mer än det du presterar.",
    "Ditt värde förändras inte av en dålig dag.",
    "Du får vara mänsklig.",
    "Du får ta plats.",
    "Du är inte summan av dina misstag.",
    "Du är värd samma omtanke som du ger andra.",
    "Det räcker att vara du.",
    "Du behöver inte vara perfekt för att vara värdefull.",
    "Det är okej att vara snäll mot dig själv.",
    "Du får vara här även när du inte känner dig helt okej.",
    "Du behöver inte bära allt på en gång.",
    "Du är fortfarande värdefull även när du tvivlar.",
    "Du får ta det i din egen takt.",
    "Du behöver inte ha alla svar just nu.",
    "Det är okej att vila i det som är svårt.",
    "Du är inte ensam i det du känner.",
    "Du behöver inte göra dig mindre för att passa in.",
    "Du är värd omtanke även när du har en tung dag.",
    "Du får börja om så många gånger du behöver.",
    "Du behöver inte vara stark hela tiden.",
    "Det du känner just nu kommer inte vara för alltid.",
    "Du är mer än det du går igenom.",
    "Du får finnas utan att prestera.",
    "Du behöver inte förklara allt du känner.",
    "Du är okej även när du inte känner dig okej.",
    "Du får ta emot stöd, inte bara ge det.",
    "Du behöver inte fixa dig själv just nu.",
    "Det är okej att inte ha kontroll.",
    "Du är inte dina tankar om dig själv.",
    "Du får vila i att det räcker att du är här.",
    "Du behöver inte vara redo för att fortsätta ändå.",
    "Du är inte för sen, du är inte efter.",
    "Du får låta saker få ta tid.",
    "Du behöver inte pressa dig själv igenom allt.",
    "Du är fortfarande du, även i det som skaver.",
    "Du får vara snäll mot dig själv idag också.",
    "Det är okej att bara ta nästa lilla steg.",
    "Du behöver inte känna dig trygg hela tiden för att vara trygg nog.",
    "Du är värd mjukhet, även från dig själv.",
    "Du behöver inte vara allt för alla.",
    "Det är okej att välja dig själv ibland.",
    "Du får ta upp plats i ditt eget liv.",
    "Du behöver inte bevisa att du är värdefull.",
    "Du får vara stolt över dig själv även för små saker.",
    "Det är okej att inte orka hela vägen idag.",
    "Du behöver inte göra mer för att vara tillräcklig.",
    "Du får lita på att du räcker som du är.",
    "Det är okej att inte vara perfekt på att vara människa.",
    "Du behöver inte bära andras förväntningar.",
    "Du får säga nej utan att känna skuld.",
    "Det är okej att sätta gränser.",
    "Du behöver inte förklara alla dina val.",
    "Du får vara mjuk utan att vara svag.",
    "Det är okej att behöva återhämtning.",
    "Du behöver inte jämföra din resa med någon annans.",
    "Du får vara viktig i ditt eget liv.",
    "Det är okej att inte alltid vara produktiv.",
    "Du behöver inte göra dig förtjänt av vila.",
    "Du får ta hand om dig själv först ibland.",
    "Det är okej att inte vara den som löser allt.",
    "Du behöver inte ha svar på allt.",
    "Du får känna det du känner utan att döma dig själv.",
    "Det är okej att vara känslig.",
    "Du behöver inte vara starkare än situationen kräver.",
    "Du får göra misstag utan att förlora ditt värde.",
    "Det är okej att vara under utveckling.",
    "Du behöver inte vara färdig för att vara värdefull.",
    "Du får låta dig själv växa långsamt.",
    "Det är okej att ta omvägar.",
    "Du behöver inte vara bättre än någon annan.",
    "Du får vara precis där du är just nu.",
    "Det är okej att ha dagar som känns tyngre.",
    "Du behöver inte bära allt själv.",
    "Du får ta emot omtanke utan att förtjäna den först.",
    "Det är okej att vara snäll mot dig själv även när det går dåligt.",
    "Du behöver inte vara den bästa versionen av dig själv varje dag.",
    "Du får vara mänsklig utan ursäkt.",
    "Det är okej att välja lugn framför prestation.",
    "Du behöver inte förminska dig själv för att andra ska få plats.",
    "Du får tro gott om dig själv.",
    "Det är okej att känna stolthet över vem du är.",
    "Du behöver inte vara mer än du redan är just nu.",
    "Du får låta dina behov räknas också.",
    "Det är okej att inte alltid vara tillgänglig.",
    "Du behöver inte ha en perfekt dag för att vara okej.",
    "Du får vara vänlig mot dig själv även när du tvivlar.",
    "Det är okej att börja om.",
    "Du behöver inte göra allt rätt för att vara värd kärlek.",
    "Du får vara dig själv även när det känns ovant.",
];

// ===============================
// 🪨 LUGNSTEN
// ===============================
const calmMorningQuotes = [
    "Du får börja mjukt idag.",
    "Det räcker att ta första steget.",
    "Du behöver inte ha bråttom.",
    "En ny dag behöver inte börja perfekt.",
    "Du får ta dagen som den kommer.",
    "Du behöver inte starta dagen snabbt för att den ska bli bra.",
    "Det räcker att du har börjat, inte hur du började.",
    "Du får vakna i din egen takt idag.",
    "Det är okej att fortfarande vara lite trött.",
    "Du behöver inte vara redo för att börja ändå.",
    "Ingen brådska behövs här.",
    "Du får ta första steget utan att veta resten.",
    "Dagen behöver inte vara perfekt för att vara okej.",
    "Du behöver inte fylla den här dagen direkt.",
    "Det är okej att låta morgonen vara mjuk.",
    "Du får komma ikapp dig själv i lugn takt.",
    "Du behöver inte göra allt som väntar idag.",
    "Det räcker att du är på väg in i dagen.",
    "Du får börja långsamt och ändå vara framåt.",
    "Du behöver inte prestera bara för att dagen har börjat.",
    "Du får landa innan du gör något alls.",
    "Det är okej att inte känna sig helt igång än.",
    "Du behöver inte ha energi för att få börja.",
    "Du får ta dagen steg för steg från början.",
    "Du är inte sen in i din egen dag.",
    "Det finns inget rätt sätt att starta på.",
    "Du får mjukstarta utan att det betyder något negativt.",
    "Du behöver inte hinna ikapp något på morgonen.",
    "Det räcker att du öppnar dagen, inte att du löser den.",
    "Du får låta morgonen vara stilla en stund till.",
    "Du behöver inte veta hur hela dagen ska bli.",
    "Du får börja utan att känna dig klar.",
    "Det är okej att vara långsam in i allt som väntar.",
    "Du behöver inte vara “igång” för att vara okej.",
    "Du får låta dagen komma till dig."
];

const calmDayQuotes = [
    "Du behöver inte prestera här.",
    "Det är okej att vara lite obekväm.",
    "Du får bara vara.",
    "Du behöver inte säga rätt saker.",
    "Det räcker att du är här.",
    "Du får ta det i din egen takt.",
    "Du behöver inte prestera för att få finnas här.",
    "Det är okej att inte vara på topp.",
    "Du får ta det i din egen takt, även mitt på dagen.",
    "Du behöver inte säga rätt saker hela tiden.",
    "Du får vara lite obekväm och ändå vara okej.",
    "Du behöver inte ha koll på allt som händer.",
    "Det räcker att du gör så gott du kan just nu.",
    "Du behöver inte anpassa dig mer än du orkar.",
    "Du får pausa även när dagen pågår.",
    "Det är okej att inte vara social hela tiden.",
    "Du behöver inte fylla alla tystnader.",
    "Du får vara här utan att prestera något alls.",
    "Du behöver inte känna dig stabil för att fortsätta.",
    "Det är okej att inte veta exakt vad du ska göra.",
    "Du får ta en sak i taget, även när allt rör sig.",
    "Du behöver inte vara “på” hela tiden.",
    "Det är okej att dra sig tillbaka lite i tanken.",
    "Du behöver inte leverera något för att vara värdefull.",
    "Du får ta en paus utan att förklara den.",
    "Det är okej att känna sig lite överväldigad.",
    "Du behöver inte orka med allt som händer runt dig.",
    "Du får göra saker enklare för dig själv.",
    "Du behöver inte vara tillgänglig hela tiden.",
    "Det räcker att du tar dig igenom stunden.",
    "Du får vara lite långsam även mitt i dagen.",
    "Du behöver inte jämföra dig med andra.",
    "Det är okej att bara observera utan att delta.",
    "Du får vara tyst om du behöver det.",
    "Du behöver inte fixa något just nu.",
    "Du är fortfarande okej även om dagen känns rörig."
];

const calmEveningQuotes = [
    "Dagen är redan tillräcklig.",
    "Du kan släppa taget om resten.",
    "Du är klar för idag.",
    "Det som inte blev gjort får vänta.",
    "Du behöver inte bära med dig allt vidare.",
    "Låt dagen få vila nu.",
    "Du behöver inte lösa något mer idag.",
    "Det som blev gjort är tillräckligt för idag.",
    "Du får släppa taget om resten nu.",
    "Dagen behöver inte fortsätta i dina tankar.",
    "Du behöver inte bära med dig allt vidare in i kvällen.",
    "Det är okej att låta dagen vara ofärdig.",
    "Du får vila i att du har gjort vad du kunnat.",
    "Du behöver inte tänka igenom dagen en gång till.",
    "Det som inte hanns med kan vänta.",
    "Du får låta kvällen vara mjuk och stilla.",
    "Du behöver inte rätta till något i efterhand.",
    "Det är okej att inte utvärdera dig själv idag.",
    "Du får stänga ner dagen utan att gå igenom den igen.",
    "Du behöver inte hitta svar på allt ikväll.",
    "Du får låta tankarna sakta ner.",
    "Det är okej att inte känna sig helt klar.",
    "Du behöver inte förbättra dagen i efterhand.",
    "Du får vara färdig för idag, precis som det blev.",
    "Det räcker att dagen har passerat.",
    "Du behöver inte ta med dig känslan vidare.",
    "Du får låta kvällen vara en paus från tankarna.",
    "Det är okej att släppa det som skaver.",
    "Du behöver inte analysera det som varit.",
    "Du får vila från dig själv en stund.",
    "Det är okej att bara låta kvällen vara tyst.",
    "Du behöver inte fixa något innan du somnar.",
    "Du får vara klar utan att känna dig klar.",
    "Det räcker att du är här i slutet av dagen.",
    "Du behöver inte förbereda morgondagen nu.",
    "Du får avsluta dagen utan eftertanke."
];

// ===============================
// FRÅN SMÅ HÄNDER
// ===============================
const smahanderQuotes = [
"Barn minns kanske inte varje ord. Men de minns hur det kändes att vara med dig.",
"Någon kommer att minnas hur det kändes att vara med dig.",
"Ett barn glömmer ofta vad ni gjorde. Men känslan av att vara trygg kan stanna kvar länge.",
"Att bli sedd är något många bär med sig långt efter att dagen är slut.",
"Ibland räcker en lugn vuxen för att ett barn ska våga lite mer.",
"Du kanske inte märker vilka avtryck du lämnar. Den som fick dem gör det.",
"Det du gör idag kommer någon att bära med sig längre än du vet.",
"Alla fina avtryck märks inte direkt.",
"Omtanke syns inte alltid. Men den känns.",
"Någon kommer en dag minnas en vuxen som trodde på dem. Kanske var det du.",
"Ibland förändrar ett lugnt bemötande en hel dag.",
"Trygghet börjar ofta i något väldigt litet.",
"Ett vänligt bemötande kan leva kvar längre än man tror.",
"Det finns barn som känner sig modigare för att du finns.",
"Den som blir lyssnad på lär sig att den är värd att lyssna på.",
"Ibland är det viktigaste som händer under en dag att någon känner sig sedd.",
"Det är svårt att mäta betydelsen av en lugn stund. Men den finns där.",
"Du planterar sådant som kanske blommar långt senare.",
"Barn växer bättre där de känner sig trygga.",
"Det är inte alltid de stora ögonblicken som stannar kvar.",
"En lugn röst kan bli ett tryggt minne.",
"Den som blir bemött med respekt lär sig att ge respekt vidare.",
"Ibland är det finaste du kan ge någon att få känna sig viktig.",
"Det finns barn som kommer minnas hur lugnt det kändes när du var där.",
"Trygghet är något man känner, inte något man förklarar.",
"Att bli trodd på kan förändra hur man ser på sig själv.",
"Du behöver inte märka skillnaden för att den ska finnas.",
"En liten stund av omtanke kan följa någon länge.",
"Det finns avtryck som inte syns, men som ändå formar ett liv.",
"Det är ofta de små handlingarna som bygger förtroende.",
"En människa som känner sig trygg vågar mer.",
"Det finns barn som bär med sig din vänlighet utan att du vet om det.",
"Att någon tar sig tid kan betyda mer än många ord.",
"Det är inte alltid det du säger som stannar kvar. Ofta är det känslan du lämnar efter dig.",
"Någon kommer en dag minnas hur du fick dem att känna sig.",
"Ibland är det enda som behövs att någon stannar upp en liten stund.",
"Trygga vuxna skapar trygga minnen.",
"Det finns omtanke som aldrig får ett tack, men som ändå betyder allt.",
"Vissa avtryck märks först långt senare.",
"Det du gör varje dag betyder mer än du själv kan se.",
"Barn behöver inte perfekta vuxna. De behöver vuxna som finns kvar.",
"Ibland är det lugnet någon minns allra längst.",
"Den som känner sig trygg vågar oftare visa vem den är.",
"Att bli mött med tålamod kan förändra mer än man tror.",
"Det är lätt att underskatta värdet av en vanlig dag som känns trygg.",
"Det finns barn som vågar lite mer eftersom någon trodde på dem.",
"Den som känner sig välkommen hittar lättare sin plats.",
"Trygghet byggs ofta i de små ögonblicken.",
"Ett barn behöver inte att du har alla svar. Bara att du finns där.",
"Att bli bemött med värme kan följa någon länge.",
"Det är ofta de lugna stunderna som blir de viktiga.",
"Den som får känna sig viktig börjar ofta tro att den är det.",
"Ibland räcker ett 'jag ser dig'.",
"Det är svårt att mäta betydelsen av att alltid bli mött med vänlighet.",
"Barn växer i sin egen takt. Trygghet hjälper dem på vägen.",
"Det finns dagar då det viktigaste du gjorde var något du själv inte tänkte på.",
"Den som blir lyssnad på lär sig att den är värd att lyssna på.",
"Vissa människor blir trygga platser. Kanske är du en av dem.",
"Den finaste omtanken är ofta den som känns självklar.",
"Att få vara precis som man är kan vara en av de största gåvorna.",
"Ibland börjar mod med att någon tror att man klarar det.",
"Nyfikenhet får ofta växa där det känns tryggt.",
"Det finns frågor som är viktigare än svar.",
"Att få försöka igen är också en gåva.",
"En vanlig dag kan bli ett viktigt minne.",
"Ibland är det skrattet man tar med sig hem.",
"Att känna sig välkommen är en fin början på vilken dag som helst.",
"Det finns barn som vågar lite mer för att någon väntade in dem.",
"Att få ta tid på sig kan vara precis det som behövs.",
"Alla framsteg syns inte. Men de händer ändå.",
"Det är okej att växa i sin egen takt.",
"Den som får vara nyfiken lär sig att världen är värd att utforska.",
"Det finns dagar då det viktigaste är att någon känner sig trygg nog att skratta.",
"En stund av lek kan betyda mer än man tror.",
"Att få känna 'jag kan' börjar ofta med någon som säger 'försök'.",
"Den som blir uppmuntrad vågar oftare försöka igen.",
"Det är ofta i de små stunderna som självkänsla växer.",
"Barn behöver inte stressas för att utvecklas.",
"Det finns människor som får andra att känna att de hör hemma.",
"Att bli mött med lugn gör världen lite enklare att förstå.",
"Alla behöver någon som tror lite extra på dem ibland.",
"Det är svårt att veta vilka stunder som blir minnen. Därför är de små stunderna också viktiga.",
"Den som känner sig trygg får lättare mod att prova något nytt.",
"Vänlighet märks inte alltid direkt. Men den stannar ofta kvar.",
"Ibland är det viktigaste som händer att någon känner: 'Här får jag vara jag.'",
"Det finns människor som blir ett lugn för andra utan att själva tänka på det.",
"Att bli bemött med tålamod kan förändra hur man ser på sig själv.",
"En trygg hand behöver inte hålla hårt. Den behöver bara finnas där.",
"Det finns vuxna man glömmer. Och så finns det de man bär med sig.",
"Man minns inte alltid vad som hände. Men man minns ofta hur det kändes.",
"Vissa människor blir en trygg del av barndomen utan att själva veta om det.",
"En dag kommer någon kanske tänka tillbaka på dig och le.",
"Det finns minnen som inte handlar om vad man gjorde, utan om vem man fick vara."
];

// ===============================
// TILL MAMMA
// ===============================
const mammaQuotes = [
    "Du gör tillräckligt.",
    "Du räcker redan.",
    "Du gör redan mer än du tror.",
    "Du gör mer rätt än du själv ser.",
    "Du gör ett viktigare jobb än du själv kan se.",

    "Ditt barn behöver inte en perfekt mamma.",
    "Ditt barn behöver inte en perfekt mamma. Bara dig.",
    "Ditt barn behöver inte perfektion. Det behöver dig.",
    "Ditt barn behöver inte att du är perfekt. Det behöver att du finns.",
    "Ditt barn behöver din närhet mer än din perfektion.",
    "Du är precis den mamma ditt barn behöver.",

    "Du får vila när du kan.",
    "Vila när du kan. Resten kan vänta.",
    "Vila är också omsorg.",
    "Vila är också en del av att ta hand om sitt barn.",
    "Små stunder av vila räknas också.",
    "Ett lugnt andetag räcker långt ibland.",

    "Du får vara trött.",
    "Du får längta efter en paus.",
    "En paus förändrar inte hur mycket du älskar ditt barn.",
    "Det är okej om det känns överväldigande ibland.",
    "Det är okej om vissa dagar bara handlar om att ta sig igenom dem.",
    "Det finns dagar som bara behöver få vara.",
    "Det finns dagar då kärlek ser ut som att bara ta sig igenom dagen.",

    "Du behöver inte njuta av varje minut för att vara en fantastisk mamma.",
    "Det är okej att inte älska varje minut.",
    "Det är okej att känna många saker samtidigt.",
    "Du får känna många känslor samtidigt.",
    "Det är okej att tvivla ibland.",
    "Du är inte ensam om att känna dig osäker ibland.",

    "Du behöver inte bära allt ensam.",
    "Det är inte meningen att du ska bära allt själv.",
    "Det är okej att be om hjälp.",
    "Att be om hjälp är också omsorg.",
    "Du får be om hjälp innan du är helt slut.",

    "Du är fortfarande du, även om allt har förändrats.",
    "Du får sakna den du var och samtidigt älska den du håller på att bli.",
    "Du behöver inte hinna tillbaka till den du var.",
    "Du får vara snäll mot dig själv också.",
    "Du räcker längre än dina tvivel säger.",
    "När du tror att du inte räcker till är det ofta bara tröttheten som pratar.",

    "Ni lär känna varandra lite mer varje dag.",
    "Ni lär er tillsammans, dag för dag.",
    "Det räcker att ni hittar er egen rytm.",
    "Du lär känna ditt barn, och ditt barn lär känna dig.",
    "Ni behöver inte ha alla svar idag.",
    "Du får följa din egen magkänsla.",
    "Ingen känner ditt barn som du gör.",
    "Du behöver inte jämföra er resa med någon annans.",

    "Små stunder av närhet betyder mer än du tror.",
    "En stund tillsammans är aldrig bortkastad.",
    "En kram räcker längre än många ord.",
    "Kärlek syns ofta i det allra vanligaste.",
    "Kärlek finns ofta i de små vardagliga stunderna.",
    "Det viktigaste du ger går inte att mäta.",
    "Ditt barn känner sig älskat oftare än du tror.",
    "Ditt barn minns känslan av att vara älskat.",
    "Du ser kanske allt du inte hann idag. Ditt barn såg att du var där.",
    "Ditt barn behöver inte minnas en perfekt dag. Det kommer minnas hur det kändes att vara hos dig.",

    "Du behöver inte hinna allt idag.",
    "Det är okej att låta disken vänta.",
    "Du behöver inte vara allt på en gång.",
    "Du behöver inte göra mer för att vara en bra mamma.",
    "Du är viktigare än den perfekta rutinen.",
    "Det är okej att sänka kraven ibland.",

    "Det finns inget perfekt sätt att vara mamma.",
    "Kärlek följer inget facit.",
    "Det finns styrka i att vara mjuk.",
    "För någon är du hemma.",
    "Du är den trygga plats någon alltid kommer att söka sig till.",
    "Din kropp har gjort något stort.",
    "Den här tiden är stor, även när dagarna känns små.",
    "En tung dag säger ingenting om vilken mamma du är.",
    "Du får känna stolthet över det lilla.",
    "Det är okej att börja om efter en tuff dag.",
    "Du behöver inte bära morgondagen idag.",
    "Det är okej att också ta hand om mamman.",
    "Ibland är det viktigaste att ni får vara nära varandra."
];
// ===============================
// LANDA
// ===============================
    const landaGroundingQuotes = [
    "Du är här.",
    "Den här stunden är ny.",
    "Lägg märke till golvet under dina fötter.",
    "Du behöver inte vara någon annanstans just nu.",
    "Ta in rummet omkring dig.",
    "Den här stunden behöver inte lösas.",
    "Du får bara vara här en liten stund.",
    "Det räcker att du är här just nu.",
    "Låt blicken vila på något stilla.",
    "Du behöver inte tänka färdigt alla tankar."
];
const landaKindnessQuotes = [
    "Du behöver inte kämpa mot dig själv.",
    "Du får vara trött.",
    "Du behöver inte prestera just nu.",
    "Din kropp försöker hjälpa dig.",
    "Det är okej att vila.",
    "Du får vara människa.",
    "Du behöver inte skynda dig igenom det här.",
    "Du behöver inte ha kontroll över allt.",
    "Det räcker att du fortsätter andas.",
    "Du får möta dig själv med lite mer vänlighet."
];
const landaHopeQuotes = [
    "Den här känslan kommer inte alltid vara så stark.",
    "Du har tagit dig hit.",
    "Det finns inget krav på att må bra direkt.",
    "Små steg räknas.",
    "Du behöver inte se hela vägen.",
    "Du får börja om hur många gånger du behöver.",
    "Det finns fortfarande lugna stunder kvar.",
    "Du behöver inte lösa allt idag.",
    "Det är okej att ta en minut i taget.",
    "Det finns mer än den här stunden."
];
const landaSafetyQuotes = [
    "Du får sänka axlarna lite.",
    "Det är okej att andas ut.",
    "Du behöver inte vara på din vakt hela tiden.",
    "Det finns inget du måste bevisa just nu.",
    "Du får vila en stund.",
    "Du behöver inte bära allt ensam.",
    "Lugn får ta plats här.",
    "Du behöver inte göra något just nu.",
    "Det finns inget krav på att vara stark.",
    "Den här stunden får vara stilla."
];
// ===============================
// ⏰ DYGN
// ===============================
function getTimeOfDay() {
    const hour = new Date().getHours();
    if (hour < 6) return "evening";
    if (hour < 10) return "morning";
    if (hour < 18) return "day";
    return "evening";
}

// ===============================
// 🔧 HELPERS
// ===============================
function random(list) {
    return list[Math.floor(Math.random() * list.length)];
}

// ===============================
// 🪨 LUGNSTEN
// ===============================
function getLullQuote() {
    const time = getTimeOfDay();

    if (time === "morning") {
        return random(calmMorningQuotes);
    }

    if (time === "evening") {
        return random(calmEveningQuotes);
    }

    return random(calmDayQuotes);
}
// ===============================
//  LANDA
// ===============================
function getLandaQuote() {

    const groups = [
        landaGroundingQuotes,
        landaKindnessQuotes,
        landaHopeQuotes,
        landaSafetyQuotes
    ];

    return random(random(groups));
}
// ===============================
// 📅 DAGLIGT SYSTEM
// ===============================
function getDate() {
    return new Date().toISOString().split("T")[0];
}

function dailyKey() {
    return `${deviceId}-${getDate()}`;
}

function getDailyQuote() {
    const saved = localStorage.getItem(dailyKey());
    if (saved) return saved;

    let quote;
    if (isHjarta) {
    quote = random(heartQuotes);

} else if (isSmahander) {
    quote = random(smahanderQuotes);

} else if (isLanda) {
    quote = getLandaQuote();

} else if (isMamma) {
    quote = random(mammaQuotes);

} else {
    quote = random(wisdomQuotes);
}

    localStorage.setItem(dailyKey(), quote);
    return quote;
}

// ===============================
// ✨ UI
// ===============================
function updateQuote(text) {
    const quote = document.getElementById("quote");
    quote.classList.remove("show");

    setTimeout(() => {
        quote.textContent = text;
        quote.classList.add("show");
    }, 200);
}

// ===============================
// 🔁 KNAPP
// ===============================
function newQuote() {
    if (isLugnsten) {
        updateQuote(getLullQuote());

    } else if (isHjarta) {
        updateQuote(random(heartQuotes));

    } else if (isSmahander) {
        updateQuote(random(smahanderQuotes));

 } else if (isLanda) {
    updateQuote(getLandaQuote());
        
} else if (isMamma) {
    updateQuote(random(mammaQuotes));
        
    } else {
        updateQuote(random(wisdomQuotes));
    }
}

// ===============================
// 🚀 START
// ===============================
window.addEventListener("DOMContentLoaded", () => {
    const title = document.querySelector("h1");
    const subtitle = document.getElementById("subtitle");
    const luckBtn = document.getElementById("luckButton");
    const lullBtn = document.getElementById("lullButton");

    if (isLugnsten) {
        document.body.classList.add("lugnsten");
        subtitle.textContent = "En liten trygghet i fickan";

        luckBtn.style.display = "none";
        lullBtn.style.display = "flex";

        updateQuote(getLullQuote());
    }

    else if (isHjarta) {
        document.body.classList.add("hjarta");
        subtitle.textContent = "Till dig själv";

        luckBtn.textContent = "En vänlig tanke till";
        lullBtn.style.display = "none";

        updateQuote(getDailyQuote());
    }
        else if (isSmahander) {

    document.body.classList.add("smahander");
    
    title.textContent = "FRÅN SMÅ HÄNDER";
            
    subtitle.textContent = "En liten hälsning";

    luckBtn.textContent = "♡";

    lullBtn.style.display = "none";

    updateQuote(getDailyQuote());
}

            else if (isMamma) {

    document.body.classList.add("mamma");

    document.querySelector("h1").textContent = "MAMMAHJÄRTAT";

    subtitle.textContent = "Till dig, mamma";

    luckBtn.textContent = "♡";

    lullBtn.style.display = "none";

    updateQuote(getDailyQuote());
}

                else if (isLanda) {

    document.body.classList.add("landa");

    title.textContent = "LANDA";

    subtitle.textContent = "Här och nu";

    luckBtn.textContent = "♡";

    lullBtn.style.display = "none";

    updateQuote(random(landaQuotes));
}

    else {
        subtitle.textContent = "En vänlig påminnelse";

        luckBtn.textContent = "Ett annat perspektiv";
        lullBtn.style.display = "none";

        updateQuote(getDailyQuote());
    }
});

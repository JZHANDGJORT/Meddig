const quotes = [
    "Varje liten handling formar framtiden.",
    "Tålamod öppnar fler dörrar än stress.",
    "Små steg kan leda långt.",
    "Den som vågar fråga lär sig snabbare.",
    "Det du söker söker också dig.",
    "Ett leende kan förändra en dag.",
    "Lyckan hittar ofta den som inte jagar den.",

    "Det som tar tid blir ofta bättre.",
    "Du behöver inte förstå allt idag.",
    "Det finns styrka i att vänta.",
    "Det enkla är ofta det svåra.",
    "Det som växer långsamt får djupa rötter.",
    "Du behöver inte vinna varje strid.",
    "En kopp te kan vara nog.",
    "Små glädjeämnen räknas också.",
    "Det finns något fint i den här dagen.",
    "Vardagen är större än den verkar.",
    "Ibland räcker det att solen tittar fram.",
    "Du får vila innan du är färdig.",
    "Trötthet är inte ett misslyckande.",
    "Allt behöver inte ske idag.",
    "Vila är också en handling.",
    "Du får ta det lugnt utan att förtjäna det först.",
    "Ett vänligt ord stannar längre än man tror.",
    "Mjukhet är inte svaghet.",
    "Alla bär på något du inte ser.",
    "Var lika vänlig mot dig själv som mot andra.",
    "Omtanke lämnar spår.",
    "Någonstans finns något att vara tacksam för idag.",
    "Tacksamhet gör inte problemen mindre, men livet större.",
    "Det finns mer att uppskatta än att räkna.",
    "Lägg märke till det som redan finns.",
    "Det vanliga är ofta det värdefulla.",
    "Nya kapitel börjar ofta tyst.",
    "Det finns mer framför dig än bakom dig.",
    "Allt behöver inte blomma samtidigt.",
    "Något gott kan fortfarande hända idag.",
    "Det är inte för sent.",
    "Små förändringar kan bli stora med tiden.",
    "Du behöver inte se hela vägen för att ta nästa steg.",
    "Något nytt håller redan på att ta form.",
    "Ljuset kommer tillbaka, även efter långa vintrar.",
    "Du har klarat svåra dagar förut.",
    "Framtiden är inte färdigskriven.",
    "Det finns fler möjligheter än du ser just nu.",
    "Allt börjar med något litet.",
    "Ibland räcker det att fortsätta."
];

let lastQuote = localStorage.getItem("lastQuote");

function newQuote() {
    const quoteEl = document.getElementById("quote");

    // välj nytt citat (undvik direkt repetition)
    let quote;

    do {
        quote = quotes[Math.floor(Math.random() * quotes.length)];
    } while (quote === lastQuote && quotes.length > 1);

    lastQuote = quote;
    localStorage.setItem("lastQuote", quote);

    // 🌬️ mjuk fade-out (andas ut)
    quoteEl.classList.remove("show");

    // 🌿 paus = reflektion
    setTimeout(() => {
        quoteEl.textContent = quote;

        // liten extra “stilla sekund”
        requestAnimationFrame(() => {
            setTimeout(() => {
                quoteEl.classList.add("show");
            }, 120);
        });

    }, 650);
}

// 🌿 starta sidan med första citatet
newQuote();

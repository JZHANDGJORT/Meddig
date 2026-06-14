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
    "En kopp te kan vara nog.",
    "Små glädjeämnen räknas också.",
    "Vardagen är större än den verkar.",
    "Du får vila innan du är färdig.",
    "Allt behöver inte ske idag.",
    "Vila är också en handling.",
    "Du får ta det lugnt utan att förtjäna det först.",
    "Mjukhet är inte svaghet.",
    "Var lika vänlig mot dig själv som mot andra.",
    "Tacksamhet gör livet större.",
    "Lägg märke till det som redan finns.",
    "Det finns mer framför dig än bakom dig.",
    "Små förändringar kan bli stora med tiden.",
    "Du behöver inte se hela vägen för att ta nästa steg.",
    "Ljuset kommer tillbaka, även efter långa vintrar.",
    "Du har klarat svåra dagar förut.",
    "Framtiden är inte färdigskriven.",
    "Det finns fler möjligheter än du ser just nu.",
    "Allt börjar med något litet.",
    "Ibland räcker det att fortsätta."
];

// 🥠 Läs kak-ID från URL
const params = new URLSearchParams(window.location.search);
const deviceId = params.get("id") || "default";

// 📅 dagens datum
function getDate() {
    return new Date().toISOString().split("T")[0];
}

// 🔑 unik nyckel per kaka + dag
function getKey() {
    return `${deviceId}-${getDate()}`;
}

// 🧠 hämta stabilt citat för dagen
function getDailyQuote() {
    const key = getKey();
    const saved = localStorage.getItem(key);

    if (saved) return saved;

    const quote = quotes[Math.floor(Math.random() * quotes.length)];
    localStorage.setItem(key, quote);
    return quote;
}

// 🔁 byt citat manuellt (ignorerar dagens sparade)
function newQuote() {
    const quoteEl = document.getElementById("quote");

    const quote = quotes[Math.floor(Math.random() * quotes.length)];

    // skriv över dagens citat för just denna kaka
    localStorage.setItem(getKey(), quote);

    updateQuote(quote);
}

// 🌿 visuell uppdatering (med din fade)
function updateQuote(quote) {
    const quoteEl = document.getElementById("quote");

    quoteEl.classList.remove("show");

    setTimeout(() => {
        quoteEl.textContent = quote;

        requestAnimationFrame(() => {
            setTimeout(() => {
                quoteEl.classList.add("show");
            }, 120);
        });
    }, 650);
}

// 🌿 start
updateQuote(getDailyQuote());

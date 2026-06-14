// 🥠 Lyckokaka
const wisdomQuotes = [
    "Varje liten handling formar framtiden.",
    "Tålamod öppnar fler dörrar än stress.",
    "Små steg kan leda långt.",
    "Det som växer långsamt får djupa rötter.",
    "Du behöver inte förstå allt idag.",
    "Det finns styrka i att vänta.",
    "Vardagen är större än den verkar.",
    "Små glädjeämnen räknas också.",
    "Något gott kan fortfarande hända idag.",
    "Framtiden är inte färdigskriven.",
    "Det finns fler möjligheter än du ser just nu.",
    "Du behöver inte se hela vägen för att ta nästa steg.",
    "Ljuset kommer tillbaka, även efter långa vintrar.",
    "Allt börjar med något litet."
];

// 🌿 Lugnsten
const calmQuotes = [
    "Du behöver inte lösa allt just nu.",
    "Låt axlarna sjunka en aning.",
    "Ta ett långsamt andetag.",
    "Du är trygg här och nu.",
    "Allt behöver inte bli klart idag.",
    "Du får vila en stund.",
    "Du bär inte allt ensam.",
    "Det är okej att ta det lugnt.",
    "Var mjuk mot dig själv idag.",
    "Du får finnas precis som du är.",
    "Du behöver inte skynda.",
    "En sak i taget räcker.",
    "Lugn är också framsteg.",
    "Det är inte bråttom."
];

// 🔗 Läs ID från URL
const params = new URLSearchParams(window.location.search);
const deviceId = params.get("id") || "lyckokaka01";

// 🎯 Bestäm typ
let activeQuotes;
let subtitleText;

if (deviceId.startsWith("lugnsten")) {
    activeQuotes = calmQuotes;
    subtitleText = "🌿 Lugnsten · Några lugna ord att vila i";
} else {
    activeQuotes = wisdomQuotes;
    subtitleText = "Lyckokaka · En tanke att bära med sig";
}

// 📅 Dagens datum
function getDate() {
    return new Date().toISOString().split("T")[0];
}

// 🔑 Nyckel per objekt + dag
function dailyKey() {
    return `${deviceId}-daily-${getDate()}`;
}

// 🎲 Slumpa citat
function randomQuote() {
    return activeQuotes[
        Math.floor(Math.random() * activeQuotes.length)
    ];
}

// 📖 Hämta dagens citat
function getDailyQuote() {
    const key = dailyKey();

    const saved = localStorage.getItem(key);

    if (saved) {
        return saved;
    }

    const quote = randomQuote();

    localStorage.setItem(key, quote);

    return quote;
}

// ✨ Visa citat med animation
function updateQuote(quote) {
    const quoteEl = document.getElementById("quote");

    quoteEl.classList.remove("show");

    setTimeout(() => {
        quoteEl.textContent = quote;
        quoteEl.classList.add("show");
    }, 300);
}

// 🔁 Byt citat manuellt
function newQuote() {
    const quote = randomQuote();

    localStorage.setItem(
        dailyKey(),
        quote
    );

    updateQuote(quote);
}

// 🚀 Start
window.addEventListener("DOMContentLoaded", () => {

    const subtitle = document.getElementById("subtitle");
    subtitle.textContent = subtitleText;

    updateQuote(
        getDailyQuote()
    );

});

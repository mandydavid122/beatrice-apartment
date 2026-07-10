// GDPR cookie consent — self-contained, no dependency on app.js.
// GA4 loads ONLY after explicit accept. Choice persisted in localStorage.
(function () {
  // Mandy: replace with the real GA4 id (format G-XXXXXXXXXX) to enable analytics.
  var GA4_MEASUREMENT_ID = "[GA4_MEASUREMENT_ID: TBD — Mandy to supply]";
  var STORE_KEY = "cookieConsent"; // "accepted" | "declined"

  var STRINGS = {
    text: {
      hu: "Sütiket használunk névtelen látogatottsági statisztikához. Csak az elfogadás után töltjük be a mérőkódot.",
      ua: "Ми використовуємо файли cookie для анонімної статистики відвідувань. Код аналітики завантажується лише після згоди."
    },
    accept: { hu: "Elfogadom", ua: "Прийняти" },
    decline: { hu: "Elutasítom", ua: "Відхилити" }
  };

  function lang() {
    try { if (localStorage.getItem("lang") === "ua") return "ua"; } catch (e) {}
    return document.documentElement.lang === "uk" ? "ua" : "hu";
  }

  function loadGA4() {
    if (!/^G-[A-Z0-9]+$/.test(GA4_MEASUREMENT_ID)) return; // placeholder id => never load
    var s = document.createElement("script");
    s.async = true;
    s.src = "https://www.googletagmanager.com/gtag/js?id=" + GA4_MEASUREMENT_ID;
    document.head.appendChild(s);
    window.dataLayer = window.dataLayer || [];
    function gtag() { window.dataLayer.push(arguments); }
    window.gtag = gtag;
    gtag("js", new Date());
    gtag("config", GA4_MEASUREMENT_ID, { anonymize_ip: true });
  }

  var banner = document.querySelector(".consent");
  if (!banner) return;
  var textEl = banner.querySelector(".consent__text");
  var acceptBtn = banner.querySelector(".consent__accept");
  var declineBtn = banner.querySelector(".consent__decline");

  function paint() {
    var l = lang();
    textEl.textContent = STRINGS.text[l];
    acceptBtn.textContent = STRINGS.accept[l];
    declineBtn.textContent = STRINGS.decline[l];
  }

  function decide(choice) {
    try { localStorage.setItem(STORE_KEY, choice); } catch (e) {}
    banner.hidden = true;
    if (choice === "accepted") loadGA4();
  }

  var prior = null;
  try { prior = localStorage.getItem(STORE_KEY); } catch (e) {}

  if (prior === "accepted") {
    loadGA4();
  } else if (prior !== "declined") {
    paint();
    banner.hidden = false;
    // keep banner language in sync if the user toggles HU/UA while it's open
    document.querySelectorAll(".lang__btn").forEach(function (b) {
      b.addEventListener("click", function () { if (!banner.hidden) setTimeout(paint, 0); });
    });
  }

  acceptBtn.addEventListener("click", function () { decide("accepted"); });
  declineBtn.addEventListener("click", function () { decide("declined"); });
})();

// Apartment Beatrice — bilingual copy + conversion links. Static, no framework.
// HU is authored. Every `ua:` value below is machine-translated, human review pending
// -- machine-translated, human review pending (native-speaker pass required before launch).

var COPY = {
  heroEyebrow:   { hu: "Kárpátalja · Kis Bégány", ua: "Закарпаття · Мала Бийгань" },
  heroTagline:   { hu: "Otthon, amit a családunk épített — most a tiétek is.",
                   ua: "Дім, який збудувала наша родина — тепер і ваш." },
  heroSubcopy:   { hu: "Apartman szállás Kis Bégányban, a Kaszonyi termálfürdők közelében. Nyugodt, családias, valódi — nem egy lista a sok közül.",
                   ua: "Апартаменти в Малій Бийгані, поруч із косоньськими термальними водами. Спокійно, по-сімейному, по-справжньому — а не рядок у каталозі." },
  ctaBookRoom:   { hu: "Foglalj szobát", ua: "Забронювати кімнату" },
  ctaCall:       { hu: "Hívás", ua: "Подзвонити" },
  ctaMaps:       { hu: "Útvonal", ua: "Маршрут" },
  priceLine:     { hu: "1200–1500 UAH / éjszaka / szoba",
                   ua: "1200–1500 грн / ніч / кімната" },
  hostWelcome:   { hu: "Nem egy szállodalánc vagyunk — egy családi panzió, ahol minden szobát mi magunk tartunk rendben, és személyesen fogadunk mindenkit, aki megérkezik.",
                   ua: "Ми не готельна мережа — родинний пансіонат, де кожну кімнату доглядаємо самі, і особисто зустрічаємо кожного гостя." },
  hostSignoff:   { hu: "— az Apartment Beatrice házigazdái", ua: "— господарі Apartment Beatrice" },
  roomsTitle:    { hu: "Terek", ua: "Простори" },
  room1Title:    { hu: "Nappali és háló", ua: "Вітальня та спальня" },
  room1Copy:     { hu: "Egybenyitott, világos tér pihenésre és étkezésre — annyi hellyel, hogy ne kelljen egymás lábán állni, de elég összezártan ahhoz, hogy otthonos maradjon.",
                   ua: "Світлий об’єднаний простір для відпочинку та трапези — достатньо місця, щоб не заважати одне одному, і достатньо компактно, щоб залишалось затишно." },
  room2Title:    { hu: "Kis konyha", ua: "Кухня" },
  room2Copy:     { hu: "Felszerelt kis konyha a mindennapi főzéshez — reggeli kávé, egyszerű vacsora, semmi felesleges.",
                   ua: "Обладнана невелика кухня для щоденного приготування їжі — ранкова кава, проста вечеря, нічого зайвого." },
  galleryTitle:  { hu: "Galéria", ua: "Галерея" },

  locationTitle: { hu: "Elhelyezkedés", ua: "Розташування" },
  locationCopy:  { hu: "Kis Bégányban vagyunk, sétatávolságra a kosonyi termálfürdőktől, kényelmes autóútra a magyar határtól.",
                   ua: "Ми в Малій Бийгані, у пішій відстані від косоньських термальних вод, зручно доїхати від угорського кордону." },
  napName:       { hu: "Apartment Beatrice", ua: "Apartment Beatrice" },
  napAddress:    { hu: "Béke utca, Kis Bégány, Kárpátalja, Ukrajna",
                   ua: "вул. Миру, Мала Бийгань, Закарпатська обл., Україна" },
  napPhone:      { hu: "+380 95 210 7069", ua: "+380 95 210 7069" },
  mapLabel:      { hu: "[TÉRKÉP: Google Maps beágyazás hamarosan]", ua: "[КАРТА: вбудована Google-карта скоро]" },
  bookingTitle:  { hu: "Foglaljatok egy sort — mi válaszolunk.", ua: "Напишіть кілька слів — ми відповімо." },
  photoLabelInterior: { hu: "[FOTÓ: nappali, helyettesítő]", ua: "[ФОТО: вітальня, плейсхолдер]" },
  photoLabelKitchen:  { hu: "[FOTÓ: konyha, helyettesítő]", ua: "[ФОТО: кухня, плейсхолдер]" },
  photoLabelExterior: { hu: "[FOTÓ: épület kívülről, helyettesítő]", ua: "[ФОТО: будівля зовні, плейсхолдер]" },
  photoLabelBedroom:  { hu: "[FOTÓ: hálószoba, helyettesítő]", ua: "[ФОТО: спальня, плейсхолдер]" },
  photoLabelBathroom: { hu: "[FOTÓ: fürdőszoba, helyettesítő]", ua: "[ФОТО: ванна кімната, плейсхолдер]" },
  photoLabelDetail:   { hu: "[FOTÓ: enteriőr részlet, helyettesítő]", ua: "[ФОТО: деталь інтер’єру, плейсхолдер]" },
  photoLabelSprings:  { hu: "[FOTÓ: kosonyi termálfürdő, helyettesítő]", ua: "[ФОТО: косоньські термальні води, плейсхолдер]" },

  // Photo captions (= <img alt> + gallery figcaption). UA values machine-translated
  // -- machine-translated, human review pending.
  cap1:  { hu: "Kert és bejárat", ua: "Сад і вхід" },
  cap2:  { hu: "Hangulatos hálószoba", ua: "Затишна спальня" },
  cap3:  { hu: "A vendégház és a bejárat", ua: "Будинок і вхід" },
  cap4:  { hu: "Fedett terasz", ua: "Крита тераса" },
  cap5:  { hu: "Közös helyiség", ua: "Спільна кімната" },
  cap6:  { hu: "Konyha", ua: "Кухня" },
  cap7:  { hu: "Gondozott kert", ua: "Доглянутий сад" },
  cap8:  { hu: "Szoba saját fürdővel", ua: "Кімната з власною ванною" },
  cap9:  { hu: "Családi szoba", ua: "Сімейна кімната" },
  caph1: { hu: "Hálószoba", ua: "Спальня" },
  caph2: { hu: "Fürdőszoba zuhanyzóval", ua: "Ванна кімната з душем" },
  caph3: { hu: "Kerti tó", ua: "Садовий ставок" },
  caph4: { hu: "Hálószoba", ua: "Спальня" }
};

var PHONE = "380952107069";
var mapsLink = "https://www.google.com/maps/search/?api=1&query=" +
  encodeURIComponent("Apartment Beatrice, Béke utca, Kis Bégány, Zakarpattia Oblast, Ukraine");

function apply(lang) {
  document.documentElement.lang = (lang === "ua") ? "uk" : "hu";

  document.querySelectorAll("[data-i18n]").forEach(function (el) {
    var entry = COPY[el.getAttribute("data-i18n")];
    if (entry) el.textContent = entry[lang];
  });

  document.querySelectorAll("[data-alt]").forEach(function (el) {
    var entry = COPY[el.getAttribute("data-alt")];
    if (entry) el.alt = entry[lang];
  });

  document.querySelectorAll('[data-link="tel"]').forEach(function (a) { a.href = "tel:+" + PHONE; });
  document.querySelectorAll('[data-link="maps"]').forEach(function (a) { a.href = mapsLink; });

  document.querySelectorAll(".lang__btn").forEach(function (b) {
    b.setAttribute("aria-pressed", String(b.getAttribute("data-lang") === lang));
  });

  try { localStorage.setItem("lang", lang); } catch (e) {}
}

// HU default on load; only switch if the user previously chose UA (no auto-detect).
var saved = "hu";
try { if (localStorage.getItem("lang") === "ua") saved = "ua"; } catch (e) {}
apply(saved);

document.querySelectorAll(".lang__btn").forEach(function (b) {
  b.addEventListener("click", function () { apply(b.getAttribute("data-lang")); });
});

// Scroll-to-top button: appears once the user scrolls past the hero.
(function () {
  var btn = document.querySelector(".totop");
  var hero = document.querySelector(".hero");
  if (!btn || !hero) return;
  btn.hidden = false;

  var io = new IntersectionObserver(function (entries) {
    entries.forEach(function (en) { btn.classList.toggle("is-visible", !en.isIntersecting); });
  }, { threshold: 0 });
  io.observe(hero);

  btn.addEventListener("click", function () {
    var reduced = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    window.scrollTo({ top: 0, behavior: reduced ? "auto" : "smooth" });
  });
})();

// Motion: reveal section heads only, on scroll-in. Never a blanket per-element reveal.
if (!window.matchMedia || !window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
  var io = new IntersectionObserver(function (entries) {
    entries.forEach(function (en) {
      if (en.isIntersecting) { en.target.classList.add("is-in"); io.unobserve(en.target); }
    });
  }, { threshold: 0.2 });
  document.querySelectorAll(".reveal").forEach(function (el) { io.observe(el); });
} else {
  document.querySelectorAll(".reveal").forEach(function (el) { el.classList.add("is-in"); });
}

// Hero entrance is pure CSS (auto-plays on load, gated by reduced-motion) — no JS, so it
// can never strand the hero text invisible if rAF is starved or JS is late.

// Header: 1px border-bottom fades in past ~40px scroll.
(function () {
  var h = document.querySelector(".header");
  if (!h) return;
  var on = false;
  function upd() {
    var s = window.scrollY > 40;
    if (s !== on) { on = s; h.classList.toggle("is-scrolled", s); }
  }
  upd();
  window.addEventListener("scroll", upd, { passive: true });
})();

// Lightbox: native <dialog>, browse all 13 gallery images. showModal() gives focus-trap + Escape.
(function () {
  var dialog = document.querySelector(".lightbox");
  if (!dialog || typeof dialog.showModal !== "function") return;
  var imgEl = dialog.querySelector(".lightbox__img");
  var capEl = dialog.querySelector(".lightbox__cap");
  var btns = [].slice.call(document.querySelectorAll(".gallery__btn"));
  var items = btns.map(function (b) {
    var im = b.querySelector("img");
    return { src: im.getAttribute("src"), key: im.getAttribute("data-alt") };
  });
  var idx = 0, trigger = null;

  function lang() { return document.documentElement.lang === "uk" ? "ua" : "hu"; }
  function render() {
    var it = items[idx];
    imgEl.setAttribute("src", it.src);
    var cap = COPY[it.key] ? COPY[it.key][lang()] : "";
    imgEl.alt = cap;
    capEl.textContent = cap;
  }
  function open(i, trg) {
    idx = i; trigger = trg; render();
    document.documentElement.classList.add("lb-open");
    document.body.classList.add("lb-open");
    dialog.showModal();
  }
  // Every close path routes through here — the native 'close' event is unreliable, so do
  // scroll-lock cleanup explicitly. Native <dialog> already returns focus to the trigger.
  function closeLightbox() {
    document.documentElement.classList.remove("lb-open");
    document.body.classList.remove("lb-open");
    if (dialog.open) dialog.close();
    trigger = null;
  }
  function step(d) { idx = (idx + d + items.length) % items.length; render(); }

  btns.forEach(function (b, i) { b.addEventListener("click", function () { open(i, b); }); });

  dialog.addEventListener("click", function (e) {
    var t = e.target.closest("[data-lb]");
    if (t) {
      var a = t.getAttribute("data-lb");
      if (a === "close") closeLightbox();
      else if (a === "prev") step(-1);
      else if (a === "next") step(1);
      return;
    }
    if (e.target === dialog) closeLightbox(); // backdrop click
  });
  dialog.addEventListener("keydown", function (e) {
    if (e.key === "Escape") { e.preventDefault(); closeLightbox(); } // own it, don't depend on native cancel
    else if (e.key === "ArrowLeft") { e.preventDefault(); step(-1); }
    else if (e.key === "ArrowRight") { e.preventDefault(); step(1); }
  });
  // Backstop for any native close (e.g. form-method dialog): keep scroll-lock in sync.
  dialog.addEventListener("close", function () {
    document.documentElement.classList.remove("lb-open");
    document.body.classList.remove("lb-open");
    trigger = null;
  });
})();

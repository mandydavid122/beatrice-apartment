// Apartment Beatrice — bilingual copy + conversion links. Static, no framework.
// HU is authored. Every `ua:` value below is machine-translated, human review pending
// -- machine-translated, human review pending (native-speaker pass required before launch).

var COPY = {
  heroEyebrow:   { hu: "Kárpátalja · Mala Bijhány", ua: "Закарпаття · Мала Бийгань" },
  heroTagline:   { hu: "Otthon, amit a családunk épített — most a tiétek is.",
                   ua: "Дім, який збудувала наша родина — тепер і ваш." },
  heroSubcopy:   { hu: "Apartman szállás Mala Bijhányban, a kosonyi termálfürdők közelében. Nyugodt, családias, valódi — nem egy lista a sok közül.",
                   ua: "Апартаменти в Малій Бийгані, поруч із косоньськими термальними водами. Спокійно, по-сімейному, по-справжньому — а не рядок у каталозі." },
  ctaWhatsapp:   { hu: "Írj WhatsAppon", ua: "Написати у WhatsApp" },
  ctaCall:       { hu: "Hívás", ua: "Подзвонити" },
  ctaMaps:       { hu: "Útvonal", ua: "Маршрут" },
  priceLine:     { hu: "1200–1500 UAH / éjszaka / apartman (kb. 11 000–14 000 HUF)",
                   ua: "1200–1500 грн / ніч / апартаменти (прибл. 11 000–14 000 HUF)" },
  waMessage:     { hu: "Szia! Érdeklődnék az Apartment Beatrice szabad időpontjairól.",
                   ua: "Вітаю! Цікавлюсь наявністю вільних дат в Apartment Beatrice." },
  hostWelcome:   { hu: "„Ez nem szálloda — ez a mi házunk egyik lakása. Amikor megérkeztek, a saját bejáraton léptek be, és onnantól annyi csendet és figyelmet kaptok, amennyire szükségetek van.”",
                   ua: "«Це не готель — це квартира в нашому будинку. Коли приїдете, зайдете через окремий вхід, і далі — стільки тиші й уваги, скільки вам треба.»" },
  hostSignoff:   { hu: "— az Apartment Beatrice házigazdái", ua: "— господарі Apartment Beatrice" },
  roomsTitle:    { hu: "Terek", ua: "Простори" },
  room1Title:    { hu: "Nappali és háló", ua: "Вітальня та спальня" },
  room1Copy:     { hu: "Egybenyitott, világos tér pihenésre és étkezésre — annyi hellyel, hogy ne kelljen egymás lábán állni, de elég összezártan ahhoz, hogy otthonos maradjon.",
                   ua: "Світлий об’єднаний простір для відпочинку та трапези — достатньо місця, щоб не заважати одне одному, і достатньо компактно, щоб залишалось затишно." },
  room2Title:    { hu: "Kis konyha", ua: "Кухня" },
  room2Copy:     { hu: "Felszerelt kis konyha a mindennapi főzéshez — reggeli kávé, egyszerű vacsora, semmi felesleges.",
                   ua: "Обладнана невелика кухня для щоденного приготування їжі — ранкова кава, проста вечеря, нічого зайвого." },
  galleryTitle:  { hu: "Galéria", ua: "Галерея" },
  galleryNote:   { hu: "[MEGJEGYZÉS: jelenlegi képek helyettesítő blokkok — valódi felvételek hamarosan]",
                   ua: "[ПРИМІТКА: наразі плейсхолдери — реальні фотографії скоро]" },
  locationTitle: { hu: "Elhelyezkedés", ua: "Розташування" },
  locationCopy:  { hu: "Mala Bijhányban vagyunk, sétatávolságra a kosonyi termálfürdőktől, kényelmes autóútra a magyar határtól.",
                   ua: "Ми в Малій Бийгані, у пішій відстані від косоньських термальних вод, зручно доїхати від угорського кордону." },
  napName:       { hu: "Apartment Beatrice", ua: "Apartment Beatrice" },
  napAddress:    { hu: "vul. Miru, Mala Bijhány, Kárpátalja, Ukrajna",
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
  encodeURIComponent("Apartment Beatrice, vul. Miru, Mala Byihan, Zakarpattia Oblast, Ukraine");

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

  var waHref = "https://wa.me/" + PHONE + "?text=" + encodeURIComponent(COPY.waMessage[lang]);
  document.querySelectorAll('[data-link="wa"]').forEach(function (a) { a.href = waHref; });
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

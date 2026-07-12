// Apartment Beatrice — booking flow. Vanilla, no framework.
// 3 steps: dates -> room (only those free for the dates) -> contact -> submit.
(function () {
  // caption key (photo_ref) -> asset base name in /assets
  var PHOTO = { cap2: "n2", cap8: "n8", cap9: "n9", caph1: "h1", caph4: "h4" };

  // Static room content — mirrors schema.sql seed. Hardcoded (not /api/rooms) so the
  // showcase renders even when D1 is unbound; names/descriptions/photo_ref are fixed
  // seed data, not live availability. Descriptions are the literal S7 placeholders.
  var ROOMS = [
    { name_hu: "Szoba saját fürdővel", name_ua: "Кімната з власною ванною", photo_ref: "cap8" },
    { name_hu: "Családi szoba",        name_ua: "Сімейна кімната",          photo_ref: "cap9" },
    { name_hu: "Hálószoba",            name_ua: "Спальня",                  photo_ref: "caph1" },
    { name_hu: "Hálószoba",            name_ua: "Спальня",                  photo_ref: "caph4" },
    { name_hu: "Hangulatos hálószoba", name_ua: "Затишна спальня",          photo_ref: "cap2" },
    { name_hu: "Szoba 6",              name_ua: "Кімната 6",                photo_ref: null },
    { name_hu: "Szoba 7",              name_ua: "Кімната 7",                photo_ref: null }
  ].map(function (r) {
    r.description_hu = "[LEÍRÁS: rövid szoba-jellemzés hamarosan]";
    r.description_ua = "[ОПИС: короткий опис кімнати скоро]";
    return r;
  });

  var STR = {
    backHome:   { hu: "← Vissza", ua: "← Назад" },
    pageTitle:  { hu: "Foglalj szobát", ua: "Забронювати кімнату" },
    navRooms:   { hu: "Szobák", ua: "Кімнати" },
    navBook:    { hu: "Foglalás", ua: "Бронювання" },
    navContact: { hu: "Kapcsolat", ua: "Контакти" },
    introHost:  { hu: "Nem egy szállodalánc vagyunk — egy családi panzió, ahol minden szobát mi magunk tartunk rendben, és személyesen fogadunk mindenkit, aki megérkezik.",
                  ua: "Ми не готельна мережа — родинний пансіонат, де кожну кімнату доглядаємо самі, і особисто зустрічаємо кожного гостя." },
    introSprings: { hu: "Kis Bégányban vagyunk, sétatávolságra a kosonyi termálfürdőktől, kényelmes autóútra a magyar határtól.",
                    ua: "Ми в Малій Бийгані, у пішій відстані від косоньських термальних вод, зручно доїхати від угорського кордону." },
    showcaseTitle: { hu: "Szobáink", ua: "Наші кімнати" },
    showcaseNote:  { hu: "Hét szoba közül választhatsz. A leírások hamarosan bővülnek.", ua: "Можна обрати з семи кімнат. Описи скоро доповнимо." },
    flowTitle:  { hu: "Foglalás három lépésben", ua: "Бронювання у три кроки" },
    mapTitle:   { hu: "Hol vagyunk", ua: "Де ми" },
    napAddress: { hu: "Béke utca, Kis Bégány, Kárpátalja, Ukrajna", ua: "вул. Миру, Мала Бийгань, Закарпатська обл., Україна" },
    step1Label: { hu: "Dátum", ua: "Дати" },
    step2Label: { hu: "Szoba", ua: "Кімната" },
    step3Label: { hu: "Adatok", ua: "Дані" },
    s1Title:    { hu: "Mikor jönnél?", ua: "Коли плануєте приїзд?" },
    labelCheckIn:  { hu: "Érkezés", ua: "Заїзд" },
    labelCheckOut: { hu: "Távozás", ua: "Виїзд" },
    next:       { hu: "Tovább", ua: "Далі" },
    back:       { hu: "Vissza", ua: "Назад" },
    s2Title:    { hu: "Válassz szobát", ua: "Оберіть кімнату" },
    s3Title:    { hu: "Add meg az elérhetőséged", ua: "Залиште контакти" },
    labelName:  { hu: "Név", ua: "Ім'я" },
    labelContact: { hu: "Telefon vagy e-mail", ua: "Телефон або e-mail" },
    labelNote:  { hu: "Megjegyzés (nem kötelező)", ua: "Примітка (необов'язково)" },
    submit:     { hu: "Foglalás elküldése", ua: "Надіслати запит" },
    doneTitle:  { hu: "Köszönjük!", ua: "Дякуємо!" },
    doneText:   {
      hu: "Köszönjük! A kérésed megérkezett, hamarosan (jellemzően pár órán belül) visszaigazoljuk telefonon vagy e-mailen.",
      ua: "Дякуємо! Ваш запит отримано, ми зв'яжемось з вами найближчим часом телефоном або електронною поштою."
    },
    // errors
    errDatesRequired: { hu: "Add meg mindkét dátumot.", ua: "Вкажіть обидві дати." },
    errCheckoutOrder: { hu: "A távozás legyen később, mint az érkezés.", ua: "Дата виїзду має бути пізніше заїзду." },
    errPastDate:      { hu: "Az érkezés nem lehet a múltban.", ua: "Дата заїзду не може бути в минулому." },
    errNoRooms:       { hu: "Ezekre a napokra sajnos nincs szabad szoba. Próbálj másik időpontot.", ua: "На ці дати вільних кімнат немає. Спробуйте інші дати." },
    errLoadRooms:     { hu: "Nem sikerült betölteni a szobákat. Frissítsd az oldalt.", ua: "Не вдалося завантажити кімнати. Оновіть сторінку." },
    errPickRoom:      { hu: "Válassz egy szobát.", ua: "Оберіть кімнату." },
    errNameContact:   { hu: "Add meg a neved és egy elérhetőséget.", ua: "Вкажіть ім'я та контакт." },
    errUnavailable:   { hu: "Ezek a napok időközben foglaltak lettek. Válassz másik időpontot.", ua: "Ці дати вже зайняті. Оберіть інші." },
    errGeneric:       { hu: "Valami hiba történt. Próbáld újra, vagy hívj minket telefonon.", ua: "Сталася помилка. Спробуйте ще раз або зателефонуйте нам." },
    placeholderRoom:  { hu: "[FOTÓ: szoba, hamarosan]", ua: "[ФОТО: кімната, скоро]" },
    nights:           { hu: "éj", ua: "ніч" }
  };

  var state = { rooms: [], checkIn: "", checkOut: "", roomId: null };

  function lang() {
    try { if (localStorage.getItem("lang") === "ua") return "ua"; } catch (e) {}
    return "hu";
  }
  function t(key) { var e = STR[key]; return e ? e[lang()] : ""; }

  function applyLang() {
    var l = lang();
    document.documentElement.lang = l === "ua" ? "uk" : "hu";
    document.querySelectorAll("[data-i18n]").forEach(function (el) {
      var e = STR[el.getAttribute("data-i18n")];
      if (e) el.textContent = e[l];
    });
    document.querySelectorAll(".lang__btn").forEach(function (b) {
      b.setAttribute("aria-pressed", String(b.getAttribute("data-lang") === l));
    });
    // re-render dynamic bits in the new language
    renderShowcase();
    updateSummaries();
    if (document.querySelector('.bk-panel[data-step="2"]').classList.contains("is-active")) renderRooms();
    var done = document.querySelector('[data-role="doneText"]');
    if (done) done.textContent = t("doneText");
  }

  function setLang(l) {
    try { localStorage.setItem("lang", l); } catch (e) {}
    applyLang();
  }

  // half-open overlap
  function overlaps(aIn, aOut, bIn, bOut) { return aIn < bOut && bIn < aOut; }
  function isFree(room) {
    return (room.unavailable || []).every(function (r) {
      return !overlaps(state.checkIn, state.checkOut, r.check_in, r.check_out);
    });
  }

  function todayISO() { return new Date().toISOString().slice(0, 10); }

  // ---- step navigation ----
  var panels = {};
  document.querySelectorAll(".bk-panel").forEach(function (p) { panels[p.getAttribute("data-step")] = p; });
  var stepInds = document.querySelectorAll(".bk-step");

  function show(step) {
    Object.keys(panels).forEach(function (k) { panels[k].classList.toggle("is-active", k === step); });
    var n = parseInt(step, 10);
    stepInds.forEach(function (li) {
      var s = parseInt(li.getAttribute("data-step-ind"), 10);
      li.classList.toggle("is-active", s === n);
      li.classList.toggle("is-done", !isNaN(n) && s < n);
    });
    window.scrollTo({ top: 0, behavior: "auto" });
  }

  function err(role, msg) {
    var el = document.querySelector('[data-role="' + role + '"]');
    if (!msg) { el.hidden = true; el.textContent = ""; return; }
    el.textContent = msg; el.hidden = false;
  }

  function fmtRange() {
    if (!state.checkIn || !state.checkOut) return "";
    var d1 = new Date(state.checkIn), d2 = new Date(state.checkOut);
    var nights = Math.round((d2 - d1) / 86400000);
    return state.checkIn + " → " + state.checkOut + " · " + nights + " " + t("nights");
  }
  function updateSummaries() {
    var ds = document.querySelector('[data-role="dateSummary"]');
    if (ds) ds.textContent = fmtRange();
    var bs = document.querySelector('[data-role="bookingSummary"]');
    if (bs) {
      var room = state.rooms.filter(function (r) { return r.id === state.roomId; })[0];
      var name = room ? room["name_" + lang()] : "";
      bs.textContent = fmtRange() + (name ? " · " + name : "");
    }
  }

  // ---- rooms ----
  function roomPhotoHTML(room) {
    var base = room.photo_ref && PHOTO[room.photo_ref];
    if (base) {
      return '<img class="bk-room__photo" src="/assets/' + base + '-1200.webp" ' +
             'srcset="/assets/' + base + '-480.webp 480w, /assets/' + base + '-1200.webp 1200w" ' +
             'sizes="(min-width:560px) 300px, 90vw" loading="lazy" decoding="async" alt="">';
    }
    return '<div class="bk-room__ph">' + t("placeholderRoom") + '</div>';
  }

  function renderRooms() {
    var wrap = document.querySelector('[data-role="rooms"]');
    var free = state.rooms.filter(isFree);
    if (free.length === 0) { wrap.innerHTML = ""; err("err2", t("errNoRooms")); return; }
    err("err2", "");
    var l = lang();
    wrap.innerHTML = free.map(function (room) {
      return '<button type="button" class="bk-room" data-room="' + room.id + '" ' +
             'aria-pressed="' + (state.roomId === room.id) + '">' +
             roomPhotoHTML(room) +
             '<span class="bk-room__body">' +
             '<span class="bk-room__name">' + escapeHtml(room["name_" + l]) + '</span>' +
             '<span class="bk-room__desc">' + escapeHtml(room["description_" + l]) + '</span>' +
             '</span></button>';
    }).join("");
    wrap.querySelectorAll(".bk-room").forEach(function (b) {
      b.addEventListener("click", function () {
        state.roomId = parseInt(b.getAttribute("data-room"), 10);
        wrap.querySelectorAll(".bk-room").forEach(function (x) { x.setAttribute("aria-pressed", "false"); });
        b.setAttribute("aria-pressed", "true");
        updateSummaries();
        show("3");
      });
    });
  }

  // Static showcase of all 7 rooms (content, not availability). Non-interactive cards.
  function renderShowcase() {
    var wrap = document.querySelector('[data-role="showcase"]');
    if (!wrap) return;
    var l = lang();
    wrap.innerHTML = ROOMS.map(function (room) {
      return '<div class="bk-room">' +
             roomPhotoHTML(room) +
             '<span class="bk-room__body">' +
             '<span class="bk-room__name">' + escapeHtml(room["name_" + l]) + '</span>' +
             '<span class="bk-room__desc">' + escapeHtml(room["description_" + l]) + '</span>' +
             '</span></div>';
    }).join("");
  }

  function escapeHtml(s) {
    return String(s).replace(/[&<>"']/g, function (c) {
      return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c];
    });
  }

  async function loadRooms() {
    try {
      var res = await fetch("/api/rooms");
      if (!res.ok) throw new Error("bad status");
      var data = await res.json();
      state.rooms = data.rooms || [];
      return true;
    } catch (e) {
      err("err2", t("errLoadRooms"));
      return false;
    }
  }

  // ---- wire controls ----
  var checkIn = document.getElementById("checkIn");
  var checkOut = document.getElementById("checkOut");
  checkIn.min = todayISO();
  checkOut.min = todayISO();
  checkIn.addEventListener("change", function () {
    if (checkIn.value) checkOut.min = checkIn.value;
  });

  document.querySelector('[data-action="to2"]').addEventListener("click", async function () {
    err("err1", "");
    var ci = checkIn.value, co = checkOut.value;
    if (!ci || !co) { err("err1", t("errDatesRequired")); return; }
    if (ci < todayISO()) { err("err1", t("errPastDate")); return; }
    if (ci >= co) { err("err1", t("errCheckoutOrder")); return; }
    state.checkIn = ci; state.checkOut = co; state.roomId = null;
    updateSummaries();
    show("2");
    if (state.rooms.length === 0) { await loadRooms(); }
    renderRooms();
  });

  document.querySelector('[data-action="back1"]').addEventListener("click", function () { show("1"); });
  document.querySelector('[data-action="back2"]').addEventListener("click", function () { show("2"); });

  var form = document.querySelector('[data-role="form"]');
  var submitBtn = document.querySelector('[data-role="submit"]');
  form.addEventListener("submit", async function (e) {
    e.preventDefault();
    err("err3", "");
    // honeypot: if filled, treat as spam — pretend success, never hit the API
    if (document.getElementById("company").value) { finish(); return; }
    var name = document.getElementById("guestName").value.trim();
    var contact = document.getElementById("guestContact").value.trim();
    if (!name || !contact) { err("err3", t("errNameContact")); return; }
    if (!state.roomId) { err("err3", t("errPickRoom")); show("2"); return; }

    submitBtn.disabled = true;
    try {
      var res = await fetch("/api/bookings", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({
          room_id: state.roomId,
          guest_name: name,
          guest_contact: contact,
          guest_note: document.getElementById("guestNote").value.trim(),
          check_in: state.checkIn,
          check_out: state.checkOut,
          lang: lang()
        })
      });
      if (res.status === 201) { finish(); return; }
      var data = {};
      try { data = await res.json(); } catch (e2) {}
      if (res.status === 409 || data.error === "dates_unavailable") {
        err("err3", t("errUnavailable"));
      } else {
        err("err3", t("errGeneric"));
      }
    } catch (e3) {
      err("err3", t("errGeneric"));
    } finally {
      submitBtn.disabled = false;
    }
  });

  function finish() {
    document.querySelector('[data-role="doneText"]').textContent = t("doneText");
    show("done");
  }

  document.querySelectorAll(".lang__btn").forEach(function (b) {
    b.addEventListener("click", function () { setLang(b.getAttribute("data-lang")); });
  });

  applyLang();
})();

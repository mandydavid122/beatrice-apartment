// Apartment Beatrice — admin (HU-only internal tool).
// Password held in sessionStorage for the tab only. Sent as X-Admin-Password header.
(function () {
  var SKEY = "adminpw";
  var login = document.querySelector('[data-role="login"]');
  var dash = document.querySelector('[data-role="dash"]');
  var loginForm = document.querySelector('[data-role="loginForm"]');
  var loginErr = document.querySelector('[data-role="loginErr"]');
  var dashErr = document.querySelector('[data-role="dashErr"]');
  var empty = document.querySelector('[data-role="empty"]');
  var rowsEl = document.querySelector('[data-role="rows"]');
  var filterEl = document.querySelector('[data-role="filter"]');

  var STATUS = { pending: "Függőben", approved: "Elfogadva", rejected: "Elutasítva" };

  function pw() { try { return sessionStorage.getItem(SKEY) || ""; } catch (e) { return ""; } }
  function setPw(v) { try { sessionStorage.setItem(SKEY, v); } catch (e) {} }
  function clearPw() { try { sessionStorage.removeItem(SKEY); } catch (e) {} }

  function esc(s) {
    return String(s == null ? "" : s).replace(/[&<>"']/g, function (c) {
      return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c];
    });
  }

  function showDash() { login.hidden = true; dash.hidden = false; }
  function showLogin() { dash.hidden = true; login.hidden = false; }

  async function api(path, opts) {
    opts = opts || {};
    opts.headers = Object.assign({ "X-Admin-Password": pw() }, opts.headers || {});
    return fetch(path, opts);
  }

  async function loadBookings() {
    dashErr.hidden = true;
    var res;
    try { res = await api("/api/admin/bookings"); }
    catch (e) { dashErr.textContent = "Hálózati hiba. Próbáld újra."; dashErr.hidden = false; return; }
    if (res.status === 401) { clearPw(); showLogin(); loginErr.hidden = false; return; }
    if (!res.ok) { dashErr.textContent = "Nem sikerült betölteni a foglalásokat."; dashErr.hidden = false; return; }
    var data = await res.json();
    render(data.bookings || []);
  }

  function render(bookings) {
    var f = filterEl.value;
    var list = bookings.filter(function (b) { return f === "all" || b.status === f; });
    empty.hidden = list.length !== 0;
    rowsEl.innerHTML = list.map(rowHtml).join("");
    rowsEl.querySelectorAll("[data-approve]").forEach(function (btn) {
      btn.addEventListener("click", function () { confirmDecide(btn.getAttribute("data-approve"), "approved", btn); });
    });
    rowsEl.querySelectorAll("[data-reject]").forEach(function (btn) {
      btn.addEventListener("click", function () { confirmDecide(btn.getAttribute("data-reject"), "rejected", btn); });
    });
    rowsEl.querySelectorAll("[data-pending]").forEach(function (btn) {
      btn.addEventListener("click", function () { confirmDecide(btn.getAttribute("data-pending"), "pending", btn); });
    });
  }

  function rowHtml(b) {
    // Always editable — any status can be changed to any other, any time (Mandy must be
    // able to correct a misclick). Both actions require confirmation before applying.
    var actions = '<div class="ad-actions">' +
      '<button type="button" class="ad-btn" data-approve="' + b.id + '">Elfogad</button>' +
      '<button type="button" class="ad-btn ad-btn--danger" data-reject="' + b.id + '">Elutasít</button>' +
      '<button type="button" class="ad-btn ad-btn--ghost" data-pending="' + b.id + '">Vissza függőbe</button>' +
      '</div>';
    return "<tr>" +
      "<td>" + esc((b.created_at || "").replace("T", " ").slice(0, 16)) + "</td>" +
      "<td>" + esc(b.room_name) + "</td>" +
      "<td>" + esc(b.guest_name) + "</td>" +
      "<td>" + esc(b.guest_contact) + "</td>" +
      "<td>" + esc(b.check_in) + " → " + esc(b.check_out) + "</td>" +
      "<td>" + esc(b.guest_note) + "</td>" +
      '<td><span class="ad-status ad-status--' + esc(b.status) + '">' + esc(STATUS[b.status] || b.status) + "</span></td>" +
      "<td>" + actions + "</td>" +
      "</tr>";
  }

  var CONFIRM_MSG = {
    approved: "Biztosan elfogadod ezt a foglalást?",
    rejected: "Biztosan elutasítod ezt a foglalást?",
    pending: "Biztosan visszaállítod függőbe ezt a foglalást?"
  };

  function confirmDecide(id, status, btn) {
    if (!window.confirm(CONFIRM_MSG[status])) return;
    decide(id, status, btn);
  }

  async function decide(id, status, btn) {
    btn.disabled = true;
    var res;
    try {
      res = await api("/api/admin/bookings/" + id, {
        method: "PATCH",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({ status: status })
      });
    } catch (e) { btn.disabled = false; dashErr.textContent = "Hálózati hiba."; dashErr.hidden = false; return; }
    if (res.status === 401) { clearPw(); showLogin(); loginErr.hidden = false; return; }
    if (!res.ok) { btn.disabled = false; dashErr.textContent = "A művelet nem sikerült."; dashErr.hidden = false; return; }
    loadBookings();
  }

  loginForm.addEventListener("submit", async function (e) {
    e.preventDefault();
    loginErr.hidden = true;
    var val = document.getElementById("pw").value;
    setPw(val);
    // Probe with a real request; the API decides. Generic error only — never reveal specifics.
    var res;
    try { res = await api("/api/admin/bookings"); }
    catch (err) { loginErr.hidden = false; return; }
    if (res.status === 401 || res.status === 500) { clearPw(); loginErr.hidden = false; return; }
    if (!res.ok) { loginErr.hidden = false; return; }
    showDash();
    var data = await res.json();
    render(data.bookings || []);
  });

  document.querySelector('[data-role="logout"]').addEventListener("click", function () {
    clearPw(); document.getElementById("pw").value = ""; showLogin();
  });
  document.querySelector('[data-role="refresh"]').addEventListener("click", loadBookings);
  filterEl.addEventListener("change", loadBookings);

  // If a password is already in this tab's session, try to resume straight to the dashboard.
  if (pw()) {
    api("/api/admin/bookings").then(async function (res) {
      if (res && res.ok) { showDash(); var d = await res.json(); render(d.bookings || []); }
      else { clearPw(); showLogin(); }
    }).catch(function () { clearPw(); showLogin(); });
  }
})();

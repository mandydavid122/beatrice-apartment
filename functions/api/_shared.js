// Shared helpers for the booking API. Underscore-prefixed => not a route.
// Pure functions here are covered by test/overlap.test.mjs (node self-check).

export function json(data, status = 200, extraHeaders = {}) {
  return new Response(JSON.stringify(data), {
    status,
    headers: { "content-type": "application/json; charset=utf-8", ...extraHeaders },
  });
}

// Strict YYYY-MM-DD -> true only for a real calendar date.
export function isValidDate(s) {
  if (typeof s !== "string" || !/^\d{4}-\d{2}-\d{2}$/.test(s)) return false;
  const d = new Date(s + "T00:00:00Z");
  return !isNaN(d.getTime()) && d.toISOString().slice(0, 10) === s;
}

// Today's date as YYYY-MM-DD in UTC.
export function todayISO(now = new Date()) {
  return now.toISOString().slice(0, 10);
}

// Half-open overlap: [aIn, aOut) intersects [bIn, bOut).
// Checkout day is free for the next guest's checkin (aOut === bIn => no overlap).
export function rangesOverlap(aIn, aOut, bIn, bOut) {
  return aIn < bOut && bIn < aOut;
}

// Validate a booking's dates. Returns { ok:true } or { ok:false, error }.
export function validateDates(check_in, check_out, today = todayISO()) {
  if (!isValidDate(check_in) || !isValidDate(check_out)) {
    return { ok: false, error: "invalid_date" };
  }
  if (check_in < today) return { ok: false, error: "check_in_past" };
  if (check_in >= check_out) return { ok: false, error: "check_out_before_check_in" };
  return { ok: true };
}

// Constant-time-ish string compare so a wrong password can't be timed out char by char.
export function safeEqual(a, b) {
  if (typeof a !== "string" || typeof b !== "string") return false;
  if (a.length !== b.length) return false;
  let diff = 0;
  for (let i = 0; i < a.length; i++) diff |= a.charCodeAt(i) ^ b.charCodeAt(i);
  return diff === 0;
}

// Admin gate. Reads expected password from env.ADMIN_PASSWORD (Cloudflare secret).
// Returns null when authorized, or a 401/500 Response when not.
export function checkAdmin(context) {
  const expected = context.env && context.env.ADMIN_PASSWORD;
  if (!expected) return json({ error: "admin_not_configured" }, 500);
  const given = context.request.headers.get("X-Admin-Password") || "";
  if (!safeEqual(given, expected)) return json({ error: "unauthorized" }, 401);
  return null;
}

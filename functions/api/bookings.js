// POST /api/bookings  (public)
// Body: { room_id, guest_name, guest_contact, check_in, check_out, guest_note, lang }
// Validates room + dates, rejects overlap against APPROVED bookings only
// (overlapping a PENDING request is allowed — inquiries may compete, admin decides).
import { json, validateDates, rangesOverlap } from "./_shared.js";

export async function onRequestPost(context) {
  const { DB } = context.env;
  if (!DB) return json({ error: "db_not_configured" }, 500);

  let body;
  try {
    body = await context.request.json();
  } catch {
    return json({ error: "bad_json" }, 400);
  }

  const room_id = parseInt(body.room_id, 10);
  const guest_name = (body.guest_name || "").trim();
  const guest_contact = (body.guest_contact || "").trim();
  const check_in = (body.check_in || "").trim();
  const check_out = (body.check_out || "").trim();
  const guest_note = (body.guest_note || "").trim() || null;
  const lang = body.lang === "ua" ? "ua" : "hu";

  if (!room_id || !guest_name || !guest_contact) {
    return json({ error: "missing_fields" }, 400);
  }

  const dv = validateDates(check_in, check_out);
  if (!dv.ok) return json({ error: dv.error }, 400);

  const room = await DB.prepare("SELECT id FROM rooms WHERE id = ?").bind(room_id).first();
  if (!room) return json({ error: "room_not_found" }, 404);

  // Overlap check against approved bookings for this room only.
  const approved = await DB.prepare(
    "SELECT check_in, check_out FROM bookings WHERE room_id = ? AND status = 'approved'"
  ).bind(room_id).all();

  for (const b of approved.results || []) {
    if (rangesOverlap(check_in, check_out, b.check_in, b.check_out)) {
      return json({ error: "dates_unavailable" }, 409);
    }
  }

  const res = await DB.prepare(
    "INSERT INTO bookings (room_id, guest_name, guest_contact, check_in, check_out, guest_note, lang, status) " +
    "VALUES (?, ?, ?, ?, ?, ?, ?, 'pending')"
  ).bind(room_id, guest_name, guest_contact, check_in, check_out, guest_note, lang).run();

  const id = res.meta && res.meta.last_row_id;
  return json({ ok: true, id }, 201);
}

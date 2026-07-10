// GET /api/rooms  (public)
// Returns all rooms, each with an array of {check_in, check_out} ranges that are
// unavailable. Unavailability derives ONLY from status='approved' bookings —
// pending requests intentionally do NOT block the calendar (admin resolves manually).
import { json } from "./_shared.js";

export async function onRequestGet(context) {
  const { DB } = context.env;
  if (!DB) return json({ error: "db_not_configured" }, 500);

  const rooms = await DB.prepare(
    "SELECT id, name_hu, name_ua, description_hu, description_ua, photo_ref, sort_order " +
    "FROM rooms ORDER BY sort_order ASC"
  ).all();

  const booked = await DB.prepare(
    "SELECT room_id, check_in, check_out FROM bookings " +
    "WHERE status = 'approved' ORDER BY check_in ASC"
  ).all();

  const byRoom = {};
  for (const b of booked.results || []) {
    (byRoom[b.room_id] = byRoom[b.room_id] || []).push({
      check_in: b.check_in,
      check_out: b.check_out,
    });
  }

  const result = (rooms.results || []).map((r) => ({
    id: r.id,
    name_hu: r.name_hu,
    name_ua: r.name_ua,
    description_hu: r.description_hu,
    description_ua: r.description_ua,
    photo_ref: r.photo_ref,
    unavailable: byRoom[r.id] || [],
  }));

  return json({ rooms: result });
}

// GET /api/admin/bookings  (password-protected)
// Returns all bookings, any status, newest first, joined with room names.
import { json, checkAdmin } from "../_shared.js";

export async function onRequestGet(context) {
  const denied = checkAdmin(context);
  if (denied) return denied;

  const { DB } = context.env;
  if (!DB) return json({ error: "db_not_configured" }, 500);

  const rows = await DB.prepare(
    "SELECT b.id, b.room_id, r.name_hu AS room_name, b.guest_name, b.guest_contact, " +
    "b.check_in, b.check_out, b.guest_note, b.lang, b.status, b.created_at, b.decided_at " +
    "FROM bookings b LEFT JOIN rooms r ON r.id = b.room_id " +
    "ORDER BY b.created_at DESC, b.id DESC"
  ).all();

  return json({ bookings: rows.results || [] });
}

// PATCH /api/admin/bookings/:id  (password-protected)
// Body: { status: 'approved' | 'rejected' }  -> sets decided_at = now.
import { json, checkAdmin } from "../../_shared.js";

export async function onRequestPatch(context) {
  const denied = checkAdmin(context);
  if (denied) return denied;

  const { DB } = context.env;
  if (!DB) return json({ error: "db_not_configured" }, 500);

  const id = parseInt(context.params.id, 10);
  if (!id) return json({ error: "bad_id" }, 400);

  let body;
  try {
    body = await context.request.json();
  } catch {
    return json({ error: "bad_json" }, 400);
  }

  const status = body.status;
  if (status !== "approved" && status !== "rejected" && status !== "pending") {
    return json({ error: "bad_status" }, 400);
  }

  const res = await DB.prepare(
    "UPDATE bookings SET status = ?, decided_at = datetime('now') WHERE id = ?"
  ).bind(status, id).run();

  if (!res.meta || res.meta.changes === 0) {
    return json({ error: "not_found" }, 404);
  }
  return json({ ok: true, id, status });
}

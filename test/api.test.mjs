// node --experimental-sqlite test/api.test.mjs
// Integration test for the Pages Functions against a real SQLite DB (node:sqlite),
// wrapped in a D1-compatible shim. Proves the STEP-3 acceptance criteria without
// wrangler/Cloudflare auth. No network, no browser.
import assert from "node:assert";
import { readFileSync } from "node:fs";
import { DatabaseSync } from "node:sqlite";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";

import { onRequestGet as roomsGet } from "../functions/api/rooms.js";
import { onRequestPost as bookingsPost } from "../functions/api/bookings.js";
import { onRequestGet as adminGet } from "../functions/api/admin/bookings.js";
import { onRequestPatch as adminPatch } from "../functions/api/admin/bookings/[id].js";

const __dir = dirname(fileURLToPath(import.meta.url));
const ADMIN_PASSWORD = "test-secret-not-real";

// --- D1 shim over node:sqlite ---
function makeD1(db) {
  return {
    prepare(sql) {
      let args = [];
      return {
        bind(...a) { args = a; return this; },
        async all() { return { results: db.prepare(sql).all(...args) }; },
        async first() { const r = db.prepare(sql).get(...args); return r === undefined ? null : r; },
        async run() {
          const info = db.prepare(sql).run(...args);
          return { meta: { last_row_id: Number(info.lastInsertRowid), changes: info.changes } };
        },
      };
    },
  };
}

function ctx(DB, { body, adminPw, params } = {}) {
  const headers = new Headers();
  if (adminPw !== undefined) headers.set("X-Admin-Password", adminPw);
  const init = { method: "GET", headers };
  if (body !== undefined) { init.method = "POST"; init.body = JSON.stringify(body); headers.set("content-type", "application/json"); }
  return { env: { DB, ADMIN_PASSWORD }, request: new Request("http://x/", init), params: params || {} };
}

const db = new DatabaseSync(":memory:");
db.exec(readFileSync(join(__dir, "..", "schema.sql"), "utf8"));
const DB = makeD1(db);

function futureDate(daysFromNow) {
  const d = new Date(Date.now() + daysFromNow * 86400000);
  return d.toISOString().slice(0, 10);
}
const A = futureDate(30), B = futureDate(34), C = futureDate(32), D = futureDate(36);

let n = 0;
function ok(msg) { n++; console.log("  ok " + n + " - " + msg); }

// 1. rooms: 7 seeded, all available initially
let res = await roomsGet(ctx(DB));
let data = await res.json();
assert.equal(data.rooms.length, 7, "7 rooms seeded");
assert.ok(data.rooms.every((r) => r.unavailable.length === 0), "all available initially");
ok("GET /api/rooms returns 7 rooms, none unavailable");

// 2. seed an APPROVED booking on room 1 for [A,B) directly
db.prepare(
  "INSERT INTO bookings (room_id, guest_name, guest_contact, check_in, check_out, status) VALUES (1,'X','x',?,?,'approved')"
).run(A, B);

// 3. booking overlapping an APPROVED range on the same room -> 409
res = await bookingsPost(ctx(DB, { body: { room_id: 1, guest_name: "Anna", guest_contact: "a@b.c", check_in: C, check_out: D, lang: "hu" } }));
assert.equal(res.status, 409, "approved overlap rejected");
assert.equal((await res.json()).error, "dates_unavailable");
ok("POST overlapping an APPROVED booking -> 409 dates_unavailable");

// 4. booking overlapping only a PENDING request is accepted
//    first create a pending booking on room 2 for [A,B)
res = await bookingsPost(ctx(DB, { body: { room_id: 2, guest_name: "P1", guest_contact: "p1@x", check_in: A, check_out: B, lang: "hu" } }));
assert.equal(res.status, 201, "first pending created");
const pendingId = (await res.json()).id;
//    now overlap it with another pending -> allowed (201)
res = await bookingsPost(ctx(DB, { body: { room_id: 2, guest_name: "P2", guest_contact: "p2@x", check_in: C, check_out: D, lang: "hu" } }));
assert.equal(res.status, 201, "overlapping-a-pending accepted");
ok("POST overlapping only a PENDING request -> 201 (competes, admin decides)");

// 5. validation
res = await bookingsPost(ctx(DB, { body: { room_id: 1, guest_name: "V", guest_contact: "v", check_in: "2000-01-01", check_out: "2000-01-05", lang: "hu" } }));
assert.equal(res.status, 400, "past date rejected");
res = await bookingsPost(ctx(DB, { body: { room_id: 1, guest_name: "V", guest_contact: "v", check_in: D, check_out: C, lang: "hu" } }));
assert.equal(res.status, 400, "reversed dates rejected");
res = await bookingsPost(ctx(DB, { body: { room_id: 999, guest_name: "V", guest_contact: "v", check_in: A, check_out: B, lang: "hu" } }));
assert.equal(res.status, 404, "unknown room rejected");
ok("POST validation: past/reversed -> 400, unknown room -> 404");

// 6. admin gate
res = await adminGet(ctx(DB));                       // no header
assert.equal(res.status, 401, "no password -> 401");
res = await adminGet(ctx(DB, { adminPw: "wrong" }));  // wrong header
assert.equal(res.status, 401, "wrong password -> 401");
res = await adminGet(ctx(DB, { adminPw: ADMIN_PASSWORD }));
assert.equal(res.status, 200, "correct password -> 200");
const allBookings = (await res.json()).bookings;
assert.ok(allBookings.length >= 3 && "room_name" in allBookings[0], "admin list joined with room names, newest first");
ok("admin gate: missing/wrong -> 401, correct -> 200 with room names");

// 7. admin approve changes what /api/rooms reports as unavailable
//    approve the pending booking on room 2 ([A,B))
res = await adminPatch(ctx(DB, { adminPw: ADMIN_PASSWORD, body: { status: "approved" }, params: { id: String(pendingId) } }));
assert.equal(res.status, 200, "approve ok");
res = await roomsGet(ctx(DB));
data = await res.json();
const room2 = data.rooms.find((r) => r.id === 2);
assert.equal(room2.unavailable.length, 1, "approved booking now blocks room 2");
assert.deepEqual(room2.unavailable[0], { check_in: A, check_out: B });
//    and a new booking overlapping that now-approved range -> 409
res = await bookingsPost(ctx(DB, { body: { room_id: 2, guest_name: "Late", guest_contact: "l@x", check_in: C, check_out: D, lang: "hu" } }));
assert.equal(res.status, 409, "overlap of newly-approved -> 409");
ok("admin approve -> /api/rooms marks it unavailable -> later overlap rejected");

// 8. admin reject on unknown id -> 404, bad status -> 400
res = await adminPatch(ctx(DB, { adminPw: ADMIN_PASSWORD, body: { status: "approved" }, params: { id: "99999" } }));
assert.equal(res.status, 404, "unknown id -> 404");
res = await adminPatch(ctx(DB, { adminPw: ADMIN_PASSWORD, body: { status: "maybe" }, params: { id: String(pendingId) } }));
assert.equal(res.status, 400, "bad status -> 400");
ok("admin PATCH: unknown id -> 404, bad status -> 400");

console.log("\napi.test.mjs: all " + n + " checks passed");

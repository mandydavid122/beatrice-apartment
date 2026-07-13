-- Apartment Beatrice — booking subsystem (Cloudflare D1 / SQLite)
-- Apply:  wrangler d1 execute beatrice-bookings --remote --file=schema.sql
-- Local:  wrangler d1 execute beatrice-bookings --local  --file=schema.sql

CREATE TABLE IF NOT EXISTS rooms (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  name_hu TEXT NOT NULL,
  name_ua TEXT NOT NULL,
  description_hu TEXT NOT NULL,
  description_ua TEXT NOT NULL,
  photo_ref TEXT,
  sort_order INTEGER NOT NULL
);

CREATE TABLE IF NOT EXISTS bookings (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  room_id INTEGER NOT NULL REFERENCES rooms(id),
  guest_name TEXT NOT NULL,
  guest_contact TEXT NOT NULL,
  check_in TEXT NOT NULL,
  check_out TEXT NOT NULL,
  guest_note TEXT,
  lang TEXT NOT NULL DEFAULT 'hu',
  status TEXT NOT NULL DEFAULT 'pending',
  created_at TEXT NOT NULL DEFAULT (datetime('now')),
  decided_at TEXT
);

CREATE INDEX IF NOT EXISTS idx_bookings_room_status ON bookings (room_id, status);

-- Seed: 7 rooms. Descriptions are concrete, photo-derived (real-content pass, S7-clean).
-- HU authored; UA machine-drafted from HU, human review pending (S9).
-- photo_ref reuses existing caption keys from app.js COPY; rooms 6 & 7 carry no photo_ref
-- in this seed (the /foglalas showcase in booking.js maps them to cap10/cap11).
INSERT INTO rooms (name_hu, name_ua, description_hu, description_ua, photo_ref, sort_order) VALUES
  ('Szoba saját fürdővel', 'Кімната з власною ванною', 'Franciaágy és pótágy, saját fürdőszoba, TV és kis hűtő a szobában.', 'Двоспальне ліжко та додаткове ліжко, власна ванна кімната, телевізор і невеликий холодильник у номері.', 'cap8', 1),
  ('Családi szoba',        'Сімейна кімната',          'Franciaágy és extra fekhely, saját mosdó és WC a szobához.', 'Двоспальне ліжко та додаткове спальне місце, власний туалет і умивальник у номері.', 'cap9', 2),
  ('Hálószoba',            'Спальня',                  'Franciaágy, éjjeliszekrény olvasólámpával, laminált padló.', 'Двоспальне ліжко, тумбочка з лампою для читання, ламінована підлога.', 'caph1', 3),
  ('Hálószoba',            'Спальня',                  'Két egybetolt egyszemélyes ágy, ablak függönnyel, éjjeliszekrény.', 'Два зсунуті односпальні ліжка, вікно зі шторами, тумбочка.', 'caph4', 4),
  ('Hangulatos hálószoba', 'Затишна спальня',          'Franciaágy, nád mennyezetdísz és szőttes falidíszek, laminált padló.', 'Двоспальне ліжко, очеретяна стеля та ткані настінні прикраси, ламінована підлога.', 'cap2', 5),
  ('Szoba 6',              'Кімната 6',                'Franciaágy és külön egyszemélyes ágy, saját mosdó és WC, fapolcos tároló.', 'Двоспальне ліжко та окреме односпальне ліжко, власний туалет і умивальник, дерев''яна полиця.', NULL, 6),
  ('Szoba 7',              'Кімната 7',                'Franciaágy, ruhásszekrény és TV, laminált padló.', 'Двоспальне ліжко, шафа для одягу та телевізор, ламінована підлога.', NULL, 7);

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

-- Seed: 7 rooms. Descriptions are literal placeholders per doctrine S7
-- (no invented copy). photo_ref reuses existing caption keys from app.js COPY;
-- rooms 6 & 7 have no photo yet (NULL) -> striped placeholder on /foglalas.
INSERT INTO rooms (name_hu, name_ua, description_hu, description_ua, photo_ref, sort_order) VALUES
  ('Szoba saját fürdővel', 'Кімната з власною ванною', '[LEÍRÁS: rövid szoba-jellemzés hamarosan]', '[ОПИС: короткий опис кімнати скоро]', 'cap8', 1),
  ('Családi szoba',        'Сімейна кімната',          '[LEÍRÁS: rövid szoba-jellemzés hamarosan]', '[ОПИС: короткий опис кімнати скоро]', 'cap9', 2),
  ('Hálószoba',            'Спальня',                  '[LEÍRÁS: rövid szoba-jellemzés hamarosan]', '[ОПИС: короткий опис кімнати скоро]', 'caph1', 3),
  ('Hálószoba',            'Спальня',                  '[LEÍRÁS: rövid szoba-jellemzés hamarosan]', '[ОПИС: короткий опис кімнати скоро]', 'caph4', 4),
  ('Hangulatos hálószoba', 'Затишна спальня',          '[LEÍRÁS: rövid szoba-jellemzés hamarosan]', '[ОПИС: короткий опис кімнати скоро]', 'cap2', 5),
  ('Szoba 6',              'Кімната 6',                '[LEÍRÁS: rövid szoba-jellemzés hamarosan]', '[ОПИС: короткий опис кімнати скоро]', NULL, 6),
  ('Szoba 7',              'Кімната 7',                '[LEÍRÁS: rövid szoba-jellemzés hamarosan]', '[ОПИС: короткий опис кімнати скоро]', NULL, 7);

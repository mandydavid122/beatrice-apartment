# Design Decision Record (DDR)

1. Client: Apartment Beatrice — family-run 2-apartment guesthouse, Mala Byihan, Zakarpattia, Ukraine
2. Sector/adjective: Hospitality (Section 2-B), pulled toward restrained/editorial per K4 cross-category override — warm (secondary: rooted/heritage)
3. Conversion action: primary = in-house room booking flow (/foglalas); secondary = phone call (route via Google Maps remains a utility link, not a conversion CTA)
4. Audience+device: HU tourists (family ties, thermal/nostalgia tourism) + Zakarpattia transit travelers; secondary UA domestic/displaced travelers drawn by Kosonь thermal springs; 100% mobile, on-the-go decisions
5. Languages+default: HU default on load, UA one-tap toggle (JS-toggle, localStorage-persisted)
6. Archetype: Hospitality "Warm Human" base, disciplined via Luxury-Editorial typographic restraint (per client's existing calligraphic logo)
7. Font pairing: headline Playfair Display / body PT Sans (glyph-gate PASS both, HU+UA verified)
8. Palette roles (60-30-10): --c-ground warm ivory (~#F7F3EA family) / --c-ink deep wine-oxblood ink (refined from existing ~#863B2E) / --c-accent muted warm brass/ochre, CTA-only
9. Imperfection: recurring swash motif extracted from the client's own logo calligraphy + a short handwritten-style host welcome note/signature micro-section
10. Differentiation: We will NOT look like a generic Zakarpattia accommodation-directory listing (karpaty3d.com / svitkarpat.com / karpaty.info — fragmented breadcrumb menus, template icons, interchangeable entries) because we will build a single-property editorial site with real photography and one distinct human voice.

---

## Tokens

```css
:root {
  /* color — 60/30/10 */
  --c-ground: #F7F3EA;      /* 60 — warm ivory base */
  --c-ground-alt: #EFE7D8;  /* ivory shade for section banding */
  --c-ink: #6E2A20;         /* 30 — deep wine-oxblood, refined from #863B2E */
  --c-ink-soft: #8A4438;    /* body text on ivory where full ink is too heavy */
  --c-accent: #B98A3E;      /* 10 — muted brass/ochre, CTA-only, never decorative */
  --c-accent-hover: #A47730;
  --c-white: #FFFFFF;

  /* spacing (8px base) */
  --sp-1: 8px;
  --sp-2: 16px;
  --sp-3: 24px;
  --sp-4: 32px;
  --sp-6: 48px;
  --sp-8: 64px;
  --sp-12: 96px;

  /* radius */
  --r-sm: 2px;
  --r-md: 4px;

  /* shadow — flat editorial, no drop-shadow soup */
  --shadow-card: 0 1px 3px rgba(110, 42, 32, 0.12);
}
```

Accent is CTA-only: the "Foglalj szobát" booking button, phone link, map link. Never used for headings, dividers, or icons — that's what makes it read as an action, not decoration.

**Conversion CTAs (main site).** WhatsApp is fully removed from the main site as of the booking-subsystem addition. Every CTA row keeps exactly two buttons, in this order: primary accent-filled "Foglalj szobát / Забронювати кімнату" → `/foglalas/`, then ghost "Hívás / Подзвонити" → `tel:`. The maps link stays a ghost utility link in the Location section only, never counted as a conversion action.

## Typography

- Modular scale (ratio 1.25, per doctrine Section 4): 16 → 20 → 25 → 31 → 39 → 49 → 61 px.
- Headline: Playfair Display. H1/H2/host name only — not body, not nav, not buttons. The H1 tagline uses the italic **500** cut ONLY — the loaded face has no 700 italic, so a `font-weight:700` rule reaching it makes the browser synth-bold an italic serif (looks broken). Lock `.hero__tagline` to 500.
- Body: PT Sans, 400/700. Body text **17px** (doctrine 17–18px preferred), line-height 1.6.
- Scale in use (clamp() for smooth desktop bump on display sizes):
  - H1: clamp(31px → 39px)
  - H2: clamp(25px → 31px)
  - H3: 20px
  - hero sub: 20px
  - body / room copy: 17px
  - captions / meta / gallery + feature captions / contact block: **15–16px** — nothing below 15px as reading text
  - eyebrow: 13px all-caps label ONLY (short label, not reading text — the single sub-15px exception)
- No more than 2 weights per family at once. No italics except the H1 tagline, host note/signoff (Playfair italic), and the host note face.
- HU + UA glyph-complete in both faces — no fallback-font flash on toggle.

## Layout

- Mobile-first single-column; content max 640px, centered, side padding ≥ --sp-3. Confirmed working — unchanged below 900px.
- Desktop (≥900px):
  - Hero → asymmetric two-column: text column (eyebrow, H1, sub, CTA, price) left inside the content frame; hero photo right, breaking OUT of the 640 frame and bleeding to the viewport's right edge, framed by a 1px low-opacity --c-ink hairline. Sharp and proud, never blurred, never a text-backdrop.
  - Feature/terrace band: same full-bleed break-out, photo anchored to one edge with a deliberate asymmetric margin on the other (this is the DDR K9 "asymmetric grid break").
  - Any single image panel is width-capped (~760–820px) so the small source photos are not upscaled across the whole viewport.
  - Gallery gets its own wider container (~1100px) + 3-column grid; click any tile to open a lightbox.
- Section rhythm: alternate --c-ground / --c-ground-alt bands, no borders.
- Sticky bottom bar on mobile: "Foglalj szobát" (→ /foglalas/) + call, always reachable — load-bearing conversion surface, not a footer afterthought.
- No hamburger-menu breadcrumb sprawl (see Differentiation, DDR #10). One page, anchor-scrolled sections: Welcome → Rooms → Location → Host note → Contact.

## Components

- **CTA button (primary)**: solid --c-accent fill, --c-white text, PT Sans bold, --r-md corners. Reserved for the booking button / call / map — one visual language, repeated, never diluted with secondary-action styling.
- **Room card**: photo-forward, ivory card on --c-ground-alt, --shadow-card, headline in Playfair for room name, PT Sans for detail line.
- **Language toggle**: small text pair "HU / UA", current language in --c-ink bold, inactive in --c-ink-soft 60% opacity. Top-right, persists via localStorage, no page reload.
- **Host note block**: see Imperfection below.

## Motion

- Near-stillness (Luxury archetype): one deliberate movement, never a library, always gated by prefers-reduced-motion.
- Hero entrance: one load animation on the hero text column — opacity 0→1 + 2–4px translate, 600–800ms ease. Once, on load.
- Gallery hover: accent-colored 1px hairline border appears on the tile + its caption underlines. No scale, no bounce (hard ban).
- Header: 1px border-bottom fades in after ~40px scroll (JS class toggle, no library).
- Lightbox open/close: short opacity fade only, gated by reduced-motion.
- Section-head reveal: fade/slide-up on scroll-into-view, section headers only (200ms ease-out) — not per-element stagger.
- Button press: 100ms scale/opacity feedback, no bounce. Language toggle: instant text swap, no transition.

## Imagery

- Real photography only, client's own — no stock. Warm natural light, graded toward the ivory/wine palette, no cool blue casts.
- **CURRENT DEBT:** gallery/hero/feature photos are interim Google-thumbnail sources (max ~698px wide). The desktop full-bleed treatment will look soft until real client photography replaces them. This is accepted, documented debt — not a bug to chase. Image panels are width-capped (~760–820px) to limit upscaling artifacts in the meantime.
- Room photos: wide-angle, daylight, uncluttered — sell the space, not props.
- Exterior/location shots: establish Mala Byihan setting and proximity to Kosonь thermal springs context without needing copy to explain it.
- Every not-yet-supplied image slot stays a labelled placeholder, never a finished-looking fake.
- **Bookable rooms (7).** The booking subsystem exposes 7 rooms (see schema.sql seed). All 7 reuse real photos from the existing photo set (caption keys `cap8`, `cap9`, `caph1`, `caph4`, `cap2`, and `cap10`/`cap11` for "Szoba 6"/"Szoba 7"). Room descriptions are concrete, photo-derived one-liners (S7-clean: no marketing adjectives); HU authored, UA machine-drafted with human review pending (S9).

## Imperfection

- Swash motif extracted from the client's existing calligraphic logo mark, used sparingly as a section divider glyph (not a repeating pattern/wallpaper).
- Short handwritten-style host welcome note: a distinct script/signature face (not Playfair, not PT Sans — a third, tightly-scoped face used only here), framed as a personal note with the host's name signed. This is the one place personality overrides the typographic system's restraint — deliberately, once.

## Booking subsystem (/foglalas + /admin) — SAME token set, no fork

`/foglalas/` and `/admin/` use the **SAME** token set as the main site — no fork. This **reverses an earlier approved-but-regretted decision** (a teal/cream + Quicksand/Nunito "Secondary Design System") — see project handoff notes.

- `/foglalas/` links `base.css` for the `:root` tokens and shared chrome (`.header`, `.lang`, `.btn`, `.footer`), exactly as index.html does. `booking.css` no longer declares its own `:root`; it only styles the booking-flow-specific classes (`.bk-steps`, `.bk-panel`, `.bk-field`, `.bk-rooms`, `.bk-room`, `.bk-btn`, `.bk-success`) **on the main tokens above** — hairline `--c-ink` borders, brass `--c-accent` on active step / primary button only, Playfair Display headings, 2–4px radius.
- **Section order (conversion-first, K2).** `/foglalas/` renders top-to-bottom: intro (host line + Kosonь springs) → **3-step booking flow (`#foglalas`)** → room showcase (`#szobak`, all 7 rooms as content) → location/map (`#terkep`). The booking flow sits directly under the intro, ABOVE the showcase — the primary conversion action is never buried below a gallery. Step transitions (`Tovább` / room pick / submit / success) scroll `#foglalas` into view via `scrollIntoView`, never `scrollTo(top:0)` — the viewport stays anchored on the flow, not the page header.
- `/admin/` is an internal-only tool: functional styling is allowed to stay minimal per doctrine, but it too draws from `base.css` tokens — no teal, no Quicksand/Nunito.
- Accent stays CTA-only here as well: brass fills the "Foglalás elküldése" submit / "Tovább" advance button and marks the active step; it is never decoration.
- Bilingual mechanism identical to the main site: HU default, JS toggle, localStorage-persisted, no auto-detect.

## DEPLOY STRUCTURE (required — per MONARCH_DOCTRINE 5-G0)

The Cloudflare Pages build-output root is **`public/`** (`pages_build_output_dir = "public"` in `wrangler.toml`). ONLY publicly-servable files live inside `public/`: `index.html`, `base.css`, `app.js`, `consent.js`, `foglalas/`, `admin/`, `assets/` (processed `*.webp` + `logo.jpg` only).

- `functions/` stays at the **repo root as a sibling of `public/`** — Cloudflare Pages discovers Functions at the project root, NOT inside the build-output dir. Moving it into `public/` breaks every `/api/*` route.
- Internal files NEVER go inside `public/`: `CLAUDE.md`, `design.md`, `MONARCH_DOCTRINE.md`, `schema.sql`, `wrangler.toml`, `reference/`, `test/`, and `raw-photos/` (unprocessed source PNGs) all stay at repo root so they are never publicly served.
- Deploy with `npx wrangler pages deploy` (no positional dir arg) from the repo root so it reads `pages_build_output_dir=public` and discovers `./functions`. Do NOT flatten this back to `pages_build_output_dir = "."` — that publicly serves every internal doc and config file.

## Banned

- No generic hospitality stock photography.
- No hamburger nav / multi-level breadcrumb menus (directory-listing tell, DDR #10).
- No template accommodation-site icon sets (bed/wifi/parking glyph rows) — describe amenities in prose or with the client's own photos instead.
- No cool-toned blue/teal accents — breaks the warm ivory/wine/brass palette.
- No decorative use of --c-accent outside CTAs.
- No stacked drop-shadows, gradients, or glassmorphism — flat editorial only.
- No auto-playing carousels.
- No language auto-detect that overrides the HU default without explicit user action.

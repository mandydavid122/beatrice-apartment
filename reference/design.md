# Apartment Beatrice — design.md
Binding source of truth. Do not deviate without updating this file first.

## (a) Dominant adjective
Warm (secondary: rooted/heritage). Not "cozy-corporate" warm — warm like a family kitchen, oxblood and ivory, low-key.

## (b) Font pairing
Headline: Playfair Display (has Cyrillic + Latin Extended — passes glyph gate).
Body: PT Sans (pan-Cyrillic project font, includes Latin Extended — passes glyph gate).
No third webfont. Glyph test strings rendered directly in both faces on the page footer, invisibly verified: "Árvíztűrő tükörfúrógép" / "ґанок їжак єдність місто".

## (c) Layout archetype
Single-column editorial scroll, generous vertical rhythm, asymmetric photo/text splits (not centered-hero/3-col-grid). Section transitions marked by full-width color changes (ivory ↔ oxblood), not cards. One-pager: hero → intro (host welcome) → rooms & spaces → gallery → location → booking strip (sticky-lite).

## (d) Deliberate imperfection
1. A single swash flourish extracted/redrawn from the client's own logo calligraphy (the connecting stroke between the A and B), reused max twice: once under the hero wordmark, once as a section divider before "Rooms & Spaces". Never used as decoration filler elsewhere.
2. A short handwritten-voice host welcome micro-section, set in Playfair italic, first-person, breaking the grid by sitting off-center against a solid oxblood field.

## Palette (60/30/10)
- --c-ground: #F7F3EA (60% — warm ivory, page field)
- --c-ink: #6E2E23 (30% — deep wine-oxblood, headlines/dark sections/footer)
- --c-accent: oklch(68% 0.09 75) (10% — muted brass/ochre, CTA + small accents only)
- --c-ink-soft: color-mix(in oklch, #6E2E23 60%, #F7F3EA) — for secondary text on ivory
- --c-line: color-mix(in oklch, #6E2E23 18%, #F7F3EA) — hairlines

## Spacing (8pt scale)
8 · 16 · 24 · 32 · 40 · 48 · 64 · 80 · 96 · 128 (px)

## Conversion
Primary: one-tap WhatsApp (https://wa.me/380952107069, prefilled message, HU/UA aware).
Secondary: phone call (tel:+380952107069) and Google Maps route.
No booking form, no Supabase — WhatsApp/call only.

## Bilingual
HU on load. JS toggle (HU / UA pill, top-right of hero + sticky bar). All UA strings drafted, machine-translated, marked for human review — never presented as final.

## Imagery
All current photography is Google-sourced placeholder. Every image slot is a labelled striped placeholder, never a finished-looking photo, until real client photography lands.

## Anti-slop self-check
No gradients, no glassmorphism, no repeated border-radius+shadow card recipe, no icon-feature 3-col grid, no testimonial carousel, no emoji, no Inter/Roboto/Arial/system-ui, no invented stats or testimonials.

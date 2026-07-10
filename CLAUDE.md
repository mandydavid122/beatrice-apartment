<anti_ai_slop>
BEFORE writing any CSS or generating any layout, state in one line:
(a) the single dominant emotional adjective for this brand,
(b) the chosen font pairing by name (headline + body),
(c) the chosen layout archetype,
(d) one deliberate human imperfection you will add (hand-drawn accent,
    asymmetric grid break, texture, off-grid detail).
This project's binding source of truth is /design.md — read it before
generating or editing anything. (a)-(d) must match design.md. If a choice
is not specified there, default to the boldest option consistent with (a),
never the safest.

HARD BANS — never produce these, even if they seem helpful:
- Inter, Roboto, Arial, Open Sans, or system-ui as headline type;
  Poppins/Montserrat/Lato as unconsidered defaults.
- Purple-to-blue, teal-to-purple, or aurora/mesh gradients; glassmorphism
  cards on gradients; gradient-filled headline text.
- One identical border-radius + box-shadow recipe on every card/component.
- The template sequence: centered hero → 3-column icon-feature grid →
  testimonial carousel → 3-column footer link stack.
- Floating abstract 3D blobs; plastic-smooth AI illustration; flat
  "Corporate Memphis" people; stock "diverse team at laptop" imagery.
- The same fade-in scroll reveal on every element; scroll-jacking;
  hover states that only change opacity.
- Emoji as icons or in headings.
- Invented content: fake testimonials, fake client logos, fake statistics,
  lorem ipsum. Missing content = a labelled placeholder block, e.g.
  [PHOTO: cellar interior, horizontal] / [COPY: founder story, UA pending].
- Slop vocabulary: "Elevate", "Unlock", "Seamless", "Empower",
  "state-of-the-art", "In today's fast-paced world" — and HU/UA calques.

REQUIRED:
- All spacing/sizing from the project's 8-pt token scale; colors obey the
  60/30/10 role tokens (--c-ground / --c-ink / --c-accent). No arbitrary values.
- Every font must render Hungarian ő ű Ő Ű and Ukrainian і ї є ґ.
  Test strings: "Árvíztűrő tükörfúrógép" / "ґанок їжак єдність місто".
  If any glyph falls back to a system font, change the font or fix subsets
  before proceeding.
- Never machine-translate HU↔UA silently; drafted translations are marked
  <!-- TODO: human review -->.

SELF-CHECK before showing output: could this exact section have been
produced by any AI tool for any unrelated brand with zero edits?
If yes, revise before showing it.
</anti_ai_slop>

## Token digest (from /design.md — binding)

Colors (60/30/10):
- `--c-ground: #F7F3EA` — 60, warm ivory page field
- `--c-ground-alt: #EFE7D8` — ivory shade, section banding
- `--c-ink: #6E2A20` — 30, deep wine-oxblood, headlines/dark sections (refined from #863B2E)
- `--c-ink-soft: #8A4438` — secondary body text on ivory
- `--c-accent: #B98A3E` — 10, muted brass/ochre, **CTA-only, never decorative**
- `--c-accent-hover: #A47730`
- `--c-white: #FFFFFF`

Type scale (Playfair Display headline / PT Sans body):
- H1 2.25rem/1.15 · H2 1.5rem/1.2 · body 1rem/1.6 · small 0.875rem/1.5
- Playfair = H1/H2/host name only. PT Sans = everything else. Max 2 weights per family.

Spacing (8px base): `--sp-1..--sp-12` = 8 · 16 · 24 · 32 · 48 · 64 · 96 px.
Radius: `--r-sm: 2px` · `--r-md: 4px`. Shadow: `--shadow-card: 0 1px 3px rgba(110,42,32,0.12)` — flat editorial, no drop-shadow soup.

design.md is binding; QA per agency doctrine Section 5; every completed task ends with a QA REPORT table.

## Project infra

- Static HTML/CSS/JS. No build step, no framework.
- Deploy: Cloudflare Pages Direct Upload.
- No Supabase, no booking form.
- Conversion = WhatsApp (`wa.me/380952107069`, prefilled per-language message) + `tel:+380952107069` + Google Maps route only.
- base.css loads LAST in `<head>` (cascade order law C1).
- Reference-only, never ship: `reference/support.js`, `reference/*.dc.html`, `reference/.thumbnail` — Claude Design tool leftovers. Shipped files must contain no `x-dc`, `DCLogic`, `support.js`, `{{ }}`, or `data-screen-label`.

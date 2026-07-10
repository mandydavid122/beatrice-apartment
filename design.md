# Design Decision Record (DDR)

1. Client: Apartment Beatrice — family-run 2-apartment guesthouse, Mala Byihan, Zakarpattia, Ukraine
2. Sector/adjective: Hospitality (Section 2-B), pulled toward restrained/editorial per K4 cross-category override — warm (secondary: rooted/heritage)
3. Conversion action: primary = one-tap WhatsApp chat; secondary = phone call / route via Google Maps
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

Accent is CTA-only: WhatsApp button, phone link, map link. Never used for headings, dividers, or icons — that's what makes it read as an action, not decoration.

## Typography

- Headline: Playfair Display, 600/700 weight. Used for H1/H2/host name only — not body, not nav, not buttons.
- Body: PT Sans, 400/700. Everything else — paragraphs, nav, buttons, form labels.
- Scale (mobile-first, rem):
  - H1: 2.25rem / 1.15 line-height
  - H2: 1.5rem / 1.2
  - body: 1rem / 1.6
  - small/meta: 0.875rem / 1.5
- No more than 2 weights per family in play at once. No italics except the handwritten signature block (separate face, see Imperfection).
- HU and UA both verified glyph-complete in both faces — no fallback-font flash on toggle.

## Layout

- Single-column, mobile-first; max content width 640px, centered, generous side padding (--sp-3 minimum).
- Section rhythm: alternate --c-ground / --c-ground-alt bands to separate content blocks without borders.
- Sticky bottom bar on mobile: WhatsApp + call, always reachable, never requires scrolling back up. This is the primary conversion surface — treat it as load-bearing, not a footer afterthought.
- No hamburger-menu breadcrumb sprawl (see Differentiation, DDR #10). One page, anchor-scrolled sections: Welcome → Rooms → Location → Host note → Contact.

## Components

- **CTA button (primary)**: solid --c-accent fill, --c-white text, PT Sans bold, --r-md corners. Reserved for WhatsApp/call/map — one visual language, repeated, never diluted with secondary-action styling.
- **Room card**: photo-forward, ivory card on --c-ground-alt, --shadow-card, headline in Playfair for room name, PT Sans for detail line.
- **Language toggle**: small text pair "HU / UA", current language in --c-ink bold, inactive in --c-ink-soft 60% opacity. Top-right, persists via localStorage, no page reload.
- **Host note block**: see Imperfection below.

## Motion

- Minimal. Fade/slide-up on scroll-into-view for section headers only (200ms ease-out), not per-element stagger — editorial restraint, not a scroll-jacked showcase.
- Button press: 100ms scale/opacity feedback, no bounce.
- Language toggle swap: instant text swap, no transition — this is a utility action, not a moment.

## Imagery

- Real photography only, client's own — no stock. Warm natural light, consistent color grade toward the ivory/wine palette (desaturate blown highlights, avoid cool blue casts).
- Room photos: wide-angle, daylight, uncluttered — sell the space, not props.
- Exterior/location shots: establish Mala Byihan setting and proximity to Kosonь thermal springs context without needing copy to explain it.

## Imperfection

- Swash motif extracted from the client's existing calligraphic logo mark, used sparingly as a section divider glyph (not a repeating pattern/wallpaper).
- Short handwritten-style host welcome note: a distinct script/signature face (not Playfair, not PT Sans — a third, tightly-scoped face used only here), framed as a personal note with the host's name signed. This is the one place personality overrides the typographic system's restraint — deliberately, once.

## Banned

- No generic hospitality stock photography.
- No hamburger nav / multi-level breadcrumb menus (directory-listing tell, DDR #10).
- No template accommodation-site icon sets (bed/wifi/parking glyph rows) — describe amenities in prose or with the client's own photos instead.
- No cool-toned blue/teal accents — breaks the warm ivory/wine/brass palette.
- No decorative use of --c-accent outside CTAs.
- No stacked drop-shadows, gradients, or glassmorphism — flat editorial only.
- No auto-playing carousels.
- No language auto-detect that overrides the HU default without explicit user action.

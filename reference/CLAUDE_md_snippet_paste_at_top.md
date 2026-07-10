<!--
  Paste this whole block at the very TOP of this project's own CLAUDE.md
  (agency doctrine locality rule: Claude Code cannot read files outside
  its own repo, so the anti_ai_slop block must live here, not just in
  MONARCH_DOCTRINE.md).

  After this block, CLAUDE.md should continue with:
  - a token digest copied from design.md (colors with roles, type scale,
    spacing scale, radius/shadow policy)
  - the sentence: "design.md is binding; QA per agency doctrine Section 5;
    every completed task ends with a QA REPORT table."
  - project-specific infra notes (static HTML/CSS/JS, Cloudflare Pages
    Direct Upload, no Supabase, no booking form — WhatsApp/call/maps only)
-->

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

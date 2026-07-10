━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
MONARCH SCALING AGENCY — CANONICAL BUILD DOCTRINE v1.0
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Status: permanent reference. Audience: Claude Sonnet, Claude Opus, Claude Code, and the humans supervising them. Purpose: ship a distinctive, conversion-optimized, bilingual (HU/UA) static-site demo in 2–5 prompts instead of 10–15, and produce the same quality every time, in every session, on every project.

The two failure modes this document eliminates:

1. AI-slop regression — without standing orders, every model drifts toward the statistical average of the web (Inter headlines, purple gradients, identical card recipes, the same section order). Fix: Section 3's hard bans, physically present in every context that generates UI.
2. Quality oscillation — discipline that lives only in chat context dies with the context. Fix: discipline lives in fixed artifacts (this document, the per-project design.md, the per-project CLAUDE.md, the mandatory QA REPORT), not in memory. Sections 5 and 8 are enforcement mechanisms, not suggestions.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
SECTION 0 — OPERATING LOOP AND ARTIFACT MAP
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

The pipeline, in order. No stage may be skipped.

- STAGE 1 — Kickoff brief. Fill the template in Section 7 with the client. STOP rule: unanswered critical fields (marked ●) block progress. Never invent answers.
- STAGE 2 — Design Decision Record (DDR). Run the Section 1 question sequence. Output: a 10-line DDR.
- STAGE 3 — Design tool pass. Assemble the Claude Design / Google Stitch brief = filled brief + DDR + the `<anti_ai_slop>` block from Section 3, pasted verbatim at the end. One draft at a time — never request parallel variations. If an old site exists, state explicitly in the brief: "existing site is a STRUCTURE reference only, never an aesthetic reference."
- STAGE 4 — design.md. Claude Code writes the design tool's output into `/design.md` at the project root, in the skeleton defined in Section 7-B, with the DDR at the top. design.md is the single binding source of truth for all visual decisions. Nothing visual is ever decided outside it.
- STAGE 5 — CLAUDE.md assembly. Every project's CLAUDE.md contains, in this order: (1) the `<anti_ai_slop>` block from Section 3 at the very top, (2) a token digest copied from design.md (colors with roles, type scale, spacing scale, radius/shadow policy), (3) the sentence "design.md is binding; QA per agency doctrine Section 5; every completed task ends with a QA REPORT table," (4) project-specific infra notes.
- STAGE 6 — Build. Prompt budget for a demo: P1 = full scaffold from design.md (Opus, high effort), P2 = real-content pass both languages, P3 = QA-report-driven fixes, P4–P5 = client-requested tweaks. If you are past P5 and still correcting fundamentals, the failure is upstream — go back to design.md, do not keep patching.
- STAGE 7 — Every Claude Code task ends with the QA REPORT (Section 5-V). A task without the table is not complete and must be rejected by the planner.
- STAGE 8 — Before anything is shown to the agency or client, Sonnet/Opus runs the Section 8 rubric. Any FAIL → fix first, never present with silent FAILs.

Session hygiene rules (anti-oscillation, non-negotiable):

- One project per Claude Code session. Never carry one project's aesthetic context into another — cross-contamination is a primary cause of "everything looks the same."
- After `/compact` or any long noisy session: re-confirm out loud that CLAUDE.md's anti-slop block and design.md authority are in effect before the next UI-generating edit. Compaction is where slop regression happens.
- Grep before every find/replace. If the target string matches 0 times or more than once when exactly one was expected: stop and report, never guess.
- Read-only tasks (audit, inventory) are labelled "Read-only — do not modify any file."

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
SECTION 1 — PROJECT-KICKOFF DECISION FRAMEWORK
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Run these questions in this exact order for every new client, before any design work. Each has a required answer format. ● = blocking: no answer, no progress.

- K1 ● Business reality. What does the client sell, to whom, at what price point relative to local competitors? Answer format: one sentence + one of {budget / mid-market / premium}. This positions everything: a premium winery and a budget tire service must not share a visual vocabulary.
- K2 ● Primary conversion action. Exactly ONE of: call / route–visit / view menu / submit inquiry form / donate / order online. Everything on the page ranks below this one action. If the client names two, force a ranking; the second becomes secondary CTA styling only.
- K3 ● Audience snapshot. Age band, device assumption, language priority. Default assumption for local Transcarpathian businesses: mobile-majority traffic (†1). Language: which is the default on load (HU or UA), which is the toggle; for NGOs add EN/DE ranking.
- K4 ● Dominant emotional adjective. Pick exactly ONE from a controlled vocabulary; one secondary allowed; never three. Vocabulary: warm · rooted/heritage · precise · generous · calm · bold · industrious · festive · trustworthy · artisanal · monumental · playful. This adjective governs every later tie-break ("if design.md is silent, choose the boldest option consistent with the adjective").
- K5 ● Competitor differentiation. Name 2–3 competitor sites in the same category and region. Identify each one's visual cliché in five words. Write one sentence: "We will NOT look like ___ because we will do ___ instead." This sentence goes into the DDR verbatim.
- K6 ● Content inventory reality check. For each planned section: does real copy exist (HU? UA?), do real photos exist, does a logo file exist (format?). Anything missing becomes a named placeholder — `[PHOTO: cellar interior, horizontal]`, `[COPY: founder story, UA pending]` — never invented content, never lorem ipsum, never stock.
- K7 Archetype selection. From the Section 2 library, pick one and commit. Record the reason in one sentence tied to K4. Check the agency variation log (Section 2 intro): never repeat the exact archetype + headline font + accent color triple within three consecutive projects.
- K8 Constraint lock. Confirm: static HTML/CSS/JS only; Cloudflare Pages Direct Upload; Supabase yes/no and for what; bilingual mechanism decision — separate page trees (`/hu/`, `/ua/`) with `hreflang`, or JS toggle (default recommendation: separate trees for >3 pages, JS toggle for one-pagers); performance budget Lighthouse Mobile ≥ 90.
- K9 The deliberate imperfection. Name ONE human touch for this project: a hand-drawn accent, an asymmetric grid break, a paper/grain texture, an off-grid detail, a slight rotation motif. One, named, committed.
- K10 Assemble the DDR. Ten lines: client / sector / adjective (+secondary) / conversion action / audience+device / languages+default / archetype / font pairing / palette roles (60-30-10 hexes) / the imperfection / the K5 differentiation sentence. The DDR goes verbatim at the top of design.md.

Worked micro-example (fictional, illustration only): a family thermal guesthouse → K1: mid-market rural wellness, HU-speaking families and Uzhhorod weekenders. K2: call to book. K4: warm (secondary: rooted). K5: "We will NOT look like the county's teal-template pension sites because we will use editorial photography blocks and a paper-warm palette instead." K7: Hospitality archetype, softened. K9: hand-underlined price accents.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
SECTION 2 — INDUSTRY ARCHETYPE LIBRARY
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

These are STARTING points, not mandates. The project's design.md always overrides. The K4 adjective may pull an archetype across category lines (a playful winery exists; a monumental café does not have to be warm). Two standing rules:

- Variation log: after every shipped project, record one line — archetype + headline font + accent hex. The exact triple must not repeat within three consecutive projects. This mechanically prevents the agency's portfolio converging on one look.
- Glyph gate (blocking, all archetypes): every font in design.md must render Hungarian **Á á É é Í í Ó ó Ö ö Ő ő Ú ú Ü ü Ű ű** and Ukrainian **і ї є ґ**. Test strings: `Árvíztűrő tükörfúrógép` and `ґанок · їжак · єдність · місто`. Hungarian ő/ű live in the *latin-ext* subset; Ukrainian letters in *cyrillic* — check the font's Glyphs/Subsets on its Google Fonts page before committing, and verify on the built page via DevTools → Computed → Rendered Fonts (a silent fallback to a system font mid-word is a FAIL) (†2). Every pairing below lists a broad-coverage alternate for exactly this reason.

**A) LUXURY / PREMIUM PRODUCT (winery, premium goods) — "Stark Editorial"**

- Fonts: headline **Prata** (Cyrillic-native didone) or **Cormorant Garamond** 500–600 (never below 32px — it's too thin small). Body: **Source Serif 4**; sans alternative **Arsenal** (Ukrainian-designed — culturally resonant; run the glyph gate on Hungarian). Safe alternates: **Playfair Display** + **Alegreya**.
- Color logic: near-monochrome restraint. 60% warm ivory/paper (never pure #FFF — e.g. #F7F3EA), 30% deep product-derived ink (oxblood, deep plum, bottle green, espresso — from the product world, never "purple because premium"), 10% one muted metallic-adjacent accent (brass/gold as FLAT color) reserved for hairline rules and the single CTA. No gradients anywhere.
- Layout: editorial single-column rhythm; asymmetric 5/7 desktop splits; oversized numerals or initial caps; 1px hairline rules; enormous whitespace; border-radius: 0 sitewide; shadows: none (hairlines do the separation).
- Motion: near-stillness. One slow (600–800ms) opacity + 2–4px translate on the hero only. Hover = underline-draw or ink→accent color shift. Nothing scales, nothing bounces.
- Why it works on this audience: affluent 35–65 buyers have decades of training on print luxury codes — wine labels, fashion editorial — where high-contrast serifs and emptiness signal confidence. Scarcity of decoration is price-anchoring: a page that doesn't try hard implies the product doesn't have to. Whitespace also produces the gallery-label effect: the product photograph becomes the artwork, the page its caption. Any busyness reads as discounting.
- Lazy default to avoid: charcoal background + gold script font + parallax. Swap script for a didone, parallax for stillness.

**B) HOSPITALITY (café / restaurant) — "Warm Human"**

- Fonts: headline **Yeseva One** (glyph-gate ő/ű) or **Alegreya** 700 (safe). Hand-drawn accent font — **Caveat** or **Neucha** — used for a MAXIMUM of 1–2 accents per page (a circled price, a margin note), never for body or navigation. Body: **Nunito Sans** or **Mulish**.
- Color logic: appetite palette. 60% warm cream/butter paper; 30% food-derived deep tone (espresso, terracotta, olive); 10% appetite accent (paprika red, burnt orange, pistachio) on CTA and price tags. Blue never dominant for food contexts (documented appetite suppressant) unless the brand identity forces it.
- Layout: menu-board asymmetry; practical info (hours, address, phone, today's special) inside the first viewport; sticky bottom bar on mobile with Call / Directions / Menu; polaroid-style photo cards with −1° to +1.5° rotation as the sanctioned imperfection; soft radius 8–12px allowed here.
- Motion: cheap and playful — hover lifts a tilted card to 0° rotation; one marquee strip maximum; zero scroll-jacking.
- Why it works on this audience: the decision is made on foot, on a phone, in under ten seconds — "is it open, where is it, does it look good, what does it cost." Warm hues and visible informality lower the social threshold for walking in; hand-drawn imperfection signals a human proprietor with taste, which is the whole trust proposition of an independent café against chains. The thumb-zone CTA bar converts the exact moment of decision.
- Lazy default to avoid: full-bleed dark hero photo with white script "Welcome." Replace ceremony with information.

**C) NON-PROFIT / CHARITY — "Trust Ledger"**

- Fonts: headline **Bitter** 700–800 (slab = institutional steadiness) or **Literata**. Body: **Source Sans 3** or **PT Sans**. Metadata (dates, places, categories) in **IBM Plex Mono** small caps/uppercase labels.
- Color logic: 60% white/paper; 30% near-black ink at high contrast (older donor demographic + WCAG AA are the same requirement here); 10% one warm human accent (deep red, ochre) reserved EXCLUSIVELY for the donate action — the donate color appears nowhere else on the site. That exclusivity is what makes it findable.
- Layout: newsroom/ledger grid — dateline-first news feed, dense-but-ordered card index for institutions, visible metadata chips (date · place · category), table-like structures; language switcher (HU · UA · EN · DE) as text labels top-right, never flags-only (flags are countries, not languages); radius 2–4px maximum; shadows minimal or none.
- Motion: essentially none. On an NGO, animation reads as money spent on decoration.
- Why it works on this audience: donors and institutional partners scan for legitimacy artifacts — dates, registration numbers, named humans, physical addresses, recent activity. A dated, ordered feed proves the organization is alive; visual austerity signals funds go to mission, not marketing. EN/DE presence signals international accountability to foreign partners. Photography must be documentary-real or a neutral labelled placeholder — staged stock imagery of smiling children is the single fastest trust-destroyer in this category.
- Lazy default to avoid: hands-holding-a-heart hero, teal/orange palette, carousel of stock beneficiaries. All three banned.

**D) PROFESSIONAL SERVICES / AGENCY — "Technical Mono / Bento"**

- Fonts: headline **IBM Plex Mono** SemiBold (tight tracking) for mono-brutalism, or **Unbounded** (glyph-gate) / **Golos Text** Black for a grotesque take. Body: **IBM Plex Sans** or **Onest**.
- Color logic: 60% ONE committed flat ground (paper-white OR near-black — no alternating section stripes); 30% ink; 10% one signal color (electric lime, signal orange, cobalt) used like a highlighter on data points and the CTA. 1px borders instead of shadows, everywhere. Radius 0.
- Layout: bento grid with deliberately unequal cells; visible grid lines; metrics as first-class content; spec-sheet motifs (`01 / SERVICE`, `02 / PROCESS` labels); the agency's own numbers where real ones exist, otherwise none.
- Motion: crisp and fast (120–200ms), things snap into place; hover = border thickens or full invert; at most one typewriter effect per site.
- Why it works on this audience: the site is the portfolio — for buyers of digital services, visual sameness is direct evidence of incompetence. An aesthetic built on monospace, visible grids, and numbers implies an agency that measures things, which transfers straight to perceived campaign competence. Snappy, decisive interaction primes "these people are decisive." This category is the global epicenter of AI slop (the purple-gradient SaaS template), so the differentiation payoff is largest here.
- Lazy default to avoid: purple→blue gradient, floating blobs, fake client-logo marquee. Absolute bans.

**E) INDUSTRIAL / TECHNICAL SERVICE — "Spec Sheet"**

- Fonts: headline **Oswald** 500–600 (condensed, Cyrillic) — alternates **Sofia Sans Condensed** or **Golos Text** Black. Body: **PT Sans** or **Golos Text**. Data/spec tables: **PT Mono** or **IBM Plex Mono**.
- Color logic: 60% concrete/steel neutral (warm light grey or near-black — commit to one); 30% ink; 10% safety accent (safety yellow, signal red, or the brand color) on CTA and an optional literal hazard-stripe texture accent (the sanctioned imperfection for this archetype). Radius 0.
- Layout: full-width horizontal bands; big verified numbers (tonnage, capacity, years, response time); spec tables; numbered process steps; an oversized `tel:` phone number in the header — this audience calls, it does not fill forms. Certificates and licenses shown as scannable items, not prose claims.
- Motion: none to minimal; a counter may count up once; nothing floats, ever.
- Why it works on this audience: this is risk-reduction buying — numbers, certificates, and response times beat adjectives every time. Heavy condensed type is a load-bearing metaphor: typographic weight signals physical capability. Users are often older, pragmatic, on-site, on a phone, possibly gloved — hence 48px+ targets, phone-first CTA, and brutal load speed on poor rural connections. Structural conventionality is a feature here (Jakob's Law): novelty reads as unreliability in this vertical; distinctiveness comes from weight, color, and honesty of data, not from layout tricks.
- Lazy default to avoid: blue corporate template + handshake stock photo + "Quality is our priority." Ban handshake imagery and empty quality slogans; replace with numbers and certificates.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
SECTION 3 — HARDCODED ANTI-AI-SLOP RULES + THE LITERAL BLOCK
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Each ban below is testable. The detection method is what makes it enforceable.

- S1 Headline type ban: Inter, Roboto, Arial, Open Sans, system-ui — never as headline type. Poppins, Montserrat, Lato — banned as unconsidered defaults (permitted only if design.md names them with a written reason). Detect: grep HTML `<link>` font URLs and all `font-family` declarations.
- S2 Gradient ban: purple→blue, teal→purple, "aurora"/mesh gradients, glassmorphism cards on gradient grounds, `background-clip:text` gradient headlines. Detect: grep `linear-gradient|radial-gradient|conic-gradient|backdrop-filter` — every hit must be justified by design.md.
- S3 Card-recipe ban: one identical `border-radius` + `box-shadow` recipe on every component. Detect: if ≥3 distinct component classes share the exact same radius+shadow pair and design.md doesn't define it as a system token, it's slop.
- S4 Template-sequence ban: centered hero → 3-column icon-feature grid → testimonial carousel → 3-column footer link stack. Detect: read the section order top to bottom; if it matches, restructure before shipping.
- S5 Illustration ban: floating abstract 3D blobs; plastic-smooth AI illustration; flat "Corporate Memphis" people. Also banned: AI/stock photography of the "diverse team at laptop" genre. Replacement is always a labelled placeholder block; real photos come from the client later.
- S6 Motion bans: the same fade-in scroll reveal on every element; importing an animation library for one fade; scroll-jacking; hover states that only change opacity. Every hover must change at least one non-opacity property (color, border, transform, underline).
- S7 Content-honesty bans: fake testimonials, fake client logos, invented statistics ("500+ happy clients"), lorem ipsum in anything shown to a client. Numbers and testimonials only from the brief; if absent, the section is omitted entirely.
- S8 Copy-slop ban: "Elevate", "Unlock", "Seamless", "Empower", "state-of-the-art", "In today's fast-paced world", "Look no further" — and their Hungarian/Ukrainian calques. Emoji as icons or in headings — banned in production copy.
- S9 Translation-integrity rule: never silently machine-translate copy between HU and UA. A drafted translation is permitted only when explicitly requested, and must carry `<!-- TODO: human review UA -->` (or HU) at the block. Missing language content becomes `[COPY: … UA pending]`, never an invented paragraph.
- S10 Uniformity smell: identical vertical padding + centered-title-subtitle pattern on every section; a dark-mode toggle nobody asked for; a fake floating chat blob. All banned by default.

**The literal block.** Paste verbatim (1) at the END of every Claude Design / Google Stitch brief, (2) at the TOP of every CLAUDE.md, (3) re-assert after every `/compact`. This version supersedes all earlier, shorter versions — keep exactly one copy per file.

```
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
```

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
SECTION 4 — CONVERSION PSYCHOLOGY AS MECHANICAL RULES
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Every principle resolves to IF → THEN, verifiable by inspection.

**F-pattern (scanning of text-heavy pages: menus, feeds, lists).**
- IF the page is list/text-heavy, THEN left-align primary content and put the differentiating word FIRST in every heading and link ("Bográcsgulyás — 280 UAH", not "Our wonderful traditional…"). Verify: read only the first two words of each line top-to-bottom — the page must still make sense.
- IF a list exceeds 5 items, THEN break it with a subheading every 4–6 items (scanners hop headings, they do not read).
- IF metadata exists (date, price, place), THEN it sits in a consistent right-side or below-title slot, never mixed into the left scanning column.

**Z-pattern (sparse, hero-led landing pages).**
- IF the page is a low-text landing, THEN: logo top-left; primary nav/CTA top-right; hero message left-to-center; and a primary CTA in the lower half of the FIRST viewport. Verify at both 375px and 1200px: scroll position zero must show one accent-styled CTA.

**Fitts's Law (target acquisition = size + distance).**
- ALL tap targets ≥ 48×48 CSS px with ≥ 8px gaps (†3). IF two interactive elements share an edge, THEN add the gap or merge them.
- IF K2's conversion action is call/route, THEN mobile gets a sticky bottom bar (screen edges are "infinite" targets) with `tel:` and maps links.
- The primary CTA is the largest button on the page, and the ONLY accent-filled element per viewport. IF a card is clickable, THEN the whole card is the link (stretched-link pattern) — and inner links get explicit z-index handling.
- IF information appears on hover, THEN it must also be visible or tappable on touch — mobile has no hover.

**Jakob's Law (users live on other sites; conventions are free usability).**
- Logo top-left links home. Language switcher top-right, text labels. Cart top-right if shop. Hamburger only below the desktop breakpoint. Links look like links; buttons look pressable.
- Distinctiveness is spent on aesthetics (type, color, texture, composition) — NEVER on interaction patterns. IF an interaction needs explaining, THEN it's wrong.
- Banned: mystery-meat icon navs, custom broken scrollbars, hover-only critical info.

**KISS.**
- One page = one primary action. Verify: count accent-filled CTAs above the fold — exactly 1.
- Local-business landing: 5–7 sections maximum; nav items ≤ 5. IF a section serves neither the primary action nor a trust requirement, THEN cut it.
- Forms: name + one contact channel + message. Every extra field costs conversions. No CAPTCHA on demos — honeypot field instead.
- Local trust pack (mandatory for this niche): name, address, phone (NAP) identical everywhere it appears, visible in the first viewport or header AND in the footer, with working `tel:` (+380…) and maps links.

**60/30/10 color distribution.**
- Define exactly three role tokens in `:root`: `--c-ground` (~60%, page background), `--c-ink` (~30%, text/structure), `--c-accent` (~10%). Semantic red/green for errors/success may exist outside the ratio.
- The accent may appear ONLY on: primary CTA, active nav state, form focus, and ≤ 2 decorative accents per page. IF accent appears on body text or large background fields, THEN violation.
- Contrast: ink-on-ground ≥ 4.5:1 minimum (aim 7:1 for body); accent used as text must itself pass 4.5:1, otherwise accent is fill-only behind ink-contrast text.

**8-point spacing grid.**
- Token scale in `:root`: 4 / 8 / 12 / 16 / 24 / 32 / 48 / 64 / 96 / 128. All margin/padding/gap values come from it. Exceptions: 1–2px borders, letter-spacing, optical nudges ≤ 2px.
- ONE section-rhythm pair per project (e.g., 96px desktop / 64px mobile between sections), applied everywhere.
- Verify: grep the stylesheet for px values; any 13px / 27px / 35px-style stray (outside the exceptions) is a violation.
- Type sizes and line-heights follow the TYPE scale, not the 8-pt grid — don't force them.

**Typographic hierarchy.**
- Exactly one `<h1>` per page. All sizes from one modular scale (e.g., ratio 1.25: 16 → 20 → 25 → 31 → 39 → 49 → 61px, rounded); no ad-hoc `font-size`.
- Body ≥ 16px (17–18px preferred), line-height 1.5–1.7, measure capped: `max-width: 65ch` on every prose container. Headline line-height 1.05–1.2; negative letter-spacing only ≥ 32px; ALL-CAPS only for short labels and only with ≥ +0.05em tracking.
- Adjacent hierarchy levels must differ by at least TWO of: size step, weight (≥ 200 units), color, case.
- Text blocks longer than 3 lines are left-aligned, never centered.
- Never body text in italic + light weight + small serif — the worst readability combination. Body is upright.
- Dominance check: in DevTools, disable images — the h1 must remain the visually dominant element on the page.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
SECTION 5 — MANDATORY TECHNICAL PRE-FLIGHT / SELF-QA (CLAUDE CODE)
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Rules are ID'd so prompts can reference them ("run C and V only"). A task is complete ONLY when it ends with the QA REPORT (V-block).

**A — Process (before touching code)**
- A1 Read design.md and CLAUDE.md in full before the first edit of a session.
- A2 Grep the exact target string before any find/replace. 0 or >1 matches when 1 expected → stop, report, do not guess.
- A3 Scope lock: touch only the named files/sections. After editing, verify via diff/read-back that nothing else moved.
- A4 Never invent missing copy, stats, or translations (see S7–S9).

**B — HTML / head**
- B1 `<meta charset="utf-8">` is the first element in `<head>`; all files saved UTF-8 (otherwise HU/UA text mojibakes).
- B2 Correct `lang` per page: `<html lang="hu">` / `<html lang="uk">` — the Ukrainian language code is `uk`, NOT `ua` (ua is the country TLD). With separate trees, add `hreflang="hu"` / `hreflang="uk"` / `x-default` link pairs.
- B3 Unique `<title>` + meta description per page per language; viewport meta present; favicon set; og:title/description/image.
- B4 Every `<img>` has explicit `width` + `height` attributes (or CSS aspect-ratio) — CLS source #1. Decorative images get `alt=""`; content images get real alt text.
- B5 No `href="#"` stubs in a delivered demo — real anchors or remove. External links: `target="_blank"` always with `rel="noopener"`.
- B6 Anchor targets get `scroll-margin-top` = fixed-header height + 16px, or sections hide under the sticky navbar.

**C — CSS**
- C1 Cascade order law: shared `base.css` (tokens, typography, navbar, footer) loads LAST in `<head>` — after any inline `<style>`, before `</head>` — so it wins at equal specificity. Multi-page sites: design system lives in that ONE shared stylesheet, never duplicated per page (per-page duplication is the root of design drift).
- C2 Bare element selectors (`p`) never override scoped ones (`.card p`) — scope your overrides. Mobile floor: `max-width` media query + `!important` where needed; desktop pin: `min-width`, so it can't break mobile.
- C3 Hidden fullscreen overlays: resting state = `opacity:0; visibility:hidden; pointer-events:none`; `.open` = `visibility:visible; pointer-events:auto`. Opacity alone leaves an invisible click-eating layer that, combined with scroll-lock, freezes the page.
- C4 Scroll-lock symmetry: if opening an overlay sets `overflow:hidden` on body, EVERY close path (X, backdrop, Esc, link tap) removes it. Orphaned scroll-lock = frozen site.
- C5 Hero-less pages (cart, checkout, legal): navbar gets the permanent solid/"scrolled" class IN MARKUP, not via JS — a transparent navbar puts light links on light background, invisibly.
- C6 Card grids: `align-items:start` yields ragged bottoms → use stretch + `margin-top:auto` on card footers. Galleries: no aspect-ratio override on `:first-child`; images get `width/height:100%` + `object-fit:cover` for consistent frames.
- C7 Full-height sections: `min-height:100dvh` (with a `100vh` fallback line above it), never `svh` here.
- C8 No horizontal overflow at 375px. Common causes: `100vw` with scrollbar, long unbroken words/URLs, negative margins, absolutely-positioned decor. Hungarian compound words are long — set `hyphens:auto` on prose (works with correct `lang`, B2) and `overflow-wrap:break-word` as backstop.
- C9 Z-index tokens only: `--z-nav:100; --z-overlay:200; --z-modal:300; --z-toast:400`. No arbitrary 9999.
- C10 Every animation/transition wrapped in `@media (prefers-reduced-motion: no-preference)` (or a reduced-motion kill switch). Hover effects never change layout — animate `transform`/`opacity`/`color`, not width/margin.
- C11 Never remove focus outlines (`outline:none`) without a visible `:focus-visible` replacement.

**D — JavaScript**
- D1 Script load-order law: a top-level inline script must NEVER call a global defined in a `defer`red external file — the ReferenceError kills everything after it in that block (including hamburger wiring). Inline code that references externals runs inside `DOMContentLoaded` (defer scripts execute before it), or the external loses `defer` and loads first.
- D2 Hamburger resilience: `onclick="toggleMenu()"` inline on the button as fallback, AND `toggleMenu` defined as a plain top-level function in a script that loads before interaction is possible — not buried inside a listener or after fragile code.
- D3 Shared script across pages: every `querySelector` result is null-checked, or each feature lives in its own IIFE with early return — one page's missing element must not throw and kill wiring for everything below it.
- D4 Console-zero: 0 errors and 0 warnings from own code at load AND after interacting (open/close menu, toggle language, submit empty form) on both viewports.
- D5 Forms: labels bound (`for`/`id`), correct `type`/`inputmode`/`autocomplete`, honeypot anti-spam, visible success AND error states, button disabled during submit. Supabase failures must surface a message — never silent. Supabase notes: secrets are case-sensitive and live immediately without redeploy; admin panel is direct-URL only (`/admin`), no UI entry point.

**E — Performance / assets**
- E1 LCP image: `<img>` (not CSS background) with `fetchpriority="high"` + `<link rel="preload">`; NEVER `loading="lazy"` on above-fold images. Everything below the fold: `loading="lazy" decoding="async"`.
- E2 Images: WebP via sharp pipeline, `srcset` including a real mobile size, `sizes` attribute. Large background images get media-query-swapped mobile versions.
- E3 Fonts: `preconnect` to fonts.gstatic.com (crossorigin), `font-display:swap`, preload only WOFF2s actually used, only weights actually used. Subsets must include latin-ext (Hungarian ő/ű!) and cyrillic — see the Section 2 glyph gate.
- E4 Non-critical scripts `defer`; no dead library imports (no animation library for one fade).
- E5 Target: Lighthouse Mobile ≥ 90, CLS = 0 — measured via F12 → Lighthouse → Mobile in INCOGNITO. pagespeed.web.dev is secondary only (caches, needs live domain).

**F — Bilingual specifics**
- F1 Glyph gate on the built page: select text containing ő/ű and і/ї/є/ґ → DevTools → Computed → Rendered Fonts must show the intended family, not a fallback.
- F2 Both language versions exist for every delivered page, or missing ones are explicitly flagged as placeholders — never half-translated pages presented as done.
- F3 Language switcher: preserves the current page where a counterpart exists (not always back to home); JS-toggle variant persists choice in localStorage.
- F4 Dates, phone (+380…), currency (UAH/₴) formatted consistently per language convention.

**G — Deploy (Cloudflare Pages Direct Upload)**
- G1 No build step exists: plain files only. Physically delete TS remnants, Lovable exports, `supabase/` folders before upload — `.cfignore` does not work.
- G2 All filenames lowercase, no spaces, no accented characters (á→a). Local Windows is case-insensitive; the CDN is not — `Logo.PNG` vs `logo.png` breaks only in production.
- G3 Root-relative asset paths (`/css/base.css`) so nested pages (`/hu/rolunk/`) resolve correctly.
- G4 Custom `404.html` at root; `_redirects` for the language root (`/  /hu/  302`) and `_headers` for caching/security are supported on Pages (†4). Test the very first `_redirects`/`_headers` deploy immediately after upload — history shows dashboard drag-and-drop uploads have occasionally failed to parse these files even when the same files work via CLI upload. If it doesn't fire, fall back to a JS redirect in the root `index.html`, or use the JS-toggle bilingual mechanism instead of separate trees for that project.

**V — Verification protocol + QA REPORT (mandatory, every task)**
- V1 Live DevTools, incognito, hard reload with cache disabled. NEVER diagnose layout from a screenshot or PDF export.
- V2 375×812 responsive view: no horizontal scroll — run in console:
  `document.documentElement.scrollWidth === document.documentElement.clientWidth` and, to find offenders:
  `[...document.querySelectorAll('*')].filter(e => e.getBoundingClientRect().right > document.documentElement.clientWidth + 1)`
- V3 1200px+ view: layout verified separately. A desktop fix is never assumed to hold on mobile, and vice versa.
- V4 Interaction pass on BOTH viewports: menu open/close (scroll restored), overlay paths, language toggle, empty + valid form submit, anchor links vs sticky header.
- V5 Console-zero confirmed (D4). V6 Glyph gate confirmed (F1). V7 Lighthouse Mobile score recorded as a number.

Completion format — the task's final output MUST be:

```
QA REPORT
Viewport 375px .......... PASS/FAIL (+note)
Viewport 1200px ......... PASS/FAIL
Horizontal overflow ..... none / offender list
Console ................. 0 errors, 0 warnings / list
Interactions (V4) ....... PASS/FAIL per item
Glyph gate (F1) ......... PASS/FAIL
Lighthouse Mobile ....... <number>
Scope diff clean (A3) ... PASS/FAIL
Items not run ........... <IDs + reason>
```

A "Done!" without this table is not done. The planner rejects it.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
SECTION 6 — MODEL-SPECIFIC EXECUTION: SONNET vs OPUS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Routing rule of thumb: **>2 files, or >~150 changed lines, or any change to the layout/design system → Opus. Known-cause fix in one file → Sonnet.** When genuinely unsure, Opus for anything the client will see for the first time.

**Sonnet — targeted execution.** Suited for: exact find/replace (pre-grepped), single-file bug with diagnosed cause, wiring a known pattern (C3 overlay, D2 hamburger), copy swaps, running a QA block. Prompt shape:

```
FILE: /hu/index.html
CONTEXT: <one line: what is broken and the diagnosed root cause>
TASK: replace exact string "<verified, occurs once>" with "<new>"
SCOPE: nothing else changes — no other files, sections, styles
VERIFY: run QA V1–V5; output QA REPORT
Model: Sonnet · effort: low
```

Risk profile: may patch the symptom, not the cause → require a one-line root-cause statement in the prompt (write it yourself after diagnosis) so Sonnet fixes the right thing. Keep to ONE task per prompt; small context.

**Opus — system-level execution.** Suited for: full scaffold from design.md, multi-page/multi-section rebuilds, extracting a shared base.css across pages, cross-file debugging, anything requiring design judgment *within* the design.md system. Prompt shape:

```
BINDING: /design.md and CLAUDE.md (anti_ai_slop at top) govern all decisions.
TASK: <full spec — rebuild specs may be long and detailed>
ACCEPTANCE CRITERIA: <numbered, checkable>
SCOPE: only files listed; no unrequested features, sections, or "improvements"
PLAN FIRST for rebuilds: read all files, output a plan, then execute.
VERIFY: full Section 5 QA (A–G + V); output QA REPORT
Model: Opus · effort: high
```

Risk profile: may over-build (unrequested niceties, extra sections) → the explicit "no unrequested features" line is mandatory, and A3 diff-check catches the rest.

**Regardless of which model executed:** (1) diff for scope creep; (2) any NEW UI gets the anti-slop self-check even in a "small fix" session; (3) both viewports, always, separately; (4) console-zero; (5) QA REPORT present or the work bounces. After `/compact`: re-assert design.md authority and the anti-slop block before the next UI edit — this is the exact moment quality historically regresses.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
SECTION 7 — PROJECT-KICKOFF BRIEF TEMPLATE + design.md SKELETON
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

**7-A. The brief (fill for every client; ● = blocking; English, because it feeds the design tools).**

```
CLIENT: ●
SECTOR / ARCHETYPE (Section 2): ●
PRICE POSITION: budget / mid / premium ●
PRIMARY CONVERSION ACTION (exactly one): ●
SECONDARY ACTION (optional):
AUDIENCE (age band, device assumption, buying context): ●
LANGUAGES + DEFAULT ON LOAD: ●        BILINGUAL MECHANISM: /hu/+/ua/ trees | JS toggle
DOMINANT ADJECTIVE (one, +optional secondary): ●
COMPETITORS (2–3 URLs) + their visual cliché: ●
DIFFERENTIATION SENTENCE ("We will NOT look like ___ because ___"): ●
PAGES LIST: ●
REAL COPY STATUS per section (HU? UA? missing → placeholder name): ●
ASSETS: logo (format?), photos (y/n, subjects), brand colors if any: ●
NAP: name / address / phone (+380…) / hours / socials: ●
TECH: Supabase y/n (for what) · forms y/n · special features:
FONT PAIRING (from Section 2, glyph-gate passed): headline ___ / body ___ / accent ___
PALETTE ROLES: --c-ground ___ · --c-ink ___ · --c-accent ___ (60/30/10)
THE DELIBERATE IMPERFECTION (one, named):
PERFORMANCE BUDGET: Lighthouse Mobile ≥ 90, CLS 0
OLD SITE (if any): URL ___ — STRUCTURE reference ONLY, never aesthetic
BANNED-ELEMENTS ACK: anti_ai_slop v1.0 applies in full
DEADLINE / DEMO DATE:
```

Design-tool submission rules: real, literal copy in the brief (explicit ban on invented text/sections); explicit ban on AI/stock photos — placeholder blocks instead; exact font-family strings; strict scope-lock phrasing on revisions ("modify only this section, touch nothing else"); one draft at a time; the `<anti_ai_slop>` block pasted at the very end.

**7-B. design.md required skeleton** (Claude Code writes this to `/design.md`; every heading mandatory):

1. DDR (the 10 lines from K10, verbatim)
2. TOKENS — colors with 60/30/10 roles (hex), full type scale (family/size/weight/line-height per level), 8-pt spacing scale, radius policy, shadow policy, z-index tokens
3. TYPOGRAPHY RULES — pairing, glyph-gate result, per-language notes (hyphenation, measure)
4. LAYOUT — archetype, grid definition, section order with per-section layout spec
5. COMPONENTS — navbar (incl. hero-less solid variant), footer, buttons (primary/secondary/hover), cards, forms, language switcher
6. MOTION SPEC — what moves, durations (ms), easings, reduced-motion behavior
7. IMAGERY TREATMENT — aspect ratios, object-fit, placeholder-block visual spec
8. THE IMPERFECTION — where exactly it appears
9. BANNED CONFIRMATION — "anti_ai_slop v1.0 applies; no exceptions beyond those written here"

If a later request conflicts with design.md, design.md is updated FIRST, then the code — never the reverse.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
SECTION 8 — PLANNER SELF-CHECK RUBRIC (ANTI-OSCILLATION GATE)
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Run by Sonnet/Opus (the planner) on its own output before ANYTHING is declared finished to the agency or client. PASS/FAIL each line; any FAIL → fix first. Never present with a silent FAIL.

1. TRACEABILITY — every visual decision traces to design.md; zero invented design decisions. FAIL if any choice exists only "because it looked right."
2. SLOP SCAN — S1–S10 checked (grep fonts, gradients, radius/shadow recipe, section order, hovers, copy vocabulary).
3. ANY-BRAND TEST — could each section ship for an unrelated brand with zero edits? If yes for any section: FAIL, redesign that section.
4. ADJECTIVE TEST — does the page communicate the ONE K4 adjective within 3 seconds of looking?
5. SCOPE — only requested changes present; diff clean; no unrequested "improvements."
6. CONTENT HONESTY — no invented facts, stats, testimonials, translations; placeholders labelled; both languages present or explicitly flagged.
7. QA REPORT — present from Claude Code, all PASS or exceptions listed and accepted.
8. VIEWPORTS — explicit statement that 375px and 1200px were verified separately, live.
9. PERFORMANCE — Lighthouse Mobile number stated, ≥ 90.
10. TOKEN CONSISTENCY — `:root` token values byte-identical across all pages and identical to the previous session's (this is the direct oscillation detector: today's fonts/colors match yesterday's strings exactly).
11. GLYPH GATE — F1 confirmed on real HU + UA text.
12. HONEST RESIDUAL — name one thing a competent human designer would still improve. (Forces calibrated appraisal; "nothing" is itself a FAIL.)

Why this works as the oscillation fix, in one paragraph: quality varied because the discipline lived in whichever chat happened to contain it. From now on the discipline lives in four fixed artifacts that are structurally impossible to skip — this doctrine, the per-project design.md, the anti-slop block at the top of every CLAUDE.md, and the QA REPORT that every task must end with. A session that "forgot" the standards cannot produce a passing Section 8 run, so the regression is caught at the gate instead of by the client.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
FOOTNOTES — FLAGGED ASSUMPTIONS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

- (†1) Mobile-majority traffic assumed for local Transcarpathian small businesses; if a client's analytics say otherwise, K3 overrides.
- (†2) Font subset claims (Cyrillic + latin-ext) reflect best knowledge at write time; Google Fonts coverage changes. That's why the glyph gate is a hard, per-project verification step rather than trust in this list. Freely-licensed Ukrainian families (e-Ukraine, Fixel) are legitimate self-host alternatives if a Google Fonts pick fails the gate.
- (†3) 48px tap floor chosen to satisfy both Android (48dp) and iOS (44pt) guidance with one number.
- (†4) `_redirects`, `_headers`, and custom `404.html` are supported on Cloudflare Pages including Direct Upload projects per official docs, but dashboard drag-and-drop uploads have a documented history of occasionally failing to parse these files correctly even when the identical files work via Wrangler CLI upload. Verify on the first deploy that uses them; keep the JS-redirect / JS-toggle fallback in mind if the dashboard path fails.
- (†5) The 2–5-prompt budget assumes Stages 1–5 were actually completed; the historical 10–15 corrections were requirements being discovered late, so the fix is front-loading, not faster patching.
- (†6) Archetype→category mappings are defaults; the K4 adjective and design.md always win over this library. Nothing here presumes the design language of any current live project.

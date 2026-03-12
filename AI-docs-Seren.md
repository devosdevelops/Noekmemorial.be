# AI Docs Seren

## Date
- 2026-03-12

## Session Setup
- Agent instructed to follow `AGENT-PLAYBOOK.md` rules for all work in this project.
- Agent instructed to log all changes, decisions, and prompting notes in this file, mirroring the format of `AI-docs.md` and `AI-Docs-Audrey.md`.

## Active Rules (from AGENT-PLAYBOOK.md)
- Reuse existing components and CSS tokens before creating anything new.
- All spacing from 8pt scale; typography from `:root` tokens in `src/assets/styles.css`.
- Mobile-first responsive — mobile → tablet → desktop.
- Assets registered in `src/config/asset-paths.js`, never inline.
- Routes must be deploy-safe (vercel.json + .htaccess fallbacks).
- Animations via `v-scroll-reveal`; 300ms ease-out standard, 500ms for menu.
- Definition of done: build passes, direct URL works, no overflow at any breakpoint.

---

## Date
- 2026-03-12

## Request
- Create a dedicated FAQ page (`/faq`) based on provided mobile, tablet, and desktop screenshots.
- Hero with breadcrumb + large "FAQ" title, FAQ image background, matching the about-page hero structure.
- List of 7 accordion items (all collapsed by default, single-open accordion).
- "Je antwoord niet gevonden?" strip with link to `/contact`.
- Desktop: 2-column accordion grid. Tablet/Mobile: single column.

## Files Created
- `src/pages/faq-page.vue` — full FAQ page component.

## Files Modified
- `src/router/index.js` — added `/faq` route importing `FaqPage`.
- `src/components/site-header.vue` — updated `F.A.Q` nav link from `/#faq` to `/faq`.
- `src/components/site-footer.vue` — updated `F.A.Q.` footer link from `/#faq` to `/faq`.

## Implementation Notes
- Hero mirrors `about-page.vue` pattern exactly: same `min-height`, `align-items: end`, background image + gradient stack.
- FAQ image asset `assetPaths.images.faq` (`/assets/images/faq.png`) was already registered in `asset-paths.js` — no new asset entry needed.
- Accordion uses CSS `grid-template-rows: 0fr / 1fr` transition for smooth expand/collapse without JavaScript height measurement.
- Chevron (▼) rotates 180° via CSS when `.is-open` class is present on the parent `.faq-item`.
- Desktop 2-column layout uses `grid-template-columns: 1fr 1fr` at `70rem` breakpoint (matching playbook's intentional high breakpoint for accessibility).
- All colors use existing tokens (`--color-primary`, `--color-text`, etc.); accordion background uses `rgba(110, 75, 216, 0.18/0.28)` inline since no semi-transparent variant token exists.
- `v-scroll-reveal` applied to intro text, accordion grid, and "no answer" strip.

## Build Validation
- `npm run build` passed: 86 modules, no errors, 1.11s.

## Decisions
- Changed F.A.Q nav/footer links from `/#faq` (home section anchor) to `/faq` (dedicated page), since a standalone page now exists.
- Single-open accordion (clicking open item closes it, opening a new one closes the previous) for clarity and visual simplicity.
- Placeholder answer content written in Dutch to match the existing site language and Noek product context.

---

## Date
- 2026-03-12

## Follow-up Fix (FAQ Accordion)
- User reported the FAQ looked wrong in-browser: collapsed answers were still visibly taking space under the question rows, and the active row showed a harsh default browser outline.

## Applied Changes
- Fixed collapsed accordion rows so closed answers are fully hidden:
	- Added `min-height: 0` to `.faq-answer-text`.
	- Added explicit visibility switching on `.faq-answer` for closed/open states.
- Replaced the default browser focus border on the question button with a controlled focus-visible outline that matches the site better.

## Result
- Closed FAQ items no longer leak body text into the layout.
- Keyboard focus remains accessible, but the visual treatment is intentional instead of browser-default.

---

## Date
- 2026-03-12

## Follow-up Fix (FAQ Desktop Spacing)
- User reported the FAQ spacing still looked wrong on wider screens: the two-column layout had large empty gaps between rows.

## Root Cause
- The FAQ used a single CSS grid with two columns.
- In that setup, each row takes the height of the tallest item in the row, so shorter items in the opposite column leave visible dead space underneath.

## Applied Changes
- Reworked the FAQ list into two independent vertical columns instead of one shared two-column grid.
- Left column now renders the first half of the list.
- Right column now renders the remaining items.
- Kept the same mobile behavior by collapsing the layout back to a single column below the desktop breakpoint.

## Result
- Desktop spacing now packs naturally with no shared row-height gaps.
- The structure matches the provided mockup more closely.

---

## Date
- 2026-03-12

## Follow-up Fix (FAQ Question Gaps)
- User reported the vertical space between question rows was still too large after the column-layout change.

## Root Cause
- The previous accordion used a grid-track collapse pattern for the answer region.
- Even with visibility fixes, the closed panel behavior was still leaving more layout space than intended in this component.

## Applied Changes
- Replaced the answer animation model:
	- from `grid-template-rows: 0fr / 1fr`
	- to `max-height: 0 / 16rem` with `overflow: hidden`
- Added opacity transition so closed states remain visually clean while taking zero vertical space.

## Result
- Closed FAQ items now collapse flush under the question row.
- The vertical spacing between questions is tighter and closer to the reference layout.

---

## Date
- 2026-03-12

## Follow-up Fix (FAQ Close Animation)
- User requested that closing an FAQ item should animate smoothly instead of snapping shut.

## Root Cause
- The current implementation used a fixed `max-height` plus `visibility` toggling.
- That approach can feel abrupt on close because the panel is hidden immediately and the animation is based on a guessed height instead of the real content height.

## Applied Changes
- Replaced the FAQ answer collapse with a Vue `transition` using measured heights.
- Added enter/leave hooks that animate from `0` to the element's real `scrollHeight`, then back to `0` on close.
- Removed the explicit `visibility` toggling and fixed-height accordion logic.

## Result
- FAQ answers now open and close smoothly.
- The animation follows the real content height, so it stays consistent if the copy changes later.

---

## Date
- 2026-03-12

## Request
- Create a Privacybeleid page (`/privacybeleid`) with all 13 sections of provided legal text.
- Match the visual style of About and FAQ pages (same hero pattern, same token usage).
- Desktop/tablet screenshots provided; mobile showed title-only hero on flat background.

## Files Created
- `src/pages/privacy-page.vue` — full privacy policy page.

## Files Modified
- `src/router/index.js` — added `/privacybeleid` route importing `PrivacyPage`.
- `src/components/site-footer.vue` — updated `Privacybeleid` footer link from `#` to `/privacybeleid`.

## Implementation Notes
- Hero follows the exact same pattern as `about-page.vue` and `faq-page.vue`: same `min-height`, `align-items: end`, background image + gradient stack.
- Reused `assetPaths.images.faq` for the hero background (same flower image as screenshots show, no dedicated privacy image in `/public/assets/images/`).
- Added "Laatst bijgewerkt: 5/03/2026" subtitle under the hero title, styled with `--type-small-*` tokens.
- Section headings use `--color-primary-deep`, `--font-poppins`, `--type-h3-size` — matching the purple heading color visible in the mockup.
- Sub-categories (e.g. "Accountgegevens", "Inhoud binnen het platform") use a subtle left border accent (`rgba(110, 75, 216, 0.25)`) to visually group them under their parent section without adding a third heading level.
- Address block uses `<address>` semantic element with `font-style: normal` override.
- Breadcrumb hidden on mobile (same rule as about/faq pages).
- All spacing from 8pt tokens; no hardcoded values.

## Build Validation
- `npm run build` passed: 88 modules, no errors, 1.05s.

# AI Docs Audrey

## Date
- 2026-03-12

## Request
- Wire favicon and web app manifest assets so browsers and installed web apps can resolve them correctly.
- Keep a record of changes and decisions in this file.

## Changes Made
- Updated head tags in index.html to include all relevant favicon and manifest links:
  - /assets/logos/favicon.ico
  - /assets/logos/favicon.svg
  - /assets/logos/favicon-96x96.png
  - /assets/logos/apple-touch-icon.png
  - /assets/logos/site.webmanifest
- Added `meta name="theme-color"` with `#ffffff` to align with the manifest theme color.

## Decisions
- Used root-relative `/assets/logos/...` URLs because files in `public/` are served from the site root by Vite.
- Kept manifest path as `/assets/logos/site.webmanifest` to match the actual location and existing icon references.
- Did not move any files because the current folder structure is valid and already consistent with the manifest.

## Validation Notes
- Confirmed logo and manifest assets exist under `public/assets/logos`.
- Confirmed no `public/assets/images/logos` directory exists.

---

## Date
- 2026-03-12

## Prompt Refinement (Contact Page)
- User feedback after first implementation:
  - Keep the contact hero image consistent with Home.
  - Set all contact form input border radii to exactly 10px.
  - Update this docs file with prompt/answer learnings.

## Applied Follow-up Changes
- Contact page hero now uses the same visual background stack as Home:
  - Same `assetPaths.images.heroBackground` source image.
  - Same radial + linear gradient treatment order as the Home hero.
  - Removed custom mobile-only decorative hero overlay to avoid style drift.
- Contact form field corners updated:
  - `input` and `textarea` use `border-radius: 10px`.

## Prompting Notes For Next Iterations
- If visual parity with an existing section is required, prompt explicitly with:
  - "Reuse the exact background layers from [component name], not just the same image asset."
- If exact pixel values are required despite tokens, prompt explicitly with:
  - "Use exact value X for this property on these selectors."
- Ask for a compact delta summary after revisions:
  - "List only what changed since previous response."

---

## Date
- 2026-03-12

## Prompt Refinement (Contact Form Alignment)
- User feedback after second implementation:
  - The `Naam` input looked stretched compared to `Voornaam`.
  - Keep updating this document after each correction cycle.

## Applied Follow-up Changes
- Fixed name row alignment so both first and last name inputs keep matching input heights:
  - Updated `.name-row` to `align-items: end` in `src/pages/contact-page.vue`.

## Prompting Notes For Next Iterations
- If two controls must visually match in height, include this in the prompt explicitly:
  - "Ensure [field A] and [field B] have identical control height, not just equal column width."
- When a field should keep structure but not reserve visible label space, specify alignment expectation:
  - "Keep accessibility label, but align control bottoms so row inputs remain equal-height."

---

## Date
- 2026-03-12

## Prompt Clarification (Submit Button State)
- User correction:
  - The submit button should remain visible at all times.
  - The issue was visual state only: it looked disabled and must appear in default active state.

## Applied Follow-up Changes
- Updated the contact form submit button styling in `src/pages/contact-page.vue`:
  - Default state now uses active primary styling (filled purple background, white text).
  - Hover and active feedback aligned with existing button interaction language.
  - No conditional rendering added; button stays visible continuously.

## Prompting Notes For Next Iterations
- When discussing state behavior, separate visibility from appearance in one sentence:
  - "Keep always visible, but style as default enabled state (not disabled appearance)."
- Include a quick correction phrase when changing previous instructions:
  - "Ignore prior visibility logic request; apply only visual-state correction."

---

## Date
- 2026-03-12

## Prompt Refinement (Hero Breakpoint Matching)
- User feedback after submit-state fix:
  - Desktop header hero should visually match the tablet reference.
  - Mobile hero should match the latest provided screenshot.
  - Continue updating this document after each correction.

## Applied Follow-up Changes
- Updated contact hero styling by breakpoint in `src/pages/contact-page.vue`:
  - Desktop/tablet: softened banner treatment with the same hero image and a light overlay for parity with tablet comp.
  - Mobile (`max-width: 48rem`): removed banner image and used a light background with decorative geometric overlays to match provided mobile look.
- Kept existing content structure and spacing rhythm intact.

## Prompting Notes For Next Iterations
- If one breakpoint is the visual source of truth for another, prompt explicitly with:
  - "Use [tablet/mobile/desktop] comp as the exact visual reference for [target breakpoint]."
- For hero adjustments, separate content and skin in the prompt:
  - "Keep hero content/layout unchanged; update only background/art-direction per breakpoint."

---

## Date
- 2026-03-12

## Prompt Clarification (Hero Composition Intent)
- User clarification:
  - Desktop/tablet hero should match the provided banner crop exactly.
  - Meaning: hero image area shows breadcrumb + title only; supporting intro/CTA content sits below as separate sections.

## Applied Follow-up Changes
- Refactored top-of-page composition in `src/pages/contact-page.vue`:
  - Desktop/tablet hero now contains only breadcrumb and page title over banner background.
  - Added separate desktop/tablet intro section (text + FAQ link) below hero.
  - Added separate desktop/tablet contact-CTA strip (mail + demo button) below intro.
  - Mobile keeps stacked hero content (title + intro + FAQ + actions) consistent with provided mobile design.

## Prompting Notes For Next Iterations
- When sharing a cropped design, specify whether it defines full-section composition or only background style:
  - "Treat this crop as full layout structure for this section, not only a color/image reference."

---

## Date
- 2026-03-12

## Prompt Clarification (Remove Top Buttons)
- User refinement:
  - Remove the top CTA buttons from the contact page.
  - Keep other sections/structure unchanged.

## Applied Follow-up Changes
- Updated `src/pages/contact-page.vue`:
  - Removed mobile hero button group.
  - Removed desktop/tablet contact CTA button group.
  - Kept intro/copy and form layout intact.
  - Removed unused `BaseButton` import and related button-specific styles.

## Prompting Notes For Next Iterations
- If only specific controls must be removed, state scope explicitly:
  - "Remove only the hero/top CTA buttons; keep form submit button unchanged."

---

## Date
- 2026-03-12

## Prompt Clarification (Hero Size Parity)
- User refinement:
  - Contact header looked more cropped than Over ons.
  - Requirement: make Contact hero the same size behavior as Over ons.

## Applied Follow-up Changes
- Updated `src/pages/contact-page.vue` hero sizing to match `about-page.vue` values:
  - `min-height` aligned to `clamp(13rem, 22vw, 17.5rem)`.
  - Vertical padding aligned to `var(--space-40) var(--space-0)`.
  - Inner spacing aligned (`gap: var(--space-24)` and `padding-bottom: var(--space-8)`).

## Prompting Notes For Next Iterations
- When comparing two sections for parity, include the exact reference target:
  - "Match sizing to [about-page hero] using identical min-height/padding values."

---

## Date
- 2026-03-12

## Prompt Clarification (Between Hero And Form)
- User refinement:
  - Keep header image as-is.
  - Make the sections between hero and contact form match Figma exactly.

## Applied Follow-up Changes
- Updated `src/pages/contact-page.vue` middle sections:
  - Re-enabled intro and CTA strips (text band + beige action band) for tablet/desktop widths.
  - Restored action controls in CTA strip (`info@noek.be` chip + `Boek Demo` button).
  - Limited the alternate mobile hero treatment to small phones only (`max-width: 30rem`) so tablet-like view matches Figma composition.

## Prompting Notes For Next Iterations
- If section fidelity is required, call out the exact zone:
  - "Match only the block between hero and form; keep hero and form unchanged."

---

## Date
- 2026-03-12

## Prompt Clarification (Interest Page Scale)
- User refinement:
  - New `Toon je interesse` page felt zoomed in.
  - Requirement: align measurements with `contact-page` rhythm.

## Applied Follow-up Changes
- Updated `src/pages/interest-page.vue` scale to match contact conventions:
  - Intro paragraph moved from large heading scale to body scale.
  - Form labels, inputs, helper copy, and radio option text reduced to contact-like typography sizes.
  - Form section padding aligned to contact section spacing (`48/64`).
  - Added larger-screen title adjustment to prevent oversized heading feel on tablet/desktop.

## Prompting Notes For Next Iterations
- If a page feels visually enlarged, request explicit parity target:
  - "Match typography and spacing scale to [contact-page] for all form controls and intro copy."

---

## Date
- 2026-03-12

## Prompt Clarification (Interest Submit State)
- User refinement:
  - Interest page `Verzenden` had the same issue as contact before: looked disabled.
  - Requirement: keep button in default enabled state.

## Applied Follow-up Changes
- Updated `src/pages/interest-page.vue` submit button styling:
  - Default state now uses primary filled style (purple background, white text).
  - Added hover and active interaction states aligned with existing button motion/language.

## Prompting Notes For Next Iterations
- For submit controls, explicitly distinguish style intent from behavior intent:
  - "Keep submit always visible and style as default enabled CTA."

---

## Date
- 2026-03-12

## Prompt Clarification (Interest Form Spacing)
- User refinements:
  - Keep label-to-input spacing at 8px.
  - Keep input block spacing at 16px on mobile and 32px on desktop.
  - Add 8px gap between radio labels and radio option rows.

## Applied Follow-up Changes
- Updated `src/pages/interest-page.vue` spacing rules:
  - `.field-group` keeps `gap: var(--space-8)` (label to control).
  - `.interest-form` uses `gap: var(--space-16)` by default (mobile).
  - `.interest-form` switches to `gap: var(--space-32)` at desktop (`min-width: 48.0625rem`).
  - `.radio-group` now uses `gap: var(--space-8)` to match the requested label-to-radiobutton spacing.

## Prompting Notes For Next Iterations
- For spacing requests, include explicit mapping by relationship:
  - "Label-to-control: X, block-to-block mobile: Y, block-to-block desktop: Z."

---

## Date
- 2026-03-12

## Prompt Clarification (Radio Label-To-Block Spacing)
- User clarification:
  - The 8px gap request specifically means: spacing between each radio-group label and the radio-button block below.

## Applied Follow-up Changes
- Updated `src/pages/interest-page.vue` to enforce explicit radio-group spacing:
  - Radio group container gap set to `0` to avoid ambiguous stacked spacing.
  - Added `margin-bottom: 8px` on `.radio-group > .field-label`.
  - Kept helper text with explicit bottom spacing for consistent rhythm.

## Prompting Notes For Next Iterations
- When specifying spacing around grouped controls, define exact anchor points:
  - "Gap between legend/label and options row should be Xpx."

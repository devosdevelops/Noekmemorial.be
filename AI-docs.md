# AI Build Notes

## Goal
Implement a Vue homepage based on the provided desktop, tablet, and mobile mockups, with reusable components, responsive reflow, and tokenized styling.

## Tech Setup
- Created a minimal Vue 3 + Vite project.
- Entry files:
  - `index.html`
  - `src/main.js`
  - `src/App.vue`
  - `vite.config.js`

## Componentization Strategy
Reusable patterns were extracted into components to reduce duplication:

- `src/components/site-header.vue`
  - Desktop nav + CTA.
  - Mobile burger + collapsible menu.
- `src/components/site-logo.vue`
  - Shared logo rendering for header/footer.
- `src/components/base-button.vue`
  - Variant-based button (`primary`, `outline`, `soft`) used across sections.
- `src/components/hero-section.vue`
  - Hero title, subtitle, and two actions.
- `src/components/content-section.vue`
  - Reusable section wrapper for title + body copy and surface tone.
- `src/components/how-it-works-section.vue`
  - Split content/media section, reorders on smaller breakpoints.
- `src/components/mission-card.vue`
  - Reusable card for vision/mission content.
- `src/components/mission-vision-section.vue`
  - Composes two mission cards.
- `src/components/site-footer.vue`
  - Footer brand, links, legal, social.
- `src/components/scroll-top-button.vue`
  - Floating back-to-top action.

## Styling System
Global styles are in `src/assets/styles.css`.

### CSS Custom Properties
Added tokenized variables for:
- Colors
- Typography families
- Fluid type sizes
- Spacing scale (multiples of 8 + explicit 4/0)
- Border radii
- Container width

### Typography
- Root font size set to `16px`.
- Body/UI families use Google Fonts:
  - Outfit
  - Poppins
- Added `@font-face` entries for local Ambella (normal + italic, weight 400).
  - Included commented path examples so local font files can be plugged in later.

### Fluid Text Requirement
Implemented scalable text sizes with `clamp()` + `calc(rem + vw)` patterns.

## Responsive Behavior
Breakpoints are used to match rearrangements visible in the provided screens:
- Desktop: two-column and wider nav layouts.
- Tablet: compressed spacing and stacked section transitions.
- Mobile: major reflow:
  - Header switches to burger menu.
  - Split feature section stacks.
  - Mission cards adapt to text/image side-by-side behavior.
  - Footer condenses into compact columns.

## Naming Conventions
- CSS classes and IDs use kebab-case.
- Script variables use camelCase.

## Notes / Follow-up
- Visual media in mockups were approximated with gradients/placeholders due to missing image assets.
- If exact images are provided, replace decorative background blocks with real assets.
- Footer legal links currently use placeholders (`#`) and can be wired to actual routes/pages.

## Asset Plug-in Paths
- Added central asset config: `src/config/asset-paths.js`
- Paths are split explicitly by category:
  - `logos`
  - `images`
  - `fonts`
- Added usage guide: `ASSET-PATHS.md`

## Social Icons
- Footer social icons now use `lucide-vue-next` instead of text placeholders.
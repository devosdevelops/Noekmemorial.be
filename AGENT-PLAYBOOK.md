# Noek Agent Playbook

This document is for an AI coding agent that needs to extend this website with new pages while staying consistent with the current implementation.

## 1) Project Purpose

This codebase is a Vue + Vite website for Noek. The current implementation is a landing page with reusable UI building blocks, design tokens, and responsive behavior already set up.

Primary goal when adding pages:
- Reuse existing components first.
- Reuse global typography/spacing/color tokens.
- Keep responsive behavior aligned with the existing system.

## 2) Tech Stack

- Vue 3 (SFCs)
- Vue Router 4
- Vite
- CSS (global tokens + component-scoped styles)
- Lucide icons (`lucide-vue-next`)

Entry points:
- `index.html`
- `src/main.js`
- `src/App.vue`
- `src/router/index.js`

## 3) Existing Building Blocks (Use These First)

Core reusable components:
- `src/components/base-button.vue`
- `src/components/site-logo.vue`
- `src/components/site-header.vue`
- `src/components/site-footer.vue`
- `src/components/content-section.vue`
- `src/components/mission-card.vue`
- `src/components/scroll-top-button.vue`

Landing-composition components (can be reused or copied as patterns):
- `src/components/hero-section.vue`
- `src/components/how-it-works-section.vue`
- `src/components/mission-vision-section.vue`

Page-level blocks:
- `src/pages/home-page.vue`
- `src/pages/about-page.vue`
- `src/pages/contact-page.vue`
- `src/pages/interest-page.vue`

Routing block:
- `src/router/index.js` (route map + hash scroll behavior)

Behavior building block:
- `src/directives/scroll-reveal.js` (directive name: `v-scroll-reveal`)

## 4) Design System Source of Truth

All global visual tokens are in:
- `src/assets/styles.css`

Always use existing custom properties for:
- Colors
- Typography roles (h1/h2/h3/h4/body/link/button/label/small + landing h1)
- Spacing scale (`--space-*`)
- Radius and container size
- Responsive page gutters (`--page-gutter`)

Do not hardcode random spacing/font/color values unless absolutely necessary.

## 5) Typography Rules

Typography tokens are already mapped to the design system and use fluid sizing (`calc(rem + vw)`).

Important:
- Base font size is 16px (`html { font-size: 16px; }`).
- Reuse typography tokens from `:root` in `src/assets/styles.css`.
- For new text styles, define new role tokens in `:root` first, then use them.
- Hero title uses a dedicated landing token (`--type-landing-h1-*`) with mobile base 56px.

## 6) Spacing & Sizing Rules

Use the 8pt system consistently:
- Preferred spacing values are multiples of 8.
- Allowed special values: 4 or 0 if needed.
- Width can be full/auto when layout requires it.

Responsive side gutters are already configured globally:
- Mobile: 16px
- Tablet: 56px
- Desktop: 128px

Use `.section-container` for page horizontal layout whenever possible.

## 7) Asset Management

Asset paths are centralized in:
- `src/config/asset-paths.js`

Actual assets live under public paths:
- `/assets/images/...`
- `/assets/logos/...`
- `/fonts/...`

When adding a new page image/logo:
1. Put file under `public/assets/...`
2. Add mapping in `asset-paths.js`
3. Consume path via the config object

Reference guide:
- `ASSET-PATHS.md`

Recently added About-page mappings:
- `images.aboutHeroBackground`
- `images.aboutWhat`

## 8) Header/Menu Behavior Constraints

Header behavior is custom and should remain consistent:
- Desktop: full top nav
- Mobile/Tablet: hamburger menu
- Mobile drawer: slides from top, starts below header, height is viewport minus header.
- Tablet drawer: slides from right, starts below header, height is viewport minus header.
- Header stays visible while drawer opens
- Desktop/HB switch breakpoint is intentionally high (currently `70rem`) for accessibility/font scaling buffer.
- Desktop nav links must not wrap.
- `Home` must be present in both desktop and drawer navs, and logo must link to landing page (`/`).
- Header links support hover/active underline (2px rounded border-style underline effect) and current page state color `#694ec4`.

If you change header behavior, ensure:
- No nav link wrapping on desktop
- Drawer transitions remain smooth
- Existing breakpoints remain intentional

## 9) Motion Rules

Current motion conventions:
- Most interactions/transitions use 300ms ease-out
- Menu open/close uses slower timing per design updates (`500ms ease-in-out`)
- Scroll reveal uses `v-scroll-reveal` (IntersectionObserver)
- Respect reduced motion preferences

For new animated sections:
- Prefer `v-scroll-reveal` instead of custom JS animation logic.

## 10) How to Add a New Page (Recommended Workflow)

1. **Plan from existing blocks**
   - Start with: header + page sections + footer.
2. **Compose with reusable sections/components**
   - Reuse `content-section`, `base-button`, `mission-card`, etc.
3. **Use only tokenized styling**
   - Pull from `styles.css` custom properties.
4. **Make responsive from the start**
   - Mobile first, then tablet, then desktop.
5. **Add reveal effects where appropriate**
   - Use `v-scroll-reveal` with small delays.
6. **Wire assets via config**
   - No scattered inline file paths.
7. **Register route + page shell**
   - Add route in `src/router/index.js`.
   - Add page component under `src/pages/` and compose with existing header/footer.
8. **Validate**
   - Run `npm run build` and resolve any issues.

## 11) Navigation & Linking Rules

- This project is now multi-page (router-based), not a pure single-page anchor app.
- For links to sections on the homepage, use route-aware hash links (example: `/#features`, `/#faq`, `/#contact`).
- For page links, use route paths (example: `/over-ons`).
- Current key page routes include `/over-ons`, `/contact`, and `/toon-je-interesse`.
- Shared navigation components (`site-header.vue`, `site-footer.vue`) must keep links route-aware as new pages are added.
- Keep header/footer links synchronized with router entries.

## 12) Deployment Routing Rules (Critical)

- The app uses Vue Router history mode (`createWebHistory`).
- Any new route must be deploy-safe: direct URL access and page refresh on that route must resolve to `index.html`.
- Vercel fallback is configured in `vercel.json` and must be kept when adding routes.
- Combell/Apache fallback is configured in `public/.htaccess`; ensure rewrite support is enabled in hosting.
- If a new route works locally but fails in production with 404, verify host-level rewrites before changing app code.

## 13) Coding Conventions

- CSS classes/ids: kebab-case
- JS variables/functions: camelCase
- Keep component APIs small and focused
- Avoid introducing new patterns when an existing one works

## 14) Definition of Done for New Pages

A page is considered done when:
- Uses existing building blocks where possible
- Matches current visual system (tokens, spacing, typography)
- Works at mobile/tablet/desktop
- No obvious wrapping/overflow issues
- Animations are subtle and consistent
- Build succeeds (`npm run build`)
- Direct URL access to the new route works in deployed environments (no host 404).

## 15) Useful Commands

- Install dependencies: `npm install`
- Start dev server: `npm run dev`
- Production build: `npm run build`
- Preview build: `npm run preview`

## 16) Contact-Page Prompting Clarifications (Learned Rules)

Use these rules when implementing or refining `/contact`:

- **Separate visibility from visual state in prompts and implementation**
   - If a button should remain visible, do not add conditional rendering.
   - If a button "looks disabled", update styling only unless explicitly told to change behavior.

- **When asked to match another page section, mirror exact sizing values**
   - For hero parity (example: Contact vs Over ons), copy the same `min-height`, vertical `padding`, and inner spacing (`gap`/`padding-bottom`) unless instructed otherwise.

- **Treat breakpoint composition and skin as separate concerns**
   - Composition = which blocks appear at a breakpoint.
   - Skin = colors/background/overlay of a block.
   - A screenshot of one breakpoint must not automatically remove/add blocks on another breakpoint unless explicitly requested.

- **Scope button-removal requests explicitly**
   - "Remove top CTA buttons" means hero/intro CTA controls only.
   - Keep the contact form submit button unless the request explicitly includes it.

- **Between-hero-and-form zone on Contact page**
   - When design indicates it, preserve both intermediate strips:
      1. Intro text + FAQ link strip.
      2. Contact options strip (mail/demo actions).
   - Do not collapse these into the hero unless the design requires a stacked mobile variant.

- **Use shared tokens, but allow exact values when explicitly requested**
   - Keep 8pt spacing and token usage by default.
   - Use exact pixel values (example: 10px input radius) when the user asks for strict parity.

## 17) Interest-Page Clarifications (Learned Rules)

Use these rules when implementing or refining `/toon-je-interesse`:

- **Base responsive behavior on Contact page patterns when only mobile design is provided**
   - Use the provided mobile design as content/source of truth.
   - Derive tablet/desktop rhythm (spacing, typography scale, section flow) from `contact-page.vue` unless explicitly overridden.

- **"Zoomed" visual feedback means scale parity, not structural rewrite**
   - First align intro/body/form typography to contact-level tokens.
   - Then align section paddings and control sizing before changing layout structure.

- **Form spacing must be specified by relationship, not only by component**
   - Label-to-control gap: 8px.
   - Block-to-block gap: 16px on mobile, 32px on desktop.
   - Radio-group label-to-options row gap: explicit 8px (set directly, not implied by unrelated container gaps).

- **Submit button state guidance is shared with Contact page**
   - If requested as "default state", use enabled primary CTA appearance.
   - Do not hide/disable unless the prompt explicitly asks for behavior changes.

- **Keep CTA intent route-aware**
   - "Toon je interesse" CTAs should target `/toon-je-interesse`.
   - Contact-specific actions remain on `/contact`.

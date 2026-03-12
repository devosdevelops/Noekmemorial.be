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
- Shared navigation components (`site-header.vue`, `site-footer.vue`) must keep links route-aware as new pages are added.
- Keep header/footer links synchronized with router entries.

## 12) Coding Conventions

- CSS classes/ids: kebab-case
- JS variables/functions: camelCase
- Keep component APIs small and focused
- Avoid introducing new patterns when an existing one works

## 13) Definition of Done for New Pages

A page is considered done when:
- Uses existing building blocks where possible
- Matches current visual system (tokens, spacing, typography)
- Works at mobile/tablet/desktop
- No obvious wrapping/overflow issues
- Animations are subtle and consistent
- Build succeeds (`npm run build`)

## 14) Useful Commands

- Install dependencies: `npm install`
- Start dev server: `npm run dev`
- Production build: `npm run build`
- Preview build: `npm run preview`

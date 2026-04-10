# Noek Marketing Website

This is the repo for the Marketing Website for Noek. Noek is a digital memorial builder that will be sold as a white label SaaS.

## For Collaborators

When working with AI agents on this codebase:

- Use `AGENT-PLAYBOOK.md` as the implementation guide for creating new pages.
- Ask agents to reuse existing components and design tokens before creating new patterns.
- Keep all new pages aligned with existing responsive behavior and spacing/typography rules.

### Design Handoff for New Pages

To get accurate responsive builds, always provide screen exports for the page in multiple sizes:

- Mobile export
- Tablet export
- Desktop export

Recommended handoff details:

- Target widths (or device frames) for each export
- Hover/active states for interactive elements
- Any spacing or typography exceptions from the current design system

This helps agents build layouts that match design intent across breakpoints.

## AI Prompt Template (Copy/Paste)

Use this when asking an AI agent to build a new page for this project:

```md
Build a new page in the existing Noek Vue codebase.

1) Page Goal
- Page name: [e.g. Over Ons]
- Purpose: [what this page should achieve]
- Target route/path: [e.g. /over-ons]

2) Design Inputs (required)
I am attaching the design screens in this chat for:
- Mobile
- Tablet
- Desktop

Use those attached images as the responsive source of truth.

3) Must-follow Project Rules
- Reuse existing building blocks/components first.
- Follow AGENT-PLAYBOOK.md for architecture and styling conventions.
- Use global design tokens and typography tokens from the existing system.
- Keep spacing on 8pt system (allow 4/0 only when needed).
- Keep responsive behavior aligned with existing patterns.
- Use kebab-case for classes/ids and camelCase in scripts.
- Use existing asset path workflow for logos/images/fonts.

4) Implementation Expectations
- Add/compose components needed for this page.
- Keep header/footer/navigation behavior consistent with current site.
- Add subtle reveal/interaction effects only if present in design.
- Do not add extra features not shown in design.
- Implement accessibility by default (semantic structure, keyboard support, aria labels where needed, reduced-motion respect).

5) Validation
- Run npm run build and ensure it passes.
- Summarize:
	- files changed
	- what was reused
	- assumptions made
	- missing assets or unclear design details
```

## Requirements

- Node.js (recommended: current LTS)
- npm

## Development

Install dependencies:

```bash
npm install
```

Start the local development server:

```bash
npm run dev
```

## Production

Build for production:

```bash
npm run build
```

Preview the production build locally:

```bash
npm run preview
```

## Deployment Routing (Important)

This project uses Vue Router history mode (`createWebHistory`).
Direct visits to routes like `/over-ons` require host-level fallback rewrites to `index.html`.

### Vercel

The rewrite is already configured in `vercel.json`:

```json
{
	"rewrites": [
		{ "source": "/(.*)", "destination": "/index.html" }
	]
}
```

### Combell / Apache

Apache fallback rules are included in `public/.htaccess` and will be copied to `dist/.htaccess` on build.
Make sure `.htaccess` rewrites are enabled on the hosting environment.

If rewrites are not enabled, deep links and page refreshes on non-root routes will return 404.

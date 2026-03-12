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

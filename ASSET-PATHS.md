# Asset Paths Guide

Edit only `src/config/asset-paths.js` to plug in your real files.

Current synced files are already mapped to your provided assets.

## 1) Logo Paths
- `assetPaths.logos.main`
  - Full logo image (mark + wordmark in one file).
  - Example: `/assets/logos/noek-logo.svg`
- `assetPaths.logos.mark`
  - Optional standalone mark when `main` is empty.
  - Example: `/assets/logos/noek-mark.svg`

Used by:
- `src/components/site-logo.vue`

## 2) Image Paths
- `assetPaths.images.heroBackground`
  - Hero background image.
- `assetPaths.images.howItWorksThumb`
  - Video thumbnail image in “Hoe werkt Noek?”.
- `assetPaths.images.missionVision`
  - “Onze visie” image.
- `assetPaths.images.missionMission`
  - “Onze missie” image.
- `assetPaths.images.faq`
  - Reserved for a future FAQ section.
- `assetPaths.images.hands`
  - Reserved for a future section.

Examples:
- `/assets/images/banner.png`
- `/assets/images/aboutus.png`
- `/assets/images/vision.jpg`
- `/assets/images/mission.jpg`

Used by:
- `src/components/hero-section.vue`
- `src/components/how-it-works-section.vue`
- `src/components/mission-vision-section.vue`

## 3) Font Paths
Ambella is configured in:
- `src/assets/styles.css`

Template font paths in comments are:
- `/fonts/ambella-regular.woff2`
- `/fonts/ambella-regular.woff`
- `/fonts/ambella-italic.woff2`
- `/fonts/ambella-italic.woff`

Reference values also exist in:
- `assetPaths.fonts` inside `src/config/asset-paths.js`

## Suggested Folder Layout
- `public/assets/logos/...`
- `public/assets/images/...`
- `public/fonts/...`

Because these are public files, use paths that start with `/`.

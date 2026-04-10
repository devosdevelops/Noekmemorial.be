<template>
  <site-header />

  <main class="features-page">
    <section class="features-hero" aria-labelledby="features-title" v-scroll-reveal>
      <div class="section-container features-hero-inner" v-scroll-reveal="{ delay: 40 }">
        <p class="breadcrumb"><a href="/">Home</a> <span aria-hidden="true">&gt;</span> <span>Features</span></p>
        <h1 id="features-title" class="features-title">Features</h1>
      </div>

      <div class="features-hero-art" aria-hidden="true">
        <img src="/assets/graphics/chrysant.svg" alt="" />
      </div>
    </section>

    <section class="features-stack" aria-label="Features inhoud">
      <section class="page-section intro-section" aria-label="Features intro">
        <div class="section-container intro-content" v-scroll-reveal>
          <p class="intro-copy">
            Noek biedt uitvaartondernemingen een white label digitale herdenkingsruimte software aan. Hiermee kunnen
            nabestaanden herinneringen blijvend delen en koesteren, eender waar ze zijn.
          </p>

          <div class="feature-grid" v-scroll-reveal="{ delay: 30 }">
            <feature-card
              v-for="item in featureItems"
              :key="item.title"
              :title="item.title"
              :description="item.description"
              :icon="item.icon"
              :fallback="item.fallback"
            />
          </div>
        </div>
      </section>

      <section class="page-section how-section" aria-labelledby="how-title" v-scroll-reveal>
        <div class="section-container how-layout">
          <div class="how-list" v-scroll-reveal="{ delay: 30, origin: 'left' }">
            <h2 id="how-title" class="how-title">Hoe werkt Noek?</h2>
            <ol>
              <li v-for="step in steps" :key="step.title">
                <span class="step-circle">{{ step.number }}</span>
                <div class="step-copy">
                  <p class="step-title">{{ step.title }}</p>
                  <p v-if="step.subtitle" class="step-text">{{ step.subtitle }}</p>
                </div>
              </li>
            </ol>

            <div class="how-list-cta">
              <base-button href="/toon-je-interesse" label="Toon je interesse" block-mobile />
            </div>
          </div>

          <div class="how-media" v-scroll-reveal="{ delay: 60, origin: 'right' }">
            <figure v-if="videoPoster" class="video-card">
              <img :src="videoPoster" alt="Preview van Noek herdenkingsruimte" />
              <span class="play-badge" aria-hidden="true">▶</span>
            </figure>

            <figure v-if="howLogo" class="how-logo">
              <img :src="howLogo" alt="Noek logo" />
            </figure>
          </div>
        </div>
      </section>

      <section class="page-section preview-header" aria-labelledby="preview-title" v-scroll-reveal>
        <div class="section-container preview-header-inner">
          <span class="preview-icon-wrap" aria-hidden="true">
            <img v-if="previewIcon" :src="previewIcon" class="preview-icon" alt="" />
            <span v-else class="preview-icon-fallback">▭</span>
          </span>

          <div class="preview-copy">
            <h2 id="preview-title" class="preview-title">Previews</h2>
            <p class="preview-text">Hier zie je een kleine voorproever van hoe de software er uitziet voor de eindgebruiker</p>
          </div>
        </div>
      </section>

      <section class="page-section previews-section" aria-label="Noek app previews" v-scroll-reveal>
        <div class="section-container previews-shell">
          <div class="previews-desktop" v-scroll-reveal="{ delay: 30 }">
            <figure v-for="(screen, index) in screens" :key="`desktop-${index}`" class="preview-phone">
              <img v-if="screen" :src="screen" :alt="`Preview scherm ${index + 1}`" />
              <span v-else class="preview-placeholder">Preview {{ index + 1 }}</span>
            </figure>
          </div>

          <div class="previews-carousel" v-scroll-reveal="{ delay: 30 }">
            <div class="carousel-window">
              <div class="carousel-track" :style="carouselStyle">
                <figure v-for="(screen, index) in screens" :key="`mobile-${index}`" class="preview-phone carousel-slide">
                  <img v-if="screen" :src="screen" :alt="`Preview scherm ${index + 1}`" />
                  <span v-else class="preview-placeholder">Preview {{ index + 1 }}</span>
                </figure>
              </div>
            </div>

            <div class="carousel-dots" role="tablist" aria-label="Kies preview scherm">
              <button
                v-for="(_, index) in screens"
                :key="`dot-${index}`"
                type="button"
                class="dot"
                :class="{ 'is-active': activeSlide === index }"
                :aria-label="`Ga naar preview ${index + 1}`"
                @click="activeSlide = index"
              ></button>
            </div>
          </div>
        </div>
      </section>
    </section>
  </main>

  <site-footer />
  <scroll-top-button />
</template>

<script setup>
import { computed, ref } from 'vue';
import BaseButton from '../components/base-button.vue';
import FeatureCard from '../components/feature-card.vue';
import ScrollTopButton from '../components/scroll-top-button.vue';
import SiteFooter from '../components/site-footer.vue';
import SiteHeader from '../components/site-header.vue';
import { assetPaths } from '../config/asset-paths';

const activeSlide = ref(0);

const videoPoster = computed(() => assetPaths.images.featuresVideoThumb || '');
const howLogo = computed(() => assetPaths.logos.main || '');
const previewIcon = computed(() => assetPaths.icons.previewSection || '');

const screens = computed(() => [
  assetPaths.images.featuresPreviewOne,
  assetPaths.images.featuresPreviewTwo,
  assetPaths.images.featuresPreviewThree,
  assetPaths.images.featuresPreviewFour,
  assetPaths.images.featuresPreviewFive
]);

const carouselStyle = computed(() => ({
  transform: `translateX(-${activeSlide.value * 50}%)`
}));

const featureItems = computed(() => [
  {
    title: 'Whitelabel Platform',
    description: 'Je kan zelf je eigen huisstijl en kleuren toepassen op het product, zodat het perfect past binnen uw bedrijf',
    icon: assetPaths.icons.featureWhiteLabel,
    fallback: '✎'
  },
  {
    title: 'Immersive Atmosfeer',
    description: 'We maken gebruik van rustgevende geluiden en lichteffecten om een immersieve sfeer op te bouwen, zodat Noek meer is dan een webpagina.',
    icon: assetPaths.icons.featureAtmosphere,
    fallback: '◍'
  },
  {
    title: 'Meerdere Hosting Opties',
    description: 'Je kan Noek hosten op je eigen domein of op een van onze subdomeinen.',
    icon: assetPaths.icons.featureOwnDomain,
    fallback: '☁'
  },
  {
    title: 'Zeer personaliseerbaar',
    description: 'De inhoud van de kamer kan volledig worden aangepast naar de wens van de nabestaanden. Zo kan die perfect passen bij de geliefden die zij willen herdenken.',
    icon: assetPaths.icons.featurePersonalized,
    fallback: '▣'
  },
  {
    title: '3D Herdenkingsruimte',
    description: 'Een herdenkingsruimte die leeft in de browser, overal beschikbaar is',
    icon: assetPaths.icons.featureBrowser,
    fallback: '◫'
  }
]);

const steps = [
  { number: 1, title: 'Kies een template', subtitle: '' },
  { number: 2, title: 'Maak je herdenkingsruimte', subtitle: '' },
  { number: 3, title: 'Upload de herdenkingsruimte', subtitle: '' },
  { number: 4, title: 'Deel op sociale media of email', subtitle: '' }
];
</script>

<style scoped>
.features-hero {
  min-height: clamp(15rem, 26vw, 20rem);
  display: grid;
  align-items: center;
  padding: var(--space-56) 0 var(--space-32);
  position: relative;
  overflow: visible;
}

.features-hero-inner {
  display: grid;
  gap: var(--space-8);
  max-width: none;
  position: relative;
  z-index: 2;
}

.breadcrumb {
  margin: 0;
  display: inline-flex;
  align-items: center;
  gap: var(--space-8);
  width: fit-content;
  color: var(--color-text);
  font-family: var(--font-brand);
  font-size: var(--type-small-size);
  font-weight: 500;
  line-height: var(--type-small-line-height);
}

.breadcrumb a {
  display: inline-flex;
  align-items: center;
  min-height: 2rem;
}

.features-title {
  margin: 0;
  color: var(--color-primary-deep);
  font-family: var(--font-brand);
  font-size: var(--type-landing-h1-size);
  font-weight: var(--type-h1-weight);
  line-height: var(--type-landing-h1-line-height);
  letter-spacing: 0.02em;
}

.features-hero-art {
  position: absolute;
  right: min(-20rem, -15vw);
  top: 53%;
  transform: translateY(-50%);
  width: min(56vw, 50rem);
  z-index: 0;
  pointer-events: none;
}

.features-hero-art img {
  width: 100%;
  height: auto;
  object-fit: contain;
  opacity: 0.25;
}

.features-stack {
  width: min(100% - 2 * var(--page-gutter), var(--container-max));
  margin: var(--space-48) auto var(--space-80);
  background: var(--color-surface-light);
  border-radius: var(--radius-48);
  padding: var(--space-32) 0;
  box-shadow: 0 30px 60px rgba(73, 55, 108, 0.12);
  position: relative;
  z-index: 2;
}

.features-stack .page-section {
  padding: var(--space-40) 0;
}

.features-stack .page-section:first-child {
  padding-top: var(--space-48);
}

.features-stack .page-section:last-child {
  padding-bottom: var(--space-48);
}

.intro-section {
  background: transparent;
}

.intro-content {
  display: grid;
  gap: var(--space-40);
}

.intro-copy {
  margin: 0;
  max-width: 60rem;
  color: var(--color-text);
  font-family: var(--font-poppins);
  font-size: var(--type-body-size);
  font-weight: var(--type-body-weight);
  line-height: var(--type-body-line-height);
}

.feature-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: var(--space-24);
}

.how-section {
  background: transparent;
}

.how-layout {
  display: grid;
  grid-template-columns: 1fr;
  gap: var(--space-32);
  align-items: start;
}

.how-title {
  margin: 0;
  color: var(--color-primary-deep);
  font-family: var(--font-brand);
  font-size: var(--type-h3-size);
  font-weight: 600;
  line-height: var(--type-h3-line-height);
}

.how-list {
  display: grid;
  gap: var(--space-16);
}

.how-list-cta {
  margin-top: var(--space-16);
}

.how-list ol {
  margin: 0;
  padding: 0;
  list-style: none;
  display: grid;
  gap: var(--space-16);
}

.how-list li {
  display: grid;
  grid-template-columns: auto 1fr;
  gap: var(--space-8);
  align-items: center;
}

.step-circle {
  width: 1.75rem;
  height: 1.75rem;
  border-radius: var(--radius-pill);
  border: 2px solid rgba(63, 44, 117, 0.7);
  color: var(--color-primary-deep);
  display: grid;
  place-items: center;
  font-family: var(--font-brand);
  font-size: var(--type-small-size);
}

.step-copy {
  display: grid;
  gap: var(--space-4);
}

.step-title,
.step-text {
  margin: 0;
  color: var(--color-text);
  font-family: var(--font-poppins);
  font-size: var(--type-body-size);
  line-height: var(--type-body-line-height);
}

.step-title {
  font-weight: 500;
}

.step-text {
  color: var(--color-text-muted);
  font-size: var(--type-small-size);
}

.how-media {
  display: grid;
  gap: var(--space-24);
}

.how-logo {
  margin: 0;
  display: flex;
  align-items: center;
  justify-content: center;
}

.how-logo img {
  width: min(100%, 30rem);
  height: auto;
  max-height: 18rem;
  object-fit: contain;
}

.video-card {
  margin: 0;
  position: relative;
  border-radius: var(--radius-12);
  overflow: hidden;
  min-height: 13rem;
  background: rgba(110, 75, 216, 0.2);
}

.video-card img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
}

.play-badge {
  position: absolute;
  inset: 0;
  display: grid;
  place-items: center;
  color: rgba(63, 44, 117, 0.9);
  font-size: clamp(1.25rem, 2vw, 2rem);
  text-shadow: 0 2px 8px rgba(255, 255, 255, 0.5);
}

.preview-header {
  background: transparent;
}

.preview-header-inner {
  display: grid;
  grid-template-columns: auto 1fr;
  gap: var(--space-24);
  align-items: center;
}

.preview-icon-wrap {
  width: clamp(5rem, 14vw, 8rem);
  aspect-ratio: 1.4 / 1;
  display: grid;
  place-items: center;
}

.preview-icon {
  width: 100%;
  height: 100%;
  object-fit: contain;
}

.preview-icon-fallback {
  color: rgba(63, 44, 117, 0.45);
  font-size: clamp(2rem, 4vw, 3.75rem);
  line-height: 1;
}

.preview-copy {
  display: grid;
  gap: var(--space-8);
}

.preview-title {
  margin: 0;
  color: var(--color-text);
  font-family: var(--font-brand);
  font-size: var(--type-h2-size);
  line-height: var(--type-h2-line-height);
  letter-spacing: var(--type-h2-letter-spacing);
}

.preview-text {
  margin: 0;
  color: var(--color-text);
  font-family: var(--font-poppins);
  font-size: var(--type-body-size);
  line-height: var(--type-body-line-height);
}

.previews-section {
  background: transparent;
}

.previews-shell {
  display: grid;
  gap: var(--space-24);
}

.previews-desktop {
  display: none;
  grid-template-columns: repeat(5, 1fr);
  gap: var(--space-16);
  align-items: end;
}

.preview-phone {
  margin: 0;
  border-radius: var(--radius-12);
  border: 1px solid rgba(63, 44, 117, 0.2);
  min-height: 12rem;
  background: rgba(255, 255, 255, 0.7);
  display: grid;
  place-items: center;
  overflow: hidden;
}

.preview-phone img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
}

.preview-placeholder {
  color: rgba(63, 44, 117, 0.6);
  font-family: var(--font-brand);
  font-size: var(--type-small-size);
}

.previews-carousel {
  display: grid;
  gap: var(--space-16);
}

.carousel-window {
  overflow: hidden;
}

.carousel-track {
  display: flex;
  transition: transform 300ms ease-out;
}

.carousel-slide {
  flex: 0 0 50%;
  padding: 0 var(--space-4);
}

.carousel-dots {
  display: flex;
  justify-content: center;
  gap: var(--space-16);
}

.dot {
  width: 1.125rem;
  height: 1.125rem;
  border-radius: var(--radius-pill);
  border: 2px solid rgba(110, 75, 216, 0.9);
  background: transparent;
  cursor: pointer;
}

.dot.is-active {
  background: rgba(110, 75, 216, 0.95);
}

@media (min-width: 56rem) {
  .feature-grid {
    grid-template-columns: 1fr 1fr;
    column-gap: var(--space-40);
    row-gap: var(--space-24);
  }

  .how-layout {
    grid-template-columns: 1fr 1fr;
    align-items: start;
  }

  .how-logo img {
    width: min(100%, 30rem);
    height: auto;
    max-height: 18rem;
  }
}

@media (min-width: 70rem) {
  .previews-desktop {
    display: grid;
  }

  .previews-carousel {
    display: none;
  }

  .preview-phone {
    min-height: 17rem;
  }
}

@media (max-width: 48rem) {
  .features-hero {
    min-height: 11.5rem;
    padding: var(--space-32) 0 var(--space-24);
  }

  .features-hero-inner {
    gap: var(--space-8);
  }

  .breadcrumb {
    display: none;
  }

  .features-hero-art {
    right: -36%;
    top: 58%;
    width: min(28rem, 90vw);
  }

  .features-stack {
    margin: 24px var(--page-gutter) var(--space-64);
    width: auto;
    border-radius: var(--radius-48);
    padding: 24px;
  }

  .features-stack .section-container {
    width: 100%;
    padding-inline: 0;
  }

  .features-stack .page-section {
    padding: 24px 0;
  }

  .features-stack .page-section:first-child {
    padding-top: 0;
  }

  .features-stack .page-section:last-child {
    padding-bottom: 24px;
  }

  .intro-content {
    gap: var(--space-32);
  }

  .preview-header {
    padding: 24px 0;
  }

  .preview-header-inner {
    gap: var(--space-8);
  }

  .carousel-dots {
    gap: var(--space-8);
  }

  .dot {
    width: 1rem;
    height: 1rem;
  }
}
</style>
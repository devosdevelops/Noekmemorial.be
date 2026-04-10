<template>
  <site-header />

  <main>
    <hero-section />

    <section class="home-stack" aria-label="Noek informatie">
      <content-section title="Wat is Noek?" section-id="wat-is-noek" surface="light">
        <strong>Noek geeft herinneringen een plek die blijft bestaan.</strong><br />
        Een warme, digitale ruimte waar mensen samen herinneringen delen en verbonden blijven met wie ze missen.
        Niet gebonden aan een plaats, maar altijd dichtbij wanneer het nodig is.
      </content-section>

      <how-it-works-section />
      <mission-vision-section />
    </section>
  </main>

  <site-footer />
  <scroll-top-button />

  <span id="faq" class="faq-anchor" aria-hidden="true"></span>
</template>

<script setup>
import ContentSection from '../components/content-section.vue';
import HeroSection from '../components/hero-section.vue';
import HowItWorksSection from '../components/how-it-works-section.vue';
import MissionVisionSection from '../components/mission-vision-section.vue';
import ScrollTopButton from '../components/scroll-top-button.vue';
import SiteFooter from '../components/site-footer.vue';
import SiteHeader from '../components/site-header.vue';
</script>

<style scoped>
.faq-anchor {
  position: relative;
  display: block;
  top: -6rem;
  visibility: hidden;
}

.home-stack {
  width: min(100% - 2 * var(--page-gutter), var(--container-max));
  margin: var(--space-64) auto var(--space-80);
  background: var(--color-surface-light);
  border-radius: var(--radius-48);
  padding: var(--space-32) 0;
  box-shadow: 0 30px 60px rgba(73, 55, 108, 0.12);
}

.home-stack .page-section {
  padding: var(--space-40) 0;
}

.home-stack .page-section:first-child {
  padding-top: var(--space-48);
}

.home-stack .page-section:last-child {
  padding-bottom: var(--space-48);
}

@media (max-width: 48rem) {
  .home-stack {
    margin: 24px var(--page-gutter) var(--space-64);
    width: auto;
    border-radius: var(--radius-48);
    padding: 24px;
  }

  .home-stack .section-container {
    width: 100%;
    padding-inline: 0;
  }

  .home-stack .page-section {
    padding: 24px 0;
  }

  .home-stack .page-section:first-child {
    padding-top: 0;
  }

  .home-stack .page-section:last-child {
    padding-bottom: 24px;
  }
}
</style>
<template>
  <section class="hero-section" :style="heroStyle" aria-labelledby="hero-title" v-scroll-reveal>
    <div class="section-container hero-content">
      <h1 id="hero-title" class="hero-title" v-scroll-reveal="{ delay: 40 }">Noek</h1>
      <p class="hero-tagline" v-scroll-reveal="{ delay: 80 }">Herdenken stopt niet na de uitvaart.</p>

      <div class="hero-actions" v-scroll-reveal="{ delay: 120 }">
        <base-button href="#features" label="Ontdek de Features" />
        <base-button href="#over-ons" label="Wie zijn we?" variant="outline" />
      </div>
    </div>
  </section>
</template>

<script setup>
import { computed } from 'vue';
import { assetPaths } from '../config/asset-paths';
import BaseButton from './base-button.vue';

const heroStyle = computed(() => {
  if (!assetPaths.images.heroBackground) {
    return {};
  }

  return {
    '--hero-image': `url(${assetPaths.images.heroBackground})`
  };
});
</script>

<style scoped>
.hero-section {
  min-height: clamp(22rem, 46vw, 31rem);
  display: grid;
  align-items: center;
  padding: var(--space-80);
  background:
    var(--hero-image, none) center / cover no-repeat,
    radial-gradient(circle at 60% 40%, rgba(217, 206, 255, 0.8) 0%, rgba(194, 165, 235, 0.2) 25%, rgba(180, 148, 229, 0) 45%),
    linear-gradient(120deg, #c89ddf 0%, #ceb0e9 35%, #e8bfd3 100%);
}

.hero-content {
  display: grid;
  align-content: center;
  justify-items: start;
  gap: var(--space-40);
}

.hero-title {
  margin: 0;
  color: var(--color-primary-deep);
  font-family: var(--font-ambella);
  font-size: var(--type-landing-h1-size);
  font-weight: var(--type-h1-weight);
  line-height: var(--type-landing-h1-line-height);
  letter-spacing: var(--type-h1-letter-spacing);
  text-shadow:
    0 1px 2px #49376c,
    0 2px 8px #da9b53;
}

.hero-tagline {
  margin: 0;
  color: #f8f1f1;
  text-shadow:
    0 1px 2px #49376c,
    0 2px 8px #da9b53;
  font-family: var(--font-ambella);
  font-size: clamp(2rem, calc(1.45rem + 2vw), 3.4rem);
  font-style: italic;
  line-height: var(--type-h2-line-height);
  letter-spacing: var(--type-h2-letter-spacing);
}

.hero-actions {
  display: flex;
  flex-wrap: wrap;
  gap: var(--space-16);
}

@media (max-width: 40rem) {
  .hero-section {
    padding: var(--space-56);
  }

  .hero-content {
    gap: var(--space-40);
  }

  .hero-actions {
    width: 100%;
  }
}

@media (min-width: 75rem) {
  .hero-section {
    padding: var(--space-96);
  }
}
</style>

<template>
  <section class="hero-section" :style="heroStyle" aria-labelledby="hero-title">
    <div class="section-container hero-content">
      <h1 id="hero-title" class="hero-title">Noek</h1>
      <p class="hero-tagline">Herdenken stopt niet na de uitvaart.</p>

      <div class="hero-actions">
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
  font-family: var(--font-title);
  font-size: var(--fs-hero-title);
  font-weight: 400;
  line-height: 0.9;
}

.hero-tagline {
  margin: 0;
  color: #f8f1f1;
  text-shadow: 0 2px 10px rgba(46, 40, 80, 0.28);
  font-family: var(--font-title);
  font-size: clamp(2rem, calc(1.45rem + 2vw), 3.4rem);
  font-style: italic;
  line-height: 0.95;
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

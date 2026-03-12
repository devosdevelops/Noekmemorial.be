<template>
  <section class="page-section how-it-works" id="features" aria-labelledby="features-heading">
    <div class="section-container split-layout">
      <div class="text-column">
        <h2 id="features-heading" class="section-heading">Hoe werkt Noek?</h2>
        <p class="body-text">
          Wij verbinden technologie en uitvaartzorg voor blijvende digitale herdenkingsplekken. Zonder extra
          werkdruk, met jou als menselijk aanspreekpunt.
        </p>
        <p class="demo-lead">Vraag hieronder een gratis demo aan</p>

        <div class="action-row">
          <base-button href="#contact" label="Boek een Demo" block-mobile />
          <base-button href="#over-ons" label="Meer info" variant="outline" block-mobile />
        </div>
      </div>

      <button class="media-card" type="button" aria-label="Video afspelen">
        <img v-if="hasVideoThumb" class="media-image" :src="assetPaths.images.howItWorksThumb" alt="Video preview" />
        <span class="play-indicator" aria-hidden="true">▶</span>
      </button>
    </div>
  </section>
</template>

<script setup>
import { computed } from 'vue';
import { assetPaths } from '../config/asset-paths';
import BaseButton from './base-button.vue';

const hasVideoThumb = computed(() => Boolean(assetPaths.images.howItWorksThumb));
</script>

<style scoped>
.how-it-works {
  background: var(--color-surface-soft);
}

.split-layout {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: var(--space-40);
  align-items: center;
}

.text-column {
  display: grid;
  gap: var(--space-24);
}

.demo-lead {
  margin: var(--space-8) 0 0;
  color: var(--color-primary-deep);
  font-family: var(--font-ui);
  font-size: clamp(1.35rem, calc(1.05rem + 0.8vw), 1.9rem);
  font-weight: 700;
  line-height: 1.3;
}

.action-row {
  display: flex;
  flex-wrap: wrap;
  gap: var(--space-24);
}

.media-card {
  position: relative;
  border: 0;
  width: 100%;
  aspect-ratio: 16 / 10;
  border-radius: var(--radius-12);
  background:
    linear-gradient(140deg, rgba(117, 77, 197, 0.62), rgba(246, 188, 170, 0.5)),
    radial-gradient(circle at 60% 50%, rgba(255, 236, 201, 0.7), rgba(255, 236, 201, 0) 40%),
    #c69de4;
  display: grid;
  place-items: center;
  cursor: pointer;
}

.media-image {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: inherit;
}

.play-indicator {
  position: relative;
  z-index: 1;
  display: inline-grid;
  place-items: center;
  width: 3rem;
  height: 3rem;
  border-radius: 999px;
  background: rgba(63, 44, 117, 0.85);
  color: #ffffff;
  font-size: 1rem;
  padding-left: var(--space-4);
}

@media (max-width: 64rem) {
  .split-layout {
    grid-template-columns: 1fr;
  }

  .media-card {
    order: 2;
  }

  .text-column {
    order: 1;
  }

  .action-row {
    order: 3;
  }
}

@media (max-width: 40rem) {
  .action-row {
    width: auto;
    gap: var(--space-16);
  }
}
</style>

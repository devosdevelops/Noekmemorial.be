<template>
  <section class="page-section mission-vision" id="over-ons" aria-labelledby="mission-vision-heading" v-scroll-reveal>
    <div class="section-container mission-vision-inner">
      <h2 id="mission-vision-heading" class="section-heading">Missie &amp; Visie</h2>

      <div class="cards-grid">
        <mission-card
          v-scroll-reveal="{ delay: 40, origin: 'up' }"
          title="Onze visie"
          text="Wij geloven in een samenleving waarin herdenken niet stopt na de uitvaart, maar uitgroeit tot een blijvend en persoonlijk proces."
          image-tone="moon"
          :image-src="assetPaths.images.missionVision"
        />

        <mission-card
          v-scroll-reveal="{ delay: 80, origin: 'up' }"
          title="Onze missie"
          text="Een White-label digitaal platform voor uitvaartondernemingen waarmee zij families een persoonlijke, blijvende herdenkingsruimte kunnen aanbieden."
          image-tone="team"
          :image-src="assetPaths.images.missionMission"
          reverse-mobile
        />
      </div>
    </div>
  </section>
</template>

<script setup>
import { assetPaths } from '../config/asset-paths';
import MissionCard from './mission-card.vue';
</script>

<style scoped>
.mission-vision {
  background: var(--color-surface-soft);
}

.mission-vision-inner {
  display: grid;
  gap: var(--space-40);
}

.cards-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: var(--space-40);
  align-items: stretch;
}

@media (max-width: 48rem) {
  .cards-grid {
    grid-template-columns: 1fr;
    gap: var(--space-32);
  }
}
</style>

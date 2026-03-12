<template>
  <section class="page-section how-it-works" id="features" aria-labelledby="features-heading" v-scroll-reveal>
    <div class="section-container split-layout">
      <div class="text-column" v-scroll-reveal="{ delay: 40, origin: 'left' }">
        <h2 id="features-heading" class="section-heading">Hoe werkt Noek?</h2>
        <p class="body-text">
          Wij verbinden technologie en uitvaartzorg voor blijvende digitale herdenkingsplekken. Zonder extra
          werkdruk, met jou als menselijk aanspreekpunt.
        </p>
        <p class="demo-lead">Lijkt dit product interessant? </p>
        <p class="body-text">
          Meld je interesse of lees meer door op de knop te drukken! Mischien dat jij ons kan helpen dit product nog beter te maken.
        </p>

        <div class="action-row">
          <base-button href="/contact" label="Toon je interesse" block-mobile />
          <base-button href="/over-ons" label="Meer info" variant="outline" block-mobile />
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import BaseButton from './base-button.vue';
</script>

<style scoped>
.how-it-works {
  background: var(--color-surface-soft);
}

.split-layout {
  display: grid;
  grid-template-columns: 1fr;
  gap: var(--space-24);
  align-items: start;
}

.text-column {
  display: grid;
  gap: var(--space-24);
}

.demo-lead {
  margin: var(--space-8) 0 0;
  color: var(--color-primary-deep);
  font-family: var(--font-outfit);
  font-size: var(--type-label-size);
  font-weight: var(--type-label-weight);
  line-height: var(--type-label-line-height);
  letter-spacing: var(--type-label-letter-spacing);
}

.action-row {
  display: flex;
  flex-wrap: wrap;
  gap: var(--space-24);
}

@media (max-width: 64rem) {
  .action-row {
    gap: var(--space-20);
  }
}

@media (max-width: 40rem) {
  .action-row {
    width: auto;
    gap: var(--space-16);
  }
}
</style>

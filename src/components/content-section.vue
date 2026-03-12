<template>
  <section class="page-section content-section" :class="surfaceClass" :id="sectionId" :aria-labelledby="headingId">
    <div class="section-container content-inner">
      <h2 :id="headingId" class="section-heading">{{ title }}</h2>
      <p class="body-text"><slot /></p>
    </div>
  </section>
</template>

<script setup>
import { computed } from 'vue';

const props = defineProps({
  title: {
    type: String,
    required: true
  },
  sectionId: {
    type: String,
    required: true
  },
  surface: {
    type: String,
    default: 'light'
  }
});

const headingId = computed(() => `${props.sectionId}-heading`);
const surfaceClass = computed(() => `is-${props.surface}`);
</script>

<style scoped>
.content-section.is-light {
  background: var(--color-surface-light);
}

.content-section.is-soft {
  background: var(--color-surface-soft);
}

.content-inner {
  display: grid;
  gap: var(--space-8);
}

.body-text {
  max-width: 75ch;
}
</style>

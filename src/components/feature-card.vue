<template>
  <article class="feature-card">
    <h2 class="feature-title">{{ title }}</h2>
    <span class="feature-divider" aria-hidden="true"></span>

    <div class="feature-row">
      <span class="feature-icon-wrap" aria-hidden="true">
        <img v-if="icon" :src="icon" class="feature-icon" alt="" />
        <span v-else class="feature-icon-fallback">{{ fallback }}</span>
      </span>

      <p class="feature-text">{{ description }}</p>
    </div>
  </article>
</template>

<script setup>
defineProps({
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  icon: {
    type: String,
    default: ''
  },
  fallback: {
    type: String,
    default: ''
  }
});
</script>

<style scoped>
.feature-card {
  display: flex;
  flex-direction: column;
  gap: var(--space-16);
  background: var(--color-surface-soft);
  border-radius: var(--radius-16);
  padding: var(--space-16);
  box-shadow: 0 10px 16px rgba(73, 55, 108, 0.08);
}

.feature-title {
  margin: 0;
  color: var(--color-text);
  font-family: var(--font-brand);
  font-size: var(--type-h4-size);
  font-weight: 600;
  line-height: var(--type-h4-line-height);
}

.feature-divider {
  display: block;
  width: 100%;
  height: 2px;
  border-radius: var(--radius-pill);
  background: rgba(73, 55, 108, 0.14);
}

.feature-row {
  display: grid;
  grid-template-columns: auto 1fr;
  gap: var(--space-16);
  align-items: start;
}

.feature-icon-wrap {
  width: 5rem;
  height: 5rem;
  display: grid;
  place-items: center;
  border-radius: var(--radius-12);
  background: var(--gradient-primary);
}

.feature-icon {
  width: 2.5rem;
  height: 2.5rem;
  object-fit: contain;
}

.feature-icon-fallback {
  color: rgba(255, 255, 255, 0.9);
  font-size: 1.25rem;
  line-height: 1;
}

.feature-text {
  margin: 0;
  color: var(--color-text);
  font-family: var(--font-poppins);
  font-size: var(--type-body-size);
  font-weight: var(--type-body-weight);
  line-height: var(--type-body-line-height);
}
</style>

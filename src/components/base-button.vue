<template>
  <component
    :is="tagName"
    :href="href || undefined"
    :type="tagName === 'button' ? type : undefined"
    class="base-button"
    :class="[`is-${variant}`, { 'is-block-mobile': blockMobile }]"
  >
    <slot>{{ label }}</slot>
  </component>
</template>

<script setup>
import { computed } from 'vue';

const props = defineProps({
  href: {
    type: String,
    default: ''
  },
  variant: {
    type: String,
    default: 'primary'
  },
  type: {
    type: String,
    default: 'button'
  },
  label: {
    type: String,
    default: ''
  },
  blockMobile: {
    type: Boolean,
    default: false
  }
});

const tagName = computed(() => (props.href ? 'a' : 'button'));
</script>

<style scoped>
.base-button {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-height: 3rem;
  padding: var(--space-8) var(--space-24);
  border-radius: var(--radius-12);
  border: 2px solid transparent;
  font-family: var(--font-ui);
  font-size: var(--fs-ui);
  font-weight: 600;
  transition: transform 180ms ease, box-shadow 180ms ease;
}

.base-button:hover {
  transform: translateY(-1px);
}

.is-primary {
  background: var(--color-primary);
  color: var(--color-white);
  border-color: var(--color-primary);
}

.is-outline {
  background: transparent;
  color: var(--color-text);
  border-color: var(--color-secondary);
}

.is-soft {
  background: var(--color-white);
  color: var(--color-primary-deep);
  border-color: var(--color-primary-deep);
}

@media (max-width: 40rem) {
  .is-block-mobile {
    width: 100%;
  }
}
</style>

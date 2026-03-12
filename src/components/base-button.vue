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
  font-family: var(--font-outfit);
  font-size: var(--type-button-size);
  font-weight: var(--type-button-weight);
  line-height: var(--type-button-line-height);
  letter-spacing: var(--type-button-letter-spacing);
  white-space: nowrap;
  transition:
    transform 300ms ease-out,
    background-color 300ms ease-out,
    border-color 300ms ease-out,
    color 300ms ease-out;
}

.base-button:hover {
  transform: translateY(-1px);
}

.base-button:active {
  transform: scale(0.97);
}

.is-primary {
  background: var(--color-primary);
  color: var(--color-white);
  border-color: var(--color-primary);
}

.is-primary:hover {
  background: #7f60df;
  border-color: #7f60df;
}

.is-primary:active {
  background: rgba(23, 16, 44, 0.92);
  color: var(--color-primary);
  border-color: var(--color-primary);
}

.is-outline {
  background: transparent;
  color: var(--color-text);
  border-color: var(--color-secondary);
}

.is-outline:hover {
  background: var(--color-secondary);
  color: var(--color-white);
}

.is-outline:active {
  background: rgba(23, 16, 44, 0.92);
  color: var(--color-secondary);
  border-color: var(--color-secondary);
}

.is-soft {
  background: var(--color-white);
  color: var(--color-primary-deep);
  border-color: var(--color-primary-deep);
}

.is-soft:hover {
  background: #f3effc;
}

.is-soft:active {
  background: rgba(23, 16, 44, 0.92);
  color: #ffffff;
  border-color: #ffffff;
}

@media (max-width: 40rem) {
  .is-block-mobile {
    width: fit-content;
    max-width: 100%;
  }
}
</style>

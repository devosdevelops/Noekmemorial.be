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
  font-family: var(--font-brand);
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
  filter: brightness(1.05);
}

.base-button:active {
  transform: scale(0.97);
}

.is-primary {
  background: var(--gradient-primary);
  color: var(--color-white);
  border-color: transparent;
  box-shadow: 0 10px 20px rgba(73, 55, 108, 0.25);
}

.is-primary:hover {
  border-color: transparent;
}

.is-primary:active {
  background: #3a2c59;
  color: var(--color-white);
  border-color: transparent;
}

.is-outline {
  background: var(--gradient-amber);
  color: #fffaf3;
  border-width: 2px;
  border-color: transparent;
  box-shadow: 0 10px 20px rgba(218, 155, 83, 0.2);
}

.is-outline:hover {
  color: #ffffff;
}

.is-outline:active {
  background: #b57938;
  color: #ffffff;
  border-color: transparent;
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

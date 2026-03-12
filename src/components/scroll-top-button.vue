<template>
  <button
    type="button"
    class="scroll-top-button"
    :class="{ 'is-visible': showButton }"
    aria-label="Ga naar boven"
    @click="scrollToTop"
  >
    ↑
  </button>
</template>

<script setup>
import { onMounted, onUnmounted, ref } from 'vue';

const showButton = ref(false);

const updateButtonVisibility = () => {
  showButton.value = window.scrollY > 320;
};

const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
};

onMounted(() => {
  updateButtonVisibility();
  window.addEventListener('scroll', updateButtonVisibility, { passive: true });
});

onUnmounted(() => {
  window.removeEventListener('scroll', updateButtonVisibility);
});
</script>

<style scoped>
.scroll-top-button {
  position: fixed;
  right: var(--space-24);
  bottom: var(--space-40);
  width: 3rem;
  height: 3rem;
  border: 0;
  border-radius: 999px;
  background: var(--color-secondary);
  color: var(--color-white);
  font-size: 2rem;
  line-height: 0;
  cursor: pointer;
  z-index: 15;
  opacity: 0;
  transform: translateY(var(--space-8));
  pointer-events: none;
  transition:
    opacity 300ms ease-out,
    transform 300ms ease-out;
}

.scroll-top-button.is-visible {
  opacity: 1;
  transform: translateY(0);
  pointer-events: auto;
}

@media (max-width: 40rem) {
  .scroll-top-button {
    right: var(--space-16);
    bottom: var(--space-24);
  }
}
</style>

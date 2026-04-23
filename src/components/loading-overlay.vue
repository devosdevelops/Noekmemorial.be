<template>
  <transition name="overlay-fade">
    <div v-if="active" class="loading-overlay" role="status" aria-live="polite" aria-label="Bezig met verzenden">
      <div class="loading-spinner" aria-hidden="true"></div>
      <span class="sr-only">Bezig met verzenden</span>
    </div>
  </transition>
</template>

<script setup>
const props = defineProps({
  active: {
    type: Boolean,
    default: false
  }
});
</script>

<style scoped>
.loading-overlay {
  position: fixed;
  inset: 0;
  z-index: 45;
  display: grid;
  place-items: center;
  background: rgba(55, 41, 81, 0.06);
  pointer-events: auto;
  touch-action: none;
}

.loading-spinner {
  width: 4.5rem;
  height: 4.5rem;
  border-radius: 50%;
  background: conic-gradient(#694EC4 0 55deg, #372951 55deg 360deg);
  -webkit-mask: radial-gradient(farthest-side, transparent calc(100% - 12px), #000 calc(100% - 11px));
  mask: radial-gradient(farthest-side, transparent calc(100% - 12px), #000 calc(100% - 11px));
  animation: spinner-rotate 0.9s linear infinite;
  box-shadow: 0 10px 24px rgba(55, 41, 81, 0.24);
}

.sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border: 0;
}

.overlay-fade-enter-active,
.overlay-fade-leave-active {
  transition: opacity 200ms ease;
}

.overlay-fade-enter-from,
.overlay-fade-leave-to {
  opacity: 0;
}

@keyframes spinner-rotate {
  to {
    transform: rotate(360deg);
  }
}
</style>

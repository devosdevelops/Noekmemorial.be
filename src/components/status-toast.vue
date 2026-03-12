<template>
  <transition name="toast-pop">
    <div v-if="open" class="status-toast" :class="variantClass" role="status" aria-live="polite">
      <span class="toast-icon" aria-hidden="true">
        <svg v-if="variant === 'success'" viewBox="0 0 24 24" focusable="false" aria-hidden="true">
          <path
            d="M9.3 16.2 5.1 12l1.4-1.4 2.8 2.8 7.2-7.2 1.4 1.4z"
          />
        </svg>
        <svg v-else viewBox="0 0 24 24" focusable="false" aria-hidden="true">
          <path
            d="M12 4.5a1.5 1.5 0 0 1 1.5 1.5v7.5a1.5 1.5 0 0 1-3 0V6a1.5 1.5 0 0 1 1.5-1.5zm0 13a1.75 1.75 0 1 1 0 3.5 1.75 1.75 0 0 1 0-3.5z"
          />
        </svg>
      </span>
      <span class="toast-text">{{ message }}</span>
    </div>
  </transition>
</template>

<script setup>
import { computed } from 'vue';

const props = defineProps({
  open: {
    type: Boolean,
    default: false
  },
  variant: {
    type: String,
    default: 'success'
  },
  message: {
    type: String,
    default: ''
  }
});

const variantClass = computed(() => (props.variant === 'error' ? 'status-toast--error' : 'status-toast--success'));
</script>

<style scoped>
.status-toast {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 40;
  display: inline-flex;
  align-items: center;
  gap: 0.75rem;
  padding: 0.85rem 1.6rem;
  border-radius: 999px;
  color: #ffffff;
  font-family: var(--font-outfit);
  font-size: 1.1rem;
  font-weight: 600;
  box-shadow: 0 12px 24px rgba(0, 0, 0, 0.18);
}

.status-toast--success {
  background: #78b84e;
}

.status-toast--error {
  background: #e2553f;
}

.toast-icon {
  width: 2rem;
  height: 2rem;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border-radius: 999px;
  background: rgba(255, 255, 255, 0.2);
}

.toast-icon svg {
  width: 1.2rem;
  height: 1.2rem;
  fill: currentColor;
}

.toast-pop-enter-active,
.toast-pop-leave-active {
  transition: transform 220ms ease, opacity 220ms ease;
}

.toast-pop-enter-from,
.toast-pop-leave-to {
  transform: translate(-50%, -50%) translateY(-10px);
  opacity: 0;
}
</style>

<template>
  <div class="site-logo">
    <img v-if="hasMainLogo && !props.split" class="logo-image" :src="mainLogoSrc" alt="Noek" width="160" height="200" />

    <template v-else>
      <img v-if="hasMarkLogo" class="logo-mark-image" :src="markLogoSrc" alt="Noek" width="160" height="200" />
      <span v-else class="logo-mark" aria-hidden="true">🦊</span>
      <span class="logo-wordmark">Noek</span>
    </template>
  </div>
</template>

<script setup>
import { computed } from 'vue';
import { assetPaths } from '../config/asset-paths';

const props = defineProps({
  src: {
    type: String,
    default: ''
  },
  split: {
    type: Boolean,
    default: false
  }
});

const mainLogoSrc = computed(() => props.src || assetPaths.logos.main);
const hasMainLogo = computed(() => Boolean(mainLogoSrc.value));
const markLogoSrc = computed(() => assetPaths.logos.mark || assetPaths.logos.main);
const hasMarkLogo = computed(() => Boolean(markLogoSrc.value));
</script>

<style scoped>
.site-logo {
  display: inline-flex;
  align-items: center;
  gap: calc(var(--space-8) + 2px);
  color: var(--color-primary-deep);
}

.logo-image {
  width: auto;
  height: clamp(2.75rem, calc(2.15rem + 1.6vw), 4.45rem);
  object-fit: contain;
}

.logo-mark-image {
  width: auto;
  height: clamp(2.75rem, calc(2.2rem + 1.2vw), 3.45rem);
  flex-shrink: 0;
  object-fit: contain;
}

.logo-mark {
  display: inline-grid;
  place-items: center;
  width: 3rem;
  height: 3rem;
  border-radius: 999px;
  font-size: 1.8rem;
  line-height: 1;
}

.logo-wordmark {
  font-family: var(--font-brand);
  font-weight: 500;
  font-size: clamp(2.05rem, calc(1.65rem + 0.9vw), 2.8rem);
  line-height: 1;
}

@media (max-width: 64rem) {
  .logo-image {
    height: clamp(2.3rem, calc(1.9rem + 1.1vw), 3.2rem);
  }

  .logo-mark {
    width: 2.5rem;
    height: 2.5rem;
    font-size: 1.55rem;
  }

  .logo-mark-image {
    width: auto;
    height: 3rem;
  }

  .logo-wordmark {
    font-size: clamp(1.9rem, calc(1.4rem + 0.8vw), 2.4rem);
  }
}
</style>

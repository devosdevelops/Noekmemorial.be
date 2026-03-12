<template>
  <header class="site-header" id="top">
    <div class="section-container header-row">
      <a href="#top" class="logo-link" aria-label="Noek home">
        <site-logo :compact="isCompactLogo" />
      </a>

      <nav class="desktop-nav" aria-label="hoofd navigatie">
        <a v-for="item in navItems" :key="item.href" class="nav-link" :href="item.href">{{ item.label }}</a>
      </nav>

      <base-button class="desktop-cta" href="#contact" label="Boek een demo" />

      <button class="menu-toggle" type="button" aria-label="Open menu" @click="menuOpen = !menuOpen">
        <span></span>
        <span></span>
        <span></span>
      </button>
    </div>

    <nav v-if="menuOpen" class="mobile-nav" aria-label="mobiele navigatie">
      <a
        v-for="item in navItems"
        :key="item.href"
        class="mobile-link"
        :href="item.href"
        @click="menuOpen = false"
      >
        {{ item.label }}
      </a>
      <base-button href="#contact" label="Boek een demo" block-mobile @click="menuOpen = false" />
    </nav>
  </header>
</template>

<script setup>
import { computed, onMounted, onUnmounted, ref } from 'vue';
import BaseButton from './base-button.vue';
import SiteLogo from './site-logo.vue';

const menuOpen = ref(false);
const viewportWidth = ref(typeof window !== 'undefined' ? window.innerWidth : 1280);

const navItems = [
  { label: 'Over ons', href: '#over-ons' },
  { label: 'Features', href: '#features' },
  { label: 'F.A.Q', href: '#faq' },
  { label: 'Contact', href: '#contact' }
];

const isCompactLogo = computed(() => viewportWidth.value <= 1024);

const onResize = () => {
  viewportWidth.value = window.innerWidth;
  if (viewportWidth.value > 900) {
    menuOpen.value = false;
  }
};

onMounted(() => {
  window.addEventListener('resize', onResize);
});

onUnmounted(() => {
  window.removeEventListener('resize', onResize);
});
</script>

<style scoped>
.site-header {
  position: sticky;
  top: 0;
  z-index: 20;
  background: #f8f8f7;
  border-bottom: 1px solid rgba(63, 44, 117, 0.08);
}

.site-header::after {
  content: '';
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  height: 8px;
  background: linear-gradient(to bottom, rgba(248, 248, 247, 1) 0%, rgba(248, 248, 247, 0) 100%);
  pointer-events: none;
}

.header-row {
  display: grid;
  grid-template-columns: auto 1fr auto;
  align-items: center;
  min-height: 7rem;
  gap: var(--space-24);
}

.desktop-nav {
  display: flex;
  justify-content: center;
  gap: var(--space-40);
}

.nav-link {
  font-family: var(--font-ui);
  font-size: var(--fs-ui);
  font-weight: 600;
  color: var(--color-text);
}

.menu-toggle {
  display: none;
  width: 3rem;
  height: 3rem;
  border: 0;
  background: transparent;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: var(--space-8);
  margin-left: auto;
}

.menu-toggle span {
  width: 2rem;
  height: var(--space-4);
  border-radius: var(--radius-pill);
  background: var(--color-primary-deep);
}

.mobile-nav {
  display: none;
}

@media (max-width: 56.25rem) {
  .header-row {
    grid-template-columns: auto 1fr;
    min-height: 6.5rem;
  }

  .desktop-nav,
  .desktop-cta {
    display: none;
  }

  .menu-toggle {
    display: inline-flex;
  }

  .mobile-nav {
    display: grid;
    gap: var(--space-16);
    padding: var(--space-16);
    border-top: 1px solid rgba(63, 44, 117, 0.08);
    background: #f8f8f7;
  }

  .mobile-link {
    padding: var(--space-8) var(--space-0);
    font-family: var(--font-ui);
    font-size: var(--fs-ui);
    font-weight: 600;
  }
}
</style>

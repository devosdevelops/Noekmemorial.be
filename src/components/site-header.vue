<template>
  <header class="site-header" id="top">
    <div class="section-container header-row">
      <a href="/" class="logo-link" aria-label="Noek home">
        <site-logo :compact="isCompactLogo" />
      </a>

      <nav class="desktop-nav" aria-label="hoofd navigatie">
        <a
          v-for="item in navItems"
          :key="item.href"
          class="nav-link"
          :class="{ 'is-current': isCurrentLink(item.href) }"
          :href="item.href"
        >
          {{ item.label }}
        </a>
      </nav>

      <base-button class="desktop-cta" href="/toon-je-interesse" label="Toon je interesse" />

      <button
        class="menu-toggle"
        :class="{ 'is-open': menuOpen }"
        type="button"
        :aria-label="menuOpen ? 'Sluit menu' : 'Open menu'"
        @click="menuOpen = !menuOpen"
      >
        <span></span>
        <span></span>
        <span></span>
      </button>
    </div>

    <aside class="mobile-drawer" :class="{ 'is-open': menuOpen }" aria-label="mobiele navigatie" :aria-hidden="!menuOpen">
      <div class="drawer-inner">
        <nav class="drawer-links" aria-label="menu links">
          <a
            v-for="item in navItems"
            :key="item.href"
            class="drawer-link"
            :class="{ 'is-current': isCurrentLink(item.href) }"
            :href="item.href"
            @click="menuOpen = false"
          >
            {{ item.label }}
          </a>
          <a class="drawer-link" :class="{ 'is-current': isCurrentLink('/toon-je-interesse') }" href="/toon-je-interesse" @click="menuOpen = false">Toon je interesse</a>
        </nav>

        <span class="drawer-divider" aria-hidden="true"></span>

        <nav class="drawer-legal" aria-label="legal links">
          <a class="drawer-link" :class="{ 'is-current': isCurrentLink('/privacybeleid') }" href="/privacybeleid" @click="menuOpen = false">Privacybeleid</a>
          <a class="drawer-link" :class="{ 'is-current': isCurrentLink('/algemene-voorwaarden') }" href="/algemene-voorwaarden" @click="menuOpen = false">Algemene Voorwaarden</a>
        </nav>
      </div>
    </aside>
  </header>
</template>

<script setup>
import { computed, onMounted, onUnmounted, ref, watch } from 'vue';
import BaseButton from './base-button.vue';
import SiteLogo from './site-logo.vue';

const menuOpen = ref(false);
const viewportWidth = ref(typeof window !== 'undefined' ? window.innerWidth : 1280);
const currentPath = ref(typeof window !== 'undefined' ? window.location.pathname : '/');
const currentHash = ref(typeof window !== 'undefined' ? window.location.hash : '');

const navItems = [
  { label: 'Home', href: '/' },
  { label: 'Over ons', href: '/over-ons' },
  { label: 'Features', href: '/features' },
  { label: 'F.A.Q', href: '/faq' },
  { label: 'Contact', href: '/contact' }
];

const isCompactLogo = computed(() => viewportWidth.value <= 1024);

const onResize = () => {
  viewportWidth.value = window.innerWidth;
  if (viewportWidth.value > 1120) {
    menuOpen.value = false;
  }
};

const syncLocationState = () => {
  currentPath.value = window.location.pathname;
  currentHash.value = window.location.hash;
};

const isCurrentLink = (href) => {
  if (!href) {
    return false;
  }

  if (href === '/') {
    return currentPath.value === '/';
  }

  if (href.startsWith('/#')) {
    return currentPath.value === '/' && currentHash.value === href.slice(1);
  }

  if (href.startsWith('/')) {
    return currentPath.value === href;
  }

  if (href.startsWith('#')) {
    return currentHash.value === href;
  }

  return false;
};

onMounted(() => {
  syncLocationState();
  window.addEventListener('resize', onResize);
  window.addEventListener('hashchange', syncLocationState);
  window.addEventListener('popstate', syncLocationState);
});

onUnmounted(() => {
  document.body.style.overflow = '';
  window.removeEventListener('resize', onResize);
  window.removeEventListener('hashchange', syncLocationState);
  window.removeEventListener('popstate', syncLocationState);
});

watch(menuOpen, (isOpen) => {
  document.body.style.overflow = isOpen ? 'hidden' : '';
});
</script>

<style scoped>
.site-header {
  --header-height: 7rem;
  position: sticky;
  top: 0;
  z-index: 30;
  background: transparent;
  padding: var(--space-16) 0;
}

.header-row {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  min-height: 5.5rem;
  gap: var(--space-24);
  background: rgba(255, 255, 255, 0.85);
  border-radius: 999px;
  padding: 40px;
  box-shadow: 0 18px 30px rgba(73, 55, 108, 0.15);
  backdrop-filter: blur(8px);
}

.desktop-nav {
  display: flex;
  justify-content: center;
  gap: var(--space-40);
  flex-wrap: nowrap;
}

.nav-link {
  position: relative;
  font-family: var(--font-poppins);
  font-size: var(--type-link-size);
  font-weight: var(--type-link-weight);
  line-height: var(--type-link-line-height);
  letter-spacing: 0;
  color: var(--color-text);
  white-space: nowrap;
  transition: color 300ms ease-out;
}

.nav-link::after {
  content: '';
  position: absolute;
  left: 0;
  right: 0;
  bottom: -0.25rem;
  height: 2px;
  border-radius: var(--radius-pill);
  background: currentColor;
  transform: scaleX(0);
  transform-origin: center;
  transition: transform 300ms ease-out;
}

.nav-link:hover::after,
.nav-link:active::after,
.nav-link.is-current::after {
  transform: scaleX(1);
}

.nav-link.is-current {
  color: #4b3a6c;
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
  position: relative;
  z-index: 26;
}

.menu-toggle span {
  width: 2rem;
  height: var(--space-4);
  border-radius: var(--radius-pill);
  background: var(--color-primary-deep);
  transition: transform 500ms ease-in-out, opacity 500ms ease-in-out;
}

.menu-toggle.is-open span:nth-child(1) {
  transform: translateY(12px) rotate(45deg);
}

.menu-toggle.is-open span:nth-child(2) {
  opacity: 0;
}

.menu-toggle.is-open span:nth-child(3) {
  transform: translateY(-12px) rotate(-45deg);
}

.mobile-drawer {
  position: fixed;
  top: var(--header-height);
  left: 0;
  width: 100%;
  height: calc(100vh - var(--header-height));
  z-index: 24;
  display: none;
  background: linear-gradient(180deg, #4b3a6c 0%, #6a55a3 100%);
  transform: translateY(calc(-100% - var(--header-height)));
  transition: transform 500ms ease-in-out;
}

.mobile-drawer.is-open {
  transform: translateY(0);
}

.drawer-inner {
  height: 100%;
  padding: var(--space-40) var(--space-24) var(--space-40);
  display: grid;
  align-content: start;
  gap: var(--space-24);
}

.drawer-links,
.drawer-legal {
  display: grid;
  gap: var(--space-32);
}

.drawer-link {
  position: relative;
  width: fit-content;
  font-family: var(--font-poppins);
  font-size: var(--type-label-size);
  line-height: var(--type-label-line-height);
  letter-spacing: var(--type-label-letter-spacing);
  font-weight: var(--type-label-weight);
  color: var(--color-white);
  transition: color 300ms ease-out;
}

.drawer-link::after {
  content: '';
  position: absolute;
  left: 0;
  right: 0;
  bottom: -0.25rem;
  height: 2px;
  border-radius: var(--radius-pill);
  background: currentColor;
  transform: scaleX(0);
  transform-origin: center;
  transition: transform 300ms ease-out;
}

.drawer-link:hover::after,
.drawer-link:active::after,
.drawer-link.is-current::after {
  transform: scaleX(1);
}

.drawer-link.is-current {
  color: #fad1cf;
}

.drawer-divider {
  width: 100%;
  height: var(--space-8);
  border-top: 2px solid rgba(255, 255, 255, 0.95);
}

@media (max-width: 70rem) {
  .header-row {
    min-height: 5rem;
  }

  .site-header {
    --header-height: 6rem;
  }

  .desktop-nav,
  .desktop-cta {
    display: none;
  }

  .menu-toggle {
    display: inline-flex;
  }

  .mobile-drawer {
    display: grid;
  }
}

@media (min-width: 48.0625rem) and (max-width: 70rem) {
  .mobile-drawer {
    right: 0;
    left: auto;
    width: min(44vw, 22.5rem);
    background: #fbf5f1;
    transform: translateX(100%);
  }

  .mobile-drawer.is-open {
    transform: translateX(0);
  }

  .drawer-inner {
    padding: var(--space-48) var(--space-16) var(--space-40);
  }

  .drawer-link {
    color: #25223a;
    font-size: var(--type-h4-size);
    line-height: var(--type-h4-line-height);
    letter-spacing: var(--type-h4-letter-spacing);
    font-weight: 600;
  }

  .drawer-divider {
    border-top-color: #5e438c;
  }
}
</style>

<template>
  <header class="site-header" id="top">
    <div class="section-container header-row">
      <a href="/" class="logo-link" aria-label="Noek home">
        <site-logo :compact="isCompactLogo" />
      </a>

      <nav class="desktop-nav" aria-label="hoofd navigatie">
        <a v-for="item in navItems" :key="item.href" class="nav-link" :href="item.href">{{ item.label }}</a>
      </nav>

      <base-button class="desktop-cta" href="/#contact" label="Boek een demo" />

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
          <a v-for="item in navItems" :key="item.href" class="drawer-link" :href="item.href" @click="menuOpen = false">
            {{ item.label }}
          </a>
          <a class="drawer-link" href="/#contact" @click="menuOpen = false">Boek een Demo</a>
        </nav>

        <span class="drawer-divider" aria-hidden="true"></span>

        <nav class="drawer-legal" aria-label="legal links">
          <a class="drawer-link" href="#" @click="menuOpen = false">Privacy Policy</a>
          <a class="drawer-link" href="#" @click="menuOpen = false">Terms of Service</a>
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

const navItems = [
  { label: 'Home', href: '/' },
  { label: 'Over ons', href: '/over-ons' },
  { label: 'Features', href: '/#features' },
  { label: 'F.A.Q', href: '/#faq' },
  { label: 'Contact', href: '/#contact' }
];

const isCompactLogo = computed(() => viewportWidth.value <= 1024);

const onResize = () => {
  viewportWidth.value = window.innerWidth;
  if (viewportWidth.value > 1120) {
    menuOpen.value = false;
  }
};

onMounted(() => {
  window.addEventListener('resize', onResize);
});

onUnmounted(() => {
  document.body.style.overflow = '';
  window.removeEventListener('resize', onResize);
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
  flex-wrap: nowrap;
}

.nav-link {
  font-family: var(--font-poppins);
  font-size: var(--type-link-size);
  font-weight: var(--type-link-weight);
  line-height: var(--type-link-line-height);
  letter-spacing: var(--type-link-letter-spacing);
  color: var(--color-text);
  white-space: nowrap;
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
  background: #4f3c7a;
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
  font-family: var(--font-outfit);
  font-size: var(--type-label-size);
  line-height: var(--type-label-line-height);
  letter-spacing: var(--type-label-letter-spacing);
  font-weight: var(--type-label-weight);
  color: var(--color-white);
}

.drawer-divider {
  width: 100%;
  height: var(--space-8);
  border-top: 2px solid rgba(255, 255, 255, 0.95);
}

@media (max-width: 70rem) {
  .header-row {
    grid-template-columns: auto 1fr;
    min-height: 6.5rem;
  }

  .site-header {
    --header-height: 6.5rem;
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
    background: #f2efe9;
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

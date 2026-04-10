import { createMemoryHistory, createRouter, createWebHistory } from 'vue-router';

export const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import('../pages/home-page.vue')
  },
  {
    path: '/over-ons',
    name: 'about',
    component: () => import('../pages/about-page.vue')
  },
  {
    path: '/contact',
    name: 'contact',
    component: () => import('../pages/contact-page.vue')
  },
  {
    path: '/toon-je-interesse',
    name: 'interest',
    component: () => import('../pages/interest-page.vue')
  },
  {
    path: '/faq',
    name: 'faq',
    component: () => import('../pages/faq-page.vue')
  },
  {
    path: '/features',
    name: 'features',
    component: () => import('../pages/features-page.vue')
  },
  {
    path: '/privacybeleid',
    name: 'privacy',
    component: () => import('../pages/privacy-page.vue')
  },
  {
    path: '/algemene-voorwaarden',
    name: 'terms',
    component: () => import('../pages/terms-page.vue')
  }
];

export const scrollBehavior = (to, from, savedPosition) => {
  if (savedPosition) {
    return savedPosition;
  }

  if (to.hash) {
    return {
      el: to.hash,
      top: 112,
      behavior: 'smooth'
    };
  }

  return { top: 0 };
};

const router = createRouter({
  history: import.meta.env.SSR ? createMemoryHistory() : createWebHistory(),
  routes,
  scrollBehavior
});

export default router;
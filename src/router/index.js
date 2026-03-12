import { createRouter, createWebHistory } from 'vue-router';
import AboutPage from '../pages/about-page.vue';
import ContactPage from '../pages/contact-page.vue';
import FaqPage from '../pages/faq-page.vue';
import HomePage from '../pages/home-page.vue';
import InterestPage from '../pages/interest-page.vue';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomePage
    },
    {
      path: '/over-ons',
      name: 'about',
      component: AboutPage
    },
    {
      path: '/contact',
      name: 'contact',
      component: ContactPage
    },
    {
      path: '/toon-je-interesse',
      name: 'interest',
      component: InterestPage
    },
    {
      path: '/faq',
      name: 'faq',
      component: FaqPage
    }
  ],
  scrollBehavior(to, from, savedPosition) {
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
  }
});

export default router;
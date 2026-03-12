<template>
  <site-header />

  <main>
    <hero-section />

    <content-section title="Wat is Noek?" section-id="wat-is-noek" surface="light">
      Met Noek evolueert herdenken mee met de tijd. Ons white-label SaaS-platform geeft uitvaartondernemingen de
      mogelijkheid om families een persoonlijke digitale herdenkingsruimte aan te bieden. Een centrale plek om
      herinneringen te bewaren en te delen, ook lang na de uitvaart. Zo maken we nazorg persoonlijker, duurzamer en
      blijvend verbonden.
    </content-section>

    <how-it-works-section />
    <mission-vision-section />
  </main>

  <site-footer />
  <scroll-top-button />

  <span id="faq" class="faq-anchor" aria-hidden="true"></span>
</template>

<script setup>
import ContentSection from '../components/content-section.vue';
import HeroSection from '../components/hero-section.vue';
import HowItWorksSection from '../components/how-it-works-section.vue';
import MissionVisionSection from '../components/mission-vision-section.vue';
import ScrollTopButton from '../components/scroll-top-button.vue';
import SiteFooter from '../components/site-footer.vue';
import SiteHeader from '../components/site-header.vue';
</script>

<style scoped>
.faq-anchor {
  position: relative;
  display: block;
  top: -6rem;
  visibility: hidden;
}
</style>
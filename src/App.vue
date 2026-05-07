<template>
  <router-view />
  <consent-banner />
</template>

<script setup>
import { useHead } from '@unhead/vue';
import ConsentBanner from './components/consent-banner.vue';

useHead({
  htmlAttrs: {
    lang: 'nl-BE'
  }
});
</script>

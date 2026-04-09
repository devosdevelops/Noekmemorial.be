<template>
  <section class="hero-section" aria-labelledby="hero-title" v-scroll-reveal>
    <div class="section-container hero-grid">
      <div class="hero-content">
        <h1 id="hero-title" class="hero-title" v-scroll-reveal="{ delay: 40 }">Noek</h1>
        <p class="hero-tagline" v-scroll-reveal="{ delay: 80 }">Herdenken stopt niet na de uitvaart.</p>

        <div class="hero-actions" v-scroll-reveal="{ delay: 120 }">
          <base-button href="/#features" label="Ontdek de Features" />
          <base-button href="/over-ons" label="Wie zijn we?" variant="outline" />
        </div>
      </div>

      <div class="hero-art" aria-hidden="true">
        <img src="/assets/graphics/chrysant.svg" alt="" />
      </div>
    </div>
  </section>
</template>

<script setup>
import BaseButton from './base-button.vue';
</script>

<style scoped>
.hero-section {
  min-height: clamp(22rem, 46vw, 34rem);
  display: grid;
  align-items: center;
  padding: var(--space-80) 0 var(--space-64);
  position: relative;
  overflow: hidden;
}

.hero-grid {
  display: grid;
  grid-template-columns: minmax(0, 1fr) minmax(0, 0.9fr);
  gap: var(--space-48);
  align-items: center;
}

.hero-content {
  display: grid;
  align-content: center;
  justify-items: start;
  gap: var(--space-32);
}

.hero-title {
  margin: 0;
  color: var(--color-primary-deep);
  font-family: var(--font-brand);
  font-size: var(--type-landing-h1-size);
  font-weight: var(--type-h1-weight);
  line-height: var(--type-landing-h1-line-height);
  letter-spacing: var(--type-h1-letter-spacing);
}

.hero-tagline {
  margin: 0;
  color: var(--color-text);
  font-family: var(--font-poppins);
  font-size: clamp(1.4rem, calc(1.1rem + 1.6vw), 2.2rem);
  line-height: var(--type-h2-line-height);
  letter-spacing: var(--type-h2-letter-spacing);
}

.hero-actions {
  display: flex;
  flex-wrap: wrap;
  gap: var(--space-16);
}

.hero-art {
  display: grid;
  justify-items: end;
  align-items: center;
  opacity: 0.9;
}

.hero-art img {
  width: min(26rem, 100%);
  height: auto;
  object-fit: contain;
  opacity: 0.25;
}

@media (max-width: 40rem) {
  .hero-section {
    padding: var(--space-56) 0 var(--space-48);
  }

  .hero-grid {
    grid-template-columns: 1fr;
  }

  .hero-actions {
    width: 100%;
  }

  .hero-art {
    justify-items: start;
  }
}

@media (min-width: 75rem) {
  .hero-section {
    padding: var(--space-96) 0 var(--space-80);
  }
}
</style>

<template>
  <section class="page-section how-it-works" id="features" aria-labelledby="features-heading" v-scroll-reveal>
    <div class="section-container how-card">
      <div class="how-header" v-scroll-reveal="{ delay: 40, origin: 'left' }">
        <h2 id="features-heading" class="section-heading">Hoe werkt Noek?</h2>
        <p class="body-text">
          Wij verbinden technologie en uitvaartzorg voor blijvende digitale herdenkingsplekken. Zonder extra werkdruk,
          met jou als menselijk aanspreekpunt.
        </p>
        <h3 class="interest-title">Lijkt dit product interessant?</h3>
        <p class="body-text">
          Meld je interesse of lees meer door op de knop te drukken! Misschien kan jij ons helpen dit product nog beter te maken.
        </p>
      </div>

      <div class="how-grid" v-scroll-reveal="{ delay: 80, origin: 'up' }">
        <div class="how-steps">
          <div class="step-card">
            <span class="step-index">01</span>
            <p class="step-text">Naasten maken een online herdenkingskamer</p>
          </div>
          <div class="step-card">
            <span class="step-index">02</span>
            <p class="step-text">Vrienden en kennissen bezoeken deze herdenkingskamer</p>
          </div>
          <div class="step-card">
            <span class="step-index">03</span>
            <p class="step-text">Samen kunnen ze blijvende herinneringen delen</p>
          </div>
        </div>

        <div class="how-media" aria-hidden="true">
          <img :src="assetPaths.images.howItWorksThumb" alt="" />
          <span class="play-badge" aria-hidden="true">
            <span class="play-icon"></span>
          </span>
        </div>
      </div>

      <div class="action-row">
        <base-button href="/toon-je-interesse" label="Toon je interesse" block-mobile />
        <base-button href="/over-ons" label="Meer info" variant="outline" block-mobile />
      </div>
    </div>
  </section>
</template>

<script setup>
import { assetPaths } from '../config/asset-paths';
import BaseButton from './base-button.vue';
</script>

<style scoped>
.how-it-works {
  background: transparent;
}

.how-card {
  display: grid;
  gap: var(--space-32);
}

.how-header {
  display: grid;
  gap: var(--space-16);
}

.interest-title {
  margin: var(--space-8) 0 0;
  color: var(--color-primary-deep);
  font-size: var(--type-h3-size);
  font-weight: var(--type-h3-weight);
  line-height: var(--type-h3-line-height);
  letter-spacing: var(--type-h3-letter-spacing);
}

.how-grid {
  display: grid;
  grid-template-columns: minmax(0, 1fr) minmax(0, 1fr);
  gap: var(--space-32);
  align-items: center;
}

.how-steps {
  display: grid;
  gap: var(--space-16);
}

.step-card {
  display: flex;
  align-items: center;
  gap: var(--space-16);
  padding: var(--space-24) var(--space-24);
  min-height: 72px;
  border-radius: 16px;
  background: #f1edf9;
  box-shadow: 0 10px 16px rgba(73, 55, 108, 0.08);
}

.step-index {
  display: grid;
  place-items: center;
  width: 2.5rem;
  height: 2.5rem;
  border-radius: 16px;
  background: #e6dcf7;
  color: var(--color-primary-deep);
  font-family: var(--font-poppins);
  font-size: 1rem;
  font-weight: 400;
  line-height: 1;
  text-align: center;
  transform: translateY(-2px);
}

.step-text {
  margin: 0;
  color: var(--color-text);
  font-family: var(--font-poppins);
  line-height: 1.25;
}

.how-media {
  position: relative;
  border-radius: var(--radius-16);
  overflow: hidden;
  box-shadow: 0 18px 30px rgba(73, 55, 108, 0.16);
}

.how-media img {
  display: block;
  width: 100%;
  height: auto;
  object-fit: cover;
}

.play-badge {
  position: absolute;
  right: var(--space-16);
  bottom: var(--space-16);
  width: 3.25rem;
  height: 3.25rem;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.92);
  display: grid;
  place-items: center;
  box-shadow: 0 10px 18px rgba(73, 55, 108, 0.2);
}

.play-icon {
  width: 0;
  height: 0;
  border-top: 0.55rem solid transparent;
  border-bottom: 0.55rem solid transparent;
  border-left: 0.9rem solid #5a3f7d;
  margin-left: 0.15rem;
}

.action-row {
  display: flex;
  flex-wrap: wrap;
  gap: var(--space-24);
}

@media (max-width: 64rem) {
  .action-row {
    gap: var(--space-20);
  }

  .how-grid {
    grid-template-columns: 1fr;
  }

  .how-media {
    order: 2;
  }
}

@media (max-width: 40rem) {
  .how-steps {
    gap: 14px;
  }

  .step-card {
    display: grid;
    grid-template-columns: auto 1fr;
    align-items: stretch;
    min-height: 72px;
    padding: var(--space-16) var(--space-18);
    border-radius: 16px;
    overflow: hidden;
  }

  .step-index {
    position: static;
    width: 60px;
    height: auto;
    min-height: 100%;
    border-radius: 16px;
    align-self: stretch;
    display: grid;
    place-items: center;
  }

  .step-text {
    padding: 14px 18px;
    font-size: clamp(1rem, 3.6vw, 1.35rem);
    line-height: 1.2;
    white-space: normal;
    overflow-wrap: anywhere;
  }

  .action-row {
    width: auto;
    gap: var(--space-16);
  }
}
</style>

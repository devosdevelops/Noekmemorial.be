<template>
  <site-header />

  <main id="main-content" tabindex="-1" class="about-page">
    <section class="about-hero" aria-labelledby="about-title" v-scroll-reveal>
      <div class="section-container about-hero-inner" v-scroll-reveal="{ delay: 40 }">
        <p class="breadcrumb"><a href="/">Home</a> <span aria-hidden="true">&gt;</span> <span>Over ons</span></p>
        <h1 id="about-title" class="about-title">Over ons</h1>
      </div>

      <div class="about-hero-art" aria-hidden="true">
        <img src="/assets/graphics/chrysant.svg" alt="" />
      </div>
    </section>

    <section class="about-stack" aria-label="Over Noek inhoud">
      <section class="page-section story-section" aria-labelledby="story-heading" v-scroll-reveal>
        <div class="section-container story-grid">
          <figure class="story-image-wrap" v-scroll-reveal="{ delay: 40, origin: 'left' }">
            <img class="story-image" :src="assetPaths.images.howItWorksThumb" alt="Drie mensen in gesprek" />
          </figure>

          <div class="story-copy" v-scroll-reveal="{ delay: 80, origin: 'right' }">
            <h2 id="story-heading" class="section-heading">Het verhaal achter Noek</h2>
            <p class="body-text story-text">
              Soms wil je even stilstaan bij iemand.<br />
              Niet op een vaste plek.<br />
              Maar waar je op dat moment bent.<br /><br />

              In de trein.<br />
              Aan een tafel.<br />
              Op een stille wandeling.<br /><br />

              Noek ontstond vanuit dat gevoel.<br />
              De behoefte aan een plek die altijd dichtbij is.<br /><br />

              Een plek waar herinneringen zacht aanwezig mogen zijn.<br />
              Niet groot. Niet zwaar.<br />
              Gewoon een ruimte waar iemand nog even kan blijven.
            </p>
          </div>
        </div>

      </section>

      <section class="page-section what-section" aria-labelledby="what-heading" v-scroll-reveal>
        <div class="section-container what-inner">
          <h2 id="what-heading" class="section-heading" v-scroll-reveal="{ delay: 20 }">Wat doen we?</h2>

          <div class="what-row" v-scroll-reveal="{ delay: 60 }">
            <img class="what-thumb" :src="assetPaths.images.hands" alt="Handen die elkaar vasthouden" />
            <p class="body-text">
              <strong>Noek geeft herinneringen een plek die blijft bestaan.</strong><br />
              Een warme, persoonlijke ruimte waar familie en vrienden samenkomen om stil te staan, te delen en
              verbonden te blijven met wie ze missen. Verhalen, foto's en kleine momenten krijgen hier de ruimte om te
              blijven groeien, op eigen tempo, en op een manier die echt voelt.<br />
              Niet gebonden aan een plaats of moment, maar altijd dichtbij, waar je ook bent.<br />
              Zo kunnen uitvaartondernemingen families iets aanbieden dat verder gaat dan het afscheid alleen.
            </p>
          </div>
        </div>
      </section>

      <section class="page-section values-section" aria-labelledby="values-heading" v-scroll-reveal>
        <div class="section-container values-inner">
          <h2 id="values-heading" class="section-heading values-heading">Missie &amp; Visie</h2>

          <div class="values-grid">
            <article class="value-card mission" v-scroll-reveal="{ delay: 40, origin: 'up' }">
              <h3 class="subheading">Onze missie</h3>
              <p class="body-text value-text">
                Een White-label digitaal platform voor uitvaartondernemingen waarmee zij families een persoonlijke,
                blijvende herdenkingsruimte kunnen aanbieden.
              </p>

              <div class="value-image-wrap">
                <img class="value-image" :src="assetPaths.images.missionMission" alt="Twee mensen in digitale herinneringsruimte" />
              </div>
            </article>

            <article class="value-card vision" v-scroll-reveal="{ delay: 80, origin: 'up' }">
              <h3 class="subheading">Onze visie</h3>
              <p class="body-text value-text">
                Wij geloven in een samenleving waarin herdenken niet stopt na de uitvaart, maar uitgroeit tot een
                blijvend en persoonlijk proces.
              </p>

              <div class="value-image-wrap">
                <img class="value-image" :src="assetPaths.images.missionVision" alt="Twee personen onder maanlicht" />
              </div>
            </article>
          </div>
        </div>
      </section>

      <section class="page-section team-section" aria-labelledby="team-heading" v-scroll-reveal>
        <div class="section-container team-inner">
          <h2 id="team-heading" class="section-heading">Ons Team</h2>

          <p class="body-text team-intro">
            Drie <strong>studenten</strong> van <strong>Thomas More</strong> Mechelen ontwikkelden dit Noek als
            <strong>bachelorproef</strong>. Met dit digitale platform willen we een toegankelijke en persoonlijke plek
            bieden waar mensen hun dierbaren kunnen herdenken en herinneringen kunnen delen.
          </p>

          <div class="team-cards" aria-label="team leden">
            <article class="team-card">
              <figure class="team-photo-wrap">
                <img class="team-photo" src="/assets/images/ben-devos.jpg" alt="Ben Devos" />
              </figure>
              <h3 class="team-name">Ben Devos</h3>
            </article>

            <article class="team-card">
              <figure class="team-photo-wrap">
                <img class="team-photo" src="/assets/images/seren-koca.jpg" alt="Seren Koca" />
              </figure>
              <h3 class="team-name">Seren Koca</h3>
            </article>

            <article class="team-card">
              <figure class="team-photo-wrap">
                <img class="team-photo" src="/assets/images/audrey-kudjo.jpg" alt="Audrey Kudjo" />
              </figure>
              <h3 class="team-name">Audrey Kudjo</h3>
            </article>
          </div>
        </div>
      </section>
    </section>
  </main>

  <site-footer />
  <scroll-top-button />
</template>

<script setup>
import { useHead } from '@unhead/vue';
import ScrollTopButton from '../components/scroll-top-button.vue';
import SiteFooter from '../components/site-footer.vue';
import SiteHeader from '../components/site-header.vue';
import { assetPaths } from '../config/asset-paths';
import { createPageHead, SITE_URL } from '../utils/seo';

useHead(
  createPageHead({
    title: 'Over Noek',
    description: 'Lees het verhaal achter Noek en waar we voor staan.',
    path: '/over-ons',
    image: `${SITE_URL}${assetPaths.images.howItWorksThumb}`
  })
);
</script>

<style scoped>
.about-hero {
  min-height: clamp(15rem, 26vw, 20rem);
  display: grid;
  align-items: center;
  padding: var(--space-56) 0 var(--space-32);
  position: relative;
  overflow: visible;
}

.about-hero-inner {
  display: grid;
  gap: var(--space-8);
  position: relative;
  z-index: 2;
  max-width: none;
}

.breadcrumb {
  margin: 0;
  display: inline-flex;
  align-items: center;
  gap: var(--space-8);
  width: fit-content;
  color: var(--color-text);
  font-family: var(--font-brand);
  font-size: clamp(0.95rem, calc(0.85rem + 0.35vw), 1.1rem);
  font-weight: 500;
  line-height: 1.35;
}

.breadcrumb a {
  display: inline-flex;
  align-items: center;
  min-height: 2rem;
}

.about-title {
  margin: 0;
  color: var(--color-primary-deep);
  font-family: var(--font-brand);
  font-size: var(--type-landing-h1-size);
  font-weight: var(--type-h1-weight);
  line-height: var(--type-landing-h1-line-height);
  letter-spacing: 0.02em;
}

.about-hero-art {
  position: absolute;
  right: min(-20rem, -15vw);
  top: 53%;
  transform: translateY(-50%);
  width: min(56vw, 50rem);
  z-index: 0;
  pointer-events: none;
}

.about-hero-art img {
  width: 100%;
  height: auto;
  object-fit: contain;
  opacity: 0.25;
}

.about-stack {
  width: min(100% - 2 * var(--page-gutter), var(--container-max));
  margin: var(--space-48) auto var(--space-80);
  background: var(--color-surface-light);
  border-radius: var(--radius-48);
  padding: var(--space-32) 0;
  box-shadow: 0 30px 60px rgba(73, 55, 108, 0.12);
  position: relative;
  z-index: 2;
}

.about-stack .page-section {
  padding: var(--space-40) 0;
}

.about-stack .page-section:first-child {
  padding-top: var(--space-48);
}

.about-stack .page-section:last-child {
  padding-bottom: var(--space-48);
}

.story-section,
.what-section,
.values-section {
  background: transparent;
}

.story-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: var(--space-40);
  align-items: center;
}

.story-image-wrap {
  margin: 0;
  border-radius: var(--radius-16);
  overflow: hidden;
}

.story-image {
  width: 100%;
  height: auto;
  display: block;
  object-fit: cover;
}

.story-copy {
  display: grid;
  gap: var(--space-16);
}

.story-text {
  color: var(--color-text);
}

.what-section {
  background: var(--color-surface-soft);
}

.what-inner {
  display: grid;
  gap: var(--space-24);
}

.what-row {
  display: grid;
  grid-template-columns: auto minmax(0, 1fr);
  align-items: start;
  gap: var(--space-24);
}

.what-thumb {
  width: clamp(7rem, 22vw, 10rem);
  aspect-ratio: 5 / 6;
  border-radius: var(--radius-16);
  object-fit: cover;
}

.values-section {
  background: transparent;
}

.values-inner {
  display: grid;
  gap: var(--space-32);
}

.values-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: var(--space-32);
  align-items: stretch;
}

.value-card {
  display: flex;
  flex-direction: column;
  height: 100%;
  gap: var(--space-16);
}

.value-text {
  color: var(--color-text);
  margin: 0;
  margin-bottom: auto;
}

.value-image-wrap {
  margin-top: var(--space-24);
  width: 100%;
  aspect-ratio: 5 / 4;
  border-radius: var(--radius-16);
  background: var(--color-white);
  overflow: hidden;
}

.value-image {
  width: 100%;
  height: 100%;
  display: block;
  object-fit: cover;
}

.team-section {
  background: transparent;
}

.team-inner {
  display: grid;
  gap: var(--space-24);
}

.team-intro {
  color: var(--color-text);
  max-width: 100%;
}

.team-cards {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: var(--space-24);
}

.team-card {
  display: grid;
  gap: var(--space-16);
}

.team-photo-wrap {
  margin: 0;
  background: var(--color-surface-soft);
  border-radius: var(--radius-16);
  padding: 24px;
  overflow: hidden;
  aspect-ratio: 5 / 6;
}

.team-photo {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center center;
  border-radius: var(--radius-12);
}

.team-name {
  margin: 0;
  text-align: center;
  color: #1f1f29;
  font-family: var(--font-poppins);
  font-size: clamp(1.4rem, calc(1.1rem + 1vw), 2rem);
  font-weight: 500;
  line-height: 1.2;
}

@media (min-width: 75rem) {
  .about-hero {
    min-height: clamp(12rem, 18vw, 15rem);
    padding: var(--space-40) 0 var(--space-24);
  }

  .contact-hero {
    min-height: clamp(12rem, 18vw, 15rem);
    padding: var(--space-40) 0 var(--space-24);
  }

  .faq-hero {
    min-height: clamp(12rem, 18vw, 15rem);
    padding: var(--space-40) 0 var(--space-24);
  }

  .features-hero {
    min-height: clamp(12rem, 18vw, 15rem);
    padding: var(--space-40) 0 var(--space-24);
  }

  .interest-hero {
    min-height: clamp(12rem, 18vw, 15rem);
    padding: var(--space-40) 0 var(--space-24);
  }

  .privacy-hero {
    min-height: clamp(12rem, 18vw, 15rem);
    padding: var(--space-40) 0 var(--space-24);
  }

  .terms-hero {
    min-height: clamp(12rem, 18vw, 15rem);
    padding: var(--space-40) 0 var(--space-24);
  }

  .breadcrumb {
    font-size: 1.2rem;
  }

  .about-title {
    font-size: calc(var(--type-landing-h1-size) * 1.18);
    line-height: calc(var(--type-landing-h1-line-height) * 1.08);
  }
}

@media (max-width: 48rem) {
  .about-hero {
    min-height: 11.5rem;
    padding: var(--space-32) 0 var(--space-24);
  }

  .about-hero-inner {
    gap: var(--space-8);
    max-width: 100%;
  }

  .breadcrumb {
    display: inline-flex;
  }

  .about-hero-art {
    right: -36%;
    top: 58%;
    width: min(28rem, 90vw);
  }

  .about-stack {
    margin: 24px var(--page-gutter) var(--space-64);
    width: auto;
    border-radius: var(--radius-48);
    padding: 32px 24px;
  }

  .about-stack .section-container {
    width: 100%;
    padding-inline: 0;
  }

  .about-stack .page-section {
    padding: 24px 0;
  }

  .about-stack .page-section:first-child {
    padding-top: 0;
  }

  .about-stack .page-section:last-child {
    padding-bottom: 24px;
  }

  .story-grid {
    grid-template-columns: 1fr;
    gap: var(--space-24);
  }

  .story-image-wrap {
    order: 1;
  }

  .story-copy {
    order: 2;
  }

  .what-row {
    grid-template-columns: 1fr;
    gap: var(--space-16);
  }

  .what-section {
    margin-inline: -24px;
  }

  .about-stack .what-section .section-container {
    padding-inline: 24px;
  }

  .values-heading {
    display: none;
  }

  .values-grid {
    grid-template-columns: 1fr;
    gap: var(--space-24);
  }

  .team-cards {
    grid-template-columns: 1fr;
    gap: var(--space-24);
  }

  .vision {
    order: 1;
  }

  .mission {
    order: 2;
  }

  .value-image-wrap {
    margin-top: 0;
  }
}
</style>
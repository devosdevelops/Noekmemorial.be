<template>
  <site-header />

  <main class="about-page">
    <section class="about-hero" :style="heroStyle" aria-labelledby="about-title" v-scroll-reveal>
      <div class="section-container about-hero-inner" v-scroll-reveal="{ delay: 40 }">
        <p class="breadcrumb"><a href="/">Home</a> <span aria-hidden="true">&gt;</span> <span>Over ons</span></p>
        <h1 id="about-title" class="about-title">Over ons</h1>
      </div>
    </section>

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
            Noek is een white-label platform waarmee uitvaartondernemingen families een persoonlijke, digitale
            herdenkingsruimte aanbieden. Naadloos geïntegreerd in jouw dienstverlening. Het is een plek waar de
            herinneringen van dierbaren blijven bestaan.
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
              Noek wil mensen een digitale plek geven waar herinneringen kunnen blijven bestaan.<br /><br />
              Niet als iets dat afgesloten wordt.<br />
              Maar als iets dat mag blijven.<br /><br />
              Een plek waar je iemand kan herinneren op jouw manier.<br />
              Met woorden.<br />
              Met beelden.<br />
              Met stilte.<br /><br />
              En waar anderen even kunnen meekomen.<br /><br />
              Soms samen.<br />
              Soms alleen.<br /><br />
              Vanuit verschillende plekken.<br />
              Maar toch dichtbij.<br /><br />
              Zo ontstaat er een kleine digitale ruimte rond een herinnering.<br />
              Een plek van licht.<br />
              Waar iemand nog even aanwezig mag zijn.
            </p>

            <div class="value-image-wrap">
              <img class="value-image" :src="assetPaths.images.missionMission" alt="Twee mensen in digitale herinneringsruimte" />
            </div>
          </article>

          <article class="value-card vision" v-scroll-reveal="{ delay: 80, origin: 'up' }">
            <h3 class="subheading">Onze visie</h3>
            <p class="body-text value-text">
              Herdenken hoort niet vast te zitten aan één plaats.<br /><br />
              Niet aan een dag op de kalender.<br />
              Niet aan een bepaalde manier.<br /><br />
              Herinneringen bewegen met ons mee.<br />
              Door de tijd. Door het leven.<br /><br />
              Wij geloven dat herinneren iets levends is.<br />
              Iets dat kan groeien.<br />
              Een foto die opnieuw betekenis krijgt.<br />
              Een gedachte die later pas woorden vindt.<br />
              Een moment dat je samen wilt delen.<br /><br />
              Daarom zien wij herdenken als een open ruimte. Een digitale plek die meebeweegt.
            </p>

            <div class="value-image-wrap">
              <img class="value-image" :src="assetPaths.images.missionVision" alt="Twee personen onder maanlicht" />
            </div>
          </article>
        </div>
      </div>
    </section>
  </main>

  <site-footer />
  <scroll-top-button />
</template>

<script setup>
import { computed } from 'vue';
import ScrollTopButton from '../components/scroll-top-button.vue';
import SiteFooter from '../components/site-footer.vue';
import SiteHeader from '../components/site-header.vue';
import { assetPaths } from '../config/asset-paths';

const heroStyle = computed(() => {
  const heroImage = assetPaths.images.aboutHeroBackground || assetPaths.images.heroBackground;

  if (!heroImage) {
    return {};
  }

  return {
    '--about-hero-image': `url(${heroImage})`
  };
});
</script>

<style scoped>
.about-hero {
  min-height: clamp(13rem, 22vw, 17.5rem);
  display: grid;
  align-items: end;
  padding: var(--space-40) var(--space-0);
  background:
    var(--about-hero-image, none) center / cover no-repeat,
    linear-gradient(120deg, var(--color-surface-soft) 0%, var(--color-surface-light) 100%);
}

.about-hero-inner {
  display: grid;
  gap: var(--space-24);
  padding-bottom: var(--space-8);
}

.breadcrumb {
  margin: 0;
  display: inline-flex;
  align-items: center;
  gap: var(--space-8);
  width: fit-content;
  color: var(--color-text);
  font-family: var(--font-outfit);
  font-size: var(--type-small-size);
  font-weight: 500;
  line-height: var(--type-small-line-height);
}

.breadcrumb a {
  display: inline-flex;
  align-items: center;
  min-height: 2rem;
}

.about-title {
  margin: 0;
  color: var(--color-text);
  font-family: var(--font-ambella);
  font-size: var(--type-landing-h1-size);
  font-weight: var(--type-h1-weight);
  line-height: var(--type-landing-h1-line-height);
  letter-spacing: var(--type-h1-letter-spacing);
}

.story-section {
  background: var(--color-page);
}

.story-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: var(--space-40);
  align-items: center;
}

.story-image-wrap {
  margin: 0;
  border-radius: var(--radius-12);
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
  background: var(--color-surface-light);
}

.what-inner {
  display: grid;
  gap: var(--space-24);
}

.what-row {
  display: grid;
  grid-template-columns: auto 1fr;
  align-items: start;
  gap: var(--space-16);
}

.what-thumb {
  width: clamp(7rem, 22vw, 10rem);
  aspect-ratio: 5 / 6;
  border-radius: var(--radius-12);
  object-fit: cover;
}

.values-section {
  background: var(--color-surface-soft);
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
}

.value-text {
  margin: 0;
  margin-bottom: auto;
}

.value-image-wrap {
  margin-top: var(--space-24);
  width: 100%;
  aspect-ratio: 5 / 4;
  border-radius: var(--radius-12);
  background: var(--color-white);
  overflow: hidden;
}

.value-image {
  width: 100%;
  height: 100%;
  display: block;
  object-fit: cover;
}

@media (max-width: 48rem) {
  .about-hero {
    min-height: 10rem;
    padding: var(--space-24) var(--space-0);
  }

  .about-hero-inner {
    gap: var(--space-4);
  }

  .breadcrumb {
    display: none;
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
    grid-template-columns: auto 1fr;
    gap: var(--space-8);
  }

  .values-heading {
    display: none;
  }

  .values-grid {
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
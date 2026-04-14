<template>
  <site-header />

  <main id="main-content" tabindex="-1" class="faq-page">
    <section class="faq-hero" aria-labelledby="faq-title" v-scroll-reveal>
      <div class="section-container faq-hero-inner" v-scroll-reveal="{ delay: 40 }">
        <p class="breadcrumb"><a href="/">Home</a> <span aria-hidden="true">&gt;</span> <span>FAQ</span></p>
        <h1 id="faq-title" class="faq-title">Veelgestelde vragen</h1>
      </div>

      <div class="faq-hero-art" aria-hidden="true">
        <img src="/assets/graphics/chrysant.svg" alt="" />
      </div>
    </section>

    <section class="faq-stack" aria-label="Veelgestelde vragen inhoud">
      <section class="page-section faq-intro-section" v-scroll-reveal>
        <div class="section-container faq-intro-content">
          <h2 class="section-heading">Veelgestelde vragen</h2>
          <p class="faq-intro-copy">
            Heb je een vraag? Hier vind je antwoorden op de meest voorkomende vragen, zodat je snel de informatie vindt
            die je nodig hebt.
          </p>
        </div>
      </section>

      <section class="page-section faq-accordion-section" aria-label="Veelgestelde vragen" v-scroll-reveal>
        <div class="section-container faq-accordion-content">
          <div class="faq-grid" v-scroll-reveal="{ delay: 40 }">
            <div class="faq-column">
              <article
                v-for="item in leftColumnItems"
                :key="item.index"
                class="faq-item"
                :class="{ 'is-open': openIndex === item.index }"
              >
                <button
                  class="faq-trigger"
                  :aria-expanded="openIndex === item.index ? 'true' : 'false'"
                  :aria-controls="`faq-answer-${item.index}`"
                  @click="toggle(item.index)"
                >
                  <span class="faq-question">{{ item.question }}</span>
                  <span class="faq-chevron" aria-hidden="true">⌄</span>
                </button>

                <transition
                  name="faq-answer-transition"
                  @enter="enterAnswer"
                  @after-enter="afterEnterAnswer"
                  @before-leave="beforeLeaveAnswer"
                  @leave="leaveAnswer"
                >
                  <div
                    v-if="openIndex === item.index"
                    :id="`faq-answer-${item.index}`"
                    class="faq-answer"
                    role="region"
                  >
                    <p class="faq-answer-text">{{ item.answer }}</p>
                  </div>
                </transition>
              </article>
            </div>

            <div class="faq-column">
              <article
                v-for="item in rightColumnItems"
                :key="item.index"
                class="faq-item"
                :class="{ 'is-open': openIndex === item.index }"
              >
                <button
                  class="faq-trigger"
                  :aria-expanded="openIndex === item.index ? 'true' : 'false'"
                  :aria-controls="`faq-answer-${item.index}`"
                  @click="toggle(item.index)"
                >
                  <span class="faq-question">{{ item.question }}</span>
                  <span class="faq-chevron" aria-hidden="true">⌄</span>
                </button>

                <transition
                  name="faq-answer-transition"
                  @enter="enterAnswer"
                  @after-enter="afterEnterAnswer"
                  @before-leave="beforeLeaveAnswer"
                  @leave="leaveAnswer"
                >
                  <div
                    v-if="openIndex === item.index"
                    :id="`faq-answer-${item.index}`"
                    class="faq-answer"
                    role="region"
                  >
                    <p class="faq-answer-text">{{ item.answer }}</p>
                  </div>
                </transition>
              </article>
            </div>
          </div>
        </div>
      </section>

      <section class="page-section faq-contact-section" aria-label="Contact hulp" v-scroll-reveal>
        <div class="section-container faq-contact-content">
          <article class="faq-contact-card">
            <p class="faq-contact-copy">Je antwoord niet gevonden? We helpen je graag verder.</p>
            <base-button href="/contact" label="Neem contact op" />
          </article>
        </div>
      </section>
    </section>
  </main>

  <site-footer />
  <scroll-top-button />
</template>

<script setup>
import { ref } from 'vue';
import { useHead } from '@unhead/vue';
import BaseButton from '../components/base-button.vue';
import ScrollTopButton from '../components/scroll-top-button.vue';
import SiteFooter from '../components/site-footer.vue';
import SiteHeader from '../components/site-header.vue';
import { createPageHead } from '../utils/seo';

useHead(
  createPageHead({
    title: 'Veelgestelde vragen',
    description: 'Antwoorden op de meest voorkomende vragen over Noek en digitale herdenkingsruimtes.',
    path: '/faq'
  })
);

const openIndex = ref(null);

const toggle = (index) => {
  openIndex.value = openIndex.value === index ? null : index;
};

const enterAnswer = (element) => {
  element.style.height = '0';
  element.style.opacity = '0';
  element.style.overflow = 'hidden';

  requestAnimationFrame(() => {
    element.style.height = `${element.scrollHeight}px`;
    element.style.opacity = '1';
  });
};

const afterEnterAnswer = (element) => {
  element.style.height = 'auto';
  element.style.overflow = '';
};

const beforeLeaveAnswer = (element) => {
  element.style.height = `${element.scrollHeight}px`;
  element.style.opacity = '1';
  element.style.overflow = 'hidden';
};

const leaveAnswer = (element) => {
  requestAnimationFrame(() => {
    element.style.height = '0';
    element.style.opacity = '0';
  });
};

const faqItems = [
  {
    question: 'Voor wie is Noek bedoeld?',
    answer:
      'Noek is bedoeld voor uitvaartondernemingen die families een persoonlijke digitale herdenkingsruimte willen aanbieden. Families kunnen de ruimte gebruiken om herinneringen te bewaren en te delen met dierbaren, ongeacht waar ze zich bevinden.'
  },
  {
    question: 'Is de digitale ruimte veilig en prive?',
    answer:
      'Ja. Elke herdenkingsruimte is prive en alleen toegankelijk voor uitgenodigde familieleden en vrienden. Noek verwerkt alle persoonsgegevens conform de AVG-wetgeving en deelt nooit gegevens met derden.'
  },
  {
    question: 'Hoe eenvoudig is het om Noek te implementeren als uitvaartbedrijf?',
    answer:
      'Noek is een white-label platform dat naadloos integreert in jouw bestaande dienstverlening. Onze onboarding begeleidt je stap voor stap. Er is geen technische kennis vereist.'
  },
  {
    question: 'Welke soort content kan er gedeeld worden in een herdenkingsruimte?',
    answer:
      "Families kunnen foto's, teksten, herinneringen en persoonlijke berichten delen. De ruimte is flexibel en groeit mee met wat de familie wil bewaren en eerbiedig wil delen."
  },
  {
    question: 'Kunnen families de ruimtes blijven gebruiken op lange termijn?',
    answer:
      'Ja. Herdenkingsruimtes zijn voor de lange termijn bedoeld. Families kunnen de ruimte blijven bezoeken en aanvullen, ook jaren na het overlijden.'
  },
  {
    question: 'Vervangt Noek de begeleiding die je van de uitvaartondernemer krijgt?',
    answer:
      'Nee. Noek is een aanvulling op de persoonlijke begeleiding van de uitvaartondernemer. Het biedt een digitale ruimte die de menselijke begeleiding ondersteunt, niet vervangt.'
  },
  {
    question: 'Hoe onderscheidt Noek zich van sociale media?',
    answer:
      'Noek is een besloten, rustige ruimte zonder advertenties of algoritmen. Het is volledig gericht op herdenken, niet op likes of betrokkenheid. Privacy en rust staan centraal.'
  }
];

const splitIndex = Math.ceil(faqItems.length / 2);

const leftColumnItems = faqItems.slice(0, splitIndex).map((item, index) => ({
  ...item,
  index
}));

const rightColumnItems = faqItems.slice(splitIndex).map((item, index) => ({
  ...item,
  index: splitIndex + index
}));
</script>

<style scoped>
.faq-hero {
  min-height: clamp(15rem, 26vw, 20rem);
  display: grid;
  align-items: center;
  padding: var(--space-56) 0 var(--space-32);
  position: relative;
  overflow: visible;
}

.faq-hero-inner {
  display: grid;
  gap: var(--space-8);
  max-width: none;
  position: relative;
  z-index: 2;
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

.faq-title {
  margin: 0;
  color: var(--color-primary-deep);
  font-family: var(--font-brand);
  font-size: var(--type-landing-h1-size);
  font-weight: var(--type-h1-weight);
  line-height: var(--type-landing-h1-line-height);
  letter-spacing: 0.02em;
}

.faq-hero-art {
  position: absolute;
  right: min(-20rem, -15vw);
  top: 53%;
  transform: translateY(-50%);
  width: min(56vw, 50rem);
  z-index: 0;
  pointer-events: none;
}

.faq-hero-art img {
  width: 100%;
  height: auto;
  object-fit: contain;
  opacity: 0.25;
}

.faq-stack {
  width: min(100% - 2 * var(--page-gutter), var(--container-max));
  margin: var(--space-48) auto var(--space-80);
  background: var(--color-surface-light);
  border-radius: var(--radius-48);
  padding: var(--space-32) 0;
  box-shadow: 0 30px 60px rgba(73, 55, 108, 0.12);
  position: relative;
  z-index: 2;
}

.faq-stack .page-section {
  padding: var(--space-40) 0;
}

.faq-stack .page-section:first-child {
  padding-top: var(--space-48);
}

.faq-stack .page-section:last-child {
  padding-bottom: var(--space-48);
}

.faq-intro-content {
  display: grid;
  gap: var(--space-16);
}

.faq-intro-copy {
  margin: 0;
  color: var(--color-text);
  font-family: var(--font-poppins);
  font-size: var(--type-body-size);
  font-weight: var(--type-body-weight);
  line-height: var(--type-body-line-height);
  max-width: 64ch;
}

.faq-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: var(--space-24);
}

.faq-column {
  display: grid;
  gap: var(--space-24);
  align-content: start;
}

.faq-item {
  background: var(--color-surface-soft);
  border-radius: var(--radius-16);
  box-shadow: 0 10px 16px rgba(73, 55, 108, 0.08);
  overflow: hidden;
}

.faq-trigger {
  width: 100%;
  border: none;
  background: transparent;
  color: var(--color-text);
  cursor: pointer;
  text-align: left;
  display: grid;
  grid-template-columns: minmax(0, 1fr) auto;
  align-items: center;
  gap: var(--space-16);
  padding: var(--space-16) var(--space-24);
}

.faq-trigger:focus {
  outline: none;
}

.faq-trigger:focus-visible {
  box-shadow: inset 0 0 0 2px rgba(63, 44, 117, 0.45);
}

.faq-question {
  font-family: var(--font-brand);
  font-size: var(--type-h4-size);
  font-weight: 600;
  line-height: var(--type-h4-line-height);
}

.faq-chevron {
  display: inline-grid;
  place-items: center;
  width: 2rem;
  height: 2rem;
  border-radius: var(--radius-pill);
  border: 2px solid rgba(63, 44, 117, 0.35);
  color: var(--color-primary-deep);
  font-size: 1rem;
  line-height: 1;
  transition: transform 260ms ease-out;
}

.faq-item.is-open .faq-chevron {
  transform: rotate(180deg);
}

.faq-answer {
  border-top: 2px solid rgba(73, 55, 108, 0.12);
  overflow: hidden;
}

.faq-answer-transition-enter-active,
.faq-answer-transition-leave-active {
  transition: height 260ms ease-out, opacity 220ms ease-out;
  overflow: hidden;
}

.faq-answer-text {
  margin: 0;
  padding: var(--space-16) var(--space-24) var(--space-24);
  color: var(--color-text);
  font-family: var(--font-poppins);
  font-size: var(--type-body-size);
  font-weight: var(--type-body-weight);
  line-height: var(--type-body-line-height);
}

.faq-contact-card {
  background: var(--color-surface-soft);
  border-radius: var(--radius-16);
  padding: var(--space-24);
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: var(--space-24);
}

.faq-contact-copy {
  margin: 0;
  color: var(--color-text);
  font-family: var(--font-poppins);
  font-size: var(--type-body-size);
  font-weight: 500;
  line-height: var(--type-body-line-height);
}

@media (min-width: 70rem) {
  .faq-grid {
    grid-template-columns: 1fr 1fr;
    column-gap: var(--space-24);
  }
}

@media (min-width: 75rem) {
  .faq-hero {
    min-height: clamp(12rem, 18vw, 15rem);
    padding: var(--space-40) 0 var(--space-24);
  }

  .breadcrumb {
    font-size: 1.2rem;
  }

  .faq-title {
    font-size: calc(var(--type-landing-h1-size) * 1.18);
    line-height: calc(var(--type-landing-h1-line-height) * 1.08);
  }
}

@media (max-width: 48rem) {
  .faq-hero {
    min-height: 11.5rem;
    padding: var(--space-32) 0 var(--space-24);
  }

  .faq-hero-inner {
    gap: var(--space-8);
  }

  .breadcrumb {
    display: inline-flex;
  }

  .faq-hero-art {
    right: -36%;
    top: 58%;
    width: min(28rem, 90vw);
  }

  .faq-stack {
    margin: 24px var(--page-gutter) var(--space-64);
    width: auto;
    border-radius: var(--radius-48);
    padding: 32px 24px;
  }

  .faq-stack .section-container {
    width: 100%;
    padding-inline: 0;
  }

  .faq-stack .page-section {
    padding: 24px 0;
  }

  .faq-stack .page-section:first-child {
    padding-top: 0;
  }

  .faq-stack .page-section:last-child {
    padding-bottom: 24px;
  }

  .faq-trigger {
    padding: var(--space-16);
    gap: var(--space-8);
  }

  .faq-answer-text {
    padding: var(--space-16);
  }

  .faq-contact-card {
    flex-direction: column;
    align-items: flex-start;
  }
}
</style>

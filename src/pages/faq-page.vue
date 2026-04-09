<template>
  <site-header />

  <main class="faq-page">
    <section class="faq-hero" :style="heroStyle" aria-labelledby="faq-title" v-scroll-reveal>
      <div class="section-container faq-hero-inner" v-scroll-reveal="{ delay: 40 }">
        <p class="breadcrumb"><a href="/">Home</a> <span aria-hidden="true">&gt;</span> <span>FAQ</span></p>
        <h1 id="faq-title" class="faq-title">FAQ</h1>
      </div>
    </section>

    <section class="page-section faq-section" aria-label="Veelgestelde vragen">
      <div class="section-container faq-content">
        <p class="faq-intro" v-scroll-reveal>
          Heb je een vraag? Hier vind je antwoorden op de meest voorkomende vragen, zodat je snel de informatie vindt die je nodig hebt.
        </p>

        <div class="faq-grid" v-scroll-reveal="{ delay: 40 }">
          <div class="faq-column">
            <div
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
                <span class="faq-chevron" aria-hidden="true">▼</span>
                {{ item.question }}
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
            </div>
          </div>

          <div class="faq-column">
            <div
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
                <span class="faq-chevron" aria-hidden="true">▼</span>
                {{ item.question }}
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
            </div>
          </div>
        </div>

        <p class="faq-no-answer" v-scroll-reveal="{ delay: 60 }">
          Je antwoord niet gevonden?&nbsp;
          <a class="faq-contact-link" href="/contact">Neem contact op met ons</a>
        </p>
      </div>
    </section>
  </main>

  <site-footer />
  <scroll-top-button />
</template>

<script setup>
import { computed, ref } from 'vue';
import ScrollTopButton from '../components/scroll-top-button.vue';
import SiteFooter from '../components/site-footer.vue';
import SiteHeader from '../components/site-header.vue';
import { assetPaths } from '../config/asset-paths';

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

const heroStyle = computed(() => ({
  '--faq-hero-image': `url(${assetPaths.images.faq})`
}));

const faqItems = [
  {
    question: 'Voor wie is Noek bedoeld?',
    answer:
      'Noek is bedoeld voor uitvaartondernemingen die families een persoonlijke digitale herdenkingsruimte willen aanbieden. Families kunnen de ruimte gebruiken om herinneringen te bewaren en te delen met dierbaren, ongeacht waar ze zich bevinden.'
  },
  {
    question: 'Is de digitale ruimte veilig en privé?',
    answer:
      'Ja. Elke herdenkingsruimte is privé en alleen toegankelijk voor uitgenodigde familieleden en vrienden. Noek verwerkt alle persoonsgegevens conform de AVG-wetgeving en deelt nooit gegevens met derden.'
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
    question: 'Vervangt Noek de begeleiding die je van het uitvaartondernemer krijgt?',
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
/* ─── Hero ─────────────────────────────────────────── */
.faq-hero {
  min-height: clamp(13rem, 22vw, 17.5rem);
  display: grid;
  align-items: end;
  padding: var(--space-40) var(--space-0);
  background:
    var(--faq-hero-image, none) right center / cover no-repeat,
    linear-gradient(120deg, var(--color-surface-soft) 0%, var(--color-surface-light) 100%);
}

.faq-hero-inner {
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
  font-family: var(--font-brand);
  font-size: var(--type-small-size);
  font-weight: 500;
  line-height: var(--type-small-line-height);
}

.breadcrumb a {
  display: inline-flex;
  align-items: center;
  min-height: 2rem;
}

.faq-title {
  margin: 0;
  color: var(--color-text);
  font-family: var(--font-ambella);
  font-size: var(--type-landing-h1-size);
  font-weight: var(--type-h1-weight);
  line-height: var(--type-landing-h1-line-height);
  letter-spacing: var(--type-h1-letter-spacing);
}

/* ─── FAQ Section ───────────────────────────────────── */
.faq-section {
  background: var(--color-surface-soft);
}

.faq-content {
  display: grid;
  gap: var(--space-32);
}

.faq-intro {
  margin: 0;
  color: var(--color-text);
  font-family: var(--font-brand);
  font-size: var(--type-body-size);
  font-weight: var(--type-body-weight);
  line-height: var(--type-body-line-height);
}

/* ─── Accordion Grid ────────────────────────────────── */
.faq-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: var(--space-16);
}

.faq-column {
  display: grid;
  gap: var(--space-16);
  align-content: start;
}

/* ─── Accordion Item ────────────────────────────────── */
.faq-item {
  display: grid;
  border-radius: var(--radius-12);
  overflow: hidden;
}

.faq-trigger {
  display: flex;
  align-items: center;
  gap: var(--space-16);
  width: 100%;
  padding: var(--space-16) var(--space-24);
  background: rgba(110, 75, 216, 0.18);
  border: none;
  border-radius: var(--radius-12);
  cursor: pointer;
  text-align: left;
  color: var(--color-text);
  font-family: var(--font-brand);
  font-size: var(--type-body-size);
  font-weight: 500;
  line-height: var(--type-body-line-height);
  transition: background 300ms ease-out;
}

.faq-trigger:focus {
  outline: none;
}

.faq-trigger:focus-visible {
  outline: 2px solid rgba(63, 44, 117, 0.7);
  outline-offset: -2px;
}

.faq-trigger:hover {
  background: rgba(110, 75, 216, 0.26);
}

.faq-item.is-open .faq-trigger {
  background: rgba(110, 75, 216, 0.28);
  border-radius: var(--radius-12) var(--radius-12) 0 0;
}

.faq-chevron {
  flex-shrink: 0;
  font-size: 0.625rem;
  color: var(--color-primary);
  transition: transform 300ms ease-out;
}

.faq-item.is-open .faq-chevron {
  transform: rotate(180deg);
}

/* ─── Accordion Answer ──────────────────────────────── */
.faq-answer {
  background: rgba(110, 75, 216, 0.1);
  border-radius: 0 0 var(--radius-12) var(--radius-12);
  overflow: hidden;
}

.faq-answer-transition-enter-active,
.faq-answer-transition-leave-active {
  transition:
    height 300ms ease-out,
    opacity 220ms ease-out;
  overflow: hidden;
}

.faq-answer-text {
  margin: 0;
  padding: var(--space-16) var(--space-24);
  color: var(--color-text-muted);
  font-family: var(--font-brand);
  font-size: var(--type-body-size);
  font-weight: var(--type-body-weight);
  line-height: var(--type-body-line-height);
}

/* ─── No Answer strip ───────────────────────────────── */
.faq-no-answer {
  margin: 0;
  color: var(--color-text);
  font-family: var(--font-brand);
  font-size: var(--type-body-size);
  font-weight: var(--type-body-weight);
  line-height: var(--type-body-line-height);
}

.faq-contact-link {
  color: var(--color-primary);
  font-weight: 500;
  text-decoration: underline;
  text-underline-offset: 0.2em;
  transition: color 300ms ease-out;
}

.faq-contact-link:hover {
  color: var(--color-primary-deep);
}

/* ─── Tablet ────────────────────────────────────────── */
@media (min-width: 48rem) {
  .faq-hero {
    min-height: clamp(13rem, 22vw, 17.5rem);
  }
}

/* ─── Desktop (2-column accordion) ─────────────────── */
@media (min-width: 70rem) {
  .faq-grid {
    grid-template-columns: 1fr 1fr;
    column-gap: var(--space-24);
    align-items: start;
  }
}

/* ─── Mobile tweaks ─────────────────────────────────── */
@media (max-width: 48rem) {
  .faq-hero {
    min-height: 10rem;
    padding: var(--space-24) var(--space-0);
  }

  .faq-hero-inner {
    gap: var(--space-4);
  }

  .breadcrumb {
    display: none;
  }

  .faq-trigger {
    padding: var(--space-16);
    gap: var(--space-8);
  }

  .faq-answer-text {
    padding: var(--space-16);
  }

  .faq-column {
    gap: var(--space-16);
  }
}
</style>

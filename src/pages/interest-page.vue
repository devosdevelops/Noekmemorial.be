<template>
  <site-header />

  <main id="main-content" tabindex="-1" class="interest-page">
    <section class="interest-hero" aria-labelledby="interest-title" v-scroll-reveal>
      <div class="section-container interest-hero-inner" v-scroll-reveal="{ delay: 40 }">
        <p class="breadcrumb"><a href="/">Home</a> <span aria-hidden="true">&gt;</span> <span>Toon je interesse</span></p>
        <h1 id="interest-title" class="interest-title">Toon je interesse</h1>
      </div>

      <div class="interest-hero-art" aria-hidden="true">
        <img src="/assets/graphics/chrysant.svg" alt="" />
      </div>
    </section>

    <section class="interest-stack" aria-label="Interesse inhoud">
      <section class="page-section interest-intro-section" aria-label="Interesseintro" v-scroll-reveal>
        <div class="section-container interest-intro-inner">
          <p class="intro-copy">
            We zijn momenteel ons platform aan het ontwikkelen. Heb je interesse om het later te gebruiken, updates te
            ontvangen of ons te helpen met feedback? Laat hieronder je gegevens achter.
          </p>
        </div>
      </section>

      <section class="page-section interest-form-section" aria-labelledby="interest-form-heading" v-scroll-reveal>
        <div class="section-container form-shell" v-scroll-reveal="{ delay: 30 }">
          <h2 id="interest-form-heading" class="section-heading">Interesseformulier</h2>

          <form class="interest-form" @submit.prevent="handleSubmit">
            <div class="field-group">
              <label class="field-label" for="interest-first-name">
                Naam<span class="required-mark" aria-hidden="true">*</span>
                <span class="sr-only">verplicht</span>
              </label>

              <div class="name-row">
                <input
                  id="interest-first-name"
                  name="firstName"
                  type="text"
                  autocomplete="given-name"
                  placeholder="Voornaam"
                  required
                  v-model="firstName"
                />
                <input name="lastName" type="text" autocomplete="family-name" placeholder="Naam" required v-model="lastName" />
              </div>
            </div>

            <fieldset class="field-group radio-group">
              <legend class="field-label">
                Ik ben...<span class="required-mark" aria-hidden="true">*</span>
                <span class="sr-only">verplicht</span>
              </legend>
              <div class="radio-row" role="radiogroup" aria-label="Ik ben">
                <label class="radio-option">
                  <input type="radio" name="profileType" value="individu" required v-model="profileType" />
                  <span class="radio-mark" aria-hidden="true"></span>
                  <span>Individu</span>
                </label>
                <label class="radio-option">
                  <input type="radio" name="profileType" value="bedrijf" required v-model="profileType" />
                  <span class="radio-mark" aria-hidden="true"></span>
                  <span>Bedrijf</span>
                </label>
              </div>
            </fieldset>

            <transition name="field-reveal">
              <div class="field-group" v-if="showCompanyField">
                <label class="field-label" for="company-name">
                  Naam van het bedrijf<span class="required-mark" aria-hidden="true">*</span>
                  <span class="sr-only">verplicht</span>
                </label>
                <input
                  id="company-name"
                  name="companyName"
                  type="text"
                  autocomplete="organization"
                  placeholder="Naam bedrijf"
                  :required="showCompanyField"
                  v-model="companyName"
                />
              </div>
            </transition>

            <fieldset class="field-group radio-group">
              <legend class="field-label">
                Wil je updates ontvangen?<span class="required-mark" aria-hidden="true">*</span>
                <span class="sr-only">verplicht</span>
              </legend>
              <div class="radio-row" role="radiogroup" aria-label="Wil je updates ontvangen">
                <label class="radio-option">
                  <input type="radio" name="receiveUpdates" value="ja" required v-model="receiveUpdates" />
                  <span class="radio-mark" aria-hidden="true"></span>
                  <span>Ja</span>
                </label>
                <label class="radio-option">
                  <input type="radio" name="receiveUpdates" value="nee" required v-model="receiveUpdates" />
                  <span class="radio-mark" aria-hidden="true"></span>
                  <span>Nee</span>
                </label>
              </div>
            </fieldset>

            <fieldset class="field-group radio-group">
              <legend class="field-label">
                Mogen we je contacteren?<span class="required-mark" aria-hidden="true">*</span>
                <span class="sr-only">verplicht</span>
              </legend>
              <p class="helper-copy">Bijvoorbeeld voor feedback of gebruikerstesten</p>
              <div class="radio-row" role="radiogroup" aria-label="Mogen we je contacteren">
                <label class="radio-option">
                  <input type="radio" name="allowContact" value="ja" required v-model="allowContact" />
                  <span class="radio-mark" aria-hidden="true"></span>
                  <span>Ja</span>
                </label>
                <label class="radio-option">
                  <input type="radio" name="allowContact" value="nee" required v-model="allowContact" />
                  <span class="radio-mark" aria-hidden="true"></span>
                  <span>Nee</span>
                </label>
              </div>
            </fieldset>

            <transition name="field-reveal">
              <div class="field-group" v-if="showEmailField">
                <label class="field-label" for="interest-email">
                  Emailadres<span class="required-mark" aria-hidden="true">*</span>
                  <span class="sr-only">verplicht</span>
                </label>
                <input
                  id="interest-email"
                  name="email"
                  type="email"
                  autocomplete="email"
                  placeholder="naam@company.com"
                  inputmode="email"
                  :required="showEmailField"
                  v-model="interestEmail"
                />
              </div>
            </transition>

            <div class="field-group">
              <label class="field-label" for="interest-message">Heb je nog opmerkingen?</label>
              <textarea id="interest-message" name="message" placeholder="Type hier uw bericht..." v-model="interestMessage"></textarea>
            </div>

            <div class="submit-row">
              <button type="submit" class="submit-button" :disabled="!isFormValid || isSubmitting">Verzenden</button>
            </div>
          </form>
        </div>
      </section>
    </section>

    <status-toast :open="toastOpen" :variant="toastVariant" :message="toastMessage" />
  </main>

  <site-footer />
  <scroll-top-button />
</template>

<script setup>
import { computed, ref, watch } from 'vue';
import { useHead } from '@unhead/vue';
import { useRouter } from 'vue-router';
import emailjs from '@emailjs/browser';
import ScrollTopButton from '../components/scroll-top-button.vue';
import SiteFooter from '../components/site-footer.vue';
import SiteHeader from '../components/site-header.vue';
import StatusToast from '../components/status-toast.vue';
import { EMAILJS_CONFIG, createRequestId, createRequestTimestamp } from '../config/emailjs';
import { createPageHead } from '../utils/seo';

useHead(
  createPageHead({
    title: 'Toon je interesse',
    description: 'Interesse in dit concept? Laat het hier weten! We ontvangen graag feedback en houden je op de hoogte van de nieuwste ontwikkelingen.',
    path: '/toon-je-interesse'
  })
);

const firstName = ref('');
const lastName = ref('');
const profileType = ref('');
const companyName = ref('');
const receiveUpdates = ref('');
const allowContact = ref('');
const interestEmail = ref('');
const interestMessage = ref('');
const isSubmitting = ref(false);
const toastOpen = ref(false);
const toastVariant = ref('success');
const toastMessage = ref('');
let toastTimer;
let redirectTimer;
const router = useRouter();

const showCompanyField = computed(() => profileType.value === 'bedrijf');
const showEmailField = computed(() => receiveUpdates.value === 'ja' || allowContact.value === 'ja');

const isFormValid = computed(() =>
  firstName.value.trim() !== '' &&
  lastName.value.trim() !== '' &&
  profileType.value !== '' &&
  (!showCompanyField.value || companyName.value.trim() !== '') &&
  receiveUpdates.value !== '' &&
  allowContact.value !== '' &&
  (!showEmailField.value || interestEmail.value.trim() !== '')
);

watch(showCompanyField, (shouldShow) => {
  if (!shouldShow) {
    companyName.value = '';
  }
});

watch(showEmailField, (shouldShow) => {
  if (!shouldShow) {
    interestEmail.value = '';
  }
});

const buildFullName = () => `${firstName.value.trim()} ${lastName.value.trim()}`.trim();

const showToast = (variant, messageText) => {
  toastVariant.value = variant;
  toastMessage.value = messageText;
  toastOpen.value = true;

  if (toastTimer) {
    clearTimeout(toastTimer);
  }

  toastTimer = setTimeout(() => {
    toastOpen.value = false;
  }, 4000);
};

const scheduleRedirect = () => {
  if (redirectTimer) {
    clearTimeout(redirectTimer);
  }

  redirectTimer = setTimeout(() => {
    router.push('/');
  }, 4000);
};

const handleSubmit = async () => {
  if (!isFormValid.value || isSubmitting.value) {
    return;
  }

  isSubmitting.value = true;

  const requestId = createRequestId();
  const requestTime = createRequestTimestamp();
  const fullName = buildFullName();

  const templateParams = {
    to_email: EMAILJS_CONFIG.toEmail,
    FormType: 'Interest',
    name: fullName,
    requestID: requestId,
    time: requestTime,
    email: interestEmail.value.trim(),
    Comapany: companyName.value.trim(),
    update: receiveUpdates.value,
    usertest: allowContact.value,
    message: interestMessage.value.trim()
  };

  try {
    await emailjs.send(EMAILJS_CONFIG.serviceId, EMAILJS_CONFIG.templateId, templateParams, {
      publicKey: EMAILJS_CONFIG.publicKey
    });

    firstName.value = '';
    lastName.value = '';
    profileType.value = '';
    companyName.value = '';
    receiveUpdates.value = '';
    allowContact.value = '';
    interestEmail.value = '';
    interestMessage.value = '';
    showToast('success', 'Bericht verzonden');
    scheduleRedirect();
  } catch (error) {
    console.error('EmailJS interest submission failed', error);
    showToast('error', 'Bericht kon niet worden verzonden');
  } finally {
    isSubmitting.value = false;
  }
};
</script>

<style scoped>
.interest-hero {
  min-height: clamp(15rem, 26vw, 20rem);
  display: grid;
  align-items: center;
  padding: var(--space-56) 0 var(--space-32);
  position: relative;
  overflow: visible;
}

.interest-hero-inner {
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

.interest-title {
  margin: 0;
  color: var(--color-primary-deep);
  font-family: var(--font-brand);
  font-size: var(--type-landing-h1-size);
  font-weight: var(--type-h1-weight);
  line-height: var(--type-landing-h1-line-height);
  letter-spacing: 0.02em;
}

.interest-hero-art {
  position: absolute;
  right: min(-20rem, -15vw);
  top: 53%;
  transform: translateY(-50%);
  width: min(56vw, 50rem);
  z-index: 0;
  pointer-events: none;
}

.interest-hero-art img {
  width: 100%;
  height: auto;
  object-fit: contain;
  opacity: 0.25;
}

.interest-stack {
  width: min(100% - 2 * var(--page-gutter), var(--container-max));
  margin: var(--space-48) auto var(--space-80);
  background: var(--color-surface-light);
  border-radius: var(--radius-48);
  padding: var(--space-32) 0;
  box-shadow: 0 30px 60px rgba(73, 55, 108, 0.12);
  position: relative;
  z-index: 2;
}

.interest-stack .page-section {
  padding: var(--space-40) 0;
}

.interest-stack .page-section:first-child {
  padding-top: var(--space-48);
}

.interest-stack .page-section:last-child {
  padding-bottom: var(--space-48);
}

.interest-intro-inner {
  display: grid;
  gap: var(--space-8);
}

.intro-copy {
  margin: 0;
  max-width: 64ch;
  color: var(--color-text);
  font-family: var(--font-poppins);
  font-size: var(--type-body-size);
  font-weight: var(--type-body-weight);
  line-height: var(--type-body-line-height);
}

.form-shell {
  display: grid;
  gap: var(--space-24);
}

.interest-form {
  display: grid;
  gap: var(--space-32);
}

.field-group {
  margin: 0;
  padding: 0;
  border: 0;
  display: grid;
  gap: var(--space-8);
}

.field-reveal-enter-active,
.field-reveal-leave-active {
  transition: opacity 300ms ease-out, transform 300ms ease-out;
}

.field-reveal-enter-from,
.field-reveal-leave-to {
  opacity: 0;
  transform: translateY(-8px);
}

.field-label {
  margin: 0;
  color: var(--color-primary-deep);
  font-family: var(--font-brand);
  font-size: var(--type-h4-size);
  line-height: var(--type-h4-line-height);
  font-weight: 600;
}

.required-mark {
  color: #e54e34;
}

.name-row {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: var(--space-32);
}

input,
textarea {
  width: 100%;
  border: 1px solid rgba(73, 55, 108, 0.2);
  border-radius: 10px;
  padding: var(--space-8) var(--space-16);
  color: var(--color-text);
  background: #f9f6fd;
  font-family: var(--font-poppins);
  font-size: var(--type-link-size);
  line-height: var(--type-link-line-height);
}

input {
  min-height: 3rem;
}

textarea {
  min-height: 10rem;
  resize: vertical;
}

input::placeholder,
textarea::placeholder {
  color: rgba(46, 40, 80, 0.6);
}

.radio-group {
  gap: var(--space-0);
}

.radio-group > .field-label {
  display: block;
  margin: 0 0 var(--space-8);
  padding: 0;
}

.radio-row {
  display: flex;
  flex-wrap: wrap;
  gap: var(--space-24);
}

.radio-option {
  display: inline-flex;
  align-items: center;
  gap: var(--space-16);
  color: var(--color-text);
  font-family: var(--font-brand);
  font-size: var(--type-h4-size);
  line-height: var(--type-h4-line-height);
  font-weight: 600;
  cursor: pointer;
}

.radio-option input {
  position: absolute;
  opacity: 0;
  width: 1px;
  height: 1px;
  pointer-events: none;
}

.radio-mark {
  width: 2rem;
  height: 2rem;
  border: 2px solid rgba(73, 55, 108, 0.35);
  border-radius: var(--radius-pill);
  background: #fff;
  transition: border-color 300ms ease-out, box-shadow 300ms ease-out;
}

.radio-option input:checked + .radio-mark {
  border-color: var(--color-primary);
  box-shadow: inset 0 0 0 6px #fff;
  background: var(--color-primary);
}

.helper-copy {
  margin: 0 0 var(--space-8);
  color: var(--color-text);
  font-family: var(--font-poppins);
  font-size: var(--type-body-size);
  line-height: var(--type-body-line-height);
}

.submit-row {
  display: flex;
  justify-content: flex-end;
}

.submit-button {
  min-width: 10.5rem;
  min-height: 3rem;
  padding: var(--space-8) var(--space-24);
  border-radius: var(--radius-12);
  border: none;
  background: var(--gradient-primary);
  color: var(--color-white);
  font-family: var(--font-brand);
  font-size: var(--type-button-size);
  font-weight: var(--type-button-weight);
  line-height: var(--type-button-line-height);
  cursor: pointer;
  transition: transform 300ms ease-out, opacity 300ms ease-out;
}

.submit-button:hover {
  transform: translateY(-1px);
}

.submit-button:active {
  transform: scale(0.98);
}

.submit-button:disabled {
  border: 2px solid rgba(73, 55, 108, 0.35);
  background: transparent;
  color: rgba(73, 55, 108, 0.6);
  cursor: not-allowed;
  transform: none;
}

input:focus-visible,
textarea:focus-visible,
.submit-button:focus-visible,
.radio-option input:focus-visible + .radio-mark {
  outline: 2px solid var(--color-primary-deep);
  outline-offset: 2px;
}

.sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  border: 0;
}

@media (min-width: 75rem) {
  .interest-hero {
    min-height: clamp(12rem, 18vw, 15rem);
    padding: var(--space-40) 0 var(--space-24);
  }

  .breadcrumb {
    font-size: 1.2rem;
  }

  .interest-title {
    font-size: calc(var(--type-landing-h1-size) * 1.18);
    line-height: calc(var(--type-landing-h1-line-height) * 1.08);
  }
}

@media (max-width: 48rem) {
  .interest-hero {
    min-height: 11.5rem;
    padding: var(--space-32) 0 var(--space-24);
  }

  .interest-hero-inner {
    gap: var(--space-8);
  }

  .breadcrumb {
    display: inline-flex;
  }

  .interest-hero-art {
    right: -36%;
    top: 58%;
    width: min(28rem, 90vw);
  }

  .interest-stack {
    margin: 24px var(--page-gutter) var(--space-64);
    width: auto;
    border-radius: var(--radius-48);
    padding: 32px 24px;
  }

  .interest-stack .section-container {
    width: 100%;
    padding-inline: 0;
  }

  .interest-stack .page-section {
    padding: 24px 0;
  }

  .interest-stack .page-section:first-child {
    padding-top: 0;
  }

  .interest-stack .page-section:last-child {
    padding-bottom: 24px;
  }

  .interest-form {
    gap: var(--space-16);
  }

  .name-row {
    gap: var(--space-16);
  }

  .radio-row {
    gap: var(--space-16);
  }

  .submit-button {
    min-width: auto;
    width: 100%;
  }
}

@media (max-width: 25rem) {
  .name-row {
    grid-template-columns: 1fr;
    gap: var(--space-8);
  }
}
</style>

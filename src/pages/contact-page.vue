<template>
  <site-header />

  <main id="main-content" tabindex="-1" class="contact-page">
    <section class="contact-hero" aria-labelledby="contact-title" v-scroll-reveal>
      <div class="section-container contact-hero-inner" v-scroll-reveal="{ delay: 40 }">
        <p class="breadcrumb"><a href="/">Home</a> <span aria-hidden="true">&gt;</span> <span>Contacteer ons</span></p>
        <h1 id="contact-title" class="contact-title">Contacteer ons</h1>
      </div>

      <div class="contact-hero-art" aria-hidden="true">
        <img src="/assets/graphics/chrysant.svg" alt="" />
      </div>
    </section>

    <section class="contact-stack" aria-label="Contact inhoud">
      <section class="page-section contact-intro-section" aria-label="Contactintro" v-scroll-reveal>
        <div class="section-container contact-intro-inner">
          <p class="contact-intro-copy">
            Heb je een vraag over onze services of wil je weten wat we voor elkaar zouden kunnen betekenen? Aarzel dan
            zeker niet om ons een berichtje te sturen.
          </p>
          <a class="faq-link" href="/#faq">Bekijk zeker ook onze veelgestelde vragen</a>
        </div>
      </section>

      <section class="page-section contact-options-section" aria-label="Contactopties" v-scroll-reveal>
        <div class="section-container contact-options-inner">
          <p class="contact-options-copy">
            Je kan ons contacteren via het contactformulier of door ons rechtstreeks te mailen. Wil je Noek in actie
            zien? Boek dan een demo met ons.
          </p>

          <div class="contact-actions" aria-label="Contactacties">
            <a class="email-chip" href="mailto:info@noek.be" aria-label="Stuur een e-mail naar info@noek.be">
              <span class="email-icon" aria-hidden="true">
                <svg viewBox="0 0 24 24" role="img" focusable="false">
                  <path
                    d="M3 6.75A2.75 2.75 0 0 1 5.75 4h12.5A2.75 2.75 0 0 1 21 6.75v10.5A2.75 2.75 0 0 1 18.25 20H5.75A2.75 2.75 0 0 1 3 17.25zm2.14-.9a.75.75 0 0 0-.09 1.11l6.45 5.4a.75.75 0 0 0 .96 0l6.45-5.4a.75.75 0 1 0-.96-1.15L12 10.92z"
                  />
                </svg>
              </span>
              <span class="email-text">info@noek.be</span>
            </a>

            <base-button href="/toon-je-interesse" :label="ctaLabel" variant="outline" block-mobile />
          </div>
        </div>
      </section>

      <section class="page-section contact-form-section" aria-labelledby="form-heading" v-scroll-reveal>
        <div class="section-container form-shell" v-scroll-reveal="{ delay: 30 }">
          <h2 id="form-heading" class="section-heading">Contactformulier</h2>
          <p class="form-lead">Vul het onderstaande contactformulier in en wij helpen je graag.</p>

          <form class="contact-form" @submit.prevent="handleSubmit">
            <div class="name-row">
              <div class="field-group">
                <label class="field-label" for="first-name">
                  Contact persoon<span class="required-mark" aria-hidden="true">*</span>
                  <span class="sr-only">verplicht</span>
                </label>
                <input id="first-name" name="firstName" type="text" autocomplete="given-name" placeholder="Voornaam" required v-model="firstName" />
              </div>

              <div class="field-group">
                <label class="field-label sr-only" for="last-name">Achternaam</label>
                <input id="last-name" name="lastName" type="text" autocomplete="family-name" placeholder="Naam" required v-model="lastName" />
              </div>
            </div>

            <div class="field-group">
              <label class="field-label" for="email-address">
                E-mail <span class="required-mark" aria-hidden="true">*</span>
                <span class="sr-only">verplicht</span>
              </label>
              <input
                id="email-address"
                name="email"
                type="email"
                autocomplete="email"
                placeholder="naam@company.com"
                inputmode="email"
                required
                v-model="email"
              />
            </div>

            <div class="field-group">
              <label class="field-label" for="message-body">
                Reden voor aanvraag<span class="required-mark" aria-hidden="true">*</span>
                <span class="sr-only">verplicht</span>
              </label>
              <textarea
                id="message-body"
                name="message"
                placeholder="Type hier uw bericht..."
                maxlength="800"
                required
                v-model="message"
              ></textarea>
            </div>

            <p v-if="charsRemaining <= 100" class="character-limit">{{ charsRemaining }} karakters resterend</p>

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
import { computed, ref } from 'vue';
import { useHead } from '@unhead/vue';
import { useRouter } from 'vue-router';
import emailjs from '@emailjs/browser';
import BaseButton from '../components/base-button.vue';
import ScrollTopButton from '../components/scroll-top-button.vue';
import SiteFooter from '../components/site-footer.vue';
import SiteHeader from '../components/site-header.vue';
import StatusToast from '../components/status-toast.vue';
import { EMAILJS_CONFIG, createRequestId, createRequestTimestamp } from '../config/emailjs';
import { getCtaTextLabel } from '../utils/cta-variant';
import { createPageHead } from '../utils/seo';

useHead(
  createPageHead({
    title: 'Contacteer Noek',
    description: 'Stel je vraag, vraag een demo aan of neem contact op met het Noek team.',
    path: '/contact'
  })
);

const firstName = ref('');
const lastName = ref('');
const email = ref('');
const message = ref('');
const isSubmitting = ref(false);
const toastOpen = ref(false);
const toastVariant = ref('success');
const toastMessage = ref('');
let toastTimer;
let redirectTimer;
const router = useRouter();
const ctaLabel = getCtaTextLabel();

const charsRemaining = computed(() => 800 - message.value.length);

const isFormValid = computed(() =>
  firstName.value.trim() !== '' &&
  lastName.value.trim() !== '' &&
  email.value.trim() !== '' &&
  message.value.trim() !== ''
);

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
    FormType: 'Contact',
    name: fullName,
    requestID: requestId,
    time: requestTime,
    email: email.value.trim(),
    Comapany: '',
    update: '',
    usertest: '',
    message: message.value.trim()
  };

  try {
    await emailjs.send(EMAILJS_CONFIG.serviceId, EMAILJS_CONFIG.templateId, templateParams, {
      publicKey: EMAILJS_CONFIG.publicKey
    });

    firstName.value = '';
    lastName.value = '';
    email.value = '';
    message.value = '';
    showToast('success', 'Bericht verzonden');
    scheduleRedirect();
  } catch (error) {
    console.error('EmailJS contact submission failed', error);
    showToast('error', 'Bericht kon niet worden verzonden');
  } finally {
    isSubmitting.value = false;
  }
};
</script>

<style scoped>
.contact-hero {
  min-height: clamp(15rem, 26vw, 20rem);
  display: grid;
  align-items: center;
  padding: var(--space-56) 0 var(--space-32);
  position: relative;
  overflow-x: clip;
}

.contact-hero-inner {
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

.contact-title {
  margin: 0;
  color: var(--color-primary-deep);
  font-family: var(--font-brand);
  font-size: var(--type-landing-h1-size);
  font-weight: var(--type-h1-weight);
  line-height: var(--type-landing-h1-line-height);
  letter-spacing: 0.02em;
}

.contact-hero-art {
  position: absolute;
  right: min(-20rem, -15vw);
  top: 53%;
  transform: translateY(-50%);
  width: min(56vw, 50rem);
  z-index: 0;
  pointer-events: none;
}

.contact-hero-art img {
  width: 100%;
  height: auto;
  object-fit: contain;
  opacity: 0.25;
}

.contact-stack {
  width: min(100% - 2 * var(--page-gutter), var(--container-max));
  margin: var(--space-48) auto var(--space-80);
  background: var(--color-surface-light);
  border-radius: var(--radius-48);
  padding: var(--space-32) 0;
  box-shadow: 0 30px 60px rgba(73, 55, 108, 0.12);
  position: relative;
  z-index: 2;
}

.contact-stack .page-section {
  padding: var(--space-40) 0;
}

.contact-stack .page-section:first-child {
  padding-top: var(--space-48);
}

.contact-stack .page-section:last-child {
  padding-bottom: var(--space-48);
}

.contact-intro-inner {
  display: grid;
  gap: var(--space-8);
}

.contact-intro-copy {
  margin: 0;
  max-width: 62ch;
  color: var(--color-text);
  font-family: var(--font-poppins);
  font-size: var(--type-body-size);
  font-weight: var(--type-body-weight);
  line-height: var(--type-body-line-height);
}

.faq-link {
  width: fit-content;
  color: var(--color-primary);
  font-family: var(--font-poppins);
  font-size: var(--type-body-size);
  line-height: var(--type-body-line-height);
  text-decoration: underline;
  text-underline-offset: 0.2em;
}

.contact-options-section {
  background: var(--color-surface-soft);
}

.contact-options-inner {
  display: grid;
  gap: var(--space-24);
}

.contact-options-copy {
  margin: 0;
  color: var(--color-text);
  font-family: var(--font-poppins);
  font-size: var(--type-body-size);
  line-height: var(--type-body-line-height);
}

.contact-actions {
  display: flex;
  flex-wrap: wrap;
  gap: var(--space-16);
  align-items: center;
}

.email-chip {
  display: inline-flex;
  align-items: center;
  border-radius: var(--radius-12);
  border: 2px solid var(--color-primary);
  background: var(--color-white);
  overflow: hidden;
}

.email-icon {
  width: 3rem;
  height: 3rem;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  background: var(--color-primary);
  color: var(--color-white);
}

.email-icon svg {
  width: 1.25rem;
  height: 1.25rem;
  fill: currentColor;
}

.email-text {
  padding: var(--space-8) var(--space-16);
  color: var(--color-primary);
  font-family: var(--font-brand);
  font-size: var(--type-button-size);
  font-weight: var(--type-button-weight);
  line-height: var(--type-button-line-height);
}

.form-shell {
  display: grid;
  gap: var(--space-24);
}

.form-lead {
  margin: 0;
  color: var(--color-text);
  font-family: var(--font-poppins);
  font-size: var(--type-body-size);
  line-height: var(--type-body-line-height);
}

.contact-form {
  display: grid;
  gap: var(--space-32);
}

.name-row {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: var(--space-32);
  align-items: end;
}

.field-group {
  display: grid;
  gap: var(--space-8);
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
  resize: vertical;
  min-height: 10.5rem;
}

input::placeholder,
textarea::placeholder {
  color: rgba(46, 40, 80, 0.6);
}

input:focus-visible,
textarea:focus-visible,
.submit-button:focus-visible,
.email-chip:focus-visible,
.faq-link:focus-visible {
  outline: 2px solid var(--color-primary-deep);
  outline-offset: 2px;
}

.character-limit {
  margin: 0;
  color: #ac3b27;
  font-family: var(--font-poppins);
  font-size: var(--type-small-size);
  line-height: var(--type-small-line-height);
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
  .contact-hero {
    min-height: clamp(12rem, 18vw, 15rem);
    padding: var(--space-40) 0 var(--space-24);
  }

  .breadcrumb {
    font-size: 1.2rem;
  }

  .contact-title {
    font-size: calc(var(--type-landing-h1-size) * 1.18);
    line-height: calc(var(--type-landing-h1-line-height) * 1.08);
  }
}

@media (max-width: 48rem) {
  .contact-hero {
    min-height: 11.5rem;
    padding: var(--space-32) 0 var(--space-24);
  }

  .contact-hero-inner {
    gap: var(--space-8);
  }

  .breadcrumb {
    display: inline-flex;
  }

  .contact-hero-art {
    right: -36%;
    top: 58%;
    width: min(28rem, 90vw);
  }

  .contact-stack {
    margin: 24px var(--page-gutter) var(--space-64);
    width: auto;
    border-radius: var(--radius-48);
    padding: 32px 24px;
  }

  .contact-stack .section-container {
    width: 100%;
    padding-inline: 0;
  }

  .contact-stack .page-section {
    padding: 24px 0;
  }

  .contact-stack .page-section:first-child {
    padding-top: 0;
  }

  .contact-stack .page-section:last-child {
    padding-bottom: 24px;
  }

  .contact-actions {
    gap: var(--space-8);
  }

  .contact-options-section {
    margin-inline: -24px;
  }

  .contact-stack .contact-options-section .section-container {
    padding-inline: 24px;
  }

  .email-text {
    padding-right: var(--space-8);
  }

  .name-row {
    gap: var(--space-16);
  }

  .contact-form {
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
  }
}
</style>

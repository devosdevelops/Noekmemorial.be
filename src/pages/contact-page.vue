<template>
  <site-header />

  <main class="contact-page">
    <section class="contact-hero" :style="heroStyle" aria-labelledby="contact-title" v-scroll-reveal>
      <div class="section-container contact-hero-inner">
        <p class="breadcrumb" v-scroll-reveal="{ delay: 20 }">
          <a href="/">Home</a>
          <span aria-hidden="true">&gt;</span>
          <span>Contacteer ons</span>
        </p>

        <h1 id="contact-title" class="contact-title" v-scroll-reveal="{ delay: 40 }">Contacteer ons</h1>

        <p class="body-text hero-copy mobile-only" v-scroll-reveal="{ delay: 80 }">
          Heb je een vraag over onze services of wil je weten wat we voor elkaar zouden kunnen betekenen? Aarzel dan
          zeker niet om ons een berichtje te sturen!
        </p>

        <a class="faq-link mobile-only" href="/#faq" v-scroll-reveal="{ delay: 110 }">Bekijk zeker ook onze veelgestelde vragen</a>

      </div>
    </section>

    <section class="contact-intro" aria-label="Contactintro" v-scroll-reveal>
      <div class="section-container contact-intro-inner" v-scroll-reveal="{ delay: 20 }">
        <p class="body-text hero-copy desktop-copy">
          Heb je een vraag over onze services of wil je weten wat we voor elkaar zouden kunnen betekenen? Aarzel dan
          zeker niet om ons een berichtje te sturen!
        </p>
        <a class="faq-link" href="/#faq">Bekijk zeker ook onze veelgestelde vragen</a>
      </div>
    </section>

    <section class="contact-cta" aria-label="Contactopties" v-scroll-reveal>
      <div class="section-container contact-cta-inner" v-scroll-reveal="{ delay: 30 }">
        <p class="contact-cta-copy">
          Je kan ons contacteren via het contactformulier of door ons rechtstreeks te mailen. Wil je Noek in actie zien?
          Boek dan een demo met ons.
        </p>

        <div class="hero-actions" aria-label="Contactacties">
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

          <base-button href="/toon-je-interesse" label="Toon je interesse" variant="outline" class="hero-read-more" block-mobile />
        </div>
      </div>
    </section>

    <section class="contact-form-section" aria-labelledby="form-heading" v-scroll-reveal>
      <div class="section-container form-shell" v-scroll-reveal="{ delay: 30 }">
        <h2 id="form-heading" class="sr-only">Contactformulier</h2>
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

            <div class="field-group last-name-field">
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
    <status-toast :open="toastOpen" :variant="toastVariant" :message="toastMessage" />
  </main>

  <site-footer />
  <scroll-top-button />
</template>

<script setup>
import { computed, ref } from 'vue';
import { useRouter } from 'vue-router';
import emailjs from '@emailjs/browser';
import BaseButton from '../components/base-button.vue';
import ScrollTopButton from '../components/scroll-top-button.vue';
import SiteFooter from '../components/site-footer.vue';
import SiteHeader from '../components/site-header.vue';
import StatusToast from '../components/status-toast.vue';
import { assetPaths } from '../config/asset-paths';
import { EMAILJS_CONFIG, createRequestId, createRequestTimestamp } from '../config/emailjs';

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

const heroStyle = computed(() => {
  if (!assetPaths.images.heroBackground) {
    return {};
  }

  return {
    '--contact-hero-image': `url(${assetPaths.images.heroBackground})`
  };
});
</script>

<style scoped>
.contact-hero {
  min-height: clamp(13rem, 22vw, 17.5rem);
  display: grid;
  align-items: end;
  padding: var(--space-40) var(--space-0);
  background:
    linear-gradient(90deg, rgba(247, 240, 248, 0.38) 0%, rgba(238, 226, 245, 0.24) 100%),
    var(--contact-hero-image, none) center / cover no-repeat;
}

.contact-hero-inner {
  display: grid;
  gap: var(--space-24);
  padding-bottom: var(--space-8);
}

.breadcrumb {
  margin: 0;
  display: inline-flex;
  gap: var(--space-8);
  align-items: center;
  width: fit-content;
  color: var(--color-text);
  font-family: var(--font-brand);
  font-size: var(--type-small-size);
  line-height: var(--type-small-line-height);
}

.breadcrumb a {
  min-height: 2rem;
  display: inline-flex;
  align-items: center;
}

.contact-title {
  margin: 0;
  color: var(--color-text);
  font-family: var(--font-ambella);
  font-size: var(--type-landing-h1-size);
  line-height: var(--type-landing-h1-line-height);
  letter-spacing: var(--type-h1-letter-spacing);
  font-weight: var(--type-h1-weight);
}

.mobile-only {
  display: none;
}

.contact-intro {
  padding: var(--space-24) var(--space-0);
  background: #f8f8f8;
}

.contact-intro-inner {
  display: grid;
  gap: var(--space-8);
}

.desktop-copy {
  max-width: 58rem;
}

.contact-cta {
  padding: var(--space-24) var(--space-0);
  background: #f5efe6;
}

.contact-cta-inner {
  display: grid;
  gap: var(--space-16);
}

.contact-cta-copy {
  margin: 0;
  color: var(--color-text);
  font-family: var(--font-poppins);
  font-size: var(--type-body-size);
  line-height: var(--type-body-line-height);
}

.hero-copy {
  max-width: 39rem;
  color: var(--color-text);
}

.faq-link {
  width: fit-content;
  color: var(--color-primary);
  text-decoration: underline;
  text-decoration-thickness: 1px;
  text-underline-offset: 2px;
}

.hero-actions {
  display: flex;
  flex-wrap: wrap;
  gap: var(--space-16);
  align-items: center;
}

.email-chip {
  display: inline-flex;
  align-items: center;
  border-radius: var(--radius-12);
  border: 4px solid var(--color-primary);
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
  width: 1.4rem;
  height: 1.4rem;
  fill: currentColor;
}

.email-text {
  padding: var(--space-8) var(--space-16);
  font-family: var(--font-brand);
  font-size: var(--type-button-size);
  line-height: var(--type-button-line-height);
  font-weight: var(--type-button-weight);
  color: var(--color-primary);
}

.hero-read-more {
  min-height: 3rem;
}

.contact-form-section {
  padding: var(--space-48) var(--space-0) var(--space-64);
  background: linear-gradient(110deg, #f9f7fb 0%, #ece7f7 100%);
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
  gap: var(--space-24);
}

.name-row {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: var(--space-24);
  align-items: end;
}

.field-group {
  display: grid;
  gap: var(--space-8);
}

.field-label {
  margin: 0;
  color: #23212f;
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
  border: 0;
  border-radius: 10px;
  padding: var(--space-8) var(--space-16);
  color: var(--color-white);
  background: #a5a9b3;
  font-family: var(--font-brand);
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
  color: rgba(255, 255, 255, 0.82);
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
  font-family: var(--font-brand);
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
  border: 2px solid var(--color-primary);
  background: var(--color-primary);
  color: var(--color-white);
  font-family: var(--font-brand);
  font-size: var(--type-button-size);
  font-weight: var(--type-button-weight);
  line-height: var(--type-button-line-height);
  cursor: pointer;
  transition:
    transform 300ms ease-out,
    border-color 300ms ease-out,
    color 300ms ease-out,
    background-color 300ms ease-out;
}

.submit-button:hover {
  transform: translateY(-1px);
  border-color: #7f60df;
  background: #7f60df;
}

.submit-button:active {
  transform: scale(0.97);
  border-color: rgba(23, 16, 44, 0.92);
  background: rgba(23, 16, 44, 0.92);
  color: var(--color-primary);
}

.submit-button:disabled {
  border: 4px solid #ac3b27;
  background: transparent;
  color: #a5a9b3;
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

@media (max-width: 30rem) {
  .contact-hero {
    min-height: 14rem;
    padding: var(--space-16) var(--space-0) var(--space-40);
    position: relative;
    overflow: hidden;
    background: linear-gradient(155deg, #f8f5f1 0%, #f8f2f3 58%, #f0ecf7 100%);
  }

  .contact-hero-inner {
    gap: var(--space-16);
  }

  .contact-hero::before {
    content: '';
    position: absolute;
    right: -2rem;
    top: 7.5rem;
    width: 12.5rem;
    height: 10.5rem;
    background: rgba(244, 205, 204, 0.72);
    clip-path: polygon(18% 0%, 100% 0%, 100% 100%, 0% 78%);
    pointer-events: none;
  }

  .contact-hero::after {
    content: '';
    position: absolute;
    right: -3.5rem;
    top: 11rem;
    width: 11rem;
    height: 7rem;
    background:
      repeating-linear-gradient(
        35deg,
        transparent 0,
        transparent 10px,
        rgba(230, 81, 61, 0.22) 10px,
        rgba(230, 81, 61, 0.22) 12px
      );
    opacity: 0.75;
    pointer-events: none;
  }

  .breadcrumb {
    display: none;
  }

  .mobile-only {
    display: block;
  }

  .contact-title {
    font-size: calc(var(--type-h1-size) + 0.2rem);
    line-height: var(--type-h1-line-height);
    letter-spacing: var(--type-h1-letter-spacing);
  }

  .hero-copy {
    max-width: 32rem;
  }

  .hero-actions {
    gap: var(--space-8);
  }

  .email-text {
    padding-right: var(--space-8);
  }

  .contact-form-section {
    padding-top: var(--space-40);
  }

  .name-row {
    gap: var(--space-16);
  }

  .submit-button {
    min-width: auto;
  }
}

@media (max-width: 25rem) {
  .name-row {
    grid-template-columns: 1fr;
  }
}
</style>
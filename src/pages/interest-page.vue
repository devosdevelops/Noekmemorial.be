<template>
  <site-header />

  <main class="interest-page">
    <section class="interest-intro" aria-labelledby="interest-title" v-scroll-reveal>
      <div class="section-container intro-inner" v-scroll-reveal="{ delay: 20 }">
        <h1 id="interest-title" class="interest-title">Heb je interesse in Noek?</h1>
        <p class="intro-copy">
          We zijn momenteel ons platform aan het ontwikkelen. Heb je interesse om het later te gebruiken, updates te
          ontvangen of ons te helpen met feedback? Laat hieronder je gegevens achter.
        </p>
      </div>
    </section>

    <section class="interest-form-section" aria-labelledby="interest-form-heading" v-scroll-reveal>
      <div class="section-container form-shell" v-scroll-reveal="{ delay: 30 }">
        <h2 id="interest-form-heading" class="sr-only">Interesseformulier</h2>

        <form class="interest-form" @submit.prevent>
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
              />
              <input name="lastName" type="text" autocomplete="family-name" placeholder="Naam" required />
            </div>
          </div>

          <fieldset class="field-group radio-group">
            <legend class="field-label">
              Ik ben...<span class="required-mark" aria-hidden="true">*</span>
              <span class="sr-only">verplicht</span>
            </legend>
            <div class="radio-row" role="radiogroup" aria-label="Ik ben">
              <label class="radio-option">
                <input type="radio" name="profileType" value="individu" required />
                <span class="radio-mark" aria-hidden="true"></span>
                <span>Individu</span>
              </label>
              <label class="radio-option">
                <input type="radio" name="profileType" value="bedrijf" required />
                <span class="radio-mark" aria-hidden="true"></span>
                <span>Bedrijf</span>
              </label>
            </div>
          </fieldset>

          <div class="field-group">
            <label class="field-label" for="company-name">
              Naam van het bedrijf<span class="required-mark" aria-hidden="true">*</span>
              <span class="sr-only">verplicht</span>
            </label>
            <input id="company-name" name="companyName" type="text" autocomplete="organization" placeholder="Naam bedrijf" required />
          </div>

          <fieldset class="field-group radio-group">
            <legend class="field-label">
              Wil je updates ontvangen?<span class="required-mark" aria-hidden="true">*</span>
              <span class="sr-only">verplicht</span>
            </legend>
            <div class="radio-row" role="radiogroup" aria-label="Wil je updates ontvangen">
              <label class="radio-option">
                <input type="radio" name="receiveUpdates" value="ja" required />
                <span class="radio-mark" aria-hidden="true"></span>
                <span>Ja</span>
              </label>
              <label class="radio-option">
                <input type="radio" name="receiveUpdates" value="nee" required />
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
                <input type="radio" name="allowContact" value="ja" required />
                <span class="radio-mark" aria-hidden="true"></span>
                <span>Ja</span>
              </label>
              <label class="radio-option">
                <input type="radio" name="allowContact" value="nee" required />
                <span class="radio-mark" aria-hidden="true"></span>
                <span>Nee</span>
              </label>
            </div>
          </fieldset>

          <div class="field-group">
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
              required
            />
          </div>

          <div class="field-group">
            <label class="field-label" for="interest-message">Heb je nog opmerkingen?</label>
            <textarea id="interest-message" name="message" placeholder="Type hier uw bericht..."></textarea>
          </div>

          <div class="submit-row">
            <button type="submit" class="submit-button">Verzenden</button>
          </div>
        </form>
      </div>
    </section>
  </main>

  <site-footer />
  <scroll-top-button />
</template>

<script setup>
import ScrollTopButton from '../components/scroll-top-button.vue';
import SiteFooter from '../components/site-footer.vue';
import SiteHeader from '../components/site-header.vue';
</script>

<style scoped>
.interest-intro {
  position: relative;
  overflow: hidden;
  padding: var(--space-32) var(--space-0) var(--space-24);
  background: #f8f5f1;
}

.interest-intro::before {
  content: '';
  position: absolute;
  right: -2rem;
  top: 9rem;
  width: 14rem;
  height: 12rem;
  background: rgba(244, 205, 204, 0.78);
  clip-path: polygon(18% 0%, 100% 0%, 100% 100%, 0% 78%);
  pointer-events: none;
}

.interest-intro::after {
  content: '';
  position: absolute;
  right: -3rem;
  top: 13rem;
  width: 12rem;
  height: 8.5rem;
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

.intro-inner {
  position: relative;
  z-index: 1;
  display: grid;
  gap: var(--space-24);
}

.interest-title {
  margin: 0;
  max-width: 32rem;
  color: #14121f;
  font-family: var(--font-ambella);
  font-size: var(--type-landing-h1-size);
  line-height: var(--type-landing-h1-line-height);
  letter-spacing: var(--type-h1-letter-spacing);
  font-weight: var(--type-h1-weight);
}

.intro-copy {
  margin: 0;
  max-width: 35rem;
  color: #1e1b28;
  font-family: var(--font-poppins);
  font-size: var(--type-body-size);
  line-height: var(--type-body-line-height);
}

.interest-form-section {
  padding: var(--space-48) var(--space-0) var(--space-64);
  background: linear-gradient(110deg, #f9f7fb 0%, #ece7f7 100%);
}

.form-shell {
  display: grid;
  gap: var(--space-16);
}

.interest-form {
  display: grid;
  gap: var(--space-16);
}

.field-group {
  margin: 0;
  padding: 0;
  border: 0;
  display: grid;
  gap: var(--space-8);
}

.field-label {
  margin: 0;
  color: #23212f;
  font-family: var(--font-outfit);
  font-size: var(--type-h4-size);
  line-height: var(--type-h4-line-height);
  font-weight: 600;
}

.required-mark {
  color: #e6513d;
}

.name-row {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: var(--space-16);
}

input,
textarea {
  width: 100%;
  border: 0;
  border-radius: 10px;
  padding: var(--space-8) var(--space-16);
  color: var(--color-white);
  background: #a5a9b3;
  font-family: var(--font-outfit);
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
  color: rgba(255, 255, 255, 0.82);
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
  color: #2a2736;
  font-family: var(--font-outfit);
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
  border: 6px solid #9e9dc7;
  border-radius: 999px;
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
  color: #31303d;
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
  border: 2px solid var(--color-primary);
  background: var(--color-primary);
  color: var(--color-white);
  font-family: var(--font-outfit);
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

@media (min-width: 40.0625rem) {
  .interest-intro {
    padding: var(--space-48) var(--space-0) var(--space-32);
  }

  .interest-title {
    max-width: 44rem;
  }

  .intro-copy {
    max-width: 44rem;
  }

  .interest-form-section {
    padding-top: var(--space-24);
  }
}

@media (min-width: 48.0625rem) {
  .interest-title {
    max-width: 40rem;
    font-size: var(--type-h1-size);
    line-height: var(--type-h1-line-height);
  }

  .intro-copy {
    max-width: 40rem;
  }

  .interest-form {
    gap: var(--space-32);
  }
}

@media (max-width: 25rem) {
  .name-row {
    grid-template-columns: 1fr;
    gap: var(--space-8);
  }

  .radio-row {
    gap: var(--space-16);
  }

  .submit-button {
    min-width: auto;
  }
}
</style>
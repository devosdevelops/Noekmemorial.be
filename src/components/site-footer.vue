<template>
  <footer class="site-footer" id="contact" aria-labelledby="footer-heading" v-scroll-reveal>
    <div class="footer-shell">
      <div class="footer-grid">
      <section class="footer-brand-brand-wrap" aria-label="merk informatie" v-scroll-reveal="{ delay: 20 }">
        <section class="footer-brand">
          <h2 id="footer-heading" class="sr-only">Footer</h2>
          <div class="brand-logo-row">
            <img class="brand-logo" src="/assets/logos/noek-logo-white.svg" alt="Noek" />
            <span class="brand-name">Noek</span>
          </div>
          <div class="brand-content-row">
            <p class="footer-copy">
              Herdenken stopt niet na de uitvaart.<br />
              We leven verspreid.<br />
              We rouwen anders.<br />
              We herinneren persoonlijker.
            </p>
          </div>
        </section>
        <base-button class="footer-demo-button" href="/toon-je-interesse" label="Toon je interesse" variant="outline" />
      </section>

      <section class="footer-link-wrap">
        <section class="footer-links" aria-label="sitemap" v-scroll-reveal="{ delay: 60 }">
          <h3 class="footer-heading">Site map</h3>
          <a href="/">Homepage</a>
          <a href="/over-ons">Over Ons</a>
          <a href="/features">Features</a>
          <a href="/faq">F.A.Q.</a>
          <a href="/contact">Contact</a>
        </section>

        <section class="footer-links" aria-label="legal" v-scroll-reveal="{ delay: 100 }">
          <h3 class="footer-heading">Legal</h3>
          <a href="/privacybeleid">Privacybeleid</a>
          <a href="/algemene-voorwaarden">Algemene Voorwaarden</a>

          <div class="social-row" aria-label="socials">
            <a href="https://www.linkedin.com/company/noekmemorial/about/" aria-label="LinkedIn" class="social-icon" target="blank">
              <img class="social-image" src="/assets/icons/Linkedin.svg" alt="" aria-hidden="true" />
            </a>
            <a href="https://www.facebook.com/profile.php?id=61579523811833" aria-label="Facebook" class="social-icon" target="blank">
              <img class="social-image" src="/assets/icons/Facebook.svg" alt="" aria-hidden="true" />
            </a>
            <a href="https://www.instagram.com/noekmemorial/" aria-label="Instagram" class="social-icon" target="blank">
              <img class="social-image" src="/assets/icons/Instagram.svg" alt="" aria-hidden="true" />
            </a>
          </div>
        </section>
      </section>
      </div>
    </div>
  </footer>
</template>

<script setup>
import BaseButton from './base-button.vue';
</script>

<style scoped>
.site-footer {
  padding: var(--space-64) 0 var(--space-80);
  background: transparent;
  color: #fefbec;
}

.footer-shell {
  width: min(100% - 2 * var(--page-gutter), var(--container-max));
  margin: 0 auto;
  background: linear-gradient(90deg, #4b3a6c 0%, #5c4a87 55%, #7a64a6 100%);
  border-radius: var(--radius-48);
  padding: var(--space-48) var(--space-56);
  box-shadow: 0 24px 40px rgba(37, 27, 64, 0.25);
}

.footer-grid {
  display: flex;
  flex-direction: column;
  gap: var(--space-32);
}

.footer-brand-brand-wrap {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: var(--space-24);
}

.footer-brand {
  display: grid;
  gap: var(--space-16);
  align-content: start;
}

.brand-logo-row {
  display: flex;
  align-items: center;
  gap: var(--space-8);
}

.brand-logo {
  width: auto;
  height: 2.9rem;
  object-fit: contain;
}

.brand-name {
  color: #fefbec;
  font-family: var(--font-brand);
  font-size: calc(var(--type-h3-size) + 0.15rem);
  font-weight: var(--type-h3-weight);
  line-height: var(--type-h3-line-height);
  letter-spacing: 0.03em;
}

.brand-content-row {
  display: flex;
  align-items: flex-start;
  gap: var(--space-16);
}

.footer-copy {
  margin: 0;
  color: #f6f1fb;
  font-family: var(--font-poppins);
  font-size: var(--type-small-size);
  font-weight: var(--type-small-weight);
  line-height: var(--type-small-line-height);
  letter-spacing: var(--type-small-letter-spacing);
}

.footer-links {
  display: grid;
  align-content: start;
  gap: var(--space-8);
  color: #fefbec;
  font-family: var(--font-poppins);
  font-size: var(--type-link-size);
  font-weight: var(--type-link-weight);
  line-height: var(--type-link-line-height);
  letter-spacing: var(--type-link-letter-spacing);
}

.footer-links > a {
  position: relative;
  width: fit-content;
  transition: color 300ms ease-out;
}

.footer-links > a::after {
  content: '';
  position: absolute;
  left: 0;
  right: 0;
  bottom: -0.25rem;
  height: 2px;
  border-radius: var(--radius-pill);
  background: currentColor;
  transform: scaleX(0);
  transform-origin: center;
  transition: transform 300ms ease-out;
}

.footer-links > a:hover,
.footer-links > a:active {
  color: #fad1cf;
}

.footer-links > a:hover::after,
.footer-links > a:active::after {
  transform: scaleX(1);
}

.footer-demo-button {
  flex-shrink: 0;
  width: fit-content;
  min-height: 2.5rem;
  padding: var(--space-4) var(--space-16);
  font-size: var(--type-link-size);
  line-height: var(--type-link-line-height);
}

.footer-heading {
  margin: 0 0 var(--space-8);
  color: #fefbec;
  font-family: var(--font-poppins);
  font-size: var(--type-h4-size);
  font-weight: var(--type-h4-weight);
  line-height: var(--type-h4-line-height);
  letter-spacing: var(--type-h4-letter-spacing);
}

.social-row {
  display: flex;
  gap: var(--space-16);
  margin-top: var(--space-24);
  align-items: center;
}

.social-icon {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  line-height: 0;
  transition: transform 300ms ease-out;
  width: 2.75rem;
  height: 2.75rem;
}

.social-icon:hover,
.social-icon:active {
  transform: translateY(-1px);
}

.social-image {
  width: 2.75rem;
  height: 2.75rem;
  object-fit: contain;
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
  .footer-grid {
    flex-direction: row;
    align-items: flex-start;
    justify-content: space-between;
  }

  .footer-brand-brand-wrap {
    flex-direction: column;
    align-items: flex-start;
    flex: 1 1 42%;
  }

  .footer-link-wrap {
    flex: 1 1 58%;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: var(--space-32);
  }
}

@media (max-width: 40rem) {
  .site-footer {
    padding: var(--space-32) 0 var(--space-80);
  }

  .footer-shell {
    padding: var(--space-32);
    border-radius: var(--radius-48);
  }

  .footer-grid {
    gap: var(--space-24);
  }

  .footer-brand-brand-wrap {
    width: 100%;
    display: grid;
    grid-template-columns: 1fr 1fr;
    align-items: start;
    gap: var(--space-16);
  }

  .footer-brand {
    gap: var(--space-12);
  }

  .footer-link-wrap {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: var(--space-24);
    width: 100%;
    align-items: start;
  }

  .footer-demo-button {
    margin-top: 0;
    align-self: start;
    justify-self: stretch;
    width: 100%;
    white-space: nowrap;
  }

  .social-row {
    margin-top: var(--space-16);
  }
}
</style>

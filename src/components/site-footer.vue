<template>
  <footer class="site-footer" id="contact" aria-labelledby="footer-heading">
    <div class="section-container footer-grid">
      <section class="footer-brand" aria-label="merk informatie">
        <h2 id="footer-heading" class="sr-only">Footer</h2>
        <site-logo :compact="true" />
        <p class="footer-copy">
          Herdenken stopt niet na de uitvaart.<br />
          We leven verspreid.<br />
          We rouwen anders.<br />
          We herinneren persoonlijker.
        </p>
        <base-button href="#contact" label="Boek een demo" variant="soft" />
      </section>

      <section class="footer-links" aria-label="sitemap">
        <h3 class="footer-heading">Site map</h3>
        <a href="#top">Homepage</a>
        <a href="#over-ons">Over Ons</a>
        <a href="#features">Features</a>
        <a href="#faq">F.A.Q.</a>
        <a href="#contact">Contact</a>
      </section>

      <section class="footer-links" aria-label="legal">
        <h3 class="footer-heading">Legal</h3>
        <a href="#">Privacybeleid</a>
        <a href="#">Algemene Voorwaarden</a>

        <div class="social-row" aria-label="socials">
          <a href="#" aria-label="LinkedIn" class="social-icon">
            <Linkedin :size="22" :stroke-width="2.2" />
          </a>
          <a href="#" aria-label="Facebook" class="social-icon">
            <Facebook :size="22" :stroke-width="2.2" />
          </a>
          <a href="#" aria-label="Instagram" class="social-icon">
            <Instagram :size="22" :stroke-width="2.2" />
          </a>
        </div>
      </section>
    </div>
  </footer>
</template>

<script setup>
import { Facebook, Instagram, Linkedin } from 'lucide-vue-next';
import BaseButton from './base-button.vue';
import SiteLogo from './site-logo.vue';
</script>

<style scoped>
.site-footer {
  padding: var(--space-48) 0;
  background: linear-gradient(90deg, #fad1cf 0%, #eadae5 56%, #b3a4d5 100%);
}

.footer-grid {
  display: grid;
  grid-template-columns: 1.45fr 1fr 1fr;
  gap: var(--space-32);
}

.footer-brand {
  display: grid;
  gap: var(--space-16);
  align-content: start;
}

.footer-copy {
  margin: 0;
  color: var(--color-text);
  font-size: var(--fs-small);
  line-height: 1.35;
}

.footer-links {
  display: grid;
  align-content: start;
  gap: var(--space-8);
  color: var(--color-primary-deep);
  font-family: var(--font-ui);
  font-size: var(--fs-ui);
}

.footer-heading {
  margin: 0 0 var(--space-8);
  color: var(--color-text);
  font-family: var(--font-ui);
  font-size: var(--fs-ui);
  font-weight: 700;
}

.social-row {
  display: flex;
  gap: var(--space-16);
  margin-top: var(--space-24);
}

.social-icon {
  display: inline-grid;
  place-items: center;
  width: 1.75rem;
  height: 1.75rem;
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

@media (max-width: 64rem) {
  .footer-grid {
    grid-template-columns: 1fr 1fr;
  }

  .footer-brand {
    grid-column: 1 / -1;
  }
}

@media (max-width: 40rem) {
  .footer-grid {
    grid-template-columns: 1fr 1fr;
    gap: var(--space-24);
  }
}
</style>

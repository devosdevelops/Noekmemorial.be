<template>
  <site-header />

  <main class="terms-page">
    <section class="terms-hero" :style="heroStyle" aria-labelledby="terms-title" v-scroll-reveal>
      <div class="section-container terms-hero-inner" v-scroll-reveal="{ delay: 40 }">
        <p class="breadcrumb"><a href="/">Home</a> <span aria-hidden="true">&gt;</span> <span>Algemene voorwaarden</span></p>
        <h1 id="terms-title" class="terms-title">Algemene voorwaarden</h1>
        <p class="terms-last-updated">Laatst bijgewerkt: 5/03/2026</p>
      </div>
    </section>

    <section class="page-section terms-content-section" aria-label="Algemene voorwaarden inhoud" v-scroll-reveal>
      <div class="section-container terms-content">

        <div class="legal-block" v-scroll-reveal="{ delay: 20 }">
          <h2 class="legal-heading">1 Inleiding</h2>
          <p class="body-text">Welkom bij Noek.</p>
          <p class="body-text">
            Deze Algemene Voorwaarden regelen het gebruik van het Noek-platform en de bijhorende website. Door gebruik te maken van het platform ga je akkoord met deze voorwaarden.
          </p>
          <p class="body-text">
            Noek biedt een digitaal platform aan dat uitvaartondernemingen toelaat om nabestaanden een online herdenkingsruimte aan te bieden waar herinneringen kunnen worden gedeeld en bewaard.
          </p>
        </div>

        <div class="legal-block" v-scroll-reveal="{ delay: 20 }">
          <h2 class="legal-heading">2 Beschrijving van de dienst</h2>
          <p class="body-text">Noek biedt software waarmee uitvaartondernemingen digitale herdenkingsruimtes kunnen aanmaken. Binnen deze ruimtes kunnen gebruikers:</p>
          <ul class="legal-list">
            <li>Herinneringen delen</li>
            <li>Berichten of condoleances plaatsen</li>
            <li>Foto's of media uploaden</li>
            <li>Anderen uitnodigen om deel te nemen</li>
          </ul>
          <p class="body-text">Het platform wordt meestal aangeboden via een samenwerking met een uitvaartonderneming en kan als white-label oplossing verschijnen.</p>
        </div>

        <div class="legal-block" v-scroll-reveal="{ delay: 20 }">
          <h2 class="legal-heading">3 Toegang tot de dienst</h2>
          <p class="body-text">Om gebruik te maken van het platform moet je:</p>
          <ul class="legal-list">
            <li>Minstens 16 jaar oud zijn, of</li>
            <li>Toestemming hebben van een ouder of voogd.</li>
          </ul>
          <p class="body-text">Uitvaartondernemingen die een account aanmaken moeten bevoegd zijn om namens hun organisatie overeenkomsten aan te gaan.</p>
        </div>

        <div class="legal-block" v-scroll-reveal="{ delay: 20 }">
          <h2 class="legal-heading">4 Verantwoord gebruik</h2>
          <p class="body-text">Gebruikers verbinden zich ertoe het platform respectvol en op een passende manier te gebruiken. Het is niet toegestaan om:</p>
          <ul class="legal-list">
            <li>Beledigende of schadelijke inhoud te plaatsen</li>
            <li>Illegale inhoud te delen</li>
            <li>Zich voor te doen als iemand anders</li>
            <li>Auteursrechten te schenden</li>
            <li>Spam of ongewenste reclame te verspreiden</li>
            <li>Het platform technisch te verstoren</li>
          </ul>
          <p class="body-text">Gezien de gevoelige context van herdenken verwachten wij dat alle gebruikers respectvol omgaan met anderen.</p>
        </div>

        <div class="legal-block" v-scroll-reveal="{ delay: 20 }">
          <h2 class="legal-heading">5 Eigendom van inhoud</h2>
          <p class="body-text">Gebruikers blijven eigenaar van de inhoud die zij uploaden, zoals berichten, foto's of andere media.</p>
          <p class="body-text">Door inhoud te uploaden geven gebruikers Noek een beperkte licentie om deze inhoud op te slaan, te verwerken en te tonen binnen het platform om de dienst mogelijk te maken.</p>
        </div>

        <div class="legal-block" v-scroll-reveal="{ delay: 20 }">
          <h2 class="legal-heading">6 Inhoud van herdenkingsruimte</h2>
          <p class="body-text">Inhoud over overledenen moet respectvol worden gedeeld en waar nodig met toestemming van de familie.</p>
          <p class="body-text">Noek behoudt zich het recht voor om inhoud te verwijderen die in strijd is met deze voorwaarden.</p>
        </div>

        <div class="legal-block" v-scroll-reveal="{ delay: 20 }">
          <h2 class="legal-heading">7 Beschikbaarheid van het platform</h2>
          <p class="body-text">Wij streven ernaar het platform zo betrouwbaar mogelijk beschikbaar te houden. Toch kunnen wij niet garanderen dat de dienst altijd ononderbroken of foutloos werkt.</p>
          <p class="body-text">Wij behouden ons het recht voor om de dienst tijdelijk te onderbreken voor onderhoud, updates of technische verbeteringen.</p>
        </div>

        <div class="legal-block" v-scroll-reveal="{ delay: 20 }">
          <h2 class="legal-heading">8 Aansprakelijkheid</h2>
          <p class="body-text">Noek is niet aansprakelijk voor:</p>
          <ul class="legal-list">
            <li>Inhoud geplaatst door gebruikers</li>
            <li>Verlies van gegevens buiten onze redelijke controle</li>
            <li>Schade die voortvloeit uit het gebruik van het platform</li>
          </ul>
          <p class="body-text">Voor zover wettelijk toegestaan is de aansprakelijkheid van Noek beperkt tot het bedrag dat betaald werd voor het gebruik van de dienst.</p>
        </div>

        <div class="legal-block" v-scroll-reveal="{ delay: 20 }">
          <h2 class="legal-heading">9 Beëindiging van gebruik</h2>
          <p class="body-text">Wij behouden ons het recht voor om accounts of toegang tot het platform te beperken of te beëindigen wanneer deze voorwaarden worden geschonden.</p>
        </div>

        <div class="legal-block" v-scroll-reveal="{ delay: 20 }">
          <h2 class="legal-heading">10 Wijzigingen aan de voorwaarden</h2>
          <p class="body-text">Wij kunnen deze voorwaarden aanpassen wanneer dat nodig is. De meest recente versie zal altijd op de website beschikbaar zijn.</p>
        </div>

        <div class="legal-block" v-scroll-reveal="{ delay: 20 }">
          <h2 class="legal-heading">11 Toepasselijk recht</h2>
          <p class="body-text">Op deze voorwaarden is het recht van België van toepassing. Geschillen worden voorgelegd aan de bevoegde rechtbanken in België.</p>
        </div>

        <div class="legal-block" v-scroll-reveal="{ delay: 20 }">
          <h2 class="legal-heading">12 Contact</h2>
          <p class="body-text">Voor vragen over deze voorwaarden kan je contact opnemen via: <a class="legal-link" href="mailto:info@noek.be">info@noek.be</a></p>
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

const heroStyle = computed(() => ({
  '--terms-hero-image': `url(${assetPaths.images.faq})`
}));
</script>

<style scoped>
/* ─── Hero ─────────────────────────────────────────── */
.terms-hero {
  min-height: clamp(13rem, 22vw, 17.5rem);
  display: grid;
  align-items: end;
  padding: var(--space-40) var(--space-0);
  background:
    var(--terms-hero-image, none) right center / cover no-repeat,
    linear-gradient(120deg, var(--color-surface-soft) 0%, var(--color-surface-light) 100%);
}

.terms-hero-inner {
  display: grid;
  gap: 0;
  padding-bottom: var(--space-32);
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

.terms-title {
  margin: 0;
  margin-top: var(--space-4);
  color: var(--color-text);
  font-family: var(--font-ambella);
  font-size: var(--type-landing-h1-size);
  font-weight: var(--type-h1-weight);
  line-height: var(--type-landing-h1-line-height);
  letter-spacing: var(--type-h1-letter-spacing);
}

.terms-last-updated {
  margin: 0;
  margin-top: var(--space-32);
  color: var(--color-text);
  font-family: var(--font-outfit);
  font-size: var(--type-small-size);
  font-weight: var(--type-small-weight);
  line-height: var(--type-small-line-height);
}

/* ─── Content Section ───────────────────────────────── */
.terms-content-section {
  background: var(--color-page);
}

.terms-content {
  display: grid;
  gap: var(--space-48);
  padding-top: var(--space-48);
  padding-bottom: var(--space-80);
}

/* ─── Legal Blocks ──────────────────────────────────── */
.legal-block {
  display: grid;
  gap: var(--space-16);
}

.legal-heading {
  margin: 0;
  color: var(--color-primary-deep);
  font-family: var(--font-poppins);
  font-size: var(--type-h3-size);
  font-weight: 600;
  line-height: var(--type-h3-line-height);
  letter-spacing: var(--type-h3-letter-spacing);
}

.body-text {
  margin: 0;
  color: var(--color-text);
  font-family: var(--font-outfit);
  font-size: var(--type-body-size);
  font-weight: var(--type-body-weight);
  line-height: var(--type-body-line-height);
}

/* ─── Lists ─────────────────────────────────────────── */
.legal-list {
  margin: 0;
  padding: 0;
  padding-left: var(--space-16);
  display: grid;
  gap: var(--space-4);
  list-style: disc;
  color: var(--color-text);
  font-family: var(--font-outfit);
  font-size: var(--type-body-size);
  font-weight: var(--type-body-weight);
  line-height: var(--type-body-line-height);
}

/* ─── Links ─────────────────────────────────────────── */
.legal-link {
  color: var(--color-primary);
  text-decoration: underline;
  text-underline-offset: 0.2em;
  transition: color 300ms ease-out;
}

.legal-link:hover {
  color: var(--color-primary-deep);
}

/* ─── Mobile ────────────────────────────────────────── */
@media (max-width: 48rem) {
  .terms-hero {
    min-height: 10rem;
    padding: var(--space-24) var(--space-0);
  }

  .terms-hero-inner {
    gap: 0;
  }

  .breadcrumb {
    display: none;
  }

  .terms-content {
    gap: var(--space-40);
    padding-top: var(--space-40);
    padding-bottom: var(--space-64);
  }
}
</style>

<template>
  <site-header />

  <main class="privacy-page">
    <section class="privacy-hero" aria-labelledby="privacy-title" v-scroll-reveal>
      <div class="section-container privacy-hero-inner" v-scroll-reveal="{ delay: 40 }">
        <p class="breadcrumb"><a href="/">Home</a> <span aria-hidden="true">&gt;</span> <span>Privacybeleid</span></p>
        <h1 id="privacy-title" class="privacy-title">Privacybeleid</h1>
        <p class="privacy-last-updated">Laatst bijgewerkt: 5/03/2026</p>
      </div>

      <div class="privacy-hero-art" aria-hidden="true">
        <img src="/assets/graphics/chrysant.svg" alt="" />
      </div>
    </section>

    <section class="privacy-stack" aria-label="Privacybeleid inhoud">
      <section class="page-section legal-section" aria-label="Privacybeleid hoofdstukken">
        <div class="section-container privacy-content">
          <div class="legal-block" v-scroll-reveal="{ delay: 20 }">
            <h2 class="legal-heading">1 Inleiding</h2>
            <p class="body-text">
              Noek hecht veel belang aan de bescherming van persoonsgegevens. In dit privacybeleid leggen we uit welke
              gegevens we verzamelen, waarom we dat doen en hoe we deze beschermen wanneer je gebruik maakt van het
              Noek-platform of onze website bezoekt.
            </p>
            <p class="body-text">
              Noek biedt een digitaal platform aan dat uitvaartondernemingen toelaat om nabestaanden een online
              herdenkingsruimte aan te bieden. In deze ruimtes kunnen herinneringen, berichten en media rond een
              overledene worden gedeeld en bewaard.
            </p>
          </div>

          <div class="legal-block" v-scroll-reveal="{ delay: 20 }">
            <h2 class="legal-heading">2 Verantwoordelijke voor de verwerking</h2>
            <p class="body-text">De verantwoordelijke voor de verwerking van persoonsgegevens via het Noek-platform is:</p>
            <address class="legal-address">
              Noek<br />
              Zandpoortvest 60<br />
              2800 Mechelen, Belgie<br />
              <a href="mailto:info@noek.be">info@noek.be</a>
            </address>
          </div>

          <div class="legal-block" v-scroll-reveal="{ delay: 20 }">
            <h2 class="legal-heading">3 Welke persoonsgegevens wij verzamelen</h2>
            <p class="body-text">Afhankelijk van hoe het platform gebruikt wordt, kunnen wij de volgende soorten persoonsgegevens verzamelen:</p>

            <div class="legal-sub-group">
              <p class="legal-sub-heading">Accountgegevens</p>
              <ul class="legal-list">
                <li>Naam</li>
                <li>E-mailadres</li>
                <li>Organisatie (bij uitvaartondernemers)</li>
                <li>Inloggegevens</li>
              </ul>
            </div>

            <div class="legal-sub-group">
              <p class="legal-sub-heading">Inhoud binnen het platform</p>
              <ul class="legal-list">
                <li>Berichten of herinneringen die worden geplaatst</li>
                <li>Foto's, video's of andere geuploade media</li>
                <li>Naam van de overledene</li>
              </ul>
            </div>

            <div class="legal-sub-group">
              <p class="legal-sub-heading">Technische gegevens</p>
              <ul class="legal-list">
                <li>IP-adres</li>
                <li>Browser informatie</li>
                <li>Apparateninformatie</li>
                <li>Gebruiksgegevens van het platform</li>
              </ul>
            </div>

            <div class="legal-sub-group">
              <p class="legal-sub-heading">Communicatiegegevens</p>
              <ul class="legal-list">
                <li>Berichten die naar onze support worden gestuurd</li>
                <li>Contactaanvragen via de website</li>
              </ul>
            </div>
          </div>

          <div class="legal-block" v-scroll-reveal="{ delay: 20 }">
            <h2 class="legal-heading">4 Waarom wij persoonsgegevens verwerken</h2>
            <p class="body-text">Wij verwerken persoonsgegevens voor de volgende doeleinden:</p>

            <div class="legal-sub-group">
              <p class="legal-sub-heading">Dienstverlening</p>
              <p class="body-text">Om accounts en herdenkingsruimtes aan te maken en te beheren.</p>
            </div>

            <div class="legal-sub-group">
              <p class="legal-sub-heading">Platformfunctionaliteit</p>
              <p class="body-text">Om gebruikers toe te laten herinneringen, berichten en media te delen.</p>
            </div>

            <div class="legal-sub-group">
              <p class="legal-sub-heading">Communicatie</p>
              <p class="body-text">Om vragen te beantwoorden, ondersteuning te bieden en contact te onderhouden met partners.</p>
            </div>

            <div class="legal-sub-group">
              <p class="legal-sub-heading">Beveiliging</p>
              <p class="body-text">Om misbruik, fraude en beveiligingsproblemen te voorkomen.</p>
            </div>

            <div class="legal-sub-group">
              <p class="legal-sub-heading">Verbetering van de dienst</p>
              <p class="body-text">Om het platform te analyseren en te verbeteren.</p>
            </div>

            <div class="legal-sub-group">
              <p class="legal-sub-heading">Wettelijke verplichtingen</p>
              <p class="body-text">Om te voldoen aan toepasselijke wetgeving.</p>
            </div>
          </div>

          <div class="legal-block" v-scroll-reveal="{ delay: 20 }">
            <h2 class="legal-heading">5 Rechtsgrond voor verwerking</h2>
            <p class="body-text">Volgens de Algemene Verordening Gegevensbescherming (GDPR) verwerken wij persoonsgegevens op basis van:</p>
            <ul class="legal-list">
              <li>Uitvoering van een overeenkomst</li>
              <li>Gerechtvaardigd belang</li>
              <li>Wettelijke verplichtingen</li>
              <li>Toestemming (waar nodig)</li>
            </ul>
          </div>

          <div class="legal-block" v-scroll-reveal="{ delay: 20 }">
            <h2 class="legal-heading">6 Opslag en hosting</h2>
            <p class="body-text">
              Het Noek-platform wordt gehost binnen de Europese Unie om te voldoen aan de GDPR-wetgeving.
              Persoonsgegevens worden enkel bewaard zolang dit nodig is voor het aanbieden van de dienst of om te
              voldoen aan wettelijke verplichtingen.
            </p>
            <p class="body-text">
              Herdenkingsinhoud kan langdurig worden bewaard om het doel van digitale herinneringsruimtes te ondersteunen.
            </p>
          </div>

          <div class="legal-block" v-scroll-reveal="{ delay: 20 }">
            <h2 class="legal-heading">7 Delen van gegevens</h2>
            <p class="body-text">Wij verkopen geen persoonsgegevens.</p>
            <p class="body-text">Persoonsgegevens kunnen gedeeld worden met:</p>

            <div class="legal-sub-group">
              <p class="legal-sub-heading">Technologische dienstverleners</p>
              <p class="body-text">Voor hosting, infrastructuur en technische ondersteuning.</p>
            </div>

            <div class="legal-sub-group">
              <p class="legal-sub-heading">Uitvaartondernemingen</p>
              <p class="body-text">Wanneer het platform wordt gebruikt via een uitvaartondernemer.</p>
            </div>

            <div class="legal-sub-group">
              <p class="legal-sub-heading">Overheidsinstanties</p>
              <p class="body-text">Indien wij wettelijk verplicht zijn gegevens te delen.</p>
            </div>

            <p class="body-text">Alle partners zijn verplicht persoonsgegevens veilig en conform GDPR te verwerken.</p>
          </div>

          <div class="legal-block" v-scroll-reveal="{ delay: 20 }">
            <h2 class="legal-heading">8 Beveiliging van gegevens</h2>
            <p class="body-text">Wij nemen passende technische en organisatorische maatregelen om persoonsgegevens te beschermen, waaronder:</p>
            <ul class="legal-list">
              <li>Beveiligde cloudinfrastructuur</li>
              <li>Toegangscontrole</li>
              <li>Versleuteling waar mogelijk</li>
            </ul>
            <p class="body-text">Ondanks deze maatregelen kan geen enkel systeem volledige veiligheid garanderen.</p>
          </div>

          <div class="legal-block" v-scroll-reveal="{ delay: 20 }">
            <h2 class="legal-heading">9 Rechten van gebruikers</h2>
            <p class="body-text">Volgens de GDPR heb je recht om:</p>
            <ul class="legal-list">
              <li>Inzage te krijgen in je persoonsgegevens</li>
              <li>Onjuiste gegevens te laten corrigeren</li>
              <li>Je gegevens te laten verwijderen</li>
              <li>Verwerking te beperken</li>
              <li>Bezwaar te maken tegen verwerking</li>
              <li>Je gegevens over te dragen</li>
            </ul>
            <p class="body-text">Je kan deze rechten uitoefenen via: <a class="legal-link" href="mailto:info@noek.be">info@noek.be</a></p>
          </div>

          <div class="legal-block" v-scroll-reveal="{ delay: 20 }">
            <h2 class="legal-heading">10 Cookies</h2>
            <p class="body-text">
              Onze website kan cookies of gelijkaardige technologieen gebruiken om de werking van de website te
              verbeteren en het gebruik te analyseren.
            </p>
          </div>

          <div class="legal-block" v-scroll-reveal="{ delay: 20 }">
            <h2 class="legal-heading">11 Privacy van minderjarigen</h2>
            <p class="body-text">
              Het platform is niet bedoeld voor kinderen jonger dan 16 jaar zonder toestemming van een ouder of voogd.
            </p>
          </div>

          <div class="legal-block" v-scroll-reveal="{ delay: 20 }">
            <h2 class="legal-heading">12 Wijzigingen aan dit privacybeleid</h2>
            <p class="body-text">
              Wij kunnen dit privacybeleid van tijd tot tijd aanpassen. De meest recente versie zal altijd op deze
              pagina beschikbaar zijn.
            </p>
          </div>

          <div class="legal-block" v-scroll-reveal="{ delay: 20 }">
            <h2 class="legal-heading">13 Contact</h2>
            <p class="body-text">
              Voor vragen over dit privacybeleid kan je contact opnemen via:
              <a class="legal-link" href="mailto:info@noek.be">info@noek.be</a>
            </p>
          </div>
        </div>
      </section>
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
.privacy-hero {
  min-height: clamp(15rem, 26vw, 20rem);
  display: grid;
  align-items: center;
  padding: var(--space-56) 0 var(--space-32);
  position: relative;
  overflow: visible;
}

.privacy-hero-inner {
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
  font-size: var(--type-small-size);
  font-weight: 500;
  line-height: var(--type-small-line-height);
}

.breadcrumb a {
  display: inline-flex;
  align-items: center;
  min-height: 2rem;
}

.privacy-title {
  margin: 0;
  color: var(--color-primary-deep);
  font-family: var(--font-brand);
  font-size: var(--type-landing-h1-size);
  font-weight: var(--type-h1-weight);
  line-height: var(--type-landing-h1-line-height);
  letter-spacing: 0.02em;
}

.privacy-last-updated {
  margin: 0;
  color: var(--color-text);
  font-family: var(--font-poppins);
  font-size: var(--type-small-size);
  line-height: var(--type-small-line-height);
}

.privacy-hero-art {
  position: absolute;
  right: min(-20rem, -15vw);
  top: 53%;
  transform: translateY(-50%);
  width: min(56vw, 50rem);
  z-index: 0;
  pointer-events: none;
}

.privacy-hero-art img {
  width: 100%;
  height: auto;
  object-fit: contain;
  opacity: 0.25;
}

.privacy-stack {
  width: min(100% - 2 * var(--page-gutter), var(--container-max));
  margin: var(--space-48) auto var(--space-80);
  background: var(--color-surface-light);
  border-radius: var(--radius-48);
  padding: var(--space-32) 0;
  box-shadow: 0 30px 60px rgba(73, 55, 108, 0.12);
  position: relative;
  z-index: 2;
}

.privacy-stack .page-section {
  padding: var(--space-40) 0;
}

.privacy-stack .page-section:first-child {
  padding-top: var(--space-48);
}

.privacy-stack .page-section:last-child {
  padding-bottom: var(--space-48);
}

.privacy-content {
  display: grid;
  gap: var(--space-40);
}

.legal-block {
  display: grid;
  gap: var(--space-16);
}

.legal-heading {
  margin: 0;
  color: var(--color-primary-deep);
  font-family: var(--font-brand);
  font-size: var(--type-h3-size);
  font-weight: 600;
  line-height: var(--type-h3-line-height);
}

.body-text {
  margin: 0;
  color: var(--color-text);
  font-family: var(--font-poppins);
  font-size: var(--type-body-size);
  font-weight: var(--type-body-weight);
  line-height: var(--type-body-line-height);
}

.legal-sub-group {
  display: grid;
  gap: var(--space-8);
  padding-left: var(--space-16);
  border-left: 2px solid rgba(110, 75, 216, 0.2);
}

.legal-sub-heading {
  margin: 0;
  color: var(--color-text);
  font-family: var(--font-brand);
  font-size: var(--type-body-size);
  font-weight: 600;
  line-height: var(--type-body-line-height);
}

.legal-list {
  margin: 0;
  padding-left: var(--space-16);
  display: grid;
  gap: var(--space-4);
  color: var(--color-text);
  font-family: var(--font-poppins);
  font-size: var(--type-body-size);
  font-weight: var(--type-body-weight);
  line-height: var(--type-body-line-height);
}

.legal-address {
  font-style: normal;
  color: var(--color-text);
  font-family: var(--font-poppins);
  font-size: var(--type-body-size);
  line-height: 1.8;
}

.legal-address a,
.legal-link {
  color: var(--color-primary);
  text-decoration: underline;
  text-underline-offset: 0.2em;
}

@media (max-width: 48rem) {
  .privacy-hero {
    min-height: 11.5rem;
    padding: var(--space-32) 0 var(--space-24);
  }

  .privacy-hero-inner {
    gap: var(--space-8);
  }

  .breadcrumb {
    display: none;
  }

  .privacy-hero-art {
    right: -36%;
    top: 58%;
    width: min(28rem, 90vw);
  }

  .privacy-stack {
    margin: 24px var(--page-gutter) var(--space-64);
    width: auto;
    border-radius: var(--radius-48);
    padding: 24px;
  }

  .privacy-stack .section-container {
    width: 100%;
    padding-inline: 0;
  }

  .privacy-stack .page-section {
    padding: 24px 0;
  }

  .privacy-stack .page-section:first-child {
    padding-top: 0;
  }

  .privacy-stack .page-section:last-child {
    padding-bottom: 24px;
  }

  .privacy-content {
    gap: var(--space-32);
  }
}
</style>

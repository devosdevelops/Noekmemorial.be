<template>
  <div v-if="isOpen" class="consent-backdrop" role="dialog" aria-modal="true" aria-labelledby="consent-title">
    <div class="consent-card">
      <h2 id="consent-title" class="consent-title">Cookievoorkeuren</h2>
      <p class="consent-text">
        We gebruiken enkel essentiele cookies om de site correct te laten werken. Voor analytische cookies vragen we je
        toestemming zodat we het platform kunnen verbeteren.
      </p>
      <div class="consent-actions">
        <button class="consent-button primary" type="button" @click="acceptAll">Accepteer alles</button>
        <button class="consent-button ghost" type="button" @click="acceptEssential">Alleen essentieel</button>
      </div>
      <p class="consent-note">
        Je kan je keuze later aanpassen via &quot;Cookievoorkeuren&quot; in de footer.
      </p>
    </div>
  </div>
</template>

<script setup>
import { onBeforeUnmount, onMounted, ref, watch } from 'vue';
import {
  CONSENT_STATUS,
  getConsentStatus,
  initConsent,
  onConsentManagerOpen,
  setConsentStatus
} from '../utils/consent';
import { lockPageScroll, unlockPageScroll } from '../utils/scroll-lock';

const isOpen = ref(false);
let removeOpenListener;
const CONSENT_SCROLL_LOCK_ID = 'consent-banner';

const openBanner = () => {
  isOpen.value = true;
};

const closeBanner = () => {
  isOpen.value = false;
};

const syncInitialState = () => {
  const status = getConsentStatus();
  if (status === CONSENT_STATUS.UNKNOWN) {
    openBanner();
  }
};

const acceptAll = () => {
  setConsentStatus(CONSENT_STATUS.ALL);
  closeBanner();
};

const acceptEssential = () => {
  setConsentStatus(CONSENT_STATUS.ESSENTIAL);
  closeBanner();
};

onMounted(() => {
  initConsent();
  syncInitialState();
  removeOpenListener = onConsentManagerOpen(() => {
    openBanner();
  });
});

watch(isOpen, (open) => {
  if (open) {
    lockPageScroll(CONSENT_SCROLL_LOCK_ID);
    return;
  }

  unlockPageScroll(CONSENT_SCROLL_LOCK_ID);
});

onBeforeUnmount(() => {
  unlockPageScroll(CONSENT_SCROLL_LOCK_ID);
  if (removeOpenListener) {
    removeOpenListener();
  }
});
</script>

<style scoped>
.consent-backdrop {
  position: fixed;
  inset: 0;
  background: rgba(28, 20, 47, 0.5);
  display: flex;
  align-items: flex-end;
  justify-content: center;
  padding: 24px;
  z-index: 2000;
}

.consent-card {
  width: min(100%, 720px);
  max-height: calc(100dvh - 48px);
  overflow-y: auto;
  background: #fefbec;
  color: #2b243c;
  border-radius: 24px;
  padding: 24px;
  box-shadow: 0 24px 48px rgba(18, 13, 32, 0.3);
  display: grid;
  gap: 16px;
}

.consent-title {
  margin: 0;
  font-family: var(--font-brand);
  font-size: clamp(1.1rem, 1rem + 0.6vw, 1.5rem);
  color: #3c2f56;
}

.consent-text,
.consent-note {
  margin: 0;
  font-family: var(--font-poppins);
  font-size: 0.98rem;
  line-height: 1.6;
}

.consent-actions {
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
}

.consent-button {
  border-radius: 999px;
  border: none;
  padding: 0.65rem 1.5rem;
  font-family: var(--font-poppins);
  font-weight: 600;
  cursor: pointer;
  transition: transform 200ms ease, box-shadow 200ms ease;
}

.consent-button.primary {
  background: #4b3a6c;
  color: #fefbec;
  box-shadow: 0 12px 24px rgba(60, 47, 86, 0.25);
}

.consent-button.primary:hover {
  transform: translateY(-1px);
}

.consent-button.ghost {
  background: rgba(75, 58, 108, 0.08);
  color: #4b3a6c;
}

@media (max-width: 40rem) {
  .consent-backdrop {
    align-items: center;
  }

  .consent-card {
    padding: 20px;
  }
}
</style>

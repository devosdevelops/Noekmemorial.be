const VARIANT_KEY = 'cta_text_variant';
const VARIANT_A = 'A';
const VARIANT_B = 'B';
const CTA_LABELS = {
  [VARIANT_A]: 'Toon mijn interesse',
  [VARIANT_B]: 'Hou me op de hoogte'
};

const isClient = typeof window !== 'undefined';
let cachedVariant = null;

const readStoredVariant = () => {
  if (!isClient) {
    return null;
  }

  try {
    return window.localStorage.getItem(VARIANT_KEY);
  } catch {
    return null;
  }
};

const storeVariant = (variant) => {
  if (!isClient) {
    return;
  }

  try {
    window.localStorage.setItem(VARIANT_KEY, variant);
  } catch {
    // Ignore storage errors so CTA still renders.
  }
};

const chooseVariant = () => (Math.random() < 0.5 ? VARIANT_A : VARIANT_B);

export const getCtaTextVariant = () => {
  if (cachedVariant) {
    return cachedVariant;
  }

  if (!isClient) {
    cachedVariant = VARIANT_A;
    return cachedVariant;
  }

  let variant = readStoredVariant();
  if (variant !== VARIANT_A && variant !== VARIANT_B) {
    variant = chooseVariant();
    storeVariant(variant);
  }

  cachedVariant = variant;
  return cachedVariant;
};

export const getCtaTextLabel = () => CTA_LABELS[getCtaTextVariant()] || CTA_LABELS[VARIANT_A];

export const pushCtaVariantToDataLayer = () => {
  if (!isClient) {
    return;
  }

  const variant = getCtaTextVariant();
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({
    event: 'cta_variant_assigned',
    cta_text_variant: variant
  });
};
